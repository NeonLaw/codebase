interface NeonLawPerson {
  id: string;
  role: string;
}

declare module 'express' {
  interface Request {
    neonLawPerson?: NeonLawPerson;
    user?: any;
  }
}

declare module 'http' {
  interface IncomingMessage {
    neonLawPerson?: NeonLawPerson;
    user?: any;
  }
}
