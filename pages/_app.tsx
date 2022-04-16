import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { darkTheme, pinkTheme } from "../stitches.config";

// https://dev.to/gthinh/adding-a-dark-theme-to-nextjs-with-stitches-2jdg
// https://stitches.dev/docs/theming
// https://www.npmjs.com/package/next-themes
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
        pink: pinkTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
