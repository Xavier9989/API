# 介绍
本文档说明各渠道对应网页支付之接口方法与规范。


## 通讯协议和请求方法
- Service Type：Restful Service
- Http Method：POST

## 接口认证（授权）
授权是使用用户名和密码来进行基本身份验证，所使用的方法为Basic Authentication。
认证授权所需参数：
- 1.api url
- 2.tenant
- 3.username
- 4.password
#### <font color = red>以上1,2参数于开立帐号时系统自动寄送至指定信箱，3, 4参数请参考"生成认证金钥"，由SkyPay后台生成。</font>
## Basic Authentication

### 由username和password来组成认证码，例如：
-  username: alice, pw: superman 
-  alice:superman
-  Base64 encoded: YWxpY2U6c3VwZXJtYW4=
-  HTTP request header:
- Authorization: Basic YWxpY2U6c3VwZXJtYW4=