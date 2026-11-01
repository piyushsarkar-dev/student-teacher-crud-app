import { GraduationCapIcon, House, UserRoundPlusIcon } from "lucide-react";

import Link from "next/link";
import { Button } from "../shadcnui/button";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b shadow-sm"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap">
          <h1
            className="text-xl font-semibold sm:text-2xl"
            aria-label="App Name">
            ST CRUD
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Home */}
          <Link href="/">
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <House className="size-4" />
                Home
              </span>
            </Button>
          </Link>

          {/* Student */}
          <Link href="/student/create">
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <UserRoundPlusIcon className="size-4" />
                Student
              </span>
            </Button>
          </Link>

          {/* Teacher */}
          <Link href="/teacher/create">
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <GraduationCapIcon className="size-4" />
                Teacher
              </span>
            </Button>
          </Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
