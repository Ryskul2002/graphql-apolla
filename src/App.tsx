// External dependencies
import {Container} from '@chakra-ui/react'
import React from 'react';

// Local dependencies
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import './style.css'

function App() {

    return (
        <div className="App">
            <Container maxW="700px">
                <AddTodo/>
                <TodoList/>
            </Container>
        </div>
    );
}

export default App;
