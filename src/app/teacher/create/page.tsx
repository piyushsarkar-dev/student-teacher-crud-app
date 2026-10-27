import AddTeacherForm from "@/components/customui/AddTeacherForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm gap-2">
        <CardHeader className="grid place-items-center">
          <CardTitle className="text-2xl">Teacher Card</CardTitle>
        </CardHeader>

        <Separator />

        <AddTeacherForm />
      </Card>
    </section>
  );
};

export default page;
