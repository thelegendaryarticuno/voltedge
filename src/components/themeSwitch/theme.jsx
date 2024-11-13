import { useTheme } from "../../context/ThemeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 
                 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm 
                 transition-colors duration-200"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeSwitch;