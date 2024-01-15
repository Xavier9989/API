# 4.5 Payment status query（payoutQueryStatus）

#### The payment status query service API is provided by Skypay and can query transaction status, with a maximum quantity of 50 transactions

### <font color = red>pay attention to</font>

### <font color = red>It is recommended to call the query interface at a frequency of at least 30 minutes. Please perform the query operation at least 300 seconds after the transaction。</font>

### <font color = red>This interface is only used for sending transactions for the first time, to check if the transaction has timed out. It is not recommended to rely solely on this interface to synchronize transaction status at this time。</font>

### <font color = red>For cancelled transactions, the status must be Canceled and the Cancel Time must not be empty in order for cancellation to be successful。</font>

### Input parameters

| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|User name - provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|generate711Barcode(Fixed parameter values) - Ex:"action":"generate711Barcode"|
|authentication|string |255|Y|Verification Code - Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers|String[]||Y|Payment code array name - Array(parameter tag name is controlNumber)|
|controlNumber |String|13~15|Y|Payment code - Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|

### Post data


{<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"userName"</span> : <span class = "text-blue-500">"AppName@skypay"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"action"</span> : <span class = "text-blue-500">"payoutQueryStatus"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"authentication"</span> : <span class = "text-blue-500">"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"controlNumbers"</span> :[  <br>
        &ensp;&ensp;&ensp;&ensp;{<br>
          <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</span> : <span class = "text-blue-500">"SK0XXXXXXXXXX"</span><br>
        &ensp;&ensp;&ensp;&ensp;&ensp;},<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;{<br>
          <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;&ensp; "controlNumber"</span> : <span class = "text-blue-500">&ensp;"SK0XXXXXXXXXX"</span><br>
        &ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;]<br>
}



### Output parameters
| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|responseTime |DateTime|50|Y|Return time  - yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode |int|4|Y|Return Code - System default return code, a number of 4 in length, standard reference return code definition. When the system default return code is insufficient, users can customize the code. Please start with the number 2, a number of 4 in length, and specify the content of the return|
|responseDescription |string|255|Y| Feedback Content Description - Response Information (Required)|
|controlNumbers |String[]|  | Y   |Name of withdrawal code array - Array|
|controlNumber |string|13~15|Y|Withdrawal code - name of the payee - separated by commas。Last name+","+First name+","+Middle name+","+Suffix(Required) Regulatory requirements require retention of repayment information in archives|
|transactionDate |DateTime|||Transaction Date - yyyy-MM-dd HH:mm:ss.fff|
|status |int||Y|Status code : <br>0	Pending:Waiting <br> 1	Completed:Completed <br> 2	Uploaded:Complete upload <br> 3	Cancelled:Canceled <br> 4	Failed:fail <br> 10	Inquiry Success:query was successful<br> 11	Inquiry Failure:Query failed|
|statusDesc |String|50|Y |State Description: <br> Pending:Waiting <br> Completed:Complet <br> Uploaded:Complete upload <br> Cancelled:Canceled <br> Failed:fail <br> Inquiry Success:query was successful <br> Inquiry Failure:Query failed|
|payTime  |DateTime|||Withdrawal time - (yyyy-MM-dd HH:mm:ss)|
|cancelTime |DateTime|||Cancel time - (yyyy-MM-dd HH:mm:ss)|
|withdrawChannel |int |Option||Payment Pipeline - For detailed information, please refer to section10|
|referenceNo |String|50||Receipt No - GCash:reference number - Real time return receipt number|
|traceNo |String|50||MLExclusive payment code - MLhuillier(RT) - referenceNumber MLExclusive payment code|

### Output data：

{<br>
   <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumbers"</font> : [<br>
       { <br>
         <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"transactionDate"</font> : <font color=blue>"2019-01-14 15:47:13"</font>,<br>
          <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"4"</font>,<br>
          <font color=red>&ensp;&ensp;"statusDesc"</font> : <font color=blue>"Failed"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"cancelTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"Bank"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
       },<br>
       { <br>
         <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"transactionDate"</font> : <font color=blue>"2019-01-14 15:47:13"</font>,<br>
          <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"4"</font>,<br>
          <font color=red>&ensp;&ensp;"statusDesc"</font> : <font color=blue>"Failed"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"cancelTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"Bank"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font>,<br>
       }<br>
    ]<br>
}







