# 1.objective

In this document, the definition of time parameters is to use the GMT+8 time zone
## 2.architecture
#### <font color = red>callerName：Provided by SkyPay (in the email linked to the account's email)</font>
######  <font color = red>CallerName that has already been opened can only be sent to the email once. If you forget, please contact our technical support</font>
_________________
- Test Request Interface url：
- https://test.skypay.ph/services/{callerName}
- Formal Request Interface url：
- https://api.skypay.ph/services/{callerName}
## 3.Protocol & Method 
- Service Type：Restful Service
- Http Method：POST
- Content Type：text/plain
_________________

## 4.4.Encryption
Post data must be encrypted before POST request.
![CC更改金钥](/en/public/CC更改金钥.png "Shiprock")
- Encrypt Key：The encryption key is provided by SkyPay and obtained from the CC change key function in the management backend

## 5.5.Authentication 
<font color = red>Authentication information should be provided at post data in each API call.</font>
- <font color = red>User Name：callerName：Provided by SkyPay (in the email linked to the account's email)</font>
- <font color = red>Authentication Key：Provided separately by SkyPay (in the key function of the management backend)</font>
- <font color = red>Prefix：Provided separately by SkyPay (in the email bound to the account email, repayment should be uniformly started with SKY * *)</font>