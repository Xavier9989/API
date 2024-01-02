# API文档说明
- ## 1.数据加密说明 ##
    - 透过网络传送Json数据前,必须进行加密,简易操作步骤如下:
- (1) Json string/加密前明文格式：
postData=a="userName":"services@skybridge.com","action":"payoutInruiry","authentication":"E7735A85-D825-4832-A9F3-4B00CE038BB4","controlNumber":"SKY99000000001"

- (2)clsCryptAES.Encrypt(postDatea,passwordKey)/加密后密文格式=>
mFn2rMpky5Rj+pQILkJ0VpLfdBsz2WQnXcYjCDPhKUomqTZGru2fVoP6PfpspIwjt7B0lWkl30wdlDlMGuHiyDwtpPBzVF3bnR9Nuy020DpVfGQqBYMvcDb6T4wRWbhu4fytl7itmYhAG2nQceKARB67ohoKYgiBdyFudSMkMg1wga0TM+5uepe8i8kcS1QTpXLkF8xlSjRxlMng==

- (3)透过Http协议传送并接收返回信息

- (4)接收加密过的讯息内容=>
SFA6Iwgv35ruBIkFglcZdrT5dofQN2dDavP9qAX3Pu82Mlsj36kd9RikBOS+3BdiqT0sniupvgcFWMTi3FmxCM0nvgOZqCU99tBar6WtuTyQfATska9IhAtX4WkJscaIbX1eTiiqB7KdywBQ==

- (5)clsCryptAES.Decrypt(responseData,passwordKey)/将加密内容进行解密还原动作=>例如,
"responseTime":"2018-06-18 17:52:10.521","responseCode":"1000","responseDescription":"Success"
- ## 2.加密程序说明 ##
  - 我们提供不同开发平台的加密工具如下
    - Java：AESUtil.java
    - .Net C#：
       - 1.Encrypt_net_core.cs
       - 2.clsCryptAES.cs
         - Bin:IKVM.OpenJDK.Charsets.dll,IKVM.OpenJDK.Core.dll,IKVM.OpenJDK.Security.dll,IKVM.OpenJDK.Util.dll,IKVM.Runtime.dll
    - Php：
        - 1.Aes.php 
        - 2.AESUtil.p
