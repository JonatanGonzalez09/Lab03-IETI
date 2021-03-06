import React from 'react';
import {Todo} from './Todo'
import { Box } from '@material-ui/core';

export class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} description={todo.description} name={todo.name} email={todo.email} status={todo.status}  dueDate={todo.dueDate}/>
            );
        });
        return (
            <Box component="span" display="block" p={1} m={1}  >
                {todoList}
            </Box>
        );


    }

}