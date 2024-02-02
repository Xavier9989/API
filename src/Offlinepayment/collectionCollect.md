# 6.3 收款确认（collectionCollect）
#### 这支服务是由合作伙伴提供,它将由线下店出纳触发以确认报销。

### Input parameters
| 参数                        |    类型     | 长度   |<img width=30/>必填|描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|是|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|是|调用行为<br>generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication|string |255|是|验证密钥<br>Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|contractNumber |string|13~15|是|收款码<br> 前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|amount|decimal|10.20|是|金额<br>必须是用户实际收款金额,小数点最高二位数 <br>  ex:"amount":3400.00|
|phone|string|50|是|手机号<br>09/08开头的11位数字<br> Ex:"phone":"09270348095"|
|receiptNumber  |string|50|是|  收据编号|
|collectedTime|DateTime| |是| 收款时间<br>日期格式yyyy-MM-dd HH:mm:ss|
|payChannel|int||是|收款管道<br> 详细说明请参考第12章[渠道code值](../Paymentpipeline/Paymentpipeline1.md)|

### Post data


{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"collectionCollect"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SKY0XXXXXXXXXX"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"amount"</font> : <font color=blue>"3900.00"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"phone"</font> : <font color=blue>"6392210083333"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"receiptNumber"</font> : <font color=blue>"B6C13B76E4BF"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"collectedTime"</font> : <font color=blue>"2018-06-18 17:52:10"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"payChannel"</font> : <font color=blue>"1"</font><br>
}


### Output parameters
| 参数                        |    类型     | <img width=30/>长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|回传时间 <br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode |int|4|回传代码<br> 系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容描述说明|
|responseDescription |string|255|回传内容描述 <br>响应信息|

### Output data：


{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}


### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1001|Verification  failed|
|-1009|An Unpredictable exception occurs|
|-1015|The transaction has been collected|
|-1026|Transactions has been paid|








