// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED",
  "HIDDEN": "HIDDEN",
  "ARCHIVED": "ARCHIVED"
};

const { Post } = initSchema(schema);

export {
  Post,
  PostStatus
};