# 4.3.1产生7-11收款条形码（Generate711Barcode）
#### 该 API 的目的是减少填写错误的合同编号金额的可能性。条形码生成有效期 24 小时。客户需要在其 Apps中将 API 返回的代码中的 referenceNumber 生成为 Code128-A 条形码。取现人转到 7-11 进行收款后，他们可以向店员显示条形码以处理收款。店员扫描条形码后，收款流程将不会改变，在进一步处理之前，它将再次调用收款查询。

#### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication|string |255|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber|string|13~15|Y|收款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name |string |50|Y|还款人名字  - 使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone |string|50|Y|09开头的11位数字 - Ex:"phone":"09270348095"|
|amount |decimal|10.20|Y|必须是用户实际收款金额,小数点最高二位数 -  ex:"amount":3400.00|

#### Post data
```json
{
    "userName":"AppName@skypay",
    "action":"generate711Barcode",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SKY0XXXXXXXXXX",
    "amount":"3900.00",
    "phone":"6392210083333",
    "name":"MyName,This,Is"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 - 系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription |string|255.| 回传内容描述 - 响应信息（必填）|
|referenceNumber|string|50|Generated Code|

##### Output data：

```json
{
  "responseTime":"2018-06-18 17:52:10.5211",
  "responseCode":"1000",
  "responseDescription":"Success",
  "referenceNumber":"9919-2940-0349"
}
```

根据API返回的referenceNumber生成的Code128-A条码如下
![](../public/711条形码.png "Shiprock")





