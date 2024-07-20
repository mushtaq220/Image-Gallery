import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const color = useColorModeValue("black", "white");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      onSearch(query);
    }, 500);
  }, [query]);

  return (
    <Flex>
      <InputGroup
        w={{ base: "200px", sm: "300px", md: "500px", lg: "419px" }}
        h={"43px"}
        borderRadius={"6px"}
        top={"29px"}
        borderColor={color}
        ml={{ base: "40px" }}
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Images here"
          focusBorderColor={color}
          color={color}
          _placeholder={{ color }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchBar;
