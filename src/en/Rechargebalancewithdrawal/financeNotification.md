# 8.1 financeNotification

### This API is provided by partners and is requested by SKYPAY to send payment notifications for "recharge, settlement, and withdrawal" to partners at the following times.

- Recharge、settle、withdraw

    - (1) Payment account recharge - When manually recharged and confirmed by SKYPAY finance to be credited to the system

    - (2) Payment settlement to recharge - After payment settlement, transfer funds from the payment account to the recharge and payment account (manually or automatically configured)

    - (3) Account balance transfer - When the transfer of funds from different company accounts occurs, two accounts will be notified simultaneously

    - (4) Payment transaction settlement - When the system automatically settles payment transactions and merges them into the account

    - (5) Withdrawal from receiving account - Withdrawal will be made after receiving settlement (backend function), and SKYPAY finance will confirm the completion of payment

    - (6) Withdrawal from payment account - When the partner applies for withdrawal from the payment account and SKYPAY finance confirms completion of the payment
### Recharge、 settlement、 and withdrawal notification process
![充值、结算、提现](/充值、结算、提现.png "Shiprock")

### <font color = red>The callback interface is only used for notification purposes. Regardless of any status received, it can only return responseCode 1000, indicating successful notification receipt.</font>

### Input parameters

| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|
|userName|string|50|YES|User name<br>provided by SkyPay - <br>"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>payoutInquiry(Fixed parameter values) - Ex:"action":"payoutInquiry"|
|authentication  |string |255|YES|Verification Code<br>Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transctionDate |DateTime|50|YES |notice date -  ex:2023-06-18 17:52:10|
|companyPrefix |string|5| YES |Company Code <br>  ex:SKY98|
|companyName |string|200| YES |corporate name <br>ex:Skybridge Payment Inc.|
|accountNo |string|5| YES  |account - ex:SKY98|
|sourceAccountNo |string|20|  YES | Fund source account <br> (actual bank account number, <br>only provided at withdrawal)|
|beneficiaryAccountNo |string|20| YES  |Fund purpose account<br>(actual bank account number, <br>only provided during recharge and withdrawal)|
|statementType|string|1|YES|Notification type:<br>1: Recharge from payment account<br>2: Recharge from collection settlement<br>3: Account balance transfer<br>4: Collectiontransactionsettlement<br>5: Withdrawal from payment account<br>6: Withdrawal from payment account|
|signType  |string|10| YES |Type of fund increase or decrease<br> recharge:Additional items <br> reduce:deduction|
|Amount |int||   YES  |money <br> Ex:1200000|
|Currency |string|3|  YES  | Fixed Currency <br> PHP|
|referenceNumber|string|15| YES |Transaction Number (Unique)<br>This number can be queried <br>in the background- S <br>The starting number is the transaction generated in the settlement function (backend)- D <br>The starting number is the transaction <br>generated in the recharge function (backend) <br> {caller Name} <br>The starting number is the transaction automatically <br>settled by the system。<br>ex:S-20231204-001D-20231204-001,skypay-20231204|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName" </font>: <font color=blue>"AppName@skypay" </font>,<br> 
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"financeNotification"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"transctionDate"</font> : <font color=blue>"2023-06-18 17:52:10"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"companyPrefix"</font> : <font color=blue>"SKY98"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"companyName"</font> : <font color=blue>"SKYPAY"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"091234567899"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sourceAccountNo"</font> : <font color=blue>""</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"beneficiaryAccountNo"</font> : <font color=blue>"001234567899"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"statementType"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"signType"</font> : <font color=blue>"recharge"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>12000000</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNumber"</font> : <font color=blue>"D-20231204-001"</font><br>
}

### Output parameters

| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time<br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return code <br>1000|
|responseDescription |string|255|Return content description <br> response information|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}

### Return code
| Status  Code                     |   Status Description    | 
| :-------------------------: | :-----------: |
|1000 |Success|







