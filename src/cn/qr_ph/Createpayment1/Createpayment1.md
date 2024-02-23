# 創建付款

### 此方法使合作伙伴能夠通過SKYPAY的系統創建支付請求

 - EndPoint	: /payment_intentions
 - Method	: POST
  
## 輸入參數（請求頭）
### Input parameters:
|       參數                | Type         |    <div style="width:60px">必填</div>  |  描述|
|:-------------------------:|:-----------:|    :-----------:  |   :-----       | 
|IdempotencyKey |string|否|同一交易請求的唯一密鑰，將保存 24 小時。在 24 小時內，如果賬單人使用相同的idempotency key 發送相同的請求，則將得到來自前一個事務的響應。如果系統中存在密鑰，Skypay 將不會向商家方重新發送交易|

## 輸入參數（Body）
|       參數                | Type         |  <div style="width:60px">必填</div>     |  描述|
|:-------------------------:|:-----------:|     :-----------:   |   :-----       | 
|amount     |   Number  |  是  |交易金額|
|currency|string |是| 貨幣類型|
|confirm  |Boolean|是|值爲true，要提交事務，並且在確認交易後無法更新。|
|payment_method_types   | string |是 | 選擇要使用的支付方式。請參考 支付方式 列表帶入值。|
| payment_method_data|Object |是||
|type   | string |是 | 選擇要使用的支付方式。請參考 支付方式 列表帶入值。|
| qr_ph  | Object | 是| |
|notify_url   | string |是 |發送通知/回調請求的URL|
|metadata   | KeyValue |否 |要保存的任何其他數據。Key物件最多20組，value值最長255字元。|
|order_id   | string |否 |Ex:order_{{$randomPassword}}|
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
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph"</font><br>
    &ensp;&ensp;&ensp;&ensp;]<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payment_method_data": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"qr_ph"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_ph": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"notify_url"</font> : <font color=blue>"https://httpbin.test.k6.io/auything"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;},<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"metadata": {</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"order_id"</font> : <font color=blue>"xxxyyy"</font>,<br>
    &ensp;&ensp;&ensp;&ensp;}<br>
}


## 輸出參數主體
|      參數              | Type         |   描述 |
|:-------------------------:|:-----------:|     :------     |
|object     |   String  |固定值：payment_intention|
|id     |   String  |交易id，用於在我們系統中的查詢API進行查詢|
|amount     |   Number  |交易金額|
|currency   |   String  |貨幣類型|
|metadata   |   Json   | 要保存的任何其他數據。Key物件最多20組，value值最長255字元。|
|latest_charge     |   String  |最新的請求值，建議留存，必要時可提供給我們檢查交易|
|status     |   String  |交易狀態|
|payment_method     |   String  |所生成的支付方法數據的對象的Id|
|next_action     |   Object   |用戶需要做的下一個操作。此字段僅在狀態爲“requires_action”時才存在|
|type     |   String  |動作類型|
|qr_code    |   Object  | |
|data   |   String |交易數據|
|image_data_url   |   String |支付QR碼|
|created_by     |   String  |密鑰中的username|
|created     |   Time  |創建時間|
|amount_details     |   Object  |費用詳情|
|convenience_fee     |   Object  |服務費|
|amount     |   Number  |費用金額|
|currency     |   String  |貨幣類型|
|type     |   String  |費用類別|


## 響應案例
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
    <font color=red>&ensp;&ensp;&ensp;&ensp;"type"</font> : <font color=blue>"qr_code"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"qr_code": {</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"data"</font> : <font color=blue>"00020101021228790011ph.ppmi"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"image_data_url"</font> : <font color=blue>"data:image/png;base64,"</font>,<br>
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
