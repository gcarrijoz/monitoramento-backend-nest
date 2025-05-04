
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model RoomHistory
 * 
 */
export type RoomHistory = $Result.DefaultSelection<Prisma.$RoomHistoryPayload>
/**
 * Model Measurement
 * 
 */
export type Measurement = $Result.DefaultSelection<Prisma.$MeasurementPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model AlertHistory
 * 
 */
export type AlertHistory = $Result.DefaultSelection<Prisma.$AlertHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomHistory`: Exposes CRUD operations for the **RoomHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomHistories
    * const roomHistories = await prisma.roomHistory.findMany()
    * ```
    */
  get roomHistory(): Prisma.RoomHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **Measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.MeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertHistory`: Exposes CRUD operations for the **AlertHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertHistories
    * const alertHistories = await prisma.alertHistory.findMany()
    * ```
    */
  get alertHistory(): Prisma.AlertHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Room: 'Room',
    Device: 'Device',
    Patient: 'Patient',
    RoomHistory: 'RoomHistory',
    Measurement: 'Measurement',
    Alert: 'Alert',
    AlertHistory: 'AlertHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "device" | "patient" | "roomHistory" | "measurement" | "alert" | "alertHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      RoomHistory: {
        payload: Prisma.$RoomHistoryPayload<ExtArgs>
        fields: Prisma.RoomHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          findFirst: {
            args: Prisma.RoomHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          findMany: {
            args: Prisma.RoomHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>[]
          }
          create: {
            args: Prisma.RoomHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          createMany: {
            args: Prisma.RoomHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>[]
          }
          delete: {
            args: Prisma.RoomHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          update: {
            args: Prisma.RoomHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RoomHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RoomHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomHistoryPayload>
          }
          aggregate: {
            args: Prisma.RoomHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomHistory>
          }
          groupBy: {
            args: Prisma.RoomHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RoomHistoryCountAggregateOutputType> | number
          }
        }
      }
      Measurement: {
        payload: Prisma.$MeasurementPayload<ExtArgs>
        fields: Prisma.MeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findFirst: {
            args: Prisma.MeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findMany: {
            args: Prisma.MeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          create: {
            args: Prisma.MeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          createMany: {
            args: Prisma.MeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          delete: {
            args: Prisma.MeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          update: {
            args: Prisma.MeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          upsert: {
            args: Prisma.MeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.MeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      AlertHistory: {
        payload: Prisma.$AlertHistoryPayload<ExtArgs>
        fields: Prisma.AlertHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          findFirst: {
            args: Prisma.AlertHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          findMany: {
            args: Prisma.AlertHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>[]
          }
          create: {
            args: Prisma.AlertHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          createMany: {
            args: Prisma.AlertHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>[]
          }
          delete: {
            args: Prisma.AlertHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          update: {
            args: Prisma.AlertHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AlertHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AlertHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertHistoryPayload>
          }
          aggregate: {
            args: Prisma.AlertHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertHistory>
          }
          groupBy: {
            args: Prisma.AlertHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AlertHistoryCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    device?: DeviceOmit
    patient?: PatientOmit
    roomHistory?: RoomHistoryOmit
    measurement?: MeasurementOmit
    alert?: AlertOmit
    alertHistory?: AlertHistoryOmit
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
    | 'updateManyAndReturn'
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
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    devices: number
    roomHistory: number
    alerts: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | RoomCountOutputTypeCountDevicesArgs
    roomHistory?: boolean | RoomCountOutputTypeCountRoomHistoryArgs
    alerts?: boolean | RoomCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomHistoryWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    measurements: number
    alerts: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | DeviceCountOutputTypeCountMeasurementsArgs
    alerts?: boolean | DeviceCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    roomHistory: number
    measurements: number
    alerts: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomHistory?: boolean | PatientCountOutputTypeCountRoomHistoryArgs
    measurements?: boolean | PatientCountOutputTypeCountMeasurementsArgs
    alerts?: boolean | PatientCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountRoomHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomHistoryWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type AlertCountOutputType
   */

  export type AlertCountOutputType = {
    alertHistory: number
  }

  export type AlertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alertHistory?: boolean | AlertCountOutputTypeCountAlertHistoryArgs
  }

  // Custom InputTypes
  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertCountOutputType
     */
    select?: AlertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlertCountOutputType without action
   */
  export type AlertCountOutputTypeCountAlertHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    floor: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    floor: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    sector: string | null
    floor: number | null
    number: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    sector: string | null
    floor: number | null
    number: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    sector: number
    floor: number
    number: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    floor?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    floor?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    sector?: true
    floor?: true
    number?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    sector?: true
    floor?: true
    number?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    sector?: true
    floor?: true
    number?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    sector: string
    floor: number
    number: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sector?: boolean
    floor?: boolean
    number?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    devices?: boolean | Room$devicesArgs<ExtArgs>
    roomHistory?: boolean | Room$roomHistoryArgs<ExtArgs>
    alerts?: boolean | Room$alertsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sector?: boolean
    floor?: boolean
    number?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sector?: boolean
    floor?: boolean
    number?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    sector?: boolean
    floor?: boolean
    number?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sector" | "floor" | "number" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | Room$devicesArgs<ExtArgs>
    roomHistory?: boolean | Room$roomHistoryArgs<ExtArgs>
    alerts?: boolean | Room$alertsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
      roomHistory: Prisma.$RoomHistoryPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sector: string
      floor: number
      number: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends Room$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Room$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomHistory<T extends Room$roomHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Room$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Room$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly sector: FieldRef<"Room", 'String'>
    readonly floor: FieldRef<"Room", 'Int'>
    readonly number: FieldRef<"Room", 'String'>
    readonly isAvailable: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.devices
   */
  export type Room$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Room.roomHistory
   */
  export type Room$roomHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    where?: RoomHistoryWhereInput
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    cursor?: RoomHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomHistoryScalarFieldEnum | RoomHistoryScalarFieldEnum[]
  }

  /**
   * Room.alerts
   */
  export type Room$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    macAddress: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    macAddress: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    macAddress: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    roomId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    macAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    macAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    macAddress?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    macAddress: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    roomId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    macAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    measurements?: boolean | Device$measurementsArgs<ExtArgs>
    alerts?: boolean | Device$alertsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    macAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    macAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    macAddress?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "macAddress" | "description" | "isActive" | "createdAt" | "updatedAt" | "roomId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    measurements?: boolean | Device$measurementsArgs<ExtArgs>
    alerts?: boolean | Device$alertsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      macAddress: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      roomId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    measurements<T extends Device$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Device$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Device$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Device$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly macAddress: FieldRef<"Device", 'String'>
    readonly description: FieldRef<"Device", 'String'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
    readonly roomId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.measurements
   */
  export type Device$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Device.alerts
   */
  export type Device$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    minHeartRate: number | null
    maxHeartRate: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    minHeartRate: number | null
    maxHeartRate: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    gender: string | null
    dateOfBirth: Date | null
    minHeartRate: number | null
    maxHeartRate: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    gender: string | null
    dateOfBirth: Date | null
    minHeartRate: number | null
    maxHeartRate: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    gender: number
    dateOfBirth: number
    minHeartRate: number
    maxHeartRate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    minHeartRate?: true
    maxHeartRate?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    minHeartRate?: true
    maxHeartRate?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    gender?: true
    dateOfBirth?: true
    minHeartRate?: true
    maxHeartRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    gender?: true
    dateOfBirth?: true
    minHeartRate?: true
    maxHeartRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    gender?: true
    dateOfBirth?: true
    minHeartRate?: true
    maxHeartRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date
    minHeartRate: number
    maxHeartRate: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    minHeartRate?: boolean
    maxHeartRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomHistory?: boolean | Patient$roomHistoryArgs<ExtArgs>
    measurements?: boolean | Patient$measurementsArgs<ExtArgs>
    alerts?: boolean | Patient$alertsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    minHeartRate?: boolean
    maxHeartRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    minHeartRate?: boolean
    maxHeartRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    minHeartRate?: boolean
    maxHeartRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "gender" | "dateOfBirth" | "minHeartRate" | "maxHeartRate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomHistory?: boolean | Patient$roomHistoryArgs<ExtArgs>
    measurements?: boolean | Patient$measurementsArgs<ExtArgs>
    alerts?: boolean | Patient$alertsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      roomHistory: Prisma.$RoomHistoryPayload<ExtArgs>[]
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cpf: string
      gender: string
      dateOfBirth: Date
      minHeartRate: number
      maxHeartRate: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomHistory<T extends Patient$roomHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patient$roomHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measurements<T extends Patient$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Patient$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly cpf: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly minHeartRate: FieldRef<"Patient", 'Int'>
    readonly maxHeartRate: FieldRef<"Patient", 'Int'>
    readonly isActive: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.roomHistory
   */
  export type Patient$roomHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    where?: RoomHistoryWhereInput
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    cursor?: RoomHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomHistoryScalarFieldEnum | RoomHistoryScalarFieldEnum[]
  }

  /**
   * Patient.measurements
   */
  export type Patient$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Patient.alerts
   */
  export type Patient$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model RoomHistory
   */

  export type AggregateRoomHistory = {
    _count: RoomHistoryCountAggregateOutputType | null
    _avg: RoomHistoryAvgAggregateOutputType | null
    _sum: RoomHistorySumAggregateOutputType | null
    _min: RoomHistoryMinAggregateOutputType | null
    _max: RoomHistoryMaxAggregateOutputType | null
  }

  export type RoomHistoryAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    patientId: number | null
  }

  export type RoomHistorySumAggregateOutputType = {
    id: number | null
    roomId: number | null
    patientId: number | null
  }

  export type RoomHistoryMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    patientId: number | null
    entryDate: Date | null
    exitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomHistoryMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    patientId: number | null
    entryDate: Date | null
    exitDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomHistoryCountAggregateOutputType = {
    id: number
    roomId: number
    patientId: number
    entryDate: number
    exitDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomHistoryAvgAggregateInputType = {
    id?: true
    roomId?: true
    patientId?: true
  }

  export type RoomHistorySumAggregateInputType = {
    id?: true
    roomId?: true
    patientId?: true
  }

  export type RoomHistoryMinAggregateInputType = {
    id?: true
    roomId?: true
    patientId?: true
    entryDate?: true
    exitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomHistoryMaxAggregateInputType = {
    id?: true
    roomId?: true
    patientId?: true
    entryDate?: true
    exitDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomHistoryCountAggregateInputType = {
    id?: true
    roomId?: true
    patientId?: true
    entryDate?: true
    exitDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomHistory to aggregate.
     */
    where?: RoomHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomHistories to fetch.
     */
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomHistories
    **/
    _count?: true | RoomHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomHistoryMaxAggregateInputType
  }

  export type GetRoomHistoryAggregateType<T extends RoomHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomHistory[P]>
      : GetScalarType<T[P], AggregateRoomHistory[P]>
  }




  export type RoomHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomHistoryWhereInput
    orderBy?: RoomHistoryOrderByWithAggregationInput | RoomHistoryOrderByWithAggregationInput[]
    by: RoomHistoryScalarFieldEnum[] | RoomHistoryScalarFieldEnum
    having?: RoomHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomHistoryCountAggregateInputType | true
    _avg?: RoomHistoryAvgAggregateInputType
    _sum?: RoomHistorySumAggregateInputType
    _min?: RoomHistoryMinAggregateInputType
    _max?: RoomHistoryMaxAggregateInputType
  }

  export type RoomHistoryGroupByOutputType = {
    id: number
    roomId: number
    patientId: number
    entryDate: Date
    exitDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RoomHistoryCountAggregateOutputType | null
    _avg: RoomHistoryAvgAggregateOutputType | null
    _sum: RoomHistorySumAggregateOutputType | null
    _min: RoomHistoryMinAggregateOutputType | null
    _max: RoomHistoryMaxAggregateOutputType | null
  }

  type GetRoomHistoryGroupByPayload<T extends RoomHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RoomHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RoomHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    patientId?: boolean
    entryDate?: boolean
    exitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomHistory"]>

  export type RoomHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    patientId?: boolean
    entryDate?: boolean
    exitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomHistory"]>

  export type RoomHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    patientId?: boolean
    entryDate?: boolean
    exitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomHistory"]>

  export type RoomHistorySelectScalar = {
    id?: boolean
    roomId?: boolean
    patientId?: boolean
    entryDate?: boolean
    exitDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "patientId" | "entryDate" | "exitDate" | "createdAt" | "updatedAt", ExtArgs["result"]["roomHistory"]>
  export type RoomHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type RoomHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type RoomHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $RoomHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomHistory"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      patientId: number
      entryDate: Date
      exitDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomHistory"]>
    composites: {}
  }

  type RoomHistoryGetPayload<S extends boolean | null | undefined | RoomHistoryDefaultArgs> = $Result.GetResult<Prisma.$RoomHistoryPayload, S>

  type RoomHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomHistoryCountAggregateInputType | true
    }

  export interface RoomHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomHistory'], meta: { name: 'RoomHistory' } }
    /**
     * Find zero or one RoomHistory that matches the filter.
     * @param {RoomHistoryFindUniqueArgs} args - Arguments to find a RoomHistory
     * @example
     * // Get one RoomHistory
     * const roomHistory = await prisma.roomHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomHistoryFindUniqueArgs>(args: SelectSubset<T, RoomHistoryFindUniqueArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomHistoryFindUniqueOrThrowArgs} args - Arguments to find a RoomHistory
     * @example
     * // Get one RoomHistory
     * const roomHistory = await prisma.roomHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryFindFirstArgs} args - Arguments to find a RoomHistory
     * @example
     * // Get one RoomHistory
     * const roomHistory = await prisma.roomHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomHistoryFindFirstArgs>(args?: SelectSubset<T, RoomHistoryFindFirstArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryFindFirstOrThrowArgs} args - Arguments to find a RoomHistory
     * @example
     * // Get one RoomHistory
     * const roomHistory = await prisma.roomHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomHistories
     * const roomHistories = await prisma.roomHistory.findMany()
     * 
     * // Get first 10 RoomHistories
     * const roomHistories = await prisma.roomHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomHistoryWithIdOnly = await prisma.roomHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomHistoryFindManyArgs>(args?: SelectSubset<T, RoomHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomHistory.
     * @param {RoomHistoryCreateArgs} args - Arguments to create a RoomHistory.
     * @example
     * // Create one RoomHistory
     * const RoomHistory = await prisma.roomHistory.create({
     *   data: {
     *     // ... data to create a RoomHistory
     *   }
     * })
     * 
     */
    create<T extends RoomHistoryCreateArgs>(args: SelectSubset<T, RoomHistoryCreateArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomHistories.
     * @param {RoomHistoryCreateManyArgs} args - Arguments to create many RoomHistories.
     * @example
     * // Create many RoomHistories
     * const roomHistory = await prisma.roomHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomHistoryCreateManyArgs>(args?: SelectSubset<T, RoomHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomHistories and returns the data saved in the database.
     * @param {RoomHistoryCreateManyAndReturnArgs} args - Arguments to create many RoomHistories.
     * @example
     * // Create many RoomHistories
     * const roomHistory = await prisma.roomHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomHistories and only return the `id`
     * const roomHistoryWithIdOnly = await prisma.roomHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomHistory.
     * @param {RoomHistoryDeleteArgs} args - Arguments to delete one RoomHistory.
     * @example
     * // Delete one RoomHistory
     * const RoomHistory = await prisma.roomHistory.delete({
     *   where: {
     *     // ... filter to delete one RoomHistory
     *   }
     * })
     * 
     */
    delete<T extends RoomHistoryDeleteArgs>(args: SelectSubset<T, RoomHistoryDeleteArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomHistory.
     * @param {RoomHistoryUpdateArgs} args - Arguments to update one RoomHistory.
     * @example
     * // Update one RoomHistory
     * const roomHistory = await prisma.roomHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomHistoryUpdateArgs>(args: SelectSubset<T, RoomHistoryUpdateArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomHistories.
     * @param {RoomHistoryDeleteManyArgs} args - Arguments to filter RoomHistories to delete.
     * @example
     * // Delete a few RoomHistories
     * const { count } = await prisma.roomHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomHistoryDeleteManyArgs>(args?: SelectSubset<T, RoomHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomHistories
     * const roomHistory = await prisma.roomHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomHistoryUpdateManyArgs>(args: SelectSubset<T, RoomHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomHistories and returns the data updated in the database.
     * @param {RoomHistoryUpdateManyAndReturnArgs} args - Arguments to update many RoomHistories.
     * @example
     * // Update many RoomHistories
     * const roomHistory = await prisma.roomHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomHistories and only return the `id`
     * const roomHistoryWithIdOnly = await prisma.roomHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomHistory.
     * @param {RoomHistoryUpsertArgs} args - Arguments to update or create a RoomHistory.
     * @example
     * // Update or create a RoomHistory
     * const roomHistory = await prisma.roomHistory.upsert({
     *   create: {
     *     // ... data to create a RoomHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomHistory we want to update
     *   }
     * })
     */
    upsert<T extends RoomHistoryUpsertArgs>(args: SelectSubset<T, RoomHistoryUpsertArgs<ExtArgs>>): Prisma__RoomHistoryClient<$Result.GetResult<Prisma.$RoomHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryCountArgs} args - Arguments to filter RoomHistories to count.
     * @example
     * // Count the number of RoomHistories
     * const count = await prisma.roomHistory.count({
     *   where: {
     *     // ... the filter for the RoomHistories we want to count
     *   }
     * })
    **/
    count<T extends RoomHistoryCountArgs>(
      args?: Subset<T, RoomHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomHistoryAggregateArgs>(args: Subset<T, RoomHistoryAggregateArgs>): Prisma.PrismaPromise<GetRoomHistoryAggregateType<T>>

    /**
     * Group by RoomHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomHistoryGroupByArgs} args - Group by arguments.
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
      T extends RoomHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RoomHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomHistory model
   */
  readonly fields: RoomHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomHistory model
   */
  interface RoomHistoryFieldRefs {
    readonly id: FieldRef<"RoomHistory", 'Int'>
    readonly roomId: FieldRef<"RoomHistory", 'Int'>
    readonly patientId: FieldRef<"RoomHistory", 'Int'>
    readonly entryDate: FieldRef<"RoomHistory", 'DateTime'>
    readonly exitDate: FieldRef<"RoomHistory", 'DateTime'>
    readonly createdAt: FieldRef<"RoomHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomHistory findUnique
   */
  export type RoomHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomHistory to fetch.
     */
    where: RoomHistoryWhereUniqueInput
  }

  /**
   * RoomHistory findUniqueOrThrow
   */
  export type RoomHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomHistory to fetch.
     */
    where: RoomHistoryWhereUniqueInput
  }

  /**
   * RoomHistory findFirst
   */
  export type RoomHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomHistory to fetch.
     */
    where?: RoomHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomHistories to fetch.
     */
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomHistories.
     */
    cursor?: RoomHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomHistories.
     */
    distinct?: RoomHistoryScalarFieldEnum | RoomHistoryScalarFieldEnum[]
  }

  /**
   * RoomHistory findFirstOrThrow
   */
  export type RoomHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomHistory to fetch.
     */
    where?: RoomHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomHistories to fetch.
     */
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomHistories.
     */
    cursor?: RoomHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomHistories.
     */
    distinct?: RoomHistoryScalarFieldEnum | RoomHistoryScalarFieldEnum[]
  }

  /**
   * RoomHistory findMany
   */
  export type RoomHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomHistories to fetch.
     */
    where?: RoomHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomHistories to fetch.
     */
    orderBy?: RoomHistoryOrderByWithRelationInput | RoomHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomHistories.
     */
    cursor?: RoomHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomHistories.
     */
    skip?: number
    distinct?: RoomHistoryScalarFieldEnum | RoomHistoryScalarFieldEnum[]
  }

  /**
   * RoomHistory create
   */
  export type RoomHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomHistory.
     */
    data: XOR<RoomHistoryCreateInput, RoomHistoryUncheckedCreateInput>
  }

  /**
   * RoomHistory createMany
   */
  export type RoomHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomHistories.
     */
    data: RoomHistoryCreateManyInput | RoomHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomHistory createManyAndReturn
   */
  export type RoomHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RoomHistories.
     */
    data: RoomHistoryCreateManyInput | RoomHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomHistory update
   */
  export type RoomHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomHistory.
     */
    data: XOR<RoomHistoryUpdateInput, RoomHistoryUncheckedUpdateInput>
    /**
     * Choose, which RoomHistory to update.
     */
    where: RoomHistoryWhereUniqueInput
  }

  /**
   * RoomHistory updateMany
   */
  export type RoomHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomHistories.
     */
    data: XOR<RoomHistoryUpdateManyMutationInput, RoomHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomHistories to update
     */
    where?: RoomHistoryWhereInput
    /**
     * Limit how many RoomHistories to update.
     */
    limit?: number
  }

  /**
   * RoomHistory updateManyAndReturn
   */
  export type RoomHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RoomHistories.
     */
    data: XOR<RoomHistoryUpdateManyMutationInput, RoomHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomHistories to update
     */
    where?: RoomHistoryWhereInput
    /**
     * Limit how many RoomHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomHistory upsert
   */
  export type RoomHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomHistory to update in case it exists.
     */
    where: RoomHistoryWhereUniqueInput
    /**
     * In case the RoomHistory found by the `where` argument doesn't exist, create a new RoomHistory with this data.
     */
    create: XOR<RoomHistoryCreateInput, RoomHistoryUncheckedCreateInput>
    /**
     * In case the RoomHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomHistoryUpdateInput, RoomHistoryUncheckedUpdateInput>
  }

  /**
   * RoomHistory delete
   */
  export type RoomHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
    /**
     * Filter which RoomHistory to delete.
     */
    where: RoomHistoryWhereUniqueInput
  }

  /**
   * RoomHistory deleteMany
   */
  export type RoomHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomHistories to delete
     */
    where?: RoomHistoryWhereInput
    /**
     * Limit how many RoomHistories to delete.
     */
    limit?: number
  }

  /**
   * RoomHistory without action
   */
  export type RoomHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomHistory
     */
    select?: RoomHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomHistory
     */
    omit?: RoomHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    id: number | null
    bpm: number | null
    sensorId: number | null
    patientId: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    id: number | null
    bpm: number | null
    sensorId: number | null
    patientId: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: number | null
    bpm: number | null
    sensorId: number | null
    patientId: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: number | null
    bpm: number | null
    sensorId: number | null
    patientId: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    bpm: number
    sensorId: number
    patientId: number
    recordedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    id?: true
    bpm?: true
    sensorId?: true
    patientId?: true
  }

  export type MeasurementSumAggregateInputType = {
    id?: true
    bpm?: true
    sensorId?: true
    patientId?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    bpm?: true
    sensorId?: true
    patientId?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    bpm?: true
    sensorId?: true
    patientId?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    bpm?: true
    sensorId?: true
    patientId?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurement to aggregate.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type MeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithAggregationInput | MeasurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: MeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: number
    bpm: number
    sensorId: number
    patientId: number
    recordedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends MeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bpm?: boolean
    sensorId?: boolean
    patientId?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bpm?: boolean
    sensorId?: boolean
    patientId?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bpm?: boolean
    sensorId?: boolean
    patientId?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectScalar = {
    id?: boolean
    bpm?: boolean
    sensorId?: boolean
    patientId?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bpm" | "sensorId" | "patientId" | "recordedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["measurement"]>
  export type MeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurement"
    objects: {
      sensor: Prisma.$DevicePayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bpm: number
      sensorId: number
      patientId: number
      recordedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type MeasurementGetPayload<S extends boolean | null | undefined | MeasurementDefaultArgs> = $Result.GetResult<Prisma.$MeasurementPayload, S>

  type MeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface MeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurement'], meta: { name: 'Measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {MeasurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementFindUniqueArgs>(args: SelectSubset<T, MeasurementFindUniqueArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementFindFirstArgs>(args?: SelectSubset<T, MeasurementFindFirstArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementFindManyArgs>(args?: SelectSubset<T, MeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurement.
     * @param {MeasurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends MeasurementCreateArgs>(args: SelectSubset<T, MeasurementCreateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {MeasurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementCreateManyArgs>(args?: SelectSubset<T, MeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {MeasurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurement.
     * @param {MeasurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends MeasurementDeleteArgs>(args: SelectSubset<T, MeasurementDeleteArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurement.
     * @param {MeasurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementUpdateArgs>(args: SelectSubset<T, MeasurementUpdateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementDeleteManyArgs>(args?: SelectSubset<T, MeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementUpdateManyArgs>(args: SelectSubset<T, MeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {MeasurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurement.
     * @param {MeasurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementUpsertArgs>(args: SelectSubset<T, MeasurementUpsertArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementCountArgs>(
      args?: Subset<T, MeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementGroupByArgs} args - Group by arguments.
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
      T extends MeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurement model
   */
  readonly fields: MeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Measurement model
   */
  interface MeasurementFieldRefs {
    readonly id: FieldRef<"Measurement", 'Int'>
    readonly bpm: FieldRef<"Measurement", 'Int'>
    readonly sensorId: FieldRef<"Measurement", 'Int'>
    readonly patientId: FieldRef<"Measurement", 'Int'>
    readonly recordedAt: FieldRef<"Measurement", 'DateTime'>
    readonly createdAt: FieldRef<"Measurement", 'DateTime'>
    readonly updatedAt: FieldRef<"Measurement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Measurement findUnique
   */
  export type MeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findUniqueOrThrow
   */
  export type MeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findFirst
   */
  export type MeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findFirstOrThrow
   */
  export type MeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findMany
   */
  export type MeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement create
   */
  export type MeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurement.
     */
    data: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
  }

  /**
   * Measurement createMany
   */
  export type MeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measurement createManyAndReturn
   */
  export type MeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement update
   */
  export type MeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurement.
     */
    data: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
    /**
     * Choose, which Measurement to update.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement updateMany
   */
  export type MeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
  }

  /**
   * Measurement updateManyAndReturn
   */
  export type MeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement upsert
   */
  export type MeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurement to update in case it exists.
     */
    where: MeasurementWhereUniqueInput
    /**
     * In case the Measurement found by the `where` argument doesn't exist, create a new Measurement with this data.
     */
    create: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
    /**
     * In case the Measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
  }

  /**
   * Measurement delete
   */
  export type MeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter which Measurement to delete.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement deleteMany
   */
  export type MeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to delete.
     */
    limit?: number
  }

  /**
   * Measurement without action
   */
  export type MeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    sensorId: number | null
    roomId: number | null
    bpm: number | null
    threshold: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    sensorId: number | null
    roomId: number | null
    bpm: number | null
    threshold: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    sensorId: number | null
    roomId: number | null
    bpm: number | null
    alertType: string | null
    threshold: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    sensorId: number | null
    roomId: number | null
    bpm: number | null
    alertType: string | null
    threshold: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    patientId: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: number
    threshold: number
    recordedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    patientId?: true
    sensorId?: true
    roomId?: true
    bpm?: true
    threshold?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    patientId?: true
    sensorId?: true
    roomId?: true
    bpm?: true
    threshold?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    patientId?: true
    sensorId?: true
    roomId?: true
    bpm?: true
    alertType?: true
    threshold?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    patientId?: true
    sensorId?: true
    roomId?: true
    bpm?: true
    alertType?: true
    threshold?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    patientId?: true
    sensorId?: true
    roomId?: true
    bpm?: true
    alertType?: true
    threshold?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    patientId: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    sensorId?: boolean
    roomId?: boolean
    bpm?: boolean
    alertType?: boolean
    threshold?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    alertHistory?: boolean | Alert$alertHistoryArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    sensorId?: boolean
    roomId?: boolean
    bpm?: boolean
    alertType?: boolean
    threshold?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    sensorId?: boolean
    roomId?: boolean
    bpm?: boolean
    alertType?: boolean
    threshold?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    patientId?: boolean
    sensorId?: boolean
    roomId?: boolean
    bpm?: boolean
    alertType?: boolean
    threshold?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "sensorId" | "roomId" | "bpm" | "alertType" | "threshold" | "recordedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    alertHistory?: boolean | Alert$alertHistoryArgs<ExtArgs>
    _count?: boolean | AlertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    sensor?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      sensor: Prisma.$DevicePayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      alertHistory: Prisma.$AlertHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      sensorId: number
      roomId: number
      bpm: number
      alertType: string
      threshold: number
      recordedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sensor<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alertHistory<T extends Alert$alertHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Alert$alertHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly patientId: FieldRef<"Alert", 'Int'>
    readonly sensorId: FieldRef<"Alert", 'Int'>
    readonly roomId: FieldRef<"Alert", 'Int'>
    readonly bpm: FieldRef<"Alert", 'Int'>
    readonly alertType: FieldRef<"Alert", 'String'>
    readonly threshold: FieldRef<"Alert", 'Int'>
    readonly recordedAt: FieldRef<"Alert", 'DateTime'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.alertHistory
   */
  export type Alert$alertHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    where?: AlertHistoryWhereInput
    orderBy?: AlertHistoryOrderByWithRelationInput | AlertHistoryOrderByWithRelationInput[]
    cursor?: AlertHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertHistoryScalarFieldEnum | AlertHistoryScalarFieldEnum[]
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model AlertHistory
   */

  export type AggregateAlertHistory = {
    _count: AlertHistoryCountAggregateOutputType | null
    _avg: AlertHistoryAvgAggregateOutputType | null
    _sum: AlertHistorySumAggregateOutputType | null
    _min: AlertHistoryMinAggregateOutputType | null
    _max: AlertHistoryMaxAggregateOutputType | null
  }

  export type AlertHistoryAvgAggregateOutputType = {
    id: number | null
    alertId: number | null
  }

  export type AlertHistorySumAggregateOutputType = {
    id: number | null
    alertId: number | null
  }

  export type AlertHistoryMinAggregateOutputType = {
    id: number | null
    alertId: number | null
    status: string | null
    resolvedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertHistoryMaxAggregateOutputType = {
    id: number | null
    alertId: number | null
    status: string | null
    resolvedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertHistoryCountAggregateOutputType = {
    id: number
    alertId: number
    status: number
    resolvedAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertHistoryAvgAggregateInputType = {
    id?: true
    alertId?: true
  }

  export type AlertHistorySumAggregateInputType = {
    id?: true
    alertId?: true
  }

  export type AlertHistoryMinAggregateInputType = {
    id?: true
    alertId?: true
    status?: true
    resolvedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertHistoryMaxAggregateInputType = {
    id?: true
    alertId?: true
    status?: true
    resolvedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertHistoryCountAggregateInputType = {
    id?: true
    alertId?: true
    status?: true
    resolvedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertHistory to aggregate.
     */
    where?: AlertHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertHistories to fetch.
     */
    orderBy?: AlertHistoryOrderByWithRelationInput | AlertHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertHistories
    **/
    _count?: true | AlertHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertHistoryMaxAggregateInputType
  }

  export type GetAlertHistoryAggregateType<T extends AlertHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertHistory[P]>
      : GetScalarType<T[P], AggregateAlertHistory[P]>
  }




  export type AlertHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertHistoryWhereInput
    orderBy?: AlertHistoryOrderByWithAggregationInput | AlertHistoryOrderByWithAggregationInput[]
    by: AlertHistoryScalarFieldEnum[] | AlertHistoryScalarFieldEnum
    having?: AlertHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertHistoryCountAggregateInputType | true
    _avg?: AlertHistoryAvgAggregateInputType
    _sum?: AlertHistorySumAggregateInputType
    _min?: AlertHistoryMinAggregateInputType
    _max?: AlertHistoryMaxAggregateInputType
  }

  export type AlertHistoryGroupByOutputType = {
    id: number
    alertId: number
    status: string
    resolvedAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlertHistoryCountAggregateOutputType | null
    _avg: AlertHistoryAvgAggregateOutputType | null
    _sum: AlertHistorySumAggregateOutputType | null
    _min: AlertHistoryMinAggregateOutputType | null
    _max: AlertHistoryMaxAggregateOutputType | null
  }

  type GetAlertHistoryGroupByPayload<T extends AlertHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AlertHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AlertHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    status?: boolean
    resolvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertHistory"]>

  export type AlertHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    status?: boolean
    resolvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertHistory"]>

  export type AlertHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertId?: boolean
    status?: boolean
    resolvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertHistory"]>

  export type AlertHistorySelectScalar = {
    id?: boolean
    alertId?: boolean
    status?: boolean
    resolvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertId" | "status" | "resolvedAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["alertHistory"]>
  export type AlertHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }
  export type AlertHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | AlertDefaultArgs<ExtArgs>
  }

  export type $AlertHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertHistory"
    objects: {
      alert: Prisma.$AlertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alertId: number
      status: string
      resolvedAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alertHistory"]>
    composites: {}
  }

  type AlertHistoryGetPayload<S extends boolean | null | undefined | AlertHistoryDefaultArgs> = $Result.GetResult<Prisma.$AlertHistoryPayload, S>

  type AlertHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertHistoryCountAggregateInputType | true
    }

  export interface AlertHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertHistory'], meta: { name: 'AlertHistory' } }
    /**
     * Find zero or one AlertHistory that matches the filter.
     * @param {AlertHistoryFindUniqueArgs} args - Arguments to find a AlertHistory
     * @example
     * // Get one AlertHistory
     * const alertHistory = await prisma.alertHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertHistoryFindUniqueArgs>(args: SelectSubset<T, AlertHistoryFindUniqueArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertHistoryFindUniqueOrThrowArgs} args - Arguments to find a AlertHistory
     * @example
     * // Get one AlertHistory
     * const alertHistory = await prisma.alertHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryFindFirstArgs} args - Arguments to find a AlertHistory
     * @example
     * // Get one AlertHistory
     * const alertHistory = await prisma.alertHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertHistoryFindFirstArgs>(args?: SelectSubset<T, AlertHistoryFindFirstArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryFindFirstOrThrowArgs} args - Arguments to find a AlertHistory
     * @example
     * // Get one AlertHistory
     * const alertHistory = await prisma.alertHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertHistories
     * const alertHistories = await prisma.alertHistory.findMany()
     * 
     * // Get first 10 AlertHistories
     * const alertHistories = await prisma.alertHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertHistoryWithIdOnly = await prisma.alertHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertHistoryFindManyArgs>(args?: SelectSubset<T, AlertHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertHistory.
     * @param {AlertHistoryCreateArgs} args - Arguments to create a AlertHistory.
     * @example
     * // Create one AlertHistory
     * const AlertHistory = await prisma.alertHistory.create({
     *   data: {
     *     // ... data to create a AlertHistory
     *   }
     * })
     * 
     */
    create<T extends AlertHistoryCreateArgs>(args: SelectSubset<T, AlertHistoryCreateArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertHistories.
     * @param {AlertHistoryCreateManyArgs} args - Arguments to create many AlertHistories.
     * @example
     * // Create many AlertHistories
     * const alertHistory = await prisma.alertHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertHistoryCreateManyArgs>(args?: SelectSubset<T, AlertHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertHistories and returns the data saved in the database.
     * @param {AlertHistoryCreateManyAndReturnArgs} args - Arguments to create many AlertHistories.
     * @example
     * // Create many AlertHistories
     * const alertHistory = await prisma.alertHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertHistories and only return the `id`
     * const alertHistoryWithIdOnly = await prisma.alertHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertHistory.
     * @param {AlertHistoryDeleteArgs} args - Arguments to delete one AlertHistory.
     * @example
     * // Delete one AlertHistory
     * const AlertHistory = await prisma.alertHistory.delete({
     *   where: {
     *     // ... filter to delete one AlertHistory
     *   }
     * })
     * 
     */
    delete<T extends AlertHistoryDeleteArgs>(args: SelectSubset<T, AlertHistoryDeleteArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertHistory.
     * @param {AlertHistoryUpdateArgs} args - Arguments to update one AlertHistory.
     * @example
     * // Update one AlertHistory
     * const alertHistory = await prisma.alertHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertHistoryUpdateArgs>(args: SelectSubset<T, AlertHistoryUpdateArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertHistories.
     * @param {AlertHistoryDeleteManyArgs} args - Arguments to filter AlertHistories to delete.
     * @example
     * // Delete a few AlertHistories
     * const { count } = await prisma.alertHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertHistoryDeleteManyArgs>(args?: SelectSubset<T, AlertHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertHistories
     * const alertHistory = await prisma.alertHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertHistoryUpdateManyArgs>(args: SelectSubset<T, AlertHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertHistories and returns the data updated in the database.
     * @param {AlertHistoryUpdateManyAndReturnArgs} args - Arguments to update many AlertHistories.
     * @example
     * // Update many AlertHistories
     * const alertHistory = await prisma.alertHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertHistories and only return the `id`
     * const alertHistoryWithIdOnly = await prisma.alertHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertHistory.
     * @param {AlertHistoryUpsertArgs} args - Arguments to update or create a AlertHistory.
     * @example
     * // Update or create a AlertHistory
     * const alertHistory = await prisma.alertHistory.upsert({
     *   create: {
     *     // ... data to create a AlertHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertHistory we want to update
     *   }
     * })
     */
    upsert<T extends AlertHistoryUpsertArgs>(args: SelectSubset<T, AlertHistoryUpsertArgs<ExtArgs>>): Prisma__AlertHistoryClient<$Result.GetResult<Prisma.$AlertHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryCountArgs} args - Arguments to filter AlertHistories to count.
     * @example
     * // Count the number of AlertHistories
     * const count = await prisma.alertHistory.count({
     *   where: {
     *     // ... the filter for the AlertHistories we want to count
     *   }
     * })
    **/
    count<T extends AlertHistoryCountArgs>(
      args?: Subset<T, AlertHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertHistoryAggregateArgs>(args: Subset<T, AlertHistoryAggregateArgs>): Prisma.PrismaPromise<GetAlertHistoryAggregateType<T>>

    /**
     * Group by AlertHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertHistoryGroupByArgs} args - Group by arguments.
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
      T extends AlertHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AlertHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertHistory model
   */
  readonly fields: AlertHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alert<T extends AlertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertDefaultArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlertHistory model
   */
  interface AlertHistoryFieldRefs {
    readonly id: FieldRef<"AlertHistory", 'Int'>
    readonly alertId: FieldRef<"AlertHistory", 'Int'>
    readonly status: FieldRef<"AlertHistory", 'String'>
    readonly resolvedAt: FieldRef<"AlertHistory", 'DateTime'>
    readonly notes: FieldRef<"AlertHistory", 'String'>
    readonly createdAt: FieldRef<"AlertHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"AlertHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertHistory findUnique
   */
  export type AlertHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AlertHistory to fetch.
     */
    where: AlertHistoryWhereUniqueInput
  }

  /**
   * AlertHistory findUniqueOrThrow
   */
  export type AlertHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AlertHistory to fetch.
     */
    where: AlertHistoryWhereUniqueInput
  }

  /**
   * AlertHistory findFirst
   */
  export type AlertHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AlertHistory to fetch.
     */
    where?: AlertHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertHistories to fetch.
     */
    orderBy?: AlertHistoryOrderByWithRelationInput | AlertHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertHistories.
     */
    cursor?: AlertHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertHistories.
     */
    distinct?: AlertHistoryScalarFieldEnum | AlertHistoryScalarFieldEnum[]
  }

  /**
   * AlertHistory findFirstOrThrow
   */
  export type AlertHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AlertHistory to fetch.
     */
    where?: AlertHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertHistories to fetch.
     */
    orderBy?: AlertHistoryOrderByWithRelationInput | AlertHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertHistories.
     */
    cursor?: AlertHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertHistories.
     */
    distinct?: AlertHistoryScalarFieldEnum | AlertHistoryScalarFieldEnum[]
  }

  /**
   * AlertHistory findMany
   */
  export type AlertHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AlertHistories to fetch.
     */
    where?: AlertHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertHistories to fetch.
     */
    orderBy?: AlertHistoryOrderByWithRelationInput | AlertHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertHistories.
     */
    cursor?: AlertHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertHistories.
     */
    skip?: number
    distinct?: AlertHistoryScalarFieldEnum | AlertHistoryScalarFieldEnum[]
  }

  /**
   * AlertHistory create
   */
  export type AlertHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertHistory.
     */
    data: XOR<AlertHistoryCreateInput, AlertHistoryUncheckedCreateInput>
  }

  /**
   * AlertHistory createMany
   */
  export type AlertHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertHistories.
     */
    data: AlertHistoryCreateManyInput | AlertHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertHistory createManyAndReturn
   */
  export type AlertHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AlertHistories.
     */
    data: AlertHistoryCreateManyInput | AlertHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertHistory update
   */
  export type AlertHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertHistory.
     */
    data: XOR<AlertHistoryUpdateInput, AlertHistoryUncheckedUpdateInput>
    /**
     * Choose, which AlertHistory to update.
     */
    where: AlertHistoryWhereUniqueInput
  }

  /**
   * AlertHistory updateMany
   */
  export type AlertHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertHistories.
     */
    data: XOR<AlertHistoryUpdateManyMutationInput, AlertHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AlertHistories to update
     */
    where?: AlertHistoryWhereInput
    /**
     * Limit how many AlertHistories to update.
     */
    limit?: number
  }

  /**
   * AlertHistory updateManyAndReturn
   */
  export type AlertHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AlertHistories.
     */
    data: XOR<AlertHistoryUpdateManyMutationInput, AlertHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AlertHistories to update
     */
    where?: AlertHistoryWhereInput
    /**
     * Limit how many AlertHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertHistory upsert
   */
  export type AlertHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertHistory to update in case it exists.
     */
    where: AlertHistoryWhereUniqueInput
    /**
     * In case the AlertHistory found by the `where` argument doesn't exist, create a new AlertHistory with this data.
     */
    create: XOR<AlertHistoryCreateInput, AlertHistoryUncheckedCreateInput>
    /**
     * In case the AlertHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertHistoryUpdateInput, AlertHistoryUncheckedUpdateInput>
  }

  /**
   * AlertHistory delete
   */
  export type AlertHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
    /**
     * Filter which AlertHistory to delete.
     */
    where: AlertHistoryWhereUniqueInput
  }

  /**
   * AlertHistory deleteMany
   */
  export type AlertHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertHistories to delete
     */
    where?: AlertHistoryWhereInput
    /**
     * Limit how many AlertHistories to delete.
     */
    limit?: number
  }

  /**
   * AlertHistory without action
   */
  export type AlertHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertHistory
     */
    select?: AlertHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertHistory
     */
    omit?: AlertHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    sector: 'sector',
    floor: 'floor',
    number: 'number',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    macAddress: 'macAddress',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roomId: 'roomId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    minHeartRate: 'minHeartRate',
    maxHeartRate: 'maxHeartRate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const RoomHistoryScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    patientId: 'patientId',
    entryDate: 'entryDate',
    exitDate: 'exitDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomHistoryScalarFieldEnum = (typeof RoomHistoryScalarFieldEnum)[keyof typeof RoomHistoryScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    bpm: 'bpm',
    sensorId: 'sensorId',
    patientId: 'patientId',
    recordedAt: 'recordedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    sensorId: 'sensorId',
    roomId: 'roomId',
    bpm: 'bpm',
    alertType: 'alertType',
    threshold: 'threshold',
    recordedAt: 'recordedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const AlertHistoryScalarFieldEnum: {
    id: 'id',
    alertId: 'alertId',
    status: 'status',
    resolvedAt: 'resolvedAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertHistoryScalarFieldEnum = (typeof AlertHistoryScalarFieldEnum)[keyof typeof AlertHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    sector?: StringFilter<"Room"> | string
    floor?: IntFilter<"Room"> | number
    number?: StringFilter<"Room"> | string
    isAvailable?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    devices?: DeviceListRelationFilter
    roomHistory?: RoomHistoryListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    sector?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
    roomHistory?: RoomHistoryOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    sector?: StringFilter<"Room"> | string
    floor?: IntFilter<"Room"> | number
    number?: StringFilter<"Room"> | string
    isAvailable?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    devices?: DeviceListRelationFilter
    roomHistory?: RoomHistoryListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    sector?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    sector?: StringWithAggregatesFilter<"Room"> | string
    floor?: IntWithAggregatesFilter<"Room"> | number
    number?: StringWithAggregatesFilter<"Room"> | string
    isAvailable?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    macAddress?: StringFilter<"Device"> | string
    description?: StringNullableFilter<"Device"> | string | null
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    roomId?: IntFilter<"Device"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    measurements?: MeasurementListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    macAddress?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    room?: RoomOrderByWithRelationInput
    measurements?: MeasurementOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    macAddress?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    description?: StringNullableFilter<"Device"> | string | null
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    roomId?: IntFilter<"Device"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    measurements?: MeasurementListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "macAddress">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    macAddress?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    macAddress?: StringWithAggregatesFilter<"Device"> | string
    description?: StringNullableWithAggregatesFilter<"Device"> | string | null
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    roomId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    cpf?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    minHeartRate?: IntFilter<"Patient"> | number
    maxHeartRate?: IntFilter<"Patient"> | number
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    roomHistory?: RoomHistoryListRelationFilter
    measurements?: MeasurementListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomHistory?: RoomHistoryOrderByRelationAggregateInput
    measurements?: MeasurementOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    minHeartRate?: IntFilter<"Patient"> | number
    maxHeartRate?: IntFilter<"Patient"> | number
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    roomHistory?: RoomHistoryListRelationFilter
    measurements?: MeasurementListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "cpf">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    name?: StringWithAggregatesFilter<"Patient"> | string
    cpf?: StringWithAggregatesFilter<"Patient"> | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    minHeartRate?: IntWithAggregatesFilter<"Patient"> | number
    maxHeartRate?: IntWithAggregatesFilter<"Patient"> | number
    isActive?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type RoomHistoryWhereInput = {
    AND?: RoomHistoryWhereInput | RoomHistoryWhereInput[]
    OR?: RoomHistoryWhereInput[]
    NOT?: RoomHistoryWhereInput | RoomHistoryWhereInput[]
    id?: IntFilter<"RoomHistory"> | number
    roomId?: IntFilter<"RoomHistory"> | number
    patientId?: IntFilter<"RoomHistory"> | number
    entryDate?: DateTimeFilter<"RoomHistory"> | Date | string
    exitDate?: DateTimeNullableFilter<"RoomHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomHistory"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type RoomHistoryOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type RoomHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomHistoryWhereInput | RoomHistoryWhereInput[]
    OR?: RoomHistoryWhereInput[]
    NOT?: RoomHistoryWhereInput | RoomHistoryWhereInput[]
    roomId?: IntFilter<"RoomHistory"> | number
    patientId?: IntFilter<"RoomHistory"> | number
    entryDate?: DateTimeFilter<"RoomHistory"> | Date | string
    exitDate?: DateTimeNullableFilter<"RoomHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomHistory"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type RoomHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomHistoryCountOrderByAggregateInput
    _avg?: RoomHistoryAvgOrderByAggregateInput
    _max?: RoomHistoryMaxOrderByAggregateInput
    _min?: RoomHistoryMinOrderByAggregateInput
    _sum?: RoomHistorySumOrderByAggregateInput
  }

  export type RoomHistoryScalarWhereWithAggregatesInput = {
    AND?: RoomHistoryScalarWhereWithAggregatesInput | RoomHistoryScalarWhereWithAggregatesInput[]
    OR?: RoomHistoryScalarWhereWithAggregatesInput[]
    NOT?: RoomHistoryScalarWhereWithAggregatesInput | RoomHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomHistory"> | number
    roomId?: IntWithAggregatesFilter<"RoomHistory"> | number
    patientId?: IntWithAggregatesFilter<"RoomHistory"> | number
    entryDate?: DateTimeWithAggregatesFilter<"RoomHistory"> | Date | string
    exitDate?: DateTimeNullableWithAggregatesFilter<"RoomHistory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomHistory"> | Date | string
  }

  export type MeasurementWhereInput = {
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    id?: IntFilter<"Measurement"> | number
    bpm?: IntFilter<"Measurement"> | number
    sensorId?: IntFilter<"Measurement"> | number
    patientId?: IntFilter<"Measurement"> | number
    recordedAt?: DateTimeFilter<"Measurement"> | Date | string
    createdAt?: DateTimeFilter<"Measurement"> | Date | string
    updatedAt?: DateTimeFilter<"Measurement"> | Date | string
    sensor?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MeasurementOrderByWithRelationInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sensor?: DeviceOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type MeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    bpm?: IntFilter<"Measurement"> | number
    sensorId?: IntFilter<"Measurement"> | number
    patientId?: IntFilter<"Measurement"> | number
    recordedAt?: DateTimeFilter<"Measurement"> | Date | string
    createdAt?: DateTimeFilter<"Measurement"> | Date | string
    updatedAt?: DateTimeFilter<"Measurement"> | Date | string
    sensor?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type MeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeasurementCountOrderByAggregateInput
    _avg?: MeasurementAvgOrderByAggregateInput
    _max?: MeasurementMaxOrderByAggregateInput
    _min?: MeasurementMinOrderByAggregateInput
    _sum?: MeasurementSumOrderByAggregateInput
  }

  export type MeasurementScalarWhereWithAggregatesInput = {
    AND?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    OR?: MeasurementScalarWhereWithAggregatesInput[]
    NOT?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Measurement"> | number
    bpm?: IntWithAggregatesFilter<"Measurement"> | number
    sensorId?: IntWithAggregatesFilter<"Measurement"> | number
    patientId?: IntWithAggregatesFilter<"Measurement"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Measurement"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    patientId?: IntFilter<"Alert"> | number
    sensorId?: IntFilter<"Alert"> | number
    roomId?: IntFilter<"Alert"> | number
    bpm?: IntFilter<"Alert"> | number
    alertType?: StringFilter<"Alert"> | string
    threshold?: IntFilter<"Alert"> | number
    recordedAt?: DateTimeFilter<"Alert"> | Date | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    sensor?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    alertHistory?: AlertHistoryListRelationFilter
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    alertType?: SortOrder
    threshold?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    sensor?: DeviceOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    alertHistory?: AlertHistoryOrderByRelationAggregateInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    patientId?: IntFilter<"Alert"> | number
    sensorId?: IntFilter<"Alert"> | number
    roomId?: IntFilter<"Alert"> | number
    bpm?: IntFilter<"Alert"> | number
    alertType?: StringFilter<"Alert"> | string
    threshold?: IntFilter<"Alert"> | number
    recordedAt?: DateTimeFilter<"Alert"> | Date | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    sensor?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    alertHistory?: AlertHistoryListRelationFilter
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    alertType?: SortOrder
    threshold?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    patientId?: IntWithAggregatesFilter<"Alert"> | number
    sensorId?: IntWithAggregatesFilter<"Alert"> | number
    roomId?: IntWithAggregatesFilter<"Alert"> | number
    bpm?: IntWithAggregatesFilter<"Alert"> | number
    alertType?: StringWithAggregatesFilter<"Alert"> | string
    threshold?: IntWithAggregatesFilter<"Alert"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type AlertHistoryWhereInput = {
    AND?: AlertHistoryWhereInput | AlertHistoryWhereInput[]
    OR?: AlertHistoryWhereInput[]
    NOT?: AlertHistoryWhereInput | AlertHistoryWhereInput[]
    id?: IntFilter<"AlertHistory"> | number
    alertId?: IntFilter<"AlertHistory"> | number
    status?: StringFilter<"AlertHistory"> | string
    resolvedAt?: DateTimeNullableFilter<"AlertHistory"> | Date | string | null
    notes?: StringNullableFilter<"AlertHistory"> | string | null
    createdAt?: DateTimeFilter<"AlertHistory"> | Date | string
    updatedAt?: DateTimeFilter<"AlertHistory"> | Date | string
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }

  export type AlertHistoryOrderByWithRelationInput = {
    id?: SortOrder
    alertId?: SortOrder
    status?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alert?: AlertOrderByWithRelationInput
  }

  export type AlertHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertHistoryWhereInput | AlertHistoryWhereInput[]
    OR?: AlertHistoryWhereInput[]
    NOT?: AlertHistoryWhereInput | AlertHistoryWhereInput[]
    alertId?: IntFilter<"AlertHistory"> | number
    status?: StringFilter<"AlertHistory"> | string
    resolvedAt?: DateTimeNullableFilter<"AlertHistory"> | Date | string | null
    notes?: StringNullableFilter<"AlertHistory"> | string | null
    createdAt?: DateTimeFilter<"AlertHistory"> | Date | string
    updatedAt?: DateTimeFilter<"AlertHistory"> | Date | string
    alert?: XOR<AlertScalarRelationFilter, AlertWhereInput>
  }, "id">

  export type AlertHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    alertId?: SortOrder
    status?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertHistoryCountOrderByAggregateInput
    _avg?: AlertHistoryAvgOrderByAggregateInput
    _max?: AlertHistoryMaxOrderByAggregateInput
    _min?: AlertHistoryMinOrderByAggregateInput
    _sum?: AlertHistorySumOrderByAggregateInput
  }

  export type AlertHistoryScalarWhereWithAggregatesInput = {
    AND?: AlertHistoryScalarWhereWithAggregatesInput | AlertHistoryScalarWhereWithAggregatesInput[]
    OR?: AlertHistoryScalarWhereWithAggregatesInput[]
    NOT?: AlertHistoryScalarWhereWithAggregatesInput | AlertHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlertHistory"> | number
    alertId?: IntWithAggregatesFilter<"AlertHistory"> | number
    status?: StringWithAggregatesFilter<"AlertHistory"> | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"AlertHistory"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"AlertHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AlertHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlertHistory"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutRoomInput
    roomHistory?: RoomHistoryCreateNestedManyWithoutRoomInput
    alerts?: AlertCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutRoomInput
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutRoomInput
    alerts?: AlertUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutRoomNestedInput
    roomHistory?: RoomHistoryUpdateManyWithoutRoomNestedInput
    alerts?: AlertUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutRoomNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutDevicesInput
    measurements?: MeasurementCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: number
    measurements?: MeasurementUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type DeviceUpdateInput = {
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutDevicesNestedInput
    measurements?: MeasurementUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    measurements?: MeasurementUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: number
  }

  export type DeviceUpdateManyMutationInput = {
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateInput = {
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryCreateNestedManyWithoutPatientInput
    measurements?: MeasurementCreateNestedManyWithoutPatientInput
    alerts?: AlertCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutPatientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutPatientInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUpdateManyWithoutPatientNestedInput
    measurements?: MeasurementUpdateManyWithoutPatientNestedInput
    alerts?: AlertUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutPatientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutPatientNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryCreateInput = {
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomHistoryInput
    patient: PatientCreateNestedOneWithoutRoomHistoryInput
  }

  export type RoomHistoryUncheckedCreateInput = {
    id?: number
    roomId: number
    patientId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryUpdateInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomHistoryNestedInput
    patient?: PatientUpdateOneRequiredWithoutRoomHistoryNestedInput
  }

  export type RoomHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryCreateManyInput = {
    id?: number
    roomId: number
    patientId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryUpdateManyMutationInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementCreateInput = {
    bpm: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensor: DeviceCreateNestedOneWithoutMeasurementsInput
    patient: PatientCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateInput = {
    id?: number
    bpm: number
    sensorId: number
    patientId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementUpdateInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensor?: DeviceUpdateOneRequiredWithoutMeasurementsNestedInput
    patient?: PatientUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementCreateManyInput = {
    id?: number
    bpm: number
    sensorId: number
    patientId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementUpdateManyMutationInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAlertsInput
    sensor: DeviceCreateNestedOneWithoutAlertsInput
    room: RoomCreateNestedOneWithoutAlertsInput
    alertHistory?: AlertHistoryCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    patientId: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alertHistory?: AlertHistoryUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertUpdateInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAlertsNestedInput
    sensor?: DeviceUpdateOneRequiredWithoutAlertsNestedInput
    room?: RoomUpdateOneRequiredWithoutAlertsNestedInput
    alertHistory?: AlertHistoryUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertHistory?: AlertHistoryUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertCreateManyInput = {
    id?: number
    patientId: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryCreateInput = {
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alert: AlertCreateNestedOneWithoutAlertHistoryInput
  }

  export type AlertHistoryUncheckedCreateInput = {
    id?: number
    alertId: number
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertHistoryUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alert?: AlertUpdateOneRequiredWithoutAlertHistoryNestedInput
  }

  export type AlertHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryCreateManyInput = {
    id?: number
    alertId: number
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertHistoryUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type RoomHistoryListRelationFilter = {
    every?: RoomHistoryWhereInput
    some?: RoomHistoryWhereInput
    none?: RoomHistoryWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    floor?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    sector?: SortOrder
    floor?: SortOrder
    number?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    floor?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type MeasurementListRelationFilter = {
    every?: MeasurementWhereInput
    some?: MeasurementWhereInput
    none?: MeasurementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    macAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    macAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    macAddress?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    minHeartRate?: SortOrder
    maxHeartRate?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type RoomHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
  }

  export type RoomHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomHistorySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    patientId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type MeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeasurementAvgOrderByAggregateInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
  }

  export type MeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeasurementSumOrderByAggregateInput = {
    id?: SortOrder
    bpm?: SortOrder
    sensorId?: SortOrder
    patientId?: SortOrder
  }

  export type AlertHistoryListRelationFilter = {
    every?: AlertHistoryWhereInput
    some?: AlertHistoryWhereInput
    none?: AlertHistoryWhereInput
  }

  export type AlertHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    alertType?: SortOrder
    threshold?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    threshold?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    alertType?: SortOrder
    threshold?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    alertType?: SortOrder
    threshold?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    sensorId?: SortOrder
    roomId?: SortOrder
    bpm?: SortOrder
    threshold?: SortOrder
  }

  export type AlertScalarRelationFilter = {
    is?: AlertWhereInput
    isNot?: AlertWhereInput
  }

  export type AlertHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    status?: SortOrder
    resolvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
  }

  export type AlertHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    status?: SortOrder
    resolvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
    status?: SortOrder
    resolvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertHistorySumOrderByAggregateInput = {
    id?: SortOrder
    alertId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type DeviceCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type RoomHistoryCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput> | RoomHistoryCreateWithoutRoomInput[] | RoomHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutRoomInput | RoomHistoryCreateOrConnectWithoutRoomInput[]
    createMany?: RoomHistoryCreateManyRoomInputEnvelope
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutRoomInput = {
    create?: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput> | AlertCreateWithoutRoomInput[] | AlertUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutRoomInput | AlertCreateOrConnectWithoutRoomInput[]
    createMany?: AlertCreateManyRoomInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type RoomHistoryUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput> | RoomHistoryCreateWithoutRoomInput[] | RoomHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutRoomInput | RoomHistoryCreateOrConnectWithoutRoomInput[]
    createMany?: RoomHistoryCreateManyRoomInputEnvelope
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput> | AlertCreateWithoutRoomInput[] | AlertUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutRoomInput | AlertCreateOrConnectWithoutRoomInput[]
    createMany?: AlertCreateManyRoomInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeviceUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutRoomInput | DeviceUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutRoomInput | DeviceUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutRoomInput | DeviceUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type RoomHistoryUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput> | RoomHistoryCreateWithoutRoomInput[] | RoomHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutRoomInput | RoomHistoryCreateOrConnectWithoutRoomInput[]
    upsert?: RoomHistoryUpsertWithWhereUniqueWithoutRoomInput | RoomHistoryUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomHistoryCreateManyRoomInputEnvelope
    set?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    disconnect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    delete?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    update?: RoomHistoryUpdateWithWhereUniqueWithoutRoomInput | RoomHistoryUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomHistoryUpdateManyWithWhereWithoutRoomInput | RoomHistoryUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput> | AlertCreateWithoutRoomInput[] | AlertUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutRoomInput | AlertCreateOrConnectWithoutRoomInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutRoomInput | AlertUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AlertCreateManyRoomInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutRoomInput | AlertUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutRoomInput | AlertUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutRoomInput | DeviceUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutRoomInput | DeviceUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutRoomInput | DeviceUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type RoomHistoryUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput> | RoomHistoryCreateWithoutRoomInput[] | RoomHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutRoomInput | RoomHistoryCreateOrConnectWithoutRoomInput[]
    upsert?: RoomHistoryUpsertWithWhereUniqueWithoutRoomInput | RoomHistoryUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomHistoryCreateManyRoomInputEnvelope
    set?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    disconnect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    delete?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    update?: RoomHistoryUpdateWithWhereUniqueWithoutRoomInput | RoomHistoryUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomHistoryUpdateManyWithWhereWithoutRoomInput | RoomHistoryUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput> | AlertCreateWithoutRoomInput[] | AlertUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutRoomInput | AlertCreateOrConnectWithoutRoomInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutRoomInput | AlertUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AlertCreateManyRoomInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutRoomInput | AlertUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutRoomInput | AlertUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutDevicesInput = {
    create?: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDevicesInput
    connect?: RoomWhereUniqueInput
  }

  export type MeasurementCreateNestedManyWithoutSensorInput = {
    create?: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput> | MeasurementCreateWithoutSensorInput[] | MeasurementUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutSensorInput | MeasurementCreateOrConnectWithoutSensorInput[]
    createMany?: MeasurementCreateManySensorInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput> | MeasurementCreateWithoutSensorInput[] | MeasurementUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutSensorInput | MeasurementCreateOrConnectWithoutSensorInput[]
    createMany?: MeasurementCreateManySensorInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoomUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDevicesInput
    upsert?: RoomUpsertWithoutDevicesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutDevicesInput, RoomUpdateWithoutDevicesInput>, RoomUncheckedUpdateWithoutDevicesInput>
  }

  export type MeasurementUpdateManyWithoutSensorNestedInput = {
    create?: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput> | MeasurementCreateWithoutSensorInput[] | MeasurementUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutSensorInput | MeasurementCreateOrConnectWithoutSensorInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutSensorInput | MeasurementUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: MeasurementCreateManySensorInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutSensorInput | MeasurementUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutSensorInput | MeasurementUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput> | MeasurementCreateWithoutSensorInput[] | MeasurementUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutSensorInput | MeasurementCreateOrConnectWithoutSensorInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutSensorInput | MeasurementUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: MeasurementCreateManySensorInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutSensorInput | MeasurementUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutSensorInput | MeasurementUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type RoomHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput> | RoomHistoryCreateWithoutPatientInput[] | RoomHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutPatientInput | RoomHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: RoomHistoryCreateManyPatientInputEnvelope
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
  }

  export type MeasurementCreateNestedManyWithoutPatientInput = {
    create?: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput> | MeasurementCreateWithoutPatientInput[] | MeasurementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutPatientInput | MeasurementCreateOrConnectWithoutPatientInput[]
    createMany?: MeasurementCreateManyPatientInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutPatientInput = {
    create?: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput> | AlertCreateWithoutPatientInput[] | AlertUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPatientInput | AlertCreateOrConnectWithoutPatientInput[]
    createMany?: AlertCreateManyPatientInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type RoomHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput> | RoomHistoryCreateWithoutPatientInput[] | RoomHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutPatientInput | RoomHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: RoomHistoryCreateManyPatientInputEnvelope
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput> | MeasurementCreateWithoutPatientInput[] | MeasurementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutPatientInput | MeasurementCreateOrConnectWithoutPatientInput[]
    createMany?: MeasurementCreateManyPatientInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput> | AlertCreateWithoutPatientInput[] | AlertUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPatientInput | AlertCreateOrConnectWithoutPatientInput[]
    createMany?: AlertCreateManyPatientInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type RoomHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput> | RoomHistoryCreateWithoutPatientInput[] | RoomHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutPatientInput | RoomHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: RoomHistoryUpsertWithWhereUniqueWithoutPatientInput | RoomHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RoomHistoryCreateManyPatientInputEnvelope
    set?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    disconnect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    delete?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    update?: RoomHistoryUpdateWithWhereUniqueWithoutPatientInput | RoomHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RoomHistoryUpdateManyWithWhereWithoutPatientInput | RoomHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
  }

  export type MeasurementUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput> | MeasurementCreateWithoutPatientInput[] | MeasurementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutPatientInput | MeasurementCreateOrConnectWithoutPatientInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutPatientInput | MeasurementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MeasurementCreateManyPatientInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutPatientInput | MeasurementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutPatientInput | MeasurementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput> | AlertCreateWithoutPatientInput[] | AlertUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPatientInput | AlertCreateOrConnectWithoutPatientInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutPatientInput | AlertUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AlertCreateManyPatientInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutPatientInput | AlertUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutPatientInput | AlertUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type RoomHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput> | RoomHistoryCreateWithoutPatientInput[] | RoomHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RoomHistoryCreateOrConnectWithoutPatientInput | RoomHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: RoomHistoryUpsertWithWhereUniqueWithoutPatientInput | RoomHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RoomHistoryCreateManyPatientInputEnvelope
    set?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    disconnect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    delete?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    connect?: RoomHistoryWhereUniqueInput | RoomHistoryWhereUniqueInput[]
    update?: RoomHistoryUpdateWithWhereUniqueWithoutPatientInput | RoomHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RoomHistoryUpdateManyWithWhereWithoutPatientInput | RoomHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput> | MeasurementCreateWithoutPatientInput[] | MeasurementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutPatientInput | MeasurementCreateOrConnectWithoutPatientInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutPatientInput | MeasurementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MeasurementCreateManyPatientInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutPatientInput | MeasurementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutPatientInput | MeasurementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput> | AlertCreateWithoutPatientInput[] | AlertUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPatientInput | AlertCreateOrConnectWithoutPatientInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutPatientInput | AlertUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AlertCreateManyPatientInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutPatientInput | AlertUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutPatientInput | AlertUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutRoomHistoryInput = {
    create?: XOR<RoomCreateWithoutRoomHistoryInput, RoomUncheckedCreateWithoutRoomHistoryInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomHistoryInput
    connect?: RoomWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutRoomHistoryInput = {
    create?: XOR<PatientCreateWithoutRoomHistoryInput, PatientUncheckedCreateWithoutRoomHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRoomHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoomUpdateOneRequiredWithoutRoomHistoryNestedInput = {
    create?: XOR<RoomCreateWithoutRoomHistoryInput, RoomUncheckedCreateWithoutRoomHistoryInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomHistoryInput
    upsert?: RoomUpsertWithoutRoomHistoryInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomHistoryInput, RoomUpdateWithoutRoomHistoryInput>, RoomUncheckedUpdateWithoutRoomHistoryInput>
  }

  export type PatientUpdateOneRequiredWithoutRoomHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutRoomHistoryInput, PatientUncheckedCreateWithoutRoomHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRoomHistoryInput
    upsert?: PatientUpsertWithoutRoomHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutRoomHistoryInput, PatientUpdateWithoutRoomHistoryInput>, PatientUncheckedUpdateWithoutRoomHistoryInput>
  }

  export type DeviceCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<DeviceCreateWithoutMeasurementsInput, DeviceUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMeasurementsInput
    connect?: DeviceWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<PatientCreateWithoutMeasurementsInput, PatientUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMeasurementsInput
    connect?: PatientWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<DeviceCreateWithoutMeasurementsInput, DeviceUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMeasurementsInput
    upsert?: DeviceUpsertWithoutMeasurementsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutMeasurementsInput, DeviceUpdateWithoutMeasurementsInput>, DeviceUncheckedUpdateWithoutMeasurementsInput>
  }

  export type PatientUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<PatientCreateWithoutMeasurementsInput, PatientUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMeasurementsInput
    upsert?: PatientUpsertWithoutMeasurementsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMeasurementsInput, PatientUpdateWithoutMeasurementsInput>, PatientUncheckedUpdateWithoutMeasurementsInput>
  }

  export type PatientCreateNestedOneWithoutAlertsInput = {
    create?: XOR<PatientCreateWithoutAlertsInput, PatientUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAlertsInput
    connect?: PatientWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutAlertsInput = {
    create?: XOR<DeviceCreateWithoutAlertsInput, DeviceUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAlertsInput
    connect?: DeviceWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutAlertsInput = {
    create?: XOR<RoomCreateWithoutAlertsInput, RoomUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAlertsInput
    connect?: RoomWhereUniqueInput
  }

  export type AlertHistoryCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput> | AlertHistoryCreateWithoutAlertInput[] | AlertHistoryUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertHistoryCreateOrConnectWithoutAlertInput | AlertHistoryCreateOrConnectWithoutAlertInput[]
    createMany?: AlertHistoryCreateManyAlertInputEnvelope
    connect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
  }

  export type AlertHistoryUncheckedCreateNestedManyWithoutAlertInput = {
    create?: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput> | AlertHistoryCreateWithoutAlertInput[] | AlertHistoryUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertHistoryCreateOrConnectWithoutAlertInput | AlertHistoryCreateOrConnectWithoutAlertInput[]
    createMany?: AlertHistoryCreateManyAlertInputEnvelope
    connect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<PatientCreateWithoutAlertsInput, PatientUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAlertsInput
    upsert?: PatientUpsertWithoutAlertsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAlertsInput, PatientUpdateWithoutAlertsInput>, PatientUncheckedUpdateWithoutAlertsInput>
  }

  export type DeviceUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<DeviceCreateWithoutAlertsInput, DeviceUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAlertsInput
    upsert?: DeviceUpsertWithoutAlertsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAlertsInput, DeviceUpdateWithoutAlertsInput>, DeviceUncheckedUpdateWithoutAlertsInput>
  }

  export type RoomUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<RoomCreateWithoutAlertsInput, RoomUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAlertsInput
    upsert?: RoomUpsertWithoutAlertsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAlertsInput, RoomUpdateWithoutAlertsInput>, RoomUncheckedUpdateWithoutAlertsInput>
  }

  export type AlertHistoryUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput> | AlertHistoryCreateWithoutAlertInput[] | AlertHistoryUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertHistoryCreateOrConnectWithoutAlertInput | AlertHistoryCreateOrConnectWithoutAlertInput[]
    upsert?: AlertHistoryUpsertWithWhereUniqueWithoutAlertInput | AlertHistoryUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertHistoryCreateManyAlertInputEnvelope
    set?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    disconnect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    delete?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    connect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    update?: AlertHistoryUpdateWithWhereUniqueWithoutAlertInput | AlertHistoryUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertHistoryUpdateManyWithWhereWithoutAlertInput | AlertHistoryUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertHistoryScalarWhereInput | AlertHistoryScalarWhereInput[]
  }

  export type AlertHistoryUncheckedUpdateManyWithoutAlertNestedInput = {
    create?: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput> | AlertHistoryCreateWithoutAlertInput[] | AlertHistoryUncheckedCreateWithoutAlertInput[]
    connectOrCreate?: AlertHistoryCreateOrConnectWithoutAlertInput | AlertHistoryCreateOrConnectWithoutAlertInput[]
    upsert?: AlertHistoryUpsertWithWhereUniqueWithoutAlertInput | AlertHistoryUpsertWithWhereUniqueWithoutAlertInput[]
    createMany?: AlertHistoryCreateManyAlertInputEnvelope
    set?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    disconnect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    delete?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    connect?: AlertHistoryWhereUniqueInput | AlertHistoryWhereUniqueInput[]
    update?: AlertHistoryUpdateWithWhereUniqueWithoutAlertInput | AlertHistoryUpdateWithWhereUniqueWithoutAlertInput[]
    updateMany?: AlertHistoryUpdateManyWithWhereWithoutAlertInput | AlertHistoryUpdateManyWithWhereWithoutAlertInput[]
    deleteMany?: AlertHistoryScalarWhereInput | AlertHistoryScalarWhereInput[]
  }

  export type AlertCreateNestedOneWithoutAlertHistoryInput = {
    create?: XOR<AlertCreateWithoutAlertHistoryInput, AlertUncheckedCreateWithoutAlertHistoryInput>
    connectOrCreate?: AlertCreateOrConnectWithoutAlertHistoryInput
    connect?: AlertWhereUniqueInput
  }

  export type AlertUpdateOneRequiredWithoutAlertHistoryNestedInput = {
    create?: XOR<AlertCreateWithoutAlertHistoryInput, AlertUncheckedCreateWithoutAlertHistoryInput>
    connectOrCreate?: AlertCreateOrConnectWithoutAlertHistoryInput
    upsert?: AlertUpsertWithoutAlertHistoryInput
    connect?: AlertWhereUniqueInput
    update?: XOR<XOR<AlertUpdateToOneWithWhereWithoutAlertHistoryInput, AlertUpdateWithoutAlertHistoryInput>, AlertUncheckedUpdateWithoutAlertHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeviceCreateWithoutRoomInput = {
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementCreateNestedManyWithoutSensorInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type DeviceUncheckedCreateWithoutRoomInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementUncheckedCreateNestedManyWithoutSensorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type DeviceCreateOrConnectWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput>
  }

  export type DeviceCreateManyRoomInputEnvelope = {
    data: DeviceCreateManyRoomInput | DeviceCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomHistoryCreateWithoutRoomInput = {
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutRoomHistoryInput
  }

  export type RoomHistoryUncheckedCreateWithoutRoomInput = {
    id?: number
    patientId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryCreateOrConnectWithoutRoomInput = {
    where: RoomHistoryWhereUniqueInput
    create: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput>
  }

  export type RoomHistoryCreateManyRoomInputEnvelope = {
    data: RoomHistoryCreateManyRoomInput | RoomHistoryCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutRoomInput = {
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAlertsInput
    sensor: DeviceCreateNestedOneWithoutAlertsInput
    alertHistory?: AlertHistoryCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateWithoutRoomInput = {
    id?: number
    patientId: number
    sensorId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alertHistory?: AlertHistoryUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertCreateOrConnectWithoutRoomInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput>
  }

  export type AlertCreateManyRoomInputEnvelope = {
    data: AlertCreateManyRoomInput | AlertCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutRoomInput, DeviceUncheckedUpdateWithoutRoomInput>
    create: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutRoomInput, DeviceUncheckedUpdateWithoutRoomInput>
  }

  export type DeviceUpdateManyWithWhereWithoutRoomInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutRoomInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    macAddress?: StringFilter<"Device"> | string
    description?: StringNullableFilter<"Device"> | string | null
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    roomId?: IntFilter<"Device"> | number
  }

  export type RoomHistoryUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomHistoryWhereUniqueInput
    update: XOR<RoomHistoryUpdateWithoutRoomInput, RoomHistoryUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomHistoryCreateWithoutRoomInput, RoomHistoryUncheckedCreateWithoutRoomInput>
  }

  export type RoomHistoryUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomHistoryWhereUniqueInput
    data: XOR<RoomHistoryUpdateWithoutRoomInput, RoomHistoryUncheckedUpdateWithoutRoomInput>
  }

  export type RoomHistoryUpdateManyWithWhereWithoutRoomInput = {
    where: RoomHistoryScalarWhereInput
    data: XOR<RoomHistoryUpdateManyMutationInput, RoomHistoryUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomHistoryScalarWhereInput = {
    AND?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
    OR?: RoomHistoryScalarWhereInput[]
    NOT?: RoomHistoryScalarWhereInput | RoomHistoryScalarWhereInput[]
    id?: IntFilter<"RoomHistory"> | number
    roomId?: IntFilter<"RoomHistory"> | number
    patientId?: IntFilter<"RoomHistory"> | number
    entryDate?: DateTimeFilter<"RoomHistory"> | Date | string
    exitDate?: DateTimeNullableFilter<"RoomHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomHistory"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutRoomInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutRoomInput, AlertUncheckedUpdateWithoutRoomInput>
    create: XOR<AlertCreateWithoutRoomInput, AlertUncheckedCreateWithoutRoomInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutRoomInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutRoomInput, AlertUncheckedUpdateWithoutRoomInput>
  }

  export type AlertUpdateManyWithWhereWithoutRoomInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutRoomInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    patientId?: IntFilter<"Alert"> | number
    sensorId?: IntFilter<"Alert"> | number
    roomId?: IntFilter<"Alert"> | number
    bpm?: IntFilter<"Alert"> | number
    alertType?: StringFilter<"Alert"> | string
    threshold?: IntFilter<"Alert"> | number
    recordedAt?: DateTimeFilter<"Alert"> | Date | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type RoomCreateWithoutDevicesInput = {
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryCreateNestedManyWithoutRoomInput
    alerts?: AlertCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutDevicesInput = {
    id?: number
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutRoomInput
    alerts?: AlertUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutDevicesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
  }

  export type MeasurementCreateWithoutSensorInput = {
    bpm: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateWithoutSensorInput = {
    id?: number
    bpm: number
    patientId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementCreateOrConnectWithoutSensorInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput>
  }

  export type MeasurementCreateManySensorInputEnvelope = {
    data: MeasurementCreateManySensorInput | MeasurementCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutSensorInput = {
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAlertsInput
    room: RoomCreateNestedOneWithoutAlertsInput
    alertHistory?: AlertHistoryCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateWithoutSensorInput = {
    id?: number
    patientId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alertHistory?: AlertHistoryUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertCreateOrConnectWithoutSensorInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertCreateManySensorInputEnvelope = {
    data: AlertCreateManySensorInput | AlertCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutDevicesInput = {
    update: XOR<RoomUpdateWithoutDevicesInput, RoomUncheckedUpdateWithoutDevicesInput>
    create: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutDevicesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutDevicesInput, RoomUncheckedUpdateWithoutDevicesInput>
  }

  export type RoomUpdateWithoutDevicesInput = {
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUpdateManyWithoutRoomNestedInput
    alerts?: AlertUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutRoomNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type MeasurementUpsertWithWhereUniqueWithoutSensorInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutSensorInput, MeasurementUncheckedUpdateWithoutSensorInput>
    create: XOR<MeasurementCreateWithoutSensorInput, MeasurementUncheckedCreateWithoutSensorInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutSensorInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutSensorInput, MeasurementUncheckedUpdateWithoutSensorInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutSensorInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutSensorInput>
  }

  export type MeasurementScalarWhereInput = {
    AND?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    OR?: MeasurementScalarWhereInput[]
    NOT?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    id?: IntFilter<"Measurement"> | number
    bpm?: IntFilter<"Measurement"> | number
    sensorId?: IntFilter<"Measurement"> | number
    patientId?: IntFilter<"Measurement"> | number
    recordedAt?: DateTimeFilter<"Measurement"> | Date | string
    createdAt?: DateTimeFilter<"Measurement"> | Date | string
    updatedAt?: DateTimeFilter<"Measurement"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
  }

  export type AlertUpdateManyWithWhereWithoutSensorInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSensorInput>
  }

  export type RoomHistoryCreateWithoutPatientInput = {
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomHistoryInput
  }

  export type RoomHistoryUncheckedCreateWithoutPatientInput = {
    id?: number
    roomId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryCreateOrConnectWithoutPatientInput = {
    where: RoomHistoryWhereUniqueInput
    create: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput>
  }

  export type RoomHistoryCreateManyPatientInputEnvelope = {
    data: RoomHistoryCreateManyPatientInput | RoomHistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MeasurementCreateWithoutPatientInput = {
    bpm: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensor: DeviceCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateWithoutPatientInput = {
    id?: number
    bpm: number
    sensorId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementCreateOrConnectWithoutPatientInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput>
  }

  export type MeasurementCreateManyPatientInputEnvelope = {
    data: MeasurementCreateManyPatientInput | MeasurementCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutPatientInput = {
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensor: DeviceCreateNestedOneWithoutAlertsInput
    room: RoomCreateNestedOneWithoutAlertsInput
    alertHistory?: AlertHistoryCreateNestedManyWithoutAlertInput
  }

  export type AlertUncheckedCreateWithoutPatientInput = {
    id?: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    alertHistory?: AlertHistoryUncheckedCreateNestedManyWithoutAlertInput
  }

  export type AlertCreateOrConnectWithoutPatientInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput>
  }

  export type AlertCreateManyPatientInputEnvelope = {
    data: AlertCreateManyPatientInput | AlertCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type RoomHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: RoomHistoryWhereUniqueInput
    update: XOR<RoomHistoryUpdateWithoutPatientInput, RoomHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<RoomHistoryCreateWithoutPatientInput, RoomHistoryUncheckedCreateWithoutPatientInput>
  }

  export type RoomHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: RoomHistoryWhereUniqueInput
    data: XOR<RoomHistoryUpdateWithoutPatientInput, RoomHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type RoomHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: RoomHistoryScalarWhereInput
    data: XOR<RoomHistoryUpdateManyMutationInput, RoomHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type MeasurementUpsertWithWhereUniqueWithoutPatientInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutPatientInput, MeasurementUncheckedUpdateWithoutPatientInput>
    create: XOR<MeasurementCreateWithoutPatientInput, MeasurementUncheckedCreateWithoutPatientInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutPatientInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutPatientInput, MeasurementUncheckedUpdateWithoutPatientInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutPatientInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutPatientInput>
  }

  export type AlertUpsertWithWhereUniqueWithoutPatientInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutPatientInput, AlertUncheckedUpdateWithoutPatientInput>
    create: XOR<AlertCreateWithoutPatientInput, AlertUncheckedCreateWithoutPatientInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutPatientInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutPatientInput, AlertUncheckedUpdateWithoutPatientInput>
  }

  export type AlertUpdateManyWithWhereWithoutPatientInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutPatientInput>
  }

  export type RoomCreateWithoutRoomHistoryInput = {
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutRoomInput
    alerts?: AlertCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomHistoryInput = {
    id?: number
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutRoomInput
    alerts?: AlertUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomHistoryInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomHistoryInput, RoomUncheckedCreateWithoutRoomHistoryInput>
  }

  export type PatientCreateWithoutRoomHistoryInput = {
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementCreateNestedManyWithoutPatientInput
    alerts?: AlertCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutRoomHistoryInput = {
    id?: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementUncheckedCreateNestedManyWithoutPatientInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutRoomHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutRoomHistoryInput, PatientUncheckedCreateWithoutRoomHistoryInput>
  }

  export type RoomUpsertWithoutRoomHistoryInput = {
    update: XOR<RoomUpdateWithoutRoomHistoryInput, RoomUncheckedUpdateWithoutRoomHistoryInput>
    create: XOR<RoomCreateWithoutRoomHistoryInput, RoomUncheckedCreateWithoutRoomHistoryInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomHistoryInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomHistoryInput, RoomUncheckedUpdateWithoutRoomHistoryInput>
  }

  export type RoomUpdateWithoutRoomHistoryInput = {
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutRoomNestedInput
    alerts?: AlertUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PatientUpsertWithoutRoomHistoryInput = {
    update: XOR<PatientUpdateWithoutRoomHistoryInput, PatientUncheckedUpdateWithoutRoomHistoryInput>
    create: XOR<PatientCreateWithoutRoomHistoryInput, PatientUncheckedCreateWithoutRoomHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutRoomHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutRoomHistoryInput, PatientUncheckedUpdateWithoutRoomHistoryInput>
  }

  export type PatientUpdateWithoutRoomHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementUpdateManyWithoutPatientNestedInput
    alerts?: AlertUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutRoomHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementUncheckedUpdateManyWithoutPatientNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DeviceCreateWithoutMeasurementsInput = {
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutDevicesInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type DeviceUncheckedCreateWithoutMeasurementsInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: number
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type DeviceCreateOrConnectWithoutMeasurementsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutMeasurementsInput, DeviceUncheckedCreateWithoutMeasurementsInput>
  }

  export type PatientCreateWithoutMeasurementsInput = {
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryCreateNestedManyWithoutPatientInput
    alerts?: AlertCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMeasurementsInput = {
    id?: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutPatientInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMeasurementsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMeasurementsInput, PatientUncheckedCreateWithoutMeasurementsInput>
  }

  export type DeviceUpsertWithoutMeasurementsInput = {
    update: XOR<DeviceUpdateWithoutMeasurementsInput, DeviceUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<DeviceCreateWithoutMeasurementsInput, DeviceUncheckedCreateWithoutMeasurementsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutMeasurementsInput, DeviceUncheckedUpdateWithoutMeasurementsInput>
  }

  export type DeviceUpdateWithoutMeasurementsInput = {
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutDevicesNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type DeviceUncheckedUpdateWithoutMeasurementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type PatientUpsertWithoutMeasurementsInput = {
    update: XOR<PatientUpdateWithoutMeasurementsInput, PatientUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<PatientCreateWithoutMeasurementsInput, PatientUncheckedCreateWithoutMeasurementsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMeasurementsInput, PatientUncheckedUpdateWithoutMeasurementsInput>
  }

  export type PatientUpdateWithoutMeasurementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUpdateManyWithoutPatientNestedInput
    alerts?: AlertUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMeasurementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutPatientNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutAlertsInput = {
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryCreateNestedManyWithoutPatientInput
    measurements?: MeasurementCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAlertsInput = {
    id?: number
    name: string
    cpf: string
    gender: string
    dateOfBirth: Date | string
    minHeartRate: number
    maxHeartRate: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutPatientInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAlertsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAlertsInput, PatientUncheckedCreateWithoutAlertsInput>
  }

  export type DeviceCreateWithoutAlertsInput = {
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutDevicesInput
    measurements?: MeasurementCreateNestedManyWithoutSensorInput
  }

  export type DeviceUncheckedCreateWithoutAlertsInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: number
    measurements?: MeasurementUncheckedCreateNestedManyWithoutSensorInput
  }

  export type DeviceCreateOrConnectWithoutAlertsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAlertsInput, DeviceUncheckedCreateWithoutAlertsInput>
  }

  export type RoomCreateWithoutAlertsInput = {
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutRoomInput
    roomHistory?: RoomHistoryCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAlertsInput = {
    id?: number
    sector: string
    floor: number
    number: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutRoomInput
    roomHistory?: RoomHistoryUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAlertsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAlertsInput, RoomUncheckedCreateWithoutAlertsInput>
  }

  export type AlertHistoryCreateWithoutAlertInput = {
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertHistoryUncheckedCreateWithoutAlertInput = {
    id?: number
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertHistoryCreateOrConnectWithoutAlertInput = {
    where: AlertHistoryWhereUniqueInput
    create: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput>
  }

  export type AlertHistoryCreateManyAlertInputEnvelope = {
    data: AlertHistoryCreateManyAlertInput | AlertHistoryCreateManyAlertInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutAlertsInput = {
    update: XOR<PatientUpdateWithoutAlertsInput, PatientUncheckedUpdateWithoutAlertsInput>
    create: XOR<PatientCreateWithoutAlertsInput, PatientUncheckedCreateWithoutAlertsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAlertsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAlertsInput, PatientUncheckedUpdateWithoutAlertsInput>
  }

  export type PatientUpdateWithoutAlertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUpdateManyWithoutPatientNestedInput
    measurements?: MeasurementUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    minHeartRate?: IntFieldUpdateOperationsInput | number
    maxHeartRate?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutPatientNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DeviceUpsertWithoutAlertsInput = {
    update: XOR<DeviceUpdateWithoutAlertsInput, DeviceUncheckedUpdateWithoutAlertsInput>
    create: XOR<DeviceCreateWithoutAlertsInput, DeviceUncheckedCreateWithoutAlertsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAlertsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAlertsInput, DeviceUncheckedUpdateWithoutAlertsInput>
  }

  export type DeviceUpdateWithoutAlertsInput = {
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutDevicesNestedInput
    measurements?: MeasurementUpdateManyWithoutSensorNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    measurements?: MeasurementUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type RoomUpsertWithoutAlertsInput = {
    update: XOR<RoomUpdateWithoutAlertsInput, RoomUncheckedUpdateWithoutAlertsInput>
    create: XOR<RoomCreateWithoutAlertsInput, RoomUncheckedCreateWithoutAlertsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAlertsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAlertsInput, RoomUncheckedUpdateWithoutAlertsInput>
  }

  export type RoomUpdateWithoutAlertsInput = {
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutRoomNestedInput
    roomHistory?: RoomHistoryUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sector?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
    roomHistory?: RoomHistoryUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type AlertHistoryUpsertWithWhereUniqueWithoutAlertInput = {
    where: AlertHistoryWhereUniqueInput
    update: XOR<AlertHistoryUpdateWithoutAlertInput, AlertHistoryUncheckedUpdateWithoutAlertInput>
    create: XOR<AlertHistoryCreateWithoutAlertInput, AlertHistoryUncheckedCreateWithoutAlertInput>
  }

  export type AlertHistoryUpdateWithWhereUniqueWithoutAlertInput = {
    where: AlertHistoryWhereUniqueInput
    data: XOR<AlertHistoryUpdateWithoutAlertInput, AlertHistoryUncheckedUpdateWithoutAlertInput>
  }

  export type AlertHistoryUpdateManyWithWhereWithoutAlertInput = {
    where: AlertHistoryScalarWhereInput
    data: XOR<AlertHistoryUpdateManyMutationInput, AlertHistoryUncheckedUpdateManyWithoutAlertInput>
  }

  export type AlertHistoryScalarWhereInput = {
    AND?: AlertHistoryScalarWhereInput | AlertHistoryScalarWhereInput[]
    OR?: AlertHistoryScalarWhereInput[]
    NOT?: AlertHistoryScalarWhereInput | AlertHistoryScalarWhereInput[]
    id?: IntFilter<"AlertHistory"> | number
    alertId?: IntFilter<"AlertHistory"> | number
    status?: StringFilter<"AlertHistory"> | string
    resolvedAt?: DateTimeNullableFilter<"AlertHistory"> | Date | string | null
    notes?: StringNullableFilter<"AlertHistory"> | string | null
    createdAt?: DateTimeFilter<"AlertHistory"> | Date | string
    updatedAt?: DateTimeFilter<"AlertHistory"> | Date | string
  }

  export type AlertCreateWithoutAlertHistoryInput = {
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAlertsInput
    sensor: DeviceCreateNestedOneWithoutAlertsInput
    room: RoomCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutAlertHistoryInput = {
    id?: number
    patientId: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutAlertHistoryInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutAlertHistoryInput, AlertUncheckedCreateWithoutAlertHistoryInput>
  }

  export type AlertUpsertWithoutAlertHistoryInput = {
    update: XOR<AlertUpdateWithoutAlertHistoryInput, AlertUncheckedUpdateWithoutAlertHistoryInput>
    create: XOR<AlertCreateWithoutAlertHistoryInput, AlertUncheckedCreateWithoutAlertHistoryInput>
    where?: AlertWhereInput
  }

  export type AlertUpdateToOneWithWhereWithoutAlertHistoryInput = {
    where?: AlertWhereInput
    data: XOR<AlertUpdateWithoutAlertHistoryInput, AlertUncheckedUpdateWithoutAlertHistoryInput>
  }

  export type AlertUpdateWithoutAlertHistoryInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAlertsNestedInput
    sensor?: DeviceUpdateOneRequiredWithoutAlertsNestedInput
    room?: RoomUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutAlertHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyRoomInput = {
    id?: number
    macAddress: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryCreateManyRoomInput = {
    id?: number
    patientId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManyRoomInput = {
    id?: number
    patientId: number
    sensorId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutRoomInput = {
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementUpdateManyWithoutSensorNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type DeviceUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementUncheckedUpdateManyWithoutSensorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    macAddress?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryUpdateWithoutRoomInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRoomHistoryNestedInput
  }

  export type RoomHistoryUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutRoomInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAlertsNestedInput
    sensor?: DeviceUpdateOneRequiredWithoutAlertsNestedInput
    alertHistory?: AlertHistoryUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertHistory?: AlertHistoryUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementCreateManySensorInput = {
    id?: number
    bpm: number
    patientId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManySensorInput = {
    id?: number
    patientId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementUpdateWithoutSensorInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateManyWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutSensorInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAlertsNestedInput
    room?: RoomUpdateOneRequiredWithoutAlertsNestedInput
    alertHistory?: AlertHistoryUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertHistory?: AlertHistoryUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateManyWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryCreateManyPatientInput = {
    id?: number
    roomId: number
    entryDate?: Date | string
    exitDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementCreateManyPatientInput = {
    id?: number
    bpm: number
    sensorId: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManyPatientInput = {
    id?: number
    sensorId: number
    roomId: number
    bpm: number
    alertType: string
    threshold: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomHistoryUpdateWithoutPatientInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomHistoryNestedInput
  }

  export type RoomHistoryUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomHistoryUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUpdateWithoutPatientInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensor?: DeviceUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutPatientInput = {
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensor?: DeviceUpdateOneRequiredWithoutAlertsNestedInput
    room?: RoomUpdateOneRequiredWithoutAlertsNestedInput
    alertHistory?: AlertHistoryUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertHistory?: AlertHistoryUncheckedUpdateManyWithoutAlertNestedInput
  }

  export type AlertUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryCreateManyAlertInput = {
    id?: number
    status: string
    resolvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertHistoryUpdateWithoutAlertInput = {
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryUncheckedUpdateWithoutAlertInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertHistoryUncheckedUpdateManyWithoutAlertInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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