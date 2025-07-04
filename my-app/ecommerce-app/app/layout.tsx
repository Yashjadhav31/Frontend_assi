import '../styles/globals.css';
import { ReactQueryProvider } from '../lib/queryClient';

export const metadata = {
  title: 'E-commerce App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
