import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';
import { useEffect, useState } from 'react';

export default function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
          <VStack key={idx} w='full'>
            <Skeleton w='full'>
              <Box key={idx} h='300px'>
                contents wrapped
              </Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
        </>
      )}
    </Grid>
  );
}
