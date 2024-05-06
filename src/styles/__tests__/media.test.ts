import { sizes } from '../media';
import { generateMedia } from 'styled-media-query';
import { css } from 'styled-components';

describe('media', () => {
  it('should return media query in css', () => {
    const media = generateMedia({ ...sizes });
    const mediaQuery = media.greaterThan('small')`color:red;`.join('');
    const cssVersion = css`
      @media (min-width: ${sizes.small}px) {
        color: red;
      }
    `.join('');
    expect(mediaQuery).toEqual(cssVersion);
  });
});
