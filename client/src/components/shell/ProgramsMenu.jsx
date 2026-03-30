import { 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Button as ChakraButton, 
  Icon, 
  useDisclosure, Center, VStack, Spinner, Text 
} from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react'; // Or your specific icon library
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { createProgram } from "../../hooks/createProgram";

const ProgramMenu = () => {
    const {prog, loading, error} = createProgram();

    const { isOpen, onOpen, onClose } = useDisclosure();
      const navigate = useNavigate();
      const handleMainClick = () => {
        navigate('/programs');
      
      };

        const menuAnimation={
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      };


  const programList = prog ?? [];

    return (

    <Menu isOpen={isOpen} isLazy gutter={0}>
      <MenuButton
        as={ChakraButton}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={handleMainClick}
        rightIcon={<Icon as={ChevronDown} boxSize={{ base: "12px", lg: "18px" }} />}
        bg="#FFFFFF"
        _hover={{ bg: "gray.200" }}
        _expanded={{ bg: "gray.200" }}
        color="black"
        fontWeight="600"
        fontSize={{ base: 16, lg: 18 }}
        height="6vh"
        px="1vw"
        borderRadius={4}
      >
        Programs
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minW="100%"
        w={{ base: "120px", md: "180px" }}
        p="0"
        borderRadius="none"
        rounded="0"
      >

        {loading && (
          <Center p={4}>
            <Spinner size="sm" color="blue.500" mr={3} />
            <Text fontSize="sm" color="gray.600">Loading...</Text>
          </Center>
        )}
        {error && !loading && (
          <Box p={2}>
            <Alert status="error" fontSize="xs" py={1}>
              <AlertIcon size="xs" />
              {error}
            </Alert>
          </Box>
        )}

        {programList.map((data) => (
          <MenuItem 
            key={data.id}
            as={NavLink} 
            to={data.link} 

            _hover={{ bg: "gray.100" }}
            width="auto" 
            height="auto" 
            borderRadius="none"
            fontSize= {{base: "8px", md: "16px"}}
          >
            {data.title}
          </MenuItem>
        ))}
       
      </MenuList>
    </Menu>

    );
};

export default ProgramMenu