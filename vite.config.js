import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        build: {
            outDir: "build",
        },
        plugins: [react()],
        server: {
            // this ensures that the browser opens upon server start
            open: true,
            // this sets a default port to 3000
            port: 3000,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "src/core/theme/theme";
                        @import "src/core/theme/mixins/responsive.scss";
                    `,
                },
            },
        },
    };
});
