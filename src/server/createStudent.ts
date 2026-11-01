"use server";

import prisma from "@/lib/dbClient/prisma";
import { StudentFormType } from "@/lib/zodSchema";
import { Prisma } from "@generated/prisma/client";
import { revalidatePath } from "next/cache";

const createStudent = async (sData: StudentFormType) => {
  try {
    await prisma.studentTable.create({
      data: sData,
    });
    revalidatePath("/");
    return {
      isSuccess: true,
      message: "Student Created Successfully ",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return {
          isSuccess: false,
          message: "A student with this email or phone number already exists.",
        };
      }
      return {
        isSuccess: false,
        message: "Unable to create student. Please try again",
      };
    }
    return {
      isSuccess: false,
      message: "Something Went Wrong ",
    };
  }
};

export default createStudent;
