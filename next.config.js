/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // keep if you want URLs to end with "/"

  compiler: {
    styledComponents: true, // replaces babel-plugin-styled-components
  },

  // If you are exporting a static site, you can still add this:
  // output: 'export',
};

module.exports = nextConfig;
