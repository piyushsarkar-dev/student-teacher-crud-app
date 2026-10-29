"use client";
import deleteStudent from "@/server/deleteStudent";
import { toast } from "../shadcnui/toast";

type DeleteButtonPropos = {
  sId: string;
};

const DeleteButton = ({ sId }: DeleteButtonPropos) => {
  const studentDelete = async () => {
    const { isSuccess, message } = await deleteStudent(sId);

    if (isSuccess) {
      toast.add({
        type: "success",
        description: message,
      });
    } else {
      toast.add({
        type: "error",
        description: message,
      });
    }
  };

  return (
    <button
      onClick={studentDelete}
      className="group relative box-border flex h-9 min-w-0 flex-1 cursor-pointer items-center overflow-hidden rounded-md border border-[#e50000] bg-transparent p-0 transition-all duration-300 hover:border-[#e50000]"
      type="button">
      <span className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-[#e50000] transition-all duration-300 group-hover:text-white group-hover:opacity-0">
        Delete
      </span>

      <span className="absolute top-0 right-0 flex h-full w-9 items-center justify-center bg-[#e50000] transition-all duration-300 group-hover:w-full">
        <svg
          className="size-5 shrink-0"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <line
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            x1="80"
            x2="432"
            y1="112"
            y2="112"
          />
          <path
            d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <line
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            x1="256"
            x2="256"
            y1="176"
            y2="400"
          />
          <line
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            x1="184"
            x2="192"
            y1="176"
            y2="400"
          />
          <line
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            x1="328"
            x2="320"
            y1="176"
            y2="400"
          />
        </svg>
      </span>
    </button>
  );
};

export default DeleteButton;
