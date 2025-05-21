import {
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from 'styles/colors';

const CarDamageButton = ({ car, setOpenModalEdit }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleClick = e => {
    e.preventDefault();
    if (car.spz) {
      navigate(`/car-damage?spz=${car.spz}`);
    } else {
      onOpen(); // відкриває діалог якщо SPZ нема
    }
  };

  return (
    <>
      <IconButton
        size="sm"
        color="red.500"
        icon={<FaExclamationTriangle />}
        aria-label="Upravit auto"
        onClick={handleClick}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            maxW={{ base: '90%', sm: '80%', md: '600px', lg: '800px' }}
          >
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              Chybí registrační číslo
            </AlertDialogHeader>

            <AlertDialogBody textAlign="center">
              Registrační číslo vozidla nebylo zadáno. Chcete ho zadat nyní?
            </AlertDialogBody>

            <AlertDialogFooter justifyContent="center">
              <Button ref={cancelRef} onClick={onClose}>
                Později
              </Button>
              <Button
                bg={colors.primary}
                color="white"
                onClick={() => {
                  onClose();
                  setOpenModalEdit();
                }}
                ml={3}
              >
                Zadat SPZ
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CarDamageButton;
