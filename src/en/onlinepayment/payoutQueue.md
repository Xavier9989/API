# 3.1    Push online payment transactions(payoutQueue)
This API is provided by SkyPay and actively pushed by partners.

When customers obtain payment transaction approval information, partners must push payment data through this interface for payment transactions.

- <font color = red>Attention to duplicate payments </font>
    - <font color = red>To avoid duplicate payments, please check the transaction status before resending the transaction (please do so 300 seconds after the transaction is sent)。</font>
    - <font color = red>It is not recommended to change the payment code for resending (to avoid duplicate loans, the retry interval should be more than 300 seconds)。</font>
    - <font color = red>The transaction status is Pending or Complete, and the transaction record cannot be resent to avoid duplicate payments。</font>
    - <font color = red>Prohibit resending the same transaction through different withdrawal channels。</font>

### Input parameters:
| parameter                        |    type     | length   |Y/N |describe|
|:-------------------------:|:-----------:|     :------:     |   :-----:       |-----------|   
|userName |string|50|Y|User name - provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action     |   string  | 50   |  Y  |payoutQueuePayout(Fixed parameter values) - Ex:"action":"payoutQueue"|
|authentication|string |50| Y|Verification Code - Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender  |string|100|  Y  |Payer - Product APP Name (Required: Designed by Partner) - Ex:"sender":"APP NAME"|
|controlNumber   | string | 13~15 |  Y |Withdrawal code - Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|name |string |50|  Y  |Name of withdrawal person - separated by commas. - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone|string|11 |  Y |11 digit number starting with 09  - Ex:"phone":"09270348095"|
|amount|string|10.20  |    Y   |Payment amount supports two decimal places -  ex:"amount":3400.00|
|bankNo|string |50| Y |Account number - required when making payments through bank channels. This parameter is not available in electronic wallets. Please refer to Chapter 7 Interface for details7.6 Get Bank Code,Bank code is a 3-digit character|
|accountNo  |string |50| Y |Electronic wallet: The account is a mobile phone number with the first 11 digits of 09 for the withdrawal person <br>Bank:The designated bank account of the withdrawer (specify a valid bank account)|
|withdrawChannel|int||  Y| Designated payment channel code - refer to Chapter 9 for detailed pipeline instructions[Channel code value](/src/Paymentpipeline/Paymentpipeline.md)|
|identificationId  |string|        50  |  N       |ID number - Depending on different authentication methods, hold the ID number - Ex:"identificationId":"442301922000"|
|identificationTypeId  |string |3|   N  |Verify ID Document Category - Reference7.3 Get Identification Type - Optional when making payments through bank channels, this parameter is not available in electronic wallets - Ex:":identificationTypeId":"2"|
|idType  |string|50| N  |Optional field for verifying ID type - electronic wallet for payment, bank does not have this paramete - ex:"idType":"TIN"|
|idcardPicType  |string|50|     N   |Image format - optional for electronic wallet payment, bank does not have this parameter - Ex:"idcardPicType":"jpg"|
|idcardPicUrl  |string |500| N  |Photo access network address - optional for electronic wallet payment, bank does not have this parameterEx:"idcardPicUrl":""|
|birthday  |Date|10|  N     |Birthday format：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|birthPlace  |string|250|  N  |When making payments through the birthplace bank channel, this parameter is optional and not available in the electronic wallet|
|location  |string |500|N |Withdrawal address - Ex:"location":manila"|
|provinceId |int| |  N   |Province ID - Please refer to Chapter 7 Interface7.5 Get Province - Optional when making payments through bank channels, this parameter is not available in electronic wallets - Ex:ProvinceId	Province1	Abra  - 2	Agusan del Norte…|
|cityId  |int||   N   |City ID - Please refer to Chapter 7 Interface7.4 Get Town City - When making payments through bank channels, this parameter is optional and not available in the electronic wallet - Ex: Province ID City ID City Name - ProvinceId TownCityId	TownCity47	996	Manila…|
|expiryDate  |string |50| N|Certificate expiration date - optional when making payments through bank channels, this parameter is not available in electronic wallets|

### Post data
### When paying as an electronic wallet, call the API to send out data format content:

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueue"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"09123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"6"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> :  <font color=blue>"123456789011"</font>,//Starting from this parameter, all can be passed empty<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idType"</font> :  <font color=blue>"SSS"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font><br>
}



### When making a payment to a bank, call the API to send out the data format content:<font color = red>（When conducting bank transactions, please first go to the 7.6 to obtain the bank code interface to obtain the currently available bank list） </font>

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueue"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"bankNo"</font> : <font color=blue>"SEC"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"09123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"6"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011"//Starting from this parameter, all can be passed empty</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthPlace"</font> : <font color=blue>"Manila"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"provinceId"</font> : <font color=blue>"996"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"cityId"</font> : <font color=blue>"47"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"expiryDate"</font> : <font color=blue>"2024-05-01"</font><br>
}


### Output parameters:

| parameter                        |    type     | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time  -  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return code - Success |
|responseDescription  |string|255|Return content description  -  Success|

### Output data：

{
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}


### Return code:

| Status   Code                     |   Status Description    | 
| :-------------------------: | :----------- |
|1000|Success|
|-1000|Post context is not valid|
|-1008|Control number is already exists|
|-1009|Unpredictable exception occurMerchant is not available|
|-1016|Insufficient balance|
|-1020|Bank city is incorrect|
|-1021|Bank No is incorrect|
|-1022|Invalid Accountnumber|
|-1027|balance limit exceeded|
|-1028|Has exceeded the limit of 5 transactions per day|
|-1032|Your IP xxx is not whitelisted.Please contact Support Team.|
|-9999|Service not available/Connection error|
|-1001|Invalid Accountnumber|
