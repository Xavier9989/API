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
          { text: "前言", link: "/preface" },
          { text: "文档说明", link: "/APIdocumentationdescription" },
        ],
      },

      {
        text: "3.线上支付处理流程",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "3.1推送线上支付交易(payoutQueue)",
                link: "/onlinepayment/payoutQueue",
              },
              {
                text: "3.2回传支付确认讯息（payoutQueuePayout）",
                link: "/onlinepayment/payoutQueuePayout",
              },
              {
                text: "3.3取消支付交易（cancelPayout）",
                link: "/onlinepayment/cancelpayout",
              },
              {
                text: "3.4 ML/LBCExpress非实时放款（payoutQueueV2）",
                link: "/onlinepayment/payoutQueueV2",
              },
              {
                text: "3.5修改支付交易（amendTransactionV2）",
                link: "/onlinepayment/amendTransactionV2",
              },
            ],
          },
        ],
      },
      {
        text: "4.线下支付处理流程",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "4.1 线下支付数据验证（PayoutInquiry）",
                link: "/Offlinepayment/PayoutInquiry",
              },
              {
                text: "4.2 支付成功通知（PayoutPayout）",
                link: "/Offlinepayment/PayoutPayout",
              },
              {
                text: "4.3 收款数据验证（CollectionInquiry）",
                link: "/Offlinepayment/CollectionInquiry",
                items: [
                  {
                    text: "4.3.1产生7-11收款条形码（Generate711Barcode）",
                    link: "/Offlinepayment/Generate711Barcode",
                  },
                ],
              },
              {
                text: "4.4 收款成功通知（collectionCollect）",
                link: "/Offlinepayment/collectionCollect",
              },
              {
                text: "4.5 支付状态查询（payoutQueryStatus）",
                link: "/Offlinepayment/payoutQueryStatus",
              },
              {
                text: "4.6 交易结果查询（getReportPayout(Collection)）",
                link: "/Offlinepayment/getReportPayout",
              },
              {
                text: "4.7余额查询（balanceQuery）",
                link: "/Offlinepayment/balanceQuery",
              },
            ],
          },
        ],
      },
      {
        text: "5. 充值、结算、提现",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "5.1通知接口-充值、结算、提现（financeNotification）",
                link: "/Offlinepayment/financeNotification",
              },
              {
                text: "5.2查詢接口-充值、结算、提现（notificationInquiry）",
                link: "/Offlinepayment/collectionCollect",
              },
            ],
          },
        ],
      },
      {
        text: "6. 测试工具",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "6.1 支付测试工具",
                link: "/testtools/Collectionverificationtool",
              },
              {
                text: "6.2 收款验证工具",
                link: "/testtools/Paymenttestingtools",
              },
            ],
          },
        ],
      },
      {
        text: "7.取得基本代码列表信息",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "7.1取得国别定义(getNationality)",
                link: "/Obtainbasiccodelistinformation/getNationality",
              },
              {
                text: "7.2取得公民状态(getCivilStatus)",
                link: "/Obtainbasiccodelistinformation/getCivilStatus",
              },
              {
                text: "7.3取得身份验证类别(getIdentificationType)",
                link: "/Obtainbasiccodelistinformation/getIdentificationType",
              },
              {
                text: "7.4取得城巿代码(getTownCity)",
                link: "/Obtainbasiccodelistinformation/getTownCity",
              },
              {
                text: "7.5取得省份代码(getProvince)",
                link: "/Obtainbasiccodelistinformation/getProvince",
              },
              {
                text: "7.6取得银行代码(getBankCode)",
                link: "/Obtainbasiccodelistinformation/getBankCode",
              },
            ],
          },
        ],
      },
      {
        text: "8.回传讯息定义",
        collapsed: true,
        items: [
          {
            text: "回传code",
            link: "/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
          },
        ],
      },
      {
        text: "9.支付管道（渠道代码即code值）",
        collapsed: true,
        items: [
          {
            text: "支付管道",
            link: "/Paymentpipeline/Paymentpipeline",
          },
        ],
      },
      {
        text: "10.收款管道（渠道代码即code值）",
        collapsed: true,
        items: [
          {
            text: "收款管道",
            link: "/Paymentpipeline/Paymentpipeline1",
          },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
