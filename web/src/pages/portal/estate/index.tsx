import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../../styles/neonLaw';
import { Button } from '../../../components/button';
import { GiReceiveMoney } from 'react-icons/gi';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import { ResponsiveBar } from '@nivo/bar';
import { useIntl } from 'react-intl';

const data = [
  {
    'education': 129,
    'entertainment': 113,
    'fees': 193,
    'food': 39,
    'health': 106,
    'utilities': 21,
    'week': '2/8-2/14',
  },
  {
    'education': 165,
    'entertainment': 177,
    'fees': 49,
    'food': 115,
    'health': 86,
    'utilities': 158,
    'week': '2/15-2/21',
  },
  {
    'education': 180,
    'entertainment': 187,
    'fees': 114,
    'food': 56,
    'health': 180,
    'utilities': 43,
    'week': '2/22-2/28',
  },
  {
    'education': 51,
    'entertainment': 148,
    'fees': 97,
    'food': 56,
    'health': 83,
    'utilities': 76,
    'week': '3/1-3/7',
  }
];


const EstatePage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.estate.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.estate.text' })}
        </Text>
      </Box>
      <Heading fontWeight="normal" as="h3" marginTop="1em">
        Recent Expenses
      </Heading>
      <Box height="20em">
        <ResponsiveBar
          data={data}
          keys={[
            'food',
            'entertainment',
            'fees',
            'utilities',
            'health',
            'education'
          ]}
          indexBy="week"
          margin={{ bottom: 50, left: 60, right: 130, top: 50 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ round: true, type: 'band' }}
          colors={{ scheme: 'nivo' }}
          defs={[
            {
              background: 'inherit',
              color: '#38bcb2',
              id: 'dots',
              padding: 1,
              size: 4,
              stagger: true,
              type: 'patternDots',
            },
            {
              background: 'inherit',
              color: '#eed312',
              id: 'lines',
              lineWidth: 6,
              rotation: -45,
              spacing: 10,
              type: 'patternLines',
            }
          ]}
          fill={[
            {
              id: 'dots',
              match: {
                id: 'health'
              },
            },
            {
              id: 'lines',
              match: {
                id: 'fees'
              },
            }
          ]}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            legend: 'week',
            legendOffset: 32,
            legendPosition: 'middle',
            tickPadding: 5,
            tickRotation: 0,
            tickSize: 5,
          }}
          axisLeft={{
            legend: 'expenses',
            legendOffset: -40,
            legendPosition: 'middle',
            tickPadding: 5,
            tickRotation: 0,
            tickSize: 5,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          legends={[
            {
              anchor: 'bottom-right',
              dataFrom: 'keys',
              direction: 'column',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ],
              itemDirection: 'left-to-right',
              itemHeight: 20,
              itemOpacity: 0.85,
              itemWidth: 100,
              itemsSpacing: 2,
              justify: false,
              symbolSize: 20,
              translateX: 120,
              translateY: 0,
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Box>
      <Heading fontWeight="normal" as="h3" marginTop="1em">
        Upcoming Dispersements
      </Heading>
      <List spacing={2}>
        <ListItem
          padding={1}
          cursor="pointer"
          _hover={{ bg: 'teal.600', color: 'white' }}
        >
          <ListIcon as={GiReceiveMoney} />
          $500 to Sister Sally on March 15, 2021
        </ListItem>
        <ListItem
          padding={1}
          cursor="pointer"
          _hover={{ bg: 'teal.600', color: 'white' }}
        >
          <ListIcon as={GiReceiveMoney} />
          $500 to Brother Bob on March 15, 2021
        </ListItem>
        <ListItem
          padding={1}
          cursor="pointer"
          _hover={{ bg: 'teal.600', color: 'white' }}
        >
          <ListIcon as={GiReceiveMoney} />
          $100 to Alumni Alma Mater on March 15, 2021
        </ListItem>
      </List>
      <Button marginTop="1em">
        Create a dispersment
      </Button>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default EstatePage;
