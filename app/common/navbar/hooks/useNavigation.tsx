import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useNavigation = () => {
  const pathname = usePathname();

  const memorizeLinks = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Dashboard',
        href: '/dashboard',
        active: pathname === '/dashboard',
      },

      {
        id: 2,
        title: 'Chat',
        href: '/chat',
        active: pathname === '/chat',
      },
      {
        id: 3,
        title: 'Mailbox',
        href: '/mailbox',
        active: pathname === '/mailbox',
      },
      {
        id: 4,
        title: 'Settings',
        href: '/settings',
        active: pathname === '/settings',
      },
      {
        id: 5,
        title: 'Profile',
        href: '/profile',
        active: pathname === '/profile',
      },
    ];
  }, [pathname]);

  return memorizeLinks;
};
