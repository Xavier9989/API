# 10.Payment pipeline (channel code or code value)

| code                       |    Is it real-time    | interface    |channel| describe|
| :-------------------------: | :-----------: |:-----:| --------------------------------| :--------------------:  |
|1|5.1 Real-Time|5.1 PayoutInquery <br> 5.2 PayoutIPayout|MLhuillie | Remittance shop|  
|5|3.1 Non-Real Time|3.1 PayoutOueue <br> 3.2 PayoutQueuePayou|Bank|bank|  
|6|3.1 Non-Real Time|3.1 PayoutOueue <br> 3.2 PayoutQueuePayout|GCash|Wallet|  
|8|3.1 Non-Real Time|3.1 PayoutOueue <br> 3.2 PayoutQueuePayout|Paymaya|Wallet|  
|9|5.1 Real-Time|5.1 PayoutInquery <br> 5.2 PayoutIPayout|RD Pawnshop | Remittance shop|  
|2|4.1 Real-Time|4.1 payoutQueueV2 <br> 3.2 PayoutQueuePayout|Cebuana| Remittance shop|  
|15|3.1 Non-Real Time|3.1 PayoutOueue <br> 3.2 PayoutQueuePayout|GrabPay|Wallet|

