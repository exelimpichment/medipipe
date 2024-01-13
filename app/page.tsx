import { BsBandaid } from 'react-icons/bs';
import ThemeToggle from './ThemeToggle';
import QuoteComponent from './sigInPage/QuoteComponent';
import SignInForm from './sigInPage/SignInForm';

export default function Home() {
  return (
    <main className="flex w-full items-center">
      <QuoteComponent />
      <SignInForm />

      <div className="absolute right-[5px] top-[5px]">
        <ThemeToggle />
      </div>
      <div className="absolute left-[25px] top-[25px] flex items-center space-x-2 text-xl">
        <BsBandaid size={26} />
        <span>Medipype</span>
      </div>
    </main>
  );
}
