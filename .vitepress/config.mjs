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
      themeConfig: {
        nav: [{ text: "Home", link: "/en/Version1" }],
        docFooter: {
          prev: "previous page",
          next: "next page",
        },
        sidebar: [
          {
            text: "Introduction",
            items: [
              { text: "Version", link: "/en/Version1" },
              { text: "Table of contents", link: "/en/api-examples" },
              { text: "Preface", link: "/en/preface" },
              {
                text: "Data Encryption",
                link: "/en/APIdocumentationdescription",
              },
            ],
          },
          {
            text: "3.Online Payment <br>(Async mode)",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "3.1payoutQueue (Bank/Wallet)",
                    link: "/en/onlinepayment/payoutQueue",
                  },
                  {
                    text: "3.2payoutQueuePayout (CallBack)",
                    link: "/en/onlinepayment/payoutQueuePayout",
                  },
                ],
              },
            ],
          },
          {
            text: "4.Offline Payment <br>(Async mode)",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "4.1payoutQueueV2 <br>(Remit Store)",
                    link: "/en/onlinepayment/payoutQueueV2",
                  },
                  {
                    text: "4.2cancelPayout",
                    link: "/en/onlinepayment/cancelPayout",
                  },
                  {
                    text: "4.3amendTransactionV2",
                    link: "/en/onlinepayment/amendTransactionV2",
                  },
                ],
              },
            ],
          },
          {
            text: "5.Offline transactions (synchronous)",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Offline Payment <br>(Sync mode)",
                    collapsed: true,
                    items: [
                      {
                        text: "5.1payoutInquiry",
                        link: "/en/Offlinepayment/PayoutInquiry",
                      },
                      {
                        text: "5.2payoutPayout",
                        link: "/en/Offlinepayment/PayoutPayout",
                      },
                    ],
                  },
                ],
              },
              {
                items: [
                  {
                    text: "Collection interface (synchronous)",
                    collapsed: true,
                    items: [
                      {
                        text: "5.3collectionInquiry",
                        link: "/en/Offlinepayment/CollectionInquiry",
                      },
                      {
                        text: "5.3.1 generate711Barcode",
                        link: "/en/Offlinepayment/Generate711Barcode",
                      },
                      {
                        text: "5.4collectionCollect",
                        link: "/en/Offlinepayment/collectionCollect",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            text: "6. functional interface",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "6. Inquiry APIs",
                    collapsed: true,
                    items: [
                      {
                        text: "6.1 payoutQueryStatus",
                        link: "/en/Offlinepayment/payoutQueryStatus",
                      },
                      {
                        text: "6.2getRepoertPayout/getRerpotCollection",
                        link: "/en/Offlinepayment/getReportPayout",
                      },
                      {
                        text: "6.3balanceQuery",
                        link: "/en/Offlinepayment/balanceQuery",
                      },
                    ],
                  },
                ],
              },
              {
                items: [
                  {
                    text: "6. Finance APIs",
                    collapsed: true,
                    items: [
                      {
                        text: "6.4financeNotification",
                        link: "/en/Rechargebalancewithdrawal/financeNotification",
                      },
                      {
                        text: "6.5notificationInquiry",
                        link: "/en/Rechargebalancewithdrawal/notificationInquiry",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: "7. Test Tools",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "7.1 Payout Tool ",
                    link: "/en/testtools/Collectionverificationtool",
                  },
                  {
                    text: "7.2 Collection Tool",
                    link: "/en/testtools/Paymenttestingtools",
                  },
                ],
              },
            ],
          },
          {
            text: "8.Code Table",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "8.1getNationality",
                    link: "/en/Obtainbasiccodelistinformation/getNationality",
                  },
                  {
                    text: "8.2getCivilStatus",
                    link: "/en/Obtainbasiccodelistinformation/getCivilStatus",
                  },
                  {
                    text: "8.3getIdentificationType",
                    link: "/en/Obtainbasiccodelistinformation/getIdentificationType",
                  },
                  {
                    text: "8.4getTownCity",
                    link: "/en/Obtainbasiccodelistinformation/getTownCity",
                  },
                  {
                    text: "8.5getProvince",
                    link: "/en/Obtainbasiccodelistinformation/getProvince",
                  },
                  {
                    text: "8.6getBankCode",
                    link: "/en/Obtainbasiccodelistinformation/getBankCode",
                  },
                ],
              },
            ],
          },
          {
            text: "9.Error Code Table",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "9.Error Code",
                    link: "/en/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
                  },
                ],
              },
            ],
          },
          {
            text: "10.Channel Code table",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    items: [
                      {
                        text: "Payout Channel Code",
                        link: "/en/Paymentpipeline/Paymentpipeline",
                      },
                    ],
                  },
                ],
              },
              {
                items: [
                  {
                    items: [
                      {
                        text: "Collection Channel Code",
                        link: "/en/Paymentpipeline/Paymentpipeline1",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            text: "11.Rnew Credentials",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Rnew Credentials",
                    link: "/en/Changekeyprocess/Changekeyprocess",
                  },
                ],
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
    nav: [{ text: "Home", link: "/Version1" }],
    sidebar: [
      {
        text: "文档介绍",
        items: [
          { text: "版本", link: "/Version1" },
          { text: "目录", link: "/api-examples" },
          { text: "前言", link: "/preface" },
          { text: "文档说明", link: "/APIdocumentationdescription" },
        ],
      },

      {
        text: "3.线上支付 (非同步)",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "3.1推送交易 (银行、钱包)(payoutQueue)",
                link: "/onlinepayment/payoutQueue",
              },
              {
                text: "3.2回调交易结果(payoutQueuePayout)",
                link: "/onlinepayment/payoutQueuePayout",
              },
            ],
          },
        ],
      },
      {
        text: "4.线下支付 (非同步)",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "4.1推送交易 (汇款店)(payoutQueueV2)",
                link: "/onlinepayment/payoutQueueV2",
              },
              {
                text: "4.2取消交易 <br>(cancelPayout)",
                link: "/onlinepayment/cancelPayout",
              },
              {
                text: "4.3修改交易(amendTransactionV2)",
                link: "/onlinepayment/amendTransactionV2",
              },
            ],
          },
        ],
      },

      {
        text: "5.线下交易 (同步)",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "线下支付 (同步)",
                collapsed: true,
                items: [
                  {
                    text: "5.1支付验证(payoutInquiry)",
                    link: "/Offlinepayment/PayoutInquiry",
                  },
                  {
                    text: "5.2支付确认(payoutPayout)",
                    link: "/Offlinepayment/PayoutPayout",
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                text: "收款接口 (同步)",
                collapsed: true,
                items: [
                  {
                    text: "5.3收款验证(collectionInquiry) (同步)",
                    link: "/Offlinepayment/CollectionInquiry",
                  },
                  {
                    text: "5.3.1 7-11收款条码(generate711Barcode)",
                    link: "/Offlinepayment/Generate711Barcode",
                  },
                  {
                    text: "5.4收款确认(collectionCollect)",
                    link: "/Offlinepayment/collectionCollect",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "6. 功能接口",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "查询功能",
                collapsed: true,
                items: [
                  {
                    text: "6.1支付状态查询(payoutQueryStatus)",
                    link: "/Offlinepayment/payoutQueryStatus",
                  },
                  {
                    text: "6.2交易报表查询(getRepoertPayout/getRerpotCollection)",
                    link: "/Offlinepayment/getReportPayout",
                  },
                  {
                    text: "6.3余额查询(balanceQuery)",
                    link: "/Offlinepayment/balanceQuery",
                  },
                ],
              },
              {
                text: "财务功能",
                collapsed: true,
                items: [
                  {
                    text: "6.4通知接口(financeNotification)",
                    link: "/Rechargebalancewithdrawal/financeNotification",
                  },
                  {
                    text: "6.5查詢接口(notificationInquiry)",
                    link: "/Rechargebalancewithdrawal/notificationInquiry",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "7. 测试工具",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "7.1 支付测试工具",
                link: "/testtools/Collectionverificationtool",
              },
              {
                text: "7.2 收款测试工具",
                link: "/testtools/Paymenttestingtools",
              },
            ],
          },
        ],
      },
      {
        text: "8.基本代码表",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "8.1取得国别定义(getNationality)",
                link: "/Obtainbasiccodelistinformation/getNationality",
              },
              {
                text: "8.2取得公民状态(getCivilStatus)",
                link: "/Obtainbasiccodelistinformation/getCivilStatus",
              },
              {
                text: "8.3取得身份验证类别(getIdentificationType)",
                link: "/Obtainbasiccodelistinformation/getIdentificationType",
              },
              {
                text: "8.4取得城巿代码(getTownCity)",
                link: "/Obtainbasiccodelistinformation/getTownCity",
              },
              {
                text: "8.5取得省份代码(getProvince)",
                link: "/Obtainbasiccodelistinformation/getProvince",
              },
              {
                text: "8.6取得银行代码(getBankCode)",
                link: "/Obtainbasiccodelistinformation/getBankCode",
              },
            ],
          },
        ],
      },
      {
        text: "9.返回代码表",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "回传代码",
                link: "/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
              },
            ],
          },
        ],
      },
      {
        text: "10.渠道代码",
        collapsed: true,
        items: [
          {
            items: [
              {
                items: [
                  {
                    text: "支付渠道代码",
                    link: "/Paymentpipeline/Paymentpipeline",
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                items: [
                  {
                    text: "放款渠道代码",
                    link: "/Paymentpipeline/Paymentpipeline1",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        text: "11.密钥更改",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "更改密钥流程",
                link: "/Changekeyprocess/Changekeyprocess",
              },
            ],
          },
        ],
      },
    ],
  },
});
