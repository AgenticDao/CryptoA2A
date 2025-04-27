/**
 * Core type definitions for the CryptoA2A framework
 */

// Agent configuration
export interface AgentConfig {
  agentId: string;
  walletProvider?: string;
  chain?: string;
  endpoint?: string;
  timeout?: number;
}

// A2A Message format
export interface A2AMessage {
  id: string;
  type: MessageType;
  sender: string;
  recipient: string;
  timestamp: number;
  payload: any;
  signature?: string;
}

// Message types
export enum MessageType {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  TRANSACTION = 'transaction',
  QUERY = 'query',
  RESPONSE = 'response',
  ERROR = 'error'
}

// Transaction request
export interface TransactionRequest {
  to: string;
  value?: string;
  data?: string;
  gasLimit?: string;
  gasPrice?: string;
  nonce?: number;
}

// Transaction response
export interface TransactionResponse {
  hash: string;
  from: string;
  to: string;
  value: string;
  status: TransactionStatus;
  blockNumber?: number;
  timestamp?: number;
}

// Transaction status
export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed'
}

// Connection options
export interface ConnectionOptions {
  timeout?: number;
  authMethod?: string;
  metadata?: Record<string, any>;
} 