# 5.1 支付验证（PayoutInquiry）
**<font color=red>这个支付验证的API服务,是由合作伙伴提供,它将会在取现人要求提款时,发出要求验证讯息</font>**
![4.1线下放款](/public/4.1线下放款.png)


### <font color = red>payoutInquiry取款验证信息</font>
- (1)当取现人要求线下店进行取款要求时,payoutInquire将会实时被叫用,进行支付信息验证工作
-  (2)payoutInquire被叫用后,会回传合作伙伴验证结果,线下店将会收到详细的支付信息以及用户信息
- (3)取现人需要提供取款码及必要的身分验证信息如给出纳人员
- (4)出纳人员在检查取款码及身分验证信息后,会系统回复人工验证是否成功讯息,并传送到Skypay服务器

###  <font color = red>payoutPayout回复支付成功信息</font>
- (1)payoutInquiry成功后,payoutPayout将会由线下店进行叫用,回传这笔交易己支付成功的讯息
- (2)这个交易会在出纳确认该支付,已完成支付动作时发生
- (3)这个功能的实际触发点在出纳人员按下payoutPayout功能按钮时(人工操作)


### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName |string|50|Y|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|调用行为<br>payoutInquiry(固定参数值) - Ex:"action":"payoutInquiry"|
|authentication   |string |100|Y|验证密钥<br>Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber |string|13~15|Y| 取款码<br> 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
### Post data


{<br>
    <font color=red>&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;"action"</font> : <font color=blue>"payoutInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font><br>
}


### Output parameters
| 参数                        |    类型     | 长度   | Y/N|描述|
| :-------------------------: | :-----------: |:-----:| :--:|--------------------------------|   
|responseTime  |DateTime|26|Y |回应时间 <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|Y |回应代码<br> 4系统默认回传码,长度为4的数字,标准参考回传码定义,|
|responseDescription  |string|255||回应描叙内容 <br> 响应信息|
|sender  |string|255|Y|汇款人 <br> 产品APP名称(由合作伙伴设计) - Ex:"sender":"APP NAME"|
|sender添加ress|string|255|Y |汇款人地址|
|name |string |50| Y|取现人名字  <br> 使用逗号分割  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday |Date|10|Y |生日格式：<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId  |string|50|Y|身份证件号码<br> 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|idType  |string|50| |验证身份证件类别<br> 身份证类型（SSS、UMID、驾驶执照、TIN…）“idType”：“TIN”（|
|phone |string|11| Y |手机号<br>09/08开头的11位数字  <br> Ex:"phone":"09270348095"|
|amount |string|10.20| Y |金额 <br> 支付金额支持数字小数位两位 -  ex:"amount":3400.00|
|idcardPicType |string|50| Y|相片文件格式 <br> 文件格式之附属档名 - Ex:"idcardPicType":"jpg"|
|idcardPicUrl |string |500|Y|相片存取网络地址 <br> Ex:"idcardPicUrl":"https://12334"|
|contractNumber  |string|15|N|收款码 <br>前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|location  |string |100| Y|地址 <br>添加ress取现人地址|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font>,<br>
    <font color=red>&ensp;&ensp;"sender"</font> : <font color=blue>"Skybridge"</font>,<br>
    <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKYXXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;"sender添加ress"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font>,<br>
    <font color=red>&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;"birthday"</font> : <font color=blue>"1945-01-01"</font>,<br>
    <font color=red>&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;"idType"</font> : <font color=blue>"SSS"</font>,<br>
    <font color=red>&ensp;&ensp;"phone"</font> : <font color=blue>"6392210083333"</font>,<br>
    <font color=red>&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;"contractNumber"</font> : <font color=blue>"SK00000000001"</font>,<br>
    <font color=red>&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"</font><br>
}


### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1012|Control number invalid or expired|
|-1014|Prefix of Control number is incorrect.|
|-1016|Insufficient balance|
|-1022|Invalid Accountnumber|
|-1026|Transactions has been paid|



