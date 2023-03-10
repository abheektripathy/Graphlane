/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { StatsGrid } from "../components/xyz";
import { HeaderMiddle } from "../components/header2";
import { TableReviews } from "../components/table";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(
  {...launches}) { 
    console.log(launches)
  return (
    <>
      <Head>
        <title>Graphlane</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMiddle
        links={[
          {
            link: "/about",
            label: "Home",
          },
          {
            link: "/learn",
            label: "Features",
          },
          {
            link: "/pricing",
            label: "Pricing",
          },
        ]}
      ></HeaderMiddle>
      <h3
        style={{
          paddingLeft: "20px",
          paddingTop: "20px",
          boxSizing: "content-box",
        }}
      >
        hello
      </h3>

      {/* {
      launches.map(
        (launch) => {
          return (
            <h3>{launch.timestamp}</h3>
          );
        }
      )} */}
      <StatsGrid
        data={[
          {
            title: "hjbej",
            icon: "receipt",
            value: "13,456",
            diff: 34,
          },
          {
            title: "Profit",
            icon: "coin",
            value: "4,145",
            diff: -13,
          },
          {
            title: "Coupons usage",
            icon: "discount",
            value: "745",
            diff: 18,
          },
          {
            title: "New customers",
            icon: "user",
            value: "188",
            diff: -30,
          },
        ]}
      ></StatsGrid>
      <br></br>
      <br></br>
    </>
  );
}

export async function getStaticProps() {
  //this func is first getting the data through the graphql client,
  // storing it in destructured {data}

  const Client = new ApolloClient({
    uri: `https://api.thegraph.com/subgraphs/name/messari/sushiswap-polygon`,
    cache: new InMemoryCache(),
  });

  const { data } = await Client.query({
    query: gql`
      {
        deposits(
          where: { from: "0xd5da26eae4448e5be3a1133bad3e7a76e86efeb3" }
        ) {
          timestamp
          from
          inputTokens {
            id
            name
          }
          outputToken {
            id
            name
          }
          inputTokenAmounts
          outputTokenAmount
          amountUSD
        }

        withdraws(
          where: { from: "0xd5da26eae4448e5be3a1133bad3e7a76e86efeb3" }
        ) {
          timestamp
          from
          inputTokens {
            id
            name
          }
          outputToken {
            id
            name
          }
          inputTokenAmounts
          outputTokenAmount
          amountUSD
        }
      }
    `,
  });

  console.log("data", data.deposits);
  //what does props do here?
  return {
    props: {
      launches: data.deposits,
    },
  };
}
