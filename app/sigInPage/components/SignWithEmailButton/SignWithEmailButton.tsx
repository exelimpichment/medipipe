import LoadingSpinner from '@/app/common/components/loadingSpinner/LoadingSpinner';
import { Button } from '@/components/ui/button';

interface ISignWithEmailButton {
  isLoading?: boolean;
  onClick?: () => void;
}

const defaultProps: ISignWithEmailButton = {
  isLoading: false,
  onClick: () => {},
};

const SignWithEmailButton: React.FC<ISignWithEmailButton> = (
  props = defaultProps
) => {
  return (
    <>
      <Button
        className="w-full"
        disabled={props.isLoading}
        onClick={props.onClick}
        type="button"
      >
        {props.isLoading && <LoadingSpinner size={18} />}
        <span className="ml-2">Sign In with Email</span>
      </Button>
    </>
  );
};

export default SignWithEmailButton;
