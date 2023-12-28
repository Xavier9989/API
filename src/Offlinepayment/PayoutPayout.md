# 4.2 支付成功通知（PayoutPayout）

#### 这支回复取款成功信息功能由合作伙伴提供,线下店出纳已确认取款时,会回传送取款成功讯息给Skypay,再回复合作伙伴。

#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|payoutPayout(固定参数值)(必填) - Ex:"action":"payoutPayout"|
|authentication  - 验证码|string |100|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber - 取款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|withdrawChannel - 支付管道|int |YES|支付管道,详细内容请参考第9章(必填) - Ex:支付管道支付管道名称9	RDPawnshop|
|payTime - 支付时间|DateTime|YES|(yyyy-MM-dd HH:mm:ss) - 出纳支付时间|

#### Post data

```md
{
    "userName":"AppName@skypay",
    "action":"payoutPayout",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SK0XXXXXXXXXX",
    "withdrawChannel":"1",
    "payTime":"2019-02-18 14:59:33"
}
```




#### Output parameters:

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime- 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode - 回传代码|int|4|系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription - 回传内容描述|string|255|响应信息（必填）|



#### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
}
```

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1012|Control number invalid or expired|
|-1014|Prefix of Control number is incorrect.|
|-1016|Insufficient balance|
|-1022|Invalid Accountnumber|
|-1026|Transactions has been paid|
