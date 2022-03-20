module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @import "src/core/theme/mixins/responsive.scss";
                `,
            },
        },
    },
};