import { useEffect, useState } from "react";
import { Button, ButtonContainer, Container, Cursor, Logo, NavBar, NavIcons, Tittle, TittleContainer, Wrapper } from "./style";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { LuBell, LuLogOut } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

interface CustomJwtPayload extends JwtPayload {
  username?: string;
}

const phrases = [
  "Life Cycle Assessment",
  "AI-Powered Assessment",
  "Cloud-Based Life Cycle Tools",
  "Data Insights",
  "Environmental Metrics",
];

export default function Dashboard(){
  const [username, setUsername] = useState<string | undefined>(''); 
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState(""); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); 

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    navigate('/login'); 
  };

  const handleCompanyRegistration = () => {
    navigate('/company-registration'); 
  };

  const handleForms = () => {
    navigate('/forms'); 
  };

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]; 
    if (!isDeleting && charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase[charIndex]); 
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout); 
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1)); 
        setCharIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (charIndex === currentPhrase.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000); 
      return () => clearTimeout(timeout);
    } else if (charIndex === 0 && isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, currentIndex]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      setUsername(decodedToken.username);
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  return (
    <Container>
      <NavBar>
        <Logo>
          <div>
            <img src="/img/logo-ifes.svg" alt="Logo IFES" />
          </div>
  
          <p>{username}</p>
        </Logo>

        <NavIcons>
          <LuBell />
          <LuLogOut onClick={handleLogout}  style={{cursor: "pointer"}}/>
        </NavIcons>
      </NavBar>

      <TittleContainer>

      <Tittle>Simplify Your</Tittle>

      <Wrapper>
       {displayedText}
       <Cursor>_</Cursor>
      </Wrapper>

      </TittleContainer>

      

      <ButtonContainer>
          <Button onClick={handleCompanyRegistration}>
            Fill in your <br/> registration details
          </Button>
          <Button onClick={handleForms}>
            Forms
          </Button>
      </ButtonContainer>
    </Container>
  )
}