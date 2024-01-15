```java
function encrypt($data, $key) {
	&ensp;&ensp;&ensp;&ensp; $key1=substr(openssl_digest
	(openssl_digest($key,'sha1',true),'sha1',true),0,16);
	&ensp;&ensp;&ensp;&ensp;$data=openssl_encrypt($data, 'aes-128-ecb', 
	$key1, OPENSSL_RAW_DATA);
	&ensp;&ensp;&ensp;&ensp;return base64_encode($data);
}
function decrypt($data, $key) {
	&ensp;&ensp;&ensp;&ensp;$data=base64_decode($data);
	&ensp;&ensp;&ensp;&ensp;$key1=substr(openssl_digest
	(openssl_digest($key,'sha1',true),'sha1',true),0,16);
	&ensp;&ensp;&ensp;&ensp;$data=openssl_decrypt($data,
	'aes-128-ecb', $key1, OPENSSL_RAW_DATA);
	&ensp;&ensp;&ensp;&ensp;return data;
}
```