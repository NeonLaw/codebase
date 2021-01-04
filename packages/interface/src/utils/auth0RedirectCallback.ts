import { navigate } from 'gatsby';

export const onRedirectCallback = (appState) => {
  return navigate(appState?.returnTo || '/');
};
