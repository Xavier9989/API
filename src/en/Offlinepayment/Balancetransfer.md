# 7.4 balanceTransfer

## This API is provided by SKYPAY and is requested by partners to perform balance exchange between different entities

### Input parameters

| parameter                        |    type     | length   |must|describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|YES|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>balanceTransfer(Fixed parameter values) - Ex:"action":"balanceQuery"|
|authentication |string |255|YES|Verification Code <br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transferFrom |string |5|YES|Transfer source account<br> (Subject company prefix)<br>ex: SKY98|
|transferTo |string |5|YES|Transfer destination account<br> (Subject company prefix)ex: SKY99|
|amount |decimal |||Ex:1200000.00|


## Post Date

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"notificationInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"transferFrom"</font> : <font color=blue>"SKY98"</font>,<br>
     <font color=red>&ensp;&ensp;&ensp;&ensp;"transferTo"</font> : <font color=blue>"SKY99"</font>,<br>
      <font color=red>&ensp;&ensp;&ensp;&ensp;"transferTo"</font> : <font color=blue>1200000.00</font>,<br>
}

### Output parameters

| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|Return time<br> yyyy-MM-dd HH:mm:ss.SSSS(REQUIRED)|
|responseCode  |int|4|Return Code <br>1000|
|responseDescription|string|255|Feedback Content Description<br>Success|

### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
}

### Return code

| Status  Code                     |   Status Description    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1016 |Insufficient balance|
|-1009 |Unpredictable exception occur|
