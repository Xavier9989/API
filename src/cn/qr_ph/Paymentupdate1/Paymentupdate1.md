# 付款更新 
### 此接口在 創建付款 未帶入confirm=true時，可使用來更新付款請求內容。

 -  EndPoint	: /payment_intentions/{payment_intentions_id}
 -  Method	: POST

## 輸入參數（請求頭）
### Input parameters:
|       參數                | Type         |  <div style="width:60px">必填</div>  |  描述|
|:-------------------------:|:-----------:|   :-----------:    |   :-----       | 
|IdempotencyKey |string|否|同一交易請求的唯一密鑰，將保存24小時。在24小時內，如果賬單人使用相同的idempotency key發送相同的請求，則將得到來自前一個事務的響應。如果系統中存在密鑰，Skypay將不會向商家方重新發送交易|

## 輸入參數（Body）
|       參數                | Type         |   <div style="width:60px">必填</div>     |  描述|
|:-------------------------:|:-----------:|    :-----------:   |   :-----       | 
|amount     |   Number  | 是   |交易金額|
|currency|string |是| 貨幣類型|
|confirm  |Boolean|是|值爲true，要提交事務，並且在確認交易後無法更新。|
|payment_method_types   | string |是 | 選擇要使用的支付方式。請參考 支付方式 列表帶入值。|
| payment_method_data|Object |是||
|type   | string |是 | 選擇要使用的支付方式。請參考 支付方式 列表帶入值。|
| qr_ph  | Object | 是| |
|notify_url   | string |是|發送通知/回調請求的URL|
|metadata   | KeyValue |否 |要保存的任何其他數據。Key物件最多20組，value值最長255字元。|

## 請求案例

{<br>
    <font color=red>&ensp;curl --location --request POST</font><font color=blue>'https://dev.api.skypay.ph/payment_intentions/{payment_intentions_id} '</font><br>
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

## 輸出參數主體
|       參數                 | Type        |   描述|
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |固定值：payment_intention|
|id     |   String  |交易id，用於在我們系統中的查詢API進行查詢|
|amount     |   Number  |交易金額|
|currency   |   String  |貨幣類型|
|status     |   String  |交易狀態|
|created_by     |   String  |密鑰中的username|
|created     |   Time  |創建時間|
|payment_method     |   String  |所生成的支付方法數據的對象的Id|
|metadata   |   Json    |要保存的任何其他數據。Key物件最多20組，value值最長255字元。|

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