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
      message: "User Delete Successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      message: "User Delete Failed",
    };
  }
};

export default deleteStudent;
