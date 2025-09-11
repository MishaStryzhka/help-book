import { Container, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';

// 📌 Seznam zpráv (zatím statický, později možno načítat z Firestore)
const NEWS = [
  {
    id: 1,
    date: '11.09.2025',
    title: 'Parkovací senzory',
    content:
      'Přidal jsem do aplikace možnost označit, zda má vozidlo parkovací senzory. Pomožte sobě i ostatním a pojďte označit všechna auta. Děkuji Vám a přeji příjemnou a bezpečnou cestu.',
  },
];

const News = () => {
  // 📌 Stav pro zprávy
  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState(NEWS);

  return (
    <>
      <Helmet>
        <title>Zprávy</title>
      </Helmet>

      <Outlet />

      <Container
        w="100%"
        maxW={{ base: '100%', md: '95vw', xl: '80vw' }}
        p={0}
        position="relative"
        height="calc(100% - 65px)"
        display="flex"
        flexDirection="column"
        overflow="hidden"
      >
        <Grid
          pb={4}
          w="100%"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={{ base: 3, md: 6 }}
          //   flex={1}
          overflow="auto"
          className="no-scrollbar"
        >
          {news.map(newsItem => (
            <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
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
                  {newsItem.title}
                </span>
                {/* <span style={{ fontSize: '14px', color: '#333' }}>
                  {newsItem.content}
                </span> */}
                <span
                  style={{
                    fontSize: '12px',
                    color: '#666',
                    marginLeft: 'auto',
                  }}
                >
                  {newsItem.date}
                </span>
              </Flex>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default News;
