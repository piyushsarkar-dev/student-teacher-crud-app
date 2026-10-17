import Header from "@/components/Layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Student Teacher CRUD App",
  description:
    "A full-stack CRUD application built with Next.js, TypeScript, and Tailwind CSS for managing student and teacher data.",
};

const page = () => {
  return (
    <>
      <Header />

      <main className="grid h-dvh place-items-center"></main>
    </>
  );
};

export default page;
