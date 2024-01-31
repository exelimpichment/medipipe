import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingSpinner = ({ size }: { size: number }) => {
  return (
    <div className="animate-spin">
      <AiOutlineLoading3Quarters size={size} />
    </div>
  );
};

export default LoadingSpinner;
