import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO() {
  const router = useRouter();

  return (
    <Head>
      <title>Meditate - Clear your mind.</title>
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Meditate - Clear your mind." />
      <meta
        property="og:description"
        content="Meditate is a meditation app that helps you clear your mind."
      />
      <meta property="og:image" content="https://meditate.app/og-image.png" />
      <meta
        property="og:url"
        content={`https://meditate.app${router.pathname}`}
      />
      <meta property="og:type" content="website" />
    </Head>
  );
}
