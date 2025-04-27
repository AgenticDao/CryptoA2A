import { v4 as uuidv4 } from 'uuid';

/**
 * Helper utility functions for the CryptoA2A framework
 */
export class Helpers {
  /**
   * Generate a random UUID
   * @returns UUID string
   */
  static generateId(): string {
    return uuidv4();
  }

  /**
   * Format an amount with the specified number of decimals
   * @param amount - Amount to format
   * @param decimals - Number of decimals to use
   * @returns Formatted amount string
   */
  static formatAmount(amount: string | number, decimals: number = 18): string {
    const value = typeof amount === 'string' ? parseFloat(amount) : amount;
    return value.toFixed(decimals);
  }

  /**
   * Convert wei to ether
   * @param wei - Amount in wei
   * @returns Amount in ether
   */
  static weiToEther(wei: string | bigint): string {
    const value = typeof wei === 'string' ? BigInt(wei) : wei;
    return (Number(value) / 1e18).toString();
  }

  /**
   * Convert ether to wei
   * @param ether - Amount in ether
   * @returns Amount in wei
   */
  static etherToWei(ether: string | number): string {
    const value = typeof ether === 'string' ? parseFloat(ether) : ether;
    return (value * 1e18).toString();
  }

  /**
   * Truncate a string (e.g., to display addresses)
   * @param str - String to truncate
   * @param startChars - Number of characters to keep at the start
   * @param endChars - Number of characters to keep at the end
   * @returns Truncated string
   */
  static truncateString(str: string, startChars: number = 6, endChars: number = 4): string {
    if (str.length <= startChars + endChars) {
      return str;
    }
    
    return `${str.substring(0, startChars)}...${str.substring(str.length - endChars)}`;
  }

  /**
   * Wait for a specified time
   * @param ms - Milliseconds to wait
   * @returns Promise that resolves after the specified time
   */
  static sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if a string is a valid JSON
   * @param str - String to check
   * @returns True if valid JSON, false otherwise
   */
  static isValidJson(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
} 