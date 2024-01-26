# 5.1 Offline payment data verification（PayoutInquiry）

**<font color=red>This payment verification API service is provided by the partner and will send a verification request message when the withdrawer requests a withdrawal</font>**
![](../public/4.1线下放款.png)

### Input parameters

| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName |string|50|Y|User name<br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>payoutInquiry(Fixed parameter values) - Ex:"action":"payoutInquiry"|
|authentication   |string |100|Y|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber |string|13~15|Y| Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|

### Post data

{<br>
    <font color=red>&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;"action"</font> : <font color=blue>"payoutInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font><br>
}


### Output parameters
|              parameter                        |    type     | length   |Y/N |describe|
| :-----------------------------: | :-----------: |:-----:| :--:|--------------------------------|   
|responseTime  |DateTime|26|Y |responsiveness <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Y |Response code <br>4 system default return code, a number of length 4, standard reference return code definition|
|responseDescription  |string|255||Response Description Content <br> Response Information|
|sender  |string|255|Y|Remitter<br> Product APP Name (Required: Designed by Partner) - Ex:"sender":"APP NAME"|
|sender increaseress|string|255|Y |Remittance Address|
|name |string |50| Y|Name of withdrawal person <br> separated by commas  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday |Date|10|Y |Birthday format：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|identificationId  |string|50|Y|ID number <br>Depending on different authentication methods, hold the ID number - Ex:"identificationId":"442301922000"|
|idType  |string|50| |Verify ID Type <br> ID Type (SSS, UMID, Driver's License, TIN...) "idType": "TIN" (mandatory)|
|phone |string|11| Y |11 digit number starting with 09 (required) <br> Ex:"phone":"09270348095"|
|amount |string|10.20| Y |Amount <br>Payment amount supports two decimal places (required) -  ex:"amount":3400.00|
|idcardPicType |string|50| Y|Photo file format <br>file format attachment file name (required) - Ex:"idcardPicType":"jpg"|
|idcardPicUrl |string |500|Y|Photo access network address<br> Ex:"idcardPicUrl":"https://12334"|
|contractNumber  |string|15|N|Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|location  |string |100| Y|Address<br> Add Address Withdrawal Address (Required)|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font>,<br>
    <font color=red>&ensp;&ensp;"sender"</font> : <font color=blue>"Skybridge"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKYXXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;"sender increase ress"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font>,<br>
    <font color=red>&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;"birthday"</font> : <font color=blue>"1945-01-01"</font>,<br>
    <font color=red>&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;"idType"</font> : <font color=blue>"SSS"</font>,<br>
    <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"6392210083333"</font>,<br>
    <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;"contractNumber"</font> : <font color=blue>"SK00000000001"</font>,<br>
    <font color=red>&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font><br>
}


### Return code:

| Status Code                        |   Status Description    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1012|Control number invalid or expired|
|-1014|Prefix of Control number is incorrect.|
|-1016|Insufficient balance|
|-1022|Invalid Accountnumber|
|-1026|Transactions has been paid|



