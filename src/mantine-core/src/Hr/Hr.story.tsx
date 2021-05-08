import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Hr } from './Hr';
import { Badge } from '../Badge/Badge';

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 10] as const).map((size) => (
  <Hr style={{ marginTop: 15 }} size={size} key={size} />
));

const getColors = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Hr key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('@mantine/core/Hr', module)
  .add('General usage', () => (
    <div style={{ padding: 20 }}>
      <Hr />
      <Hr variant="dotted" style={{ marginTop: 15 }} />
      <Hr variant="dashed" style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Hr themeOverride={{ colorScheme: 'dark' }} />
      <Hr themeOverride={{ colorScheme: 'dark' }} variant="dotted" style={{ marginTop: 15 }} />
      <Hr themeOverride={{ colorScheme: 'dark' }} variant="solid" style={{ marginTop: 15 }} />
      {getColors({ themeOverride: { colorScheme: 'dark' } })}
    </div>
  ))
  .add('Vertical Hr', () => (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '20%',
          marginTop: 15,
        }}
      >
        <Badge>Light</Badge>
        <Hr orientation="vertical" color="blue" />
        <Badge variant="outline">Outline</Badge>
        <Hr orientation="vertical" color="blue" />
        <Badge variant="filled">Filled</Badge>
      </div>
    </>
  ))
  .add('Sub header', () => (
    <div style={{ padding: 20 }}>
      <Hr subHeader="Test" />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'center' } }}
        style={{ marginTop: 15 }}
      />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'end', fontFamily: 'cursive' } }}
        style={{ marginTop: 15 }}
      />
      <Hr subHeader="Test" subHeaderProps={{ style: { fontSize: 20 } }} style={{ marginTop: 15 }} />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { fontSize: 20 }, color: 'blue' }}
        style={{ marginTop: 15 }}
      />
    </div>
  ));
