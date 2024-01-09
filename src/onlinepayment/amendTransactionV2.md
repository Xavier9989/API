# 3.5    修改支付交易（amendTransactionV2）
#### 当支付数据推送错误时，可以此接口进行数据修正，最常见为用户姓名错误(错字、顺序错误)，此接口与「3.4 Payout–payoutQueueV2」字段相同，请针对欲修改的字段带入新值，其于请带入原始值。
### <font color = red>注意 ：</font>
 ### <font color = red>如果无法修改，请先取消交易，然后通过API"3.4 Payout-payoutQueueV2"再次发送。</font>
### <font color = red>Cebuana渠道的交易，只能修改收款人姓名，其他信息不能修改。</font>
##### Input parameters:
| 参数                        |    类型     | 长度   | Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|  
|userName |string|50|Y|用户名 - SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|amendTransactionV2(固定参数值) - Ex:"action":"amendTransactionV2"|
|authentication  - |string |50|Y| 验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
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

##### Post data
```json
{
    "userName": "AppName@skypay",
    "action":"amendTransactionV2",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "sender": "app name",
    "controlNumber":"SK99123456789",
    "name": "Last name,First name,Middle name",
    "birthday": "1911-09-01",
    "identificationId": "123456789011",//从这个参数开始都可以传空
    "identificationTypeId": "1",
    "phone":"092210083333",
    "idcardPicType":"png",
    "idcardPicUrl":"http://skybridge.com.tw/sample.png",
    "location": "1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin",
    "withdrawChannel": "1"
}
```

##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|responseCode |int|4|系统默认回传码,长度为4的数字,标准参考回传码定义|
|responseDescription |string|255|回传内容描述 - 响应信息|

##### Output data：
```json
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "referenceNo":""
}
```







