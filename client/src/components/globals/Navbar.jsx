import {
  Box,
  Flex,
  Image,
  MenuList,
  MenuItem,
  Icon, Menu, MenuButton,
  Button as ChakraButton,
  useDisclosure
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { NavLink, useNavigate} from "react-router-dom";
import DropdownButton from "../home/ui/DropdownButton";
import Button from "../ui/Button";
import main_logo from "../../assets/transparent_tena_logo.png";
import text_logo from "../../assets/tena_text_logo.png";

import AUMenu from "./AboutUsMenu"
import PMenu from "./ProgramsMenu"
import GIMenu from "./GetInvolvedMenu"


import Lock from "../../assets/Locked.png"

export default function Navbar() {
  const menuAnimation={
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  };


  return (
    <Box
      as="nav"
      justifyContent="space-between" 
      display="flex"

      position="sticky"
      top="0"
      zIndex="1000"

      bg="rgb(255, 255, 255)"
      w="100%"

      px= "2%"
      boxShadow="sm"
      height="10vh"


    >
      <Flex align="center" gap={0} height="100%">
        {/* Logo Section */}
        <NavLink to="/">
            <Image
              src={main_logo} 
              alt="TENA Logo"
              width={{base: 35, lg: 51}}
              height={{base: 30, lg: 45}}
            />
        </NavLink>
        <NavLink to="/">
            <Image
              src={text_logo}
              alt="TENA Text Logo"
              width={{base: 120, lg: 140}}
              height={{base: 38, lg: 37}}
              display={{ base: "none", md: "flex" }}
            />
        </NavLink>
        </Flex>

        {/* Navigation Links */}
        <Flex
        align="center" gap={{base: 5, lg: 8}} height="100%"
        //display={{ base: "none", md: "flex" }} // hide on mobile for now
        >
          <AUMenu></AUMenu>

          <PMenu></PMenu>

          <GIMenu></GIMenu>

          <NavLink to="/donate" style={{ display: 'flex', alignItems: 'center' }}>
            <Button width="7vw"
                    height="6vh"
                    fontWeight="600"
                    fontSize={{base: 16, lg: 20}}           
            >Donate</Button>
          </NavLink>



          <NavLink to="/login" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={Lock} ml={10} width={{base: 5, lg: 6}} height={{base: 5, lg: 6}}></Image>
          </NavLink>
        </Flex>
    </Box>
  );
}
