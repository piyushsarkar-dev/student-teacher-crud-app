"use client";

import {
  GraduationCap,
  Mail,
  MarsIcon,
  PenIcon,
  Phone,
  TransgenderIcon,
  Trash2Icon,
  VenusIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import type { Prisma } from "@generated/prisma/client";

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
} from "../shadcnui/alert-dialog";

import Link from "next/link";
import { Button } from "../shadcnui/button";
import DeleteButton from "./DeleteButton";

type StudentCardProps = {
  student: Prisma.StudentTableGetPayload<{
    include: {
      teacherTable: true;
    };
  }>;
};

const StudentCard = ({ student }: StudentCardProps) => {
  const {
    sId,
    sFullName,
    sEmail,
    sPhoneNumber,
    sGender,
    teacherTable: { tFullName, tSubject },
  } = student;

  const gender = sGender.trim().toLowerCase();

  return (
    <Card className="w-full gap-0 overflow-hidden rounded-2xl p-0">
      <CardHeader className="border-b px-5 py-5 text-center">
        <CardTitle className="text-3xl font-semibold tracking-tight">
          {gender === "male" ?
            "Mr."
          : gender === "female" ?
            "Ms."
          : null}{" "}
          {sFullName}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 px-5 py-5">
        {/* Email */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
            <Mail className="size-5" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground text-xs">Email</p>
            <p className="truncate text-sm font-medium">{sEmail}</p>
          </div>
        </div>

        {/* Phone and Gender */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Phone */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
              <Phone className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="text-muted-foreground text-xs">Phone</p>
              <p className="truncate text-sm font-medium">+91 {sPhoneNumber}</p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
              {gender === "male" && <MarsIcon className="size-5" />}
              {gender === "female" && <VenusIcon className="size-5" />}
              {gender === "others" && <TransgenderIcon className="size-5" />}
            </div>

            <div className="min-w-0">
              <p className="text-muted-foreground text-xs">Gender</p>
              <p className="text-sm font-medium capitalize">{gender}</p>
            </div>
          </div>
        </div>

        {/* Teacher */}
        <div className="flex items-center justify-between gap-3 rounded-xl border p-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
              <GraduationCap className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="text-muted-foreground text-xs">Teacher</p>
              <p className="truncate text-sm font-medium">{tFullName}</p>
            </div>
          </div>

          <span className="shrink-0 rounded-md border px-2.5 py-1 text-xs font-medium">
            {tSubject}
          </span>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 border-t px-5 py-4">
        {/* Delete Confirmation Dialog */}
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button variant="destructive">
                Delete <Trash2Icon />
              </Button>
            }
          />

          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                <Trash2Icon />
              </AlertDialogMedia>

              <AlertDialogTitle>Delete student?</AlertDialogTitle>

              <AlertDialogDescription>
                Are you sure you want to delete this student? This action cannot
                be undone. The student record will be permanently deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
              <DeleteButton sId={sId} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Edit Confirmation Dialog */}
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button variant="outline">
                Edit Details <PenIcon />
              </Button>
            }
          />
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia>
                <PenIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Edit student details?</AlertDialogTitle>

              <AlertDialogDescription>
                Update this student&apos;s information. You can update their
                personal details.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link href={`/student/${sId}`} className="contents">
                <Button className="w-full">Edit</Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
