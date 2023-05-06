import { CustomTable, TableRow, TableHeadData, WarningWrapper, Span } from './TableStyled';
import { TableItemDevices, TableItemPlaces } from '../TableItem';
import { IconNoData } from '../IconNodata';
interface IProps {
  type: string;
  data?: Array<any>;
  onChangeSwitch?: () => void;
  onClickCheckBox?: (id: string) => void;
}

export const Table = ({ type, data, onChangeSwitch, onClickCheckBox }: IProps) => {
  if (data.length < 1) {
    return (
      <WarningWrapper>
        <IconNoData
          path={
            type === 'sensores'
              ? 'M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z'
              : 'M230.32,187.09l-46-59.09H208a8,8,0,0,0,6.34-12.88l-80-104a8,8,0,0,0-12.68,0l-80,104A8,8,0,0,0,48,128H71.64l-46,59.09A8,8,0,0,0,32,200h88v40a8,8,0,0,0,16,0V200h88a8,8,0,0,0,6.32-12.91ZM48.36,184l46-59.09A8,8,0,0,0,88,112H64.25L128,29.12,191.75,112H168a8,8,0,0,0-6.31,12.91L207.64,184Z'
          }
        />
        <Span>Nenhum {type === 'sensores' ? 'sensor' : 'local'} cadastrado</Span>
      </WarningWrapper>
    );
  }

  if (type === 'sensores') {
    return (
      <CustomTable>
        <thead>
          <TableRow>
            <TableHeadData></TableHeadData>
            <TableHeadData>Nome</TableHeadData>
            <TableHeadData>Tipo</TableHeadData>
            <TableHeadData>Endereço MAC</TableHeadData>
            <TableHeadData>Status</TableHeadData>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <TableItemDevices
                key={item.id}
                item={item}
                onClickCheckBox={onClickCheckBox}
                onChangeSwitch={onChangeSwitch}
              />
            );
          })}
        </tbody>
      </CustomTable>
    );
  }
  return (
    <CustomTable>
      <thead>
        <TableRow>
          <TableHeadData>Local</TableHeadData>
          <TableHeadData>Latitude</TableHeadData>
          <TableHeadData>Longitude</TableHeadData>
          <TableHeadData>Sensores</TableHeadData>
          <TableHeadData></TableHeadData>
          <TableHeadData></TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        {data.map((item) => {
          return <TableItemPlaces key={item.id + 1} item={item} />;
        })}
      </tbody>
    </CustomTable>
  );
};
