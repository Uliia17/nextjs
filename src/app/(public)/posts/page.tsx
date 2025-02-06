import Link from "next/link";

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

export default async function PostsPage() {
    const posts = await fetchPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: {id: number; title: string}) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
