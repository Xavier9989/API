```java
function encrypt($data, $key) {
	$key1 = substr(openssl_digest(openssl_digest($key,'sha1',true),'sha1',true),0,16);
	$data =  openssl_encrypt($data, 'aes-128-ecb', $key1, OPENSSL_RAW_DATA);
	return base64_encode($data);
}
function decrypt($data, $key) {
	$data = base64_decode($data);
	$key1 = substr(openssl_digest(openssl_digest($key,'sha1',true),'sha1',true),0,16);
	$data =  openssl_decrypt($data, 'aes-128-ecb', $key1, OPENSSL_RAW_DATA);
	return data;
}
```