# 6.3balance inquiry（balanceQuery）

### Call the balance query service, provided by SkyPay.

| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|Y|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>balanceQuery(Fixed parameter values) - Ex:"action":"balanceQuery"|
|authentication |string |255|Y|Verification Code <br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|

### Input parameters

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"balanceQuery"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font><br>
}


### Output parameters
| parameter                        |    type     | length   |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|Return time<br> yyyy-MM-dd HH:mm:ss.SSSS(REQUIRED)|
|responseCode  |int|4|Return Code <br> System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and clearly describe the content of the return|
|responseDescription|string|255|Feedback Content Description<br> Response Information (Required)|
|Balance |decimal|10.20|Return Partner<br> Account Balance|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"balance"</font> : <font color=blue>726718.00</font><br>
}


### Return code:

| Status  Code                     |   Status Description    | 
| :-------------------------: | :----------- |
|1000 |Success|