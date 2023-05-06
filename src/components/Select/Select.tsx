import { useEffect, useState } from 'react';
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  SpanSelected,
} from './SelectStyled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SvgIcon } from '@mui/material';

interface IProps {
  options: Array<any>;
  setOptionToForm: () => void;
}

export const Select = ({ options, setOptionToForm }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setOptionToForm(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader id="select" onClick={toggling}>
          {selectedOption ? <SpanSelected>{selectedOption}</SpanSelected> : 'Selecione'}
          <SvgIcon
            component={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
            style={{ color: 'gray' }}
          />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};
