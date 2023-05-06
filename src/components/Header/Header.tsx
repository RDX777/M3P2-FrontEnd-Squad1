import { useEffect, useState } from 'react';
import { Submenu } from '../Submenu';
import {
  HeaderStyled,
  PublicNavLinksStyled,
  PublicNavLinksWrapper,
  NavLogoStyled,
  NavStyled,
} from './HeaderStyled';
import { PlaceMenu } from '../../interfaces/local.interface';
import { GetLocals } from '../../services';
import { useLocals } from '../../hooks/useLocals';

type HeaderProps = {
  Authenticated: boolean;
};
export const Header = ({ Authenticated }: HeaderProps) => {
  const { dataChanged } = useLocals();
  const [places, setPlaces] = useState<PlaceMenu[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (Authenticated && token) {
      GetLocals()
        .then((res) => {
          setPlaces(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [Authenticated, dataChanged]);

  return (
    <HeaderStyled>
      <NavStyled>
        <div>
          <NavLogoStyled>Farm Metrics</NavLogoStyled>
        </div>

        {Authenticated ? (
          <Submenu places={places} />
        ) : (
          <PublicNavLinksWrapper>
            <PublicNavLinksStyled to={'/'}>Entrar</PublicNavLinksStyled>
            <PublicNavLinksStyled to={'/register'}>Criar conta</PublicNavLinksStyled>
          </PublicNavLinksWrapper>
        )}
      </NavStyled>
    </HeaderStyled>
  );
};
