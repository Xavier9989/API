---
outline: deep
---

# API 目录
### SkyPay第三支付API规范	
_________________
- 版本
- 目录
- 前言
- API文档说明
    - 1. 数据加密说明
    - 2. 加密程序说明
- 3. 线上支付说明
    - [3.1推送线上支付交易(payoutQueue)](http://localhost:5173/test/test-1.html).
    - [3.2回传支付确认讯息（payoutQueuePayout）)](http://localhost:5173/test/test-2.html).
    - 3.3取消支付交易（cancelPayout
    - 3.4 ML/LBCExpress非实时放款（payoutQueueV2）  
    - 3.5修改支付交易（amendTransactionV2）
- 4. 支付处理流程-实时交易说明
    - 4.1 线下支付数据验证（PayoutInquiry）
	- 4.2 支付成功通知（PayoutPayout）
    - 4.3 收款数据验证（CollectionInquiry）
        - 4.3.1产生7-11收款条形码（Generate711Barcode）
    - 4.4 收款成功通知（collectionCollect）
    - 4.5 支付状态查询（payoutQueryStatus）
    - 4.6 交易结果查询（getReportPayout(Collection)）
    - 4.7余额查询（balanceQuery）
- 5. 充值、结算、提现
    - 5.1通知接口-充值、结算、提现（financeNotification）
    - 5.2查詢接口-充值、结算、提现（notificationInquiry）
- 6. 测试工具
    - 6.1 支付测试工具
    - 6.2 收款验证工具
- 7. 取得基本代码列表信息
    - 7.1取得国别定义(getNationality)
    - 


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