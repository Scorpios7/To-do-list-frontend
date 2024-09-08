import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true, // useSystemColorMode will cover the initialColorMode
};

// 3. extend the theme
const theme = extendTheme({
    config,
    styles: {
        global: (props: any) => ({
            body: {
                backgroundColor: mode("gray.500", "")(props), // if light mode, then gray.500, otherwise default
            },
        }),
    },
});

export default theme;