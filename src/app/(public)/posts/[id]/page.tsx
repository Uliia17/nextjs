async function fetchPost(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function PostPage({params}: {params: {id: string}}) {
    const post = await fetchPost(Number(params.id));

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}
