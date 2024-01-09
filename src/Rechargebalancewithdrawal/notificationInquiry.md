
# 5.2 查詢接口-充值、结算、提现（notificationInquiry）
### 这支API是由SKYPAY提供,由合作伙伴发动请求進行查詢。提供日期区间及类型之查询，并返回日期及类型范围内「充值、结算、提现」之通知记录。
#### Input parameters
| 参数                        |    类型     | 长度  |Y/N  |描述|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|payoutInquiry(固定参数值) - Ex:"action":"payoutInquiry"|
|authentication |string |255.|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate|Date|10| |通知日期-开始- ex:2023-06-18|
|transEndDate |Date|10| |通知日期-结束 - ex:2023-06-19|
|statementTypes |string[]|| |通知类型：<br>1:打款帐户充值 <br> 2:收款结算转充值 <br> 3:帐户馀额互转 <br> 4:收款交易结算<br> 5:收款帐户提现 <br> 6:打款帐户提现|
### Post data


```json
{
    "userName"  :  "AppName@skypay" ,
    "action"   :   "notificationInquiry",
    "authentication"   :   "30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "transctionDate" :  "2023-06-18 17:52:10",
    "statementTypes" : ["1","2","3"]
}
```

#### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 - 1000|
|responseDescription |string|255|Success|
|notifications |string[]|255|通知数组名 - Array|
|transctionDate  |DateTime|50|通知日期 - ex:2023-06-18 17:52:10|
|companyPrefix |string|5|公司编码 - ex:SKY98|
|companyName |string|200.|公司名称 - ex:Skybridge Payment Inc.|
|accountNo |string|5|帐户 - ex:SKY98|
|sourceAccountNo |string|20|资金来源帐号 - (实际银行帐号，只在提现时提供)|
|beneficiaryAccountNo |string|20|资金目的帐号 - (实际银行帐号，只在充值及提现时提供)|
|statementType |string|1|通知类型 :<br>1:打款帐户充值 <br> 2:收款结算转充值 <br> 3:帐户馀额互转 <br> 4:收款交易结算 <br> 5:收款帐户提现 <br> 6:打款帐户提现|
|signType |string|10|资金增减类型 :<br> recharge:增项 <br> reduce:减项|
|Amount|int||金額 - Ex:1200000|
|Currency |string|3|固定币别PHP|
|referenceNumber|string|15|交易编号(唯一)  - 此编号可于后台查询。- S–开头编号为结算功能(後台)中生成的交易。 - D–开头编号为充值功能(後台)中生成的交易- {callerName}–开头编号为系统自动结算的交易。-ex:S-20231204-001D-20231204-001,skypay-20231204|


### Output data

```json
{
    "responseTime":"2023-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "notifications":[
    {
        "companyPrefix":"SKY98",
        "companyName":"SKYPAY",
        "accountNo":"SKY98",
        "sourceAccountNo":"",
        "beneficiaryAccountNo":"001234567899",
        "statementType":"1",
        "transctionDate":"2023-12-04 17:52:10.5211",
        "signType":"recharge",
        "amount":12000000,
        "currency":"PHP",
        "referenceNumber":"D-20231204-001"
    },
    {
        "companyPrefix":"SKY98",
        "companyName":"SKYPAY",
        "accountNo":"SKY98",
        "sourceAccountNo":"",
        "beneficiaryAccountNo":"",
        "statementType":"2",
        "transctionDate":"2023-12-04 17:52:10.5211",
        "signType":"recharge",
        "amount":12000000,
        "currency":"PHP",
        "referenceNumber":"D-20231204-002"
    }
  ]
}
```

### Return code
| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|




