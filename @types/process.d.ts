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
      NEW_RELIC_LICENSE_KEY?: string;
      NEW_RELIC_NO_CONFIG_FILE?: 'true' | 'false' | undefined;
      SHOW_GRAPHIQL?: string;
    }
  }
}
