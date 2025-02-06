export default function UserLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h2>User Details</h2>
            {children}
        </div>
    );
}
