import React, { useState, useEffect, useRef } from 'react';
import { Drawer, Toolbar, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jwtDecode, JwtPayload } from "jwt-decode";
import MenuIcon from '@mui/icons-material/Menu';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DashboardContainer, MainContent, FormContainer, InputsContainer, FormGrid, StyledInput, UploadButton, HiddenInput, ImagePreview, RemoveButton, UploadWrapper, ButtonSubmit } from './style';
import MapPicker from '../../components/MapPicker';
import { useToast } from '../../hooks/toast';

const drawerWidth = 120;

interface CustomJwtPayload extends JwtPayload {
  username?: string;
}

export default function RegistrationCompany() {
  const { addToast } = useToast();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [username, setUsername] = useState<string | undefined>(''); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); 
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  let toastShown = false; // Flag global para rastrear exibição do toast

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const files = Array.from(e.target.files);

    setImages((prevImages) => {
      // Verificar se o limite de 5 imagens já foi atingido
      if (prevImages.length >= 5) {
        if (!toastShown) {
          addToast({
            type: 'error',
            title: 'Limite de Imagens Atingido',
            description: 'Você só pode adicionar até 5 imagens.',
          });
          toastShown = true; // Marca o toast como mostrado
          setTimeout(() => (toastShown = false), 3000); // Reseta a flag após 3 segundos
        }
        return prevImages; // Retorna o estado atual sem alterações
      }

      // Calcular os slots restantes
      const remainingSlots = 5 - prevImages.length;

      // Adicionar apenas arquivos que não excedem o limite de 5
      const newImages = files
        .slice(0, remainingSlots) // Limita o número de arquivos a serem adicionados
        .filter((file) => !prevImages.some((img) => img.file.name === file.name))
        .map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        }));

      if (files.length > remainingSlots && remainingSlots > 0) {
        if (!toastShown) {
          addToast({
            type: 'error',
            title: 'Imagens Excedentes',
            description: `Apenas ${remainingSlots} imagem(ns) adicional(is) pode(m) ser carregada(s).`,
          });
          toastShown = true; // Marca o toast como mostrado
          setTimeout(() => (toastShown = false), 3000); // Reseta a flag após 3 segundos
        }
      }

      return [...prevImages, ...newImages];
    });

    // Limpar o input para permitir reuso
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }
};

  
  
  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  
  const handleDashboardBack = () => {
    navigate('/dashboard'); 
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
        <Box onClick={handleDashboardBack} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , bgcolor: "#1E1E1E", width:'50px', height: '50px', borderRadius: '12px', cursor: 'pointer',  '&:hover': {
          opacity: '0.8'
        },}}>
           <FaArrowLeft size={25} color='#79747E' />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
        <img src="/img/logo-ifes.svg" alt="IFES Logo" style={{ width: 40}} />
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
        <FormContainer>
            <h1>FACILITY AND CONTACT</h1>
            <InputsContainer>
            <MapPicker ></MapPicker>

            <FormGrid>
              <StyledInput type="text" placeholder="Company name" name='company-name' style={{ gridColumn: "1 / -1" }}/>
              <StyledInput type="tel" placeholder="Telephone" />
              <StyledInput type="text" placeholder="Contact person" />
              <StyledInput type="email" placeholder="E-mail" />
              <StyledInput type="date" placeholder="Date of this form" />
            </FormGrid>
            </InputsContainer>
            <h3>Images</h3>
   
            <UploadWrapper>
      {/* Botão que chama o input[type="file"] */}
      <UploadButton type="button" onClick={handleButtonClick}>
        +
      </UploadButton>

      {/* Input file oculto */}
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      {/* Pré-visualização das imagens */}
      {images.map((image, index) => (
        <ImagePreview key={index}>
          <img
            src={image.preview}
            alt={`Preview ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <RemoveButton onClick={() => removeImage(index)}>×</RemoveButton>
        </ImagePreview>
      ))}
    </UploadWrapper>
    <ButtonSubmit>Save</ButtonSubmit>
        </FormContainer>
      </MainContent>
    </DashboardContainer>
  );
}