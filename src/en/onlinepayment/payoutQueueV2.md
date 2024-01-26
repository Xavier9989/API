# 4.2 ML/CebuanaOnline request for offline withdrawal（payoutQueueV2）

### This interface is a designated channel payment interface that is actively pushed by partners to SkyPay. It is an asynchronous interface and the payment result is recalled by the 3.2 PayoutQueuePayout interface。
![](../public/线上请求线下取款.png)
### <font color = red>pay attention to</font>
#### <font color = red>Please note that if this payment interface is selected, it means that this payment is specified to be withdrawn from Cebuana or ML, and other channels will not support withdrawing this payment。</font>
#### <font color = red>You can cancel this payment before the user withdraws it. Please call "3.3 Payout - cancelPayout". Cancellation is not a real-time cancellation. Please reply with the cancellation result the next day and cancel without refunding the service fee。</font>

### Input parameters:
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|User Name <br> Provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>payoutQueueV2(Fixed parameter values)- Ex:"action":"payoutQueueV2"|
|authentication   |string |50|Y|Verification Code<br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender  |string|100| Y   |Payer <br> Product APP Name: Designed by Partner <br> Ex:"sender":"APP NAME"|
|controlNumber  |string|13~15|Y|Withdrawal code <br> Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|name |string |50|Y|Name of withdrawal person<br> separated by commas。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday |Date|10|Y| Birthday format：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|identificationId  |string|50|Y|ID number <br> Depending on different authentication methods, hold the ID number - Ex:"identificationId":"442301922000"|
|identificationTypeId  |string |3| |Verify ID document type <br> please refer to Chapter 7.3 for identification type - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone  |string|11|Y | 11 digit number starting with 09 <br>  Ex:"phone":"09270348095"|
|amount |decimal|10.20|Y |Payment amount supports two decimal places <br>   ex:"amount":3400.00|
|idcardPicType  |string|50|Y|Image Format <br> File Format Affiliated File Name - Ex:"idcardPicType":"jpg"|
|idcardPicUrl  |string |500|Y|Photo access network address  <br>  Ex:"idcardPicUrl":"https://12334.png"|
|location  |string |500|Y| Withdrawal address <br> Ex:"location":"lalakay los banos laguna"|
|withdrawChannel  |int| | Y |Payment channel name <br> 1 MLhuillier  -  13 Cebuana - Lhuillier	|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueueV2"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> :  <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> :  <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"13"</font><br>
}


### Output parameters:
| parameter                        |    type     | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time<br> yyyy-MM-dd HH:mm:ss.SSSS - REQUIRED|
|responseCode  |int|4|The default length of the system's return code is 4, which is a numerical standard reference for the definition of return codes|
|responseDescription |string|255|Return content description <br> response information|
|referenceNo  |string|255|Relationship code <br> This field will bring back a null value|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
}

