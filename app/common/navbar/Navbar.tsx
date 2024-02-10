'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Container from '../width-container/Container';
import { useNavigation } from './hooks/useNavigation';

const NavBar = () => {
  const links = useNavigation();
  return (
    <nav>
      <Container>
        <ul className="my-6 flex gap-8  text-muted-foreground">
          {links.map(({ active, href, id, title }) => (
            <li
              key={id}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 hover:text-primary',
                { 'bg-zinc-800': active },
                { 'text-white': active }
              )}
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
