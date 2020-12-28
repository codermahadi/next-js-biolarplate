module.exports = {
    trailingSlash: true,
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}

module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }}
    },
}
