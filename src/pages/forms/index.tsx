import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jwtDecode, JwtPayload } from "jwt-decode";
import MenuIcon from '@mui/icons-material/Menu';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'; // Importando ícones do react-icons/fa
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';
import { DashboardContainer, MainContent } from './style';

const forms = [
  { id: 0, name: "Quarrying Phase", component: <Form1 /> },
  { id: 1, name: "Transportation Phase", component: <Form2 /> },
  { id: 2, name: "Processing Phase", component: <Form3 /> },
];

const drawerWidth = 240;

interface CustomJwtPayload extends JwtPayload {
  username?: string;
}

export default function Forms() {
  const [selectedForm, setSelectedForm] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [username, setUsername] = useState<string | undefined>(''); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); 
  
  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    navigate('/login'); 
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      setUsername(decodedToken.username);
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = ( 
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: '#1A1A1A'
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2}}>
          <img src="/img/logo-ifes.svg" alt="IFES Logo" style={{ width: 30, marginRight: 8 }} />
          <FaUserCircle style={{ marginRight: 8, color: '#3C9A36', fontSize: '1.5rem' }} /> {/* Ícone de perfil */}
          <Typography sx={{ color: '#fefefe' }} variant="body1">{username}</Typography> 
        </Box>

        <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '80vh'}}>
          {forms.map((form, index) => (
            <ListItem key={form.id} disablePadding>
              <ListItemButton
                onClick={() => setSelectedForm(index)}
                sx={{
                  transition: 'border-left 0.2s ease, color 0.2s ease', 
                  paddingY: 6,
                  borderLeft: selectedForm === index ? '10px solid #3C9A36' : '10px solid transparent',
                  color: selectedForm === index ? '#FFFFFF' : '#A9A9A9',
                }}
              >
                <ListItemText primary={form.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 0, borderTop: '2px solid #D8D8D8', bgcolor: '#1e1e1e' }}>
        <ListItemButton 
          sx={{   
            p: 2, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}  
          onClick={handleLogout}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}> 
            <ListItemText primary="Logout" sx={{ color: '#FFFFFF', textAlign: 'center' }} />
            <FaSignOutAlt style={{ color: '#4CAF50' }} />
          </Box>
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <DashboardContainer>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, position: 'absolute', top: 16, left: 16 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle} 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#000' }, 
        }}
        ModalProps={{
          keepMounted: true, 
        }}
      >
        {drawerContent}
      </Drawer>

      <MainContent>
        <div>{forms[selectedForm].component}</div>
      </MainContent>
    </DashboardContainer>
  );
}