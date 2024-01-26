# 4.1 取消支付交易

#### 该服务由SkyPay提供,目的在该笔交易状态为Uploaded时,进行取消交易动作。

## <font color = red>注意</font>

### <font color = red>请注意，如果用户通过"EGCash"和"Cebuana"渠道退款，则服务费将不予退还。</font>

### <font color = red>只能取消Cebuana渠道的放款。</font>

### <font color = red>请求取消接口时状态会变为Cancelled，此时是等待渠道取消，待取消成功后，Cancel Time会有取消成功的时间，我们会回调3.2接口通知您，如取消失败，状态会从Cancelled变回Uploaded，不会回调3.2接口。（如调用4.5接口查询状态，需要注意，必须有Cancel Time且状态为Cancelled才是取消成功）</font>

### Input parameters:
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|调用行为<br>cancelPayout(固定参数值) - Ex:"action":"cancelPayout"|
|authentication  |string |50|Y|验证密钥<br>Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers[] |string[]|13~15  |Y|取款码数组<br> 取消交易时,可同时多笔取款码进行取消,用数组格式,一次性传送多笔要取消的取款码|

### Post data
{<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> : <font color=blue>"AppName@skypay"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> : <font color=blue>"cancelPayout"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> : <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
  <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumbers"</font> : <font color=blue> [</font><br>
   <font color=red>&ensp;&ensp;&ensp;   {<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font><br>
        <font color=red>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;},</font><br>
    <font color=red>&ensp;&ensp; &ensp;   {<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font><br>
        &ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;]<br>
}

### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 <br>  yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode  |int|4|系统默认回传码,长度为4的数字,标准参考回传码定义|
|responseDescription  |string|255|回传内容描述 <br> Success|

### Output data：
{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font><br>
}

### Return code

| 状态代码                        |   状态描述    | 
| :-------------------------: | :----------- |
|1000|Success|
|-1009|An unpredictable exception occurs.(return exception message)|
