# 3.1    推送线上支付交易(payoutQueue)
这个API是由SkyPay提供,并由合作伙伴进行主动推送。
当客户取得支付交易核准信息,合作伙伴必须透过此界面推送支付数据进行支付交易。
- 重复支付注意
    - **为了避免重复支付，重送交易前请先查询交易状态（查询操作请在交易发送后300秒）**。
    - **重送不建议更换支付码(避免重复放款，重试间隔应该在300秒以上)**。
    - **交易状态是Pending或Complete状态交易记录不可以重送，避免重复支付**。
    - **禁止通过不同的提款渠道重新发送同一笔交易**。
##### Input parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)payoutQueue(固定参数值) - Ex:"action":"payoutQueue"|
|authentication  - 验证码|string |50|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender - 支付方|string|50|产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber - 取款码|string|13|(必填)前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name - 取现人名字|string |50|(必填)取现人名字,使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone - 移动电话|string|11|(必填)09开头的11位数字  - Ex:"phone":"09270348095"|
|amount - 金额|string|10.2|(必填)支付金额支持数字小数位两位 -  ex:"amount":3400.00|
|accountNo - 账户号|string |50|银行渠道进行支付时必填，电子钱包无此参数请参考第七章接口7.6 Get Bank Code,银行代码为3位的字符|
|withdrawChannel - 支付管道|int| |(必填)指定支付渠道代码 - 参考第九章管道详细说明|
|identificationId - 身份证件号码|string|50|（选填）- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId - 验证身份证件类别|string |3|参考7.3 Get Identification Type - 银行渠道进行支付时选填，电子钱包无此参数 - Ex:":identificationTypeId":"2"|
|idType - 验证身份证件类别|string|50|电子钱包进行支付时选填，银行无此参数 - ex:"idType":"TIN"|
|idcardPicType - 图片格式|string|50|电子钱包进行支付时选填，银行无此参数Ex:"idcardPicType":"jpg"|
|idcardPicUrl - 相片存取网络地址|string |500|电子钱包进行支付时选填，银行无此参数Ex:"idcardPicUrl":"https://aaa.s3.amazonaws.comuploadfile12334"|
|birthday - 生日|Date|10|(选填) - 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|birthPlace - 出生地|string|250|银行渠道进行支付时选填，电子钱包无此参数|
|location - 取款人地址|string |500|(选填) - Ex:"location":manila"|
|provinceId - 省份ID|int| |请参考第七章接口7.5 Get Province - 银行渠道进行支付时选填，电子钱包无此参数 - Ex:ProvinceId	Province1	Abra  - 2	Agusan del Norte…|
|cityId - 城巿ID|int||请参考第七章接口7.4 Get Town City - 银行渠道进行支付时选填，电子钱包无此参数 -  Ex:省份Id城巿Id城巿名称 - ProvinceId TownCityId	TownCity47	996	Manila…|
|expiryDate - 证件到期日|string |50|银行渠道进行支付时选填，电子钱包无此参数|
##### Post data
#### 支付为电子钱包时,调用API送出的数据格式内容:
<table color=blue><tr><td white=DarkSeaGreen>
<font color=Red>
{<br>
 &ensp;&ensp;&ensp; "userName"&ensp;: <font color=blue> &ensp;"AppName@skypay"</font>,<br>
  &ensp;&ensp;&ensp;   "action"&ensp;: <font color=blue> &ensp;"payoutQueue"</font>,<br>
  &ensp;&ensp;&ensp;   "authentication"&ensp;: <font color=blue> &ensp;"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
  &ensp;&ensp;&ensp;   "sender"&ensp;: <font color=blue> &ensp;"app name"</font>,<br>
  &ensp;&ensp;&ensp;   "controlNumber"&ensp;: <font color=blue> &ensp;"SK99123456789"</font>,<br>
  &ensp;&ensp;&ensp;   "name"&ensp;: <font color=blue> &ensp;"Last name,First name,Middle name"</font>,<br>
  &ensp;&ensp;&ensp;   "phone"&ensp;: <font color=blue> &ensp;"092210083333"</font>,<br>
  &ensp;&ensp;&ensp;   "amount"&ensp;: <font color=blue> &ensp;"3900.00"</font>,<br>
  &ensp;&ensp;&ensp;   "accountNo"&ensp;: <font color=blue> &ensp;"09123456789"</font>,<br>
  &ensp;&ensp;&ensp;   "withdrawChannel"&ensp;: <font color=blue> &ensp;"6"</font>,<br>
  &ensp;&ensp;&ensp;   "identificationId"&ensp;: <font color=blue> &ensp; "123456789011"</font>,//从这个参数开始都可以传空<br>
  &ensp;&ensp;&ensp;   "idType"&ensp;: <font color=blue> &ensp;"SSS"</font>,<br>
  &ensp;&ensp;&ensp;   "idcardPicType"&ensp;: <font color=blue> &ensp;"png"</font>,<br>
  &ensp;&ensp;&ensp;   "idcardPicUrl"&ensp;: <font color=blue> &ensp;"http://skybridge.com.tw/sample.png"</font>,<br>
  &ensp;&ensp;&ensp;   "birthday"&ensp;: <font color=blue> &ensp;"1911-09-01"</font>,<br>
 &ensp;&ensp;&ensp;    "location"&ensp;: <font color=blue> &ensp;"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font><br>
}
</font>
</td></tr></table>

