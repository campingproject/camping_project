import { REGIONS } from '@/constants/region';
import { RegionButton, RegionContainer, RegionGrid, Title } from './RegionDialog.style';

type Props = {
  onRegionSelect: any;
};

export default function RegionDialog({ onRegionSelect }: Props) {
  return (
    <RegionContainer>
      <RegionGrid>
        {REGIONS.map((region) => (
          <RegionButton key={region} onClick={() => onRegionSelect(region)}>
            {region}
          </RegionButton>
        ))}
      </RegionGrid>
    </RegionContainer>
  );
}
