import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        build: {
            outDir: "build",
        },
        plugins: [react()],
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: "./src/setuptest.js", // we need to rename the file to lowercase to avoid case-sensitivity issues across OS
        },
        server: {
            // this ensures that the browser opens upon server start
            open: true,
            // this sets a default port to 3000
            port: 3100,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    includePaths: ["node_modules"],
                    additionalData: `
                        @import "src/core/theme/theme";
                        @import "src/core/theme/mixins/responsive.scss";
                    `,
                },
            },
        },
    };
});
