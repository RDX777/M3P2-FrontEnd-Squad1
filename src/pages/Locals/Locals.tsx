import React, { useEffect } from 'react';
import {
  DivFlex,
  DivFlexStart,
  Main,
  Section,
  SectionBody,
  SectionHeader,
  Title,
} from './LocalsStyled';
import { Table } from '../../components/Table';
import { MyButton } from '../../components/Buttons';
import { SearchbarLocals } from '../../components/Searchbar';
import { AddLocalModal } from '../../modals/AddLocal';
import { useModal } from '../../hooks';
import { GetLocals } from '../../services';
import { useLocals } from '../../hooks/useLocals';

export const Locals: React.FunctionComponent = () => {
  async function fetchLocals() {
    try {
      const response = await GetLocals();
      setLocals(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const { isOpen, open } = useModal();
  const { dataChanged, locals, setLocals, searchResult } = useLocals();
  useEffect(() => {
    fetchLocals();
  }, [dataChanged]);

  return (
    <Main>
      <Section>
        <SectionHeader>
          <DivFlex>
            <Title>Locais</Title>
            <MyButton style={{ maxWidth: '166px', marginTop: '0' }} onClick={() => open(true)}>
              Novo Local
            </MyButton>
          </DivFlex>
          <DivFlexStart>
            <SearchbarLocals />
          </DivFlexStart>
        </SectionHeader>
        <SectionBody isEmptyArray={locals.length === 0}>
          <Table type="locais" data={searchResult.length > 0 ? searchResult : locals} />
          <AddLocalModal open={isOpen} />
        </SectionBody>
      </Section>
    </Main>
  );
};
