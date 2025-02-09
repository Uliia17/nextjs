import {FC, ReactNode} from 'react';
import {Menu} from '@/components/Menu';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <Menu/>
        <main>{children}</main>
        </body>
        </html>
    );
};

export default Layout;




