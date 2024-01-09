# 4.5 支付状态查询（payoutQueryStatus）

#### 支付状态查询服务API由Skypay提供,可以对交易状态进行查询,最大数量50笔
### <font color = red>注意</font>
### <font color = red>查询接口调用频率建议在30分钟以上。查询操作请至少在交易后300秒。</font>
### <font color = red>此接口只用于第一次发送交易，检查交易是否超时，目前不建议完全依赖此接口同步交易状态。</font>
### <font color = red>对于取消的交易，必须状态为Cancelled并且Cancel Time不为空，才是取消成功。</font>

#### Input parameters

| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication|string |255|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers|String[]||Y|支付码数组名 - Array(parameter tag name is controlNumber)|
|controlNumber |String|13~15|Y|支付码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|

##### Post data

```json
{
  "userName": "AppName@skypay",
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
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|responseTime |DateTime|50|Y|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode |int|4|Y|回传代码 - 系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容|
|responseDescription |string|255|Y| 回传内容描述 - 响应信息（必填）|
|controlNumbers |String[]|  | Y   |取款码数组名 - Array|
|controlNumber |string|13~15|Y|取款码 - 取款人名字 - 使用逗号分割。Last name+","+First name+","+Middle name+","+Suffix(必填)监管要求需要还款信息留存档案|
|transactionDate |DateTime|||交易日期 - yyyy-MM-dd HH:mm:ss.fff|
|status |int|||状态代码 : <br>0	Pending:等待中 <br> 1	Completed:己完成 <br> 2	Uploaded:完成上传 <br> 3	Cancelled:己取消 <br> 4	Failed:失败 <br> 10	Inquiry Success:查询成功 <br> 11	Inquiry Failure:查询失败|
|statusDesc |String|50| |状态描叙: <br> Pending:等待中 <br> Completed:己完成 <br> Uploaded:完成上传 <br> Cancelled:己取消 <br> Failed:失败 <br> Inquiry Success:查询成功 <br> Inquiry Failure:查询失败|
|payTime  |DateTime|||取款时间 - (yyyy-MM-dd HH:mm:ss)|
|cancelTime |DateTime|||取消时间 - (yyyy-MM-dd HH:mm:ss)|
|withdrawChannel |int |Option||支付管道 - 详细内容请参考第10|
|referenceNo |String|50||收据号码 - GCash:reference number - 实时回传收据号码|
|traceNo |String|50||ML专属支付码 - MLhuillier(RT) - referenceNumber ML专属支付码|

#### Output data：
```json
{
   "responseTime" : "2018-06-18 17:52:10.5211",
    "responseCode" : "1000",
    "responseDescription" : "Success",
    "controlNumbers" : [
       { 
         "controlNumber" : "SK0XXXXXXXXXX",
          "transactionDate" : "2019-01-14 15:47:13",
          "status" : "4",
          "statusDesc" : "Failed",
          "payTime" : "",
          "cancelTime" : "",
          "withdrawChannel" : "Bank",
          "referenceNo" : ""
       },
       { 
         "controlNumber" : "SK0XXXXXXXXXX",
          "transactionDate" : "2019-01-14 15:47:13",
          "status" : "4",
          "statusDesc" : "Failed",
          "payTime" : "",
          "cancelTime" : "",
          "withdrawChannel" : "Bank",
          "referenceNo" : "",
       }
    ]
}
```






