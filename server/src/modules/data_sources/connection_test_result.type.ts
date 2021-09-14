/* eslint-disable @typescript-eslint/ban-types */
export type ConnectionTestResult = {
  status: 'ok' | 'failed';
  message?: string;
  data?: object;
};
