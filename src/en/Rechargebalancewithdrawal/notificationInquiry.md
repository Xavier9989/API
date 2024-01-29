# 6.5 Query Interface - Recharge, Settlement, Withdrawal (Notification Inquiry)

### This API is provided by SKYPAY and is requested by partners for querying. Provide date range and type queries, and return notification records for "recharge, settlement, and withdrawal" within the date and type range.

### Input parameters
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|Y|User name<br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>payoutInquiry(Fixed parameter values) - Ex:"action":"payoutInquiry"|
|authentication |string |255|Y|Verification Code <br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate|Date|10| |Notification Date <br> Start- ex:2023-06-18|
|transEndDate |Date|10| |Notification Date <br> End - ex:2023-06-19|
|statementTypes |string[]|| |Notification type:<br>1. Recharge from payment account<br>2. Recharge from payment settlement<br>3. Account balance transfer<br>4. Payment transaction settlement<br>5. Withdrawal from payment account<br>6. Withdrawal from payment account|
### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font>  :  <font color=blue>"AppName@skypay" </font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font>   :   <font color=blue>"notificationInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font>   :   <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"transctionDate"</font> :  <font color=blue>"2023-06-18 17:52:10"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"statementTypes"</font> : <font color=blue>["1","2","3"]</font><br>
}

### Output parameters

| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time <br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return code <br> 1000|
|responseDescription |string|255|Success|
|notifications |string[]|255|Notification array name<br>Array|
|transctionDate  |DateTime|50|notice date<br> ex:2023-06-18 17:52:10|
|companyPrefix |string|5|Company Code<br> ex:SKY98|
|companyName |string|200|corporate name <br> ex:Skybridge Payment Inc.|
|accountNo |string|5|account <br> ex:SKY98|
|sourceAccountNo |string|20|Fund source account <br> (actual bank account number, only provided at withdrawal)|
|beneficiaryAccountNo |string|20|Fund purpose account<br>(actual bank account number, only provided during recharge and withdrawal)|
|statementType |string|1|Notification type:<br>1. Recharge from payment account<br>2. Recharge from payment settlement<br>3. Account balance transfer<br>4. Payment transaction settlement<br>5. Withdrawal from payment account<br>6. Withdrawal from payment account|
|signType |string|10|Type of fund increase or decrease :<br> recharge:Additional items <br> reduce:deduction|
|Amount|int||money <br> Ex:1200000|
|Currency |string|3|Fixed CurrencyPHP|
|referenceNumber|string|15|Transaction Number (Unique) <br> This number can be queried in the background- S - The starting number is the transaction generated in the settlement function (backend)- D - The starting number is the transaction generated in the recharge function (backend) - {callerName}–The starting number is a transaction that is automatically settled by the system. -ex:S-20231204-001D-20231204-001,skypay-20231204|

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
| Status   Code                    |   Status Description   | 
| :-------------------------: | :-----------: |
|1000 |Success|




