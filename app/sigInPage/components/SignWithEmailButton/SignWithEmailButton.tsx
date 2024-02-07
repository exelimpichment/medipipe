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
        disabled={props.isLoading}
        onClick={props.onClick}
        type="button"
        className="h-9 w-full rounded-[6px] bg-zinc-900 text-zinc-50 hover:bg-slate-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-slate-50"
      >
        {props.isLoading && <LoadingSpinner size={18} />}
        <span className="ml-2">Sign In with Email</span>
      </Button>
    </>
  );
};

export default SignWithEmailButton;
