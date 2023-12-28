# 3.5    修改支付交易（amendTransactionV2）
#### 当支付数据推送错误时，可以此接口进行数据修正，最常见为用户姓名错误(错字、顺序错误)，此接口与「3.4 Payout–payoutQueueV2」字段相同，请针对欲修改的字段带入新值，其于请带入原始值。
### 注意
 ### 如果无法修改，请先取消交易，然后通过API"3.4 Payout-payoutQueueV2"再次发送。
### LBCExpress渠道的交易，只能修改收款人姓名，其他信息不能修改。

##### Input parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|amendTransactionV2(固定参数值)(必填) - Ex:"action":"amendTransactionV2"|
|authentication  - 验证码|string |50|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender - 支付方|string|100|产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber - 取款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|name - 取现人名字|string |50|取现人名字,使用逗号分割。(必填)  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday - 生日|Date|10|(必填) - 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId - 身份证件号码|string|50|（必填）- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId - 验证身份证件类别（银行）|string |3|请参考第7.3章，获取标识类型(必填) - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone - 移动电话|string|11|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|idcardPicType - 相片文件格式|string|50|文件格式之附属档名(必填) - Ex:"idcardPicType":"jpg"|
|idcardPicUrl - 相片存取网络地址|string |500|(必填)Ex:"idcardPicUrl":"https://aaa.s3.amazonaws.com/uploadfile/12334"|
|location - 取款人地址|string |500|(必填) - Ex:"location":"lalakay los banos laguna"|
|withdrawChannel - 支付管道|int| |支付渠道名称 - 1 MLhuillier  |

##### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"amendTransactionV2",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "sender":"app name",
    "controlNumber":"SK99101125001",
    "name":"NewLastName,NewFirstName",
    "birthday":"1950-09-01",
    "identificationId":"123456789011",
    "identificationTypeId":"1",
    "phone":"092210083333",
    "idcardPicType":"png",
    "idcardPicUrl":"http://skybridge.com.tw/sample.png",
    "location":"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin",
    "withdrawChannel":"1"
}
```

##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|回传时间||||
|responseCode - 回传代码|int|4|4系统默认回传码,长度为4的数字,标准参考回传码定义,(必填)|
|responseDescription - 回传内容描述|string|255|响应信息|

##### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "referenceNo":""
}
```







