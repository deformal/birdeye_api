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
  timestamptz: any;
  uuid: any;
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
  /** delete data from the table: "use" */
  delete_use?: Maybe<Use_Mutation_Response>;
  /** delete single row from the table: "use" */
  delete_use_by_pk?: Maybe<Use>;
  /** insert data into the table: "use" */
  insert_use?: Maybe<Use_Mutation_Response>;
  /** insert a single row into the table: "use" */
  insert_use_one?: Maybe<Use>;
  siteScrapper?: Maybe<ScrapperOutput>;
  /** update data of the table: "use" */
  update_use?: Maybe<Use_Mutation_Response>;
  /** update single row of the table: "use" */
  update_use_by_pk?: Maybe<Use>;
};


/** mutation root */
export type Mutation_RootDelete_UseArgs = {
  where: Use_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Use_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_UseArgs = {
  objects: Array<Use_Insert_Input>;
  on_conflict?: InputMaybe<Use_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Use_OneArgs = {
  object: Use_Insert_Input;
  on_conflict?: InputMaybe<Use_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSiteScrapperArgs = {
  input: ScrapperInput;
};


/** mutation root */
export type Mutation_RootUpdate_UseArgs = {
  _set?: InputMaybe<Use_Set_Input>;
  where: Use_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Use_By_PkArgs = {
  _set?: InputMaybe<Use_Set_Input>;
  pk_columns: Use_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "use" */
  use: Array<Use>;
  /** fetch aggregated fields from the table: "use" */
  use_aggregate: Use_Aggregate;
  /** fetch data from the table: "use" using primary key columns */
  use_by_pk?: Maybe<Use>;
};


export type Query_RootUseArgs = {
  distinct_on?: InputMaybe<Array<Use_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Use_Order_By>>;
  where?: InputMaybe<Use_Bool_Exp>;
};


export type Query_RootUse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Use_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Use_Order_By>>;
  where?: InputMaybe<Use_Bool_Exp>;
};


export type Query_RootUse_By_PkArgs = {
  id: Scalars['uuid'];
};

export type ScrapperInput = {
  websiteLink?: InputMaybe<Scalars['String']>;
};

export type ScrapperOutput = {
  __typename?: 'scrapperOutput';
  message?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "use" */
  use: Array<Use>;
  /** fetch aggregated fields from the table: "use" */
  use_aggregate: Use_Aggregate;
  /** fetch data from the table: "use" using primary key columns */
  use_by_pk?: Maybe<Use>;
};


export type Subscription_RootUseArgs = {
  distinct_on?: InputMaybe<Array<Use_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Use_Order_By>>;
  where?: InputMaybe<Use_Bool_Exp>;
};


export type Subscription_RootUse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Use_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Use_Order_By>>;
  where?: InputMaybe<Use_Bool_Exp>;
};


export type Subscription_RootUse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** user */
export type Use = {
  __typename?: 'use';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "use" */
export type Use_Aggregate = {
  __typename?: 'use_aggregate';
  aggregate?: Maybe<Use_Aggregate_Fields>;
  nodes: Array<Use>;
};

/** aggregate fields of "use" */
export type Use_Aggregate_Fields = {
  __typename?: 'use_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Use_Max_Fields>;
  min?: Maybe<Use_Min_Fields>;
};


/** aggregate fields of "use" */
export type Use_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Use_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "use". All fields are combined with a logical 'AND'. */
export type Use_Bool_Exp = {
  _and?: InputMaybe<Array<Use_Bool_Exp>>;
  _not?: InputMaybe<Use_Bool_Exp>;
  _or?: InputMaybe<Array<Use_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "use" */
export enum Use_Constraint {
  /** unique or primary key constraint */
  UsePkey = 'use_pkey'
}

/** input type for inserting data into table "use" */
export type Use_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Use_Max_Fields = {
  __typename?: 'use_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Use_Min_Fields = {
  __typename?: 'use_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "use" */
export type Use_Mutation_Response = {
  __typename?: 'use_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Use>;
};

/** on_conflict condition type for table "use" */
export type Use_On_Conflict = {
  constraint: Use_Constraint;
  update_columns?: Array<Use_Update_Column>;
  where?: InputMaybe<Use_Bool_Exp>;
};

/** Ordering options when selecting data from "use". */
export type Use_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: use */
export type Use_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "use" */
export enum Use_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "use" */
export type Use_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "use" */
export enum Use_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;