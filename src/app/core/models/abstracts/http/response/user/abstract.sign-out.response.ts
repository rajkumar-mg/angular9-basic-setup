import { AbstractSession, AbstractStatus } from "../auth";

export interface AbstractSignOutHttpResponse {
  status: AbstractStatus;
  session: AbstractSession;
  data: boolean;
}
