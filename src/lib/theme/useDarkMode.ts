import { useEffect, useState } from "react";


type DarkModeState = 'dark' | 'light'
type SetDarkModeState = React.Dispatch<React.SetStateAction<DarkModeState>>

export default function useDarkMode() {
    const [theme, setTheme] = useState<DarkModeState>(typeof window !== "undefined" ? localStorage.theme : "dark");

  useEffect(() => {
    console.log("CHANGED THEME TO " + theme);
    const currentColorTheme = theme === "dark" ? "light" : "dark";
    
    const root = window.document.documentElement;

    root.classList.remove(currentColorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);


  return [theme, setTheme] as const;
}