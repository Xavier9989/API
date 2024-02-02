# 6.3 collectionCollect

##### This service is provided by the partner and will be triggered by the offline store cashier to confirm reimbursement.

### Input parameters
| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|YES|User name<br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>generate711Barcode(Fixed parameter values) - Ex:"action":"generate711Barcode"|
|authentication|string |255|YES|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber |string|13~15|YES|Payment code<br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|amount|decimal|10.20|YES|amount of money<br>Must be the actual amount received by the user<br> with a maximum of two decimal places -  ex:"amount":3400.00|
|phone|string|50|YES|phone number<br>11 digit number starting with 09/08  Ex:"phone":"09270348095"|
|receiptNumber  |string|50|YES|  Receipt No|
|collectedTime|DateTime| |YES|(yyyy-MM-dd HH:mm:ss) <br> Collection time, date format yyyy-MM-dd HH:mm:ss|
|payChannel|int||YES|Payment Pipeline <br> For detailed instructions, please refer to Chapter 12[Collection channel code](/en/Paymentpipeline/Paymentpipeline1.md)|

### Post data


{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"collectionCollect"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"6392210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"receiptNumber"</font> : <font color=blue>"B6C13B76E4BF"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"collectedTime"</font> : <font color=blue>"2018-06-18 17:52:10"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payChannel"</font> : <font color=blue>"1"</font><br>
}


### Output parameters
| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|Return time <br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode |int|4|Return Code <br> System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and clearly describe the content of the return|
|responseDescription |string|255|Feedback Content Description<br> Response Information |

### Output data：


{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}


### Return code:

| Status  Code                      |    Status Description     | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification  failed|
|-1009|An Unpredictable exception occurs|
|-1015|The transaction has been collected|
|-1026|Transactions has been paid|








