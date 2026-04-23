import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Gamified Task Manager',
  description: 'Complete tasks, earn XP, climb the leaderboard.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen pb-24 md:pt-20 max-w-5xl mx-auto px-4 py-4">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
