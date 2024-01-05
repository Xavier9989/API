# 4.5 支付状态查询（payoutQueryStatus）

#### 支付状态查询服务API由Skypay提供,可以对交易状态进行查询,最大数量50笔
### 注意
### 查询接口调用频率建议在30分钟以上。查询操作请至少在交易后300秒。
### 此接口只用于第一次发送交易，检查交易是否超时，目前不建议完全依赖此接口同步交易状态。
### 对于取消的交易，必须状态为Cancelled并且Cancel Time不为空，才是取消成功。

#### Input parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication  - 验证码|string |255|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers - 支付码数组名|String[]||Array(parameter tag name is controlNumber)|
|controlNumber - 支付码|String|13|(必填)前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|

##### Post data

```json
{
    "userName":"AppName@skypay",
    "action":"payoutQueryStatus",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumbers":[
      {
        "controlNumber":"SK0XXXXXXXXXX"
      },
      {
        "controlNumber":"SK0XXXXXXXXXX"
    }
  ]
}
```
#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime - 回传时间|DateTime|50|(必填)yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode - 回传代码|int|4|（必填）系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|
|controlNumbers - 取款码数组名|String[]| |Array|
|controlNumber - 取款码|string|13|取款人名字,使用逗号分割。Last name+","+First name+","+Middle name+","+Suffix(必填)监管要求需要还款信息留存档案|
|transactionDate - 交易日期|DateTime||yyyy-MM-dd HH:mm:ss.fff|
|status - 状态代码|int||0	Pending:等待中 - 1	Completed:己完成 - 2	Uploaded:完成上传 - 3	Cancelled:己取消 - 4	Failed:失败 - 10	Inquiry Success:查询成功 - 11	Inquiry Failure:查询失败|
|statusDesc - 状态描叙|String|50|Pending:等待中 - Completed:己完成 - Uploaded:完成上传 - Cancelled:己取消 - Failed:失败 - Inquiry Success:查询成功 - Inquiry Failure:查询失败|
|payTime - 取消时间|DateTime||(yyyy-MM-dd HH:mm:ss)|
|cancelTime - 取消时间|DateTime||(yyyy-MM-dd HH:mm:ss)|
|withdrawChannel - 支付管道|int |YES|支付管道,详细内容请参考第10|
|referenceNo - 收据号码|String|50|GCash:reference number - 实时回传收据号码|
|traceNo - ML专属支付码|String|50|MLhuillier(RT) - referenceNumber ML专属支付码|

#### Output data：
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "controlNumbers":[
    {
        "controlNumber":"SK99000000004",
        "transactionDate":"2019-01-14 15:47:13",
        "status":"4",
        "statusDesc":"Failed",
        "payTime":"",
        "cancelTime":"",
        "withdrawChannel":"Bank",
        "referenceNo":""
    },
    {
        "controlNumber":"SK99000000004",
        "transactionDate":"2019-01-14 15:47:13",
        "status":"4",
        "statusDesc":"Failed",
        "payTime":"",
        "cancelTime":"",
        "withdrawChannel":"Bank",
        "referenceNo":""
    }
  ]
}

```






