interface NeonLawPerson {
  id: string;
  role: string;
}

declare module 'express' {
  interface Request {
    authenticatedPerson?: NeonLawPerson;
    user?: any;
  }
}

declare module 'http' {
  interface IncomingMessage {
    authenticatedPerson?: NeonLawPerson;
    user?: any;
  }
}
