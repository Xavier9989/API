# 6.1 CollectionInquiry
#### The API is provided by partners and will be triggered by customers when applying for repayment.


![收款交易顺序图](/en/public/收款交易顺序图1.png)



### <font color=red>collectionInquiry Verify receipt information</font>

- (1) CollectionInquiry is used to verify whether this payment information exists

- (2) CollectionInquiry occurs in real time when the withdrawal person requests payment at an offline store

- (3) The withdrawal person needs to provide a payment code and necessary identity verification information, and conduct payment verification through the cashier or convenience store's automatic payment machine

- (4) The trigger point for the collectionInquiry function is that when the offline store cashier or cash withdrawal person selects the "send collectionInquiry" function request through the convenience store kiosk, they will send it to SkyPay



### <font color=red>CollectionCollect replies with successful payment information</font>

- (1) CollectionCollect is used by offline stores to reply to confirmed completed payment transactions

- (2) After the cashier completes the confirmation, a real-time collectionCollect message will be sent back

- (3) Function trigger point, at the cashier, select collectionCollect and reply with a successful payment message to the SkyPay server

### Input parameters

| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName|string|50|YES|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>collectionInquiry(Fixed parameter values) - Ex:"action":"collectionInquiry"|
|authentication |string |255|YES|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber|string|13~15|YES|Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|amount|decimal|10.20|YES|amount of money<br>Must be the actual amount received by the user<br> with a maximum of two decimal places -  ex:"amount":3400.00|
|phone|string|11|YES|phone number<br>11 digit number starting with 09/08 <br> Ex:"phone":"09270348095"|

### Post data


{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"collectionIcnquiry"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"6392210083333"</font><br>
}


### Output parameters
| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:-----:|--------------------------------|   
|responseTime|DateTime|50|YES|Return time <br>yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode|int|4|YES|Return Code<br> System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and clearly describe the content of the return|
|responseDescription|string|255| YES|Return content description<br> response information|
|amount|decimal|10.20|YES|Receipt amount <br> Payment amount can only be two decimal places (required). Regulatory requirements require repayment information to be kept in a file|
|payerName|string|255|YES|Reparer's name <br> separated by commas。Last name+","+First name+","+Middle name+","+Suffix Regulatory requirements require repayment information to be retained in a file|
|payer address|string|255|YES|The regulatory requirements for the borrower's address require the retention of repayment information in a file|
|payerPhone|string|11|YES|Repayment person's phone number<br>11 digits starting with 09/08. Regulatory requirements require repayment information to be retained in a file|

### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payerName"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payer address"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payerPhone"</font> : <font color=blue>"092210083333"</font><br>
}


### Return code:

| Status Code                        |   Status Description    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1015|The contract number is invalid.|
|-1026|Transactions has been paid|






