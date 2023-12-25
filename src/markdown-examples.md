
# Markdown Extension Examples1

| 版本      | 上版时间 | 描述                       |Wayne.Wang|
| -------- | :-----------: | ------------------------------------------- |-----     |   
| 1.0      |   2018/06/21    | 基准1.0 |Wayne.Wang|
| 1.1      |   2018/08/03    |   3.1推送线上支付交易(payoutQueue)                       |Wayne.Wang|
                             |                             |
| 1.2      |   2018/08/07    |    $1                       |Wayne.Wang|
| 1.3      |   2018/08/07    |  Cool                       |Wayne.Wang|
| 1.4      |   2018/08/10 | $1600    111111111111111111111111                   |Wayne.Wang|
| 1.5      |   2018/08/16    |   $12                       |Wayne.Wang|
| 1.6      |   2018/08/21    |    $1                       |Wayne.Wang|
| 1.7      |   2018/08/21 | $1600                       |Wayne.Wang|
| 1.8      |   2018/08/22    |   $12                       |Wayne.Wang|
| 1.9      |   2018/08/31    |    $1                       |Wayne.Wang|
| 1.10     |   2018/09/06  |  Cool |Wayne.Wang|
| 1.11     |   2018/09/11 | $1600 |Wayne.Wang|
| 1.12     |   2018/09/19    |   $12 |Wayne.Wang|
| 1.13     |   2018/11/28    |    $1 |Wayne.Wang|
| 1.14     |   2018/12/07 | $1600 |Wayne.Wang|
| 1.15     |   2019/01/31    |   $12 |Wayne.Wang|
| 1.16     |   2019/02/18    |    $1 |Wayne.Wang|
| 1.17     |   2019/03/24  |  Cool |Wayne.Wang|
| 1.18     |   2019/04/29 | $1600 |Wayne.Wang|
| 1.19     |   2019/05/06   |   $12 |Wayne.Wang|
| 1.20     |   2019/06/18   |    $1 |Wayne.Wang|
| 1.21     |   2019/07/08 | $1600 |Wayne.Wang|
| 1.22     |   2019/08/05    |   $12 |Wayne.Wang|
| 1.23     |   2019/08/14    |    $1 |Wayne.Wang|
| 1.24     |   2019/08/25   |  Cool |Wayne.Wang|
| 1.27     |   2019/10/21    |    $1 |Wayne.Wang|
| 1.29     |   2020/02/24    |   $12 |Wayne.Wang|
| 1.30     |   2020/08/28    |    $1 |Wayne.Wang|
| 1.31     |   2020/09/29   |  Cool |Wayne.Wang|
| 1.32     |   2020/11/19 | $1600 |Wayne.Wang|
| 1.33     |   2021/01/26    |   $12 |Wayne.Wang|
| 1.35     |   2023/5/11    |    $1 |Wayne.Wang|
| 1.36     |   2023/12/15    |   $12 |Wayne.Wang|

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
