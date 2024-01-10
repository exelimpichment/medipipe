'use client';

import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  console.log('render');

  return (
    <main>
      <Button variant="outline">Button</Button>

      <ThemeToggle />
    </main>
  );
}
