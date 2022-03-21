import dotenv from "dotenv";
import EthCrypto from "eth-crypto";

dotenv.config();

encrypt();

async function encrypt() {
  const publicKey = EthCrypto.publicKeyByPrivateKey(process.env.PRIVATE_KEY!);

  const address = EthCrypto.publicKey.toAddress(publicKey);

  const plaintext = process.env.PLAINTEXT!;

  console.log(`
  -------------------------------------------------------------------------------------------
  -- Encrypting with [${address}]'s public key the message --
  -------------------------------------------------------------------------------------------
  
  ${plaintext}
  
  -------------------------------------------------------------------------------------------`);

  const encryptOutput = await EthCrypto.encryptWithPublicKey(
    publicKey,
    plaintext
  );

  console.log(`
  -------------------------------------------------------------------------------------------
  -------------------------------------- Output ---------------------------------------------
  -------------------------------------------------------------------------------------------
  
  ${JSON.stringify(encryptOutput)}
  
  -------------------------------------------------------------------------------------------`);
}
