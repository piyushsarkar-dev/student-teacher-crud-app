import z from "zod";

export const teacherFormSchema = z.object({
  tFullName: z
    .string()
    .min(6, { error: "Full name must be at least 6 characters long." })
    .max(35, { error: "Full name cannot exceed 35 characters." }),

  tSubject: z.string().min(1, {
    error: "Please select a subject.",
  }),
});

export type TeacherFormType = z.infer<typeof teacherFormSchema>;

export const studentFormSchema = z.object({
  sFullName: z
    .string()
    .min(6, { error: "Full name must be at least 6 characters long." })
    .max(35, { error: "Full name cannot exceed 35 characters." }),

  sEmail: z.email({
    error: "Please enter a valid email address.",
  }),

  sGender: z.string().min(4, {
    error: "Please select a valid gender.",
  }),

  sPhoneNumber: z.string().length(10, {
    error: "Phone number must contain exactly 10 characters.",
  }),

  teacherTableTId: z.string().min(1, {
    error: "Please select a teacher before submitting the form.",
  }),
});

export type StudentFormType = z.infer<typeof studentFormSchema>;
