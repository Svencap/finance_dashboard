import { FC, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Avatar,
  Box,
  AvatarBadge,
} from "@chakra-ui/react";


interface CarouselProps {}

const CarouselSlider: FC<CarouselProps> = () => {
  const buttonNavigate = [0, 1, 2];

  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      if (activeButton == 2) {
        clearInterval(slide);
      } else setActiveButton((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(slide);
  }, [activeButton]);

  return (
    <Card
      maxW="xl"
      bg="white"
      height="600px"
      top="15%"
      position="absolute"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CardBody
        maxW="md"
        className="active"
        display="flex"
        justifyContent="center"
      >
        <Stack
          spacing="5"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            size="xl"
            name="Segun Adebayo"
            src="https://bit.ly/code-beast"
          />
          <Text as={"b"} fontSize="2xl" color="#4080D6">
            UX Circle changed my life!
          </Text>
          <Text color={"#CDCDCD"}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="#4080D6" fontWeight={"bold"} fontSize="md">
            Jonh Carter
          </Text>
          <Text color="#4080D6" fontSize="md">
            San Francisco, CA
          </Text>
        </Stack>
      </CardBody>
      <CardFooter display="flex" justifyContent="center">
        <ButtonGroup spacing="2">
          {buttonNavigate.map((idx) => {
            return (
              <Box
                key={idx}
                as="button"
                height="14px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="1px"
                px="6px"
                borderRadius="50%"
                fontSize="14px"
                bg={activeButton === idx ? "#3278E7" : "#DFF1FF"}
                borderColor="#3278E7"
                color="#3278E7"
                _active={{
                  bg: "#3278E7",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                onClick={() => setActiveButton(idx)}
              ></Box>
            );
          })}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CarouselSlider;
