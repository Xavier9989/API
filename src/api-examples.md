---
outline: deep
---

# API 目录
### SkyPay第三支付API规范	
_________________
1232
    版本	2
    目录	7
    前言	9
    API文档说明	10
    1. 数据加密说明	10
    2. 加密程序说明	10
    3. 线上支付说明	11
3.1推送线上支付交易(payoutQueue)	11
3.2回传支付确认讯息（payoutQueuePayout）	16
3.3取消支付交易（cancelPayout）	18
3.4 ML/LBCExpress非实时放款（payoutQueueV2）	20
3.5修改支付交易（amendTransactionV2）	23
4. 支付处理流程-实时交易说明	27
4.1 线下支付数据验证（PayoutInquiry）	28
4.2 支付成功通知（PayoutPayout）	31

<!-- This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files: -->

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

<!-- ## Results -->

<!-- ### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre> -->
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

<!-- ## Results -->

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

<!-- ## More -->

<!-- Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->

<!-- ## details
This is a details block. -->