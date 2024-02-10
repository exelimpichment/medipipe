'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PiSunDimLight } from 'react-icons/pi';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={48}
        height={48}
        sizes="48x48"
        alt="Loading Light/Dark Toggle"
        title="Loading Light/Dark Toggle"
        priority={false}
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <Button
        onClick={() => setTheme('light')}
        variant={'outline'}
        className="h-[48px] w-[48px] items-center justify-center rounded-full p-0"
      >
        <PiSunDimLight size={32} onClick={() => setTheme('light')} />
      </Button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <Button
        onClick={() => setTheme('dark')}
        variant={'outline'}
        className="h-[48px] w-[48px] items-center justify-center rounded-full p-0"
      >
        <PiSunDimLight size={32} onClick={() => setTheme('light')} />
      </Button>
    );
  }
};

export default ThemeToggle;
