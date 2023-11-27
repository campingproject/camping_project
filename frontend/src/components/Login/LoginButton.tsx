import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface LoginButton {
  onClick: MouseEventHandler;
  className: string;
  iconSrc: string;
  iconAlt: string;
  span: string;
}
function LoginButton({ onClick, className, iconSrc, iconAlt, span }: LoginButton) {
  return (
    <>
      <button onClick={onClick} className={className}>
        <Image src={iconSrc} width={30} height={30} alt={iconAlt} />
        <span>{span}</span>
      </button>
    </>
  );
}
export default LoginButton;
