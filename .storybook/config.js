import '@ox2/button-css';
import '@ox2/css-font-roboto';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-icons-moon';
import '@ox2/ycss';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import ThemeLoader from '@ox2/theming/ThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

ThemeLoader({ theme }); // eslint-disable-line new-cap

// Custom storybook options
setOptions({
  name: 'button',
});

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
