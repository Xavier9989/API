# 4.6 交易结果查询（getReportPayout(Collection)）

#### 交易结果查询服务API由Skypay提供,可以对交易结果进行查询
#### Input parameters
| 参数                        |    类型     | 长度  |Y/N  |描述|
| :-------------------------: | :-----------: |:-----:|:--:|--------------------------------|   
|userName|string|50|Y|用户名称 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y| payoutInquiry(固定参数值)- Ex:"action":"payoutInquiry"|
|authentication|string |255.|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|startDate|string|50| |起始时间 - "2022-12-02"|
|endDate |string|50||截止时间 - "2022-12-02"|
|dateType|string|50||CreateDate、CollectedTime(collection)、PayTime(payout)|
|Pagination |string|50||页码 - 1|
|pageSize |string|50||页面尺寸 - 100|

## Payout
### Post data
```json
{
    "userName":"AppName@skypay",
    "action":"generate711Barcode",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "startDate":"2022-12-02",
    "endDate":"2022-12-02",
    "dateType":"CreateDate",
    "pagination":1,
    "pageSize":100
}
```

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
           "referenceNo" : "9006565379735"
         },
       { 
          "createDate" : "2022-11-02 11:55:35",
           "payTime" : "2022-11-02 11:55:49",
           "controlNo" : "SK98162998035",
           "amount" : 3300.0,
           "phone" : "09XXXXXXXXX",
           "referenceNo" : "9006565379735"
         },
       { 
          "createDate" : "2022-11-02 11:55:35",
           "payTime" : "2022-11-02 11:55:49",
           "controlNo" : "SK98162998035",
           "amount" : 2300.0,
           "phone" : "09XXXXXXXXX",
           "referenceNo" : "9006565379735"
       },
    ]
}
```

## Collection
### Post data
```json
{
    "userName" :  "AppName@skypay",
    "action" :  "getReportPayout",
    "authentication" :  "30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "startDate" :  "2022-12-02",
    "endDate" :  "2022-12-02",
    "dateType" :  "CreateDate",
    "pagination" :  1,
    "pageSize" :  100
}
```

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