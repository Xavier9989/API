# 5.2 查詢接口-充值、结算、提现（notificationInquiry）
### 这支API是由SKYPAY提供,由合作伙伴发动请求進行查詢。提供日期区间及类型之查询，并返回日期及类型范围内「充值、结算、提现」之通知记录。
#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|payoutInquiry(固定参数值)(必填) - Ex:"action":"payoutInquiry"|
|authentication  - 验证码|string |50|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate - 通知日期-开始|Date|10|查询开始日 - ex:2023-06-18|
|transEndDate - 通知日期-结束|Date|10|查询结束日 - ex:2023-06-19|
|statementTypes - 通知类型|string[]||1:打款帐户充值 - 2:收款结算转充值 - 3:帐户馀额互转 - 4:收款交易结算 - 5:收款帐户提现 - 6:打款帐户提现|
#### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"notificationInquiry",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "transctionDate":"2023-12-04",
    "statementTypes":["1","2","3"]
}
```
#### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime- 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode - 回传代码|int|4|1000|
|responseDescription - 回传内容描述|string|255|Success|
|notifications - 通知数组名|string[]|255|Array|

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|transctionDate - 通知日期|DateTime|50|ex:2023-06-18 17:52:10|
|companyPrefix - 公司编码|string|5|ex:SKY98|
|companyName - 公司名称|string|200|ex:Skybridge Payment Inc.|
|accountNo - 帐户|string|5|ex:SKY98|
|sourceAccountNo - 资金来源帐号|string|20|来源帐号(实际银行帐号，只在提现时提供)|
|beneficiaryAccountNo - 资金目的帐号|string|20|目的帐号(实际银行帐号，只在充值及提现时提供)|
|statementType - 通知类型|string|1|1:打款帐户充值 - 2:收款结算转充值 - 3:帐户馀额互转 - 4:收款交易结算 - 5:收款帐户提现 - 6:打款帐户提现|
|signType - 资金增减类型|string|10|recharge:增项 - reduce:减项|
|Amount - 金額|int||Ex:1200000|
|Currency - 货币|string|3|固定币别PHP|
|referenceNumber交易编号(唯一)|string|15|此编号可于后台查询。- S–开头编号为结算功能(後台)中生成的交易。 - D–开头编号为充值功能(後台)中生成的交易- {callerName}–开头编号为系统自动结算的交易。-ex:S-20231204-001D-20231204-001,skypay-20231204|

#### Output data
```md
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




