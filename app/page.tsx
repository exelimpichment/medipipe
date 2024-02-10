import 'server-only';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { BsBandaid } from 'react-icons/bs';
import { authOptions } from './api/auth/[...nextauth]/route';
import ThemeToggle from './common/components/ThemeToggle';
import QuoteComponent from './sigInPage/components/QuoteComponent/QuoteComponent';
import SignInForm from './sigInPage/components/signInForm/SignInForm';

export default async function Home() {
  const data = await getServerSession(authOptions);
  if (data) {
    redirect('/dashboard');
  }
  return (
    <main className="flex w-full items-center">
      <QuoteComponent />
      <SignInForm />

      <div className="absolute right-[5px] top-[5px]">
        <ThemeToggle />
      </div>

      <div className="absolute left-[25px] top-[25px] flex items-center space-x-2 text-xl text-zinc-50">
        <BsBandaid size={26} />
        <span>Medipipe</span>
      </div>
    </main>
  );
}
