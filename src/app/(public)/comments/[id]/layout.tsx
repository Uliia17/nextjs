export default function CommentLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h2>Comment Details</h2>
            {children}
        </div>
    );
}
