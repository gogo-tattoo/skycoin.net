import palx from 'palx';

export const COUNTDOWN_TARGET = new Date('2017-08-01T04:00:00.000Z');
export const COLORS = palx('#4990e2');
export const SPACE = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72];
export const FONT_SIZES = [11, 13, 14, 15, 17, 20, 24, 28, 36, 40];

export const BREAKPOINTS = {
  sm: 40,
  md: 52,
  lg: 64,
};

export const FONT_FAMILIES = {
  mono: '"Space Mono", monospace, sans-serif',
  sans: '"Avenir Next", sans-serif',
};

export const BORDER_RADIUS = {
  base: '4px',
  pill: '1000px',
};

export const BOX_SHADOWS = {
  base: '0 1px 2px rgba(0, 0, 0, 0.25)',
  hover: '0 1px 4px rgba(0, 0, 0, 0.25)',
};

export const FLAGS = {
  announcement: false,
  chinese: false,
  russian: false,
  timeline: false,
  distribution: false,
  network: false,
};
