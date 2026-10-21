import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS || false;
let repoBasePath = '';

if (isGitHubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';
  if (repo && !repo.endsWith('.github.io')) {
    repoBasePath = `/${repo}`;
  }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || repoBasePath;

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath ? basePath : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
