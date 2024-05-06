import { themes } from '../themes';

export type ThemeKeyType = keyof typeof themes.colors | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}
