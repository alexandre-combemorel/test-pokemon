import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

export default function (props: any) {
    const router = createBrowserRouter([
        { path: "/", element: props.children },
    ])
  return <ApolloProvider client={client}>
        <RouterProvider router={router} />
    </ApolloProvider>;
}
