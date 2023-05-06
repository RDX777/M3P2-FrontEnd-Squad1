import { Modal } from '../Modal/Modal';
import {
  AddLocalsForm,
  ButtonsContainer,
  CancelButton,
  Container,
  Info,
  InputContainer,
  InputWrapper,
  Label,
  SpanError,
  Title,
  TitleWrapper,
} from './AddLocalModalStyled';
import { Input } from '../../components/Input';
import { InputIcon } from '../../components/InputIcon/InputIcon';
import { MyButton } from '../../components/Buttons';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useModal } from '../../hooks';
import { useEffect } from 'react';
import { CreateLocal, EditLocal } from '../../services';
import { toast } from 'react-toastify';
import { useLocals } from '../../hooks/useLocals';

interface IProps {
  open?: boolean;
}

export const AddLocalModal = ({ open = true }: IProps) => {
  const { close, data } = useModal();
  const { dataChanged, setDataChanged, setSearchResult } = useLocals();

  const RegisterFormSchema = z.object({
    name: z.string().nonempty('Nome do local obrigatório'),
    latitude: z.string().nonempty('Latitude obrigatório'),
    longitude: z.string().nonempty('Longitude obrigatório'),
  });

  type RegisterFormType = z.infer<typeof RegisterFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const handleRegisterLocal = async (form: any) => {
    try {
      form.latitude = parseFloat(form.latitude);
      form.longitude = parseFloat(form.longitude);
      if (form.latitude < -90 || form.latitude > 90) {
        return toast.error('Latitude deve ser entre -90 e 90', {
          position: 'bottom-right',
        });
      }
      if (form.longitude < -180 || form.longitude > 180) {
        return toast.error('Longitude deve ser entre -180 e 180', {
          position: 'bottom-right',
        });
      }

      if (typeof data === 'object') {
        await EditLocal(data.places_id, form);
        toast.success('Local editado com sucesso!', {
          position: 'bottom-right',
        });
      } else {
        await CreateLocal(form);
        toast.success('Local cadastrado com sucesso!', {
          position: 'bottom-right',
        });
      }
      setSearchResult([]);
      setDataChanged(!dataChanged);
      close();
      reset();
    } catch (error) {
      return toast.error('Não foi possível cadastrar o local. Entre em contato com o suporte!', {
        position: 'bottom-right',
      });
    }
  };

  useEffect(() => {
    if (typeof data === 'object') {
      setValue('name', data.places_name);
      setValue('latitude', data.places_latitude);
      setValue('longitude', data.places_longitude);
    } else {
      setValue('name', '');
      setValue('latitude', '');
      setValue('longitude', '');
    }
  }, [data, setValue]);

  return (
    <Modal backdropColor="" zIndex="500" open={open}>
      <Container>
        <TitleWrapper>
          <Title>{data === true ? 'Criar local' : 'Editar local'}</Title>
          <Info>
            {data === true ? 'Adicionar um novo local à empresa' : 'Editar um local já existente'}
          </Info>
        </TitleWrapper>
        <AddLocalsForm onSubmit={handleSubmit(handleRegisterLocal)}>
          <InputContainer>
            <Label>Nome</Label>
            <InputWrapper>
              <Input
                type="text"
                aria-label="company"
                placeholder="Nome do local"
                {...register('name')}
              />
              <InputIcon path="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z" />
            </InputWrapper>
            {errors.name && <SpanError>{errors.name.message}</SpanError>}
          </InputContainer>

          <InputContainer>
            <Label>Localização</Label>
            <InputWrapper>
              <Input
                type="text"
                aria-label="company"
                placeholder="Latitude"
                {...register('latitude')}
              />
              <InputIcon path="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </InputWrapper>
            {errors.latitude && <SpanError>{errors.latitude.message}</SpanError>}
            <InputWrapper>
              <Input aria-label="company" placeholder="Longitude" {...register('longitude')} />
              <InputIcon path="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </InputWrapper>
            {errors.longitude && <SpanError>{errors.longitude.message}</SpanError>}
          </InputContainer>

          <ButtonsContainer>
            <CancelButton
              type="button"
              onClick={() => {
                close(), reset();
              }}
            >
              CANCELAR
            </CancelButton>
            <MyButton type="submit">{data ? 'SALVAR' : 'CADASTRAR'}</MyButton>
          </ButtonsContainer>
        </AddLocalsForm>
      </Container>
    </Modal>
  );
};
