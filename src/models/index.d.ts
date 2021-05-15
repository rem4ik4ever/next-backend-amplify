import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  HIDDEN = "HIDDEN",
  ARCHIVED = "ARCHIVED"
}



export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly status?: PostStatus | keyof typeof PostStatus;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}