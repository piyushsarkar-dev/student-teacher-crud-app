"use server";

import prisma from "@/lib/dbClient/prisma";
import { StudentFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const editStudent = async (newData: StudentFormType, sId: string) => {
  try {
    await prisma.studentTable.update({
      data: newData,
      where: {
        sId: sId,
      },
    });
    revalidatePath("/");

    return {
      isSuccess: true,
      message: "Student updated successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Failed to update student. Please try again.",
    };
  }
};

export default editStudent;
