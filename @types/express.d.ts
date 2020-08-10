interface NeonLawPerson {
  id: string;
  role: string;
}

declare module 'express' {
  interface Request {
    neonLawPerson?: NeonLawPerson;
  }
}

declare module 'http' {
  interface IncomingMessage {
    neonLawPerson?: NeonLawPerson;
  }
}
