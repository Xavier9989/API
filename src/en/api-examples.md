# Status code and HTTP code


### The status codes listed below represent the status of API requests during the operation.


|       Status Enumeration             | Description|
|:-------------------------:|:-----------|
|requires_payment_method|Payment method or payment method data is invalid|
|requires_confirmation|Create payment supports two methods: "directly create transaction" and "invoice first and confirm transaction". This status is the transaction status when "invoice first and confirm transaction" is used. A payment confirmation call is required to confirm the execution of the transaction.|
|requires_action|This status indicates that the partner has created a payment transaction and needs to take the next action. <br>For example, the client redirects to the corresponding URL.|
|processing|Transaction processing in progress.<br> (This state depends on the system processing time and is usually brief and not easy to occur)|
|canceled| Transaction canceled|
|succeeded| Transaction successful|


### The HTTP code listed below indicates whether the API request was successful.



|Code| Message|Description |
|:-------------------------:|:-----------:|----------------|
|200|OK|Normal state|
|400|Bad Request|The request is unacceptable, usually due to invalid or missing parameters.|
|401|Unauthorized|No valid client ID, client secret, partner ID, or API key provided|
|403|Forbidden|Prohibit access|
|500|Server Errors|The server encountered an unexpected situation and was unable to complete the request.|
|502|Bad Gateway|Unable to obtain valid response from the original server|
|503|Service Unavailable|Biller Partner Downtime|