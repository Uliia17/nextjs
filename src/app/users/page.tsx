// const HelloPage = () => {
//     return (
//         <div>
//             Hello page
//         </div>
//     );
// };
//
// export default HelloPage;

export async function fetchUsers() {
    const response = await fetch('http://localhost:3000/users/api');
    const users = await response.json();
    return users;
}


const UsersPage = async () => {
    const users = await fetchUsers();

    if (!Array.isArray(users)) {
        return <div>Error: users is not an array</div>;
    }

    return (
        <div>
            {users.map((user: any) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UsersPage;




