import React, { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { Searchbar, SearchbarDevices } from '../../components/Searchbar';
import { MyButton } from '../../components/Buttons/MyButton';
import {
  ContainerSearch,
  ContainerSearchBar,
  ContainerSearchMyButton,
  Container,
  Main,
  Section,
  SectionHeader,
  SectionBody,
  DivFlex,
  Title,
  DivFlexStart,
  ButtonsWrapper,
} from './SensorsStyled';
import { GetDevices, ChangeStateDevice, DeleteDevices } from '../../services';
import { toast } from 'react-toastify';
import { AddSensorModal } from '../../modals';
import { useModal } from '../../hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDevices } from '../../hooks/useDevices';
import { CancelButton } from '../../modals/AddLocal/AddLocalModalStyled';

interface IProps {
  idPlace: string;
}

export const Sensors: React.FunctionComponent = ({ idPlace }: IProps) => {
  const { isOpen, open } = useModal();
  const {
    dataChangedDevices,
    devices,
    setDevices,
    searchResultDevices,
    devicesToDelete,
    setDevicesToDelete,
    setDataChangedDevices,
  } = useDevices();

  const selectedPlace = useSelector((state: RootState) => {
    return state.selectedPlace;
  });

  async function deleteDevices() {
    try {
      await DeleteDevices({
        id_place: selectedPlace.places_id,
        id_device: devicesToDelete,
      });
      if (devicesToDelete.length === 1) {
        toast.success('Sensor deletado com sucesso!', {
          position: 'bottom-right',
        });
      } else {
        toast.success('Sensores deletados com sucesso!', {
          position: 'bottom-right',
        });
      }
      setDevicesToDelete([]);
      setDataChangedDevices(!dataChangedDevices);
    } catch (error) {
      console.log(error);
      toast.error('Ops, não foi possível deletar. Entre em contato com o suporte!', {
        position: 'bottom-right',
      });
    }
  }

  const handleChangeSwitch = (id: string) => {
    ChangeStateDevice({ idDevice: id })
      .then(() => {
        toast.success('Status alterado!', {
          position: 'bottom-right',
        });
      })
      .catch(() => {
        toast.error('Ops, algo de errado não esta certo!', {
          position: 'bottom-right',
        });
      });
  };

  async function fetchDevices(id) {
    try {
      const response = await GetDevices(id);

      setDevices(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const selectedPlace = JSON.parse(window.localStorage.getItem('place'));
    if (!selectedPlace) {
      setDevices([]);
      return;
    }
    fetchDevices(selectedPlace.places_id);
  }, [dataChangedDevices]);

  return (
    <Main>
      <Section>
        <SectionHeader>
          <DivFlex>
            <Title>Sensores</Title>
            <ButtonsWrapper>
              <CancelButton
                onClick={() => deleteDevices()}
                style={
                  devicesToDelete.length < 1
                    ? { visibility: 'hidden', marginTop: '0' }
                    : { marginTop: '0' }
                }
              >
                EXCLUIR
              </CancelButton>
              <MyButton style={{ maxWidth: '166px', marginTop: '0' }} onClick={() => open(true)}>
                Novo Sensor
              </MyButton>
            </ButtonsWrapper>
          </DivFlex>
          <DivFlexStart>
            <SearchbarDevices />
          </DivFlexStart>
        </SectionHeader>
        <SectionBody isEmptyArray={devices.length === 0}>
          <Table
            type="sensores"
            onChangeSwitch={(id) => handleChangeSwitch(id)}
            data={searchResultDevices.length > 0 ? searchResultDevices : devices}
          />
          <AddSensorModal open={isOpen} />
        </SectionBody>
      </Section>
    </Main>
  );
};
