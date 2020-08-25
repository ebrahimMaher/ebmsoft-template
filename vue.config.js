module.exports = {
    transpileDependencies: ["vuetify"],
    configureWebpack: {
        rules: [
            {
                test: /particles\.js/,
                use: 'exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
            }
        ]
    },
    pwa: {
        name: 'EBMSoft',
        themeColor: '#02173A',
        msTileColor: '02173A',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#02173A',
        iconPaths: {
            favicon128: 'img/icons/favicon-128x128.png',
            favicon86: 'img/icons/favicon-86x86.png',
            favicon64: 'img/icons/favicon-64x64.png',
            favicon48: 'img/icons/favicon-48x48.png',
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/favicon-128x128.png',
            msTileImage: 'img/icons/favicon-128x128.png'
        }
    }
};
