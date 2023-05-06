import { useLocals } from '../../hooks/useLocals';
import { Input, InputWrapper } from './SearchbarStyled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export const SearchbarLocals = () => {
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

  const { locals, setSearchResult, dataChanged } = useLocals();

  function setSearch(data) {
    const search = data.target.value;
    const filteredLocals = locals.filter((local) =>
      local.places_name.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResult(filteredLocals);
  }

  useEffect(() => {
    setValue('search', '');
  }, [dataChanged]);

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
