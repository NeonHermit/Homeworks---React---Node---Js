import React from 'react';

export class Todos extends React.Component{
    
    render(){
        return(
            <div id="todos">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todoList.map((t,i) =>{
                            return(
                                <tr key={t.id}>
                                    <td>
                                        {t.todo}
                                    </td>
                                    <td>
                                        <button onClick={() => {this.props.delTodo(t.id)}}>
                                            Brisi
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}