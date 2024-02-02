# 7.4 余额互转（balanceTransfer）

## 这支API是由SKYPAY提供,由合作伙伴发动请求执行不同主体间馀额互转。

### Input parameters

| 参数                        |    类型     | <img width=30/>长度   |<img width=30/>必填|描述|
| :-------------------------: | :-----------: |:-----:|:---:|--------------------------------|   
|userName |string|50|是|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|是|调用行为<br>balanceTransfer(固定参数值) - Ex:"action":"balanceQuery"|
|authentication |string |50|是|验证密钥<br> Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|transferFrom |string |5|是|转帐来源帐号<br> (主体公司前缀)<br>ex: SKY98|
|transferTo |string |5|是|转帐目的帐号<br> (主体公司前缀)ex: SKY99|
|amount |decimal |||Ex:1200000.00|

## Post Date

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"notificationInquiry"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"transferFrom"</font> : <font color=blue>"SKY98"</font>,<br>
     <font color=red>&ensp;&ensp;&ensp;&ensp;"transferTo"</font> : <font color=blue>"SKY99"</font>,<br>
      <font color=red>&ensp;&ensp;&ensp;&ensp;"transferTo"</font> : <font color=blue>1200000.00</font>,<br>
}


### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|回传时间<br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|回传代码 <br>1000|
|responseDescription|string|255|回传内容描述 <br>Success|

### Output data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
}


### Return code:

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
|1000 |Success|
|-1016 |Insufficient balance|
|-1009 |Unpredictable exception occur|
