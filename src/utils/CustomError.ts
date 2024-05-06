interface ICustomError {
  message: any;
  statusCode?: string;
  type?: string;
}

export class CustomError extends Error {
  public message: any;
  public statusCode?: string;
  public type?: string;

  constructor({ message, statusCode, type }: ICustomError) {
    super();
    this.statusCode = statusCode || '10001';
    this.message = message;
    this.type = type;
  }

  get data() {
    return { statusCode: this.statusCode, message: this.message };
  }
}
