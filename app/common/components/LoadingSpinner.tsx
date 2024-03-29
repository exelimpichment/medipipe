import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingSpinner = ({ size }: { size: number }) => {
  return (
    <div data-testid="loading-spinner" className="animate-spin">
      <AiOutlineLoading3Quarters size={size} />
    </div>
  );
};

export default LoadingSpinner;
