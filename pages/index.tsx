import { GetServerSideProps } from 'next';
import Head from 'next/head';

import SEO from '@/components/SEO';
import { PageProps } from '@/typings/page';

const Home = ({ title, seo }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <SEO title={seo.title} url={seo.url} description={seo.description} name={seo.name} keywords={seo.keywords} />
      </Head>
      test
    </>
  );
};

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: `HOME | CMS`,
      seo: {
        title: `url Home`,
        url: 'url',
        description: `url Home page`,
        name: `url Home`,
        keywords: `Home`,
      },
    },
  };
};

export default Home;
