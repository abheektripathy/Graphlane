import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export const ApplicationContainer = ({ //@ts-ignore
    children }) => {
  return (
    <AppShell
      styles={{
        main: {
            backgroundColor: 'black',
            width: '100vw',
            height: '100vh',
            paddingLeft: '0px',


        }
      }}
      fixed
      footer={<Footer height={60} p= 'md'>
        <Group position="apart" spacing='xl'>
            <Text size='sm'>
                <span style={{fontWeight: "bolder"}}>
                  🚀 List Time 
                </span> .25 hrs 
            </Text>
            <Text size='sm'>
                <span style={{fontWeight: "bolder"}}>
                   🎉 End Time 
                </span> .25 hrs 
            </Text>             
        </Group>

      </Footer>}
    //   header={<Header height={50} p='md'>
    //     hello
    //   </Header>}
    >
      {children}
    </AppShell>
  );
};