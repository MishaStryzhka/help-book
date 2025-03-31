import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Container } from '@chakra-ui/react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CarLocation() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const carSPZ = searchParams.get('spz') || 'EL111DB';

  return (
    <Container
      w={'100%'}
      maxW={{ base: '100%', md: '95vw', xl: '80vw' }}
      p={0}
      position="relative"
      height="calc(100% - 65px)"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Button
        leftIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        variant="outline"
        colorScheme="gray"
      >
        Zpět
      </Button>
      <Box flexGrow={1}>
        <iframe
          title="CarLocation"
          src={`https://predavak.online/location.php?registacni_znacka=${carSPZ}`}
          height="100%"
          width="100%"
        ></iframe>
      </Box>
    </Container>
  );
}

export default CarLocation;
