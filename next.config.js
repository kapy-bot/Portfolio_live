module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Add other static paths here if needed
      };
    },
    trailingSlash: true, // Ensure all paths have trailing slashes
  };
  