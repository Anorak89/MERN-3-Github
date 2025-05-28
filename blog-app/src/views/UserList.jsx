import User from "../components/User";
import { Link } from "react-router-dom";
const UserList = ({users}) => {
  


  return (
    <div>
      <h2>Users</h2>
      {users.map((u) => (
        <Link to={"/users/" + u.id} key = {u.id}>
        <User user={u} />
        </Link>
      ))} 
    </div>
  );
};

export default UserList;
