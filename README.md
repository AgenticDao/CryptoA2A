# CryptoA2A Framework

A standardized protocol framework that combines Google's Agent-to-Agent (A2A) protocol with cryptocurrency verification mechanisms.

## Overview

CryptoA2A defines a standardized protocol flow for agent-to-agent interaction in the cryptocurrency space. It enables secure, verified communication between AI agents and blockchain systems, allowing for seamless integration between different crypto services, wallets, exchanges, and DeFi applications.

## What is Google's A2A Protocol?

The Agent-to-Agent (A2A) protocol, developed by Google, enables AI agents to communicate and collaborate effectively with each other. The protocol provides a standardized way for agents to:

- Exchange information and requests
- Understand each other's capabilities
- Coordinate complex tasks across different domains
- Maintain context over multi-turn interactions
- Execute tasks with proper authorization

For more detailed information about Google's A2A protocol, please refer to the [official A2A repository](https://github.com/google/A2A).

## A2A Server SDKs

This project includes server-side SDKs for implementing A2A protocol in both JavaScript and Python. These SDKs are included as Git submodules in the `sdks` directory:

- **JavaScript SDK**: Located at `sdks/A2AServer-js`
  - [View JavaScript SDK Documentation](https://github.com/AgenticDao/A2AServer-js/blob/master/README.md)

- **Python SDK**: Located at `sdks/A2AServer-python`
  - [View Python SDK Documentation](https://github.com/AgenticDao/A2AServer-python/blob/master/README.md)

## Blockchain Integration

CryptoA2A currently integrates with the Solana blockchain for on-chain verification of agent actions and transactions. This integration ensures:

- Cryptographic proof of operations
- Transaction verification and validation
- Secure wallet interactions
- Smart contract execution validation

Future releases will expand support to multiple blockchains, creating a comprehensive cross-chain verification system.

## Features

- Complete A2A protocol implementation tailored for cryptocurrency use cases
- On-chain verification mechanisms via Solana blockchain
- Wallet integration capabilities
- Transaction handling and verification
- Smart contract interaction
- Secure authentication and encryption
- Extensible plugin architecture for additional blockchains and services

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 