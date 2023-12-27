---
outline: deep
---

# API 目录
###   SkyPay第三支付API规范	
_________________
- [版本](http://localhost:5173/markdown-examples.html).
- 目录 
- [前言](http://localhost:5173/preface.html).
- API文档说明
    - 1. 数据加密说明
    - 2. 加密程序说明
- 3. 线上支付说明
    - [3.1推送线上支付交易(payoutQueue)](http://localhost:5173/onlinepayment/payoutQueue.html).
    - [3.2回传支付确认讯息（payoutQueuePayout）)](http://localhost:5173/onlinepayment/payoutQueuePayout.html).
    - [3.3取消支付交易（cancelPayout）](http://localhost:5173/onlinepayment/cancelPayout.html).
    - [3.4 ML/LBCExpress非实时放款（payoutQueueV2）](http://localhost:5173/onlinepayment/payoutQueueV2.html).
    - [3.5修改支付交易（amendTransactionV2）](http://localhost:5173/onlinepayment/amendTransactionV2.html).
- 4. 支付处理流程-实时交易说明
    - [4.1 线下支付数据验证（PayoutInquiry）](http://localhost:5173/Offlinepayment/PayoutInquiry.html).
	- [4.2 支付成功通知（PayoutPayout）](http://localhost:5173/Offlinepayment/PayoutPayout.html).
    - [4.3 收款数据验证（CollectionInquiry）](http://localhost:5173/Offlinepayment/CollectionInquiry.html).
        - [4.3.1产生7-11收款条形码（Generate711Barcode）](http://localhost:5173/Offlinepayment/Generate711Barcode.html).
    - [4.4 收款成功通知（collectionCollect）](http://localhost:5173/Offlinepayment/collectionCollect.html).
    - [4.5 支付状态查询（payoutQueryStatus）](http://localhost:5173/Offlinepayment/payoutQueryStatus.html).
    - [4.6 交易结果查询（getReportPayout(Collection)）](http://localhost:5173/Offlinepayment/getReportPayout.html).
    - [4.7余额查询（balanceQuery）](http://localhost:5173/Offlinepayment/balanceQuery.html).
- 5. 充值、结算、提现
    - [5.1通知接口-充值、结算、提现（financeNotification）](http://localhost:5173/Rechargebalancewithdrawal/financeNotification.html).
    - [5.2查詢接口-充值、结算、提现（notificationInquiry）](http://localhost:5173/Rechargebalancewithdrawal/notificationInquiry.html).
- 6. 测试工具
    - [6.1 支付测试工具](http://localhost:5173/testtoos/Paymenttestingtools.html).
    - [6.2 收款验证工具](http://localhost:5173/testtoos/Collectionverificationtool.html).
- 7. 取得基本代码列表信息
    - [7.1取得国别定义(getNationality)](http://localhost:5173/Obtainbasiccodelistinformation/getNationality.html).
    - [7.2取得公民状态(getCivilStatus)](http://localhost:5173/Obtainbasiccodelistinformation/getCivilStatus.html).
    - [7.3取得身份验证类别(getIdentificationType)](http://localhost:5173/Obtainbasiccodelistinformation/getIdentificationType.html).
    - [7.4取得城巿代码(getTownCity)](http://localhost:5173/Obtainbasiccodelistinformation/getTownCity.html).
    - [7.5取得省份代码(getProvince)](http://localhost:5173/Obtainbasiccodelistinformation/getProvince.html).
    - [7.6取得银行代码(getBankCode)](http://localhost:5173/Obtainbasiccodelistinformation/getBankCode.html).
- 8. [回传code](http://localhost:5173/Backpropagationmessagedefinition/Backpropagationmessagedefinition.html).
- 9. [支付管道（渠道代码即code值）](http://localhost:5173/Paymentpipeline/Paymentpipeline.html).
- 10. [收款管道（渠道代码即code值）](http://localhost:5173/Paymentpipeline/Paymentpipeline1.html).


<!-- This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files: -->

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

 ## Results 

 ### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre> 
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

 ## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

 ## More 

<!-- Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->

## details
This is a details block. 