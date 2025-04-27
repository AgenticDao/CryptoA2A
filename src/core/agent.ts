import { AgentConfig, A2AMessage } from './types';

/**
 * Agent class for handling A2A communications
 */
export class Agent {
  private readonly config: AgentConfig;
  private messageHandler?: (message: A2AMessage) => Promise<void>;

  /**
   * Create a new agent
   * @param config - Agent configuration
   */
  constructor(config: AgentConfig) {
    this.config = {
      ...config,
      timeout: config.timeout || 30000,
    };
  }

  /**
   * Get the agent ID
   */
  get id(): string {
    return this.config.agentId;
  }

  /**
   * Register a message handler
   * @param handler - Function to handle incoming messages
   */
  registerMessageHandler(handler: (message: A2AMessage) => Promise<void>): void {
    this.messageHandler = handler;
  }

  /**
   * Process an incoming message
   * @param message - The received message
   */
  async processMessage(message: A2AMessage): Promise<void> {
    if (message.recipient !== this.id) {
      // Message not intended for this agent
      return;
    }

    if (this.messageHandler) {
      await this.messageHandler(message);
    } else {
      console.warn('No message handler registered');
    }
  }

  /**
   * Send a message to another agent
   * @param message - Message to send
   */
  async sendMessage(message: A2AMessage): Promise<void> {
    // In a real implementation, this would send the message to the recipient
    console.log(`Sending message to ${message.recipient}: ${message.type}`);
  }
} 