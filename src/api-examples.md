# 目录

### SkyPay第三支付API规范

_________________

- [版本](/Version1.md).
- 目录
- [前言](/preface.md).
- [文档说明](/APIdocumentationdescription.md)
  - 1.数据加密说明
  - 2.加密程序说明
- 3. 线上支付（非同步）
  - [3.1 推送交易 (银行、钱包)(payoutQueue)](/onlinepayment/payoutQueue.md)
  - [3.2 回调交易结果（payoutQueuePayout）](/onlinepayment/payoutQueuePayout.md).
- 4. 线下支付（非同步）
  - [4.1 推送交易 (汇款店)(payoutQueueV2)](/onlinepayment/payoutQueueV2.md).
  - [4.2 取消交易(cancelPayout)](/onlinepayment/cancelPayout.md).
  - [4.3 修改交易 (amendTransactionV2)](/onlinepayment/amendTransactionV2.md).
- 5. 线下支付（同步）
  - [5.1 支付验证（PayoutInquiry）](/Offlinepayment/PayoutInquiry.md).
  - [5.2 支付确认（PayoutPayout）](/Offlinepayment/PayoutPayout.md).
- 6. 收款接口（同步）
  - [6.1 收款验证（CollectionInquiry）](/Offlinepayment/CollectionInquiry.md).
  - [6.2.1产生7-11收款条码（generate711Barcode）](/Offlinepayment/Generate711Barcode.md).
  - [6.3 收款确认（collectionCollect）](/Offlinepayment/collectionCollect.md).
- 7. 查询功能
  - [7.1 支付状态查询（payoutQueryStatus）](/Offlinepayment/payoutQueryStatus.md).
  - [7.2 交易报表查询(getRepoertPayout/getRerpotCollection)](/Offlinepayment/getReportPayout.md).
  - [7.3 余额查询（balanceQuery）](/Offlinepayment/balanceQuery.md).
  - [7.4 余额互转（Balancetransfer）](/Offlinepayment/Balancetransfer.md).
- 8. 财务功能
  - [8.1 通知接口（financeNotification）](/Rechargebalancewithdrawal/financeNotification.md).
  - [8.2 查詢接口（notificationInquiry）](/Rechargebalancewithdrawal/notificationInquiry.md).
- 9. 测试工具
  - [9.1 支付测试工具](/testtools/Collectionverificationtool.md).
  - [9.2 收款测试工具](/testtools/Paymenttestingtools.md).
- 10. 取得基本代码列表信息
  - [10.1取得国别定义(getNationality)](/Obtainbasiccodelistinformation/getNationality.md).
  - [10.2取得公民状态(getCivilStatus)](/Obtainbasiccodelistinformation/getCivilStatus.md).
  - [10.3取得身份验证类别(getIdentificationType)](/Obtainbasiccodelistinformation/getIdentificationType.md).
  - [10.4取得城巿代码(getTownCity)](/Obtainbasiccodelistinformation/getTownCity.md).
  - [10.5取得省份代码(getProvince)](/Obtainbasiccodelistinformation/getProvince.md).
  - [10.6取得银行代码(getBankCode)](/Obtainbasiccodelistinformation/getBankCode.md).
- 11. [回传代码](/Backpropagationmessagedefinition/Backpropagationmessagedefinition.md).
- 12. [支付渠道代码](/Paymentpipeline/Paymentpipeline.md).   [收款渠道代码](/Paymentpipeline/Paymentpipeline1.md).
- 13. [更改密钥流程](/Changekeyprocess/Changekeyprocess.md).
