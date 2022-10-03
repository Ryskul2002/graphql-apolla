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
    mutation AddTodo($title: String!, $task_id: ID!, $isDone: Boolean!, $isChange: Boolean!, $isImportant: Boolean!) {
        createTodo(title: $title,id: $task_id, isDone: $isDone, isChange: $isChange, isImportant: $isImportant) {
            id
            title
            isDone
            isChange
            isImportant
        }
    }
`




