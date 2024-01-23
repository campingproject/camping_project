import { InputWrap } from './BookerInputBox.styles';

type Props = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler;
};

function BookerInputBox({ label, type, id, value, onChange }: Props) {
  return (
    <InputWrap>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </InputWrap>
  );
}
export default BookerInputBox;
