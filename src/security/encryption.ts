import * as jose from 'jose';

/**
 * Handles encryption and decryption for secure communications
 */
export class Encryption {
  /**
   * Encrypt a payload
   * @param payload - Data to encrypt
   * @param key - Encryption key
   * @returns Encrypted data
   */
  static async encrypt(payload: any, key: string): Promise<string> {
    const encodedKey = new TextEncoder().encode(key);
    
    // In a real implementation, this would use strong encryption
    // This is just a placeholder using jose library
    return await new jose.CompactEncrypt(
      new TextEncoder().encode(JSON.stringify(payload))
    )
      .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
      .encrypt(encodedKey);
  }

  /**
   * Decrypt an encrypted payload
   * @param encryptedData - Data to decrypt
   * @param key - Decryption key
   * @returns Decrypted payload
   */
  static async decrypt(encryptedData: string, key: string): Promise<any> {
    try {
      const encodedKey = new TextEncoder().encode(key);
      
      // In a real implementation, this would use the same strong encryption as encrypt
      // This is just a placeholder using jose library
      const { plaintext } = await jose.compactDecrypt(encryptedData, encodedKey);
      
      return JSON.parse(new TextDecoder().decode(plaintext));
    } catch (error) {
      throw new Error('Failed to decrypt: Invalid data or key');
    }
  }

  /**
   * Generate a new encryption key
   * @returns Encryption key
   */
  static generateKey(): string {
    // In a real implementation, this would use a cryptographically secure random generator
    // This is just a placeholder
    return Array.from(
      new Uint8Array(32).map(() => Math.floor(Math.random() * 256))
    ).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Hash a value
   * @param value - Value to hash
   * @returns Hashed value
   */
  static async hash(value: string): Promise<string> {
    // In a real implementation, this would use a proper hashing algorithm
    // This is just a placeholder
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
} 