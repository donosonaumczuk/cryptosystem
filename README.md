# cryptosystem

A project that uses [eth-crypto](https://www.npmjs.com/package/eth-crypto) to encrypt and decrypt messages.

# Setup

```
npm ci
```

```
npm install -g typescript
```

```
npm install -g ts-node
```

# Encrypt

Set your private key and plaintext at `.env` file, for example:

```
PRIVATE_KEY="0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07"
PLAINTEXT="I want to encrypt this message"
```

Then run:

```
ts-node src/encrypt.ts
```

# Decrypt

Set your private key and encrypted data at `.env` file, for example:

```
PRIVATE_KEY="0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07"
ENCRYPTED_DATA='{"iv":"b0361c6cf17aa2533bc39aaa8a374f0d","ephemPublicKey":"048748f20f56b702ef0c17fd5165d88bfdf579382ae5779adf4dd3c61c1fe0f510d5af53b8c12a390c4f70c04ef3d77fb8e6fbd9e657fbdc0d5373a2f67cc8f801","ciphertext":"77d94bacc56a587b9c76529f35f5a73546ab7a4a08e0b612a1c3ab6dffa9118d","mac":"4d2d8d731ebe5ed2a5d29c9cb807688b4efe1bc2a759d771aa5d62ff3563831f"}'
```

Then run:

```
ts-node src/decrypt.ts
```
