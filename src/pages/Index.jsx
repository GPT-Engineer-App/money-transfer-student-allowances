import { Container, VStack, HStack, Box, Text, Heading, Button, IconButton, Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaMoneyBillWave, FaUserGraduate, FaMobileAlt, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Peer-to-Peer Money Transfer & Student Allowances Management
          </Heading>
          <Text fontSize="lg">Easily transfer money and manage student allowances with our secure and user-friendly app.</Text>
        </Box>

        <HStack spacing={8} justify="center">
          <Box textAlign="center">
            <IconButton aria-label="Money Transfer" icon={<FaMoneyBillWave />} size="lg" isRound />
            <Text mt={2}>Instant Money Transfer</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Student Allowances" icon={<FaUserGraduate />} size="lg" isRound />
            <Text mt={2}>Manage Student Allowances</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Mobile Friendly" icon={<FaMobileAlt />} size="lg" isRound />
            <Text mt={2}>Mobile Friendly</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Secure" icon={<FaLock />} size="lg" isRound />
            <Text mt={2}>Secure & Reliable</Text>
          </Box>
        </HStack>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="lg" mb={4}>
            Get Started Today
          </Heading>
          <Text fontSize="md" mb={4}>
            Sign up now and take control of your finances.
          </Text>
          <InputGroup size="md" maxW="md" mx="auto">
            <Input pr="4.5rem" type="email" placeholder="Enter your email" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                Sign Up
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box textAlign="center" py={10} px={6}>
          <Image src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDB8fHx8MTcxNjQwODY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mobile Banking App" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
