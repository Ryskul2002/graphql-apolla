import React, {useState} from 'react';
import {Button, Input} from "@chakra-ui/react";
import {useMutation} from "@apollo/client";
import {ADD_TODO, ALL_TODO} from "../../apolla/todos";

const AddTodo = () => {

    const [createTodo, {error, data}] = useMutation(ADD_TODO, {
        update(cache, {data: {createTodo}}) {
            const {todos}: any = cache.readQuery({query: ALL_TODO})

            cache.writeQuery({
                query: ALL_TODO,
                data: {
                    todos: [createTodo, ...todos]
                }
            })
        }
    })
    const [isInput, setInput] = useState<string>('')

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handlerAddTask = () => {
        if (isInput.trim().length) {
            createTodo({
                variables: {
                    id: Math.round(Math.random() * 1000),
                    title: isInput,
                    isDone: false,
                    isChange: false,
                    isImportant: false
                }
            })
        }
    }

    const onKeyPressAdd = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            return handlerAddTask()
        }
    }

    if (error) {
        return <h2>Error...</h2>
    }

    return (
        <div style={{display: 'flex', marginBottom: '25px'}}>
            <Input
                value={isInput}
                onChange={onChangeEvent}
                onKeyPress={onKeyPressAdd}
                placeholder='Basic usage'/>
            <Button onClick={handlerAddTask} type="button">add todo</Button>
        </div>
    );
};

export default AddTodo;