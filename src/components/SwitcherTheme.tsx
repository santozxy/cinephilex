import { Moon, Sun } from "lucide-react";
import { useTheme } from "@hooks";

export function ThemeSwitcher() {
  const { colorTheme, toggleTheme } = useTheme();

  return (
    <button
      role="button"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`fixed bottom-6 w-14 h-14 border-2 dark:border-gray-600 rounded-full flex items-center justify-center z-[99] shadow-md sm:left-4 max-sm:bottom-28 max-sm:right-4 max-sm:w-12 max-sm:h-12 dark:bg-light bg-dark transition-colors`}
    >
      {colorTheme === "dark" ? (
        <Sun size={24} className="text-dark" />
      ) : (
        <Moon size={24} className="text-light" />
      )}
    </button>
  );
}
