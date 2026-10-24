import StudentCard from "@/components/customui/StudentCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Student Teacher CRUD App",
  description:
    "A CRUD application built with Next.js, TypeScript, and Tailwind CSS for managing student and teacher data.",
};

const page = () => {
  return (
    <>
      <section className="grid h-dvh place-items-center">
        <StudentCard />
      </section>
    </>
  );
};

export default page;
