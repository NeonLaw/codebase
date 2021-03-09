declare module "process" {
  global {
    interface Process {
      env: ProcessEnv
    }

    interface ProcessEnv {
      AUTH0_CLIENT_ID?: string;
      AUTH0_CLIENT_SECRET?: string;
      AUTH0_CLIENT_TENANT?: string;
      GRAPHILE_LICENSE?: string;
      SHOW_GRAPHIQL?: string;
    }
  }
}
