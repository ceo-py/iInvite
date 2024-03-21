import { getAllUsers } from "@/db/db";

export default function UsersPage({ users }) {
  return (
    <div>
      <h1>All Users</h1>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.username}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

async function getStaticProps() {
  const users = await getAllUsers(); // Fetch all users from Prisma
  return {
    props: {
      users,
    },
  };
}
