export abstract class AbstractAppError extends Error {

  private readonly errorName = this.constructor.name;


  toString(): string {
    const message = this.message.length ? `: ${this.message}` : '';
    return `${this.errorName}${message}`;
  }
}
