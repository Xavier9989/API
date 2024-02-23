# 付款更新 
### 此接口在  创建付款  未带入confirm=true时，可使用来更新付款请求内容。

 -  EndPoint	: /payment_intentions/{payment_intentions_id}
 -  Method	: POST

## 输入参数（请求头）
### Input parameters:
|       参数                | Type         |    <div style="width:60px">必填</div> |  描述|
|:-------------------------:|:-----------:|   :-----------:    |   :-----       | 
|IdempotencyKey |string|否|同一交易请求的唯一密钥，将保存24小时。在24小时内，如果账单人使用相同的idempotency key发送相同的请求，则将得到来自前一个事务的响应。如果系统中存在密钥，Skypay将不会向商家方重新发送交易|

## 输入参数（Body）
|       参数                | Type         |   <div style="width:60px">必填</div>    |  描述|
|:-------------------------:|:-----------:|  :-----------:   |   :-----       | 
|amount     |   Number  | 是   |交易金额|
|currency|string |是| 货币类型|
|confirm  |Boolean|是|值为true，要提交事务，并且在确认交易后无法更新。|
|payment_method_types   | string |是 | 选择要使用的支付方式。请参考 支付方式 列表带入值。|
| payment_method_data|Object |是||
|type   | string |是 | 选择要使用的支付方式。请参考 支付方式 列表带入值。|
| gcash_webpay  | Object | 是| |
|statement_descriptor   | string |是 |付款说明|
|success_redirect_url   | string |是 |重新定向到付款成功时网页URL|
|fail_redirect_url   | string |是 |重新定向到付款失败时网页URL|
|notify_url   | string |是|发送通知/回调请求的URL|
|brand   | string |否 |此参数输入值应为id，并将在子商户申请文件后由SkyPay提供|
|metadata   | KeyValue |否 |要保存的任何其他数据。Key物件最多20组，value值最长255字元。|

## 请求案例

{<br>
    <font color=red>&ensp;curl --location --request POST</font> <font color=blue>'https://dev.api.skypay.ph/payment_intentions/{payment_intentions_id} '</font><br>
    <font color=red>&ensp;--header 'Idempotency-Key</font> : <font color=blue>'key_abcde'</font> <br>
    &ensp;&ensp;&ensp;&ensp;{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>200</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_types": [ </font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"gcash_webpay"</font><br>
    &ensp;&ensp;&ensp;&ensp;]<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_data": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"gcash_webpay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"gcash_webpay": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"success_redirect_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"fail_redirect_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"notify_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"brand": </font>: <font color=blue>"bb_xxxxxxxx"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"statement_descriptor"</font> : <font color=blue>"string"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}

## 输出参数主体
|       参数                | Type        |   描述|
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |固定值：payment_intention|
|id     |   String  |交易id，用于在我们系统中的查询API进行查询|
|amount     |   Number  |交易金额|
|currency   |   String  |货币类型|
|status     |   String  |交易状态|
|created_by     |   String  |密钥中的username|
|created     |   Time  |创建时间|
|payment_method     |   String  |所生成的支付方法数据的对象的Id|
|metadata   |   Json    |要保存的任何其他数据。Key物件最多20组，value值最长255字元。|

## 响应案例
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"object"</font> : <font color=blue>"payment_intention"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"id"</font> : <font color=blue>"pi_cmo7a19d72v59dqtoj90"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"live_mode"</font> : <font color=blue>false</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"status"</font> : <font color=blue>"requires_confirmation"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>200</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method"</font> : <font color=blue>"pm_cmo7bstiago64q48k210"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_capturable"</font> : <font color=blue>0.00</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_received"</font> : <font color=blue>0.00</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created_by"</font> : <font color=blue>0.00</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created"</font> : <font color=blue>"2024-01-24T02:25:08.750773Z"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>