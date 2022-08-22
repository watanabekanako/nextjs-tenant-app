import Head from 'next/head';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>商品詳細ページ</h1>
    </div>
  );
};
export default About;
