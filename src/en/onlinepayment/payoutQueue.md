# 3.1 payoutQueue (Bank/Wallet)
This API is provided by SkyPay and actively pushed by partners.
![4线上放款](/4线上放款.png)
When customers obtain payment transaction approval information, partners must push payment data through this interface for payment transactions.

- <font color = red>Attention to duplicate payments </font>
    - <font color = red>To avoid duplicate payments, please check the transaction status before resending the transaction (please do so 300 seconds after the transaction is sent)。</font>
    - <font color = red>It is not recommended to change the payment code for resending (to avoid duplicate loans, the retry interval should be more than 300 seconds)。</font>
    - <font color = red>The transaction status is Pending or Complete, and the transaction record cannot be resent to avoid duplicate payments。</font>
    - <font color = red>Prohibit resending the same transaction through different withdrawal channels。</font>

### Input parameters:
| parameter                        |    type     | length   |must |describe|
|:-------------------------:|:-----------:|     :------:     |   :-----:       |-----------|   
|userName |string|50|YES|User name <br>provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action     |   string  | 50   |  YES  |Call behavior<br>payoutQueuePayout(Fixed parameter values) - Ex:"action":"payoutQueue"|
|authentication|string |50|YES|Verification Code<br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender  |string|100|YES |Payer <br> Product APP Name (Required: Designed by Partner)<br> Ex:"sender":"APP NAME"|
|controlNumber   | string | 13~15 |  YES |Withdrawal code <br> Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|name |string |50| YES |Name of withdrawal person <br> separated by commas. - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone|string|11 |  YES|phone number<br>11 digit number starting with 09/08  <br> Ex:"phone":"09270348095"|
|amount|string|10.20  |   YES   |amount of money<br>Payment amount supports two decimal places<br> ex:"amount":3400.00|
|bankNo|string |50|YES |Bank code<br> When making payments through bank channels, this parameter is mandatory. This parameter is not available in electronic wallets. Please refer to Chapter 10 Interface 10.6 Get Bank Code, which consists of 3 characters|
|accountNo  |string |50|YES |account number:<br> The account is a mobile phone number with the first 11 digits of 09 for the withdrawal person <br>Bank:The designated bank account of the withdrawer (specify a valid bank account)|
|withdrawChannel|int|| YES| Designated payment channel code<br> refer to Chapter 12 for detailed pipeline instructions[Channel code value](/en/Paymentpipeline/Paymentpipeline.md)|
|identificationId  |string|        50  | deny       |ID number <br> Depending on different authentication methods, hold the ID number - Ex:"identificationId":"442301922000"|
|identificationTypeId  |string |3|  deny  |Verify ID Document Category <br> Reference8.3 Get Identification Type - Optional when making payments through bank channels, this parameter is not available in electronic wallets - Ex:":identificationTypeId":"2"|
|idType  |string|50|deny |Optional field for verifying ID type <br> electronic wallet for payment, bank does not have this paramete - ex:"idType":"TIN"|
|idcardPicType  |string|50|   deny |Image format <br> optional for electronic wallet payment, bank does not have this parameter - Ex:"idcardPicType":"jpg"|
|idcardPicUrl  |string |500|deny  |Photo access network address <br> optional for electronic wallet payment, bank does not have this parameterEx:"idcardPicUrl":""|
|birthday  |Date|10| deny    |Birthday format：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  To write this field, the parameters need to be filled in the correct format|
|birthPlace  |string|250| deny |When making payments through the birthplace bank channel, this parameter is optional and not available in the electronic wallet|
|location  |string |500|deny |Withdrawal address <br>Ex:"location":manila"|
|provinceId |int| | deny  |Province ID<br> Please refer to Chapter 10 Interface10.5 Get Province - Optional when making payments through bank channels, this parameter is not available in electronic wallets - Ex:ProvinceId	Province1	Abra  - 2	Agusan del Norte…|
|cityId  |int||  deny  |City ID <br> Please refer to Chapter 10 Interface10.4 Get Town City - When making payments through bank channels, this parameter is optional and not available in the electronic wallet - Ex: Province ID City ID City Name - ProvinceId TownCityId	TownCity47	996	Manila…|
|expiryDate  |string |50|deny|Certificate expiration date <br> optional when making payments through bank channels, this parameter is not available in electronic wallets|

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
}



### When making a payment to a bank, call the API to send out the data format content:<font color = red>（When conducting bank transactions, please first go to the 8.6 to obtain the bank code interface to obtain the currently available bank list） </font>

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
}


### Output parameters:

| parameter                        |    type     | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time  <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return code <br> Success |
|responseDescription  |string|255|Return content description  <br>  Success|

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
|-1001|Invalid Accountnumber|
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


