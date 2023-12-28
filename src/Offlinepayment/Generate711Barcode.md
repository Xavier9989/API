# 4.3.1产生7-11收款条形码（Generate711Barcode）
#### 该 API 的目的是减少填写错误的合同编号金额的可能性。条形码生成有效期 24 小时。客户需要在其 Apps中将 API 返回的代码中的 referenceNumber 生成为 Code128-A 条形码。取现人转到 7-11 进行收款后，他们可以向店员显示条形码以处理收款。店员扫描条形码后，收款流程将不会改变，在进一步处理之前，它将再次调用收款查询。

#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|generate711Barcode(固定参数值)(必填) - Ex:"action":"generate711Barcode"|
|authentication  - 验证码|string |255|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber - 收款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|name - 姓名|string |50|（必填）还款人名字,使用逗号分割。(必填)  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone - 手机号|string|50|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|amount - 金额|decimal|10.2|必须是用户实际收款金额,小数点最高二位数(必填) -  ex:"amount":3400.00|

#### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"generate711Barcode",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "contractNumber":"SKY0XXXXXXXXXX",
    "name":"MyName,This,Is",
    "phone":"09123456789",
    "amount":"3900"
}
```
#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime- 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode - 回传代码|int|4|系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|
|referenceNumber|string|50|Generated Code|

##### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "referenceNumber":"9919-2940-0349"
}
```

根据API返回的referenceNumber生成的Code128-A条码如下
![](../public/711条形码.png "Shiprock")





