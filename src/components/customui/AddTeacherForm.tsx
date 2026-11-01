"use client";

import { teacherFormSchema, type TeacherFormType } from "@/lib/zodSchema";
import createTeacher from "@/server/createTeacher";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, TrashIcon, UserCheckIcon } from "lucide-react";
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
import { Separator } from "../shadcnui/separator";
import { toast } from "../shadcnui/toast";

const AddTeacherForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<TeacherFormType>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      tFullName: "",
      tSubject: "",
    },
    mode: "all",
  });

  const addTeacherHandler = async (tData: TeacherFormType) => {
    const { isSuccess, message } = await createTeacher(tData);

    if (isSuccess) {
      toast.add({
        type: "success",
        description: message,
      });

      reset();
      push("/student/create");
    } else {
      toast.add({
        type: "error",
        description: message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(addTeacherHandler)}
      noValidate
      className="grid grid-cols-1 gap-5">
      <CardContent>
        {/* Teacher Name */}
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

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Teacher Subject */}
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

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>

      <Separator />

      <CardFooter className="grid grid-cols-2 gap-3">
        {/* Clear Button */}
        <Button
          type="button"
          variant="destructive"
          onClick={() => reset()}
          disabled={!isDirty || isSubmitting}>
          Clear
          <TrashIcon className="size-4" />
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="outline"
          disabled={!isValid || isSubmitting}>
          {isSubmitting ?
            <>
              Submitting
              <LoaderCircle className="size-4 animate-spin" />
            </>
          : <>
              Submit
              <UserCheckIcon className="size-4" />
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default AddTeacherForm;
