# 7.1 Payout Tool

- <font color = red>Please configure the callback address for the corresponding interface in the background CallBack，Content Type：text/plain，Test tool location （Chinese interface displays payment tool, English interface displays payout tool）</font>
- 
![CB回调](/en/public/CB回调.png "Shiprock")![回调填写界面](/en/public/回调填写界面.png "Shiprock")

- Online channel loan testing process
    - Please directly request the 3.1 payoutQueue interface. After a brief delay, the system will automatically call back 3.2 payoutQueuePayoutInterface notification for successful loan disbursement. (For now, only successful callbacks can be simulated, and manual or failed callbacks cannot be performed)。
    - Please click on the DETAIL button after the transaction to request interface parameters and return the original information
![查看交易信息](/en/public/查看交易信息.png "Shiprock")

- Offline store loan testing process
    - imitate4.1 payoutInquiry&4.2 payoutPayoutOffline store payment inquiry and payment success callback message process. Click the CREATE button to open the testing tool page.
![4.1线下放款测试工具](/en/public/4.1线下放款测试工具.png "Shiprock")

- 4.1 payoutInquiryLoan inquiry request simulation

    - Select Channel Channel<font color = red>(Recommended choices RD Pawnshop)</font>，Type select payoutInquiry，<font color = red>Enter loan code Control No</font>，Click the SEND button to send the request, and the interface will request the URL configured in Callback and return the parsed information.
- 4.2 payoutPayout Loan confirmation notification request simulation
    - 4.1After the interface is successful, operation 4.2 can only be performed. Performing operation 4.2 alone will directly fail. Select Channel Channel<font color = red>(Recommended choicesRD Pawnshop)</font>，Type Select payoutPayout，<font color = red>Enter loan code Control No And loan disbursement time Pay Time（EX:2022-07-01 16:00:00）</font>，。Click the SEND button to send the request, and the interface will request the URL configured in Callback and return the parsed information
![4.2选择渠道进行付款](/en/public/4.2选择渠道进行付款.png "Shiprock")

