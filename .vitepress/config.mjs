import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  // 源码目录
  srcDir: "./src",
  // 打包后的代码目录
  outDir: "./dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Version", link: "/markdown-examples" },
          { text: "API 目录", link: "/api-examples" },
          { text: "前言", link: "/api-examples" },
          { text: "文档说明", link: "/api-examples" },
        ],
      },
      {
        text: "放款支付",
        items: [
          {
            items: [
              { text: "test", link: "/test/test-1" },
              { text: "test", link: "/test/test-2" },
            ]
          },
        ]
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
