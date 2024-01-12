# 4.6 交易结果查询（getReportPayout(Collection)）

#### 交易结果查询服务API由Skypay提供,可以对交易结果进行查询
#### Input parameters
| 参数                        |    类型     | 长度  |Y/N  |描述|
| :-------------------------: | :-----------: |:-----:|:--:|--------------------------------|   
|userName|string|50|Y|用户名称 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y| payoutInquiry(固定参数值)- Ex:"action":"payoutInquiry"|
|authentication|string |255.|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|startDate|string|50| Y|起始时间 - "2022-12-02"|
|endDate |string|50|Y|截止时间 - "2022-12-02"|
|dateType|string|50|Y|CreateDate、CollectedTime(collection)、PayTime(payout)|
|Pagination |string|50|Y|页码 - 1|
|pageSize |string|50|Y|页面尺寸 - 100|

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
```json
{
    "totalTransaction" : 4383,
    "lastPage" : false,
    "result" : [
       { 
          "createDate" : "2022-11-02 11:55:35",
           "payTime" : "2022-11-02 11:55:49",
           "controlNo" : "SK98162998034",
           "amount" : 1300.0,
           "phone" : "09XXXXXXXXX",
           "referenceNo" : "SKP4992200182",
           "status" : "Confirmed"
         },
       { 
          "createDate" : "2022-11-02 11:55:35",
           "payTime" : "2022-11-02 11:55:49",
           "controlNo" : "SK98162998035",
           "amount" : 3300.0,
           "phone" : "09XXXXXXXXX",
           "referenceNo" : "E103ED0E4726",
           "status" : "Confirmed"
         },
       { 
          "createDate" : "2022-11-02 11:55:35",
           "payTime" : "2022-11-02 11:55:49",
           "controlNo" : "SK98162998035",
           "amount" : 2300.0,
           "phone" : "09XXXXXXXXX",
           "referenceNo" : "8D20C1C3432E",
           "status" : "Confirmed"
       },
    ]
}
```