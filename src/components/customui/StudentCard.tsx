"use client";

import {
  GraduationCap,
  Mail,
  MarsIcon,
  PenIcon,
  Phone,
  TrashIcon,
} from "lucide-react";

import { Button } from "@/components/shadcnui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Prisma } from "@generated/prisma/client";

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
  return (
    <Card className="w-full gap-0 overflow-hidden rounded-2xl p-0">
      <CardHeader className="border-b px-5 py-5 text-center">
        <CardTitle className="text-3xl font-semibold tracking-tight">
          {sFullName}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 px-5 py-5">
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
              <MarsIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Gender</p>
              <p className="text-sm font-medium">{sGender}</p>
            </div>
          </div>
        </div>

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
        <Button variant="destructive">
          <TrashIcon />
          Delete
        </Button>
        <Button variant="outline">
          <PenIcon />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
