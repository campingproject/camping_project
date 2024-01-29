'use client';

import Title from '@/components/common/Title';
import { prevArrowIcon } from '@/public/svgs';
import { useState } from 'react';
import * as Styled from './MemberInformation.styles';

function MemberInformationMain() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailCheckResult, setEmailCheckResult] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailCheckResult('');
  };

  // 포커스가 떠날 때 이메일 중복 체크 실행
  const handleEmailBlur = async () => {
    // try {
    // const response = await checkSameEmail(email);
    //   if (authUser.email !== email && response.isDuplicate) {
    //     setEmailCheckResult('❌ 이미 사용 중인 이메일');
    //   } else if (!email.length) {
    //     setEmailCheckResult('.');
    //   } else {
    //     setEmailCheckResult('✅ 사용 가능한 이메일');
    //   }
    // } catch (error) {
    //   console.error('이메일 중복 확인 중 오류가 발생했습니다.', error);
    //   setEmailCheckResult('오류 발생');
    // }
  };

  const formData = {
    name,
    birthday,
    phoneNumber,
    email,
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 제출 코드 작성
  };

  return (
    <main>
      <Title title="회원 정보 관리" iconSrc={prevArrowIcon} href="/mypage" />
      <Styled.Form onSubmit={handleSubmitForm}>
        <Styled.InputBox>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={10}
            required
          />
        </Styled.InputBox>
        <Styled.InputBox>
          <label htmlFor="birthday">생년월일</label>
          <input
            type="text"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            maxLength={8}
            placeholder="8자리 입력"
            required
          />
        </Styled.InputBox>
        <Styled.InputBox>
          <label htmlFor="email">이메일 주소</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            placeholder={emailCheckResult}
            required
          />
        </Styled.InputBox>
        <Styled.InputBox>
          <label htmlFor="phoneNumber">전화번호</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Styled.InputBox>

        <Styled.Button type="submit">수정</Styled.Button>
      </Styled.Form>
    </main>
  );
}
export default MemberInformationMain;
