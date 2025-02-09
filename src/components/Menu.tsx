import Link from 'next/link';

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link href="/cars">Cars</Link>
            </li>
            <li>
                <Link href="/carsCreate">Create Car</Link>
            </li>
        </ul>
    );
};
