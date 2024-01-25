import { CSSProperties, ReactNode, forwardRef } from 'react';
import { Dialog } from './DateDialog.styles';

type DialogProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const DateDialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, style }: DialogProps, ref) => {
    return (
      <Dialog style={style} ref={ref}>
        {children}
      </Dialog>
    );
  },
);

DateDialog.displayName = 'SearchBarDialog';

export default DateDialog;
