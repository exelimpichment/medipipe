import ThemeToggle from './ThemeToggle';
import QuoteComponent from './sigInPage/QuoteComponent';
import SignInForm from './sigInPage/SignInForm';

export default function Home() {
  return (
    <main className="flex w-full items-center">
      <QuoteComponent />
      <SignInForm />

      <div className="absolute bottom-0 right-0">
        <ThemeToggle />
      </div>
    </main>
  );
}
