import React, { Fragment, useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </Fragment>
  );
}

export default App;
