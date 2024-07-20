import { useState } from "react";
import axios from "axios";
import PhotosCard from "../Components/PhotosCard";
import Navbar from "../Components/Navbar";
import LoadingIndicator from "./../Components/LoadingIndicator";
import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "../Components/SearchBar";

const Homepage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const color = useColorModeValue("black", "white");
  const { colorMode, toggleColorMode } = useColorMode();

  // Fetch search data
  const fetchSearchResults = (query) => {
    const ACCESS_KEY = "aogW0-mrat76OOW1J8Z_2fggvtprAiGGBftiHH5GdOw";
    setSearchLoading(true);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: ACCESS_KEY,
          query: query,
        },
      })
      .then((response) => {
        setPhotos(response.data.results);
        setSearchLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search data:", error);
        setSearchLoading(false);
      });
  };

  // Fetch default data

  const fetchDefaultData = () => {
    const ACCESS_KEY = "aogW0-mrat76OOW1J8Z_2fggvtprAiGGBftiHH5GdOw";
    setSearchLoading(true);
    axios
      .get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`)
      .then((response) => {
        setPhotos(response.data);
        setSearchLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching default data:", error);
        setSearchLoading(false);
      });
  };
  const handleSearch = (query) => {
    if (query === "") {
      fetchDefaultData();
    } else {
      fetchSearchResults(query);
    }
  };
  return (
    <Box color={color}>
      <Navbar onSearch={handleSearch} />

      <Box>
        {searchLoading ? <LoadingIndicator /> : <PhotosCard photos={photos} />}
      </Box>
    </Box>
  );
};
export default Homepage;

