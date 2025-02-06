import Link from "next/link";

async function fetchComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    return res.json();
}

export default async function CommentsPage() {
    const comments = await fetchComments();

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment: {id: number; name: string}) => (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
