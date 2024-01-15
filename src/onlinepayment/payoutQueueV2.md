# 3.4    ML/Cebuana实时放款（payoutQueueV2）

### 此接口为指定渠道支付接口，由合作伙伴主动推送至SkyPay，为异步接口并由3.2 PayoutQueuePayout接口回调支付结果。
### <font color = red>注意</font>
### <font color = red>请注意若选择此支付接口，表示此笔款项指定在Cebuana或ML取款，其他渠道将不支持取此笔款项。</font>
### <font color = red>在用户未取款前皆可取消此笔支付，请调用「3.3 Payout–cancelPayout」。取消不是实时取消，次日回复取消结果，取消不退服务费。</font>

### Input parameters:
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|payoutQueueV2(固定参数值)- Ex:"action":"payoutQueueV2"|
|authentication   |string |50|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender  |string|100| Y   |支付方 - 产品APP名称：由合作伙伴设计 - Ex:"sender":"APP NAME"|
|controlNumber  |string|13~15|Y|取款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name |string |50|Y|取现人名字 - 使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday |Date|10|Y| 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId  |string|50|Y|身份证件号码- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId  |string |3| |验证身份证件类别 - 请参考第7.3章，获取标识类型 - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone  |string|11|Y | 09开头的11位数字 -  Ex:"phone":"09270348095"|
|amount |decimal|10.20|Y |支付金额支持数字小数位两位 -   ex:"amount":3400.00|
|idcardPicType  |string|50|Y|图片格式 - 文件格式之附属档名 - Ex:"idcardPicType":"jpg"|
|idcardPicUrl  |string |500|Y|相片存取网络地址  -   Ex:"idcardPicUrl":"https://12334.png"|
|location  |string |500|Y| 取款人地址 - Ex:"location":"lalakay los banos laguna"|
|withdrawChannel  |int| | Y |支付渠道名称 - 1 MLhuillier  -  13 Cebuana - Lhuillier	|

### Post data
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueueV2"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> :  <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> :  <font color=blue>"123456789011"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"13"</font><br>
}


### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|responseCode  |int|4|系统默认回传码长度为4的数字标准参考回传码定义|
|responseDescription |string|255|回传内容描述 - 响应信息|
|referenceNo  |string|255|关连码 - 此字段将带回空值|

### Output data：
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
}

