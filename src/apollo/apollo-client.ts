import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "apollo-boost";
import { AUTH_TOKEN } from "../constants";

const httpLink = new HttpLink({ uri: "https://tq-template-server-sample.herokuapp.com/graphql" });

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem(AUTH_TOKEN);

  if(token != null){
    operation.setContext({

      headers: {
        authorization: token
      }
    });
  }

  return forward(operation);
});


export const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});
