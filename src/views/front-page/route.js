// eslint-disable-next-line
import RouteIndex from './index';

const FEATURE_PATH = '/';

export default [
  {
    path: `${FEATURE_PATH}`,
    element: <RouteIndex />,
    exact: true,
  }
];