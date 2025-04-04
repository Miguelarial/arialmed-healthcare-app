import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import PasskeyModal  from "@/components/PasskeyModal";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <main className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="Logo"
            className="mb-12 h-[var(--logo-height)] w-auto"
            priority
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between pb-12">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Arialmed</p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="Trusted doctor"
        className="side-img max-w-[50%]"
      />
    </main>
  );
}