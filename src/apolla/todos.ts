// External dependencies
import {gql} from '@apollo/client'

export const ALL_TODO = gql`
    query AllTodos {
        todos: allTodos {
            id
            title
        }
    }
`

export const ADD_TODO = gql`
    mutation AddTodo($title: String!, $isDone: Boolean!, $isChange: Boolean!, $isImportant: Boolean!) {
        createTodo(title: $title, isDone: $isDone, isChange: $isChange, isImportant: $isImportant) {
            title
            isDone
            isChange
            isImportant
        }
    }
`

export const DONE_TODO = gql`
    mutation UpdateTodo($id: ID!, $isDone: Boolean!) {
        updateTodo(id: $id, isDone: $isDone) {
            id
            isDone
        }
    }
`

export const DELETE_TODO = gql`
    mutation RemoveTodo($id: ID!) {
        removeTodo(id: $id) {
            id
        }
    }
`




