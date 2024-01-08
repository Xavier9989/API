# 7.1取得国别定义(getNationality)

### 这支取得基本代码服务的API,提供用于使用银行付款的数据列表。调用服务时,versionDate请传空值，一切以正式环境接口为准。

#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|getCatalog(固定参数值)- Ex:"action":"getCatalog"|
|authentication  - 验证码|string |255|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|catalogType - 目录类别|string|50|选择所需的基础代码类别
Ex:"catalogType":"getNationality"|
|versionDate - 版本日期|dataTime|---|


#### Post data
```json
{
    "userName" :  "AppName@skypay",
    "action" :  "getCatalog",
    "authentication" :  "30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "catalogType" :  "getNationality",
    "versionDate" :  ""
}
```
#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime - 回传时间|DateTime|50|(必填)yyyy-MM-dd HH:mm:ss.SSSS（必填）|
|responseCode - 回传代码|int|4|（必填）系统默认回传码,长度为4的数字,标准参考回码定义|
|result - 回传结果|string[]||回传Key/Value格式字符串数组|
|NationalityId|int||国家代码|
|NationalityName|string|255|国家名称|

### Output data
```json
{
   "responseTime" : "2018-06-18 17:52:10.5211",
    "responseCode" : "1000",
    "result" : [
       { 
       "NationalityId": 1,
       "NationalityName": "sample string"
       }
    ]
}
```
