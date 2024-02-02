# 9.2 Collection Tool

- <font color = red>Please configure the callback address for the corresponding interface in the background CallBack，Content Type：text/plain</font>，Test tool location (Chinese interface displays repayment tool, English interface displayscollection tool）
![6.2付款测试工具](/en/public/6.2付款测试工具.png "Shiprock")

- Please click on the DETAIL button after the transaction to request interface parameters and return the original information
![6.2付款测试交易查看](/en/public/6.2付款测试交易查看.png "Shiprock")
- Repayment testing process
    - imitate 6.1 Collection Inquiry&6.3 Collection CollectRequest for repayment query and repayment confirmation interface. Click the CREATE button to open the testing tool page.
- 6.1 Collection Inquiry Repayment query request simulation
    - Select Channel Channel<font color = red>(Recommended choices RD Pawnshop)</font>，Type select Collection Inquiry，<font color = red>Enter repayment codeContract No，Amount and phone number Phone</font>，Click the SEND button to send the request,<font color = red>At this point, the interface will request the URL configured in Callback and return the parsed information。</font>

- 6.3 Collection Collect Repayment confirmation notification request simulation

    - 6.1After the interface is successful, the 6.3 operation can only be performed. Performing the 6.3 operation alone will directly fail. Select Channel Channel<font color = red>(Recommended choices RD Pawnshop)</font>，Type select Collection Collect，<font color = red>Enter repayment code Contract No，Amount, phone number Phone (11 digits starting with 09), receipt code Receipt NoAnd repayment time Collected Time(EX:2022-07-01 16:00:00)，Click the SEND button to send the request, and the interface will request the URL configured in Callback and return the parsed information.</font>

![4.3模拟还款测试流程](/en/public/4.3模拟还款测试流程.png "Shiprock")
