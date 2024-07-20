import { Flex, Text } from "@chakra-ui/react";
import loadingImage from "../assets/LoadingImage.png";
const LoadingIndicator = () => {
  return (
    <Flex
      style={{
        background: `url(${loadingImage})`, backgroundSize: "cover",
        position: "absolute",
        width: "300px",
        height: "300px",
        top: "127px",
        left: "567px",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text mr={'100px'} mt={'20px'}>Loading</Text>
    </Flex>
  );
};
export default LoadingIndicator;
