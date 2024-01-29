import { defineConfig } from "vitepress";

export default defineConfig({
  title: "SKYPAY",
  description: "A VitePress Site",
  locales: {
    root: {
      lang: "zh-CN",
      label: "简体中文",
      selectText: "简体中文",
    },
    en: {
      lang: "en-US",
      label: "English",
      selectText: "English",
      themeConfig:{
        nav: [{ text: "Home", link: "/en/Version1" }],
        docFooter: {
          prev: "previous page",
          next: "next page",
        },
        sidebar: [
          {
            text: "introduction",
            items: [
              { text: "Version", link: "/en/Version1" },
              { text: "Preface", link: "/en/preface" },
              { text:"Generate authentication key",link:"/en/Generateauthenticationkey"},
              { text: "Payment method", link: "/en/APIdocumentationdescription" },
            ],
          },
          {
            text: "Create Payment - Technical Specifications",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Payment_intentions",
                    link: "/en/Createpayment/Createpayment",
                  },
                ],
              },
            ],
          },
          {
            text: "Payment Update - Technical Specifications",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Payment_intentions(PI)",
                    link: "/en/Paymentupdate/Paymentupdate",
                  },
                ],
              },
            ],
          },
          {
            text: "Payment Confirmation - Technical Specifications",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Payment_intentions(ID)confirm",
                    link: "/en/Paymentconfirmation/Paymentconfirmation",
                  },
                ],
              },
            ],
          },
          {
            text: "Payment inquiry - Technical specifications",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Payment_intentions(PI)",
                    link: "/en/Paymentinquiry/Paymentinquiry",
                  },
                ],
              },
            ],
          },
          {
            text: "Notification - Technical Specifications",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Notice",
                    link: "/en/Notificationcallback/Notificationcallback",
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                text: "Status code and HTTP code",
                link: "/en/api-examples",
              },
            ],
          },
        ],
      },
    },
  },
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  // 源码目录
  srcDir: "./src",
  // 打包后的代码目录
  outDir: "./dist",
  link: "/",
  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    logo: "/logo.svg",

    siteTitle: false,
    search: {
      provider: "local",
    },
    // logo:'/logo.png',
    nav: [{ text: "Home", link: "/Version1" }],
    // sidebar,
    sidebar: [
      {
        text: "introduction",
        items: [
          { text: "Version", link: "/Version1" },
          { text: "前言", link: "/preface" },
          { text:"生成认证金钥",link:"/Generateauthenticationkey"},
          { text: "支付方式", link: "/APIdocumentationdescription" },
        ],
      },

      {
        text: "创建付款 – 技术规范",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "payment_intentions",
                link: "/Createpayment/Createpayment",
              },
            ],
          },
        ],
      },
      {
        text: "付款更新 – 技术规范",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "payment_intentions(PI)",
                link: "/Paymentupdate/Paymentupdate",
              },
            ],
          },
        ],
      },
      {
        text: "付款确认 – 技术规范",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "payment_intentions(ID)confirm",
                link: "/Paymentconfirmation/Paymentconfirmation",
              },
            ],
          },
        ],
      },
      {
        text: "付款查询 – 技术规范",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "payment_intentions(PI)",
                link: "/Paymentinquiry/Paymentinquiry",
              },
            ],
          },
        ],
      },
      {
        text: "通知 – 技术规范",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "通知",
                link: "/Notificationcallback/Notificationcallback",
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            text: "状态码和 HTTP 码",
            link: "/api-examples",
          },
        ],
      },
    ],
  },
});
