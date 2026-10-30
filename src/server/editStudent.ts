"use server";

import prisma from "@/lib/dbClient/prisma";
import { StudentFormType } from "@/lib/zodSchema";

const editStudent = async (newData: StudentFormType, sId: string) => {
  try {
    await prisma.studentTable.update({
      data: newData,
      where: {
        sId: sId,
      },
    });

    return {
      isSuccess: true,
      message: "User Details Update Successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      message: "User Delete Failed",
    };
  }
};

export default editStudent;
