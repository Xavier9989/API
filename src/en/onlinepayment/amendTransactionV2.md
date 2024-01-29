# 4.3  Modify payment transactions（amendTransactionV2）
#### When there is an error in the payment data push, this interface can be used for data correction. The most common error is a user name error (typo, sequence error). This interface is related to「4.1 Payout–payoutQueueV2」The fields are the same, please input new values for the fields you want to modify, and input the original values.

### <font color = red>pay attention to ：</font>

 ### <font color = red>If it cannot be modified, please cancel the transaction first and then use the API"4.1 Payout-payoutQueueV2"Resend。</font>

### <font color = red>LBCExpress channel transactions, only the name of the payee can be modified, and other information cannot be modified。</font>

### Input parameters:
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|  
|userName |string|50|Y|User name<br>  provided by SkyPay Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>amendTransactionV2(Fixed parameter values) - Ex:"action":"amendTransactionV2"|
|authentication  |string |50|Y| Verification Code<br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender |string|100| Y|Payer <br> Product APP Name (Required: Designed by Partner) <br>Ex:"sender":"APP NAME"|
|controlNumber  |string|13~15|Y|Withdrawal code <br> Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|name |string |50|Y|Name of withdrawal person <br> separated by commas。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday|Date|10|Y | Birthday format：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|identificationId  |string|50|Y|ID number<br> Depending on different authentication methods, hold the ID number - Ex:"identificationId":"442301922000"|
|identificationTypeId |string |3|Y|Please refer to Chapter 8.3 to obtain the identification type for verifying the type of identity document (bank)<br> Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone |string|11|Y| 11 digit number starting with 09 <br> Ex:"phone":"09270348095"|
|idcardPicType |string|50|Y|Photo File Format <br> File Format Affiliated File Name - Ex:"idcardPicType":"jpg"|
|idcardPicUrl|string |500|Y|Photo access network address <br> Ex:"idcardPicUrl":"https://12334"|
|location  |string |100|Y|Withdrawal address <br> Ex:"location":"lalakay los banos laguna"|
|withdrawChannel|int|Option | Y|Payment channel name <br> 1 MLhuillier  |

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"amendTransactionV2"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011",//Starting from this parameter, all can be passed empty</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"1"</font><br>
}


### Output parameters:
| parameter                        |    type    | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time <br> yyyy-MM-dd HH:mm:ss.SSSS - REQUIRED|
|responseCode |int|4|The default return code of the system is a number with a length of 4, as defined by the standard reference return code|
|responseDescription |string|255|Return content description <br> response information|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
}








