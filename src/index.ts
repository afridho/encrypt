import * as CryptoJS from "crypto-js";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure ENCRYPT_KEY is defined
const ENCRYPT_KEY = process.env.ENCRYPT_KEY;

if (!ENCRYPT_KEY) {
    throw new Error("ENCRYPT_KEY is not defined in the environment variables");
}

/**
 * Encrypts a given text using AES encryption.
 *
 * @param text - The plain text to encrypt.
 * @returns The encrypted text as a base64-encoded string.
 */
export const encrypt = (text: string): string => {
    if (!text) {
        throw new Error("Text to encrypt cannot be empty");
    }
    return CryptoJS.AES.encrypt(text, ENCRYPT_KEY).toString();
};

/**
 * Decrypts a given AES-encrypted text back to its original plain text.
 *
 * @param text - The encrypted text to decrypt.
 * @returns The decrypted plain text. If decryption fails, returns an empty string.
 */
export const decrypt = (text: string): string => {
    if (!text) {
        throw new Error("Encrypted text cannot be empty");
    }

    try {
        const bytes = CryptoJS.AES.decrypt(text, ENCRYPT_KEY);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
            throw new Error("Decryption failed");
        }

        return decryptedText;
    } catch (error) {
        throw new Error(
            "Decryption failed: " +
                (error instanceof Error ? error.message : "Unknown error")
        );
    }
};
