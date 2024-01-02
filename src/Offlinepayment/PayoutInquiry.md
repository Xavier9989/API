# 4.1 线下支付数据验证（PayoutInquiry）
**这个支付验证的API服务,是由合作伙伴提供,它将会在取现人要求提款时,发出要求验证讯息**

#### Input parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|payoutInquiry(固定参数值)(必填) - Ex:"action":"payoutInquiry"|
|authentication  - 验证码|string |100|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber - 取款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
#### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"payoutInquiry",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "controlNumber":"SKY0XXXXXXXXXX"
}
```

#### Output parameters
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime - 回应时间|DateTime|26|yyyy-MM-dd HH:mm:ss.SSSS(必填)|
|responseCode - 回应代码|int|4|4系统默认回传码,长度为4的数字,标准参考回传码定义,(必填)|
|responseDescription - 回应描叙内容|string|255|响应信息|
|sender - 汇款人|string|255|产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|sender添加ress - 汇款人地址|string|255|汇款人地址(必填)|
|name - 取现人名字|string |50|取现人名字,使用逗号分割。(必填)  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday - 生日|Date|10|(必填) - 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId - 身份证件号码|string|50|（必填）- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|idType - 验证身份证件类别|string|50|身份证类型（SSS、UMID、驾驶执照、TIN…）“idType”：“TIN”（必填）|
|phone - 移动电话|string|11|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|amount - 金额|string|10.2|支付金额支持数字小数位两位(必填) -  ex:"amount":3400.00|
|idcardPicType - 相片文件格式|string|50|文件格式之附属档名(必填) - Ex:"idcardPicType":"jpg"|
|idcardPicUrl - 相片存取网络地址|string |500|(必填)Ex:"idcardPicUrl":"https://aaa.s3.amazonaws.com/uploadfile/12334"|
|contractNumber - 收款码|string|15|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|location - 地址|string |1000|添加ress取现人地址(必填)|

##### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "sender":"Skybridge",
    "sender添加ress":"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin",
    "controlNumber":"SKYXXXXXXXXXX",
    "name":"Last name,First name,Middle name",
    "birthday":"1945-01-01",
    "identificationId":"123456789011",
    "idType":"SSS",
    "phone":"6392210083333",
    "amount":"3900.00",
    "idcardPicType":"png",
    "idcardPicUrl":"http://skybridge.com.tw/sample.png",
    "contractNumber":"SK00000000001",
    "location":"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-lip-pin"
}
```
### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000 |Success|
|-1001|Verification error|
|-1009|Unpredictable exception occurs|
|-1012|Control number invalid or expired|
|-1014|Prefix of Control number is incorrect.|
|-1016|Insufficient balance|
|-1022|Invalid Accountnumber|
|-1026|Transactions has been paid|



