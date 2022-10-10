// External dependencies
import {useQuery, useMutation} from "@apollo/client";
import {Button, ListItem, OrderedList, Spinner} from "@chakra-ui/react";
import React from "react"

// Local dependencies
import {ALL_TODO, DELETE_TODO, DONE_TODO} from "../../apolla/todos";
import '../../style.css'

const TodoList = () => {

    const {loading, error, data} = useQuery(ALL_TODO)
    const [updateTodo,{error: DoneError}] = useMutation(DONE_TODO)
    const [removeTodo, {error: removeError}] = useMutation(DELETE_TODO,{
        update(cache, {data: { removeTodo }}) {
            cache.modify({
                fields: {
                    allTodo(currentTodos = []) {
                        return currentTodos.filter((item: any)=> item.__ref !== `Todos:${removeTodo.id}`)
                    }
                }
            })
        }
    })


    if (loading) {
        return <Spinner/>
    }

    if (error || DoneError || removeError) {
        return <h2>Error...</h2>
    }

    return (
        <OrderedList>
            {data?.todos?.map((item: any) => (
                <ListItem key={item.id} style={{marginBottom: '7px', display: 'flex'}}><p className={`${item.isDone ? 'active' : ''}`}>{item.title}</p>
                    <Button onClick={()=> removeTodo({
                        variables: {
                            id: item.id
                        }
                    })} style={{marginRight: '15px', marginLeft: '15px'}} type="button" colorScheme="blue">delete</Button>
                    <Button onClick={()=> updateTodo({
                        variables: {
                            id: item.id,
                            isDone: !item.isDone
                        }
                    })} type="button" colorScheme="red">done</Button>
                </ListItem>
            ))}
        </OrderedList>
    );
};

export default TodoList;