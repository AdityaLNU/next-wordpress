module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId, out }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}
