import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
//-----css-----//
import "./styles/index.css";
import "./styles/font.css";

const client = new ApolloClient({
	uri: import.meta.env.VITE_HYGRAPH_URI,
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
