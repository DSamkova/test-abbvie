export const GlobalTheme = {
    typography: {
        fontWeight: 600,
        lineHeight: 1.57143,
        fontSize: 14,
        fontFamily: [
            "Public Sans",
            "sans-serif",
        ].join(","),
        h6: {
            fontSize: 18,
            fontWeight: 700,
        },
        caption: {
            lineHeight: 1.5,
            fontSize: 12,
            fontWeight: 400,
            color: "rgb(99, 115, 129)",
        }
    },
    palette: {
        primary: {
            main: "#212B36",
        },
        secondary: {
            main: "#00B8D9",
        },
        success: {
            main: "#00A66E",
        },
        warning: {
            main: "#FFAB00"
        },
        error: {
            main: "#FF5530",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
}
