import * as jose from 'jose';

/**
 * Handles authentication and authorization for agents
 */
export class Auth {
  private static readonly TOKEN_EXPIRY = '1h';

  /**
   * Generate a JWT token for agent authentication
   * @param agentId - ID of the agent
   * @param secret - Secret key for signing
   * @param claims - Additional claims to include
   * @returns JWT token
   */
  static async generateToken(
    agentId: string,
    secret: string,
    claims: Record<string, any> = {}
  ): Promise<string> {
    const key = new TextEncoder().encode(secret);
    
    return await new jose.SignJWT({
      ...claims,
      sub: agentId,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(Auth.TOKEN_EXPIRY)
      .sign(key);
  }

  /**
   * Verify a JWT token
   * @param token - JWT token to verify
   * @param secret - Secret key for verification
   * @returns Payload if valid, null otherwise
   */
  static async verifyToken(token: string, secret: string): Promise<any> {
    try {
      const key = new TextEncoder().encode(secret);
      const { payload } = await jose.jwtVerify(token, key);
      return payload;
    } catch (error) {
      return null;
    }
  }

  /**
   * Create a challenge for authentication
   * @returns Challenge string
   */
  static createChallenge(): string {
    return `challenge-${Date.now()}-${Math.random().toString(16).substring(2)}`;
  }

  /**
   * Verify a signed challenge
   * @param challenge - The original challenge
   * @param signature - The signature to verify
   * @param publicKey - The public key to verify with
   * @returns True if valid, false otherwise
   */
  static async verifyChallenge(
    challenge: string,
    signature: string,
    publicKey: string
  ): Promise<boolean> {
    // In a real implementation, this would verify the signature cryptographically
    // This is just a placeholder
    return signature.length > 10 && signature.startsWith('0x');
  }
} 