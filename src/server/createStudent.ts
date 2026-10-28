"use server";

import prisma from "@/lib/dbClient/prisma";
import { StudentFormType } from "@/lib/zodSchema";
import { Prisma } from "@generated/prisma/client";

const createStudent = async (sData: StudentFormType) => {
  try {
    await prisma.studentTable.create({
      data: sData,
    });
    return {
      isSuccess: true,
      message: "Student Created Successfully ",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        isSuccess: false,
        message: "Unable to create teacher. Please try again ",
      };
    }
    return {
      isSuccess: false,
      message: "Something Went Wrong ",
    };
  }
};

export default createStudent;
