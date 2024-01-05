# 4.7余额查询（balanceQuery）
### 调用余额查询服务,由SkyPay提供。

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)balanceQuery(固定参数值) - Ex:"action":"balanceQuery"|
|authentication  - 验证码|string |255|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|

#### Input parameters
```json
{
    "userName":"AppName@skypay",
    "action":"balanceQuery",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime- 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode - 回传代码|int|4|系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|
|Balance - 余额|decimal|(10,2)整数10位小数2位|回传合作伙伴账户余额|

#### Output data：
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "balance":726718.00
}
```

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|