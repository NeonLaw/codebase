# Neon Diagrams

Run the following code to generate diagrams that are saved to the
`./web/public/images`. The diagrams are saved there so they can be discussed in
web pages handled in our `@neonlaw/web` package.

```bash
poetry install
poetry run python -m neon_diagrams.web
poetry run python -m neon_diagrams.gcp
poetry run python -m neon_diagrams.k8s
poetry run python -m neon_diagrams.kafka
```
