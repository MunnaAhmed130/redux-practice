import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="" style={{ textAlign: "left" }}>
      <h2>List of Users</h2>
      {users.loading && <h2>loading ..</h2>}
      {!users.loading && users.users && (
        <ul>
          {users.users.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
