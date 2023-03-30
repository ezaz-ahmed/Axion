import { Link } from 'react-router-dom';

export const UserList = () => {
  return (
    <>
      <li>
        <Link to="/user/1">User 1</Link>
      </li>

      <li>
        <Link to="/user/2">User 2</Link>
      </li>

      <li>
        <Link to="/user/3">User 3</Link>
      </li>

      <li>
        <Link to="/user/4">User 4</Link>
      </li>

      <li>
        <Link to="/user/5">User 5</Link>
      </li>
    </>
  );
};
