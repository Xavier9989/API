# Data Encryption
- ## 1.Data encryption instructions ##
    - Before POST data the JSON string must be encrypted. Sample steps are as follows:
- (1) Json string/Clear text format before encryption：postData

<font color=red>
{<br>
  &ensp;&ensp;&ensp;&ensp;"userName"&ensp;:&ensp;"services@skybridge.com",<br>
  &ensp;&ensp;&ensp;&ensp;"action"&ensp;:&ensp;"payoutInruiry",<br>
  &ensp;&ensp;&ensp;&ensp;"authentication"&ensp;:&ensp;"E7735A85-D825-4832-A9F3-4B00CE038BB4",<br>
  &ensp;&ensp;&ensp;&ensp;"controlNumber"&ensp;:&ensp;"SKY99000000001"<br>
  }
</font>


- (2)clsCryptAES.Encrypt(postDatea,passwordKey)/Encrypted ciphertext format=>
<font color=red>
mFn2rMpky5Rj+pQILkJ0VpLfdBsz2WQnXcYjCDPhKUomqTZGru2fVoP6PfpspIwjt7B0lWkl30wdlDlMGuHiyDwtpPBzVF3bnR9Nuy020<br>
DpVfGQqBYMvcDb6T4wRWbhu4fytl7itmYhAG2nQceKARB67ohoKYgiBdyFudSMkMg1wga0TM+5uepe8i8kcS1QTpXLkF8xlSjRxlMng==
</font>

- (3)Send and receive return information through the HTTP protocol

- (4)Receive encrypted message content=>
<font color=red>
SFA6Iwgv35ruBIkFglcZdrT5dofQN2dDavP9qAX3Pu82Mlsj36kd9RikBOS<br>+3BdiqT0sniupvgcFWMTi3FmxCM0nvgOZqCU99tBar6WtuTyQfATska9IhAtX4WkJscaIbX1eTiiqB7KdywBQ==
</font>

- (5)clsCryptAES.Decrypt(responseData,passwordKey)/Decrypt and restore encrypted content=>For example,
<font color=red>
"responseTime":"2018-06-18 17:52:10.521",<br>
"responseCode":"1000",<br>
"responseDescription":"Success"
</font>

- ## 2.Encryption Program Description ##
  - We provide encryption tools for different development platforms as follows
  
## Java

```java

package meaglink.com.util;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

/**
 *       加解密工具类
 * @author zy
 *
 */
public class AESUtil
{
	private static final String KEY_ALGORITHM = "AES";
	private static final String DEFAULT_CIPHER_ALGORITHM = "AES/ECB/PKCS5Padding";
	public static String encrypt(String content, String passwordKey)
	{
		try
		{
			Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);

			byte[] byteContent = content.getBytes("utf-8");
			cipher.init(Cipher.ENCRYPT_MODE, getSecretKey(passwordKey));
			byte[] result = cipher.doFinal(byteContent);

			return Base64.encodeBase64String(result);
		}
		catch (Exception ex)
		{
			ex.printStackTrace();
		}
		return null;
	}


	public static String decrypt(String content, String passwordKey)
	{
		try
		{
			Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);

			cipher.init(Cipher.DECRYPT_MODE, getSecretKey(passwordKey));

			byte[] result = cipher.doFinal(Base64.decodeBase64(content));

			return new String(result, "utf-8");
		}
		catch (Exception ex)
		{
			ex.printStackTrace();
		}
		return null;
	}

	private static SecretKeySpec getSecretKey(final String passwordKey)
	{
		KeyGenerator kg = null;
		try
		{
			kg = KeyGenerator.getInstance(KEY_ALGORITHM);
			SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
			random.setSeed(passwordKey.getBytes());
			kg.init(128, random);
			SecretKey secretKey = kg.generateKey();
			return new SecretKeySpec(secretKey.getEncoded(), KEY_ALGORITHM);
		}
		catch (NoSuchAlgorithmException ex)
		{
			ex.printStackTrace();
		}
		return null;
	}
}

```

### PHP
## AES.php
```PHP
<?php 
class Aes {
    //PKCS5Padding 补码方式
    private function _pkcs5Pad($text, $blockSize) {
        $pad = $blockSize - (strlen($text) % $blockSize);
        return $text . str_repeat(chr($pad), $pad);
    }
    
    private function _pkcs5Unpad($text) {
        $end = substr($text, -1);
        $last = ord($end);
        $len = strlen($text) - $last;
        if(substr($text, $len) == str_repeat($end, $last)) {
            return substr($text, 0, $len);
        }
        return false;
    }
    
    //加密
    public function encrypt($encrypt, $key) {
        $blockSize = mcrypt_get_block_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
        $paddedData = $this->_pkcs5Pad($encrypt, $blockSize);
        $ivSize = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
        $iv = mcrypt_create_iv($ivSize, MCRYPT_RAND);
        $key2 = substr(openssl_digest(openssl_digest($key, 'sha1', true), 
        'sha1', true),0,16);
        $encrypted = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key2, $paddedData, 
        MCRYPT_MODE_ECB, $iv);
        return base64_encode($encrypted);
    }
    //解密
    public function decrypt($decrypt, $key) {
        $decoded = base64_decode($decrypt);
        $blockSize = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
        $iv = mcrypt_create_iv($blockSize, MCRYPT_RAND);
        $key2 = substr(openssl_digest(openssl_digest($key, 'sha1', true), 
        'sha1', true), 0, 16);
        $decrypted = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key2, $decoded, 
        MCRYPT_MODE_ECB, $iv);
        return $this->_pkcs5Unpad($decrypted);
    }
}
```

## AESUtil.PHP

```PHP
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

