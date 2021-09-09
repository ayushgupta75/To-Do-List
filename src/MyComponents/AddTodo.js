import React, {useState} from 'react';

export default function AddTodo({addTodo}   ) {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const submit =(e) =>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("Not defined");
        }else{
        addTodo(Title,Desc);
        setTitle("")
        setDesc("")
        }

    }
    return (
        <div className = "container my-3">
            <h3 className = "my-3">Add a todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="htmlForm-label">Title</label>
                <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} className="htmlForm-control" id="exampleInputEmail1" aria-describedby="Title"/>
  </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="htmlForm-label">Todo description</label>
                    <input type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)} className="htmlForm-control" id="desc"/>
  </div>
                        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form></div>
                    )
}
