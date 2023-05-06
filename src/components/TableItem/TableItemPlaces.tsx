import { CustomButton, TableData, TableRow } from './TableItemStyled';
import { Tooltip } from '@material-ui/core';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useModal } from '../../hooks';
import { DeleteLocal } from '../../services';
import { toast } from 'react-toastify';
import { useLocals } from '../../hooks/useLocals';

interface Iprops {
  item: {
    places_id: string;
    places_name: string;
    places_latitude: string;
    places_longitude: boolean;
    num_devices: number;
  };
}

export const TableItemPlaces = ({ item }: Iprops) => {
  const { dataChanged, setDataChanged, setSearchResult, setIsSelected } = useLocals();
  async function deleteLocal(id) {
    try {
      await DeleteLocal(id);
      toast.success('Local deletado com sucesso!', {
        position: 'bottom-right',
      });
      setSearchResult([]);
      setDataChanged(!dataChanged);
      setIsSelected(null);
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 409) {
        toast.error('Não é possível deletar locais com dispositivos vinculados!', {
          position: 'bottom-right',
        });
      } else {
        toast.error('Não foi possível deletar o local!', {
          position: 'bottom-right',
        });
      }
    }
  }
  const { open } = useModal();
  return (
    <TableRow key={item.places_id}>
      <TableData>{item.places_name}</TableData>
      <TableData>{item.places_latitude}</TableData>
      <TableData>{item.places_longitude}</TableData>
      <TableData>{item.num_devices}</TableData>
      <TableData>
        <Tooltip title="Editar">
          <CustomButton onClick={() => open(item)}>
            <EditIcon style={{ cursor: 'pointer' }} sx={{ color: 'white' }} />
          </CustomButton>
        </Tooltip>
      </TableData>
      <TableData>
        <Tooltip title="Deletar">
          <CustomButton onClick={() => deleteLocal(item.places_id)}>
            <DeleteOutlineIcon style={{ cursor: 'pointer' }} sx={{ color: 'white' }} />
          </CustomButton>
        </Tooltip>
      </TableData>
    </TableRow>
  );
};
