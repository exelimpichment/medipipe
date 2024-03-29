'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

// import { signOut } from 'next-auth/react';
import WidthContainer from '../width-container/WidthContainer';
import { useNavigation } from './hooks/useNavigation';

const NavBar = () => {
  const links = useNavigation();
  return (
    <nav>
      <WidthContainer>
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
              <Link href={href} prefetch={true}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
   
      </WidthContainer>
    </nav>
  );
};

export default NavBar;
