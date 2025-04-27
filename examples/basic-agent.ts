import { CryptoA2AClient } from '../src';
import { Helpers } from '../src/utils/helpers';

/**
 * Example of using the CryptoA2A framework
 */
async function runExample() {
  console.log('Starting CryptoA2A example...');

  // Create a client for agent 1
  const agent1 = new CryptoA2AClient({
    agentId: 'agent-1',
    walletProvider: 'ethereum',
    chain: 'ethereum'
  });

  // Create a client for agent 2
  const agent2 = new CryptoA2AClient({
    agentId: 'agent-2',
    walletProvider: 'ethereum',
    chain: 'ethereum'
  });

  try {
    // Connect agents
    console.log('Connecting agents...');
    await agent1.connect('agent-2');
    
    // Create a transaction
    console.log('Creating transaction...');
    const transaction = await agent1.createTransaction({
      to: '0x1234567890123456789012345678901234567890',
      value: '0.1',
      data: '0x'
    });
    
    console.log('Transaction created:', Helpers.truncateString(JSON.stringify(transaction)));
    
    // Send the transaction
    console.log('Sending transaction...');
    const receipt = await agent1.sendTransaction(transaction);
    
    console.log('Transaction sent:', receipt);
    console.log('Transaction hash:', receipt.hash);
    
    // Wait a bit
    console.log('Waiting for confirmation...');
    await Helpers.sleep(2000);
    
    console.log('Example completed successfully');
  } catch (error) {
    console.error('Error running example:', error);
  }
}

// Run the example
runExample().catch(console.error); 