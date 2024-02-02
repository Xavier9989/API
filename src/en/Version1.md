# Version  -    current version ： 1.37
_________________
### This document contains Skypay proprietary information and may not be copied, disclosed, or used in whole or in part without the explicit written permission of our company.

_________________
 
| Version    | Publicationdate | illustrate |publisher|
| ------ | :-----------: | -------------------------------------------|--------------     |
| 1.37     |   2024/1/31     |Add 4.8 balanceTransfer|Wayne.Wang|
| 1.36     |   2023/12/15    |Add 5. Recharge, withdraw, and query interfaces<br>Add5.1 Notification Interface - Recharge, Settlement, Withdrawal (financeNotification)<br>Add 5.2 query interface for recharge, settlement, and withdrawal(notifyionInquiry).<br>Delete EGcsh<br>Delete LBC Express |Wayne.Wang|
| 1.35     |   2023/5/11     |Add 4.6 getReportPayout/(Collection)|Wayne.Wang|
| 1.33     |   2021/01/26    |Add Withdraw Channel: LBC, EGcash|Abel|
| 1.32     |   2020/11/19    |Add WithdrawChannel E-wallet: Paymaya, GrabPay, OmniPay|Abel|
| 1.31     |   2020/09/29    |Add3.1 Payout – payoutQueue Modified only allow eWellat and Bank transaction.<br>Add 3.4 payoutQueueV2<br>Add 3.4.1 Generate QRCode<br>Add 3.5 amendTransactionV2<br>Add3.2 payoutQueuePayout Add ml referenceNumber|Denny Pujo|
| 1.30     |   2020/08/28    |Remove 3.4 payoutQueueV2 <br> Remove 3.4.1 Generate QRCode<br>Remove 3.5 amendTransactionV2|Denny Pujo|
| 1.29     |   2020/02/24    |Add 4.3.1 Generate QR Code|Denny Pujo|
| 1.27     |   2019/10/21    |Add 7-11 Generate Barcode|Denny Pujo|
| 1.24     |   2019/08/25    |Add Change field Data type and length descript|Vinson     Huang|
| 1.23     |   2019/08/14    |Add Change WithdrawChannel|Vinson Huang|
| 1.22     |   2019/08/05    |Add Change issueDate and ExpiryDate to OPTIONAL in 3.1 payoutQueue for Bank|Denny Pujo|
| 1.21     |   2019/07/08    |Add 1.1.Added Chinese Description<br>2.Added payChannel |Vinson Huang|
| 1.20     |   2019/06/18    |Added related ProvinceId in Town City|Denny Pujo|
| 1.19     |   2019/05/06    |Added 3.1	Payout – payoutQueue For Bank<br>Added 7	Get Catalog|Denny Pujo|
| 1.18     |   2019/04/29    |Added 4.5 Payout – QueryStatus|Wayne.Wang|
| 1.17     |   2019/03/24    |Added 9. withdrawChannel Modified all chapter to add required column.<br>Add4.3 Collection – Inquiry Modified parameter to fit MLhuillier bills payment API interface.|Wayne.Wang|
| 1.16     |   2019/02/18    |Add3.1 Payout – payoutQueue MLhuillier & Palawan Pawnshop going to stop using and the stop date will annoce at future. <br>Add 4.1 Payout – Inquiry  Final the api sepc.<br> Add 4.2Payout – Payout Final the api spec。<br>Add 4.3　Collection – Inquiry Add output parameter<br> Remove 8. withdrawChannel|Wayne.Wang|
| 1.15     |   2019/01/31    |Add3.1 Payout – payoutQueue Remove Bank, Paymaya channel Add new return code<br>Add 7. Return Code Update return code list<br>8. withdrawChannel Update available withdraw channel|Wayne.Wang|
| 1.14     |   2018/12/07    |Add 3.1 Payout – payoutQueue Add input parameter – accountNo, bankNo, bankProvince, bankCity Add output parameter – referenceNo <br> Add 7. Return Code Add new return code <br> Add 8. withdrawChannel|Wayne.Wang|
| 1.13     |   2018/11/28    |Add 3.2 Payout – payoutQueuePayout Add input parameter – action<br>Add 4.2 Payout – Payout Add output parameter – withdrawChannel<br>Add 4.4 Payout – Payout Add input parameter – payChannel<br>Add 4.4 Payout – Payout Update input parameter – 4 : ECPay<br>Add 4.4 Payout – Payout Add input parameter – companyName|Wayne.Wang|
| 1.12     |   2018/09/19    |Add 4.4 Collection – Collect Add input parameter – collectedTime|Wayne.Wang|
| 1.11     |   2018/09/11    |Add 6. Test Tools|Wayne.Wang|
| 1.10     |   2018/09/06    |Add expect return code to each one of chapter.|Wayne.Wang|
| 1.9      |   2018/08/31    |Add 3.1 Payout – payoutQueue Update input parameter – Phone is 10 digits <br>Add 4.1 Payout – Inquiry Update response parameter – Phone is 10 digits|Wayne.Wang|
| 1.8      |   2018/08/22    |Add 3. Payout process (non realtime transaction) Update process flow chat |Wayne.Wang|
| 1.7      |   2018/08/21    |Add 4.4 Collection – Collect Add input parameter – receiptNumber|Wayne.Wang|
| 1.6      |   2018/08/21    |Add 3.3 Payout – cancelPayout Update input parameter – contractNumbers[] |Wayne.Wang|
| 1.5|2018/08/16|Add 4.3 Collection – Inquiry <br>Add 4.4 Collection – Collect  Update input parameter of sample (typo contractNumber)<br> Add 3.1 Payout – payoutQueue Update input parameter – withdrawChannel description|Wayne.Wang|
| 1.4      |   2018/08/10    |Add 3.3 Payout – cancelPayout  Update all input parameter|Wayne.Wang|
| 1.3      |   2018/08/07    |Add 3.2 Payout – payoutQueuePayout Update input parameter – |Wayne.Wang|
| 1.2      |   2018/08/07    |Add 3.2 Payout – payoutQueuePayout Add input parameter – userName & authentication |Wayne.Wang|
| 1.1      |   2018/08/03    |Add 3.1 Payout – payoutQueue Add input parameter – withdrawChannel |Wayne.Wang|
| 1.0      |   2018/06/21    |Add Baseline 1.0|Wayne.Wang|



# (remind)：
#### 1.After verifying the modified file, effective modifications will be made.
#### 2.This cover should be attached to the revised or new release document.

