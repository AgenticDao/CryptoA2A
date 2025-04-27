import { WalletProvider, EthereumWalletProvider } from './provider';

/**
 * Factory for creating wallet providers
 */
export class WalletConnector {
  /**
   * Create a wallet provider based on the type
   * @param type - Type of wallet provider to create
   * @param config - Provider configuration
   * @returns WalletProvider instance
   */
  static createProvider(type: string, config: any = {}): WalletProvider {
    switch (type.toLowerCase()) {
      case 'ethereum':
      case 'metamask':
        return new EthereumWalletProvider(config);
      default:
        throw new Error(`Unsupported wallet provider type: ${type}`);
    }
  }

  /**
   * Connect to a wallet provider
   * @param provider - Wallet provider to connect to
   * @returns Connection status
   */
  static async connect(provider: WalletProvider): Promise<boolean> {
    return await provider.connect();
  }
  
  /**
   * Get address from a wallet provider
   * @param provider - Wallet provider
   * @returns Wallet address
   */
  static async getAddress(provider: WalletProvider): Promise<string> {
    return await provider.getAddress();
  }
  
  /**
   * Sign a message using the wallet provider
   * @param provider - Wallet provider
   * @param message - Message to sign
   * @returns Signature
   */
  static async signMessage(provider: WalletProvider, message: string): Promise<string> {
    return await provider.signMessage(message);
  }
} 