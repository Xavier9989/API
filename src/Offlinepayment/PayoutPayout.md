# 4.2 支付成功通知（PayoutPayout）

### 这支回复取款成功信息功能由合作伙伴提供,线下店出纳已确认取款时,会回传送取款成功讯息给Skypay,再回复合作伙伴。

### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:--:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|payoutPayout(固定参数值) - Ex:"action":"payoutPayout"|
|authentication |string |100|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumber |string|13~15|Y|取款码 - 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|withdrawChannel|int |Option|Y|支付管道 - 详细内容请参考第9章 - Ex:支付管道支付管道名称9	RDPawnshop|
|payTime|DateTime||Y |支付时间 - (yyyy-MM-dd HH:mm:ss) - 出纳支付时间|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"payoutPayout"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"1"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payTime"</font> : <font color=blue>"2019-02-18 14:59:33"</font><br>
}


### Output parameters:

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-------------:|----------------------------------------------------------------------|   
|responseTime |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription |string|255.|回传内容描述 - 响应信息（必填）|


#### Output data：

{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
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
