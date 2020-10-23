declare module "process" {
  global {
    interface Process {
      env: ProcessEnv
    }

    interface ProcessEnv {
      GRAPHILE_LICENSE?: string;
      SHOW_GRAPHIQL?: string;
    }
  }
}
