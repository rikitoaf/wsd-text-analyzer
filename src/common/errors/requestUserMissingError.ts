export class RequestUserMissingError extends Error {
  constructor(message: string = 'User is missing in the request') {
    super(message);
    this.name = 'UserMissingError';
  }
}
