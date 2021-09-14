/* eslint-disable @typescript-eslint/ban-types */
export type QueryResult = {
  status: 'ok' | 'failed' | 'needs_oauth';
  errorMessage?: string;
  data: Array<object> | object;
};
