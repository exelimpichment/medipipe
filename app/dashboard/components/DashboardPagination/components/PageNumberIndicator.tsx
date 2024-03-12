'use client';

import useValidatePageParams from '@/app/dashboard/hooks/useValidatePageParams';

const PageNumberIndicator = () => {
  const page = useValidatePageParams();

  return (
    <div className="">
      <p>{`Page ${page} of 10`}</p>
    </div>
  );
};

export default PageNumberIndicator;
