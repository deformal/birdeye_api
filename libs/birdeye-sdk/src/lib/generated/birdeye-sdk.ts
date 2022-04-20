import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Review = {
  __typename?: 'Review';
  rating?: Maybe<Scalars['String']>;
  reviewComment?: Maybe<Scalars['String']>;
  reviewDate?: Maybe<Scalars['String']>;
  reviewerName?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  siteScrapper?: Maybe<ScrapperOutput>;
};


/** mutation root */
export type Mutation_RootSiteScrapperArgs = {
  input: ScrapperInput;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** There are no queries available to the current role. Either there are no sources or remote schemas configured, or the current role doesn't have the required permissions. */
  no_queries_available: Scalars['String'];
};

export type ScrapperInput = {
  websiteLink?: InputMaybe<Scalars['String']>;
};

export type ScrapperOutput = {
  __typename?: 'scrapperOutput';
  reviews?: Maybe<Array<Maybe<Review>>>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;