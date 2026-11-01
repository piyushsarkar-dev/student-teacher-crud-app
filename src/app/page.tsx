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

  if (allDetails.length === 0) {
    return (
      <section className="grid h-[80dvh] place-items-center text-center">
        <div className="space-y-3">
          <p className="text-muted-foreground text-lg">No students found.</p>
          <Link
            href="/student/create"
            className="text-primary underline underline-offset-4">
            Add a student
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 place-items-center gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
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
