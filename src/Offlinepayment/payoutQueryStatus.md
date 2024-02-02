# 7.1 支付状态查询（payoutQueryStatus）

#### 支付状态查询服务API由Skypay提供,可以对交易状态进行查询,最大数量50笔
### <font color = red>注意</font>
### <font color = red>查询接口调用频率建议在30分钟以上。查询操作请至少在交易后300秒。</font>
### <font color = red>此接口只用于第一次发送交易，检查交易是否超时，目前不建议完全依赖此接口同步交易状态。</font>
### <font color = red>对于取消的交易，必须状态为Cancelled并且Cancel Time不为空，才是取消成功。</font>

### Input parameters

| 参数                        |    类型     | 长度   |<img width=30/>必填|描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|userName|string|50|是|使用者名称<br> SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action|string|50|是|调用行为<br>generate711Barcode(固定参数值) - Ex:"action":"generate711Barcode"|
|authentication|string |255|是|验证密钥<br>Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|controlNumbers|String[]||是|支付码数组名 <br> Array(parameter tag name is controlNumber)|
|controlNumber |String|13~15|是|支付码 <br>前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|

### Post data


{<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"userName"</span> : <span class = "text-blue-500">"AppName@skypay"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"action"</span> : <span class = "text-blue-500">"payoutQueryStatus"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"authentication"</span> : <span class = "text-blue-500">"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</span>,<br>
  <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;"controlNumbers"</span> :[  <br>
        &ensp;&ensp;&ensp;&ensp;{<br>
          <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"controlNumber"</span> : <span class = "text-blue-500">"SK0XXXXXXXXXX"</span><br>
        &ensp;&ensp;&ensp;&ensp;&ensp;},<br>
        &ensp;&ensp;&ensp;&ensp;&ensp;{<br>
          <span class = "text-red-500">&ensp;&ensp;&ensp;&ensp;&ensp; "controlNumber"</span> : <span class = "text-blue-500">&ensp;"SK0XXXXXXXXXX"</span><br>
        &ensp;&ensp;&ensp;&ensp;&ensp;}<br>
    &ensp;&ensp;&ensp;&ensp;]<br>
}



### Output parameters
| 参数                        |    类型     | 长度   |<img width=30/>必填|描述|
| :-------------------------: | :-----------: |:-----:|:----:|--------------------------------|   
|responseTime |DateTime|50|是|回传时间 <br> yyyy-MM-dd HH:mm:ss.SSSS|
|responseCode |int|4|是|回传代码 <br> 系统默认回传码,长度为4的数字,标准参考回码定义,系统默认回传码不足时,使用者可自定义代码,请以数字2开头,长度为4的数字,并明确在回传内容|
|responseDescription |string|255|是| 回传内容描述 <br> 响应信息|
|controlNumbers |String[]|  | 是 |取款码数组名 <br> Array|
|controlNumber |string|13~15|是|取款码 <br> 取款人名字 <br> 使用逗号分割。Last name+","+First name+","+Middle name+","+Suffix监管要求需要还款信息留存档案|
|transactionDate |DateTime|||交易日期 <br> yyyy-MM-dd HH:mm:ss.fff|
|status |int||是|状态代码 : <br>0	Pending:等待中 <br> 1	Completed:己完成 <br> 2	Uploaded:完成上传 <br> 3	Cancelled:己取消 <br> 4	Failed:失败 <br> 10	Inquiry Success:查询成功 <br> 11	Inquiry Failure:查询失败|
|statusDesc |String|50|是|状态描叙: <br> Pending:等待中 <br> Completed:己完成 <br> Uploaded:完成上传 <br> Cancelled:己取消 <br> Failed:失败 <br> Inquiry Success:查询成功 <br> Inquiry Failure:查询失败|
|payTime  |DateTime|||取款时间 <br> (yyyy-MM-dd HH:mm:ss)|
|cancelTime |DateTime|||取消时间 <br> (yyyy-MM-dd HH:mm:ss)|
|withdrawChannel |int |||支付管道 <br> 详细内容请参考第12|
|referenceNo |String|50||收据号码 <br> GCash:reference number - 实时回传收据号码|
|traceNo |String|50||ML专属支付码 <br> MLhuillier(RT) - referenceNumber ML专属支付码|

### Output data：

{<br>
   <font color=red>&ensp;&ensp;&ensp;&ensp;"responseTime"</font> : <font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseCode"</font> : <font color=blue>"1000"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"responseDescription"</font> : <font color=blue>"Success"</font>,<br>
    <font color=red>&ensp;&ensp;&ensp;&ensp;"controlNumbers"</font> : [<br>
       { <br>
         <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"transactionDate"</font> : <font color=blue>"2019-01-14 15:47:13"</font>,<br>
          <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"4"</font>,<br>
          <font color=red>&ensp;&ensp;"statusDesc"</font> : <font color=blue>"Failed"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"cancelTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"Bank"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font><br>
       },<br>
       { <br>
         <font color=red>&ensp;&ensp;"controlNumber"</font> : <font color=blue>"SK0XXXXXXXXXX"</font>,<br>
          <font color=red>&ensp;&ensp;"transactionDate"</font> : <font color=blue>"2019-01-14 15:47:13"</font>,<br>
          <font color=red>&ensp;&ensp;"status"</font> : <font color=blue>"4"</font>,<br>
          <font color=red>&ensp;&ensp;"statusDesc"</font> : <font color=blue>"Failed"</font>,<br>
          <font color=red>&ensp;&ensp;"payTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"cancelTime"</font> : <font color=blue>""</font>,<br>
          <font color=red>&ensp;&ensp;"withdrawChannel"</font> : <font color=blue>"Bank"</font>,<br>
          <font color=red>&ensp;&ensp;"referenceNo"</font> : <font color=blue>""</font>,<br>
       }<br>
    ]<br>
}







