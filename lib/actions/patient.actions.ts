"use server";

import { ID, Query, InputFile } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";


export const createUser = async (user: CreateUserParams) => {
  try {
    console.log('Attempting to create user:', { email: user.email });
    
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    if (!newuser || !newuser.$id) {
      throw new Error('Failed to create user: Invalid response');
    }

    console.log('User created successfully:', newuser.$id);
    return parseStringify(newuser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      console.log('User already exists, fetching existing user');
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      if (!existingUser || existingUser.users.length === 0) {
        throw new Error('Failed to fetch existing user');
      }

      return existingUser.users[0];
    }
    
    console.error("Error creating user:", {
      code: error.code,
      message: error.message,
      details: error.response || error
    });
    
    throw error; 
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBuffer(
          Buffer.from(await (identificationDocument.get("blobFile") as File).arrayBuffer()),
          identificationDocument.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};


export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};