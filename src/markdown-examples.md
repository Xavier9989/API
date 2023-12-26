
# Markdown Extension Examples1

| 版本      | 上版时间 | 描述                       |Wayne.Wang|
| ------ | :-----------: | -------------------------------------------|-----     |   
| 1.0      |   2018/06/21    | 基准1.0 |Wayne.Wang|
| 1.1      |   2018/08/03    |   3.1推送线上支付交易(payoutQueue)     添加输入参数–withdrawChannel。  |Wayne.Wang|
| 1.2      |   2018/08/07    |3.2回传支付确认讯息（payoutQueuePayout）添加输入参数–userName&authentication。 |Wayne.Wang|
| 1.3      |   2018/08/07    |   3.2回传支付确认讯息（payoutQueuePayout）更新输入参数–sername(typo userName)。 |Wayne.Wang|
| 1.4      |   2018/08/10    |3.3取消支付交易（cancelPayout）更新所有的输入参数。|Wayne.Wang|
| 1.5|2018/08/16|4.3收款数据验证（CollectionInquiry） 。4.4收款成功通知（collectionCollect）更新输入参数of sample(typo contractNumber) 3.1推送线上支付交易(payoutQueue)-更新输入参数–withdrawChannel description。|Wayne.Wang|
| 1.6      |   2018/08/21    |3.3取消支付交易（cancelPayout）更新输入参数–contractNumbers[]。 |Wayne.Wang|
| 1.7      |   2018/08/21    |4.4收款成功通知（collectionCollect）添加输入参数–receiptNumber。|Wayne.Wang|
| 1.8      |   2018/08/22    |3.Payout process(non realtime transaction)更新流程图。 |Wayne.Wang|
| 1.9      |   2018/08/31    |3.1推送线上支付交易(payoutQueue) 更新输入参数–Phone is 10 digits  。4.1线下支付数据验证（PayoutInquiry）更新响应参数–Phone is 10 digits|Wayne.Wang|
| 1.10     |   2018/09/06    |在每一章中添加期望返回代码。|Wayne.Wang|
| 1.11     |   2018/09/11    |添加6。测试工具|Wayne.Wang|
| 1.12     |   2018/09/19    | 4.4收款成功通知（collectionCollect）添加输入参数–collectedTime。|Wayne.Wang|
| 1.13     |   2018/11/28    |3.2回传支付确认讯息（payoutQueuePayout）添加输入参数–action  。4.2支付成功通知（PayoutPayout）添加输出参数–withdrawChannel。4.2支付成功通知（PayoutPayout）添加输入参数–payChannel。4.4收款成功通知（collectionCollect）更新输入参数–4:ECPay。4.2支付成功通知（PayoutPayout）添加输入参数–companyName。|Wayne.Wang|
| 1.14     |   2018/12/07    |3.1推送线上支付交易(payoutQueue)添加输入参数–accountNo,bankNo,bankProvince,bankCity添加输出参数–referenceNo。7.Return Code添加新的返回代码。 添加 8.withdrawChannel 。|Wayne.Wang|
| 1.15     |   2019/01/31    |3.1推送线上支付交易(payoutQueue)删除 Bank,Paymaya channel添加新的返回代码。7.Return Code更新返回代码列表。8.withdrawChannel更新可用的渠道。|Wayne.Wang|
| 1.16     |   2019/02/18    |3.1推送线上支付交易(payoutQueue)MLhuillier&Palawan Pawnshop going to stop using and the stop date will annoce at future.。4.1线下支付数据验证（PayoutInquiry）Final the api sepc.。4.2支付成功通知（PayoutPayout）Final the api spec。4.3收款数据验证（CollectionInquiry）添加输出参数。 删除 8.withdrawChannel。|Wayne.Wang|
| 1.17     |   2019/03/24    |  Cool |Wayne.Wang|
| 1.18     |   2019/04/29    | $1600 |Wayne.Wang|
| 1.19     |   2019/05/06    |   $12 |Wayne.Wang|
| 1.20     |   2019/06/18    |    $1 |Wayne.Wang|
| 1.21     |   2019/07/08    | $1600 |Wayne.Wang|
| 1.22     |   2019/08/05    |   $12 |Wayne.Wang|
| 1.23     |   2019/08/14    |    $1 |Wayne.Wang|
| 1.24     |   2019/08/25    |  Cool |Wayne.Wang|
| 1.27     |   2019/10/21    |    $1 |Wayne.Wang|
| 1.29     |   2020/02/24    |   $12 |Wayne.Wang|
| 1.30     |   2020/08/28    |    $1 |Wayne.Wang|
| 1.31     |   2020/09/29    |  Cool |Wayne.Wang|
| 1.32     |   2020/11/19    | $1600 |Wayne.Wang|
| 1.33     |   2021/01/26    |   $12 |Wayne.Wang|
| 1.35     |   2023/5/11     |    $1 |Wayne.Wang|
| 1.36     |   2023/12/15    |   $12 |Wayne.Wang|

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Maxwell's equations:**

| equation                                                                                                                                  | description |
| --------------------------------- | ------------------------------------ |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$ | divergence of $\vec{\mathbf{B}}$ is zero|
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$| curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}\nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_|


This page demonstrates some of the built-in markdown extensions provided by VitePress.

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:


**Input**
````md
```js{4}
export default {
  data () {
    return {
      msg: '成功过!'
    }
  }
}
```
````
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item



1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    

3.  Close the file.


*   And here's the third list item.


**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```


**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
