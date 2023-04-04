import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
import { NavbarSimple } from "./navbar";
import { useState } from 'react';
import {

  Navbar,

  Aside,

  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export const ApplicationContainer = ({ //@ts-ignore
    children }) => {
  // return (
  //   <AppShell
  //     styles={{
  //       main: {
  //           backgroundColor: 'black',
  //           width: '100vw',
  //           height: '100vh',
  //           paddingLeft: '0px',


  //       }
  //     }}
  //     fixed
  //     footer={<Footer height={60} p= 'md'>
  //       <Group position="apart" spacing='xl'>
  //           <Text size='sm'>
           
  //           </Text>
  //           <Text size='sm'>
  //           <span style={{fontWeight: "bolder"}}>
  //                BuffaLogs 
  //               </span> 2023
  //           </Text>             
  //       </Group>

  //     </Footer>}
  //   //   header={<Header height={50} p='md'>
  //   //     hello
  //   //   </Header>}
  //   navbar={<NavbarSimple/>}
  //   >
  //     {children}
  //   </AppShell>
  // );

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={//@ts-ignore
        <NavbarSimple p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          
        </NavbarSimple>
      }

      footer={
        <Footer height={60} p= 'md'>
        <Group position="apart" spacing='xl'>
            <Text size='sm'>
           
            </Text>
            <Text size='sm'>
            <span style={{fontWeight: "bolder"}}>
                 BuffaLogs 
                </span> 2023
            </Text>             
        </Group>

      </Footer>
      }
      // header={
      //   <Header height={{ base: 50, md: 70 }} p="md">
      //     <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      //       <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //         <Burger
      //           opened={opened}
      //           onClick={() => setOpened((o) => !o)}
      //           size="sm"
      //           color={theme.colors.gray[6]}
      //           mr="xl"
      //         />
      //       </MediaQuery>

      //       <Text>Application header</Text>
      //     </div>
      //   </Header>
      // }
    >
      {children}
    </AppShell>
  );
};