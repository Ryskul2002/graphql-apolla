import React from 'react';
import {Button, ListItem, OrderedList, Spinner} from "@chakra-ui/react";
import {useQuery} from "@apollo/client";
import {ALL_TODO} from "../../apolla/todos";

const TodoList = () => {

    const {loading, error, data} = useQuery(ALL_TODO)

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <h2>Error...</h2>
    }

    return (
        <OrderedList>
            {data?.todos?.map((item: any) => (
                <ListItem key={item.id} style={{marginBottom: '7px'}}>{item.title}
                    <Button type="button" colorScheme="blue">delete</Button>
                </ListItem>
            ))}
        </OrderedList>
    );
};

export default TodoList;