#### 支付为银行时,调用API送出的数据格式内容:（bank交易时，请先走7.6获取银行代码接口来获取目前可用的银行列表）
<table color=blue><tr><td white=DarkSeaGreen>
<font color=Red>
{<br>
  &ensp;&ensp;&ensp; "userName"&ensp;: <font color=blue> &ensp;"AppName@skypay"</font>,<br>
  &ensp;&ensp;&ensp;   "action"&ensp;: <font color=blue> &ensp;"payoutQueue"</font>,<br>
  &ensp;&ensp;&ensp;   "authentication"&ensp;: <font color=blue> &ensp;"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
  &ensp;&ensp;&ensp;   "sender"&ensp;: <font color=blue> &ensp;"app name"</font>,<br>
  &ensp;&ensp;&ensp;   "controlNumber"&ensp;: <font color=blue> &ensp;"SK99123456789"</font>,<br>
  &ensp;&ensp;&ensp;   "name"&ensp;: <font color=blue> &ensp;"Last name,First name,Middle name"</font>,<br>
  &ensp;&ensp;&ensp;   "phone"&ensp;: <font color=blue> &ensp;"092210083333"</font>,<br>
  &ensp;&ensp;&ensp;   "amount"&ensp;: <font color=blue> &ensp;"3900.00"</font>,<br>
  &ensp;&ensp;&ensp;   "bankNo"&ensp;: <font color=blue> &ensp;"SEC"</font>,<br>
  &ensp;&ensp;&ensp;   "accountNo"&ensp;: <font color=blue> &ensp;"09123456789"</font>,<br>
  &ensp;&ensp;&ensp;   "withdrawChannel"&ensp;: <font color=blue> &ensp;"6"</font>,<br>
  &ensp;&ensp;&ensp;   "identificationId"&ensp;: <font color=blue> &ensp; "123456789011"</font>,//从这个参数开始都可以传空<br>
  &ensp;&ensp;&ensp;   "identificationTypeId"&ensp;: <font color=blue> &ensp; "1"</font>,<br>
  &ensp;&ensp;&ensp;   "birthday"&ensp;: <font color=blue> &ensp;"1911-09-01"</font>,<br>
  &ensp;&ensp;&ensp;   "birthPlace"&ensp;: <font color=blue> &ensp;"Manila"</font>,<br>
  &ensp;&ensp;&ensp;    "location"&ensp;: <font color=blue> &ensp;"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font><br>
  &ensp;&ensp;&ensp;    "provinceId"&ensp;: <font color=blue> &ensp;"996"</font>,<br>
  &ensp;&ensp;&ensp;   "cityId"&ensp;: <font color=blue> &ensp;"47"</font>,<br>
  &ensp;&ensp;&ensp;  "expiryDate"&ensp;: <font color=blue> &ensp;"2024-05-01"</font><br>
}
</font>
</td></tr></table>

##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS|
|回传时间||||
|responseCode - 回传代码|int|4|默认回传码,长度为4的数字,标准参考回传码定义|
|responseDescription - 回传内容描述|string|255|响应信息|

##### Output data：
<table color=blue><tr><td white=DarkSeaGreen>
<font color=Red>
{<br>
  &ensp;&ensp;&ensp;"responseTime"&ensp;:&ensp;<font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    &ensp;&ensp;&ensp; "responseCode"&ensp;:&ensp;<font color=blue>"1000"</font>,<br>
  &ensp;&ensp;&ensp; "responseDescription"&ensp;:&ensp;<font color=blue>"Success"</font>,<br>
}
</font>
</td></tr></table>

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :-----------: |
|1000|Success|
|-1000|Post context is not valid|
|-1008|Control number is already exists|
|-1009|Unpredictable exception occurMerchant is not available|
|-1016|Insufficient balance|
|-1020|Bank city is incorrect|
|-1021|Bank No is incorrect|
|-1022|Invalid Accountnumber|
|-1027|balance limit exceeded|
|-1028|Has exceeded the limit of 5 transactions per day|
|-1032|Your IP xxx is not whitelisted.Please contact Support Team.|
|-9999|Service not available/Connection error|
|-1001|Invalid Accountnumber|

