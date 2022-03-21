import dotenv from "dotenv";
import EthCrypto, { Encrypted } from "eth-crypto";

dotenv.config();

decrypt();

async function decrypt() {
  const encryptedData: Encrypted = JSON.parse(
    process.env.ENCRYPTED_DATA!
  ) as Encrypted;

  const privateKey = process.env.PRIVATE_KEY!;

  const plaintext = await EthCrypto.decryptWithPrivateKey(
    privateKey,
    encryptedData
  );

  console.log(`
  -------------------------------------------------------------------------------------------
  ------------------------------------ Decrypted message ------------------------------------
  -------------------------------------------------------------------------------------------
  
  ${plaintext}
  
  -------------------------------------------------------------------------------------------`);
}
