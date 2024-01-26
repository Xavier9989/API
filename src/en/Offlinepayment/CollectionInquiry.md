# 5.3 Verification of payment data（CollectionInquiry）
#### The API is provided by partners and will be triggered by customers when applying for repayment.

### Input parameters

| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName|string|50|Y|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>collectionInquiry(Fixed parameter values) - Ex:"action":"collectionInquiry"|
|authentication |string |255|Y|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber|string|13~15|Y|Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|amount|string|10.20|Y|Must be the actual amount received by the user<br> with a maximum of two decimal places -  ex:"amount":3400.00|
|phone|string|11|Y|11 digit number starting with 09 <br> Ex:"phone":"09270348095"|

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
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:-----:|--------------------------------|   
|responseTime|DateTime|50|Y|Return time <br>yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode|int|4|Y|Return Code<br> System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and clearly describe the content of the return|
|responseDescription|string|255| Y|Return content description<br> response information|
|amount|decimal|10.20|Y|Receipt amount <br> Payment amount can only be two decimal places (required). Regulatory requirements require repayment information to be kept in a file|
|payerName|string|255|Y|Reparer's name <br> separated by commas。Last name+","+First name+","+Middle name+","+Suffix Regulatory requirements require repayment information to be retained in a file|
|payer increase ress|string|255|Y|The regulatory requirements for the borrower's address require the retention of repayment information in a file|
|payerPhone|string|11|Y|Repayment person's phone number<br>11 digits starting with 09. Regulatory requirements require repayment information to be retained in a file|

### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payerName"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payer increase ress"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font>,<br>
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






