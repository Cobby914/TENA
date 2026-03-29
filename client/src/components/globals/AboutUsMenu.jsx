import React from 'react';
import { 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Button as ChakraButton, 
  Icon, 
  useDisclosure 
} from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react'; 
import { NavLink, useNavigate } from 'react-router-dom';

const GetInvolvedMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleMainClick = () => {
    navigate('/about');
  
  };
    const menuAnimation={
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <Menu isOpen={isOpen} isLazy gutter={0}>
      <MenuButton
        as={ChakraButton}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={handleMainClick}
        rightIcon={<Icon as={ChevronDown} boxSize={{ base: "12px", lg: "18px" }} />}
        bg="#FFFFFF"
        justifyContent="space-between"
        textAlign="left"
        rounded="4"
        
        color="black"
        fontWeight="600"
        fontSize= {{base: 16, lg: 18}}
        width ="auto"
        height="6vh"
        px = "1vw"
        borderRadius={4}
      >
        About Us
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minW="100%"
        w = {{base: "100px", md: "140px"}}
        p="0"
        align="center"
        borderRadius="none"
        rounded="0"
        motionProps={menuAnimation} 
      >
        <MenuItem 
          as={NavLink} 
          to="/team" 
          width="auto" 
          height="auto" 
          borderRadius="none" 
          fontSize={{base: "8px", md: "16px"}}
        >
          Our Team
        </MenuItem>

        <MenuItem 
          as={NavLink} 
          to="/board" 
          width="auto"
          height="auto" 
          borderRadius="none" 
          fontSize={{base: "8px", md: "16px"}}
        >
          Our Board
        </MenuItem>

        <MenuItem 
          as = {NavLink}
          to = "/partners"
          target="_blank" 
          rel="noopener noreferrer"
          width="auto" 
          height="auto" 
          borderRadius="none" 
          fontSize={{base: "8px", md: "16px"}}
        >
          Our Partners
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GetInvolvedMenu;