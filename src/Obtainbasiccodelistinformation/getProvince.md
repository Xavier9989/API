# 7.5取得省份代码(getProvince)

### 这支取得基本代码服务的API,提供用于使用银行付款的数据列表。调用服务时,versionDate请传空值，一切以正式环境接口为准。

### Input parameters
| 参数                        |    类型     | 长度   |Y/N |描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|Y|用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|Y|getCatalog(固定参数值)- Ex:"action":"getCatalog"|
|authentication |string |255.|Y|验证码 - 验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|catalogType|string|50||目录类别 - 选择所需的基础代码类别 - Ex:"catalogType":"getProvince"|
|versionDate |dataTime|||版本日期|

### Post data

{<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"userName"</font> :  <font color=blue>"AppName@skypay"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"action"</font> :  <font color=blue>"getCatalog"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"authentication"</font> :  <font color=blue>"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"catalogType"</font> :  <font color=blue>"getProvince"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"versionDate"</font> :  <font color=blue>""</font><br>
}



### Output parameters

| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime  |DateTime|50|回传时间 - yyyy-MM-dd HH:mm:ss.SSSS（必填）|
|responseCode  |int|4|回传代码 - 系统默认回传码,长度为4的数字,标准参考回码定义|
|result |string[]|Key/Value|回传结果 - 回传Key/Value格式字符串数组|
|ProvinceId|int||省份代码ID|
|Province|string|50|省份名称|


### Output data

{<br>
   <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"result"</font> : [<br>
       { <br>
       <font color=red>&ensp;&ensp;&ensp;&ensp;"ProvinceId"</font> : <font color=blue>1</font>,<br>
       <font color=red>&ensp;&ensp;&ensp;&ensp;"Province"</font> : <font color=blue>"sample string"</font><br>
       }<br>
    ]<br>
}

