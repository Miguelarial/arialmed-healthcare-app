"use client"

import { ColumnDef } from "@tanstack/react-table"
import { StatusBadge } from "../StatusBadge"
import { formatDateTime } from "@/lib/utils"
import Image from "next/image"
import { Doctors } from "@/constants"
import AppointmentModal from "../AppointmentModal"
import { Appointment } from "@/types/appwrite.types"

export const columns: ColumnDef<Appointment>[] = [
    {
        header: "ID",
        cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>
    },
    {
        accessorKey: "patient",
        header: "Patient",
        cell: ({ row }) => {
            const patientName = row.original.patient?.name || 'No patient name';
            return <p className="text-14-medium">{patientName}</p>
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const appointment = row.original;

            return (
                <div className="min-w-[115px]">
                    <StatusBadge status={appointment.status} />
                </div>
            )
        }
    },
    {
        accessorKey: "schedule",
        header: "Appointment",
        cell: ({ row }) => (
            <p className="text-14-regular">
                {formatDateTime(row.original.schedule).dateTime}
            </p>
        )
    },
    {
        accessorKey: "primaryPhysician",
        header: "Doctor",
        cell: ({ row }) => {
            const appointment = row.original;

            const doctor = Doctors.find(
                (doctor) => doctor.name === appointment.primaryPhysician
            );

            return (
                <div className="flex items-center gap-3">
                    <Image
                        src={doctor?.image!}
                        alt="doctor"
                        width={100}
                        height={100}
                        className="size-8"
                    />
                    <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: () => <div className="pl-4">Actions</div>,
        cell: ({ row: { original: data } }) => {
            if (!data.patient?.$id) {
                return <p>No patient data</p>;
            }

            return (
                <div className="flex gap-1">
                    <AppointmentModal
                        type="schedule"
                        patientId={data.patient.$id}
                        userId={data.userId}
                        appointment={data}
                        title="Schedule Appointment"
                        description="Please confirm the following details to schedule"
                    />
                    <AppointmentModal
                        type="cancel"
                        patientId={data.patient.$id}
                        userId={data.userId}
                        appointment={data}
                        title="Cancel Appointment"
                        description="Are you sure you want to cancel this appointment?"
                    />
                </div>
            )
        },
    },
]