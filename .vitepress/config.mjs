import { defineConfig } from "vitepress";


export default defineConfig({
  base:"/v2.5/",
  title: "SKYPAY",
  description: "A VitePress Site",
  appearance:false,
  locales: {
    cn:{
      lang: "zh-hant",
      label: "繁體中文",
      selectText: "繁體中文", 
      themeConfig: {
        docFooter: {
          prev: "上一頁",
          next: "下一頁",
        },
    
        logo: "/logo.svg",
    
        siteTitle: false,
        search: {
          provider: "local",
        },
        // logo:'/logo.png',
        nav: [{ text: "Home", link: "/cn/Version1" }],
        // sidebar,
        sidebar: [
          {
            text: "文檔說明",
            items: [
              { text: "版本", link: "/cn/Version1" },
              { text: "前言", link: "/cn/preface" },
              { text:"生成認證金鑰",link:"/cn/Generateauthenticationkey"},
              { text: "支付方式", link: "/cn/APIdocumentationdescription" },
            ],
          },
          {
            text: "Gcash_Webpay接口流程",
            collapsed: true,
            items: [
              { text: "I接口流程图", link: "/cn/Gcash_Webpay/process/process"},
              { text: "II付款創建", link: "/cn/Gcash_Webpay/Createpayment/Createpayment"},
              { text: "III付款更新", link: "/cn/Gcash_Webpay/Paymentupdate/Paymentupdate"},
              { text: "IV付款確認", link: "/cn/Gcash_Webpay/Paymentconfirmation/Paymentconfirmation"},
              { text: "V查詢", link: "/cn/Gcash_Webpay/Paymentinquiry/Paymentinquiry"},
            ],
          },
          {
            text: "qr_ph接口流程",
            collapsed: true,
            items: [
              { text: "I接口流程图", link: "/cn/qr_ph/process1/process1"},
              { text: "II付款創建", link: "/cn/qr_ph/Createpayment1/Createpayment1"},
              { text: "III付款更新", link: "/cn/qr_ph/Paymentupdate1/Paymentupdate1"},
              { text: "IV付款確認", link: "/cn/qr_ph/Paymentconfirmation1/Paymentconfirmation1"},
              { text: "V查詢", link: "/cn/qr_ph/Paymentinquiry1/Paymentinquiry1"},
            ],
          },
          {
            text: "通知 – 技術規範",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "通知",
                    link: "/cn/Notificationcallback/Notificationcallback",
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                text: "狀態碼和 HTTP 碼",
                link: "/cn/api-examples",
              },
            ],
          },
        ],
      },
    




    },
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
        logo: "/logo.svg",

    siteTitle: false,
    search: {
      provider: "local",
    },
        nav: [{ text: "Home", link: "/en/Version1" }],
        sidebar: [
          {
            text: "Introduce",
            items: [
              { text: "Version", link: "/en/Version1" },
              { text: "Preface", link: "/en/preface" },
              { text:"Generate authentication key",link:"/en/Generateauthenticationkey"},
              { text: "Payment method", link: "/en/APIdocumentationdescription" },
            ],
          },
          {
            text: "Gcash_Webpay Interface Process",
            collapsed: true,
            items: [
<<<<<<< HEAD
              { text: "I interface flowchart", link: "/en/Gcash_Webpay/process/process"},
              { text: "II Paymentcreate", link: "/en/Gcash_Webpay/Createpayment/Createpayment"},
              { text: "III Paymentupdate", link: "/en/Gcash_Webpay/Paymentupdate/Paymentupdate"},
              { text: "IV Paymentconfirmation", link: "/en/Gcash_Webpay/Paymentconfirmation/Paymentconfirmation"},
              { text: "V Paymentinquiry", link: "/en/Gcash_Webpay/Paymentinquiry/Paymentinquiry"},
=======
              {
                items: [
                  {
                    text: "Payment_intentions",
                    link: "/en/Createpayment/Createpayment",
                  },
                ],
              },
>>>>>>> 5178f457e30cd5bd8167829f59ba8946df014b64
            ],
          },
          {
            text: "qr_ph interface process",
            collapsed: true,
            items: [
<<<<<<< HEAD
              { text: "I interface flowchart", link: "/en/qr_ph/process1/process1"},
              { text: "II Paymentcreate", link: "/en/qr_ph/Createpayment1/Createpayment1"},
              { text: "III Paymentupdate", link: "/en/qr_ph/Paymentupdate1/Paymentupdate1"},
              { text: "IV Paymentconfirmation", link: "/en/qr_ph/Paymentconfirmation1/Paymentconfirmation1"},
              { text: "V Paymentinquiry", link: "/en/qr_ph/Paymentinquiry1/Paymentinquiry1"},
=======
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
>>>>>>> 5178f457e30cd5bd8167829f59ba8946df014b64
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
        text: "文档说明",
        items: [
          { text: "版本", link: "/Version1" },
          { text: "前言", link: "/preface" },
          { text:"生成认证金钥",link:"/Generateauthenticationkey"},
          { text: "支付方式", link: "/APIdocumentationdescription" },
        ],
      },
      {
        text: "Gcash_Webpay接口流程",
        collapsed: true,
        items: [
          { text: "I接口流程图", link: "/Gcash_Webpay/process/process"},
          { text: "II创建付款", link: "/Gcash_Webpay/Createpayment/Createpayment"},
          { text: "III付款更新", link: "/Gcash_Webpay/Paymentupdate/Paymentupdate"},
          { text: "IV付款确认", link: "/Gcash_Webpay/Paymentconfirmation/Paymentconfirmation"},
          { text: "V查询", link: "/Gcash_Webpay/Paymentinquiry/Paymentinquiry"},
        ],
      },
      {
        text: "qr_ph接口流程",
        collapsed: true,
        items: [
          { text: "I接口流程图", link: "/qr_ph/process1/process1"},
          { text: "II创建付款", link: "/qr_ph/Createpayment1/Createpayment1"},
          { text: "III付款更新", link: "/qr_ph/Paymentupdate1/Paymentupdate1"},
          { text: "IV付款确认", link: "/qr_ph/Paymentconfirmation1/Paymentconfirmation1"},
          { text: "V查询", link: "/qr_ph/Paymentinquiry1/Paymentinquiry1"},
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
