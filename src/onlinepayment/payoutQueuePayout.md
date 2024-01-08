# 3.2    回传支付确认讯息（payoutQueuePayout）
- 这支API是由合作伙伴提供,透过下列时机由支付厂商发动要求
    - (1)当交易上传到支付厂商
    - (2)当取现人从线下店取款
    - (3)当客户取消交易时
    - (4)当交易失败时
    - (5)当交易信息修改成功
    - (6)当交易信息修改失败
### 回调接口只做通知使用，无论收到任何状态，只可以返回responseCode 1000，代表成功收到通知。
Input parameters:

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)payoutQueuePayout(固定参数值) - Ex:"action":"payoutQueuePayout"|
|authentication  - 验证码|string |50|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber - 取款码|string|13|(必填)前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|payType - 支付状态|int|1|1：upload:己上传,代表交易数据之支付信息,己通知支付单位 - 2：payout:己支付,支付单位完成付款,回传通知支付成功讯息 - 3：cancel:取消支付,未支付,合作伙伴通知取消交易,回传取消交易成功 - 4:failure:支付失败=>支付时错误,回传支付失败讯息 - 5：Amended Success:修改资料成功 - 6:Amended Fail:修改资料失败|
|dealTime - 交易时间|DateTime|YES|1：uploaded Time:上传时间 - 2：paid Time:完成支付时 - 3：canceled Time:取消交易时间 - 4：fail time:支付失败时间 - 5：Ameded Success Time:修改资料成功时间 - 6：Ameded Fail Time:修改资料失败时间|
|failDescription - 交易失败讯息|string |Option|Fail description - 交易失败讯息|
|referenceNumber|string|Option|当使用ML支付回调payType为1和5的状态时返回referenceNumber（upload和Amended Success）|
#### Post data
```json
{
    "userName": "AppName@skypay",
    "action": "payoutQueuePayout",
    "authentication": "30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SK99123456789",
    "payType":"1",
    "dealTime":"2018-08-07 11:58:33",
    "referenceNumber": "MLA001041380755361119",
}
```

##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime - 回传时间|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode - 回传代码|int|4|1000|
|responseDescription - 回传内容描述|string|255|Success|
##### Output data：
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success"
}
```

#### Return code

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000|Success|