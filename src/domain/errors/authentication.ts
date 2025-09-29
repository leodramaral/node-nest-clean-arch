export class FacebookAuthenticationError extends Error {
  constructor() {
    super('Authentication Failed');
    this.name = 'FacebookAuthenticationError';
  }
}
