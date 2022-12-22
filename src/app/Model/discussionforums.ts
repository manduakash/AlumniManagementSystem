import { Messages } from "./messages";

export class Discussionforums {
    dfno!: number
    topic!: string
    description!: string
    createdBy!: string
    createdAt!: string;
    messages: Messages[] = [];
}
