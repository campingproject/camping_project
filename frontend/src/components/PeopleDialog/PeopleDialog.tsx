'use client';

import { ButtonBox, Container, Description, TitleBox } from './PeopleDialog.style';

type Props = {
  title: string;
  description: string;
  state: number;
  setStateValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function PeopleDialog({ title, description, state, setStateValue }: Props) {
  const handlePlus = () => {
    setStateValue((prev) => prev + 1);
  };

  const handleMinus = () => {
    setStateValue((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <Container>
      <TitleBox>
        <span>{title}</span>
        <Description>{description}</Description>
      </TitleBox>
      <ButtonBox>
        <button disabled={state === 0} onClick={handleMinus}>
          –
        </button>
        <div>{state}</div>
        <button onClick={handlePlus}>+</button>
      </ButtonBox>
    </Container>
  );
}
