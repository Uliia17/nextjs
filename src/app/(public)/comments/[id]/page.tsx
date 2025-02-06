async function fetchComment(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    return res.json();
}

export default async function CommentPage({params}: {params: {id: string}}) {
    const comment = await fetchComment(Number(params.id));

    return (
        <div>
            <h1>{comment.name}</h1>
            <p>{comment.email}</p>
        </div>
    );
}
