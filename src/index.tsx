// External dependencies
import client from "./apolla/client"
import App from './App';
import {ApolloProvider} from '@apollo/client'
import {ChakraProvider} from '@chakra-ui/react'
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </ChakraProvider>
    </React.StrictMode>
);

reportWebVitals();
