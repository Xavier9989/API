# Paymentupdate
### This interface can be used to update the content of a payment request when the payment is created without confirm=true.

 -  EndPoint	: /payment_intentions/{payment_intentions_id}
 -  Method	: POST

## Input parameters(header):
|       parametric               | Type         |   require   <img width=30/>  |  description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|IdempotencyKey |string|No|A unique key for the same transaction request is kept for 24 hours. Within 24 hours, if the biller sends the same request using the same idempotency key, it will get a response from the previous transaction. If the key exists in the system, Skypay will not resend the transaction to the merchant side|

## Input parameters（Body）
|        parametric              | Type         |   require <img width=30/>       |  description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|amount     |   Number  |  YES |Transaction amount|
|currency|string |YES| Type of currency|
|confirm  |Boolean|YES|A value of true commits the transaction and cannot be updated after confirming the transaction.|
|payment_method_types   | string |YES | Select the payment method to be used. Please refer to Payment method|
| payment_method_data|Object |YES||
|type   | string |YES | Select the payment method to be used. Please refer to Payment method|
| qr_ph  | Object | YES| |
|notify_url   | string |YES |URL to send notification/callback request|
|metadata   | KeyValue |No |Any other data to be saved. up to 20 groups of Key objects and up to 255 characters of value values.|

## Requested cases

{<br>
    <font color=red>&ensp;curl --location --request POST</font> <font color=blue>'https://dev.api.skypay.ph/payment_intentions/{payment_intentions_id} '</font><br>
    <font color=red>&ensp;--header 'Idempotency-Key</font> : <font color=blue>'key_abcde'</font> <br>
    &ensp;&ensp;&ensp;&ensp;{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>200</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_types": [ </font> <br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph"</font><br>
    &ensp;&ensp;&ensp;&ensp;]<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_data": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"qr_ph"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"notify_url"</font> : <font color=blue>"http://example.com"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}

## Output parameter body
|    parametric               | Type        |    description|
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |fixed value：payment_intention|
|id     |   String  |Transaction id for querying the query API in our system|
|amount     |   Number  |Transaction amount|
|currency   |   String  | Type of currency|
|status     |   String  |transaction status|
|created_by     |   String  |Username in the key|
|created     |   Time  |Creation time|
|payment_method     |   String  |Id of the object of the generated payment method data|
|metadata   |   Json    |Any other data to be saved. up to 20 groups of Key objects and up to 255 characters of value values.|

## Response Cases
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