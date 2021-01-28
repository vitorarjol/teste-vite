import vue from "@vitejs/plugin-vue";

export default {
    plugins: [vue()],
    build: {
        manifest: true,
        rollupOptions: {
            input: {
                app: "./resources/js/app.js",
                vitor: "./resources/js/vitor.js",
            },
            output: {
                dir: "./public",
            },
        },
    },
    server: {
        cors: true,
    },
};
