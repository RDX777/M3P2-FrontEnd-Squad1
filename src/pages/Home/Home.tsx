import React, { useEffect, useState } from 'react';
import {
  MainContainer,
  NotFoundImgWrapper,
  NotFoundWrapper,
  OverViewContainer,
} from './HomeStyled';
import { Card } from '../../components';
import { MapComponent } from '../../components/MapComponent/MapComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { CardAverage } from '../../components/CardAverage';
import { Overview } from '../../services';
import { ComponentChart } from '../../components/ComponentChart/ComponentChart';

interface OverviewData {
  id: number;
  type: string;
  min_range: number;
  max_range: number;
  unit: string;
  round: number;
}

interface SensorData {
  id: string;
  name: string;
  type_id: number;
  type: string;
  unit: string;
  values: number[];
  time: string[];
}
export const Home: React.FunctionComponent = () => {
  const selectedPlace = useSelector((state: RootState) => {
    return state.selectedPlace;
  });

  const [overview, setOverview] = React.useState<OverviewData[]>([]);
  const [chartData, setChartData] = useState<SensorData[]>([]);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  useEffect(() => {
    setLoaded(false);
    if (selectedPlace && selectedPlace.places_id) {
      Overview(selectedPlace.places_id)
        .then((res) => {
          setOverview(res.data.overview);
          setChartData(res.data.dados);
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, [selectedPlace]);

  useEffect(() => {
    if (overview.length > 0) {
      setLoaded(true);
    }
  }, [overview]);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (!loaded) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      {selectedPlace ? (
        <>
          <h2>{selectedPlace?.places_name}</h2>
          <OverViewContainer>
            <Card title="Médias">
              <CardAverage overview={overview} />
            </Card>
            <Card title="Mapa">
              <MapComponent
                place={{
                  name: selectedPlace?.places_name,
                  latitude: selectedPlace?.places_latitude,
                  longitude: selectedPlace.places_longitude,
                }}
              />
            </Card>
            {chartData.length > 0
              ? chartData.map((data) => {
                  let title = '';
                  switch (data.type) {
                    case 'temperatura':
                      title = 'Histórico de temperatura';
                      break;
                    case 'umidade':
                      title = 'Histórico de umidade do ar';
                      break;
                    case 'vento':
                      title = 'Histórico de velocidade do vento';
                      break;
                    case 'direcao':
                      title = 'Histórico de direção do vento';
                      break;
                    case 'precipitacao':
                      title = 'Histórico de precipitação';
                      break;
                    case 'luz':
                      title = 'Histórico de luminosidade';
                      break;
                  }

                  return (
                    <Card title={title} key={data.id}>
                      <ComponentChart
                        values={data.values}
                        name={capitalize(data.type)}
                        time={data.time}
                      />
                    </Card>
                  );
                })
              : null}
          </OverViewContainer>
        </>
      ) : (
        <NotFoundWrapper>
          <NotFoundImgWrapper>
            <img src="src/assets/not-found.png" alt="Not found" />
          </NotFoundImgWrapper>
          <p>
            Oops, você ainda não possui nenhum local cadastrado. Clique em{' '}
            <Link to={'/locals'}> Locais </Link> e cadastre seu primeiro local.
          </p>
        </NotFoundWrapper>
      )}
    </MainContainer>
  );
};
