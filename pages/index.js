import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import {
  Header,
  Hero,
  Discover,
  Deals,
  ValentineDaySection,
  RewardSection,
  BeautyServiceSection,
  CooperateSection,
  FooterSection,
} from "../components/allComponentsExport";
import SubNav from '@/components/SubNav';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SubNav />
      <Hero />
      <Discover />
      <Deals />
      <ValentineDaySection />
      <RewardSection />
      <BeautyServiceSection />
      <CooperateSection />
      <FooterSection />
    </React.Fragment>
  );
}
