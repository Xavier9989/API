# 3.3    取消支付交易
#### 该服务由SkyPay提供,目的在该笔交易状态为Uploaded时,进行取消交易动作。
## 注意
### 请注意，如果用户通过"EGCash"和"LBCExpress"渠道退款，则服务费将不予退还。
### 只能取消LBCExpress渠道的放款。
### 请求取消接口时状态会变为Cancelled，此时是等待渠道取消，待取消成功后，Cancel Time会有取消成功的时间，我们会回调3.2接口通知您，如取消失败，状态会从Cancelled变回Uploaded，不会回调3.2接口。（如调用4.5接口查询状态，需要注意，必须有Cancel Time且状态为Cancelled才是取消成功）
### Input parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)cancelPayout(固定参数值) - Ex:"action":"cancelPayout"|
|authentication  - 验证码|string |50|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers[] - 取款码数组|string[]||(必填)取消交易时,可同时多笔取款码进行取消,用数组格式,一次性传送多笔要取消的取款码|
#### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"cancelPayout",
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

##### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|回传时间||||
|responseCode - 回传代码|int|4|4系统默认回传码,长度为4的数字,标准参考回传码定义|
|responseDescription - 回传内容描述|string|255|响应信息|
##### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
}
```
#### Return code

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000|Success|
|-1009|An unpredictable exception occurs.(return exception message)|
