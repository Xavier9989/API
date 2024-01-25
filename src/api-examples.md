# 状态码和 HTTP 码

### 下面列出的状态代码表示操作中 API 请求的状态。

|       Status Enumeration             | Description|
|:-------------------------:|:-----------|
|requires_payment_method|付款方式或付款方式数据无效|
|requires_confirmation|创建付款 支持「直接创建交易」及「先开单后确认交易」2 种作法，此状态为「先开单后确认交易」时之交易状态。需要进行 付款确认 的调用，来确认执行交易。|
|requires_action|此状态为合作伙伴已创建付款交易，需要执行下一个行动。<br>例如，用户端重定向到响应的 URL。|
|processing|交易处理中。<br>(此状态取决于系统处理时间，通常很短暂，不容易出现)|
|canceled| 交易已取消|
|succeeded| 交易成功|


### 下面列出的 HTTP 代码指示 API 请求是否成功。

|HTTP Code| Message|Description |
|:-------------------------:|:-----------:|----------------|
|200|OK|正常状态|
|400|Bad Request|请求不可接受，通常是由于无效或缺少参数。|
|401|Unauthorized|没有提供有效的 client id、 client secret、partner id 或 API key|
|403|Forbidden|禁止访问|
|500|Server Errors|服务器遇到意外情况，无法完成请求。|
|502|Bad Gateway|无法从原始服务器获取有效的响应|
|503|Service Unavailable|Biller 合作伙伴宕机|