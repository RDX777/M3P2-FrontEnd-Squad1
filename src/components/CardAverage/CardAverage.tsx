import {
  CardAverageContainer,
  CardAverageDataWrapper,
  CardAverageData,
  IconData,
  IconWrapper,
  InfoWrapper,
  DataWrapper,
} from './CardAverageStyled';

interface OverviewData {
  id: number;
  type: string;
  min_range: number;
  max_range: number;
  unit: string;
  round: number;
}

interface Data {
  overview: OverviewData[];
}

export const CardAverage = ({ overview }: Data) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <CardAverageContainer>
      <CardAverageDataWrapper>
        {overview.map((item) => {
          const imgSrc = `src/assets/${item.type}.png`;
          return (
            <CardAverageData key={item.id}>
              <DataWrapper>
                <IconWrapper>
                  <IconData src={imgSrc} alt={item.type} />
                </IconWrapper>
                <div>
                  <InfoWrapper>
                    <h3>{capitalize(item.type)}</h3>
                    <p>
                      {item.round}
                      {item.unit}
                    </p>
                  </InfoWrapper>
                </div>
              </DataWrapper>
            </CardAverageData>
          );
        })}
      </CardAverageDataWrapper>
    </CardAverageContainer>
  );
};
