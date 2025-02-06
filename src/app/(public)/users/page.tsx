import Link from "next/link";

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export default async function UsersPage() {
    const users = await fetchUsers();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: {id: number; name: string}) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
