/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: `
//               default-src 'self';
//               img-src 'self' https: data:;
//               media-src 'self' https:;
//               script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
//               style-src 'self' 'unsafe-inline' https:;
//               frame-src https://www.youtube.com https://www.youtube-nocookie.com;
//             `.replace(/\n/g, "")
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;
