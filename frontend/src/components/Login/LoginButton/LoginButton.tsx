import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { Button } from './LoginButton.styles';

interface LoginButton {
  onClick?: MouseEventHandler;
  id?: string;
  className: string;
  iconSrc: string;
  iconAlt: string;
  span: string;
}
function LoginButton({ onClick, id, className, iconSrc, iconAlt, span }: LoginButton) {
  return (
    <>
      <Button onClick={onClick} id={id} className={className}>
        <Image src={iconSrc} width={30} height={30} alt={iconAlt} />
        <span>{span}</span>
      </Button>
    </>
  );
}
export default LoginButton;
