import React, { memo, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { convertThemeToClass } from 'styles/theme/utils';

import { selectThemeKey } from 'styles/theme/slice/selectors';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = memo((props: Props) => {
  const selected = useSelector(selectThemeKey);

  const themeClassNames = convertThemeToClass({
    selected,
  });

  return (
    <Fragment>
      <div className={`${themeClassNames.color}`}>
        <div className="wrapper top-navigation">{props.children}</div>
      </div>
    </Fragment>
  );
});
