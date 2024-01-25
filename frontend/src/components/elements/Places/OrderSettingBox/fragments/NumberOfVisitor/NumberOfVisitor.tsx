import { PeopleDialog } from '@/components/Header/PeopleDialog';
import { useState } from 'react';
import * as Styled from './NumberOfVisitor.styles';

function NumberOfVisitor() {
  const [adultNumber, setAdultNumber] = useState<number>(0);
  const [teenNumber, setTeenNumber] = useState<number>(0);
  const [childNumber, setChildNumber] = useState<number>(0);
  const [petNumber, setPetNumber] = useState<number>(0);
  // const totalNumber = adultNumber + teenNumber + childNumber + petNumber;

  /** todo: 예약 정보 기본값으로 searchBar에서 Recoil에 저장한 상태값을 가져와야함  */

  return (
    <Styled.Container>
      <h1>인원</h1>
      <Styled.Wrap>
        <Styled.WrapAgeGroup>
          <PeopleDialog
            title="성인"
            description="만 19세 이상"
            state={adultNumber}
            setStateValue={setAdultNumber}
          />
          <PeopleDialog
            title="청소년"
            description="만 13세 이상"
            state={teenNumber}
            setStateValue={setTeenNumber}
          />
        </Styled.WrapAgeGroup>
        <Styled.WrapAgeGroup>
          <PeopleDialog
            title="어린이"
            description="만 2세 ~ 12세"
            state={childNumber}
            setStateValue={setChildNumber}
          />
          <PeopleDialog
            title="반려동물"
            description="반려동물을 동반하시나요?"
            state={petNumber}
            setStateValue={setPetNumber}
          />
        </Styled.WrapAgeGroup>
      </Styled.Wrap>
    </Styled.Container>
  );
}
export default NumberOfVisitor;
