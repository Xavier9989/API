# 5.2 查詢接口-充值、结算、提现（notificationInquiry）

### 这支API是由SKYPAY提供,由合作伙伴发动请求進行查詢。提供日期区间及类型之查询，并返回日期及类型范围内「充值、结算、提现」之通知记录。

### Input parameters

| 参数                        |    类型     | 长度  |Y/N  |描述|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|Y|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|调用行为<br>payoutInquiry(固定参数值) - Ex:"action":"payoutInquiry"|
|authentication |string |255.|Y|验证密钥<br>Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate|Date|10| |通知日期<br>开始- ex:2023-06-18|
|transEndDate |Date|10| |通知日期<br>结束 - ex:2023-06-19|
|statementTypes |string[]|| |通知类型：<br>1:打款帐户充值 <br> 2:收款结算转充值 <br> 3:帐户馀额互转 <br> 4:收款交易结算<br> 5:收款帐户提现 <br> 6:打款帐户提现|

### Post data


{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font>  :  <font color=blue>"AppName@skypay" </font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font>   :   <font color=blue>"notificationInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font>   :   <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"transctionDate"</font> :  <font color=blue>"2023-06-18 17:52:10"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"statementTypes"</font> : <font color=blue>["1","2","3"]</font><br>
}


### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 <br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 <br> 1000|
|responseDescription |string|255|Success|
|notifications |string[]|255|通知数组名<br>Array|
|transctionDate  |DateTime|50|通知日期 <br> ex:2023-06-18 17:52:10|
|companyPrefix |string|5|公司编码 <br> ex:SKY98|
|companyName |string|200.|公司名称 <br> ex:Skybridge Payment Inc.|
|accountNo |string|5|帐户<br> ex:SKY98|
|sourceAccountNo |string|20|资金来源帐号 <br> (实际银行帐号，只在提现时提供)|
|beneficiaryAccountNo |string|20|资金目的帐号 <br> (实际银行帐号，只在充值及提现时提供)|
|statementType |string|1|通知类型 :<br>1:打款帐户充值 <br> 2:收款结算转充值 <br> 3:帐户馀额互转 <br> 4:收款交易结算 <br> 5:收款帐户提现 <br> 6:打款帐户提现|
|signType |string|10|资金增减类型 :<br> recharge:增项 <br> reduce:减项|
|Amount|int||金額 - Ex:1200000|
|Currency |string|3|固定币别<br>PHP|
|referenceNumber|string|15|交易编号(唯一)  <br> 此编号可于后台查询。- S–开头编号为结算功能(後台)中生成的交易。 - D–开头编号为充值功能(後台)中生成的交易- {callerName}–开头编号为系统自动结算的交易。-ex:S-20231204-001D-20231204-001,skypay-20231204|


### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2023-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"notifications"</font> :[<br>
    &ensp;&ensp;{<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"companyPrefix"</font> : <font color=blue>"SKY98"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"companyName"</font> : <font color=blue>"SKYPAY"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"SKY98"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"sourceAccountNo"</font> : <font color=blue>""</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"beneficiaryAccountNo"</font> : <font color=blue>"001234567899"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"statementType"</font> : <font color=blue>"1"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"transctionDate"</font> : <font color=blue>"2023-12-04 17:52:10.5211"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"signType"</font> : <font color=blue>"recharge"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>12000000</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNumber"</font> : <font color=blue>"D-20231204-001"</font><br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    &ensp;&ensp;&ensp;&ensp;{<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"companyPrefix"</font> : <font color=blue>"SKY98"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"companyName"</font> : <font color=blue>"SKYPAY"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"SKY98"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"sourceAccountNo"</font> : <font color=blue>""</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"beneficiaryAccountNo"</font> : <font color=blue>""</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"statementType"</font> : <font color=blue>"2"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"transctionDate"</font> : <font color=blue>"2023-12-04 17:52:10.5211"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"signType"</font> : <font color=blue>"recharge"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>12000000</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNumber"</font> : <font color=blue>"D-20231204-002"</font><br>
    &ensp;&ensp;&ensp;&ensp;}<br>
  &ensp;&ensp;]<br>
}

### Return code
| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|




