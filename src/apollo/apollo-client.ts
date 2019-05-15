import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloLink } from "apollo-link"
import { createHttpLink } from "apollo-link-http"
import { AUTH_TOKEN } from "../constants"
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
})

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN)

  if (token != null) {
    operation.setContext({
      headers: {
        authorization: token,
      },
    })
  }

  return forward(operation)
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
  fetch,
})
