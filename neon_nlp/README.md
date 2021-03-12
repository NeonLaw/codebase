# Neon NLP

## Consumption

A graphql server that exposes one `Query` to get recommendations about your
text.

```graphql
query {
  text(
    # The text, in mdx format, that you want to analyze. The text must be
    # validly formatted mdx according to our remark guidelines.
    mdx: String!
    # An optional User ID, if included the recommendations will also include
    # tokens scoped to this user.
    userId: UUID
  ) {
    nodes {
      # When the text was processed
      processedAt
      # Recommendations to make based off the input.
      recommendations {
        # What line the recommendation begins on
        beginningLineNumber
        # What character the recommendation begins on
        beginningCharacterNumber
        # What line the recommendation ends on
        endingLineNumber
        # What character the recommendation ends on
        endingCharacterNumber
        # The text of the recommendation
        body
      }
    }
  }
}
```

## Implemtation

* https://www.aclweb.org/anthology/2020.bea-1.16.pdf
