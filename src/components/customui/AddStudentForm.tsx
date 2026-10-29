"use client";

import { studentFormSchema, StudentFormType } from "@/lib/zodSchema";
import createStudent from "@/server/createStudent";
import { TeacherTable } from "@generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon, UserCheckIcon } from "lucide-react";
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

type StudentFormProps = {
  teacherInfo: TeacherTable[];
};

const AddStudentForm = ({ teacherInfo }: StudentFormProps) => {
  const { push } = useRouter();

  const teacherItems = teacherInfo.map(({ tId, tFullName, tSubject }) => ({
    value: tId,
    label: `${tFullName} (${tSubject})`,
  }));

  const { handleSubmit, control, reset } = useForm<StudentFormType>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      sFullName: "",
      sEmail: "",
      sGender: "",
      sPhoneNumber: "",
      teacherTableTId: "",
    },
    mode: "all",
  });

  const addStudentHandler = async (sData: StudentFormType) => {
    const { isSuccess, message } = await createStudent(sData);
    if (isSuccess) {
      toast.add({
        type: "success",
        description: message,
      });
      reset();
      push("/");
    } else {
      toast.add({
        type: "error",
        description: message,
      });
    }
  };

  const clearTeacherForm = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(addStudentHandler)}
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
              <FieldLabel htmlFor={field.name}>Email Adress</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email Adress"
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
                autoComplete="cc-number"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
                  {teacherInfo.map(({ tId, tFullName, tSubject }) => (
                    <SelectItem
                      key={tId}
                      value={tId}>
                      {tFullName}
                      <span>({tSubject})</span>
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
          onClick={clearTeacherForm}
          type="button"
          variant="destructive">
          Clear <TrashIcon />
        </Button>
        <Button
          variant="outline"
          type="submit">
          Submit <UserCheckIcon />
        </Button>
      </CardFooter>
    </form>
  );
};

export default AddStudentForm;
