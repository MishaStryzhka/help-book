import { Helmet } from 'react-helmet';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import IconCars from 'components/IconCars';
import { Link } from 'react-router-dom';

const NEWS = [
  {
    id: 1,
    date: '11.09.2025',
    title: 'Parkovací senzory',
    content:
      'Přidal jsem do aplikace možnost označit, zda má vozidlo parkovací senzory. Pomožte sobě i ostatním a pojďte označit všechna auta. Děkuji Vám a přeji příjemnou a bezpečnou cestu.',
  },
];

export default function Home() {
  return (
    <Container
      minH="calc(100vh - 80px)"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Helmet>
        <title>Help-Book</title>
      </Helmet>
      <Flex
        direction="column"
        gap={6}
        w={{ base: '100%', md: '650px' }}
        // align="center"
        justify="center"
        spacing={4}
      >
        <Heading
          margin="auto"
          as="h1"
          fontSize={{ base: '24px', md: '48px' }}
          lineHeight={{ base: '2.6', md: '1.5' }}
          color="#6DA305"
        >
          „Váš osobní Help-Book“
        </Heading>
        <Box margin="auto" width={{ base: '150px', md: '300px' }}>
          <IconCars />
        </Box>
        <Link width="100%" key={NEWS[0].id} to={`/news/${NEWS[0].id}`}>
          <Flex
            w="100%"
            alignItems="flex-start"
            flexDirection="column"
            p={{ base: 2, md: 4 }}
            borderWidth={1}
            borderRadius="md"
            boxShadow="sm"
            _hover={{
              boxShadow: 'md',
              transform: 'scale(1.02)',
              transition: '0.2s',
            }} // 👉 Hover efekt
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#222',
              }}
            >
              {NEWS[0].title}
            </span>
            {/* <span style={{ fontSize: '14px', color: '#333' }}>
                          {NEWS[0].content}
                        </span> */}
            <span
              style={{
                fontSize: '12px',
                color: '#666',
                marginLeft: 'auto',
              }}
            >
              {NEWS[0].date}
            </span>
          </Flex>
        </Link>
      </Flex>
    </Container>
  );
}
