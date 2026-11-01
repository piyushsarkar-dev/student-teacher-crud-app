"use server";

import prisma from "@/lib/dbClient/prisma";
import { revalidatePath } from "next/cache";

const deleteStudent = async (sId: string) => {
  try {
    await prisma.studentTable.delete({
      where: { sId },
    });
    revalidatePath("/");

    return {
      isSuccess: true,
      message: "Student deleted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Failed to delete student. Please try again.",
    };
  }
};

export default deleteStudent;
