import Link from 'next/link';
import { Button } from '@mantine/core';

export default function Link({ href, text }) {
  return (
    <Link href={href} passHref>
      <Button component="a">{text}</Button>
    </Link>
  );
}