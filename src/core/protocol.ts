import { A2AMessage, MessageType } from './types';

/**
 * Handles the A2A protocol specifications and message format validation
 */
export class A2AProtocol {
  /**
   * Protocol version
   */
  static readonly VERSION = '1.0.0';

  /**
   * Validates if a message follows the A2A protocol
   * @param message - Message to validate
   * @returns True if the message is valid, false otherwise
   */
  static validateMessage(message: any): boolean {
    // Check if the message has all the required fields
    if (!message ||
        typeof message !== 'object' ||
        !message.id ||
        !message.type ||
        !message.sender ||
        !message.recipient ||
        !message.timestamp ||
        message.payload === undefined) {
      return false;
    }

    // Check if the message type is valid
    const validTypes = Object.values(MessageType);
    if (!validTypes.includes(message.type)) {
      return false;
    }

    // Check if the timestamp is valid (not in the future)
    if (message.timestamp > Date.now() + 5000) { // Allow for 5 seconds of clock drift
      return false;
    }

    return true;
  }

  /**
   * Formats a response message
   * @param originalMessage - The message to respond to
   * @param payload - Response payload
   * @returns Formatted response message
   */
  static createResponseMessage(originalMessage: A2AMessage, payload: any): A2AMessage {
    return {
      id: `response-${originalMessage.id}`,
      type: MessageType.RESPONSE,
      sender: originalMessage.recipient,
      recipient: originalMessage.sender,
      timestamp: Date.now(),
      payload
    };
  }

  /**
   * Formats an error message
   * @param originalMessage - The message that caused the error
   * @param error - Error details
   * @returns Formatted error message
   */
  static createErrorMessage(originalMessage: A2AMessage, error: string): A2AMessage {
    return {
      id: `error-${originalMessage.id}`,
      type: MessageType.ERROR,
      sender: originalMessage.recipient,
      recipient: originalMessage.sender,
      timestamp: Date.now(),
      payload: { error }
    };
  }
} 