// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AdressType = {
  "DELIVERY": "DELIVERY",
  "FISCAL": "FISCAL"
};

const { Item, Image, Entity, Address, Configuration } = initSchema(schema);

export {
  Item,
  Image,
  Entity,
  Address,
  Configuration,
  AdressType
};