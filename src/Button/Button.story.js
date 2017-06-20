import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import FontIcon from '@ox2/icon/FontIcon';

const handler = () => console.log('👻'); // eslint-disable-line no-console

storiesOf('Button', module)
  .addDecorator(getStory =>
    <div className="margin:7">
      {getStory()}
    </div>,
  )
  .add('all', () =>
    <div>
      <div>
        <Button
          btn="raised"
          className="margin:7"
          onClick={handler}
        >
          raised
        </Button>
        <Button
          btn="raised small action sharp"
          className="margin:7"
          onClick={handler}
        >
          mixed
        </Button>
        <Button
          btn="outline small warning rounded"
          className="margin:7"
        >
          mixed
        </Button>
        <Button
          btn="small critical pill"
          className="margin:7"
        >
          mixed
        </Button>
      </div>
      <div>
        <Button
          btn="tiny"
          className="margin:7"
          onClick={handler}
        >
          tiny
        </Button>
        <Button
          btn="small"
          className="margin:7"
          onClick={handler}
        >
          small
        </Button>
        <Button
          btn=""
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="large"
          className="margin:7"
          onClick={handler}
        >
          large
        </Button>
        <Button
          btn="x-large"
          className="margin:7"
          onClick={handler}
        >
          x-large
        </Button>
        <Button
          btn="jumbo"
          className="margin:7"
          onClick={handler}
        >
          jumbo
        </Button>
      </div>
      <div>
        <Button
          btn=""
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="rounded"
          className="margin:7"
          onClick={handler}
        >
          rounded
        </Button>
        <Button
          btn="pill"
          className="margin:7"
          onClick={handler}
        >
          pill
        </Button>
        <Button
          btn="circle"
          className="margin:7"
          onClick={handler}
        >
          C
        </Button>
        <Button
          btn="sharp"
          className="margin:7"
          onClick={handler}
        >
          sharp
        </Button>
        <div className="h:44 margin:7">
          <Button
            btn="block"
            className="margin:7"
            onClick={handler}
          >
            block
          </Button>
        </div>
        <div className="h:44 margin:7">
          <Button
            btn="block-v"
            className="margin:7"
            onClick={handler}
          >
            block-v
          </Button>
        </div>
        <div className="h:44 margin:7">
          <Button
            btn="block-h"
            className="margin:7"
            onClick={handler}
          >
            block-h
          </Button>
        </div>
      </div>
      <div>
        <Button
          btn="circle tiny"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="circle small"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="circle"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="circle large"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="circle x-large"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="circle jumbo"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
      </div>
      <div>
        <Button
          btn="square tiny"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="square small"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="square"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="square large"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="square x-large"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
        <Button
          btn="square jumbo"
          className="margin:7"
          onClick={handler}
        >
          <FontIcon
            className="vertical-align:text-bottom text-color:white display:block"
            group="moon"
            icon="search3"
          />
        </Button>
      </div>
      <div>
        <Button
          btn=""
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="action"
          className="margin:7"
          onClick={handler}
        >
          action
        </Button>
        <Button
          btn="warning"
          className="margin:7"
          onClick={handler}
        >
          warning
        </Button>
        <Button
          btn="critical"
          className="margin:7"
          onClick={handler}
        >
          critical
        </Button>
        <Button
          btn="positive"
          className="margin:7"
          onClick={handler}
        >
          positive
        </Button>
        <Button
          btn="negative"
          className="margin:7"
          onClick={handler}
        >
          negative
        </Button>
        <Button
          btn="highlight"
          className="margin:7"
          onClick={handler}
        >
          highlight
        </Button>
        <Button
          btn="brand"
          className="margin:7"
          onClick={handler}
        >
          brand
        </Button>
      </div>
      <div>
        <Button
          btn="outline tiny"
          className="margin:7"
          onClick={handler}
        >
          tiny
        </Button>
        <Button
          btn="outline small"
          className="margin:7"
          onClick={handler}
        >
          small
        </Button>
        <Button
          btn="outline "
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="outline large"
          className="margin:7"
          onClick={handler}
        >
          large
        </Button>
        <Button
          btn="outline x-large"
          className="margin:7"
          onClick={handler}
        >
          x-large
        </Button>
        <Button
          btn="outline jumbo"
          className="margin:7"
          onClick={handler}
        >
          jumbo
        </Button>
      </div>
      <div>
        <Button
          btn="outline"
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="outline rounded"
          className="margin:7"
          onClick={handler}
        >
          rounded
        </Button>
        <Button
          btn="outline pill"
          className="margin:7"
          onClick={handler}
        >
          pill
        </Button>
        <Button
          btn="outline circle"
          className="margin:7"
          onClick={handler}
        >
          C
        </Button>
        <Button
          btn="outline sharp"
          className="margin:7"
          onClick={handler}
        >
          sharp
        </Button>
        <div className="h:44 margin:7">
          <Button
            btn="outline block"
            className="margin:7"
            onClick={handler}
          >
            block
          </Button>
        </div>
        <div className="h:44 margin:7">
          <Button
            btn="outline block-v"
            className="margin:7"
            onClick={handler}
          >
            block-v
          </Button>
        </div>
        <div className="h:44 margin:7">
          <Button
            btn="outline block-h"
            className="margin:7"
            onClick={handler}
          >
            block-h
          </Button>
        </div>
      </div>
      <div>
        <Button
          btn="outline"
          className="margin:7"
          onClick={handler}
        >
          default
        </Button>
        <Button
          btn="outline action"
          className="margin:7"
          onClick={handler}
        >
          action
        </Button>
        <Button
          btn="outline warning"
          className="margin:7"
          onClick={handler}
        >
          warning
        </Button>
        <Button
          btn="outline critical"
          className="margin:7"
          onClick={handler}
        >
          critical
        </Button>
        <Button
          btn="outline positive"
          className="margin:7"
          onClick={handler}
        >
          positive
        </Button>
        <Button
          btn="outline negative"
          className="margin:7"
          onClick={handler}
        >
          negative
        </Button>
        <Button
          btn="outline highlight"
          className="margin:7"
          onClick={handler}
        >
          highlight
        </Button>
        <Button
          btn="outline brand"
          className="margin:7"
          onClick={handler}
        >
          brand
        </Button>
        <Button
          btn="transparent action"
          className="margin:7"
          onClick={handler}
        >
          transparent
        </Button>
        <div className="color:critical padding:20 margin-y:20">
          <Button
            btn="dark"
            className="margin:7"
            onClick={handler}
          >
            dark
          </Button>
          <Button
            btn="light"
            className="margin:7"
            onClick={handler}
          >
            light
          </Button>
          <Button
            btn="light-faded"
            className="margin:7"
            onClick={handler}
          >
            light-faded
          </Button>
        </div>
        <div className="color:warning padding:20">
          <Button
            btn="white"
            className="margin:7 text-color:warning"
            onClick={handler}
          >
            white
          </Button>
          <Button
            btn="white raised"
            className="margin:7 text-color:warning"
            onClick={handler}
          >
            raised
          </Button>
          <Button
            btn="white outline"
            className="margin:7"
            onClick={handler}
          >
            outline
          </Button>
        </div>
      </div>
    </div>,
  )
  .add('default', () =>
    <Button className="margin:7" onClick={handler}>
      Done
    </Button>,
  )
  .add('raised', () =>
    <Button btn="raised" onClick={handler}>
      Done
    </Button>,
  )
  .add('raised small action sharp', () =>
    <Button
      btn="raised small action sharp"
      className="margin:7"
      onClick={handler}
    >
      Done
    </Button>,
  )
  .add('all sizes', () =>
    <div>
      <Button
        btn="tiny"
        className="margin:7"
        onClick={handler}
      >
        tiny
      </Button>
      <Button
        btn="small"
        className="margin:7"
        onClick={handler}
      >
        small
      </Button>
      <Button btn="" className="margin:7" onClick={handler}>
        default
      </Button>
      <Button
        btn="large"
        className="margin:7"
        onClick={handler}
      >
        large
      </Button>
      <Button
        btn="x-large"
        className="margin:7"
        onClick={handler}
      >
        x-large
      </Button>
      <Button
        btn="jumbo"
        className="margin:7"
        onClick={handler}
      >
        jumbo
      </Button>
    </div>,
  )
  .add('all shapes', () =>
    <div>
      <Button btn="" className="margin:7" onClick={handler}>
        default
      </Button>
      <Button
        btn="rounded"
        className="margin:7"
        onClick={handler}
      >
        rounded
      </Button>
      <Button
        btn="pill"
        className="margin:7"
        onClick={handler}
      >
        pill
      </Button>
      <Button
        btn="circle"
        className="margin:7"
        onClick={handler}
      >
        C
      </Button>
      <Button
        btn="sharp"
        className="margin:7"
        onClick={handler}
      >
        sharp
      </Button>
      <div className="h:44 margin:7">
        <Button
          btn="block"
          className="margin:7"
          onClick={handler}
        >
          block
        </Button>
      </div>
      <div className="h:44 margin:7">
        <Button
          btn="block-v"
          className="margin:7"
          onClick={handler}
        >
          block-v
        </Button>
      </div>
      <div className="h:44 margin:7">
        <Button
          btn="block-h"
          className="margin:7"
          onClick={handler}
        >
          block-h
        </Button>
      </div>
    </div>,
  )
  .add('circle with icons', () =>
    <div>
      <Button
        btn="circle tiny"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="circle small"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="circle"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="circle large"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="circle x-large"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="circle jumbo"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
    </div>,
  )
  .add('square with icons', () =>
    <div>
      <Button
        btn="square tiny"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="square small"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="square"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="square large"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="square x-large"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
      <Button
        btn="square jumbo"
        className="margin:7"
        onClick={handler}
      >
        <FontIcon
          className="vertical-align:text-bottom text-color:white display:block"
          group="moon"
          icon="search3"
        />
      </Button>
    </div>,
  )
  .add('default colors', () =>
    <div>
      <Button btn="" className="margin:7" onClick={handler}>
        Default
      </Button>
      <Button
        btn="action"
        className="margin:7"
        onClick={handler}
      >
        action
      </Button>
      <Button
        btn="warning"
        className="margin:7"
        onClick={handler}
      >
        warning
      </Button>
      <Button
        btn="critical"
        className="margin:7"
        onClick={handler}
      >
        critical
      </Button>
      <Button
        btn="positive"
        className="margin:7"
        onClick={handler}
      >
        positive
      </Button>
      <Button
        btn="negative"
        className="margin:7"
        onClick={handler}
      >
        negative
      </Button>
      <Button
        btn="highlight"
        className="margin:7"
        onClick={handler}
      >
        highlight
      </Button>
    </div>,
  )
  .add('themed', () =>
    <div>
      <Button
        btn="brand"
        className="margin:7"
        onClick={handler}
      >
        brand
      </Button>
    </div>,
  )
  .add('outline', () =>
    <Button btn="outline">outline</Button>,
  )
  .add('outline raised small action sharp', () =>
    <Button btn="outline raised small action sharp">
      outline
    </Button>,
  )
  .add('outline all sizes', () =>
    <div>
      <Button
        btn="outline tiny"
        className="margin:7"
        onClick={handler}
      >
        tiny
      </Button>
      <Button
        btn="outline small"
        className="margin:7"
        onClick={handler}
      >
        small
      </Button>
      <Button
        btn="outline "
        className="margin:7"
        onClick={handler}
      >
        default
      </Button>
      <Button
        btn="outline large"
        className="margin:7"
        onClick={handler}
      >
        large
      </Button>
      <Button
        btn="outline x-large"
        className="margin:7"
        onClick={handler}
      >
        x-large
      </Button>
      <Button
        btn="outline jumbo"
        className="margin:7"
        onClick={handler}
      >
        jumbo
      </Button>
    </div>,
  )
  .add('outline all shapes', () =>
    <div>
      <Button
        btn="outline"
        className="margin:7"
        onClick={handler}
      >
        default
      </Button>
      <Button
        btn="outline rounded"
        className="margin:7"
        onClick={handler}
      >
        rounded
      </Button>
      <Button
        btn="outline pill"
        className="margin:7"
        onClick={handler}
      >
        pill
      </Button>
      <Button
        btn="outline circle"
        className="margin:7"
        onClick={handler}
      >
        C
      </Button>
      <Button
        btn="outline sharp"
        className="margin:7"
        onClick={handler}
      >
        sharp
      </Button>
      <div className="h:44 margin:7">
        <Button
          btn="outline block"
          className="margin:7"
          onClick={handler}
        >
          block
        </Button>
      </div>
      <div className="h:44 margin:7">
        <Button
          btn="outline block-v"
          className="margin:7"
          onClick={handler}
        >
          block-v
        </Button>
      </div>
      <div className="h:44 margin:7">
        <Button
          btn="outline block-h"
          className="margin:7"
          onClick={handler}
        >
          block-h
        </Button>
      </div>
    </div>,
  )
  .add('outline default colors', () =>
    <div>
      <Button
        btn="outline"
        className="margin:7"
        onClick={handler}
      >
        default
      </Button>
      <Button
        btn="outline action"
        className="margin:7"
        onClick={handler}
      >
        action
      </Button>
      <Button
        btn="outline warning"
        className="margin:7"
        onClick={handler}
      >
        warning
      </Button>
      <Button
        btn="outline critical"
        className="margin:7"
        onClick={handler}
      >
        critical
      </Button>
      <Button
        btn="outline positive"
        className="margin:7"
        onClick={handler}
      >
        positive
      </Button>
      <Button
        btn="outline negative"
        className="margin:7"
        onClick={handler}
      >
        negative
      </Button>
      <Button
        btn="outline highlight"
        className="margin:7"
        onClick={handler}
      >
        highlight
      </Button>
    </div>,
  )
  .add('outline themed', () =>
    <div>
      <Button
        btn="outline brand"
        className="margin:7"
        onClick={handler}
      >
        brand
      </Button>
    </div>,
  )
  .add('transparent', () =>
    <div>
      <Button
        btn="transparent action"
        className="margin:7"
        onClick={handler}
      >
        transparent
      </Button>
    </div>,
  )
  .add('overlay colors', () =>
    <div className="color:critical padding:20">
      <Button
        btn="dark"
        className="margin:7"
        onClick={handler}
      >
        dark
      </Button>
      <Button
        btn="light"
        className="margin:7"
        onClick={handler}
      >
        light
      </Button>
      <Button
        btn="light-faded"
        className="margin:7"
        onClick={handler}
      >
        light-faded
      </Button>
    </div>,
  )
  .add('white', () =>
    <div className="color:warning padding:20">
      <Button
        btn="white"
        className="margin:7 text-color:warning"
        onClick={handler}
      >
        white
      </Button>
      <Button
        btn="white raised"
        className="margin:7 text-color:warning"
        onClick={handler}
      >
        raised
      </Button>
      <Button
        btn="white outline"
        className="margin:7"
        onClick={handler}
      >
        outline
      </Button>
    </div>,
  );
