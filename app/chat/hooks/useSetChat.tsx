import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { z } from 'zod';

const useSetChat = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');

  const sanitizedGroupId = useMemo(() => {
    const groupIdSchema = z.coerce.number();
    const result = groupIdSchema.safeParse(groupId);

    if (result.success) {
      return result.data;
    }

    return 0;
  }, [groupId]);

  const setConversationURL = useMemo(() => {
    return (groupId: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('groupId', String(groupId));
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    };
  }, [router, pathname, searchParams]);

  return { setConversationURL, sanitizedGroupId };
};

export default useSetChat;
