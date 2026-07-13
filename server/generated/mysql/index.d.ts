
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApplicationForm
 * 
 */
export type ApplicationForm = $Result.DefaultSelection<Prisma.$ApplicationFormPayload>
/**
 * Model StudentRecord
 * 
 */
export type StudentRecord = $Result.DefaultSelection<Prisma.$StudentRecordPayload>
/**
 * Model AdminRecord
 * 
 */
export type AdminRecord = $Result.DefaultSelection<Prisma.$AdminRecordPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApplicationForms
 * const applicationForms = await prisma.applicationForm.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ApplicationForms
   * const applicationForms = await prisma.applicationForm.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.applicationForm`: Exposes CRUD operations for the **ApplicationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationForms
    * const applicationForms = await prisma.applicationForm.findMany()
    * ```
    */
  get applicationForm(): Prisma.ApplicationFormDelegate<ExtArgs>;

  /**
   * `prisma.studentRecord`: Exposes CRUD operations for the **StudentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentRecords
    * const studentRecords = await prisma.studentRecord.findMany()
    * ```
    */
  get studentRecord(): Prisma.StudentRecordDelegate<ExtArgs>;

  /**
   * `prisma.adminRecord`: Exposes CRUD operations for the **AdminRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRecords
    * const adminRecords = await prisma.adminRecord.findMany()
    * ```
    */
  get adminRecord(): Prisma.AdminRecordDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApplicationForm: 'ApplicationForm',
    StudentRecord: 'StudentRecord',
    AdminRecord: 'AdminRecord',
    AuditLog: 'AuditLog',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "applicationForm" | "studentRecord" | "adminRecord" | "auditLog" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApplicationForm: {
        payload: Prisma.$ApplicationFormPayload<ExtArgs>
        fields: Prisma.ApplicationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          findMany: {
            args: Prisma.ApplicationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>[]
          }
          create: {
            args: Prisma.ApplicationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          createMany: {
            args: Prisma.ApplicationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          update: {
            args: Prisma.ApplicationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          aggregate: {
            args: Prisma.ApplicationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationForm>
          }
          groupBy: {
            args: Prisma.ApplicationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationFormCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationFormCountAggregateOutputType> | number
          }
        }
      }
      StudentRecord: {
        payload: Prisma.$StudentRecordPayload<ExtArgs>
        fields: Prisma.StudentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          findFirst: {
            args: Prisma.StudentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          findMany: {
            args: Prisma.StudentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>[]
          }
          create: {
            args: Prisma.StudentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          createMany: {
            args: Prisma.StudentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          update: {
            args: Prisma.StudentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          aggregate: {
            args: Prisma.StudentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentRecord>
          }
          groupBy: {
            args: Prisma.StudentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudentRecordCountAggregateOutputType> | number
          }
        }
      }
      AdminRecord: {
        payload: Prisma.$AdminRecordPayload<ExtArgs>
        fields: Prisma.AdminRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          findFirst: {
            args: Prisma.AdminRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          findMany: {
            args: Prisma.AdminRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>[]
          }
          create: {
            args: Prisma.AdminRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          createMany: {
            args: Prisma.AdminRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          update: {
            args: Prisma.AdminRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          deleteMany: {
            args: Prisma.AdminRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecordPayload>
          }
          aggregate: {
            args: Prisma.AdminRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRecord>
          }
          groupBy: {
            args: Prisma.AdminRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRecordCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ApplicationForm
   */

  export type AggregateApplicationForm = {
    _count: ApplicationFormCountAggregateOutputType | null
    _avg: ApplicationFormAvgAggregateOutputType | null
    _sum: ApplicationFormSumAggregateOutputType | null
    _min: ApplicationFormMinAggregateOutputType | null
    _max: ApplicationFormMaxAggregateOutputType | null
  }

  export type ApplicationFormAvgAggregateOutputType = {
    id: number | null
    semester: number | null
    tenthPct: number | null
    twelfthPct: number | null
    diplomaPct: number | null
    degreeCgpa: number | null
  }

  export type ApplicationFormSumAggregateOutputType = {
    id: number | null
    semester: number | null
    tenthPct: number | null
    twelfthPct: number | null
    diplomaPct: number | null
    degreeCgpa: number | null
  }

  export type ApplicationFormMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    photoUrl: string | null
    gender: string | null
    dob: Date | null
    fatherName: string | null
    motherName: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    passwordHash: string | null
    address: string | null
    district: string | null
    state: string | null
    country: string | null
    pin: string | null
    aadhaar: string | null
    collegeName: string | null
    university: string | null
    branch: string | null
    semester: number | null
    rollNumber: string | null
    registrationNo: string | null
    studentIdCard: string | null
    tenthPct: number | null
    twelfthPct: number | null
    diplomaPct: number | null
    degreeCgpa: number | null
    skills: string | null
    resumeUrl: string | null
    aadhaarUrl: string | null
    profilePicUrl: string | null
    interestedCourse: string | null
    preferredLang: string | null
    emergencyContact: string | null
    declaration: boolean | null
    status: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    generatedStudentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationFormMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    photoUrl: string | null
    gender: string | null
    dob: Date | null
    fatherName: string | null
    motherName: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    passwordHash: string | null
    address: string | null
    district: string | null
    state: string | null
    country: string | null
    pin: string | null
    aadhaar: string | null
    collegeName: string | null
    university: string | null
    branch: string | null
    semester: number | null
    rollNumber: string | null
    registrationNo: string | null
    studentIdCard: string | null
    tenthPct: number | null
    twelfthPct: number | null
    diplomaPct: number | null
    degreeCgpa: number | null
    skills: string | null
    resumeUrl: string | null
    aadhaarUrl: string | null
    profilePicUrl: string | null
    interestedCourse: string | null
    preferredLang: string | null
    emergencyContact: string | null
    declaration: boolean | null
    status: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    generatedStudentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationFormCountAggregateOutputType = {
    id: number
    fullName: number
    photoUrl: number
    gender: number
    dob: number
    fatherName: number
    motherName: number
    phone: number
    whatsapp: number
    email: number
    passwordHash: number
    address: number
    district: number
    state: number
    country: number
    pin: number
    aadhaar: number
    collegeName: number
    university: number
    branch: number
    semester: number
    rollNumber: number
    registrationNo: number
    studentIdCard: number
    tenthPct: number
    twelfthPct: number
    diplomaPct: number
    degreeCgpa: number
    skills: number
    resumeUrl: number
    aadhaarUrl: number
    profilePicUrl: number
    interestedCourse: number
    preferredLang: number
    emergencyContact: number
    declaration: number
    status: number
    reviewedBy: number
    reviewedAt: number
    generatedStudentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationFormAvgAggregateInputType = {
    id?: true
    semester?: true
    tenthPct?: true
    twelfthPct?: true
    diplomaPct?: true
    degreeCgpa?: true
  }

  export type ApplicationFormSumAggregateInputType = {
    id?: true
    semester?: true
    tenthPct?: true
    twelfthPct?: true
    diplomaPct?: true
    degreeCgpa?: true
  }

  export type ApplicationFormMinAggregateInputType = {
    id?: true
    fullName?: true
    photoUrl?: true
    gender?: true
    dob?: true
    fatherName?: true
    motherName?: true
    phone?: true
    whatsapp?: true
    email?: true
    passwordHash?: true
    address?: true
    district?: true
    state?: true
    country?: true
    pin?: true
    aadhaar?: true
    collegeName?: true
    university?: true
    branch?: true
    semester?: true
    rollNumber?: true
    registrationNo?: true
    studentIdCard?: true
    tenthPct?: true
    twelfthPct?: true
    diplomaPct?: true
    degreeCgpa?: true
    skills?: true
    resumeUrl?: true
    aadhaarUrl?: true
    profilePicUrl?: true
    interestedCourse?: true
    preferredLang?: true
    emergencyContact?: true
    declaration?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    generatedStudentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationFormMaxAggregateInputType = {
    id?: true
    fullName?: true
    photoUrl?: true
    gender?: true
    dob?: true
    fatherName?: true
    motherName?: true
    phone?: true
    whatsapp?: true
    email?: true
    passwordHash?: true
    address?: true
    district?: true
    state?: true
    country?: true
    pin?: true
    aadhaar?: true
    collegeName?: true
    university?: true
    branch?: true
    semester?: true
    rollNumber?: true
    registrationNo?: true
    studentIdCard?: true
    tenthPct?: true
    twelfthPct?: true
    diplomaPct?: true
    degreeCgpa?: true
    skills?: true
    resumeUrl?: true
    aadhaarUrl?: true
    profilePicUrl?: true
    interestedCourse?: true
    preferredLang?: true
    emergencyContact?: true
    declaration?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    generatedStudentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationFormCountAggregateInputType = {
    id?: true
    fullName?: true
    photoUrl?: true
    gender?: true
    dob?: true
    fatherName?: true
    motherName?: true
    phone?: true
    whatsapp?: true
    email?: true
    passwordHash?: true
    address?: true
    district?: true
    state?: true
    country?: true
    pin?: true
    aadhaar?: true
    collegeName?: true
    university?: true
    branch?: true
    semester?: true
    rollNumber?: true
    registrationNo?: true
    studentIdCard?: true
    tenthPct?: true
    twelfthPct?: true
    diplomaPct?: true
    degreeCgpa?: true
    skills?: true
    resumeUrl?: true
    aadhaarUrl?: true
    profilePicUrl?: true
    interestedCourse?: true
    preferredLang?: true
    emergencyContact?: true
    declaration?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    generatedStudentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationForm to aggregate.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationForms
    **/
    _count?: true | ApplicationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationFormMaxAggregateInputType
  }

  export type GetApplicationFormAggregateType<T extends ApplicationFormAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationForm[P]>
      : GetScalarType<T[P], AggregateApplicationForm[P]>
  }




  export type ApplicationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationFormWhereInput
    orderBy?: ApplicationFormOrderByWithAggregationInput | ApplicationFormOrderByWithAggregationInput[]
    by: ApplicationFormScalarFieldEnum[] | ApplicationFormScalarFieldEnum
    having?: ApplicationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationFormCountAggregateInputType | true
    _avg?: ApplicationFormAvgAggregateInputType
    _sum?: ApplicationFormSumAggregateInputType
    _min?: ApplicationFormMinAggregateInputType
    _max?: ApplicationFormMaxAggregateInputType
  }

  export type ApplicationFormGroupByOutputType = {
    id: number
    fullName: string
    photoUrl: string | null
    gender: string
    dob: Date
    fatherName: string
    motherName: string
    phone: string
    whatsapp: string
    email: string
    passwordHash: string
    address: string
    district: string
    state: string
    country: string
    pin: string
    aadhaar: string
    collegeName: string
    university: string
    branch: string
    semester: number
    rollNumber: string
    registrationNo: string
    studentIdCard: string | null
    tenthPct: number
    twelfthPct: number | null
    diplomaPct: number | null
    degreeCgpa: number
    skills: string
    resumeUrl: string | null
    aadhaarUrl: string | null
    profilePicUrl: string | null
    interestedCourse: string
    preferredLang: string
    emergencyContact: string
    declaration: boolean
    status: string
    reviewedBy: string | null
    reviewedAt: Date | null
    generatedStudentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationFormCountAggregateOutputType | null
    _avg: ApplicationFormAvgAggregateOutputType | null
    _sum: ApplicationFormSumAggregateOutputType | null
    _min: ApplicationFormMinAggregateOutputType | null
    _max: ApplicationFormMaxAggregateOutputType | null
  }

  type GetApplicationFormGroupByPayload<T extends ApplicationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationFormGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationFormGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photoUrl?: boolean
    gender?: boolean
    dob?: boolean
    fatherName?: boolean
    motherName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    passwordHash?: boolean
    address?: boolean
    district?: boolean
    state?: boolean
    country?: boolean
    pin?: boolean
    aadhaar?: boolean
    collegeName?: boolean
    university?: boolean
    branch?: boolean
    semester?: boolean
    rollNumber?: boolean
    registrationNo?: boolean
    studentIdCard?: boolean
    tenthPct?: boolean
    twelfthPct?: boolean
    diplomaPct?: boolean
    degreeCgpa?: boolean
    skills?: boolean
    resumeUrl?: boolean
    aadhaarUrl?: boolean
    profilePicUrl?: boolean
    interestedCourse?: boolean
    preferredLang?: boolean
    emergencyContact?: boolean
    declaration?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    generatedStudentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicationForm"]>


  export type ApplicationFormSelectScalar = {
    id?: boolean
    fullName?: boolean
    photoUrl?: boolean
    gender?: boolean
    dob?: boolean
    fatherName?: boolean
    motherName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    passwordHash?: boolean
    address?: boolean
    district?: boolean
    state?: boolean
    country?: boolean
    pin?: boolean
    aadhaar?: boolean
    collegeName?: boolean
    university?: boolean
    branch?: boolean
    semester?: boolean
    rollNumber?: boolean
    registrationNo?: boolean
    studentIdCard?: boolean
    tenthPct?: boolean
    twelfthPct?: boolean
    diplomaPct?: boolean
    degreeCgpa?: boolean
    skills?: boolean
    resumeUrl?: boolean
    aadhaarUrl?: boolean
    profilePicUrl?: boolean
    interestedCourse?: boolean
    preferredLang?: boolean
    emergencyContact?: boolean
    declaration?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    generatedStudentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ApplicationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      photoUrl: string | null
      gender: string
      dob: Date
      fatherName: string
      motherName: string
      phone: string
      whatsapp: string
      email: string
      passwordHash: string
      address: string
      district: string
      state: string
      country: string
      pin: string
      aadhaar: string
      collegeName: string
      university: string
      branch: string
      semester: number
      rollNumber: string
      registrationNo: string
      studentIdCard: string | null
      tenthPct: number
      twelfthPct: number | null
      diplomaPct: number | null
      degreeCgpa: number
      skills: string
      resumeUrl: string | null
      aadhaarUrl: string | null
      profilePicUrl: string | null
      interestedCourse: string
      preferredLang: string
      emergencyContact: string
      declaration: boolean
      status: string
      reviewedBy: string | null
      reviewedAt: Date | null
      generatedStudentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicationForm"]>
    composites: {}
  }

  type ApplicationFormGetPayload<S extends boolean | null | undefined | ApplicationFormDefaultArgs> = $Result.GetResult<Prisma.$ApplicationFormPayload, S>

  type ApplicationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationFormCountAggregateInputType | true
    }

  export interface ApplicationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationForm'], meta: { name: 'ApplicationForm' } }
    /**
     * Find zero or one ApplicationForm that matches the filter.
     * @param {ApplicationFormFindUniqueArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFormFindUniqueArgs>(args: SelectSubset<T, ApplicationFormFindUniqueArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApplicationForm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationFormFindUniqueOrThrowArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApplicationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindFirstArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFormFindFirstArgs>(args?: SelectSubset<T, ApplicationFormFindFirstArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApplicationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindFirstOrThrowArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApplicationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationForms
     * const applicationForms = await prisma.applicationForm.findMany()
     * 
     * // Get first 10 ApplicationForms
     * const applicationForms = await prisma.applicationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationFormWithIdOnly = await prisma.applicationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFormFindManyArgs>(args?: SelectSubset<T, ApplicationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApplicationForm.
     * @param {ApplicationFormCreateArgs} args - Arguments to create a ApplicationForm.
     * @example
     * // Create one ApplicationForm
     * const ApplicationForm = await prisma.applicationForm.create({
     *   data: {
     *     // ... data to create a ApplicationForm
     *   }
     * })
     * 
     */
    create<T extends ApplicationFormCreateArgs>(args: SelectSubset<T, ApplicationFormCreateArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApplicationForms.
     * @param {ApplicationFormCreateManyArgs} args - Arguments to create many ApplicationForms.
     * @example
     * // Create many ApplicationForms
     * const applicationForm = await prisma.applicationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationFormCreateManyArgs>(args?: SelectSubset<T, ApplicationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApplicationForm.
     * @param {ApplicationFormDeleteArgs} args - Arguments to delete one ApplicationForm.
     * @example
     * // Delete one ApplicationForm
     * const ApplicationForm = await prisma.applicationForm.delete({
     *   where: {
     *     // ... filter to delete one ApplicationForm
     *   }
     * })
     * 
     */
    delete<T extends ApplicationFormDeleteArgs>(args: SelectSubset<T, ApplicationFormDeleteArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApplicationForm.
     * @param {ApplicationFormUpdateArgs} args - Arguments to update one ApplicationForm.
     * @example
     * // Update one ApplicationForm
     * const applicationForm = await prisma.applicationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationFormUpdateArgs>(args: SelectSubset<T, ApplicationFormUpdateArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApplicationForms.
     * @param {ApplicationFormDeleteManyArgs} args - Arguments to filter ApplicationForms to delete.
     * @example
     * // Delete a few ApplicationForms
     * const { count } = await prisma.applicationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationFormDeleteManyArgs>(args?: SelectSubset<T, ApplicationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationForms
     * const applicationForm = await prisma.applicationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationFormUpdateManyArgs>(args: SelectSubset<T, ApplicationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplicationForm.
     * @param {ApplicationFormUpsertArgs} args - Arguments to update or create a ApplicationForm.
     * @example
     * // Update or create a ApplicationForm
     * const applicationForm = await prisma.applicationForm.upsert({
     *   create: {
     *     // ... data to create a ApplicationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationForm we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationFormUpsertArgs>(args: SelectSubset<T, ApplicationFormUpsertArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormCountArgs} args - Arguments to filter ApplicationForms to count.
     * @example
     * // Count the number of ApplicationForms
     * const count = await prisma.applicationForm.count({
     *   where: {
     *     // ... the filter for the ApplicationForms we want to count
     *   }
     * })
    **/
    count<T extends ApplicationFormCountArgs>(
      args?: Subset<T, ApplicationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationFormAggregateArgs>(args: Subset<T, ApplicationFormAggregateArgs>): Prisma.PrismaPromise<GetApplicationFormAggregateType<T>>

    /**
     * Group by ApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationFormGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationForm model
   */
  readonly fields: ApplicationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationForm model
   */ 
  interface ApplicationFormFieldRefs {
    readonly id: FieldRef<"ApplicationForm", 'Int'>
    readonly fullName: FieldRef<"ApplicationForm", 'String'>
    readonly photoUrl: FieldRef<"ApplicationForm", 'String'>
    readonly gender: FieldRef<"ApplicationForm", 'String'>
    readonly dob: FieldRef<"ApplicationForm", 'DateTime'>
    readonly fatherName: FieldRef<"ApplicationForm", 'String'>
    readonly motherName: FieldRef<"ApplicationForm", 'String'>
    readonly phone: FieldRef<"ApplicationForm", 'String'>
    readonly whatsapp: FieldRef<"ApplicationForm", 'String'>
    readonly email: FieldRef<"ApplicationForm", 'String'>
    readonly passwordHash: FieldRef<"ApplicationForm", 'String'>
    readonly address: FieldRef<"ApplicationForm", 'String'>
    readonly district: FieldRef<"ApplicationForm", 'String'>
    readonly state: FieldRef<"ApplicationForm", 'String'>
    readonly country: FieldRef<"ApplicationForm", 'String'>
    readonly pin: FieldRef<"ApplicationForm", 'String'>
    readonly aadhaar: FieldRef<"ApplicationForm", 'String'>
    readonly collegeName: FieldRef<"ApplicationForm", 'String'>
    readonly university: FieldRef<"ApplicationForm", 'String'>
    readonly branch: FieldRef<"ApplicationForm", 'String'>
    readonly semester: FieldRef<"ApplicationForm", 'Int'>
    readonly rollNumber: FieldRef<"ApplicationForm", 'String'>
    readonly registrationNo: FieldRef<"ApplicationForm", 'String'>
    readonly studentIdCard: FieldRef<"ApplicationForm", 'String'>
    readonly tenthPct: FieldRef<"ApplicationForm", 'Float'>
    readonly twelfthPct: FieldRef<"ApplicationForm", 'Float'>
    readonly diplomaPct: FieldRef<"ApplicationForm", 'Float'>
    readonly degreeCgpa: FieldRef<"ApplicationForm", 'Float'>
    readonly skills: FieldRef<"ApplicationForm", 'String'>
    readonly resumeUrl: FieldRef<"ApplicationForm", 'String'>
    readonly aadhaarUrl: FieldRef<"ApplicationForm", 'String'>
    readonly profilePicUrl: FieldRef<"ApplicationForm", 'String'>
    readonly interestedCourse: FieldRef<"ApplicationForm", 'String'>
    readonly preferredLang: FieldRef<"ApplicationForm", 'String'>
    readonly emergencyContact: FieldRef<"ApplicationForm", 'String'>
    readonly declaration: FieldRef<"ApplicationForm", 'Boolean'>
    readonly status: FieldRef<"ApplicationForm", 'String'>
    readonly reviewedBy: FieldRef<"ApplicationForm", 'String'>
    readonly reviewedAt: FieldRef<"ApplicationForm", 'DateTime'>
    readonly generatedStudentId: FieldRef<"ApplicationForm", 'String'>
    readonly createdAt: FieldRef<"ApplicationForm", 'DateTime'>
    readonly updatedAt: FieldRef<"ApplicationForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationForm findUnique
   */
  export type ApplicationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm findUniqueOrThrow
   */
  export type ApplicationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm findFirst
   */
  export type ApplicationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationForms.
     */
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm findFirstOrThrow
   */
  export type ApplicationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationForms.
     */
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm findMany
   */
  export type ApplicationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationForms to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm create
   */
  export type ApplicationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * The data needed to create a ApplicationForm.
     */
    data: XOR<ApplicationFormCreateInput, ApplicationFormUncheckedCreateInput>
  }

  /**
   * ApplicationForm createMany
   */
  export type ApplicationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationForms.
     */
    data: ApplicationFormCreateManyInput | ApplicationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationForm update
   */
  export type ApplicationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * The data needed to update a ApplicationForm.
     */
    data: XOR<ApplicationFormUpdateInput, ApplicationFormUncheckedUpdateInput>
    /**
     * Choose, which ApplicationForm to update.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm updateMany
   */
  export type ApplicationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationForms.
     */
    data: XOR<ApplicationFormUpdateManyMutationInput, ApplicationFormUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationForms to update
     */
    where?: ApplicationFormWhereInput
  }

  /**
   * ApplicationForm upsert
   */
  export type ApplicationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * The filter to search for the ApplicationForm to update in case it exists.
     */
    where: ApplicationFormWhereUniqueInput
    /**
     * In case the ApplicationForm found by the `where` argument doesn't exist, create a new ApplicationForm with this data.
     */
    create: XOR<ApplicationFormCreateInput, ApplicationFormUncheckedCreateInput>
    /**
     * In case the ApplicationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationFormUpdateInput, ApplicationFormUncheckedUpdateInput>
  }

  /**
   * ApplicationForm delete
   */
  export type ApplicationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Filter which ApplicationForm to delete.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm deleteMany
   */
  export type ApplicationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationForms to delete
     */
    where?: ApplicationFormWhereInput
  }

  /**
   * ApplicationForm without action
   */
  export type ApplicationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
  }


  /**
   * Model StudentRecord
   */

  export type AggregateStudentRecord = {
    _count: StudentRecordCountAggregateOutputType | null
    _avg: StudentRecordAvgAggregateOutputType | null
    _sum: StudentRecordSumAggregateOutputType | null
    _min: StudentRecordMinAggregateOutputType | null
    _max: StudentRecordMaxAggregateOutputType | null
  }

  export type StudentRecordAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    attendancePct: number | null
    xp: number | null
    streak: number | null
  }

  export type StudentRecordSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    attendancePct: number | null
    xp: number | null
    streak: number | null
  }

  export type StudentRecordMinAggregateOutputType = {
    id: number | null
    userId: string | null
    applicationId: number | null
    attendancePct: number | null
    xp: number | null
    streak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentRecordMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    applicationId: number | null
    attendancePct: number | null
    xp: number | null
    streak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentRecordCountAggregateOutputType = {
    id: number
    userId: number
    applicationId: number
    attendancePct: number
    xp: number
    streak: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentRecordAvgAggregateInputType = {
    id?: true
    applicationId?: true
    attendancePct?: true
    xp?: true
    streak?: true
  }

  export type StudentRecordSumAggregateInputType = {
    id?: true
    applicationId?: true
    attendancePct?: true
    xp?: true
    streak?: true
  }

  export type StudentRecordMinAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    attendancePct?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    attendancePct?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentRecordCountAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    attendancePct?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRecord to aggregate.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentRecords
    **/
    _count?: true | StudentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentRecordMaxAggregateInputType
  }

  export type GetStudentRecordAggregateType<T extends StudentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentRecord[P]>
      : GetScalarType<T[P], AggregateStudentRecord[P]>
  }




  export type StudentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentRecordWhereInput
    orderBy?: StudentRecordOrderByWithAggregationInput | StudentRecordOrderByWithAggregationInput[]
    by: StudentRecordScalarFieldEnum[] | StudentRecordScalarFieldEnum
    having?: StudentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentRecordCountAggregateInputType | true
    _avg?: StudentRecordAvgAggregateInputType
    _sum?: StudentRecordSumAggregateInputType
    _min?: StudentRecordMinAggregateInputType
    _max?: StudentRecordMaxAggregateInputType
  }

  export type StudentRecordGroupByOutputType = {
    id: number
    userId: string
    applicationId: number
    attendancePct: number
    xp: number
    streak: number
    createdAt: Date
    updatedAt: Date
    _count: StudentRecordCountAggregateOutputType | null
    _avg: StudentRecordAvgAggregateOutputType | null
    _sum: StudentRecordSumAggregateOutputType | null
    _min: StudentRecordMinAggregateOutputType | null
    _max: StudentRecordMaxAggregateOutputType | null
  }

  type GetStudentRecordGroupByPayload<T extends StudentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudentRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    applicationId?: boolean
    attendancePct?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentRecord"]>


  export type StudentRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    applicationId?: boolean
    attendancePct?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StudentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      applicationId: number
      attendancePct: number
      xp: number
      streak: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentRecord"]>
    composites: {}
  }

  type StudentRecordGetPayload<S extends boolean | null | undefined | StudentRecordDefaultArgs> = $Result.GetResult<Prisma.$StudentRecordPayload, S>

  type StudentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentRecordCountAggregateInputType | true
    }

  export interface StudentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentRecord'], meta: { name: 'StudentRecord' } }
    /**
     * Find zero or one StudentRecord that matches the filter.
     * @param {StudentRecordFindUniqueArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentRecordFindUniqueArgs>(args: SelectSubset<T, StudentRecordFindUniqueArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentRecordFindUniqueOrThrowArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindFirstArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentRecordFindFirstArgs>(args?: SelectSubset<T, StudentRecordFindFirstArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindFirstOrThrowArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentRecords
     * const studentRecords = await prisma.studentRecord.findMany()
     * 
     * // Get first 10 StudentRecords
     * const studentRecords = await prisma.studentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentRecordWithIdOnly = await prisma.studentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentRecordFindManyArgs>(args?: SelectSubset<T, StudentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentRecord.
     * @param {StudentRecordCreateArgs} args - Arguments to create a StudentRecord.
     * @example
     * // Create one StudentRecord
     * const StudentRecord = await prisma.studentRecord.create({
     *   data: {
     *     // ... data to create a StudentRecord
     *   }
     * })
     * 
     */
    create<T extends StudentRecordCreateArgs>(args: SelectSubset<T, StudentRecordCreateArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentRecords.
     * @param {StudentRecordCreateManyArgs} args - Arguments to create many StudentRecords.
     * @example
     * // Create many StudentRecords
     * const studentRecord = await prisma.studentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentRecordCreateManyArgs>(args?: SelectSubset<T, StudentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentRecord.
     * @param {StudentRecordDeleteArgs} args - Arguments to delete one StudentRecord.
     * @example
     * // Delete one StudentRecord
     * const StudentRecord = await prisma.studentRecord.delete({
     *   where: {
     *     // ... filter to delete one StudentRecord
     *   }
     * })
     * 
     */
    delete<T extends StudentRecordDeleteArgs>(args: SelectSubset<T, StudentRecordDeleteArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentRecord.
     * @param {StudentRecordUpdateArgs} args - Arguments to update one StudentRecord.
     * @example
     * // Update one StudentRecord
     * const studentRecord = await prisma.studentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentRecordUpdateArgs>(args: SelectSubset<T, StudentRecordUpdateArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentRecords.
     * @param {StudentRecordDeleteManyArgs} args - Arguments to filter StudentRecords to delete.
     * @example
     * // Delete a few StudentRecords
     * const { count } = await prisma.studentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentRecordDeleteManyArgs>(args?: SelectSubset<T, StudentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentRecords
     * const studentRecord = await prisma.studentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentRecordUpdateManyArgs>(args: SelectSubset<T, StudentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentRecord.
     * @param {StudentRecordUpsertArgs} args - Arguments to update or create a StudentRecord.
     * @example
     * // Update or create a StudentRecord
     * const studentRecord = await prisma.studentRecord.upsert({
     *   create: {
     *     // ... data to create a StudentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudentRecordUpsertArgs>(args: SelectSubset<T, StudentRecordUpsertArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordCountArgs} args - Arguments to filter StudentRecords to count.
     * @example
     * // Count the number of StudentRecords
     * const count = await prisma.studentRecord.count({
     *   where: {
     *     // ... the filter for the StudentRecords we want to count
     *   }
     * })
    **/
    count<T extends StudentRecordCountArgs>(
      args?: Subset<T, StudentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentRecordAggregateArgs>(args: Subset<T, StudentRecordAggregateArgs>): Prisma.PrismaPromise<GetStudentRecordAggregateType<T>>

    /**
     * Group by StudentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentRecord model
   */
  readonly fields: StudentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentRecord model
   */ 
  interface StudentRecordFieldRefs {
    readonly id: FieldRef<"StudentRecord", 'Int'>
    readonly userId: FieldRef<"StudentRecord", 'String'>
    readonly applicationId: FieldRef<"StudentRecord", 'Int'>
    readonly attendancePct: FieldRef<"StudentRecord", 'Float'>
    readonly xp: FieldRef<"StudentRecord", 'Int'>
    readonly streak: FieldRef<"StudentRecord", 'Int'>
    readonly createdAt: FieldRef<"StudentRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentRecord findUnique
   */
  export type StudentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord findUniqueOrThrow
   */
  export type StudentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord findFirst
   */
  export type StudentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRecords.
     */
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord findFirstOrThrow
   */
  export type StudentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRecords.
     */
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord findMany
   */
  export type StudentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter, which StudentRecords to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord create
   */
  export type StudentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a StudentRecord.
     */
    data: XOR<StudentRecordCreateInput, StudentRecordUncheckedCreateInput>
  }

  /**
   * StudentRecord createMany
   */
  export type StudentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentRecords.
     */
    data: StudentRecordCreateManyInput | StudentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentRecord update
   */
  export type StudentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a StudentRecord.
     */
    data: XOR<StudentRecordUpdateInput, StudentRecordUncheckedUpdateInput>
    /**
     * Choose, which StudentRecord to update.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord updateMany
   */
  export type StudentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentRecords.
     */
    data: XOR<StudentRecordUpdateManyMutationInput, StudentRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentRecords to update
     */
    where?: StudentRecordWhereInput
  }

  /**
   * StudentRecord upsert
   */
  export type StudentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the StudentRecord to update in case it exists.
     */
    where: StudentRecordWhereUniqueInput
    /**
     * In case the StudentRecord found by the `where` argument doesn't exist, create a new StudentRecord with this data.
     */
    create: XOR<StudentRecordCreateInput, StudentRecordUncheckedCreateInput>
    /**
     * In case the StudentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentRecordUpdateInput, StudentRecordUncheckedUpdateInput>
  }

  /**
   * StudentRecord delete
   */
  export type StudentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Filter which StudentRecord to delete.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord deleteMany
   */
  export type StudentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRecords to delete
     */
    where?: StudentRecordWhereInput
  }

  /**
   * StudentRecord without action
   */
  export type StudentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
  }


  /**
   * Model AdminRecord
   */

  export type AggregateAdminRecord = {
    _count: AdminRecordCountAggregateOutputType | null
    _avg: AdminRecordAvgAggregateOutputType | null
    _sum: AdminRecordSumAggregateOutputType | null
    _min: AdminRecordMinAggregateOutputType | null
    _max: AdminRecordMaxAggregateOutputType | null
  }

  export type AdminRecordAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminRecordSumAggregateOutputType = {
    id: number | null
  }

  export type AdminRecordMinAggregateOutputType = {
    id: number | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminRecordMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminRecordCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type AdminRecordAvgAggregateInputType = {
    id?: true
  }

  export type AdminRecordSumAggregateInputType = {
    id?: true
  }

  export type AdminRecordMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type AdminRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type AdminRecordCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type AdminRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRecord to aggregate.
     */
    where?: AdminRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecords to fetch.
     */
    orderBy?: AdminRecordOrderByWithRelationInput | AdminRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRecords
    **/
    _count?: true | AdminRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRecordMaxAggregateInputType
  }

  export type GetAdminRecordAggregateType<T extends AdminRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRecord[P]>
      : GetScalarType<T[P], AggregateAdminRecord[P]>
  }




  export type AdminRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRecordWhereInput
    orderBy?: AdminRecordOrderByWithAggregationInput | AdminRecordOrderByWithAggregationInput[]
    by: AdminRecordScalarFieldEnum[] | AdminRecordScalarFieldEnum
    having?: AdminRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRecordCountAggregateInputType | true
    _avg?: AdminRecordAvgAggregateInputType
    _sum?: AdminRecordSumAggregateInputType
    _min?: AdminRecordMinAggregateInputType
    _max?: AdminRecordMaxAggregateInputType
  }

  export type AdminRecordGroupByOutputType = {
    id: number
    userId: string
    role: string
    createdAt: Date
    _count: AdminRecordCountAggregateOutputType | null
    _avg: AdminRecordAvgAggregateOutputType | null
    _sum: AdminRecordSumAggregateOutputType | null
    _min: AdminRecordMinAggregateOutputType | null
    _max: AdminRecordMaxAggregateOutputType | null
  }

  type GetAdminRecordGroupByPayload<T extends AdminRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRecordGroupByOutputType[P]>
        }
      >
    >


  export type AdminRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminRecord"]>


  export type AdminRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }


  export type $AdminRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["adminRecord"]>
    composites: {}
  }

  type AdminRecordGetPayload<S extends boolean | null | undefined | AdminRecordDefaultArgs> = $Result.GetResult<Prisma.$AdminRecordPayload, S>

  type AdminRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRecordCountAggregateInputType | true
    }

  export interface AdminRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRecord'], meta: { name: 'AdminRecord' } }
    /**
     * Find zero or one AdminRecord that matches the filter.
     * @param {AdminRecordFindUniqueArgs} args - Arguments to find a AdminRecord
     * @example
     * // Get one AdminRecord
     * const adminRecord = await prisma.adminRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRecordFindUniqueArgs>(args: SelectSubset<T, AdminRecordFindUniqueArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminRecordFindUniqueOrThrowArgs} args - Arguments to find a AdminRecord
     * @example
     * // Get one AdminRecord
     * const adminRecord = await prisma.adminRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordFindFirstArgs} args - Arguments to find a AdminRecord
     * @example
     * // Get one AdminRecord
     * const adminRecord = await prisma.adminRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRecordFindFirstArgs>(args?: SelectSubset<T, AdminRecordFindFirstArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordFindFirstOrThrowArgs} args - Arguments to find a AdminRecord
     * @example
     * // Get one AdminRecord
     * const adminRecord = await prisma.adminRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRecords
     * const adminRecords = await prisma.adminRecord.findMany()
     * 
     * // Get first 10 AdminRecords
     * const adminRecords = await prisma.adminRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRecordWithIdOnly = await prisma.adminRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRecordFindManyArgs>(args?: SelectSubset<T, AdminRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminRecord.
     * @param {AdminRecordCreateArgs} args - Arguments to create a AdminRecord.
     * @example
     * // Create one AdminRecord
     * const AdminRecord = await prisma.adminRecord.create({
     *   data: {
     *     // ... data to create a AdminRecord
     *   }
     * })
     * 
     */
    create<T extends AdminRecordCreateArgs>(args: SelectSubset<T, AdminRecordCreateArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminRecords.
     * @param {AdminRecordCreateManyArgs} args - Arguments to create many AdminRecords.
     * @example
     * // Create many AdminRecords
     * const adminRecord = await prisma.adminRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRecordCreateManyArgs>(args?: SelectSubset<T, AdminRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminRecord.
     * @param {AdminRecordDeleteArgs} args - Arguments to delete one AdminRecord.
     * @example
     * // Delete one AdminRecord
     * const AdminRecord = await prisma.adminRecord.delete({
     *   where: {
     *     // ... filter to delete one AdminRecord
     *   }
     * })
     * 
     */
    delete<T extends AdminRecordDeleteArgs>(args: SelectSubset<T, AdminRecordDeleteArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminRecord.
     * @param {AdminRecordUpdateArgs} args - Arguments to update one AdminRecord.
     * @example
     * // Update one AdminRecord
     * const adminRecord = await prisma.adminRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRecordUpdateArgs>(args: SelectSubset<T, AdminRecordUpdateArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminRecords.
     * @param {AdminRecordDeleteManyArgs} args - Arguments to filter AdminRecords to delete.
     * @example
     * // Delete a few AdminRecords
     * const { count } = await prisma.adminRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRecordDeleteManyArgs>(args?: SelectSubset<T, AdminRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRecords
     * const adminRecord = await prisma.adminRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRecordUpdateManyArgs>(args: SelectSubset<T, AdminRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRecord.
     * @param {AdminRecordUpsertArgs} args - Arguments to update or create a AdminRecord.
     * @example
     * // Update or create a AdminRecord
     * const adminRecord = await prisma.adminRecord.upsert({
     *   create: {
     *     // ... data to create a AdminRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRecord we want to update
     *   }
     * })
     */
    upsert<T extends AdminRecordUpsertArgs>(args: SelectSubset<T, AdminRecordUpsertArgs<ExtArgs>>): Prisma__AdminRecordClient<$Result.GetResult<Prisma.$AdminRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordCountArgs} args - Arguments to filter AdminRecords to count.
     * @example
     * // Count the number of AdminRecords
     * const count = await prisma.adminRecord.count({
     *   where: {
     *     // ... the filter for the AdminRecords we want to count
     *   }
     * })
    **/
    count<T extends AdminRecordCountArgs>(
      args?: Subset<T, AdminRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminRecordAggregateArgs>(args: Subset<T, AdminRecordAggregateArgs>): Prisma.PrismaPromise<GetAdminRecordAggregateType<T>>

    /**
     * Group by AdminRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRecordGroupByArgs['orderBy'] }
        : { orderBy?: AdminRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRecord model
   */
  readonly fields: AdminRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminRecord model
   */ 
  interface AdminRecordFieldRefs {
    readonly id: FieldRef<"AdminRecord", 'Int'>
    readonly userId: FieldRef<"AdminRecord", 'String'>
    readonly role: FieldRef<"AdminRecord", 'String'>
    readonly createdAt: FieldRef<"AdminRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminRecord findUnique
   */
  export type AdminRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter, which AdminRecord to fetch.
     */
    where: AdminRecordWhereUniqueInput
  }

  /**
   * AdminRecord findUniqueOrThrow
   */
  export type AdminRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter, which AdminRecord to fetch.
     */
    where: AdminRecordWhereUniqueInput
  }

  /**
   * AdminRecord findFirst
   */
  export type AdminRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter, which AdminRecord to fetch.
     */
    where?: AdminRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecords to fetch.
     */
    orderBy?: AdminRecordOrderByWithRelationInput | AdminRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRecords.
     */
    cursor?: AdminRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRecords.
     */
    distinct?: AdminRecordScalarFieldEnum | AdminRecordScalarFieldEnum[]
  }

  /**
   * AdminRecord findFirstOrThrow
   */
  export type AdminRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter, which AdminRecord to fetch.
     */
    where?: AdminRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecords to fetch.
     */
    orderBy?: AdminRecordOrderByWithRelationInput | AdminRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRecords.
     */
    cursor?: AdminRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRecords.
     */
    distinct?: AdminRecordScalarFieldEnum | AdminRecordScalarFieldEnum[]
  }

  /**
   * AdminRecord findMany
   */
  export type AdminRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter, which AdminRecords to fetch.
     */
    where?: AdminRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecords to fetch.
     */
    orderBy?: AdminRecordOrderByWithRelationInput | AdminRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRecords.
     */
    cursor?: AdminRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecords.
     */
    skip?: number
    distinct?: AdminRecordScalarFieldEnum | AdminRecordScalarFieldEnum[]
  }

  /**
   * AdminRecord create
   */
  export type AdminRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminRecord.
     */
    data: XOR<AdminRecordCreateInput, AdminRecordUncheckedCreateInput>
  }

  /**
   * AdminRecord createMany
   */
  export type AdminRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRecords.
     */
    data: AdminRecordCreateManyInput | AdminRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminRecord update
   */
  export type AdminRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminRecord.
     */
    data: XOR<AdminRecordUpdateInput, AdminRecordUncheckedUpdateInput>
    /**
     * Choose, which AdminRecord to update.
     */
    where: AdminRecordWhereUniqueInput
  }

  /**
   * AdminRecord updateMany
   */
  export type AdminRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRecords.
     */
    data: XOR<AdminRecordUpdateManyMutationInput, AdminRecordUncheckedUpdateManyInput>
    /**
     * Filter which AdminRecords to update
     */
    where?: AdminRecordWhereInput
  }

  /**
   * AdminRecord upsert
   */
  export type AdminRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminRecord to update in case it exists.
     */
    where: AdminRecordWhereUniqueInput
    /**
     * In case the AdminRecord found by the `where` argument doesn't exist, create a new AdminRecord with this data.
     */
    create: XOR<AdminRecordCreateInput, AdminRecordUncheckedCreateInput>
    /**
     * In case the AdminRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRecordUpdateInput, AdminRecordUncheckedUpdateInput>
  }

  /**
   * AdminRecord delete
   */
  export type AdminRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
    /**
     * Filter which AdminRecord to delete.
     */
    where: AdminRecordWhereUniqueInput
  }

  /**
   * AdminRecord deleteMany
   */
  export type AdminRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRecords to delete
     */
    where?: AdminRecordWhereInput
  }

  /**
   * AdminRecord without action
   */
  export type AdminRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecord
     */
    select?: AdminRecordSelect<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: bigint | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: bigint | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: bigint | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    entity: number
    entityId: number
    payload: number
    ip: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    ip?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    ip?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    payload?: true
    ip?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: bigint
    actorId: string | null
    action: string
    entity: string
    entityId: string | null
    payload: JsonValue | null
    ip: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    payload?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>


  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    payload?: boolean
    ip?: boolean
    createdAt?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      actorId: string | null
      action: string
      entity: string
      entityId: string | null
      payload: Prisma.JsonValue | null
      ip: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'BigInt'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly payload: FieldRef<"AuditLog", 'Json'>
    readonly ip: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    type: string | null
    generatedBy: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    type: string | null
    generatedBy: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    type: number
    data: number
    generatedBy: number
    createdAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    type?: true
    generatedBy?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    type?: true
    generatedBy?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    type?: true
    data?: true
    generatedBy?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    type: string
    data: JsonValue
    generatedBy: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    generatedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["report"]>


  export type ReportSelectScalar = {
    id?: boolean
    type?: boolean
    data?: boolean
    generatedBy?: boolean
    createdAt?: boolean
  }


  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      data: Prisma.JsonValue
      generatedBy: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */ 
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly type: FieldRef<"Report", 'String'>
    readonly data: FieldRef<"Report", 'Json'>
    readonly generatedBy: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicationFormScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    photoUrl: 'photoUrl',
    gender: 'gender',
    dob: 'dob',
    fatherName: 'fatherName',
    motherName: 'motherName',
    phone: 'phone',
    whatsapp: 'whatsapp',
    email: 'email',
    passwordHash: 'passwordHash',
    address: 'address',
    district: 'district',
    state: 'state',
    country: 'country',
    pin: 'pin',
    aadhaar: 'aadhaar',
    collegeName: 'collegeName',
    university: 'university',
    branch: 'branch',
    semester: 'semester',
    rollNumber: 'rollNumber',
    registrationNo: 'registrationNo',
    studentIdCard: 'studentIdCard',
    tenthPct: 'tenthPct',
    twelfthPct: 'twelfthPct',
    diplomaPct: 'diplomaPct',
    degreeCgpa: 'degreeCgpa',
    skills: 'skills',
    resumeUrl: 'resumeUrl',
    aadhaarUrl: 'aadhaarUrl',
    profilePicUrl: 'profilePicUrl',
    interestedCourse: 'interestedCourse',
    preferredLang: 'preferredLang',
    emergencyContact: 'emergencyContact',
    declaration: 'declaration',
    status: 'status',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    generatedStudentId: 'generatedStudentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationFormScalarFieldEnum = (typeof ApplicationFormScalarFieldEnum)[keyof typeof ApplicationFormScalarFieldEnum]


  export const StudentRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    applicationId: 'applicationId',
    attendancePct: 'attendancePct',
    xp: 'xp',
    streak: 'streak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentRecordScalarFieldEnum = (typeof StudentRecordScalarFieldEnum)[keyof typeof StudentRecordScalarFieldEnum]


  export const AdminRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type AdminRecordScalarFieldEnum = (typeof AdminRecordScalarFieldEnum)[keyof typeof AdminRecordScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    payload: 'payload',
    ip: 'ip',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    type: 'type',
    data: 'data',
    generatedBy: 'generatedBy',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type ApplicationFormWhereInput = {
    AND?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    OR?: ApplicationFormWhereInput[]
    NOT?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    id?: IntFilter<"ApplicationForm"> | number
    fullName?: StringFilter<"ApplicationForm"> | string
    photoUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    gender?: StringFilter<"ApplicationForm"> | string
    dob?: DateTimeFilter<"ApplicationForm"> | Date | string
    fatherName?: StringFilter<"ApplicationForm"> | string
    motherName?: StringFilter<"ApplicationForm"> | string
    phone?: StringFilter<"ApplicationForm"> | string
    whatsapp?: StringFilter<"ApplicationForm"> | string
    email?: StringFilter<"ApplicationForm"> | string
    passwordHash?: StringFilter<"ApplicationForm"> | string
    address?: StringFilter<"ApplicationForm"> | string
    district?: StringFilter<"ApplicationForm"> | string
    state?: StringFilter<"ApplicationForm"> | string
    country?: StringFilter<"ApplicationForm"> | string
    pin?: StringFilter<"ApplicationForm"> | string
    aadhaar?: StringFilter<"ApplicationForm"> | string
    collegeName?: StringFilter<"ApplicationForm"> | string
    university?: StringFilter<"ApplicationForm"> | string
    branch?: StringFilter<"ApplicationForm"> | string
    semester?: IntFilter<"ApplicationForm"> | number
    rollNumber?: StringFilter<"ApplicationForm"> | string
    registrationNo?: StringFilter<"ApplicationForm"> | string
    studentIdCard?: StringNullableFilter<"ApplicationForm"> | string | null
    tenthPct?: FloatFilter<"ApplicationForm"> | number
    twelfthPct?: FloatNullableFilter<"ApplicationForm"> | number | null
    diplomaPct?: FloatNullableFilter<"ApplicationForm"> | number | null
    degreeCgpa?: FloatFilter<"ApplicationForm"> | number
    skills?: StringFilter<"ApplicationForm"> | string
    resumeUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    aadhaarUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    profilePicUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    interestedCourse?: StringFilter<"ApplicationForm"> | string
    preferredLang?: StringFilter<"ApplicationForm"> | string
    emergencyContact?: StringFilter<"ApplicationForm"> | string
    declaration?: BoolFilter<"ApplicationForm"> | boolean
    status?: StringFilter<"ApplicationForm"> | string
    reviewedBy?: StringNullableFilter<"ApplicationForm"> | string | null
    reviewedAt?: DateTimeNullableFilter<"ApplicationForm"> | Date | string | null
    generatedStudentId?: StringNullableFilter<"ApplicationForm"> | string | null
    createdAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationForm"> | Date | string
  }

  export type ApplicationFormOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    dob?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    address?: SortOrder
    district?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pin?: SortOrder
    aadhaar?: SortOrder
    collegeName?: SortOrder
    university?: SortOrder
    branch?: SortOrder
    semester?: SortOrder
    rollNumber?: SortOrder
    registrationNo?: SortOrder
    studentIdCard?: SortOrderInput | SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrderInput | SortOrder
    diplomaPct?: SortOrderInput | SortOrder
    degreeCgpa?: SortOrder
    skills?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    aadhaarUrl?: SortOrderInput | SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    interestedCourse?: SortOrder
    preferredLang?: SortOrder
    emergencyContact?: SortOrder
    declaration?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    generatedStudentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    aadhaar?: string
    AND?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    OR?: ApplicationFormWhereInput[]
    NOT?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    fullName?: StringFilter<"ApplicationForm"> | string
    photoUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    gender?: StringFilter<"ApplicationForm"> | string
    dob?: DateTimeFilter<"ApplicationForm"> | Date | string
    fatherName?: StringFilter<"ApplicationForm"> | string
    motherName?: StringFilter<"ApplicationForm"> | string
    phone?: StringFilter<"ApplicationForm"> | string
    whatsapp?: StringFilter<"ApplicationForm"> | string
    passwordHash?: StringFilter<"ApplicationForm"> | string
    address?: StringFilter<"ApplicationForm"> | string
    district?: StringFilter<"ApplicationForm"> | string
    state?: StringFilter<"ApplicationForm"> | string
    country?: StringFilter<"ApplicationForm"> | string
    pin?: StringFilter<"ApplicationForm"> | string
    collegeName?: StringFilter<"ApplicationForm"> | string
    university?: StringFilter<"ApplicationForm"> | string
    branch?: StringFilter<"ApplicationForm"> | string
    semester?: IntFilter<"ApplicationForm"> | number
    rollNumber?: StringFilter<"ApplicationForm"> | string
    registrationNo?: StringFilter<"ApplicationForm"> | string
    studentIdCard?: StringNullableFilter<"ApplicationForm"> | string | null
    tenthPct?: FloatFilter<"ApplicationForm"> | number
    twelfthPct?: FloatNullableFilter<"ApplicationForm"> | number | null
    diplomaPct?: FloatNullableFilter<"ApplicationForm"> | number | null
    degreeCgpa?: FloatFilter<"ApplicationForm"> | number
    skills?: StringFilter<"ApplicationForm"> | string
    resumeUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    aadhaarUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    profilePicUrl?: StringNullableFilter<"ApplicationForm"> | string | null
    interestedCourse?: StringFilter<"ApplicationForm"> | string
    preferredLang?: StringFilter<"ApplicationForm"> | string
    emergencyContact?: StringFilter<"ApplicationForm"> | string
    declaration?: BoolFilter<"ApplicationForm"> | boolean
    status?: StringFilter<"ApplicationForm"> | string
    reviewedBy?: StringNullableFilter<"ApplicationForm"> | string | null
    reviewedAt?: DateTimeNullableFilter<"ApplicationForm"> | Date | string | null
    generatedStudentId?: StringNullableFilter<"ApplicationForm"> | string | null
    createdAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationForm"> | Date | string
  }, "id" | "email" | "aadhaar">

  export type ApplicationFormOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    dob?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    address?: SortOrder
    district?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pin?: SortOrder
    aadhaar?: SortOrder
    collegeName?: SortOrder
    university?: SortOrder
    branch?: SortOrder
    semester?: SortOrder
    rollNumber?: SortOrder
    registrationNo?: SortOrder
    studentIdCard?: SortOrderInput | SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrderInput | SortOrder
    diplomaPct?: SortOrderInput | SortOrder
    degreeCgpa?: SortOrder
    skills?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    aadhaarUrl?: SortOrderInput | SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    interestedCourse?: SortOrder
    preferredLang?: SortOrder
    emergencyContact?: SortOrder
    declaration?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    generatedStudentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationFormCountOrderByAggregateInput
    _avg?: ApplicationFormAvgOrderByAggregateInput
    _max?: ApplicationFormMaxOrderByAggregateInput
    _min?: ApplicationFormMinOrderByAggregateInput
    _sum?: ApplicationFormSumOrderByAggregateInput
  }

  export type ApplicationFormScalarWhereWithAggregatesInput = {
    AND?: ApplicationFormScalarWhereWithAggregatesInput | ApplicationFormScalarWhereWithAggregatesInput[]
    OR?: ApplicationFormScalarWhereWithAggregatesInput[]
    NOT?: ApplicationFormScalarWhereWithAggregatesInput | ApplicationFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationForm"> | number
    fullName?: StringWithAggregatesFilter<"ApplicationForm"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    gender?: StringWithAggregatesFilter<"ApplicationForm"> | string
    dob?: DateTimeWithAggregatesFilter<"ApplicationForm"> | Date | string
    fatherName?: StringWithAggregatesFilter<"ApplicationForm"> | string
    motherName?: StringWithAggregatesFilter<"ApplicationForm"> | string
    phone?: StringWithAggregatesFilter<"ApplicationForm"> | string
    whatsapp?: StringWithAggregatesFilter<"ApplicationForm"> | string
    email?: StringWithAggregatesFilter<"ApplicationForm"> | string
    passwordHash?: StringWithAggregatesFilter<"ApplicationForm"> | string
    address?: StringWithAggregatesFilter<"ApplicationForm"> | string
    district?: StringWithAggregatesFilter<"ApplicationForm"> | string
    state?: StringWithAggregatesFilter<"ApplicationForm"> | string
    country?: StringWithAggregatesFilter<"ApplicationForm"> | string
    pin?: StringWithAggregatesFilter<"ApplicationForm"> | string
    aadhaar?: StringWithAggregatesFilter<"ApplicationForm"> | string
    collegeName?: StringWithAggregatesFilter<"ApplicationForm"> | string
    university?: StringWithAggregatesFilter<"ApplicationForm"> | string
    branch?: StringWithAggregatesFilter<"ApplicationForm"> | string
    semester?: IntWithAggregatesFilter<"ApplicationForm"> | number
    rollNumber?: StringWithAggregatesFilter<"ApplicationForm"> | string
    registrationNo?: StringWithAggregatesFilter<"ApplicationForm"> | string
    studentIdCard?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    tenthPct?: FloatWithAggregatesFilter<"ApplicationForm"> | number
    twelfthPct?: FloatNullableWithAggregatesFilter<"ApplicationForm"> | number | null
    diplomaPct?: FloatNullableWithAggregatesFilter<"ApplicationForm"> | number | null
    degreeCgpa?: FloatWithAggregatesFilter<"ApplicationForm"> | number
    skills?: StringWithAggregatesFilter<"ApplicationForm"> | string
    resumeUrl?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    aadhaarUrl?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    profilePicUrl?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    interestedCourse?: StringWithAggregatesFilter<"ApplicationForm"> | string
    preferredLang?: StringWithAggregatesFilter<"ApplicationForm"> | string
    emergencyContact?: StringWithAggregatesFilter<"ApplicationForm"> | string
    declaration?: BoolWithAggregatesFilter<"ApplicationForm"> | boolean
    status?: StringWithAggregatesFilter<"ApplicationForm"> | string
    reviewedBy?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"ApplicationForm"> | Date | string | null
    generatedStudentId?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationForm"> | Date | string
  }

  export type StudentRecordWhereInput = {
    AND?: StudentRecordWhereInput | StudentRecordWhereInput[]
    OR?: StudentRecordWhereInput[]
    NOT?: StudentRecordWhereInput | StudentRecordWhereInput[]
    id?: IntFilter<"StudentRecord"> | number
    userId?: StringFilter<"StudentRecord"> | string
    applicationId?: IntFilter<"StudentRecord"> | number
    attendancePct?: FloatFilter<"StudentRecord"> | number
    xp?: IntFilter<"StudentRecord"> | number
    streak?: IntFilter<"StudentRecord"> | number
    createdAt?: DateTimeFilter<"StudentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentRecord"> | Date | string
  }

  export type StudentRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: StudentRecordWhereInput | StudentRecordWhereInput[]
    OR?: StudentRecordWhereInput[]
    NOT?: StudentRecordWhereInput | StudentRecordWhereInput[]
    applicationId?: IntFilter<"StudentRecord"> | number
    attendancePct?: FloatFilter<"StudentRecord"> | number
    xp?: IntFilter<"StudentRecord"> | number
    streak?: IntFilter<"StudentRecord"> | number
    createdAt?: DateTimeFilter<"StudentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentRecord"> | Date | string
  }, "id" | "userId">

  export type StudentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentRecordCountOrderByAggregateInput
    _avg?: StudentRecordAvgOrderByAggregateInput
    _max?: StudentRecordMaxOrderByAggregateInput
    _min?: StudentRecordMinOrderByAggregateInput
    _sum?: StudentRecordSumOrderByAggregateInput
  }

  export type StudentRecordScalarWhereWithAggregatesInput = {
    AND?: StudentRecordScalarWhereWithAggregatesInput | StudentRecordScalarWhereWithAggregatesInput[]
    OR?: StudentRecordScalarWhereWithAggregatesInput[]
    NOT?: StudentRecordScalarWhereWithAggregatesInput | StudentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentRecord"> | number
    userId?: StringWithAggregatesFilter<"StudentRecord"> | string
    applicationId?: IntWithAggregatesFilter<"StudentRecord"> | number
    attendancePct?: FloatWithAggregatesFilter<"StudentRecord"> | number
    xp?: IntWithAggregatesFilter<"StudentRecord"> | number
    streak?: IntWithAggregatesFilter<"StudentRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentRecord"> | Date | string
  }

  export type AdminRecordWhereInput = {
    AND?: AdminRecordWhereInput | AdminRecordWhereInput[]
    OR?: AdminRecordWhereInput[]
    NOT?: AdminRecordWhereInput | AdminRecordWhereInput[]
    id?: IntFilter<"AdminRecord"> | number
    userId?: StringFilter<"AdminRecord"> | string
    role?: StringFilter<"AdminRecord"> | string
    createdAt?: DateTimeFilter<"AdminRecord"> | Date | string
  }

  export type AdminRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: AdminRecordWhereInput | AdminRecordWhereInput[]
    OR?: AdminRecordWhereInput[]
    NOT?: AdminRecordWhereInput | AdminRecordWhereInput[]
    role?: StringFilter<"AdminRecord"> | string
    createdAt?: DateTimeFilter<"AdminRecord"> | Date | string
  }, "id" | "userId">

  export type AdminRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: AdminRecordCountOrderByAggregateInput
    _avg?: AdminRecordAvgOrderByAggregateInput
    _max?: AdminRecordMaxOrderByAggregateInput
    _min?: AdminRecordMinOrderByAggregateInput
    _sum?: AdminRecordSumOrderByAggregateInput
  }

  export type AdminRecordScalarWhereWithAggregatesInput = {
    AND?: AdminRecordScalarWhereWithAggregatesInput | AdminRecordScalarWhereWithAggregatesInput[]
    OR?: AdminRecordScalarWhereWithAggregatesInput[]
    NOT?: AdminRecordScalarWhereWithAggregatesInput | AdminRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminRecord"> | number
    userId?: StringWithAggregatesFilter<"AdminRecord"> | string
    role?: StringWithAggregatesFilter<"AdminRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminRecord"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: BigIntFilter<"AuditLog"> | bigint | number
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: JsonNullableFilter<"AuditLog">
    ip?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: JsonNullableFilter<"AuditLog">
    ip?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AuditLog"> | bigint | number
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"AuditLog">
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    type?: StringFilter<"Report"> | string
    data?: JsonFilter<"Report">
    generatedBy?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    generatedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    type?: StringFilter<"Report"> | string
    data?: JsonFilter<"Report">
    generatedBy?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    generatedBy?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    type?: StringWithAggregatesFilter<"Report"> | string
    data?: JsonWithAggregatesFilter<"Report">
    generatedBy?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type ApplicationFormCreateInput = {
    fullName: string
    photoUrl?: string | null
    gender: string
    dob: Date | string
    fatherName: string
    motherName: string
    phone: string
    whatsapp: string
    email: string
    passwordHash: string
    address: string
    district: string
    state: string
    country?: string
    pin: string
    aadhaar: string
    collegeName: string
    university: string
    branch: string
    semester: number
    rollNumber: string
    registrationNo: string
    studentIdCard?: string | null
    tenthPct: number
    twelfthPct?: number | null
    diplomaPct?: number | null
    degreeCgpa: number
    skills: string
    resumeUrl?: string | null
    aadhaarUrl?: string | null
    profilePicUrl?: string | null
    interestedCourse: string
    preferredLang: string
    emergencyContact: string
    declaration: boolean
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    generatedStudentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormUncheckedCreateInput = {
    id?: number
    fullName: string
    photoUrl?: string | null
    gender: string
    dob: Date | string
    fatherName: string
    motherName: string
    phone: string
    whatsapp: string
    email: string
    passwordHash: string
    address: string
    district: string
    state: string
    country?: string
    pin: string
    aadhaar: string
    collegeName: string
    university: string
    branch: string
    semester: number
    rollNumber: string
    registrationNo: string
    studentIdCard?: string | null
    tenthPct: number
    twelfthPct?: number | null
    diplomaPct?: number | null
    degreeCgpa: number
    skills: string
    resumeUrl?: string | null
    aadhaarUrl?: string | null
    profilePicUrl?: string | null
    interestedCourse: string
    preferredLang: string
    emergencyContact: string
    declaration: boolean
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    generatedStudentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    rollNumber?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    studentIdCard?: NullableStringFieldUpdateOperationsInput | string | null
    tenthPct?: FloatFieldUpdateOperationsInput | number
    twelfthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    diplomaPct?: NullableFloatFieldUpdateOperationsInput | number | null
    degreeCgpa?: FloatFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interestedCourse?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    declaration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    rollNumber?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    studentIdCard?: NullableStringFieldUpdateOperationsInput | string | null
    tenthPct?: FloatFieldUpdateOperationsInput | number
    twelfthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    diplomaPct?: NullableFloatFieldUpdateOperationsInput | number | null
    degreeCgpa?: FloatFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interestedCourse?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    declaration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormCreateManyInput = {
    id?: number
    fullName: string
    photoUrl?: string | null
    gender: string
    dob: Date | string
    fatherName: string
    motherName: string
    phone: string
    whatsapp: string
    email: string
    passwordHash: string
    address: string
    district: string
    state: string
    country?: string
    pin: string
    aadhaar: string
    collegeName: string
    university: string
    branch: string
    semester: number
    rollNumber: string
    registrationNo: string
    studentIdCard?: string | null
    tenthPct: number
    twelfthPct?: number | null
    diplomaPct?: number | null
    degreeCgpa: number
    skills: string
    resumeUrl?: string | null
    aadhaarUrl?: string | null
    profilePicUrl?: string | null
    interestedCourse: string
    preferredLang: string
    emergencyContact: string
    declaration: boolean
    status?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    generatedStudentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    rollNumber?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    studentIdCard?: NullableStringFieldUpdateOperationsInput | string | null
    tenthPct?: FloatFieldUpdateOperationsInput | number
    twelfthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    diplomaPct?: NullableFloatFieldUpdateOperationsInput | number | null
    degreeCgpa?: FloatFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interestedCourse?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    declaration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    aadhaar?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    rollNumber?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    studentIdCard?: NullableStringFieldUpdateOperationsInput | string | null
    tenthPct?: FloatFieldUpdateOperationsInput | number
    twelfthPct?: NullableFloatFieldUpdateOperationsInput | number | null
    diplomaPct?: NullableFloatFieldUpdateOperationsInput | number | null
    degreeCgpa?: FloatFieldUpdateOperationsInput | number
    skills?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aadhaarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    interestedCourse?: StringFieldUpdateOperationsInput | string
    preferredLang?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    declaration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generatedStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentRecordCreateInput = {
    userId: string
    applicationId: number
    attendancePct?: number
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentRecordUncheckedCreateInput = {
    id?: number
    userId: string
    applicationId: number
    attendancePct?: number
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentRecordUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    attendancePct?: FloatFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    attendancePct?: FloatFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentRecordCreateManyInput = {
    id?: number
    userId: string
    applicationId: number
    attendancePct?: number
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentRecordUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    attendancePct?: FloatFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    attendancePct?: FloatFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecordCreateInput = {
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminRecordUncheckedCreateInput = {
    id?: number
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminRecordUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecordCreateManyInput = {
    id?: number
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminRecordUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: bigint | number
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: bigint | number
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: bigint | number
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    type: string
    data: JsonNullValueInput | InputJsonValue
    generatedBy: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    generatedBy: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    generatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    generatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: number
    type: string
    data: JsonNullValueInput | InputJsonValue
    generatedBy: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    generatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    generatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationFormCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    address?: SortOrder
    district?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pin?: SortOrder
    aadhaar?: SortOrder
    collegeName?: SortOrder
    university?: SortOrder
    branch?: SortOrder
    semester?: SortOrder
    rollNumber?: SortOrder
    registrationNo?: SortOrder
    studentIdCard?: SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrder
    diplomaPct?: SortOrder
    degreeCgpa?: SortOrder
    skills?: SortOrder
    resumeUrl?: SortOrder
    aadhaarUrl?: SortOrder
    profilePicUrl?: SortOrder
    interestedCourse?: SortOrder
    preferredLang?: SortOrder
    emergencyContact?: SortOrder
    declaration?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    generatedStudentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrder
    diplomaPct?: SortOrder
    degreeCgpa?: SortOrder
  }

  export type ApplicationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    address?: SortOrder
    district?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pin?: SortOrder
    aadhaar?: SortOrder
    collegeName?: SortOrder
    university?: SortOrder
    branch?: SortOrder
    semester?: SortOrder
    rollNumber?: SortOrder
    registrationNo?: SortOrder
    studentIdCard?: SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrder
    diplomaPct?: SortOrder
    degreeCgpa?: SortOrder
    skills?: SortOrder
    resumeUrl?: SortOrder
    aadhaarUrl?: SortOrder
    profilePicUrl?: SortOrder
    interestedCourse?: SortOrder
    preferredLang?: SortOrder
    emergencyContact?: SortOrder
    declaration?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    generatedStudentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photoUrl?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    address?: SortOrder
    district?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pin?: SortOrder
    aadhaar?: SortOrder
    collegeName?: SortOrder
    university?: SortOrder
    branch?: SortOrder
    semester?: SortOrder
    rollNumber?: SortOrder
    registrationNo?: SortOrder
    studentIdCard?: SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrder
    diplomaPct?: SortOrder
    degreeCgpa?: SortOrder
    skills?: SortOrder
    resumeUrl?: SortOrder
    aadhaarUrl?: SortOrder
    profilePicUrl?: SortOrder
    interestedCourse?: SortOrder
    preferredLang?: SortOrder
    emergencyContact?: SortOrder
    declaration?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    generatedStudentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    tenthPct?: SortOrder
    twelfthPct?: SortOrder
    diplomaPct?: SortOrder
    degreeCgpa?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StudentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
  }

  export type StudentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    attendancePct?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
  }

  export type AdminRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminRecordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminRecordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    generatedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    generatedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    generatedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ApplicationFormDefaultArgs instead
     */
    export type ApplicationFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationFormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentRecordDefaultArgs instead
     */
    export type StudentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRecordDefaultArgs instead
     */
    export type AdminRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportDefaultArgs instead
     */
    export type ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}