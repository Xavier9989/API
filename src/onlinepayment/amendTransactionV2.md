# 3.5    修改支付交易（amendTransactionV2）
#### 当支付数据推送错误时，可以此接口进行数据修正，最常见为用户姓名错误(错字、顺序错误)，此接口与「3.4 Payout–payoutQueueV2」字段相同，请针对欲修改的字段带入新值，其于请带入原始值。
### 注意
 ### 如果无法修改，请先取消交易，然后通过API"3.4 Payout-payoutQueueV2"再次发送。
### LBCExpress渠道的交易，只能修改收款人姓名，其他信息不能修改。

##### Input parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|userName - 使用者名称|string|50|(必填)用户名称，SkyPay提供 - Ex:"userName":"AppName@skypay"|
|action-调用行为|string|50|(必填)amendTransactionV2(固定参数值) - Ex:"action":"amendTransactionV2"|
|authentication  - 验证码|string |50|(必填)验证密钥 - Ex:"authentication":"E1234567-123C-1234-123F-A12345670"|
|sender - 支付方|string|100|产品APP名称(必填：由合作伙伴设计) - Ex:"sender":"APP NAME"|
|controlNumber - 取款码|string|13|(必填)前缀码5码+8~10个数字（前缀码在绑定邮箱中获取） - Ex:SKY**12345678|
|name - 取现人名字|string |50|(必填)取现人名字,使用逗号分割。  - Last name+","+First name+","+Middle name+","+Suffix - Ex:"name":"Lardizabal,Mary Annalou B.Lardizabal,Berja,|
|birthday - 生日|Date|10|(必填) - 生日格式：yyyy-MM-dd - Ex:"birthday":"1991-10-02" -  写入此字段，参数需要填入正确格式|
|identificationId - 身份证件号码|string|50|（必填）- 依不同身份验证方式,持有证件编号 - Ex:"identificationId":"442301922000"|
|identificationTypeId - 验证身份证件类别（银行）|string |3|(必填)请参考第7.3章，获取标识类型 - Ex:IdentificationId IdentificationType Company ID2 Driver’s License|
|phone - 移动电话|string|11|09开头的11位数字(必填)  - Ex:"phone":"09270348095"|
|idcardPicType - 相片文件格式|string|50|(必填)文件格式之附属档名 - Ex:"idcardPicType":"jpg"|
|idcardPicUrl - 相片存取网络地址|string |500|(必填)Ex:"idcardPicUrl":"https://aaa.s3.amazonaws.com/uploadfile/12334"|
|location - 取款人地址|string |500|(必填) - Ex:"location":"lalakay los banos laguna"|
|withdrawChannel - 支付管道|int| |支付渠道名称 - 1 MLhuillier  |

##### Post data
<table color=blue><tr><td white=DarkSeaGreen>
<font color=Red>
{<br>
 &ensp;&ensp;&ensp; "userName"&ensp;: <font color=blue> &ensp;"AppName@skypay"</font>,<br>
  &ensp;&ensp;&ensp;   "action"&ensp;: <font color=blue> &ensp;"amendTransactionV2"</font>,<br>
  &ensp;&ensp;&ensp;   "authentication"&ensp;: <font color=blue> &ensp;"30AC21B2-9EAA-4503-B0F0-7BE5C277ED75"</font>,<br>
  &ensp;&ensp;&ensp;   "sender"&ensp;: <font color=blue> &ensp;"app name"</font>,<br>
  &ensp;&ensp;&ensp;   "controlNumber"&ensp;: <font color=blue> &ensp;"SK99123456789"</font>,<br>
  &ensp;&ensp;&ensp;   "name"&ensp;: <font color=blue> &ensp;"Last name,First name,Middle name"</font>,<br>
  &ensp;&ensp;&ensp;   "birthday"&ensp;: <font color=blue> &ensp;"1911-09-01"</font>,<br>
  &ensp;&ensp;&ensp;   "identificationId"&ensp;: <font color=blue> &ensp; "123456789011"</font>,//从这个参数开始都可以传空<br>
  &ensp;&ensp;&ensp;   "identificationTypeId"&ensp;: <font color=blue> &ensp; "1"</font>,<br>
  &ensp;&ensp;&ensp;   "phone"&ensp;: <font color=blue> &ensp;"092210083333"</font>,<br>
  &ensp;&ensp;&ensp;   "idcardPicType"&ensp;: <font color=blue> &ensp;"png"</font>,<br>
  &ensp;&ensp;&ensp;   "idcardPicUrl"&ensp;: <font color=blue> &ensp;"http://skybridge.com.tw/sample.png"</font>,<br>
  &ensp;&ensp;&ensp;    "location"&ensp;: <font color=blue> &ensp;"1740 Mabini St,Malate,Manila,1004 Metro Manila,Phi-líp-pin"</font><br>
  &ensp;&ensp;&ensp;   "withdrawChannel"&ensp;: <font color=blue> &ensp;"1"</font>,<br>
}
</font>
</td></tr></table>

##### Output parameters:
| 参数                        |    类型     | 长度    |描述|
| :-------------------------: | :-----------: |:-----:|--------------------------------|   
|responseTime|DateTime|50|yyyy-MM-dd HH:mm:ss.SSSS - 必填|
|回传时间||||
|responseCode - 回传代码|int|4|4系统默认回传码,长度为4的数字,标准参考回传码定义,(必填)|
|responseDescription - 回传内容描述|string|255|响应信息|

##### Output data：
<table color=blue><tr><td white=DarkSeaGreen>
<font color=Red>
{<br>
  &ensp;&ensp;&ensp;"responseTime"&ensp;:&ensp;<font color=blue>"2018-06-18 17:52:10.5211"</font>,<br>
    &ensp;&ensp;&ensp; "responseCode"&ensp;:&ensp;<font color=blue>"1000"</font>,<br>
  &ensp;&ensp;&ensp; "responseDescription"&ensp;:&ensp;<font color=blue>"Success"</font>,<br>
  &ensp;&ensp;&ensp; "referenceNo"&ensp;:&ensp;<font color=blue>""</font><br>
}
</font>
</td></tr></table>







