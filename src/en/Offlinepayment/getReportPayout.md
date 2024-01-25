# 4.6 Transaction result query（getReportPayout(Collection)）

### The transaction result query service API is provided by Skypay and can query transaction results

### Input parameters

| parameter                        |    type     | length   |Y/N |describe|
| :-------------------------: | :-----------: |:-----:|:--:|--------------------------------|   
|userName|string|50|Y|User name <br> provided by SkyPay - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|Call behavior<br>payoutInquiry(Fixed parameter values)- Ex:"action":"payoutInquiry"|
|authentication|string |255|Y|Verification Code<br>  Verification Key - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|startDate|string|50| Y|starting time <br> "2022-12-02"|
|endDate |string|50|Y|deadline<br> "2022-12-02"|
|dateType|string|50|Y|CreateDate、CollectedTime(collection)、PayTime(payout)|
|Pagination |string|50|Y|page number <br> 1|
|pageSize |string|50|Y|Page Size <br>100|

## Payout
### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"generate711Barcode"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"startDate"</font> : <font color=blue>"2022-12-02"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"endDate"</font> : <font color=blue>"2022-12-02"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"dateType"</font> : <font color=blue>"CreateDate"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"pagination"</font> : <font color=blue>1</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"pageSize"</font> : <font color=blue>100</font><br>
}


### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"totalTransaction"</font> : <font color=blue>4383</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"lastPage"</font> : <font color=blue>false</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"result"</font> : [<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
          <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998034"</font>,<br>
          <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>1300.0</font>,<br>
          <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"9006565379735"</font><br>
         },<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
          <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998035"</font>,<br>
          <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>3300.0</font>,<br>
          <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"9006565379735"</font><br>
         },<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
          <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998035"</font>,<br>
          <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>2300.0</font>,<br>
          <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"9006565379735"</font><br>
       },<br>
    ]<br>
}


## Collection
### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> :  <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> :  <font color=blue>"getReportPayout"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> :  <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"startDate"</font> :  <font color=blue>"2022-12-02"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"endDate"</font> :  <font color=blue>"2022-12-02"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"dateType"</font> :  <font color=blue>"CreateDate"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"pagination"</font> :  <font color=blue>1</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"pageSize"</font> :  <font color=blue>100</font><br>
}


### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"totalTransaction"</font> : <font color=blue>4383</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"lastPage"</font> : <font color=blue>false</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"result"</font> : [<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
           <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
           <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998034"</font>,<br>
           <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>1300.0</font>,<br>
           <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
           <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"SKP4992200182"</font>,<br>
           <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"Confirmed"</font><br>
         },<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
           <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
           <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998035"</font>,<br>
           <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>3300.0</font>,<br>
           <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
           <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"E103ED0E4726"</font>,<br>
           <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"Confirmed"</font><br>
         },<br>
       { <br>
          <font color=red>&ensp;&ensp;"createDate"</font> : <font color=blue>"2022-11-02 11:55:35"</font>,<br>
           <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>"2022-11-02 11:55:49"</font>,<br>
           <font color=red>&ensp;&ensp;"controlNo"</font> : <font color=blue>"SK98162998035"</font>,<br>
           <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>2300.0</font>,<br>
           <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"09XXXXXXXXX"</font>,<br>
           <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>"8D20C1C3432E"</font>,<br>
           <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"Confirmed"</font><br>
       },<br>
    ]<br>
}