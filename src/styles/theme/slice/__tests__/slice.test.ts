import * as slice from '..';
import {
  BorderStatusKeyType,
  DirectionKeyType,
  ThemeKeyType,
  ThemeState,
} from '../types';
import { RootState } from 'app/types';
import { themes } from '../../themes';
import { DefaultTheme } from 'styled-components';
import {
  selectBorder,
  selectBorderKey,
  selectDirection,
  selectDirectionKey,
  selectShadow,
  selectTheme,
  selectThemeKey,
} from '../selectors';

describe('theme slice', () => {
  let state: ThemeState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should change theme color', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeTheme('dark')),
    ).toEqual<ThemeState>({ ...state, selected: 'dark' });
  });

  it('should change theme direction', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeDirection('rtl')),
    ).toEqual<ThemeState>({ ...state, selectedDirection: 'rtl' });
  });

  it('should change theme border', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeBorder('off')),
    ).toEqual<ThemeState>({ ...state, selectedBorderStatus: 'off' });
  });

  describe('selectors', () => {
    it('selectTheme, selectDirection, selectShadow, and selectBorder', () => {
      let state: RootState = {};
      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.light,
        direction: themes.directions.ltr,
        border: themes.borderStatus.on,
        shadow: {} as any,
      });

      state = {
        theme: {
          selected: 'system',
          selectedDirection: 'ltr',
          selectedBorderStatus: 'on',
        },
      };

      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.light,
        direction: themes.directions.ltr,
        border: themes.borderStatus.on,
        shadow: {} as any,
      });

      state = {
        theme: {
          selected: 'dark',
          selectedDirection: 'rtl',
          selectedBorderStatus: 'off',
        },
      };
      expect({
        color: selectTheme(state),
        direction: selectDirection(state),
        border: selectBorder(state),
        shadow: selectShadow(state),
      }).toEqual<DefaultTheme>({
        color: themes.colors.dark,
        direction: themes.directions.rtl,
        border: themes.borderStatus.off,
        shadow: {} as any,
      });
    });

    it('selectThemeKey', () => {
      let state: RootState = {};
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        slice.initialState.selected,
      );

      state = {
        theme: {
          selected: 'system',
          selectedDirection: 'ltr',
          selectedBorderStatus: 'off',
        },
      };
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        state.theme!.selected,
      );
    });

    it('selectDirectionKey', () => {
      let state: RootState = {};

      expect(selectDirectionKey(state)).toEqual<DirectionKeyType>(
        slice.initialState.selectedDirection,
      );

      state = {
        theme: {
          selected: 'light',
          selectedDirection: 'rtl',
          selectedBorderStatus: 'off',
        },
      };
      expect(selectDirectionKey(state)).toEqual<DirectionKeyType>(
        state.theme!.selectedDirection,
      );
    });

    it('selectBorderStatusKey', () => {
      let state: RootState = {};

      expect(selectBorderKey(state)).toEqual<BorderStatusKeyType>(
        slice.initialState.selectedBorderStatus,
      );

      state = {
        theme: {
          selected: 'light',
          selectedDirection: 'ltr',
          selectedBorderStatus: 'off',
        },
      };
      expect(selectBorderKey(state)).toEqual<BorderStatusKeyType>(
        state.theme!.selectedBorderStatus,
      );
    });
  });
});
