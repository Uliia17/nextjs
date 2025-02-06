export default function PostLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h2>Post Details</h2>
            {children}
        </div>
    );
}
