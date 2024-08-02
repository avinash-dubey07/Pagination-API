const PostsData = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => {
        const { userId, id, title } = curUser;

        return (
          <tr key={id} className={index % 2 ? "even-row" : "odd-row"}>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{title}</td>
          </tr>
        );
      })}
    </>
  );
};
export default PostsData;
