# afridho-encrypt

A simple and secure AES encryption and decryption utility for Node.js applications. This package provides an easy-to-use interface for encrypting and decrypting sensitive information using AES encryption.

## Table of Contents

-   [Installation](#installation)
-   [Setup](#setup)
-   [Usage](#usage)
-   [Methods](#methods)
-   [Security Notes](#security-notes)
-   [Requirements](#requirements)
-   [License](#license)
-   [Author](#author)
-   [Contributing](#contributing)

## Installation

To install the `afridho-encrypt` package, use npm:

```bash
npm install afridho-encrypt
```

## Setup

### Create a `.env` File

Before using the package, create a `.env` file in your project root with the following variables:

```env
ENCRYPT_KEY=your_secret_encryption_key_here
```

You can use this as generate random hash:

```bash
openssl rand -base64 32
```

## Usage

### Basic Example

Here’s a basic example of how to use the `afridho-encrypt` package:

```javascript
import { encrypt, decrypt } from "afridho-encrypt";

// Encrypt a string
const sensitiveData = "My secret password";
const encryptedText = encrypt(sensitiveData);
console.log("Encrypted:", encryptedText);

// Decrypt the string
const decryptedText = decrypt(encryptedText);
console.log("Decrypted:", decryptedText);
```

## Methods

Encrypts a given plain text using AES encryption.

#### Parameters

-   `text` (string): The plain text to encrypt

#### Returns

-   Base64-encoded encrypted string

## Requirements

-   Node.js 16+

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**afridho**  
[Github](https://github.com/afridho)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.
