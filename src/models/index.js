// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AdressType = {
  "FISCAL": "FISCAL",
  "DELIVERY": "DELIVERY"
};

const Dimension = {
  "WIDTH": "WIDTH",
  "HEIGHT": "HEIGHT",
  "LENGTH": "LENGTH",
  "WEIGHT_KG": "WEIGHT_KG"
};

const { Configuration, Address, Entity, Image, Item } = initSchema(schema);

export {
  Configuration,
  Address,
  Entity,
  Image,
  Item,
  AdressType,
  Dimension
};