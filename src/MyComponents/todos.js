import React from 'react'
import TodoItem from './TodoItem'

export default function todos(props) {
    return (
        <>
            <div className="container">
                <h3 >Todos List</h3>
                {props.todos.length== 0 ? "No more Todos to display" :
                props.todos.map((tod) => {
                    
                    return(
                         <TodoItem todo={tod} key={tod.sno} onDelete = {props.onDelete}/>
                    )
                })
                }
                
                
            </div>
        </>
    )
}

