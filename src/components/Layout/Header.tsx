import { GraduationCap, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "../shadcnui/button";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b shadow-sm"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap">
          <h1
            className="text-xl font-semibold sm:text-2xl"
            aria-label="App Name">
            ST CRUD
          </h1>
        </Link>

        <nav className="flex shrink-0 flex-nowrap items-center gap-1 sm:gap-3">
          <Button
            variant="ghost"
            className="h-10 shrink-0 px-4 text-sm font-medium">
            <Link
              href="/"
              className="whitespace-nowrap">
              Home
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="h-10 shrink-0 px-4 text-sm font-medium">
            <Link
              href="/student/create"
              className="flex items-center justify-center gap-2 whitespace-nowrap">
              <UserRoundPlus className="size-4 shrink-0" />
              <span>Student</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="h-10 shrink-0 px-4 text-sm font-medium">
            <Link
              href="/teacher/create"
              className="flex items-center justify-center gap-2 whitespace-nowrap">
              <GraduationCap className="size-4 shrink-0" />
              <span>Teacher</span>
            </Link>
          </Button>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
