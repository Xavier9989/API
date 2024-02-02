# 3.2 payoutQueuePayout (CallBack)
-   This API is provided by partners and requested by payment vendors at the following times

    -   (1) When the transaction is uploaded to the payment provider

    -   (2) When the withdrawal person withdraws money from an offline store

    -   (3) When the customer cancels the transaction

    -   (4) When the transaction fails

    -   (5) When the transaction information is successfully modified

    -   (6) When transaction information modification fails
### <font color = red>The callback interface is only used for notification purposes. Regardless of any status received, it can only return responseCode 1000, indicating successful notification receipt。</font>

### Input parameters:

| parameter                        |    type     | length   |must |describe|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|YES|User Name<br> Provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|YES|Call behavior<br>payoutQueuePayout(Fixed parameter values) - Ex:"action":"payoutQueuePayout"|
|authentication   |string |50|YES|    Verification Code<br> Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber  |string|13~15|YES|  Withdrawal code <br> Prefix code 5+8-10 digits (Prefix code can be obtained from the bound email) - Ex:SKY**12345678|
|payType  |int|1|YES|Payment status:<br>1: upload: uploaded, representing payment information of transaction data, notified to payment unit<br>2: layout: paid, payment unit completed payment, return notification of payment success message<br>3: cancel: payment cancelled, not paid, partner notified to cancel transaction, return notification of successful cancellation transaction<br>4: failure: payment failed=>payment error, Return payment failure message<br>5: Amended Success: Data modification successful<br>6: Amended Failure: Data modification failed|
|dealTime  |DateTime||YES|Trading Hours :<br> 1: Uploaded Time<br>2: paid Time: upon completion of payment<br>3: canceled Time: cancellation of transaction<br>4: fail time: payment failure time<br>5: Amed Success Time: modification of data success time<br>6: Amed Failure Time: modification of data failure time<br>|
|failDescription |string |Option|YES|Fail description |
|referenceNumber|string|Option|deny|relating codes<br>Returned when using ML payment callback with payType 1 and 5 statusreferenceNumber（upload and Amended Success）|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueuePayout"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payType"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"dealTime"</font> : <font color=blue>"2018-08-07 11:58:33"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNumber"</font> : <font color=blue>"MLA001041380755361119"</font>,<br>
}


### Output parameters:
| parameter                        |    type     | length    |describe|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|Return time  <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Return code <br>  1000|
|responseDescription  |string|255|Return content description <br> Success|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}


### Return code

| Status   Code                     |   Status Description   | 
| :-------------------------: | :----------- |
|1000|Success|