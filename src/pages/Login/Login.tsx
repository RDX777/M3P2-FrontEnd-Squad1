import {
  InputWrapper,
  LoginForm,
  LoginMain,
  LoginSection,
  LoginSideBar,
  LoginWrapper,
  LogoWrapper,
  ForgotLink,
  FormRegisterWrapper,
} from './LoginStyled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import logoIntelbras from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { InputIcon } from '../../components/InputIcon/InputIcon';
import { MyButton } from '../../components/Buttons';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const LoginFormSchema = z.object({
    email: z.string().email('Formato do e-mail inválido').nonempty('E-mail obrigatório'),
    password: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .nonempty('Senha obrigatória'),
  });

  type LoginFormType = z.infer<typeof LoginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormType) => {
    try {
      signIn(data.email, data.password);
    } finally {
      navigate('/');
    }
  };

  return (
    <LoginMain>
      <LoginWrapper>
        <LoginSideBar>
          <LogoWrapper>
            <img src={logoIntelbras} alt="Logo" />
          </LogoWrapper>
          <h2> Faça seu login e conecte-se com a natureza!</h2>
        </LoginSideBar>

        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <LoginSection>
            <div>
              <InputWrapper>
                <Input type="text" aria-label="email" placeholder="E-mail" {...register('email')} />
                <InputIcon path="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
              </InputWrapper>
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <InputWrapper>
                <Input
                  type="password"
                  aria-label="password"
                  placeholder="Senha"
                  {...register('password')}
                />
                <InputIcon path="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z" />
              </InputWrapper>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </LoginSection>
          <ForgotLink href="/forgot">Esqueci minha senha</ForgotLink>

          <MyButton type="submit">ENTRAR</MyButton>

          <FormRegisterWrapper>
            Não tem uma conta?&nbsp;
            <a href="/register">Cadastre-se</a>
          </FormRegisterWrapper>
        </LoginForm>
      </LoginWrapper>
    </LoginMain>
  );
};
