import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 1100px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 40px;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 100%;
    margin-top: 40px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const InputBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: auto;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px;
  label {
    justify-content: left;
    text-align: left;
    font-size: ${Theme.fontSize.large};
  }
  input {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    border: none;
    border-bottom: 1px solid ${Theme.colors.gray300};
    font-size: ${Theme.fontSize.medium};
    color: ${Theme.colors.gray400};

    &:focus {
      outline: none;
    }
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    margin-bottom: 0px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.colors.orange300};
  @media screen and (max-width: ${Theme.screen.tablet}) {
    margin-top: 10px;
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin-top: 10px;
  }
`;
