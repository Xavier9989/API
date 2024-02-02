# 10.1 getNationality

### This API, which obtains basic code services, provides a data list for using bank payments. When calling the service, please pass a null value for version date, and everything will be based on the official environment interface.


### Input parameters
| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|YES|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>getCatalog(Fixed parameter values)- Ex:"action":"getCatalog"|
|authentication |string |255|YES|Verification Code <br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|catalogType|string|50||Catalog Category <br> Select the required base code category - Ex:"catalogType":"getNationality"|
|versionDate |dataTime|||Version Date|



### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> :  <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> :  <font color=blue>"getCatalog"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> :  <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"catalogType"</font> :  <font color=blue>"getNationality",</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"versionDate"</font> :  <font color=blue>""</font><br>
}

### Output parameters

| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time <br> yyyy-MM-dd HH:mm:ss.SSSS（REQUIRED）|
|responseCode  |int|4|Return Code<br> The default return code of the system is a number with a length of 4, as defined by the standard reference return code|
|result |string[]|Key/Value|Return Result <br> Return Key/Value Format String Array|
|getBankCode|int||Country code|
|BankName|string|50|country|

### Output data

{<br>
   <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"result"</font> : [<br>
       { <br>
       <font color=red>&ensp;&ensp;&ensp;&ensp;"NationalityId"</font> : <font color=blue>1</font>,<br>
       <font color=red>&ensp;&ensp;&ensp;&ensp;"NationalityName"</font> : <font color=blue>"sample string"</font><br>
       }<br>
    ]<br>
}

