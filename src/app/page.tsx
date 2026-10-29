import StudentCard from "@/components/customui/StudentCard";
import prisma from "@/lib/dbClient/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Student Teacher CRUD App",
  description:
    "A CRUD application built with Next.js, TypeScript, and Tailwind CSS for managing student and teacher data.",
};

const page = async () => {
  const allDetails = await prisma.studentTable.findMany({
    include: {
      teacherTable: true,
    },
  });
  return (
    <section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
      {allDetails.map((student) => (
        <StudentCard
          key={student.sId}
          student={student}
        />
      ))}
    </section>
  );
};

export default page;
