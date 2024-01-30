# 推送交易 (银行、钱包)(payoutQueue)
这个API是由SkyPay提供,并由合作伙伴进行主动推送。
当客户取得支付交易核准信息,合作伙伴必须透过此界面推送支付数据进行支付交易。
![](../public/4线上放款.png)

- <font color = red>重复支付注意 </font>
    - <font color = red>为了避免重复支付，重送交易前请先查询交易状态（查询操作请在交易发送后300秒）。</font>
    - <font color = red>重送不建议更换支付码(避免重复放款，重试间隔应该在300秒以上)。</font>
    - <font color = red>交易状态是Pending或Complete状态交易记录不可以重送，避免重复支付。</font>
    - <font color = red>禁止通过不同的提款渠道重新发送同一笔交易。</font>

### Input parameters:
|       参数                | 类型         |   长度       |  Y/N|     描述    |
|:-------------------------:|:-----------:|     :------:     |   :-----:       |-----------|   
|userName |string|50|Y|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action     |   string  | 50   |  Y  |调用行为<br>payoutQueuePayout(固定参数值) - Ex:"action":"payoutQueue"|
|authentication|string |50| Y|验证密钥<br>  Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender  |string|100|  Y  |支付方<br> 产品APP名称(由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber   | string | 13~15 |  Y |取款码<br> 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name |string |50|  Y  |取现人名字<br>使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|phone|string|11 |  Y |09/08开头的11位数字 <br> Ex:"phone":"09270348095"|
|amount|string|10.20  |    Y   |支付金额支持数字小数位两位<br>  ex:"amount":3400.00|
|bankNo|string |50| Y |账户号<br>银行渠道进行支付时必填，电子钱包无此参数请参考第八章接口8.6 Get Bank Code,银行代码为3位的字符|
|accountNo  |string |50| Y |电子钱包<br>账号为取现人09/08开头11位长度之手机号码 <br>Bank:取现人指定银行账号,(指定有效之银行账号)|
|withdrawChannel|int||  Y| 指定支付渠道代码<br> 参考第十章管道详细说明[渠道code值](../Paymentpipeline/Paymentpipeline.md)|
|identificationId  |string|        50  |  N       |身份证件号码<br> 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId  |string |3|   N  |验证身份证件类别<br>参考8.3 Get Identification Type - 银行渠道进行支付时选填，电子钱包无此参数 - Ex:":identificationTypeId":"2"|
|idType  |string|50| N  |验证身份证件类别<br>电子钱包进行支付时选填，银行无此参数 - ex:"idType":"TIN"|
|idcardPicType  |string|50|     N   |图片格式<br>电子钱包进行支付时选填，银行无此参数Ex:"idcardPicType":"jpg"|
|idcardPicUrl  |string |500| N  |相片存取网络地址<br>电子钱包进行支付时选填，银行无此参数Ex:"idcardPicUrl":""|
|birthday  |Date|10|  N     |生日格式<br>yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|birthPlace  |string|250|  N  |出生地<br>银行渠道进行支付时选填，电子钱包无此参数|
|location  |string |500|N |取款人地址<br> Ex:"location":manila"|
|provinceId |int| |  N   |省份ID<br>请参考第八章接口8.5 Get Province - 银行渠道进行支付时选填，电子钱包无此参数 - Ex:ProvinceId	Province1	Abra  - 2	Agusan del Norte…|
|cityId  |int||   N   |城巿ID<br>请参考第八章接口8.4 Get Town City - 银行渠道进行支付时选填，电子钱包无此参数 -  Ex:省份Id城巿Id城巿名称 - ProvinceId TownCityId	TownCity47	996	Manila…|
|expiryDate  |string |50| N|证件到期日<br>银行渠道进行支付时选填，电子钱包无此参数|

### Post data

### 支付为电子钱包时,调用API送出的数据格式内容:

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueue"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"09123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"6"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> :  <font color=blue>"123456789011"//从这个参数开始都可以传空</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idType"</font> :  <font color=blue>"SSS"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicType"</font> : <font color=blue>"png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"idcardPicUrl"</font> : <font color=blue>"http://skybridge.com.tw/sample.png"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font><br>
}


### 支付为银行时,调用API送出的数据格式内容:<font color = red>（bank交易时，请先走8.6获取银行代码接口来获取目前可用的银行列表） </font>

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutQueue"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"sender"</font> : <font color=blue>"app name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK99123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"name"</font> : <font color=blue>"Last name,First name,Middle name"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"092210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"bankNo"</font> : <font color=blue>"SEC"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"accountNo"</font> : <font color=blue>"09123456789"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"6"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationId"</font> : <font color=blue>"123456789011"//从这个参数开始都可以传空</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"identificationTypeId"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthday"</font> : <font color=blue>"1911-09-01"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"birthPlace"</font> : <font color=blue>"Manila"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"location"</font> : <font color=blue>"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"provinceId"</font> : <font color=blue>"996"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"cityId"</font> : <font color=blue>"47"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"expiryDate"</font> : <font color=blue>"2024-05-01"</font><br>
}

### Output parameters:

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间<br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 <br>  1000|
|responseDescription  |string|255|回传内容描述 <br>  Success|

### Output data：
{
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}

### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
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

