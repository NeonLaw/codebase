import {
  ConsoleSpanExporter,
  SimpleSpanProcessor
} from '@opentelemetry/tracing';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector';
import {
  GraphQLInstrumentation
} from '@opentelemetry/instrumentation-graphql';
import { NodeTracerProvider } from '@opentelemetry/node';
import { app } from './app';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

const exporter = new CollectorTraceExporter({
  serviceName: `${process.env.NODE_ENV}-api`,
});

const provider = new NodeTracerProvider();

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

registerInstrumentations({
  instrumentations: [
    new GraphQLInstrumentation(),
  ],
  tracerProvider: provider,
});

app.listen(3000);
