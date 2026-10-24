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
      <section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
        <StudentCard />
      </section>
    </>
  );
};

export default page;
