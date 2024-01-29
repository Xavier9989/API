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
            text: "introduction",
            items: [
              { text: "Version", link: "/en/Version1" },
              { text: "API", link: "/en/api-examples" },
              { text: "Preface", link: "/en/preface" },
              {
                text: "Documentation",
                link: "/en/APIdocumentationdescription",
              },
            ],
          },
          {
            text: "3.OnlineRequestOnlinePaymentProcess",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "3.1Pushonlinepaymenttransactions(payoutQueue)",
                    link: "/en/onlinepayment/payoutQueue",
                  },
                  {
                    text: "3.2Returnpaymentconfirmationmessage（payoutQueuePayout）",
                    link: "/en/onlinepayment/payoutQueuePayout",
                  },
                ],
              },
            ],
          },
          {
            text: "4.Nlinerequestandofflinepaymentprocess",
            collapsed: true,
            items: [
              {
                text: "4.1Cancelpaymenttransaction（cancelPayout）",
                link: "/en/onlinepayment/cancelPayout",
              },
              {
                text: "4.2ML/CebuanaRealtimeloandisbursement（payoutQueueV2）",
                link: "/en/onlinepayment/payoutQueueV2",
              },
              {
                text: "4.3Modifypaymenttransactions（amendTransactionV2）",
                link: "/en/onlinepayment/amendTransactionV2",
              },
            ],
          },
          {
            text: "5.Offlinerequestofflineprocessingflow",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "Paymentprocessingflow - Realtimetransactioninstructions",
                    link: "/en/Offlinepayment/Realtimetransactioninstructions",
                  },
                  {
                    text: "5.1Offlinepaymentdataverification（PayoutInquiry）",
                    link: "/en/Offlinepayment/PayoutInquiry",
                  },
                  {
                    text: "5.2Paymentsuccessnotification（PayoutPayout）",
                    link: "/en/Offlinepayment/PayoutPayout",
                  },
                  {
                    text: "5.3Verificationofpaymentdata （CollectionInquiry）",
                    link: "/en/Offlinepayment/CollectionInquiry",
                    items: [
                      {
                        text: "5.3.1Generate7-11paymentbarcode（Generate711Barcode）",
                        link: "/en/Offlinepayment/Generate711Barcode",
                      },
                    ],
                  },
                  {
                    text: "5.4Notificationofsuccessfulpayment（collectionCollect）",
                    link: "/en/Offlinepayment/collectionCollect",
                  },
                ],
              },
            ],
          },
          {
            text: "6. Function Query",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "6.1 Paymentstatusquery  （payoutQueryStatus）",
                    link: "/en/Offlinepayment/payoutQueryStatus",
                  },
                  {
                    text: "6.2Transaction result query（getReportPayout(Collection)）",
                    link: "/en/Offlinepayment/getReportPayout",
                  },
                  {
                    text: "6.3Balanceinquiry （balanceQuery）",
                    link: "/en/Offlinepayment/balanceQuery",
                  },
                  {
                    text: "6.4NotificationInterface - Recharge、Settlement、Withdrawal（financeNotification）",
                    link: "/en/Rechargebalancewithdrawal/financeNotification",
                  },
                  {
                    text: "6.5Queryinterface - recharge、settlement、withdrawal（notificationInquiry）",
                    link: "/en/Rechargebalancewithdrawal/notificationInquiry",
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
                    text: "7.1 Payment testing tools ",
                    link: "/en/testtools/Collectionverificationtool",
                  },
                  {
                    text: "7.2 Collection verification tool",
                    link: "/en/testtools/Paymenttestingtools",
                  },
                ],
              },
            ],
          },
          {
            text: "8.Obtain basic code list information",
            collapsed: true,
            items: [
              {
                items: [
                  {
                    text: "8.1Obtain Country Definition (getNationality)",
                    link: "/en/Obtainbasiccodelistinformation/getNationality",
                  },
                  {
                    text: "8.2Obtaining citizenship status(getCivilStatus)",
                    link: "/en/Obtainbasiccodelistinformation/getCivilStatus",
                  },
                  {
                    text: "8.3Obtain authentication category(getIdentificationType)",
                    link: "/en/Obtainbasiccodelistinformation/getIdentificationType",
                  },
                  {
                    text: "8.4Obtain the city code(getTownCity)",
                    link: "/en/Obtainbasiccodelistinformation/getTownCity",
                  },
                  {
                    text: "8.5Obtain province code (getProvince)",
                    link: "/en/Obtainbasiccodelistinformation/getProvince",
                  },
                  {
                    text: "8.6Obtain bank code (getBankCode)",
                    link: "/en/Obtainbasiccodelistinformation/getBankCode",
                  },
                ],
              },
            ],
          },
          {
            text: "9.Backpropagation message definition   ",
            collapsed: true,
            items: [
              {
                text: "9.Backhaulcode",
                link: "/en/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
              },
            ],
          },
          {
            text: "10.Payment pipeline (channel code)",
            collapsed: true,
            items: [
              {
                text: "10.Payment pipeline",
                link: "/en/Paymentpipeline/Paymentpipeline",
              },
            ],
          },
          {
            text: "11.Payment channel (channel code)  ",
            collapsed: true,
            items: [
              {
                text: "11.Payment pipeline  ",
                link: "/en/Paymentpipeline/Paymentpipeline1",
              },
            ],
          },
          {
            text: "12.Change key process",
            collapsed: true,
            items: [
              {
                text: "12.Change key process",
                link: "/en/Changekeyprocess/Changekeyprocess",
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
        text: "introduction",
        items: [
          { text: "Version", link: "/Version1" },
          { text: "API 目录", link: "/api-examples" },
          { text: "前言", link: "/preface" },
          { text: "文档说明", link: "/APIdocumentationdescription" },
        ],
      },

      {
        text: "3.线上请求线上支付流程",
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
            ],
          },
        ],
      },
      {
        text: "4.线上请求线下支付流程",
        collapsed: true,
        items: [
          {
            text: "4.1取消支付交易（cancelPayout）",
            link: "/onlinepayment/cancelPayout",
          },
          {
            text: "4.2ML/Cebuana非实时放款（payoutQueueV2）",
            link: "/onlinepayment/payoutQueueV2",
          },
          {
            text: "4.3修改支付交易（amendTransactionV2）",
            link: "/onlinepayment/amendTransactionV2",
          },
        ],
      },

      {
        text: "5.线下请求线下处理流程",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "支付处理流程-实时交易说明",
                link: "/Offlinepayment/Realtimetransactioninstructions",
              },
              {
                text: "5.1线下支付数据验证（PayoutInquiry）",
                link: "/Offlinepayment/PayoutInquiry",
              },
              {
                text: "5.2支付成功通知（PayoutPayout）",
                link: "/Offlinepayment/PayoutPayout",
              },
              {
                text: "5.3收款数据验证（CollectionInquiry）",
                link: "/Offlinepayment/CollectionInquiry",
                items: [
                  {
                    text: "5.3.1产生7-11收款条形码（Generate711Barcode）",
                    link: "/Offlinepayment/Generate711Barcode",
                  },
                ],
              },
              {
                text: "5.4 收款成功通知（collectionCollect）",
                link: "/Offlinepayment/collectionCollect",
              },
            ],
          },
        ],
      },
      {
        text: "6. 功能查询",
        collapsed: true,
        items: [
          {
            items: [
              {
                text: "6.1支付状态查询（payoutQueryStatus）",
                link: "/Offlinepayment/payoutQueryStatus",
              },
              {
                text: "6.2交易结果查询（getReportPayout(Collection)）",
                link: "/Offlinepayment/getReportPayout",
              },
              {
                text: "6.3余额查询（balanceQuery）",
                link: "/Offlinepayment/balanceQuery",
              },
              {
                text: "6.4通知接口-充值、结算、提现（financeNotification）",
                link: "/Rechargebalancewithdrawal/financeNotification",
              },
              {
                text: "6.5查詢接口-充值、结算、提现（notificationInquiry）",
                link: "/Rechargebalancewithdrawal/notificationInquiry",
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
                text: "7.2 收款验证工具",
                link: "/testtools/Paymenttestingtools",
              },
            ],
          },
        ],
      },
      {
        text: "8.取得基本代码列表信息",
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
        text: "9.回传讯息定义",
        collapsed: true,
        items: [
          {
            text: "回传code",
            link: "/Backpropagationmessagedefinition/Backpropagationmessagedefinition",
          },
        ],
      },
      {
        text: "10.支付管道（渠道代码）",
        collapsed: true,
        items: [
          {
            text: "支付管道",
            link: "/Paymentpipeline/Paymentpipeline",
          },
        ],
      },
      {
        text: "11.收款管道（渠道代码）",
        collapsed: true,
        items: [
          {
            text: "收款管道",
            link: "/Paymentpipeline/Paymentpipeline1",
          },
        ],
      },
      {
        text: "12.更改密钥流程",
        collapsed: true,
        items: [
          {
            text: "更改密钥流程",
            link: "/Changekeyprocess/Changekeyprocess",
          },
        ],
      },
    ],
  },
});
