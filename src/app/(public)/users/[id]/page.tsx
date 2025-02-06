async function fetchUser(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}

export default async function UserPage({ params }: {params: {id: string}}) {
    const user = await fetchUser(Number(params.id));

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
}
