import Image from 'next/image';
import styles from './page.module.css';
import { HStack } from '@chakra-ui/react';
import { ColorModeButton } from '../components/ui/color-mode';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <HStack>
          <ColorModeButton />
        </HStack>
      </main>
      <footer className={styles.footer}>this is footer content</footer>
    </div>
  );
}
