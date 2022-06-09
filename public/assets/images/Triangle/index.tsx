import { Box } from '@chakra-ui/react';
import { ChakraProps } from '@chakra-ui/system';

import './style.css';

const Triangle = (props: ChakraProps) => {
  return <Box className="triangle" {...props} />;
};

export default Triangle;
