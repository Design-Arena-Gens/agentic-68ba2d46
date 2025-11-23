import './globals.css';

export const metadata = {
  title: 'بوصلة الحياة | Storyboard',
  description: 'Storyboard for a 12–15 second promo of the book بوصلة الحياة.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
