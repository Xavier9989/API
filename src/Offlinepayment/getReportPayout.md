# 4.6 交易结果查询（getReportPayout(Collection)）

#### 交易结果查询服务API由Skypay提供,可以对交易结果进行查询
#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填) payoutInquiry(固定参数值)- Ex:"action":"payoutInquiry"|
|authentication  - 验证码|string |255|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|startDate - 起始时间|string|50|"2022-12-02"|
|endDate - 截止时间|string|50|"2022-12-02"|
|dateType|string|50|CreateDate、CollectedTime(collection)、PayTime(payout)|
|Pagination - 页码|string|50|1|
|pageSize - 页面尺寸|string|50|100|

### Payout
#### Post data
```md
{
    "userName":"XXXXX@skypay",
    "action":"getReportPayout",
    "authentication":"XXXXXXXXXXX",
    "startDate":"2022-12-02",
    "endDate":"2022-12-02",
    "dateType":"CreateDate",
    "pagination":1,
    "pageSize":100
}
```
#### Output data
```md
{
"   totalTransaction":4383,
    "lastPage":false,
    "result":[
        {
            "createDate":"2022-11-02 11:55:35",
            "payTime":"2022-11-02 11:55:49",
            "controlNo":"SK98162998034",
            "amount":1300.0,
            "phone":"09XXXXXXXXX",
            "receiptNo":"9006565379735"
        },
        {
            "createDate":"2022-11-02 11:55:55",
            "payTime":"2022-11-02 11:56:09",
            "controlNo":"SK98162998035",
            "amount":2000.0,
            "phone":"09XXXXXXXXX",
            "receiptNo":"8006565384381"
        },
        {
            "createDate":"2022-11-02 11:55:55",
            "payTime":"2022-11-02 11:56:10",
            "controlNo":"SK98162998036",
            "amount":1500.0,
            "phone":"09XXXXXXXXX",
            "receiptNo":"8006565384429"
        },
    ]
}
```
### Collection
#### Post data
```md
{
    "userName":"XXXXX@skypay",
    "action":"getReportPayout",
    "authentication":"XXXXXXXXXXX",
    "startDate":"2022-12-02",
    "endDate":"2022-12-02",
    "dateType":"CreateDate",
    "pagination":1,
    "pageSize":100
}
#### Output data
{
    "totalTransaction":350,
    "lastPage":false,
    "result":[
    {
        "createDate":"2022-11-02 10:31:38",
        "collectionTime":"2022-11-02 10:32:50",
        "contractNo":"SKY986712074168",
        "amount":7610.0,
        "phone":"09XXXXXX",
        "receiptNo":"SKP4992200182",
        "status":"Confirmed"
    },
    {
        "createDate":"2022-11-02 10:32:13",
        "collectionTime":"2022-11-02 10:32:13",
        "contractNo":"SKY986712075315",
        "amount":2430.0,
        "phone":"09XXXXXX",
        "receiptNo":"E103ED0E4726",
        "status":"Confirmed"
    },
    {
        "createDate":"2022-11-02 10:35:44",
        "collectionTime":"2022-11-02 10:35:44",
        "contractNo":"SKY986712074207",
        "amount":5000.0,
        "phone":"09XXXXXX",
        "receiptNo":"8D20C1C3432E",
        "status":"Confirmed"
    },
  ]
}
```