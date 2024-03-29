import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = ({ userData, fetchUsers }) => {
  //   console.log(userData);
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData.users.map((user) => (
          <p key={user.name}>{user.name}</p>
        ))}
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       {userData.users.map((user) => (
  //         <p key={user.name}>{user.name}</p>
  //       ))}
  //     </div>
  //   );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
