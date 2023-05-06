import {
  DoubleErrorsContainer,
  DoubleInputWrapper,
  InputWrapper,
  RegisterForm,
  RegisterMain,
  RegisterSection,
  RegisterWrapper,
  SpanError,
} from './ProfileStyled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../../components/Input';
import { InputIcon } from '../../components/InputIcon/InputIcon';
import { MyButton } from '../../components/Buttons';
import { EditProfile, GetProfileData } from '../../services';
import { toast } from 'react-toastify';
import { Label } from '../../modals/AddLocal/AddLocalModalStyled';
import { useEffect, useState } from 'react';

export const Profile = () => {
  const [user, setUser] = useState({});
  const RegisterFormSchema = z
    .object({
      name: z.string().nonempty('Nome da empresa obrigatório'),
      cnpj: z.string().nonempty('CNPJ obrigatório'),
      owner: z
        .string()
        .nonempty('Nome obrigatório')
        .transform((name) => {
          return name
            .trim()
            .split(' ')
            .map((word) => {
              return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(' ');
        }),
      mail: z.string().email('E-mail inválido').nonempty('E-mail obrigatório'),
      phone: z.string().nonempty('Telefone obrigatório'),
      password: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z.undefined().or(z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')),
      ),
      confirmPassword: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z.undefined().or(z.string()),
      ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem.',
      path: ['confirmPassword'],
    });

  type RegisterFormType = z.infer<typeof RegisterFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const handleRegister = async (data: RegisterFormType) => {
    const newUserData = {
      id: user.id,
      name: data.name,
      cnpj: data.cnpj,
      owner: data.owner,
      mail: data.mail,
      phone: data.phone,
    };
    const body = data.password
      ? {
        phone: data.phone,
        password: data.password,
        confirm_password: data.confirmPassword,
      }
      : {
        phone: data.phone,
      };

    try {
      const data = await GetProfileData();
      if (data.phone === body.phone) {
        return toast.error(
          'Essas informações já estão salvas! Revise os dados e tente novamente!',
          {
            position: 'bottom-right',
          },
        );
      } else {
        await EditProfile(body);
        window.localStorage.setItem('user', JSON.stringify(newUserData));
        toast.success('Perfil editado com sucesso!', {
          position: 'bottom-right',
        });
      }
    } catch (err) {
      console.log(err);
      toast.error('Erro ao editar perfil, tente novamente mais tarde!', {
        position: 'bottom-right',
      });
    }
  };

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem('user'));
    setUser(userData);
    setValue('name', userData.name);
    setValue('cnpj', userData.cnpj);
    setValue('mail', userData.mail);
    setValue('owner', userData.owner);
    setValue('phone', userData.phone);
  }, []);
  return (
    <RegisterMain>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <RegisterSection>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label>Empresa</Label>
              <div>
                <InputWrapper>
                  <Input
                    disabled
                    type="text"
                    aria-label="name"
                    placeholder="Nome da empresa"
                    {...register('name')}
                  />
                  <InputIcon path="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z" />
                </InputWrapper>
                {errors.name && <SpanError>{errors.name.message}</SpanError>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label>CNPJ</Label>
              <div>
                <InputWrapper>
                  <Input
                    disabled
                    type="text"
                    aria-label="cnpj"
                    placeholder="CNPJ da empresa"
                    {...register('cnpj')}
                  />
                  <InputIcon path="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM96,48h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm84.81,150.4a8,8,0,0,1-11.21-1.6,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.6A67.88,67.88,0,0,1,101,165.51a40,40,0,1,1,53.94,0A67.88,67.88,0,0,1,182.4,187.2,8,8,0,0,1,180.81,198.4ZM152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Z" />
                </InputWrapper>
                {errors.cnpj && <SpanError>{errors.cnpj.message}</SpanError>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label>Nome</Label>
              <div>
                <InputWrapper>
                  <Input
                    disabled
                    type="text"
                    aria-label="owner"
                    placeholder="Nome do responsável"
                    {...register('owner')}
                  />
                  <InputIcon path="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" />
                </InputWrapper>
                {errors.owner && <SpanError>{errors.owner.message}</SpanError>}
              </div>
            </div>

            <DoubleInputWrapper>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Label>Email</Label>
                <InputWrapper>
                  <Input
                    disabled
                    type="text"
                    aria-label="mail"
                    placeholder="E-mail"
                    {...register('mail')}
                  />
                  <InputIcon path="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                </InputWrapper>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Label>Telefone</Label>
                <InputWrapper>
                  <Input
                    type="tel"
                    aria-label="phone"
                    placeholder="Telefone"
                    {...register('phone')}
                  />
                  <InputIcon path="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" />
                </InputWrapper>
              </div>
            </DoubleInputWrapper>
            <DoubleErrorsContainer>
              {errors.mail && <SpanError>{errors.mail.message}</SpanError>}
              {errors.phone && <SpanError>{errors.phone.message}</SpanError>}
            </DoubleErrorsContainer>

            <DoubleInputWrapper>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Label>Senha</Label>
                <InputWrapper>
                  <Input
                    type="password"
                    aria-label="password"
                    placeholder="Senha"
                    {...register('password')}
                  />
                  <InputIcon path="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z" />
                </InputWrapper>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Label>Confirmar senha </Label>
                <InputWrapper>
                  <Input
                    type="password"
                    aria-label="confirm-password"
                    placeholder="Confirmar senha"
                    {...register('confirmPassword')}
                  />
                  <InputIcon path="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z" />
                </InputWrapper>
              </div>
            </DoubleInputWrapper>
            <DoubleErrorsContainer>
              {errors.password && <SpanError>{errors.password.message}</SpanError>}
              {errors.confirmPassword && <SpanError>{errors.confirmPassword.message}</SpanError>}
            </DoubleErrorsContainer>
          </RegisterSection>

          <MyButton
            style={{ maxWidth: '352px', alignSelf: 'center', marginTop: '0' }}
            type="submit"
          >
            SALVAR
          </MyButton>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterMain>
  );
};
