# 文档说明
- ## 1.数据加密说明 ##
    - 透过网络传送Json数据前,必须进行加密,简易操作步骤如下:
- (1) Json string/加密前明文格式：postData

<font color=red>
{<br>
  &ensp;&ensp;&ensp;&ensp;"userName"&ensp;:&ensp;"services@skybridge.com",<br>
  &ensp;&ensp;&ensp;&ensp;"action"&ensp;:&ensp;"payoutInruiry",<br>
  &ensp;&ensp;&ensp;&ensp;"authentication"&ensp;:&ensp;"E7735A85-D825-4832-A9F3-4B00CE038BB4",<br>
  &ensp;&ensp;&ensp;&ensp;"controlNumber"&ensp;:&ensp;"SKY99000000001"<br>
  }
</font>


- (2)clsCryptAES.Encrypt(postDatea,passwordKey)/加密后密文格式=>
<font color=red>
mFn2rMpky5Rj+pQILkJ0VpLfdBsz2WQnXcYjCDPhKUomqTZGru2fVoP6PfpspIwjt7B0lWkl30wdlDlMGuHiyDwtpPBzVF3bnR9Nuy020<br>
DpVfGQqBYMvcDb6T4wRWbhu4fytl7itmYhAG2nQceKARB67ohoKYgiBdyFudSMkMg1wga0TM+5uepe8i8kcS1QTpXLkF8xlSjRxlMng==
</font>

- (3)透过Http协议传送并接收返回信息

- (4)接收加密过的讯息内容=>
<font color=red>
SFA6Iwgv35ruBIkFglcZdrT5dofQN2dDavP9qAX3Pu82Mlsj36kd9RikBOS<br>+3BdiqT0sniupvgcFWMTi3FmxCM0nvgOZqCU99tBar6WtuTyQfATska9IhAtX4WkJscaIbX1eTiiqB7KdywBQ==
</font>

- (5)clsCryptAES.Decrypt(responseData,passwordKey)/将加密内容进行解密还原动作=>例如,
<font color=red>
"responseTime":"2018-06-18 17:52:10.521",<br>
"responseCode":"1000",<br>
"responseDescription":"Success"
</font>

- ## 2.加密程序说明 ##
  - 我们提供不同开发平台的加密工具如下
    - Java
      - [AESUtil.java](./public/AESUtil.java.md)
    - .Net C#：
       - 1.Encrypt_net_core.cs
       - 2.clsCryptAES.cs
         - Bin:IKVM.OpenJDK.Charsets.dll,IKVM.OpenJDK.Core.dll,IKVM.OpenJDK.Security.dll,IKVM.OpenJDK.Util.dll,IKVM.Runtime.dll
    - Php：
        - 1.[Aes.php](./public/Aes.php.md)
        - 2.[AESUtil.php](./public/AESUtil.php.md)