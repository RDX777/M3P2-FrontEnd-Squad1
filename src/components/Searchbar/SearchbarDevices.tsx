import { useForm } from 'react-hook-form';
import { useDevices } from '../../hooks/useDevices';
import { Input, InputWrapper } from './SearchbarStyled';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

export const SearchbarDevices = () => {
  const RegisterFormSchema = z.object({
    search: z.string(),
  });

  type RegisterFormType = z.infer<typeof RegisterFormSchema>;

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const { devices, setSearchResultDevices, dataChangedDevices } = useDevices();

  function setSearch(data) {
    const search = data.target.value;
    const filteredDevices = devices.filter((device) =>
      device.name.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResultDevices(filteredDevices);
  }

  useEffect(() => {
    setValue('search', '');
  }, [dataChangedDevices]);
  return (
    <InputWrapper>
      <img src="src\assets\Search.png" alt="search-icon"></img>
      <Input
        {...register('search')}
        placeholder="Digite para filtar os dados..."
        onInput={(event) => setSearch(event)}
      ></Input>
    </InputWrapper>
  );
};
