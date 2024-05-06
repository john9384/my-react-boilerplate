import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { render } from '@testing-library/react';

import { TopbarSidebarButton } from '..';

describe('<TopbarSidebarButton  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Provider store={store}>
        <TopbarSidebarButton />
      </Provider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
