# 4.4 收款成功通知（collectionCollect）
##### 这支服务是由合作伙伴提供,它将由线下店出纳触发以确认报销。

#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|generate711Barcode(固定参数值)(必填) - Ex:"action":"generate711Barcode"|
|authentication  - 验证码|string |255|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber - 收款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|amount - 金额|decimal|10.2|必须是用户实际收款金额,小数点最高二位数(必填) -  ex:"amount":3400.00|
|phone - 手机号|string|50|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|receiptNumber - 收据编号|string|50|(必填) - 收据编号|
|collectedTime - 收款时间|DateTime| |(yyyy-MM-dd HH:mm:ss) - (必填) - 收款时间,日期格式yyyy-MM-dd HH:mm:ss|
|payChannel - 收款管道|int||收款管道,详细说明请参考第10章(必填)|

#### Post data

```md
{
    "userName":"AppName@skypay",
    "action":"collectionCollect",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "contractNumber":"SKY0XXXXXXXXXX",
    "amount":"3900.00",
    "phone":"6392210083333",
    "receiptNumber":"B6C13B76E4BF",
    "collectedTime":"2018-06-18 17:52:10",
    "payChannel":"1"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime- 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode - 回传代码|int|4|系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|

#### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
}
```

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|
|-1001|Verification  failed|
|-1009|An Unpredictable exception occurs|
|-1015|The transaction has been collected|
|-1026|Transactions has been paid|








