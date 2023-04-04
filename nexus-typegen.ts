/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  Vote: { // root type
    link: NexusGenRootTypes['link']; // link!
    user: NexusGenRootTypes['User']; // User!
  }
  link: { // root type
    description: string; // String!
    id: number; // Int!
    url: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    deleteLink: NexusGenRootTypes['link']; // link!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    post: NexusGenRootTypes['link']; // link!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateLink: NexusGenRootTypes['link']; // link!
    vote: NexusGenRootTypes['Vote'] | null; // Vote
  }
  Query: { // field return type
    feed: NexusGenRootTypes['link'][]; // [link!]!
    getLink: NexusGenRootTypes['link'] | null; // link
  }
  User: { // field return type
    Links: NexusGenRootTypes['link'][]; // [link!]!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    votes: NexusGenRootTypes['link'][]; // [link!]!
  }
  Vote: { // field return type
    link: NexusGenRootTypes['link']; // link!
    user: NexusGenRootTypes['User']; // User!
  }
  link: { // field return type
    description: string; // String!
    id: number; // Int!
    postedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
    voters: NexusGenRootTypes['User'][]; // [User!]!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    deleteLink: 'link'
    login: 'AuthPayload'
    post: 'link'
    signup: 'AuthPayload'
    updateLink: 'link'
    vote: 'Vote'
  }
  Query: { // field return type name
    feed: 'link'
    getLink: 'link'
  }
  User: { // field return type name
    Links: 'link'
    email: 'String'
    id: 'Int'
    name: 'String'
    votes: 'link'
  }
  Vote: { // field return type name
    link: 'link'
    user: 'User'
  }
  link: { // field return type name
    description: 'String'
    id: 'Int'
    postedBy: 'User'
    url: 'String'
    voters: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteLink: { // args
      id?: number | null; // Int
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    post: { // args
      description: string; // String!
      url: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateLink: { // args
      description?: string | null; // String
      id?: number | null; // Int
      url?: string | null; // String
    }
    vote: { // args
      LinkId: number; // Int!
    }
  }
  Query: {
    getLink: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}