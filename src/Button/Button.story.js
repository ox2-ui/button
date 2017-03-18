import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('default', () => <Button>Done</Button>)
  .add('raised', () => <Button btn="raised">Done</Button>)
  .add('action', () => (
    <Button btn="raised" onClick={action('button clicked')}>Done</Button>
  ))
  .add('raised small action sharp', () => (
    <Button btn="raised small action sharp"> Done </Button>
  ))
  .add('all sizes', () => (
    <div>
      <Button btn="tiny" className="margin:7"> Done </Button>
      <Button btn="small" className="margin:7"> Done </Button>
      <Button btn="" className="margin:7"> Done </Button>
      <Button btn="large" className="margin:7"> Done </Button>
      <Button btn="x-large" className="margin:7"> Done </Button>
      <Button btn="jumbo" className="margin:7"> Done </Button>
    </div>
  ))
  .add('all shapes', () => (
    <div>
      <Button btn="" className="margin:7"> Done </Button>
      <Button btn="rounded" className="margin:7"> Done </Button>
      <Button btn="pill" className="margin:7"> Done </Button>
      <Button btn="circle" className="margin:7"> Ok </Button>
      <Button btn="sharp" className="margin:7"> Done </Button>
      <div className="h:44 margin:7">
        <Button btn="block" className="margin:7"> Done </Button>
      </div>
      <div className="h:44 margin:7">
        <Button btn="block-v" className="margin:7"> Done </Button>
      </div>
      <div className="h:44 margin:7">
        <Button btn="block-h" className="margin:7"> Done </Button>
      </div>
    </div>
  ))
  .add('default colors', () => (
    <div>
      <Button btn="" className="margin:7"> Done </Button>
      <Button btn="action" className="margin:7"> Done </Button>
      <Button btn="warning" className="margin:7"> Done </Button>
      <Button btn="critical" className="margin:7"> Done </Button>
      <Button btn="positive" className="margin:7"> Done </Button>
      <Button btn="negative" className="margin:7"> Done </Button>
    </div>
  ))
  .add('themed', () => (
    <div>
      <Button btn="brand" className="margin:7"> Done </Button>
    </div>
  ))
  .add('outline', () => <Button btn="outline">Done</Button>)
  .add('outline raised small action sharp', () => (
    <Button btn="outline raised small action sharp"> Done </Button>
  ))
  .add('outline all sizes', () => (
    <div>
      <Button btn="outline tiny" className="margin:7"> Done </Button>
      <Button btn="outline small" className="margin:7"> Done </Button>
      <Button btn="outline " className="margin:7"> Done </Button>
      <Button btn="outline large" className="margin:7"> Done </Button>
      <Button btn="outline x-large" className="margin:7"> Done </Button>
      <Button btn="outline jumbo" className="margin:7"> Done </Button>
    </div>
  ))
  .add('outline all shapes', () => (
    <div>
      <Button btn="outline" className="margin:7"> Done </Button>
      <Button btn="outline rounded" className="margin:7"> Done </Button>
      <Button btn="outline pill" className="margin:7"> Done </Button>
      <Button btn="outline circle" className="margin:7"> Ok </Button>
      <Button btn="outline sharp" className="margin:7"> Done </Button>
      <div className="h:44 margin:7">
        <Button btn="outline block" className="margin:7"> Done </Button>
      </div>
      <div className="h:44 margin:7">
        <Button btn="outline block-v" className="margin:7"> Done </Button>
      </div>
      <div className="h:44 margin:7">
        <Button btn="outline block-h" className="margin:7"> Done </Button>
      </div>
    </div>
  ))
  .add('outline default colors', () => (
    <div>
      <Button btn="outline" className="margin:7"> Done </Button>
      <Button btn="outline action" className="margin:7"> Done </Button>
      <Button btn="outline warning" className="margin:7"> Done </Button>
      <Button btn="outline critical" className="margin:7"> Done </Button>
      <Button btn="outline positive" className="margin:7"> Done </Button>
      <Button btn="outline negative" className="margin:7"> Done </Button>
    </div>
  ))
  .add('outline themed', () => (
    <div>
      <Button btn="brand" className="margin:7"> Done </Button>
    </div>
  ));
