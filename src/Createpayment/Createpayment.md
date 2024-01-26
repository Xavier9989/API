# 创建付款 – 技术规范

### 此方法使合作伙伴能够通过SKYPAY的系统创建支付请求

 - EndPoint	: /payment_intentions
 - Method	: POST
  
## 输入参数（请求头）
### Input parameters:
|       参数                | Type         |   Required       |  描述|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|IdempotencyKey |string|NO|同一交易请求的唯一密钥，将保存 24 小时。在 24 小时内，如果账单人使用相同的idempotency key 发送相同的请求，则将得到来自前一个事务的响应。如果系统中存在密钥，Skypay 将不会向商家方重新发送交易|

## 输入参数（Body）
|       参数                | Type         |   Required       |  描述|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|amount     |   Number  | Yes   |交易金额|
|currency|string |Yes| 货币类型|
|confirm  |Boolean|Yes|值为true，要提交事务，并且在确认交易后无法更新。|
|payment_method_types   | string |Yes | 选择要使用的支付方式。请参考  5. 支付方式  列表带入值。|
| <table><tr><td>payment_method_data</td></tr></table>|Object |Yes|支付方式。|
|type   | string |Yes | 选择要使用的支付方式。请参考  5. 支付方式  列表带入值。|
| <table><tr><td>gcash_webpay</td></tr></table>  |  | | |
|statement_descriptor   | string |Yes |付款说明|
|success_redirect_url   | string |Yes |重新定向到付款成功时网页URL|
|fail_redirect_url   | string |Yes |重新定向到付款失败时网页URL|
|notify_url   | string |Yes |发送通知/回调请求的URL|
|metadata   | KeyValue |Optional |要保存的任何其他数据。Key物件最多20组，value值最长255字元。|
## 请求案例

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;curl --location --request POST 'https://dev.api.skypay.ph/payment_intentions'</font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;--header 'Idempotency-Key: key_abcde'</font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;--header 'Authorization: Basic xxxxxxx'</font> <br>
    &ensp;&ensp;&ensp;&ensp;{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>100</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"confirm"</font> : <font color=blue>true</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_types": [ </font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"gcash_webpay"</font><br>
    &ensp;&ensp;&ensp;&ensp;]<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_data": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"gcash_webpay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"gcash_webpay": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"success_redirect_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"fail_redirect_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"notify_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"statement_descriptor"</font> : <font color=blue>"string"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}


## 输出参数主体
|       参数                | Type         |   描述 |
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |固定值：payment_intention|
|id     |   String  |交易id，用于在我们系统中的查询API进行查询|
|amount     |   Number  |交易金额|
|currency   |   String  |货币类型|
|object     |   String  |固定值：payment_intention|
|metadata   |   Json    |要保存的任何其他数据。Key物件最多20组，value值最长255字元。|
|latest_charge     |   String  |最新的请求值，建议留存，必要时可提供给我们检查交易|
|status     |   String  |交易状态|
|payment_method     |   String  |所生成的支付方法数据的对象的Id|
|next_action     |   Object   |用户需要做的下一个操作。此字段仅在状态为“requires_action”时才存在|
|type     |   String  |动作类型|
|redirect_to_url     |   Object  |Biller需要将页面重定向到给定的URL中|
|url     |   Object  |交易链接|
|created_by     |   String  |密钥中的username|
|created     |   Time  |创建时间|
|amount_details     |   Object  |费用详情|
|convenience_fee     |   Object  |服务费|
|amount     |   Number  |费用金额|
|currency     |   String  |货币类型|
|type     |   String  |费用类别|


## 响应案例
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"object"</font> : <font color=blue>"payment_intention"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"id"</font> : <font color=blue>"pi_cmnj723c2oq5nufs2blg"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"live_mode"</font> : <font color=blue>false</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"status"</font> : <font color=blue>"requires_action"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>100</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method"</font> : <font color=blue>"pm_cmnj735iago64q48k1jg"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"latest_charge"</font> : <font color=blue>"ch_cmnj74dsjfkj072uf3r0"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"next_action": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"redirect_to_url"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"redirect_to_url": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"url"</font> : <font color=blue>"https://uat.m.gcash.com/"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_capturable"</font> : <font color=blue>0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_received"</font> : <font color=blue>0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created_by"</font> : <font color=blue>"sk_test_CMFLEAIJ66OGNFKLKNQG"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created"</font> : <font color=blue>"2024-01-23T03:33:28.056840295Z"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_details": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"convenience_fee": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue> 5.0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"convenience_fee"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
