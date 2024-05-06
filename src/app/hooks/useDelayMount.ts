import { useEffect, useState } from 'react';

export function useDelayMount(
  isMounted: boolean,
  mountDelayTime: number,
  unmountDelayTime: number,
) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (isMounted && !shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(true), mountDelayTime);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), unmountDelayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, mountDelayTime, unmountDelayTime, shouldRender]);

  return shouldRender;
}
