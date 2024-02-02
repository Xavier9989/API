# 1.目的

在本文档中,时间参数的定义是使用GMT+8时区
## 2.系统架构
#### <font color = red>callerName：由SkyPay提供（在账户绑定邮箱的邮件中）</font>
######  <font color = red>已开户的callerName只能发送一次到邮箱内，如有忘记请联系我们的技术支持</font>
_________________
- 测试请求接口url：
- https://test.skypay.ph/services/{callerName}
- 正式请求接口url：
- https://api.skypay.ph/services/{callerName}
## 3.通讯协议
- Service Type：Restful Service
- Http Method：POST
- Content Type：text/plain
_________________

## 4.加密要求
在传送数据前,必须先进行加密。
![CC更改金钥](/CC更改金钥.png "Shiprock")
- Encrypt Key：加密金钥由SkyPay提供，在管理后台CC更改密钥功能处获取

## 5.验证机制
<font color = red>每次交易进行API功能调用时,必须先提供验证信息,以便于后台进行安全验证,包含下列信息</font>
- <font color = red>User Name使用者：由SkyPay另外提供（在账户绑定邮箱的邮件中）</font>
- <font color = red>Authentication Key验证密钥：由SkyPay另外提供（在管理后台的金钥功能里）</font>
- <font color = red>Prefix前缀码：由SkyPay另外提供（在账户绑定邮箱的邮件中，放还款统一使用SKY**开头）</font>