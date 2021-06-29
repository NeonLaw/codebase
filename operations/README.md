# Neon Operations

This gem is a thin wrapper around Dry-RB libraries to standardize our use
testable, incremental functional programming written in Ruby.

## API

This gem only exposes two classes, `Operation` and `GCPFunctionsManager`.

### `Operation`

This is the base class from which all Dry-RB Operations (Monads) should inherit
from. We mandate that:

* all operations contain a schema_contract from the `NeonSchemas` gem
* all operations contain one class method `self.call` with one param, `input`.
  This `input` should be a hash that can be validated against the passed in
  schema_contract
* the method `validate_input` **always** be the first function applied in the
  chain of functions within an operation.

### `GCPFunctionsManager`

This class takes GCP Cloud Functions events and invokes the `call` method on an
operation. This class is specific to Google Cloud Platform.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.
