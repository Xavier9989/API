# Data Encryption
- ## 1.Data encryption instructions ##
    - Before POST data the JSON string must be encrypted. Sample steps are as follows:
- (1) Json string/Clear text format before encryption：postData

<font color=red>
{<br>
  &ensp;&ensp;&ensp;&ensp;"userName"&ensp;:&ensp;"services@skybridge.com",<br>
  &ensp;&ensp;&ensp;&ensp;"action"&ensp;:&ensp;"payoutInruiry",<br>
  &ensp;&ensp;&ensp;&ensp;"authentication"&ensp;:&ensp;"E7735A85-D825-4832-A9F3-4B00CE038BB4",<br>
  &ensp;&ensp;&ensp;&ensp;"controlNumber"&ensp;:&ensp;"SKY99000000001"<br>
  }
</font>


- (2)clsCryptAES.Encrypt(postDatea,passwordKey)/Encrypted ciphertext format=>
<font color=red>
mFn2rMpky5Rj+pQILkJ0VpLfdBsz2WQnXcYjCDPhKUomqTZGru2fVoP6PfpspIwjt7B0lWkl30wdlDlMGuHiyDwtpPBzVF3bnR9Nuy020<br>
DpVfGQqBYMvcDb6T4wRWbhu4fytl7itmYhAG2nQceKARB67ohoKYgiBdyFudSMkMg1wga0TM+5uepe8i8kcS1QTpXLkF8xlSjRxlMng==
</font>

- (3)Send and receive return information through the HTTP protocol

- (4)Receive encrypted message content=>
<font color=red>
SFA6Iwgv35ruBIkFglcZdrT5dofQN2dDavP9qAX3Pu82Mlsj36kd9RikBOS<br>+3BdiqT0sniupvgcFWMTi3FmxCM0nvgOZqCU99tBar6WtuTyQfATska9IhAtX4WkJscaIbX1eTiiqB7KdywBQ==
</font>

- (5)clsCryptAES.Decrypt(responseData,passwordKey)/Decrypt and restore encrypted content=>For example,
<font color=red>
"responseTime":"2018-06-18 17:52:10.521",<br>
"responseCode":"1000",<br>
"responseDescription":"Success"
</font>

- ## 2.Encryption Program Description ##
  - We provide encryption tools for different development platforms as follows
    - Java
      - [AESUtil.java](/en/public/AESUtil.java.md)
    - .Net C#：
       - 1.Encrypt_net_core.cs
       - 2.clsCryptAES.cs
         - Bin:IKVM.OpenJDK.Charsets.dll,IKVM.OpenJDK.Core.dll,IKVM.OpenJDK.Security.dll,IKVM.OpenJDK.Util.dll,IKVM.Runtime.dll
    - Php：
        - 1.[Aes.php](/en/public/Aes.php.md)
        - 2.[AESUtil.php](/en/public/AESUtil.php.md)

