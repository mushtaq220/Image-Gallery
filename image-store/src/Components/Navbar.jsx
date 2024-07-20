import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  Icon,
  MoonIcon,
  StarIcon,
} from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import {
  useColorMode,
  Switch,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMedium } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navRightContent = {
    height: "15px",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "15px",
    letterSpacing: "0em",
    textAlign: "left",
  };
  return (
    <Flex
      
      height="97px"
      justify="center"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"
      position="sticky"
      top="0"
      zIndex="sticky"
      m="auto"
      bg={colorMode==='light'?"white":"green"}
    >
      {/* Logo on larger screen starts */}
      <Text
        w="170px"
        h="42px"
        m="30px 0 0 8px"
        fontWeight="400"
        fontFamily="'Pattaya', sans-serif"
        lineHeight="42px"
        letterSpacing="0em"
        fontSize={{ md: "13px" }}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        Images Gallery
      </Text>
      {/* Logo on larger screen ends */}

      {/* Logo on mobile screen starts */}
      <Flex
        align={"center"}
        m="8px 0 0 15px"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <AiOutlineMedium size={"30px"} />
      </Flex>
      {/* Logo on mobile screen ends */}

      {/* Searchbar for desktop */}
      <SearchBar onSearch={onSearch} />

      <Spacer display={{ lg: "none" }} />

      {/* Light/Dark Mode for Mobile */}
      {colorMode === "light" ? (
        <Box
          onClick={toggleColorMode}
          display={{ lg: "none" }}
          fontSize="30px"
          color="gray"
          margin="auto 30px"
        >
          <Icon as={MoonIcon} />
        </Box>
      ) : (
        <Box
          onClick={toggleColorMode}
          display={{ lg: "none" }}
          fontSize="30px"
          color="gray"
          margin="auto 30px"
        >
          <Icon as={StarIcon} />
        </Box>
      )}

      {/* Hamburger icon for mobile */}
      <Flex
        onClick={onOpen}
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        align="center"
        fontSize="30px"
        m="8px 15px 0 0"
      >
        <RxHamburgerMenu />
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            fontFamily="cursive"
            fontWeight="extrabold"
            display="flex"
            flexDirection="column"
            gap="1rem"
            mt="2rem"
          >
            <Button>Search</Button>
            <Button>Explore</Button>
            <Button>Collection</Button>
            <Button>Community</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        align={"center"}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Flex justify={"center"} align={"center"} w={"259px"} h={"15px"}>
          <Text style={navRightContent} w={"48px"}>
            Explore
          </Text>
          <Text style={navRightContent} w={"64px"}>
            Collection
          </Text>
          <Text style={navRightContent} w={"67px"}>
            Community
          </Text>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        w={"113px"}
        h={"19px"}
        m={"39px"}
        borderRadius={"9.5px"}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Text
          w="69px"
          h="15px"
          fontFamily="Montserrat"
          fontSize="12px"
          fontWeight="700"
          lineHeight="15px"
          letterSpacing="0em"
          textAlign="left"
        >
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          w="38px"
          h="19px"
          borderRadius="9.5px"
          border="0.83px"
          onChange={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};
export default Navbar;
