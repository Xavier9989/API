# Payment confirmation

 
### This interface is in II When creating a payment without bringing in confirm=true, it must be called. If you want to ignore this confirmation interface, you can bring in the parameter confirm=true in the payment creation interface,


 - EndPoint	: /payment_intentions/{payment_intentions_id}/confirm
 - Method	: POST

## Input parameters (request header)


### Input parameters:
|       parameter                | Type         |   Required       |  Description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|IdempotencyKey |string|NO|The unique key for the same transaction request will be saved for 24 hours. If the account holder sends the same request using the same identity key within 24 hours, they will receive a response from the previous transaction. If there is a key in the system, Skypay will not resend the transaction to the merchant side|

## input parameter（Body）
|       parameter                | Type         |   Required       |  Description|
|:-------------------------:|:-----------:|     :------:     |   :-----       | 
|payment_method_types   | string |Yes | Choose the payment method you want to use. Please refer to Payment method|
| payment_method_data|Object |Yes||
|type   | string |Yes | Choose the payment method you want to use. Please refer to Payment method|
| gcash_webpay  | Object |Yes | |
|statement_descriptor   | string |Yes |Payment instructions|
|success_redirect_url   | string |Yes |Redirect to the webpage URL upon successful payment|
|fail_redirect_url   | string |Yes |Redirect to webpage URL when payment fails|
|notify_url   | string |Yes |URL for sending notification/callback requests|
|brand   | string |No |The input value for this parameter should be id and will be provided by SkyPay after the sub-merchant application file.|
|metadata   | KeyValue |Optional |Any other data to be saved. The maximum number of Key objects is 20, and the maximum value value is 255 characters.|

## Request Case

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;curl --location --request POST 'https://dev.api.skypay.ph/payment_intentions'</font> <br>
    &ensp;&ensp;&ensp;&ensp;{<br>
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
     <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"brand": </font>: <font color=blue>"bb_xxxxxxxx"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}

## Output parameter body


|       parameter                | Type         |   Description|
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |fixed value：payment_intention|
|id     |   String  |Transaction ID, used for querying in our system's query API|
|amount     |   Number  |Transaction amount|
|currency   |   String  | Currency type|
|metadata   |   Json    |Any other data to be saved. The maximum number of Key objects is 20, and the maximum value value is 255 characters.|
|latest_charge     |   String  |The latest request value is recommended to be retained and can be provided to us for transaction review if necessary|
|status     |   String  |Transaction Status|
|payment_method     |   String  |The ID of the object of the generated payment method data|
|next_action     |   Object   |The next action that the user needs to take. This field only exists when the status is "requests_action"|
|type     |   String  |Action Type|
|redirect_to_url     |   Object  |Biller needs to redirect the page to the given URL|
|url     |   Object  |Transaction link|
|created_by     |   String  |Username in the key|
|created     |   Time  |Creation time|
|amount_details     |   Object  |Fee details|
|convenience_fee     |   Object  |service charge|
|amount     |   Number  |Cost amount|
|currency     |   String  |Currency type|
|type     |   String  |expense category|


## Response case


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
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"convenience_fee": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue> 5.0</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"currency"</font> : <font color=blue>"PHP"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"convenience_fee"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
