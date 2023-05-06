import { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, SubMenuWrapper, Title, TitleWrapper } from './SubmenuStyled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SvgIcon } from '@mui/material';
import styles from './style.module.css';
import { PlaceMenu } from '../../interfaces/local.interface';
import { useDispatch } from 'react-redux';
import { setSelectedPlace } from '../../redux/place/slice';
import { useDevices } from '../../hooks/useDevices';
import { useLocals } from '../../hooks/useLocals';

interface IProps {
  places: Array<PlaceMenu>;
}

export const Submenu = ({ places }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSelected, setIsSelected } = useLocals();
  const { setDataChangedDevices, dataChangedDevices } = useDevices();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedPlace(isSelected));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  useEffect(() => {
    if (places?.length && !isSelected) {
      setIsSelected(places[0]);
      window.localStorage.setItem('place', JSON.stringify(places[0]));
    }
  }, [places, isSelected]);
  return (
    <SubMenuWrapper>
      <TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        <Title>{isSelected ? isSelected.places_name : 'Locais'}</Title>
        <SvgIcon
          component={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
          style={{ color: 'gray' }}
        />
      </TitleWrapper>
      <Dropdown style={isOpen ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        {places?.length > 0 ? (
          places.map((place) => {
            return (
              <DropdownItem
                className={
                  isSelected?.places_id === place.places_id ? styles.active : styles.notActive
                }
                id={place.places_id}
                key={place.places_id}
                onClick={() => {
                  setIsSelected(place);
                  setIsOpen(false);
                  setDataChangedDevices(!dataChangedDevices);
                  window.localStorage.setItem('place', JSON.stringify(place));
                }}
              >
                {place.places_name}
              </DropdownItem>
            );
          })
        ) : (
          <DropdownItem>Nenhum local encontrado</DropdownItem>
        )}
      </Dropdown>
    </SubMenuWrapper>
  );
};
