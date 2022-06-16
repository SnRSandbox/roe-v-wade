import { callServer } from './fetch-api';

export const getServerStatus = () => {
  return callServer('/');
}
