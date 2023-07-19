import Image from "next/image";
import { Inter } from "next/font/google";
import { TypingArea } from "@/components/TypingArea";
import { useEffect, useState } from "react";
import { cleanTypeEvent } from "@/util/typer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [typed, setTyped] = useState<string>("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      cleanTypeEvent(setTyped, typed, event);
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [typed]);

  return (
    <>
      <div className="container my-auto mx-auto">
        <TypingArea
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          typed={typed}
        />
      </div>
    </>
  );
}
