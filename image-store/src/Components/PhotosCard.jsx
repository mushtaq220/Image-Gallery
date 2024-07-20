import { AiOutlineLike } from "react-icons/ai";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const PhotosCard = ({ photos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap="2rem"
      columnGap="2rem"
      justifyContent="center"
      w={{ lg: "60%" }}
      m={{ lg: "40px auto" }}
      padding={{ base: "10px 0 0 0", lg: "0" }}
    >
      {photos.length === 0 ? (
        <Text>No search results found.</Text>
      ) : (
        photos.map((photo) => (
          <Box
            key={photo.id}
            onClick={() => handleImageClick(photo)}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={{ lg: "5%" }}
            cursor="pointer"
          >
            <Image
              h="220px"
              w="100%"
              borderTopLeftRadius={{ lg: "5%" }}
              borderTopRightRadius={{ lg: "5%" }}
              src={photo.urls.thumb}
              alt={photo.alt_description}
            />
            <Flex p="10px" justify="space-between" align="center">
              <Flex w="50%" h="100%" gap="10px">
                <Image
                  src={photo.user.profile_image.small}
                  alt={photo.alt_description}
                  borderRadius="100%"
                />
                <Text>{photo.user.first_name}</Text>
                <Text>{photo.user.social.username}</Text>
              </Flex>

              <Flex justify="center" align="center">
                <AiOutlineLike />
                {photo.likes}
              </Flex>
            </Flex>
          </Box>
        ))
      )}
      {selectedImage && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent boxSize={"350px"}>
            <ModalCloseButton />
            <ModalBody>
              <Image
                w={"100%"}
                h={"50%"}
                src={selectedImage.urls.thumb}
                alt={selectedImage.alt_description}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Grid>
  );
};
export default PhotosCard;
