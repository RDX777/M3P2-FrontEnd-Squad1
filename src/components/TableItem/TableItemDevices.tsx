import { CustomCheckbox, CustomSwitch, TableData, TableRow } from './TableItemStyled';
import { Tooltip } from '@material-ui/core';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useDevices } from '../../hooks/useDevices';

interface Iprops {
  item: {
    id: string;
    name: string;
    type: number;
    mac_address: string;
    status: boolean;
  };
  onChangeSwitch?: (id: string) => void;
  onClickCheckBox: (id: string) => void;
}

export const TableItemDevices = ({ item, onChangeSwitch }: Iprops) => {
  const [itemStatus, setItemStatus] = useState(item.status);
  const { setDevicesToDelete, devicesToDelete } = useDevices();

  function selectDevices(id) {
    const foundIdDevice = devicesToDelete.find((idDevice) => idDevice === id);
    if (!foundIdDevice) {
      const array = [...devicesToDelete];
      array.push(id);
      setDevicesToDelete(array);
    } else {
      const newDevicesToDelete = devicesToDelete.filter((idDevice) => idDevice !== id);
      setDevicesToDelete(newDevicesToDelete);
    }
  }

  return (
    <TableRow key={item.id}>
      <TableData>
        <CustomCheckbox type="checkbox" onClick={() => selectDevices(item.id)} />
      </TableData>
      <TableData>{item.name}</TableData>
      <TableData>{item.type_id.type}</TableData>
      <TableData>{item.mac_address}</TableData>
      <TableData>
        <Tooltip title="Ativar/Desativar">
          <CustomSwitch
            size="medium"
            checked={itemStatus}
            onChange={() => {
              onChangeSwitch(item.id);
              setItemStatus(!itemStatus);
            }}
          />
        </Tooltip>
      </TableData>
    </TableRow>
  );
};
