import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  // 源码目录
  srcDir: './src',
  // 打包后的代码目录
  outDir: './dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      
      {
        text: '放款支付',
        items: [
          { text: 'test', link: '/test/test-1' },
          { text: 'test', link: '/test/test-2' },
         
        ]
      },
    
     
      {
        text: 'test',
        items: [
          // This shows `/guide/index.md` page.
          { text: 'test-2' ,
            items:[
              {
                text:[
                  'test-1'
                ]
              }
            ]
        }
        ]
      }

    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
