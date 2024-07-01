import { Logger } from "../services/logger";
import { Users } from "../services/users";
import { HTTP } from "../services/http";

export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export type IoCResources = {
  apiConfig: ApiConfig;
  logger: typeof Logger;
  users: typeof Users;
  http: typeof HTTP;
}
