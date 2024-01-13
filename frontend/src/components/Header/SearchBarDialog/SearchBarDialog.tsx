import { CSSProperties, ReactNode, forwardRef } from 'react';
import { Dialog } from './SearchBarDialog.style';

type DialogProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const SearchBarDialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, style }: DialogProps, ref) => {
    return (
      <Dialog style={style} ref={ref}>
        {children}
      </Dialog>
    );
  },
);

SearchBarDialog.displayName = 'SearchBarDialog';

export default SearchBarDialog;
