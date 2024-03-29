import React from 'react';

const User = ({ user, onRemove }) => {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
};
export default UserList;
