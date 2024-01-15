# 3.3 Cancelling Payment Transactions

#### This service is provided by SkyPay and aims to cancel a transaction when its status is Uploaded.

## <font color=red>Note</font>

### <font color = red>Please note that if the user refunds through the "EGCash" and "Cebuana" channels, the service fee will not be refunded</font>

### <font color = red>Only Cebuana channel loans can be cancelled</font>

### <font color = red>When requesting to cancel the interface, the status will change to Canceled. At this time, it is waiting for the channel to cancel. After the cancellation is successful, the Cancel Time will have a time for the cancellation to be successful. We will call back to interface 3.2 to notify you. If the cancellation fails, the status will change from Canceled to Uploaded, and interface 3.2 will not be called back. (If calling the 4.5 interface to query the status, it should be noted that there must be a Cancel Time and the status is Cancelled in order for the cancellation to be successful)</font>

### Input parameters:
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|User Name - Provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|cancelPayout(Fixed parameter values) - Ex:"action":"cancelPayout"|
|authentication  |string |50|Y| Verification Code - Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers[] |string[]|13~15  |Y|Withdrawal Code Array - When canceling a transaction, multiple withdrawal codes can be cancelled simultaneously. Using array format, multiple withdrawal codes to be cancelled can be transmitted at once|

### Post data

{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"cancelPayout"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumbers"</font> : <font color=blue> [</font><br>
   <font color=red>&ensp;&ensp;&ensp;   {<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font><br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;},</font><br>
    <font color=red>&ensp;&ensp; &ensp;   {<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font><br>
        &ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;]<br>
}

### Output parameters

| parameter                        |    type    | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time  -  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|The default return code of the system is a number with a length of 4, as defined by the standard reference return code|
|responseDescription  |string|255|Return content description  -  Success|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}

### Return code

| Status   Code                     |  Status Description    | 
| :-------------------------: | :----------- |
|1000|Success|
|-1009|An unpredictable exception occurs.(return exception message)|
