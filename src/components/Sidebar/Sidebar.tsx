import { useEffect, useState } from 'react';
import {
  LogoutButton,
  LogoutWrapper,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  SidebarWrapper,
} from './SidebarStyled';

interface User {
  id: string;
  name: string;
  mail: string;
  owner: string;
  phone: string;
  cnpj: string;
}

export const Sidebar: React.FunctionComponent = () => {
  const [selected, setSelected] = useState('home');
  const [user, setUser] = useState<User>([]);

  function setCurrentePage(page) {
    setSelected(page);
    localStorage.setItem('current_page', page);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('place');
    localStorage.removeItem('current_page');
    window.location.href = '/';
  };
  useEffect(() => {
    const currentPage = localStorage.getItem('current_page');
    const getUser = localStorage.getItem('user');
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
    setSelected(currentPage || 'home');
  }, []);
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <h2>{user.name}</h2>
        <h2>Menu</h2>
        <SidebarList>
          <SidebarListItem
            isSelected={selected === 'home'}
            onClick={() => setCurrentePage('home')}
            to={'/'}
          >
            Home
          </SidebarListItem>
          <SidebarListItem
            isSelected={selected === 'locais'}
            onClick={() => setCurrentePage('locais')}
            to={'/locals'}
          >
            Locais
          </SidebarListItem>
          <SidebarListItem
            isSelected={selected === 'sensores'}
            onClick={() => setCurrentePage('sensores')}
            to={'/sensors'}
          >
            Sensores
          </SidebarListItem>
          <SidebarListItem
            isSelected={selected === 'perfil'}
            onClick={() => setCurrentePage('perfil')}
            to={'/profile'}
          >
            Perfil
          </SidebarListItem>
        </SidebarList>
      </SidebarWrapper>
      <LogoutWrapper>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </LogoutWrapper>
    </SidebarContainer>
  );
};
