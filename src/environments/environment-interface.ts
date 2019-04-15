export interface Environment {
  production: boolean;
  logLevel: 'full' | 'debug' | 'none';
  statusApiUrl: string;
}
