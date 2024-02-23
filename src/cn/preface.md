# 介紹
本文檔說明各渠道對應網頁支付之接口方法與規範。


## 通訊協議和請求方法
- Service Type：Restful Service
- Http Method：POST

## 接口認證（授權）
授權是使用用戶名和密碼來進行基本身份驗證，所使用的方法爲Basic Authentication。
認證授權所需參數：
- 1.api url
- 2.tenant
- 3.username
- 4.password
#### <font color = red>以上1,2參數於開立帳號時系統自動寄送至指定信箱，3, 4參數請參考"生成認證金鑰"，由SkyPay後臺生成。</font>
## Basic Authentication

### 由username和password來組成認證碼，例如：
-  username: alice, pw: superman 
-  alice:superman
-  Base64 encoded: YWxpY2U6c3VwZXJtYW4=
-  HTTP request header:
- Authorization: Basic YWxpY2U6c3VwZXJtYW4=