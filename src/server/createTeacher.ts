"use server";

import prisma from "@/lib/dbClient/prisma";
import { TeacherFormType } from "@/lib/zodSchema";
import { Prisma } from "@generated/prisma/client";
import { revalidatePath } from "next/cache";

const createTeacher = async (tData: TeacherFormType) => {
  try {
    await prisma.teacherTable.create({
      data: tData,
    });
    revalidatePath("/student/create");
    return {
      isSuccess: true,
      message: "Teacher Created Successfully",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        isSuccess: false,
        message: "Unable to create teacher. Please try again",
      };
    }
    return {
      isSuccess: false,
      message: "Something Went Wrong",
    };
  }
};

export default createTeacher;
