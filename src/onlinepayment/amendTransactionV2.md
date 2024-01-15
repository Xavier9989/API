# 3.5    修改支付交易（amendTransactionV2）

#### 当支付数据推送错误时，可以此接口进行数据修正，最常见为用户姓名错误(错字、顺序错误)，此接口与「3.4 Payout–payoutQueueV2」字段相同，请针对欲修改的字段带入新值，其于请带入原始值。

### <font color = red>注意 ：</font>

 ### <font color = red>如果无法修改，请先取消交易，然后通过API"3.4 Payout-payoutQueueV2"再次发送。</font>

### <font color = red>Cebuana渠道的交易，只能修改收款人姓名，其他信息不能修改。</font>

### Input parameters:
| 参数                        |    类型     | 长度   | Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|  
|userName |string|50|Y|用户名 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|amendTransactionV2(固定参数值) - Ex:"action":"amendTransactionV2"|
|authentication   |string |50|Y| 验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender |string|100| Y|支付方 - 产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber  |string|13~15|Y|取款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name |string |50|Y|取现人名字  - 使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday|Date|10|Y | 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId  |string|50|Y|身份证件号码- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId |string |3|Y|验证身份证件类别（银行）请参考第7.3章，获取标识类型 - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone |string|11|Y| 09开头的11位数字 - Ex:"phone":"09270348095"|
|idcardPicType |string|50|Y|相片文件格式 - 文件格式之附属档名 - Ex:"idcardPicType":"jpg"|
|idcardPicUrl|string |500|Y|相片存取网络地址 - Ex:"idcardPicUrl":"https://12334"|
|location  |string |100|Y|取款人地址 - Ex:"location":"lalakay los banos laguna"|
|withdrawChannel|int|Option | Y|支付渠道名称 - 1 MLhuillier  |

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"amendTransactionV2"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011",//从这个参数开始都可以传空</font><br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"1"</font><br>
}


### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|responseCode |int|4|系统默认回传码,长度为4的数字,标准参考回传码定义|
|responseDescription |string|255|回传内容描述 - 响应信息|

### Output data：

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
}








