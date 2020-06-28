import { AbstractSession, AbstractStatus } from "../auth";

export interface AbstractSignInHttpResponse {
    session: AbstractSession;
    data: {};
    status: AbstractStatus
}