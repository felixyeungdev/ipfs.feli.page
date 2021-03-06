module.exports = {
    purge: ["./public/**/*.html", "./public/**/*.vue", "./public/**/*.jsx"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#0F0F0F",
                },
                feli: {
                    DEFAULT: "#f9a828",
                },
            },
            keyframes: {
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1);",
                    },
                    "50%": {
                        transform: "translateY(-25%)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
    },
    variants: {
        extend: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
};
