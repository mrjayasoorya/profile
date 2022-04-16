import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark")
        }
        else if(theme === "dark"){
            setTheme("pink")
        }
        else setTheme("light")
    }
        // setTheme(theme === "light" ? "dark" : "light");
    return (
        <>
            <h1>The current theme is {theme}</h1>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default ThemeToggler