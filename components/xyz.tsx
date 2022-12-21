/* eslint-disable react-hooks/rules-of-hooks */
import { createStyles, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from '@tabler/icons';
import { responsePathAsArray } from 'graphql';

import React, { useState, useEffect } from 'react'
import {createClient} from 'urql';


const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};


//can i provide my fetched data here?



interface StatsGridProps {
  data: { title: string; icon: keyof typeof icons; value: string; diff: number }[];
}

export function StatsGrid({ data}: StatsGridProps) {





//   const APIURL = "https://api.thegraph.com/subgraphs/name/messari/sushiswap-polygon"

//   const query = `
//   query {
//     deposits(where: {
//       from: "0x47b0ec1bea7d8ecc7cf70c3bf82c5f5d15a96b6d"
//     }) {
//       timestamp
//       from
//       inputTokens { id name }
//       outputToken { id name }
//       inputTokenAmounts
//       outputTokenAmount
//       amountUSD
//       pool { id }
//     }
    
//       withdraws(where: {
//       from: "0x47b0ec1bea7d8ecc7cf70c3bf82c5f5d15a96b6d"
//     }) {
//       timestamp
//       from
//       inputTokens { id name }
//       outputToken { id name }
//       inputTokenAmounts
//       outputTokenAmount
//       amountUSD
//       pool { id }
//     }
//   }
  
//   `
//   // the issue it seems is i need to map the data, cause i cant get the timestamp from directl

//   const client = createClient({
//     url: APIURL,
//   })

//   async function fetchdata() {
//     const response = await //@ts-ignore
//     client.query(query).toPromise()
//     const { //@ts-ignore
//       data2} = await response
//     console.log(`data2:`,data2.deposits.timestamp)

//     data2.map((datapoint: any) => {
//       console.log(`datapoint:`,datapoint)
//     })
    
//     //console.log(`response:`,response)
//   }


// useEffect(() => {
//  fetchdata()      
// },[])







  const { classes } = useStyles();
  
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text
            color={stat.diff > 0 ? 'teal' : 'red'}
            size="sm"
            weight={500}
            className={classes.diff}
          >
            <span>{stat.diff}%</span>
            <DiffIcon size={16} stroke={1.5} />
          </Text>
        </Group>

        <Text size="xs" color="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  );
}