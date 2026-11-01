import {
  FaceGrinningIcon,
  FaceSlightlyFrowningIcon,
  GraduationCapIcon,
  RocketIcon,
  UserRoundPlusIcon,
  XIcon,
} from "lucide-react";

import StudentCard from "@/components/customui/StudentCard";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shadcnui/alert-dialog";
import { Button } from "@/components/shadcnui/button";

import { Separator } from "@/components/shadcnui/separator";
import prisma from "@/lib/dbClient/prisma";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Student Teacher CRUD App",
  description:
    "A CRUD application built with Next.js, TypeScript, and Tailwind CSS for managing student and teacher data.",
};

const Page = async () => {
  const allDetails = await prisma.studentTable.findMany({
    include: {
      teacherTable: true,
    },
  });

  if (allDetails.length === 0) {
    return (
      <section className="grid min-h-[70dvh] place-items-center px-4">
        <div className="flex max-w-md flex-col items-center gap-6 text-center">
          <FaceSlightlyFrowningIcon className="size-20 text-yellow-500" />

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Your classroom starts here!
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              No students have been added yet. Get started by creating your
              first student or adding a teacher. Lets build something great
              together!
            </p>
          </div>

          {/* Create Student / Teacher Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline">
                  Create Your First Profile{" "}
                  <RocketIcon className="size-5 text-green-500" />
                </Button>
              }
            />

            <AlertDialogContent size="sm">
              <AlertDialogCancel
                aria-label="Close"
                className="absolute top-4 right-4 size-8 border-0 bg-transparent p-0 shadow-none">
                <XIcon className="size-4" />
                <span className="sr-only">Close</span>
              </AlertDialogCancel>

              <AlertDialogHeader>
                <AlertDialogMedia>
                  <FaceGrinningIcon />
                </AlertDialogMedia>

                <AlertDialogTitle>
                  What would you like to create?
                </AlertDialogTitle>

                <AlertDialogDescription>
                  Choose where you want to start. Add your first student or
                  create a teacher profile to get your classroom organized.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <Separator />

              <AlertDialogFooter className="grid w-full grid-cols-2">
                <Link
                  href="/student/create"
                  className="w-full">
                  <Button
                    variant="outline"
                    className="w-full">
                    <span className="flex items-center gap-2">
                      <UserRoundPlusIcon className="size-4" />
                      Student
                    </span>
                  </Button>
                </Link>

                <Link
                  href="/teacher/create"
                  className="w-full">
                  <Button
                    variant="outline"
                    className="w-full">
                    <span className="flex items-center gap-2">
                      <GraduationCapIcon className="size-4" />
                      Teacher
                    </span>
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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

export default Page;
