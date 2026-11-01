"use client";

import { studentFormSchema, StudentFormType } from "@/lib/zodSchema";
import editStudent from "@/server/editStudent";
import { StudentTable, TeacherTable } from "@generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, TrashIcon, UserCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { CardContent, CardFooter } from "../shadcnui/card";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";
import { toast } from "../shadcnui/toast";

type EditStudentFormProps = {
  studata: StudentTable;
  teachersInfo: TeacherTable[];
};

const EditStudentForm = ({ studata, teachersInfo }: EditStudentFormProps) => {
  const { push } = useRouter();
  const teacherItems = teachersInfo.map(({ tId, tFullName, tSubject }) => ({
    value: tId,
    label: `${tFullName} (${tSubject})`,
  }));

  const {
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isSubmitting },
  } = useForm<StudentFormType>({
    resolver: zodResolver(studentFormSchema),

    defaultValues: {
      sFullName: studata.sFullName,
      sEmail: studata.sEmail,
      sGender: studata.sGender,
      sPhoneNumber: studata.sPhoneNumber,
      teacherTableTId: studata.teacherTableTId,
    },
    mode: "all",
  });

  const editStudentHandler = async (newData: StudentFormType) => {
    const { isSuccess, message } = await editStudent(newData, studata.sId);

    if (isSuccess) {
      toast.add({
        type: "success",
        description: message,
      });

      push("/");
    } else {
      toast.add({
        type: "error",
        description: message,
      });
    }
  };

  const clearStudentForm = () => {
    reset({
      sFullName: studata.sFullName,
      sEmail: studata.sEmail,
      sGender: studata.sGender,
      sPhoneNumber: studata.sPhoneNumber,
      teacherTableTId: studata.teacherTableTId,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(editStudentHandler)}
      noValidate
      className="grid grid-cols-1 gap-5">
      <CardContent>
        <Controller
          name="sFullName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Student Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Student full name"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="sEmail"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email Address"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="sGender"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Gender</FieldLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}>
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="w-full">
                  <SelectValue placeholder="Select Your Gender" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="sPhoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="tel"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Phone Number"
                autoComplete="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Teacher Selection */}
        <Controller
          name="teacherTableTId"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Choose Your Teacher</FieldLabel>

              <Select
                items={teacherItems}
                value={field.value}
                onValueChange={field.onChange}>
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="w-full">
                  <SelectValue placeholder="Select Your Teacher" />
                </SelectTrigger>

                <SelectContent>
                  {teacherItems.map(({ value, label }) => (
                    <SelectItem
                      key={value}
                      value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3">
        <Button
          onClick={clearStudentForm}
          disabled={!isDirty || isSubmitting}
          type="button"
          variant="destructive">
          Clear <TrashIcon />
        </Button>
        <Button
          disabled={!isDirty || isSubmitting}
          variant="outline"
          type="submit">
          {isSubmitting ?
            <>
              <Loader2Icon className="animate-spin" /> Submitting..
            </>
          : <>
              Submit <UserCheckIcon />
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default EditStudentForm;
