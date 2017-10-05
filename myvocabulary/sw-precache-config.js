module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: '/dist',
    maximumFileSizeToCacheInBytes: 10000000,
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**.woff2',
        'dist/assets/icons/**.*'
    ]
};