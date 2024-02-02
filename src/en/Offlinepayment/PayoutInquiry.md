# 5.1 PayoutInquiry

**<font color=red>This payment verification API service is provided by the partner and will send a verification request message when the withdrawer requests a withdrawal</font>**
![4.1线下放款](/4.1线下放款.png)

### PayoutInquiry withdrawal verification information

- (1) When the withdrawal person requests an offline store to make a withdrawal request, payoutInquire will be called in real-time to verify payment information

- (2) After being called, payoutInquire will return the verification results to the partners, and offline stores will receive detailed payment information and user information

- (3) The withdrawal person needs to provide the withdrawal code and necessary identity verification information, such as to the cashier

- (4) After checking the withdrawal code and identity verification information, the cashier will receive a manual verification message and send it to the Skypay server



### <font color=red>payoutPayout replies with payment success message</font>

- (1) After the payoutInquiry is successful, the payoutPayout will be called by the offline store, and the message that the transaction has been successfully paid will be returned

- (2) This transaction will occur when the cashier confirms the payment and the payment action has been completed

- (3) The actual triggering point of this function is when the cashier presses the payoutPay function button (manual operation)


### Input parameters

| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName |string|50|YES|User name<br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>payoutInquiry(Fixed parameter values) - Ex:"action":"payoutInquiry"|
|authentication   |string |100|YES|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber |string|13~15|YES| Payment code <br> prefix code 5+8-10 digits (prefix code can be obtained from the bound email) - Ex:SKY**12345678|

### Post data

{<br>
    <font color=red>&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;"action"</font> : <font color=blue>"payoutInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font><br>
}


### Output parameters
|  parameter  |    type     | length |must | describe|
| :-----------------------------: | :-----------: |:-----:| :--:|--------------------------------|   
|responseTime  |DateTime|26|YES |responsiveness <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|YES|Response code <br>4 system default return code, a number of length 4, <br>standard reference return code definition|
|responseDescription  |string|255|YES|Response Description Content <br> Response Information|
|sender  |string|255|YES|Remitter<br> Product APP Name (Required: Designed by Partner)<br>Ex:"sender":"APP NAME"|
|sender address|string|255|YES|Remittance Address|
|name |string |50|YES|Name of withdrawal person <br> separated by commas<br> Last name+","+<br>First name+","+Middle name+","+Suffix <br>Ex:"name":<br>"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday |Date|10|YES|Birthday format：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|identificationId  |string|50|YES|ID number <br>Depending on different authentication methods,<br>   hold the ID number - :"identificationId":"442301922000"|
|idType  |string|50|YES |Verify ID Type <br> ID Type (SSS, UMID, Driver's License, TIN...) <br>"idType": "TIN" |
|phone |string|11|YES|phone number<br>11 digit number starting with 09/08 (required) <br> Ex:"phone":"09270348095"|
|amount |string|10.20|YES|amount of money <br>Payment amount supports two decimal places (required) -  ex:"amount":3400.00|
|idcardPicType |string|50|YES|Photo file format <br>file format attachment file name (required) - Ex:"idcardPicType":"jpg"|
|idcardPicUrl |string |500|YES|Photo access network address<br> Ex:"idcardPicUrl":"https://12334"|
|contractNumber  |string|15|deny|Payment code <br> prefix code 5+8-10 digits<br> (prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|location  |string |100|YES|Address<br> Add Address Withdrawal Address|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font>,<br>
    <font color=red>&ensp;&ensp;"sender"</font> : <font color=blue>"Skybridge"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKYXXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;"sender  address"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font>,<br>
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
