/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withTM = require('next-transpile-modules')(['route-type-safe']); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
