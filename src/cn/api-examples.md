# 狀態碼和 HTTP 碼

### 下面列出的狀態代碼表示操作中 API 請求的狀態。

|       狀態枚舉           | 描述|
|:-------------------------:|:-----------|
|requires_payment_method|付款方式或付款方式數據無效|
|requires_confirmation|創建付款 支持「直接創建交易」及「先開單後確認交易」2 種作法，此狀態爲「先開單後確認交易」時之交易狀態。需要進行 付款確認 的調用，來確認執行交易。|
|requires_action|此狀態爲合作伙伴已創建付款交易，需要執行下一個行動。<br>例如，用戶端重定向到響應的 URL。|
|processing|交易處理中。<br>(此狀態取決於系統處理時間，通常很短暫，不容易出現)|
|canceled| 交易已取消|
|succeeded| 交易成功|


### 下面列出的 HTTP 代碼指示 API 請求是否成功。

|Code| Message|描述 |
|:-------------------------:|:-----------:|----------------|
|200|OK|正常狀態|
|400|Bad Request|請求不可接受，通常是由於無效或缺少參數。|
|401|Unauthorized|没有提供有效的 client id、 client secret、partner id 或 API key|
|403|Forbidden|禁止訪問|
|500|Server Errors|服務器遇到意外情況，無法完成請求。|
|502|Bad Gateway|無法從原始服務器獲取有效的響應|
|503|Service Unavailable|Biller 合作夥伴宕機|