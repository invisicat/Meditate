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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
