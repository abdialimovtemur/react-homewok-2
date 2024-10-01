import React, { useState } from "react";
import Form from "./components/form/form"; 

function App() {
    const [users, setUsers] = useState([]);


    const addUser = (userName) => {
        const newUser = {
            id: Date.now(), 
            name: userName,
        };
        setUsers([...users, newUser]); 
    };

    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers); 
    };


    const editUser = (id) => {
        const newName = prompt("Please enter a new name:"); 
        if (newName) {
            const updatedUsers = users.map((user) =>
                user.id === id ? { ...user, name: newName } : user
            );
            setUsers(updatedUsers); 
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <Form onAdd={addUser} />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => editUser(user.id)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
