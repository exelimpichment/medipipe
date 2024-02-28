import { Suspense } from 'react';
import SearchBar from './search-bar';

const Communication = () => {
  return (
    <div>
      lallala
      <p>Communication</p>
      <Suspense fallback={<div>dsdnksnd</div>}>
        <SearchBar />
      </Suspense>
    </div>
  );
};

export default Communication;
