# 5.2 PayoutPayout
### The function of replying to successful withdrawal information is provided by the partner. When the offline store cashier confirms the withdrawal, they will send a successful withdrawal message to Skypay and then reply to the partner.

### Input parameters
| parameter                        |    type     | length   |must |describe|
| :-------------------------: | :-----------: |:-----:|:--:|--------------------------------|   
|userName|string|50|YES|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>payoutPayout(Fixed parameter values) - Ex:"action":"payoutPayout"|
|authentication |string |100|YES|Verification Code<br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber |string|13~15|YES|Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|withdrawChannel|int ||YES|Payment Pipeline <br> For detailed content, please refer to Chapter 12 - Ex:Payment pipeline name 12	RDPawnshop|
|payTime|DateTime||YES|time of payment<br> (yyyy-MM-dd HH:mm:ss) - Cashier payment time|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutPayout"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payTime"</font> : <font color=blue>"2019-02-18 14:59:33"</font><br>
}


### Output parameters:

| parameter                        |    type     | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime |DateTime|50|Return time<br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return Code<br> System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and clearly describe the content of the return|
|responseDescription |string|255|Feedback Content Description <br> Response Information (Required)|


### Output data：

{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}


### Return code:

| Status Code                        |   Status Description   | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1012|Control number invalid or expired|
|-1014|Prefix of Control number is incorrect.|
|-1016|Insufficient balance|
|-1022|Invalid Accountnumber|
|-1026|Transactions has been paid|
