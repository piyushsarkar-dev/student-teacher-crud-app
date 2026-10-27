"use client";

import { teacherFormSchema, type TeacherFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon, UserCheckIcon } from "lucide-react";
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
import { Separator } from "../shadcnui/separator";

const AddTeacherForm = () => {
  const { handleSubmit, control, reset } = useForm<TeacherFormType>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      tFullName: "",
      tSubject: "",
    },
    mode: "all",
  });

  const addTeacherHandler = (data: TeacherFormType) => {
    console.log("Teacher Form Data:", data);
    reset();
  };

  const clearTeacherForm = () => {
    reset();
  };

  return (
    <>
      <CardContent>
        <form
          id="add-teacher-form"
          onSubmit={handleSubmit(addTeacherHandler)}
          noValidate
          className="grid grid-cols-1 gap-5">
          <Controller
            name="tFullName"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Teacher Name</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter teacher's full name"
                  autoComplete="name"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="tSubject"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Subject Name</FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}>
                  <SelectTrigger
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subjects</SelectLabel>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Bengali">Bengali</SelectItem>
                      <SelectItem value="Math">Math</SelectItem>
                      <SelectItem value="Geography">Geography</SelectItem>
                      <SelectItem value="Computer">Computer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </form>
      </CardContent>
      <Separator />
      <CardFooter className="grid grid-cols-2 gap-3">
        <Button
          type="submit"
          form="add-teacher-form">
          Submit <UserCheckIcon />
        </Button>
        <Button
          type="button"
          variant="destructive"
          onClick={clearTeacherForm}>
          Clear <TrashIcon />
        </Button>
      </CardFooter>
    </>
  );
};

export default AddTeacherForm;
