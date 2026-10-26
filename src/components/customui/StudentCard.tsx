import { GraduationCap, Mail, MarsIcon, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const StudentCard = () => {
  return (
    <Card className="w-full max-w-[410px] gap-0 overflow-hidden rounded-2xl p-0">
      {/* Header */}
      <CardHeader className="border-b px-5 py-5 text-center">
        <CardTitle className="text-3xl font-semibold tracking-tight">
          Ms. Sudeva Das
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4 px-5 py-5">
        {/* Email */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
            <Mail className="size-5" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground text-xs">Email</p>
            <p className="truncate text-sm font-medium">
              Sudeva.Asan@gmail.com
            </p>
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
              <p className="truncate text-sm font-medium">+91 9876543200</p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border">
              <MarsIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Gender</p>
              <p className="text-sm font-medium">Male</p>
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
              <p className="truncate text-sm font-medium">Piyush Kapoor</p>
            </div>
          </div>

          <span className="shrink-0 rounded-md border px-2.5 py-1 text-xs font-medium">
            Math
          </span>
        </div>
      </CardContent>

      {/* Footer Actions */}
      <CardFooter className="flex grid grid-cols-2 gap-3 border-t px-5 py-4">
        <DeleteButton />
        <EditButton />
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
