/* eslint-disable react/jsx-key */
import { Flex } from "@mantine/core";
import Head from "next/head";

import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";



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
<text>
Welcome, User
</text>
      <div style={{ height: '100%', width: '65%' }}>

<Flex
      mih={50}
      bg="rgba(0,0,0,0)"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
     <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies } : {geographies: any}) =>
          geographies.map((geo: { rsmKey: Key | null | undefined; }) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </Flex>
</div>


      {/* {
      launches.map(
        (launch) => {
          return (
            <h3>{launch.timestamp}</h3>
          );
        }
      )} */}



    </>
  );
}

// export async function getStaticProps() {
//   //this func is first getting the data through the graphql client,
//   // storing it in destructured {data}

//   const Client = new ApolloClient({
//     uri: `https://api.thegraph.com/subgraphs/name/messari/sushiswap-polygon`,
//     cache: new InMemoryCache(),
//   });

//   const { data } = await Client.query({
//     query: gql`
//       {
//         deposits(
//           where: { from: "0xd5da26eae4448e5be3a1133bad3e7a76e86efeb3" }
//         ) {
//           timestamp
//           from
//           inputTokens {
//             id
//             name
//           }
//           outputToken {
//             id
//             name
//           }
//           inputTokenAmounts
//           outputTokenAmount
//           amountUSD
//         }

//         withdraws(
//           where: { from: "0xd5da26eae4448e5be3a1133bad3e7a76e86efeb3" }
//         ) {
//           timestamp
//           from
//           inputTokens {
//             id
//             name
//           }
//           outputToken {
//             id
//             name
//           }
//           inputTokenAmounts
//           outputTokenAmount
//           amountUSD
//         }
//       }
//     `,
//   });

//   console.log("data", data.deposits);
//   //what does props do here?
//   return {
//     props: {
//       launches: data.deposits,
//     },
//   };
// }
