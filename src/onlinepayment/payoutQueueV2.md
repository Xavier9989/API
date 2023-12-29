# 3.4    ML/LBCExpress非实时放款（payoutQueueV2）

### 此接口为指定渠道支付接口，由合作伙伴主动推送至SkyPay，为异步接口并由3.2 PayoutQueuePayout接口回调支付结果。
### 注意
#### 请注意若选择此支付接口，表示此笔款项指定在LBC或ML取款，其他渠道将不支持取此笔款项。
#### 在用户未取款前皆可取消此笔支付，请调用「3.3 Payout–cancelPayout」。取消不是实时取消，次日回复取消结果，取消不退服务费。

##### Input parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|用户名称，SkyPay提供(必填) - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|payoutQueueV2(固定参数值)(必填) - Ex:"action":"payoutQueueV2"|
|authentication  - 验证码|string |50|验证密钥(必填) - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender - 支付方|string|100|产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber - 取款码|string|13|前缀码5码+8~10个数字（前缀码在绑定邮箱中获取）(必填) - Ex:SKY**12345678|
|name - 取现人名字|string |50|取现人名字,使用逗号分割。(必填)  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday - 生日|Date|10|(必填) - 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId - 身份证件号码|string|50|（必填）- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId - 验证身份证件类别|string |3|请参考第7.3章，获取标识类型(必填) - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone - 移动电话|string|11|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|amount - 金额|decimal|10.2|支付金额支持数字小数位两位(必填) -  ex:"amount":3400.00|
|accountNo - 账户号|string |50|银行渠道进行支付时必填，电子钱包无此参数请参考第七章接口7.6 Get Bank Code,银行代码为3位的字符|
|idcardPicType - 图片格式|string|50|文件格式之附属档名(必填) - Ex:"idcardPicType":"jpg"|
|idcardPicUrl - 相片存取网络地址|string |500|(必填)Ex:"idcardPicUrl":"https://aaa.s3.amazonaws.comuploadfile12334"|
|location - 取款人地址|string |500|(必填) - Ex:"location":"lalakay los banos laguna"|
|withdrawChannel - 支付管道|int| |支付渠道名称 - 1 MLhuillier  -  13 LBCExpress|

##### Post data
```md
{
    "userName":"AppName@skypay",
    "action":"payoutQueueV2",
    "authentication":"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75",
    "sender":"app name",
    "controlNumber":"SKY99101125001",
    "name":"Last name,First name,Middle name",
    "birthday":"1950-09-01",
    "identificationId":"123456789011",
    "identificationTypeId":"1",
    "phone":"092210083333",
    "amount":"10.00",
    "idcardPicType":"png",
    "idcardPicUrl":"http://skybridge.com.tw/sample.png",
    "location":"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin",
    "withdrawChannel":"13"
}

```
##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|回传时间||||
|responseCode - 回传代码|int|4|4系统默认回传码,长度为4的数字,标准参考回传码定义,(必填)|
|responseDescription - 回传内容描述|string|255|响应信息|
|referenceNo - 关连码|string|255|此字段将带回空值|

##### Output data：
```md
{
    "responseTime":"2018-06-18 17:52:10.5211",
    "responseCode":"1000",
    "responseDescription":"Success",
    "referenceNo":""
}
```



