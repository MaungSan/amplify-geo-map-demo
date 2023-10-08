// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hike } = initSchema(schema);

export {
  Hike
};