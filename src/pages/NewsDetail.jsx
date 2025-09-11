import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  Skeleton,
  Alert,
  AlertIcon,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

// 🔥 Volitelně: pokud používáš Firebase, odkomentuj a použij tento import
// import { db } from '../../firebase/config';
// import { doc, getDoc } from 'firebase/firestore';

// 📌 Záložní lokální zdroj (když nepoužijeme Firestore nebo nepřišla data přes state)
const FALLBACK_NEWS = [
  {
    id: 1,
    date: '11.09.2025',
    title: 'Parkovací senzory',
    content:
      'Přidal jsem do aplikace možnost označit, zda má vozidlo parkovací senzory. Pomožte sobě i ostatním a pojďte označit všechna auta. Děkuji Vám a přeji příjemnou a bezpečnou cestu.',
  },
];

const MotionContainer = motion.create(Container);

export default function NewsDetail() {
  // 🧭 Parametr ID z URL
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 🧱 Stav načítání a data
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const [error, setError] = useState('');

  // 🧮 Přednostně vezmeme data z router state (rychlejší UX), jinak fallback/Firestore
  const stateNews = location.state;

  // 📌 Najdeme záznam ve fallbacku, když není state a nepoužíváme Firestore
  const fallbackItem = useMemo(() => {
    const numericId = Number(id);
    return FALLBACK_NEWS.find(n => Number(n.id) === numericId) || null;
  }, [id]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);

        // 1) Máme data v router state → použijeme je
        if (stateNews) {
          if (isMounted) setNews(stateNews);
          return;
        }

        // 2) 🔥 Pokud chceš číst z Firestore, odkomentuj tento blok
        /*
        const ref = doc(db, 'news', String(id));
        const snap = await getDoc(ref);
        if (snap.exists()) {
          if (isMounted) setNews({ id, ...snap.data() });
          return;
        }
        */

        // 3) Fallback lokální data (dev/staging)
        if (fallbackItem) {
          if (isMounted) setNews(fallbackItem);
          return;
        }

        // 4) Když nic nenajdeme
        if (isMounted) setError('Zpráva nebyla nalezena.');
      } catch (e) {
        if (isMounted) setError('Při načítání došlo k chybě.');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, [id, stateNews, fallbackItem]);

  const [isOpen, setIsOpen] = useState(true);
  const [startX, setStartX] = useState(0);

  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate('/news'), 500);
  };

  // Початок свайпу
  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
  };

  // Закінчення свайпу
  const handleTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;

    // Якщо рух вгору (координата зменшується), закриваємо меню
    if (startX - endX > 50) {
      onClose();
    }
  };

  return (
    <Box position="sticky" top={0} zIndex="3">
      <MotionContainer
        maxW={'none'}
        h={'calc(100vh - 65px)'}
        position="absolute"
        top={0}
        style={{
          padding: 0,
          zIndex: 9999,
        }}
        bg="#fff"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        initial={{ left: '-100%', opacity: 0 }}
        animate={
          isOpen ? { left: 0, opacity: 1 } : { left: '-100%', opacity: 0 }
        }
        transition={{
          left: { duration: 0.5 },
          opacity: { duration: 0.5 },
        }}
      >
        {/* ⏳ Stav načítání */}
        {loading && (
          <Box>
            <Skeleton height="28px" mb={3} />
            <Skeleton height="18px" mb={2} />
            <Skeleton height="18px" mb={2} />
            <Skeleton height="18px" mb={2} />
          </Box>
        )}

        {/* ❗ Chyba / nenalezeno */}
        {!loading && error && (
          <>
            <IconButton
              size={'sm'}
              icon={<ArrowBackIcon />}
              onClick={onClose}
              aria-label="Zpět"
            />
            <Alert status="error" borderRadius="md" mt={2}>
              <AlertIcon />
              {error}
            </Alert>
          </>
        )}

        {/* ✅ Obsah zprávy */}
        {!loading && !error && news && (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={{ base: 3, md: 5 }}
            boxShadow="sm"
            bg="white"
            minH={'calc(100vh - 85px)'}
            overflowY="auto"
            className="no-scrollbar"
          >
            <Flex mb={4} alignItems="center" justifyContent="space-between">
              {/* 🔙 Tlačítko zpět */}
              <IconButton
                size={'sm'}
                icon={<ArrowBackIcon />}
                onClick={onClose}
                aria-label="Zpět"
              />

              {/* 📅 Datum */}
              <Text fontSize="sm" color="gray.500" mb={4}>
                {news.date}
              </Text>
            </Flex>

            {/* 📰 Titulek */}
            <Heading as="h1" size={{ base: 'md', md: 'lg' }} mb={2}>
              {news.title}
            </Heading>

            <Divider mb={{ base: 3, md: 4 }} />

            {/* 📄 Obsah */}
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.7}>
              {news.content}
            </Text>
          </Box>
        )}
      </MotionContainer>
    </Box>
  );
}
