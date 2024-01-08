# 4.3 收款数据验证（CollectionInquiry）
#### API由合作伙伴提供，顾客在申请还款时将触发API。

#### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName|string|50|Y|用户名称 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|collectionInquiry(固定参数值) - Ex:"action":"collectionInquiry"|
|authentication |string |255|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber|string|13~15|Y|取款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|amount|string|10.20|Y|支付金额支持数字小数位两位 -  ex:"amount":3400.00|
|phone|string|11|Y|09开头的11位数字  - Ex:"phone":"09270348095"|

#### Post data

```json
{
    "userName":"AppName@skypay",
    "action":"collectionIcnquiry",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SKY0XXXXXXXXXX",
    "amount":"3900.00",
    "phone":"6392210083333"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime - 回传时间|DateTime|50|(必填)yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode - 回传代码|int|4|（必填）系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|
|amount - 收款金额|decimal|10.2|支付金额只能为数字小数位两位(必填)监管要求需要还款信息留存档案|
|payerName - 还款人名称|string|255|还款人名字,使用逗号分割。Last name+","+First name+","+Middle name+","+Suffix(必填)监管要求需要还款信息留存档案|
|payer添加ress - 还款人地址|string|255|(必填)监管要求需要还款信息留存档案|
|payerPhone - 还款人电话|string|11|09开头11位数字(必填) - 监管要求需要还款信息留存档案|

#### Output data
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "amount":"3900.00",
    "payerName":"Last name,First name,Middle name",
    "payer添加ress":"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin",
    "payerPhone":"092210083333"
}
```

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1015|The contract number is invalid.|
|-1026|Transactions has been paid|






