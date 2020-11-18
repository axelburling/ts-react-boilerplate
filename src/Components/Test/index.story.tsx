import * as React from 'react';
import Test from './index';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('Test', module).add(`Test`, () => <Test />);
