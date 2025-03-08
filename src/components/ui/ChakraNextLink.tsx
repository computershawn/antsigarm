import NextLink from 'next/link';

import { Link as ChakraLink } from '@chakra-ui/react';

export const ChakraNextLink = ({
  external,
  link,
  styles,
  children,
}: {
  external?: boolean;
  link: string;
  styles?: any;
  children: React.ReactNode;
}) => {
  const linkProps = {
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  };

  return (
    <ChakraLink asChild style={styles}>
      <NextLink href={link} {...linkProps}>
        {children}
      </NextLink>
    </ChakraLink>
  );
};
