import { AbstractStatus, AbstractSession } from "../auth";

export interface AbstractCommontHttpResponse {
    status: AbstractStatus;
    session: AbstractSession;
    data: {};
}