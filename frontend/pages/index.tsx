import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, SideBar } from '../components';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <div className="flex flex-wrap w-full">
        <div className="w-full h-fit">
          <Header />
        </div>

        <div className="w-full h-full flex flex-wrap"></div>
      </div>
    </div>
  );
};

export default Home;
