# Paymentconfirmation
### This interface must be called if II Create Payment does not take confirm=true. If you want to ignore this confirmation interface, take the parameter confirm=true in the Create Payment interface.

 - EndPoint	: /payment_intentions/{payment_intentions_id}/confirm
 - Method	: POST


## Input parameters(header):
|      parametric               | Type         |    require  <img width=30/>      |  description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|IdempotencyKey |string|否|A unique key for the same transaction request is kept for 24 hours. Within 24 hours, if a biller sends the same request using the same idempotency key, they will get a response from the previous transaction. Skypay will not resend a transaction to the merchant if the key exists in the system.|

## Input parameters（Body）
|       parametric                 | Type         | require  <img width=30/>     |  description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|payment_method_types   | string |YES| Select the payment method to be used. Please refer to Payment method|
|payment_method_data|Object |YES||
|type   | string |YES | Select the payment method to be used. Please refer to Payment method|
| qr_ph  |  Object|YES  | |
|notify_url   | string |YES|URL to send notification/callback request|
|metadata   | KeyValue |No |Any other data to be saved. up to 20 groups of Key objects and up to 255 characters of value values.|

## 请求案例

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;curl --location --request POST 'https://dev.api.skypay.ph/payment_intentions'</font> <br>
    &ensp;&ensp;&ensp;&ensp;{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_types": [ </font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph"</font><br>
    &ensp;&ensp;&ensp;&ensp;]<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_data": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"qr_ph"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"notify_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}

## Output parameter body
|        parametric               | Type         |    description|
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |fixed value：payment_intention|
|id     |   String  |Transaction id for querying the query API in our system|
|amount     |   Number  |Transaction amount|
|currency   |   String  |Type of currency|
|metadata   |   Json    |Any other data to be saved. up to 20 groups of Key objects and up to 255 characters of value values.|
|latest_charge     |   String  |Up-to-date request values, recommended to be retained and made available to us to check transactions if necessary|
|status     |   String  |transaction status|
|payment_method     |   String  |Id of the object of the generated payment method data|
|next_action     |   Object   |The next action the user needs to take. This field only exists if the status is "requires_action".|
|type     |   String  |Type of action|
|qr_code   |   Object  ||
|data    |  String |Transaction data|
|image_data_url   |  String  |Payment QR Code|
|created_by     |   String  |Username in the key|
|created     |   Time  |Creation time|
|amount_details     |   Object  |Fee details|
|convenience_fee     |   Object  |service fee|
|amount     |   Number  |Amount|
|currency     |   String  |Type of currency|
|type     |   String  |Cost category|


## 响应案例
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"object"</font> : <font color=blue>"payment_intention"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"id"</font> : <font color=blue>"pi_cmnl463c2oq5nufs2bm0"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"live_mode"</font> : <font color=blue>false</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"status"</font> : <font color=blue>"requires_action"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>205</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method"</font> : <font color=blue>"pm_cmnl5uliago64q48k1lg"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"latest_charge"</font> : <font color=blue>"ch_cmnj74dsjfkj072uf3r0"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"next_action": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"qr_code"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_code": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"data"</font> : <font color=blue>"00020101021228790011ph.ppm"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"image_data_url"</font> : <font color=blue>"data:image/png;base64,"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_capturable"</font> : <font color=blue>0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_received"</font> : <font color=blue>0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created_by"</font> : <font color=blue>"sk_test_CMFLEAIJ66OGNFKLKNQG"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"created"</font> : <font color=blue>"2024-01-23T03:33:28.056840295Z"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount_details": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"convenience_fee": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue> 5.0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"convenience_fee"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
