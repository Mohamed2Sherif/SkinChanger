
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
 * Model Champion
 * 
 */
export type Champion = $Result.DefaultSelection<Prisma.$ChampionPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Champion_Role
 * 
 */
export type Champion_Role = $Result.DefaultSelection<Prisma.$Champion_RolePayload>
/**
 * Model Skin
 * 
 */
export type Skin = $Result.DefaultSelection<Prisma.$SkinPayload>
/**
 * Model FavouriteSkin
 * 
 */
export type FavouriteSkin = $Result.DefaultSelection<Prisma.$FavouriteSkinPayload>
/**
 * Model GameSettings
 * 
 */
export type GameSettings = $Result.DefaultSelection<Prisma.$GameSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Champions
 * const champions = await prisma.champion.findMany()
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
   * // Fetch zero or more Champions
   * const champions = await prisma.champion.findMany()
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
   * `prisma.champion`: Exposes CRUD operations for the **Champion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Champions
    * const champions = await prisma.champion.findMany()
    * ```
    */
  get champion(): Prisma.ChampionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.champion_Role`: Exposes CRUD operations for the **Champion_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Champion_Roles
    * const champion_Roles = await prisma.champion_Role.findMany()
    * ```
    */
  get champion_Role(): Prisma.Champion_RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skin`: Exposes CRUD operations for the **Skin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skins
    * const skins = await prisma.skin.findMany()
    * ```
    */
  get skin(): Prisma.SkinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favouriteSkin`: Exposes CRUD operations for the **FavouriteSkin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavouriteSkins
    * const favouriteSkins = await prisma.favouriteSkin.findMany()
    * ```
    */
  get favouriteSkin(): Prisma.FavouriteSkinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSettings`: Exposes CRUD operations for the **GameSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSettings
    * const gameSettings = await prisma.gameSettings.findMany()
    * ```
    */
  get gameSettings(): Prisma.GameSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Champion: 'Champion',
    Role: 'Role',
    Champion_Role: 'Champion_Role',
    Skin: 'Skin',
    FavouriteSkin: 'FavouriteSkin',
    GameSettings: 'GameSettings'
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
      modelProps: "champion" | "role" | "champion_Role" | "skin" | "favouriteSkin" | "gameSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Champion: {
        payload: Prisma.$ChampionPayload<ExtArgs>
        fields: Prisma.ChampionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChampionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChampionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          findFirst: {
            args: Prisma.ChampionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChampionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          findMany: {
            args: Prisma.ChampionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>[]
          }
          create: {
            args: Prisma.ChampionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          createMany: {
            args: Prisma.ChampionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChampionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>[]
          }
          delete: {
            args: Prisma.ChampionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          update: {
            args: Prisma.ChampionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          deleteMany: {
            args: Prisma.ChampionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChampionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChampionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>[]
          }
          upsert: {
            args: Prisma.ChampionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          aggregate: {
            args: Prisma.ChampionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChampion>
          }
          groupBy: {
            args: Prisma.ChampionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChampionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChampionCountArgs<ExtArgs>
            result: $Utils.Optional<ChampionCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Champion_Role: {
        payload: Prisma.$Champion_RolePayload<ExtArgs>
        fields: Prisma.Champion_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Champion_RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Champion_RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          findFirst: {
            args: Prisma.Champion_RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Champion_RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          findMany: {
            args: Prisma.Champion_RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>[]
          }
          create: {
            args: Prisma.Champion_RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          createMany: {
            args: Prisma.Champion_RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Champion_RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>[]
          }
          delete: {
            args: Prisma.Champion_RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          update: {
            args: Prisma.Champion_RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          deleteMany: {
            args: Prisma.Champion_RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Champion_RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Champion_RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>[]
          }
          upsert: {
            args: Prisma.Champion_RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Champion_RolePayload>
          }
          aggregate: {
            args: Prisma.Champion_RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChampion_Role>
          }
          groupBy: {
            args: Prisma.Champion_RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Champion_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.Champion_RoleCountArgs<ExtArgs>
            result: $Utils.Optional<Champion_RoleCountAggregateOutputType> | number
          }
        }
      }
      Skin: {
        payload: Prisma.$SkinPayload<ExtArgs>
        fields: Prisma.SkinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          findFirst: {
            args: Prisma.SkinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          findMany: {
            args: Prisma.SkinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          create: {
            args: Prisma.SkinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          createMany: {
            args: Prisma.SkinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          delete: {
            args: Prisma.SkinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          update: {
            args: Prisma.SkinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          deleteMany: {
            args: Prisma.SkinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          upsert: {
            args: Prisma.SkinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          aggregate: {
            args: Prisma.SkinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkin>
          }
          groupBy: {
            args: Prisma.SkinGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkinGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkinCountArgs<ExtArgs>
            result: $Utils.Optional<SkinCountAggregateOutputType> | number
          }
        }
      }
      FavouriteSkin: {
        payload: Prisma.$FavouriteSkinPayload<ExtArgs>
        fields: Prisma.FavouriteSkinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteSkinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteSkinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          findFirst: {
            args: Prisma.FavouriteSkinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteSkinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          findMany: {
            args: Prisma.FavouriteSkinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>[]
          }
          create: {
            args: Prisma.FavouriteSkinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          createMany: {
            args: Prisma.FavouriteSkinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouriteSkinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>[]
          }
          delete: {
            args: Prisma.FavouriteSkinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          update: {
            args: Prisma.FavouriteSkinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          deleteMany: {
            args: Prisma.FavouriteSkinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteSkinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouriteSkinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>[]
          }
          upsert: {
            args: Prisma.FavouriteSkinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouriteSkinPayload>
          }
          aggregate: {
            args: Prisma.FavouriteSkinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavouriteSkin>
          }
          groupBy: {
            args: Prisma.FavouriteSkinGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteSkinGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouriteSkinCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteSkinCountAggregateOutputType> | number
          }
        }
      }
      GameSettings: {
        payload: Prisma.$GameSettingsPayload<ExtArgs>
        fields: Prisma.GameSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          findFirst: {
            args: Prisma.GameSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          findMany: {
            args: Prisma.GameSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>[]
          }
          create: {
            args: Prisma.GameSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          createMany: {
            args: Prisma.GameSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>[]
          }
          delete: {
            args: Prisma.GameSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          update: {
            args: Prisma.GameSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          deleteMany: {
            args: Prisma.GameSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>[]
          }
          upsert: {
            args: Prisma.GameSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSettingsPayload>
          }
          aggregate: {
            args: Prisma.GameSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSettings>
          }
          groupBy: {
            args: Prisma.GameSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<GameSettingsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
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
    champion?: ChampionOmit
    role?: RoleOmit
    champion_Role?: Champion_RoleOmit
    skin?: SkinOmit
    favouriteSkin?: FavouriteSkinOmit
    gameSettings?: GameSettingsOmit
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
   * Count Type ChampionCountOutputType
   */

  export type ChampionCountOutputType = {
    skins: number
    roles: number
  }

  export type ChampionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skins?: boolean | ChampionCountOutputTypeCountSkinsArgs
    roles?: boolean | ChampionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * ChampionCountOutputType without action
   */
  export type ChampionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChampionCountOutputType
     */
    select?: ChampionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChampionCountOutputType without action
   */
  export type ChampionCountOutputTypeCountSkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkinWhereInput
  }

  /**
   * ChampionCountOutputType without action
   */
  export type ChampionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Champion_RoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    champions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champions?: boolean | RoleCountOutputTypeCountChampionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountChampionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Champion_RoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Champion
   */

  export type AggregateChampion = {
    _count: ChampionCountAggregateOutputType | null
    _avg: ChampionAvgAggregateOutputType | null
    _sum: ChampionSumAggregateOutputType | null
    _min: ChampionMinAggregateOutputType | null
    _max: ChampionMaxAggregateOutputType | null
  }

  export type ChampionAvgAggregateOutputType = {
    id: number | null
  }

  export type ChampionSumAggregateOutputType = {
    id: number | null
  }

  export type ChampionMinAggregateOutputType = {
    id: number | null
    champ_code: string | null
    champ_name: string | null
    image_url: string | null
  }

  export type ChampionMaxAggregateOutputType = {
    id: number | null
    champ_code: string | null
    champ_name: string | null
    image_url: string | null
  }

  export type ChampionCountAggregateOutputType = {
    id: number
    champ_code: number
    champ_name: number
    image_url: number
    _all: number
  }


  export type ChampionAvgAggregateInputType = {
    id?: true
  }

  export type ChampionSumAggregateInputType = {
    id?: true
  }

  export type ChampionMinAggregateInputType = {
    id?: true
    champ_code?: true
    champ_name?: true
    image_url?: true
  }

  export type ChampionMaxAggregateInputType = {
    id?: true
    champ_code?: true
    champ_name?: true
    image_url?: true
  }

  export type ChampionCountAggregateInputType = {
    id?: true
    champ_code?: true
    champ_name?: true
    image_url?: true
    _all?: true
  }

  export type ChampionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champion to aggregate.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Champions
    **/
    _count?: true | ChampionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChampionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChampionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChampionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChampionMaxAggregateInputType
  }

  export type GetChampionAggregateType<T extends ChampionAggregateArgs> = {
        [P in keyof T & keyof AggregateChampion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChampion[P]>
      : GetScalarType<T[P], AggregateChampion[P]>
  }




  export type ChampionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChampionWhereInput
    orderBy?: ChampionOrderByWithAggregationInput | ChampionOrderByWithAggregationInput[]
    by: ChampionScalarFieldEnum[] | ChampionScalarFieldEnum
    having?: ChampionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChampionCountAggregateInputType | true
    _avg?: ChampionAvgAggregateInputType
    _sum?: ChampionSumAggregateInputType
    _min?: ChampionMinAggregateInputType
    _max?: ChampionMaxAggregateInputType
  }

  export type ChampionGroupByOutputType = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    _count: ChampionCountAggregateOutputType | null
    _avg: ChampionAvgAggregateOutputType | null
    _sum: ChampionSumAggregateOutputType | null
    _min: ChampionMinAggregateOutputType | null
    _max: ChampionMaxAggregateOutputType | null
  }

  type GetChampionGroupByPayload<T extends ChampionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChampionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChampionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChampionGroupByOutputType[P]>
            : GetScalarType<T[P], ChampionGroupByOutputType[P]>
        }
      >
    >


  export type ChampionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    champ_code?: boolean
    champ_name?: boolean
    image_url?: boolean
    skins?: boolean | Champion$skinsArgs<ExtArgs>
    roles?: boolean | Champion$rolesArgs<ExtArgs>
    _count?: boolean | ChampionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["champion"]>

  export type ChampionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    champ_code?: boolean
    champ_name?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["champion"]>

  export type ChampionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    champ_code?: boolean
    champ_name?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["champion"]>

  export type ChampionSelectScalar = {
    id?: boolean
    champ_code?: boolean
    champ_name?: boolean
    image_url?: boolean
  }

  export type ChampionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "champ_code" | "champ_name" | "image_url", ExtArgs["result"]["champion"]>
  export type ChampionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skins?: boolean | Champion$skinsArgs<ExtArgs>
    roles?: boolean | Champion$rolesArgs<ExtArgs>
    _count?: boolean | ChampionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChampionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChampionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChampionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Champion"
    objects: {
      skins: Prisma.$SkinPayload<ExtArgs>[]
      roles: Prisma.$Champion_RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      champ_code: string
      champ_name: string
      image_url: string
    }, ExtArgs["result"]["champion"]>
    composites: {}
  }

  type ChampionGetPayload<S extends boolean | null | undefined | ChampionDefaultArgs> = $Result.GetResult<Prisma.$ChampionPayload, S>

  type ChampionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChampionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChampionCountAggregateInputType | true
    }

  export interface ChampionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Champion'], meta: { name: 'Champion' } }
    /**
     * Find zero or one Champion that matches the filter.
     * @param {ChampionFindUniqueArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChampionFindUniqueArgs>(args: SelectSubset<T, ChampionFindUniqueArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Champion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChampionFindUniqueOrThrowArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChampionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChampionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Champion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindFirstArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChampionFindFirstArgs>(args?: SelectSubset<T, ChampionFindFirstArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Champion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindFirstOrThrowArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChampionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChampionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Champions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Champions
     * const champions = await prisma.champion.findMany()
     * 
     * // Get first 10 Champions
     * const champions = await prisma.champion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const championWithIdOnly = await prisma.champion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChampionFindManyArgs>(args?: SelectSubset<T, ChampionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Champion.
     * @param {ChampionCreateArgs} args - Arguments to create a Champion.
     * @example
     * // Create one Champion
     * const Champion = await prisma.champion.create({
     *   data: {
     *     // ... data to create a Champion
     *   }
     * })
     * 
     */
    create<T extends ChampionCreateArgs>(args: SelectSubset<T, ChampionCreateArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Champions.
     * @param {ChampionCreateManyArgs} args - Arguments to create many Champions.
     * @example
     * // Create many Champions
     * const champion = await prisma.champion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChampionCreateManyArgs>(args?: SelectSubset<T, ChampionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Champions and returns the data saved in the database.
     * @param {ChampionCreateManyAndReturnArgs} args - Arguments to create many Champions.
     * @example
     * // Create many Champions
     * const champion = await prisma.champion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Champions and only return the `id`
     * const championWithIdOnly = await prisma.champion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChampionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChampionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Champion.
     * @param {ChampionDeleteArgs} args - Arguments to delete one Champion.
     * @example
     * // Delete one Champion
     * const Champion = await prisma.champion.delete({
     *   where: {
     *     // ... filter to delete one Champion
     *   }
     * })
     * 
     */
    delete<T extends ChampionDeleteArgs>(args: SelectSubset<T, ChampionDeleteArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Champion.
     * @param {ChampionUpdateArgs} args - Arguments to update one Champion.
     * @example
     * // Update one Champion
     * const champion = await prisma.champion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChampionUpdateArgs>(args: SelectSubset<T, ChampionUpdateArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Champions.
     * @param {ChampionDeleteManyArgs} args - Arguments to filter Champions to delete.
     * @example
     * // Delete a few Champions
     * const { count } = await prisma.champion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChampionDeleteManyArgs>(args?: SelectSubset<T, ChampionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Champions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Champions
     * const champion = await prisma.champion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChampionUpdateManyArgs>(args: SelectSubset<T, ChampionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Champions and returns the data updated in the database.
     * @param {ChampionUpdateManyAndReturnArgs} args - Arguments to update many Champions.
     * @example
     * // Update many Champions
     * const champion = await prisma.champion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Champions and only return the `id`
     * const championWithIdOnly = await prisma.champion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChampionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChampionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Champion.
     * @param {ChampionUpsertArgs} args - Arguments to update or create a Champion.
     * @example
     * // Update or create a Champion
     * const champion = await prisma.champion.upsert({
     *   create: {
     *     // ... data to create a Champion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Champion we want to update
     *   }
     * })
     */
    upsert<T extends ChampionUpsertArgs>(args: SelectSubset<T, ChampionUpsertArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Champions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionCountArgs} args - Arguments to filter Champions to count.
     * @example
     * // Count the number of Champions
     * const count = await prisma.champion.count({
     *   where: {
     *     // ... the filter for the Champions we want to count
     *   }
     * })
    **/
    count<T extends ChampionCountArgs>(
      args?: Subset<T, ChampionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChampionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Champion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChampionAggregateArgs>(args: Subset<T, ChampionAggregateArgs>): Prisma.PrismaPromise<GetChampionAggregateType<T>>

    /**
     * Group by Champion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionGroupByArgs} args - Group by arguments.
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
      T extends ChampionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChampionGroupByArgs['orderBy'] }
        : { orderBy?: ChampionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChampionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChampionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Champion model
   */
  readonly fields: ChampionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Champion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChampionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skins<T extends Champion$skinsArgs<ExtArgs> = {}>(args?: Subset<T, Champion$skinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Champion$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Champion$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Champion model
   */ 
  interface ChampionFieldRefs {
    readonly id: FieldRef<"Champion", 'Int'>
    readonly champ_code: FieldRef<"Champion", 'String'>
    readonly champ_name: FieldRef<"Champion", 'String'>
    readonly image_url: FieldRef<"Champion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Champion findUnique
   */
  export type ChampionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where: ChampionWhereUniqueInput
  }

  /**
   * Champion findUniqueOrThrow
   */
  export type ChampionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where: ChampionWhereUniqueInput
  }

  /**
   * Champion findFirst
   */
  export type ChampionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champions.
     */
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }

  /**
   * Champion findFirstOrThrow
   */
  export type ChampionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champions.
     */
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }

  /**
   * Champion findMany
   */
  export type ChampionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter, which Champions to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }

  /**
   * Champion create
   */
  export type ChampionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * The data needed to create a Champion.
     */
    data: XOR<ChampionCreateInput, ChampionUncheckedCreateInput>
  }

  /**
   * Champion createMany
   */
  export type ChampionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Champions.
     */
    data: ChampionCreateManyInput | ChampionCreateManyInput[]
  }

  /**
   * Champion createManyAndReturn
   */
  export type ChampionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * The data used to create many Champions.
     */
    data: ChampionCreateManyInput | ChampionCreateManyInput[]
  }

  /**
   * Champion update
   */
  export type ChampionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * The data needed to update a Champion.
     */
    data: XOR<ChampionUpdateInput, ChampionUncheckedUpdateInput>
    /**
     * Choose, which Champion to update.
     */
    where: ChampionWhereUniqueInput
  }

  /**
   * Champion updateMany
   */
  export type ChampionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Champions.
     */
    data: XOR<ChampionUpdateManyMutationInput, ChampionUncheckedUpdateManyInput>
    /**
     * Filter which Champions to update
     */
    where?: ChampionWhereInput
    /**
     * Limit how many Champions to update.
     */
    limit?: number
  }

  /**
   * Champion updateManyAndReturn
   */
  export type ChampionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * The data used to update Champions.
     */
    data: XOR<ChampionUpdateManyMutationInput, ChampionUncheckedUpdateManyInput>
    /**
     * Filter which Champions to update
     */
    where?: ChampionWhereInput
    /**
     * Limit how many Champions to update.
     */
    limit?: number
  }

  /**
   * Champion upsert
   */
  export type ChampionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * The filter to search for the Champion to update in case it exists.
     */
    where: ChampionWhereUniqueInput
    /**
     * In case the Champion found by the `where` argument doesn't exist, create a new Champion with this data.
     */
    create: XOR<ChampionCreateInput, ChampionUncheckedCreateInput>
    /**
     * In case the Champion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChampionUpdateInput, ChampionUncheckedUpdateInput>
  }

  /**
   * Champion delete
   */
  export type ChampionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
    /**
     * Filter which Champion to delete.
     */
    where: ChampionWhereUniqueInput
  }

  /**
   * Champion deleteMany
   */
  export type ChampionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champions to delete
     */
    where?: ChampionWhereInput
    /**
     * Limit how many Champions to delete.
     */
    limit?: number
  }

  /**
   * Champion.skins
   */
  export type Champion$skinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    where?: SkinWhereInput
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    cursor?: SkinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Champion.roles
   */
  export type Champion$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    where?: Champion_RoleWhereInput
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    cursor?: Champion_RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Champion_RoleScalarFieldEnum | Champion_RoleScalarFieldEnum[]
  }

  /**
   * Champion without action
   */
  export type ChampionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion
     */
    omit?: ChampionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChampionInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type RoleMinAggregateOutputType = {
    role_id: number | null
    role_name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    role_id: number | null
    role_name: string | null
  }

  export type RoleCountAggregateOutputType = {
    role_id: number
    role_name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    role_id?: true
  }

  export type RoleSumAggregateInputType = {
    role_id?: true
  }

  export type RoleMinAggregateInputType = {
    role_id?: true
    role_name?: true
  }

  export type RoleMaxAggregateInputType = {
    role_id?: true
    role_name?: true
  }

  export type RoleCountAggregateInputType = {
    role_id?: true
    role_name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    role_id: number
    role_name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    champions?: boolean | Role$championsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    role_id?: boolean
    role_name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "role_name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champions?: boolean | Role$championsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      champions: Prisma.$Champion_RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const roleWithRole_idOnly = await prisma.role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    champions<T extends Role$championsArgs<ExtArgs> = {}>(args?: Subset<T, Role$championsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly role_id: FieldRef<"Role", 'Int'>
    readonly role_name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.champions
   */
  export type Role$championsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    where?: Champion_RoleWhereInput
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    cursor?: Champion_RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Champion_RoleScalarFieldEnum | Champion_RoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Champion_Role
   */

  export type AggregateChampion_Role = {
    _count: Champion_RoleCountAggregateOutputType | null
    _avg: Champion_RoleAvgAggregateOutputType | null
    _sum: Champion_RoleSumAggregateOutputType | null
    _min: Champion_RoleMinAggregateOutputType | null
    _max: Champion_RoleMaxAggregateOutputType | null
  }

  export type Champion_RoleAvgAggregateOutputType = {
    champId: number | null
    roleId: number | null
  }

  export type Champion_RoleSumAggregateOutputType = {
    champId: number | null
    roleId: number | null
  }

  export type Champion_RoleMinAggregateOutputType = {
    champId: number | null
    roleId: number | null
  }

  export type Champion_RoleMaxAggregateOutputType = {
    champId: number | null
    roleId: number | null
  }

  export type Champion_RoleCountAggregateOutputType = {
    champId: number
    roleId: number
    _all: number
  }


  export type Champion_RoleAvgAggregateInputType = {
    champId?: true
    roleId?: true
  }

  export type Champion_RoleSumAggregateInputType = {
    champId?: true
    roleId?: true
  }

  export type Champion_RoleMinAggregateInputType = {
    champId?: true
    roleId?: true
  }

  export type Champion_RoleMaxAggregateInputType = {
    champId?: true
    roleId?: true
  }

  export type Champion_RoleCountAggregateInputType = {
    champId?: true
    roleId?: true
    _all?: true
  }

  export type Champion_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champion_Role to aggregate.
     */
    where?: Champion_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champion_Roles to fetch.
     */
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Champion_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champion_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champion_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Champion_Roles
    **/
    _count?: true | Champion_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Champion_RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Champion_RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Champion_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Champion_RoleMaxAggregateInputType
  }

  export type GetChampion_RoleAggregateType<T extends Champion_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateChampion_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChampion_Role[P]>
      : GetScalarType<T[P], AggregateChampion_Role[P]>
  }




  export type Champion_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Champion_RoleWhereInput
    orderBy?: Champion_RoleOrderByWithAggregationInput | Champion_RoleOrderByWithAggregationInput[]
    by: Champion_RoleScalarFieldEnum[] | Champion_RoleScalarFieldEnum
    having?: Champion_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Champion_RoleCountAggregateInputType | true
    _avg?: Champion_RoleAvgAggregateInputType
    _sum?: Champion_RoleSumAggregateInputType
    _min?: Champion_RoleMinAggregateInputType
    _max?: Champion_RoleMaxAggregateInputType
  }

  export type Champion_RoleGroupByOutputType = {
    champId: number
    roleId: number
    _count: Champion_RoleCountAggregateOutputType | null
    _avg: Champion_RoleAvgAggregateOutputType | null
    _sum: Champion_RoleSumAggregateOutputType | null
    _min: Champion_RoleMinAggregateOutputType | null
    _max: Champion_RoleMaxAggregateOutputType | null
  }

  type GetChampion_RoleGroupByPayload<T extends Champion_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Champion_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Champion_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Champion_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], Champion_RoleGroupByOutputType[P]>
        }
      >
    >


  export type Champion_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    champId?: boolean
    roleId?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["champion_Role"]>

  export type Champion_RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    champId?: boolean
    roleId?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["champion_Role"]>

  export type Champion_RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    champId?: boolean
    roleId?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["champion_Role"]>

  export type Champion_RoleSelectScalar = {
    champId?: boolean
    roleId?: boolean
  }

  export type Champion_RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"champId" | "roleId", ExtArgs["result"]["champion_Role"]>
  export type Champion_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type Champion_RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type Champion_RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $Champion_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Champion_Role"
    objects: {
      champion: Prisma.$ChampionPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      champId: number
      roleId: number
    }, ExtArgs["result"]["champion_Role"]>
    composites: {}
  }

  type Champion_RoleGetPayload<S extends boolean | null | undefined | Champion_RoleDefaultArgs> = $Result.GetResult<Prisma.$Champion_RolePayload, S>

  type Champion_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Champion_RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Champion_RoleCountAggregateInputType | true
    }

  export interface Champion_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Champion_Role'], meta: { name: 'Champion_Role' } }
    /**
     * Find zero or one Champion_Role that matches the filter.
     * @param {Champion_RoleFindUniqueArgs} args - Arguments to find a Champion_Role
     * @example
     * // Get one Champion_Role
     * const champion_Role = await prisma.champion_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Champion_RoleFindUniqueArgs>(args: SelectSubset<T, Champion_RoleFindUniqueArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Champion_Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Champion_RoleFindUniqueOrThrowArgs} args - Arguments to find a Champion_Role
     * @example
     * // Get one Champion_Role
     * const champion_Role = await prisma.champion_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Champion_RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, Champion_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Champion_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleFindFirstArgs} args - Arguments to find a Champion_Role
     * @example
     * // Get one Champion_Role
     * const champion_Role = await prisma.champion_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Champion_RoleFindFirstArgs>(args?: SelectSubset<T, Champion_RoleFindFirstArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Champion_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleFindFirstOrThrowArgs} args - Arguments to find a Champion_Role
     * @example
     * // Get one Champion_Role
     * const champion_Role = await prisma.champion_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Champion_RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, Champion_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Champion_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Champion_Roles
     * const champion_Roles = await prisma.champion_Role.findMany()
     * 
     * // Get first 10 Champion_Roles
     * const champion_Roles = await prisma.champion_Role.findMany({ take: 10 })
     * 
     * // Only select the `champId`
     * const champion_RoleWithChampIdOnly = await prisma.champion_Role.findMany({ select: { champId: true } })
     * 
     */
    findMany<T extends Champion_RoleFindManyArgs>(args?: SelectSubset<T, Champion_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Champion_Role.
     * @param {Champion_RoleCreateArgs} args - Arguments to create a Champion_Role.
     * @example
     * // Create one Champion_Role
     * const Champion_Role = await prisma.champion_Role.create({
     *   data: {
     *     // ... data to create a Champion_Role
     *   }
     * })
     * 
     */
    create<T extends Champion_RoleCreateArgs>(args: SelectSubset<T, Champion_RoleCreateArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Champion_Roles.
     * @param {Champion_RoleCreateManyArgs} args - Arguments to create many Champion_Roles.
     * @example
     * // Create many Champion_Roles
     * const champion_Role = await prisma.champion_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Champion_RoleCreateManyArgs>(args?: SelectSubset<T, Champion_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Champion_Roles and returns the data saved in the database.
     * @param {Champion_RoleCreateManyAndReturnArgs} args - Arguments to create many Champion_Roles.
     * @example
     * // Create many Champion_Roles
     * const champion_Role = await prisma.champion_Role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Champion_Roles and only return the `champId`
     * const champion_RoleWithChampIdOnly = await prisma.champion_Role.createManyAndReturn({
     *   select: { champId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Champion_RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, Champion_RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Champion_Role.
     * @param {Champion_RoleDeleteArgs} args - Arguments to delete one Champion_Role.
     * @example
     * // Delete one Champion_Role
     * const Champion_Role = await prisma.champion_Role.delete({
     *   where: {
     *     // ... filter to delete one Champion_Role
     *   }
     * })
     * 
     */
    delete<T extends Champion_RoleDeleteArgs>(args: SelectSubset<T, Champion_RoleDeleteArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Champion_Role.
     * @param {Champion_RoleUpdateArgs} args - Arguments to update one Champion_Role.
     * @example
     * // Update one Champion_Role
     * const champion_Role = await prisma.champion_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Champion_RoleUpdateArgs>(args: SelectSubset<T, Champion_RoleUpdateArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Champion_Roles.
     * @param {Champion_RoleDeleteManyArgs} args - Arguments to filter Champion_Roles to delete.
     * @example
     * // Delete a few Champion_Roles
     * const { count } = await prisma.champion_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Champion_RoleDeleteManyArgs>(args?: SelectSubset<T, Champion_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Champion_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Champion_Roles
     * const champion_Role = await prisma.champion_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Champion_RoleUpdateManyArgs>(args: SelectSubset<T, Champion_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Champion_Roles and returns the data updated in the database.
     * @param {Champion_RoleUpdateManyAndReturnArgs} args - Arguments to update many Champion_Roles.
     * @example
     * // Update many Champion_Roles
     * const champion_Role = await prisma.champion_Role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Champion_Roles and only return the `champId`
     * const champion_RoleWithChampIdOnly = await prisma.champion_Role.updateManyAndReturn({
     *   select: { champId: true },
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
    updateManyAndReturn<T extends Champion_RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, Champion_RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Champion_Role.
     * @param {Champion_RoleUpsertArgs} args - Arguments to update or create a Champion_Role.
     * @example
     * // Update or create a Champion_Role
     * const champion_Role = await prisma.champion_Role.upsert({
     *   create: {
     *     // ... data to create a Champion_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Champion_Role we want to update
     *   }
     * })
     */
    upsert<T extends Champion_RoleUpsertArgs>(args: SelectSubset<T, Champion_RoleUpsertArgs<ExtArgs>>): Prisma__Champion_RoleClient<$Result.GetResult<Prisma.$Champion_RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Champion_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleCountArgs} args - Arguments to filter Champion_Roles to count.
     * @example
     * // Count the number of Champion_Roles
     * const count = await prisma.champion_Role.count({
     *   where: {
     *     // ... the filter for the Champion_Roles we want to count
     *   }
     * })
    **/
    count<T extends Champion_RoleCountArgs>(
      args?: Subset<T, Champion_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Champion_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Champion_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Champion_RoleAggregateArgs>(args: Subset<T, Champion_RoleAggregateArgs>): Prisma.PrismaPromise<GetChampion_RoleAggregateType<T>>

    /**
     * Group by Champion_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Champion_RoleGroupByArgs} args - Group by arguments.
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
      T extends Champion_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Champion_RoleGroupByArgs['orderBy'] }
        : { orderBy?: Champion_RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Champion_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChampion_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Champion_Role model
   */
  readonly fields: Champion_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Champion_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Champion_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    champion<T extends ChampionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChampionDefaultArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Champion_Role model
   */ 
  interface Champion_RoleFieldRefs {
    readonly champId: FieldRef<"Champion_Role", 'Int'>
    readonly roleId: FieldRef<"Champion_Role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Champion_Role findUnique
   */
  export type Champion_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Champion_Role to fetch.
     */
    where: Champion_RoleWhereUniqueInput
  }

  /**
   * Champion_Role findUniqueOrThrow
   */
  export type Champion_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Champion_Role to fetch.
     */
    where: Champion_RoleWhereUniqueInput
  }

  /**
   * Champion_Role findFirst
   */
  export type Champion_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Champion_Role to fetch.
     */
    where?: Champion_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champion_Roles to fetch.
     */
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champion_Roles.
     */
    cursor?: Champion_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champion_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champion_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champion_Roles.
     */
    distinct?: Champion_RoleScalarFieldEnum | Champion_RoleScalarFieldEnum[]
  }

  /**
   * Champion_Role findFirstOrThrow
   */
  export type Champion_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Champion_Role to fetch.
     */
    where?: Champion_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champion_Roles to fetch.
     */
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champion_Roles.
     */
    cursor?: Champion_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champion_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champion_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champion_Roles.
     */
    distinct?: Champion_RoleScalarFieldEnum | Champion_RoleScalarFieldEnum[]
  }

  /**
   * Champion_Role findMany
   */
  export type Champion_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter, which Champion_Roles to fetch.
     */
    where?: Champion_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champion_Roles to fetch.
     */
    orderBy?: Champion_RoleOrderByWithRelationInput | Champion_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Champion_Roles.
     */
    cursor?: Champion_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champion_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champion_Roles.
     */
    skip?: number
    distinct?: Champion_RoleScalarFieldEnum | Champion_RoleScalarFieldEnum[]
  }

  /**
   * Champion_Role create
   */
  export type Champion_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Champion_Role.
     */
    data: XOR<Champion_RoleCreateInput, Champion_RoleUncheckedCreateInput>
  }

  /**
   * Champion_Role createMany
   */
  export type Champion_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Champion_Roles.
     */
    data: Champion_RoleCreateManyInput | Champion_RoleCreateManyInput[]
  }

  /**
   * Champion_Role createManyAndReturn
   */
  export type Champion_RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Champion_Roles.
     */
    data: Champion_RoleCreateManyInput | Champion_RoleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Champion_Role update
   */
  export type Champion_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Champion_Role.
     */
    data: XOR<Champion_RoleUpdateInput, Champion_RoleUncheckedUpdateInput>
    /**
     * Choose, which Champion_Role to update.
     */
    where: Champion_RoleWhereUniqueInput
  }

  /**
   * Champion_Role updateMany
   */
  export type Champion_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Champion_Roles.
     */
    data: XOR<Champion_RoleUpdateManyMutationInput, Champion_RoleUncheckedUpdateManyInput>
    /**
     * Filter which Champion_Roles to update
     */
    where?: Champion_RoleWhereInput
    /**
     * Limit how many Champion_Roles to update.
     */
    limit?: number
  }

  /**
   * Champion_Role updateManyAndReturn
   */
  export type Champion_RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * The data used to update Champion_Roles.
     */
    data: XOR<Champion_RoleUpdateManyMutationInput, Champion_RoleUncheckedUpdateManyInput>
    /**
     * Filter which Champion_Roles to update
     */
    where?: Champion_RoleWhereInput
    /**
     * Limit how many Champion_Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Champion_Role upsert
   */
  export type Champion_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Champion_Role to update in case it exists.
     */
    where: Champion_RoleWhereUniqueInput
    /**
     * In case the Champion_Role found by the `where` argument doesn't exist, create a new Champion_Role with this data.
     */
    create: XOR<Champion_RoleCreateInput, Champion_RoleUncheckedCreateInput>
    /**
     * In case the Champion_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Champion_RoleUpdateInput, Champion_RoleUncheckedUpdateInput>
  }

  /**
   * Champion_Role delete
   */
  export type Champion_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
    /**
     * Filter which Champion_Role to delete.
     */
    where: Champion_RoleWhereUniqueInput
  }

  /**
   * Champion_Role deleteMany
   */
  export type Champion_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champion_Roles to delete
     */
    where?: Champion_RoleWhereInput
    /**
     * Limit how many Champion_Roles to delete.
     */
    limit?: number
  }

  /**
   * Champion_Role without action
   */
  export type Champion_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion_Role
     */
    select?: Champion_RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Champion_Role
     */
    omit?: Champion_RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Champion_RoleInclude<ExtArgs> | null
  }


  /**
   * Model Skin
   */

  export type AggregateSkin = {
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  export type SkinAvgAggregateOutputType = {
    champ_id: number | null
    skin_number: number | null
  }

  export type SkinSumAggregateOutputType = {
    champ_id: number | null
    skin_number: number | null
  }

  export type SkinMinAggregateOutputType = {
    id: string | null
    skin_name: string | null
    champ_id: number | null
    skin_number: number | null
    local_skin_path: string | null
  }

  export type SkinMaxAggregateOutputType = {
    id: string | null
    skin_name: string | null
    champ_id: number | null
    skin_number: number | null
    local_skin_path: string | null
  }

  export type SkinCountAggregateOutputType = {
    id: number
    skin_name: number
    champ_id: number
    skin_number: number
    local_skin_path: number
    _all: number
  }


  export type SkinAvgAggregateInputType = {
    champ_id?: true
    skin_number?: true
  }

  export type SkinSumAggregateInputType = {
    champ_id?: true
    skin_number?: true
  }

  export type SkinMinAggregateInputType = {
    id?: true
    skin_name?: true
    champ_id?: true
    skin_number?: true
    local_skin_path?: true
  }

  export type SkinMaxAggregateInputType = {
    id?: true
    skin_name?: true
    champ_id?: true
    skin_number?: true
    local_skin_path?: true
  }

  export type SkinCountAggregateInputType = {
    id?: true
    skin_name?: true
    champ_id?: true
    skin_number?: true
    local_skin_path?: true
    _all?: true
  }

  export type SkinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skin to aggregate.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skins
    **/
    _count?: true | SkinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkinMaxAggregateInputType
  }

  export type GetSkinAggregateType<T extends SkinAggregateArgs> = {
        [P in keyof T & keyof AggregateSkin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkin[P]>
      : GetScalarType<T[P], AggregateSkin[P]>
  }




  export type SkinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkinWhereInput
    orderBy?: SkinOrderByWithAggregationInput | SkinOrderByWithAggregationInput[]
    by: SkinScalarFieldEnum[] | SkinScalarFieldEnum
    having?: SkinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkinCountAggregateInputType | true
    _avg?: SkinAvgAggregateInputType
    _sum?: SkinSumAggregateInputType
    _min?: SkinMinAggregateInputType
    _max?: SkinMaxAggregateInputType
  }

  export type SkinGroupByOutputType = {
    id: string
    skin_name: string
    champ_id: number
    skin_number: number
    local_skin_path: string | null
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  type GetSkinGroupByPayload<T extends SkinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkinGroupByOutputType[P]>
            : GetScalarType<T[P], SkinGroupByOutputType[P]>
        }
      >
    >


  export type SkinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skin_name?: boolean
    champ_id?: boolean
    skin_number?: boolean
    local_skin_path?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    FavouriteSkin?: boolean | Skin$FavouriteSkinArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skin_name?: boolean
    champ_id?: boolean
    skin_number?: boolean
    local_skin_path?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skin_name?: boolean
    champ_id?: boolean
    skin_number?: boolean
    local_skin_path?: boolean
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectScalar = {
    id?: boolean
    skin_name?: boolean
    champ_id?: boolean
    skin_number?: boolean
    local_skin_path?: boolean
  }

  export type SkinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skin_name" | "champ_id" | "skin_number" | "local_skin_path", ExtArgs["result"]["skin"]>
  export type SkinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
    FavouriteSkin?: boolean | Skin$FavouriteSkinArgs<ExtArgs>
  }
  export type SkinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
  }
  export type SkinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    champion?: boolean | ChampionDefaultArgs<ExtArgs>
  }

  export type $SkinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skin"
    objects: {
      champion: Prisma.$ChampionPayload<ExtArgs>
      FavouriteSkin: Prisma.$FavouriteSkinPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skin_name: string
      champ_id: number
      skin_number: number
      local_skin_path: string | null
    }, ExtArgs["result"]["skin"]>
    composites: {}
  }

  type SkinGetPayload<S extends boolean | null | undefined | SkinDefaultArgs> = $Result.GetResult<Prisma.$SkinPayload, S>

  type SkinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkinCountAggregateInputType | true
    }

  export interface SkinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skin'], meta: { name: 'Skin' } }
    /**
     * Find zero or one Skin that matches the filter.
     * @param {SkinFindUniqueArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkinFindUniqueArgs>(args: SelectSubset<T, SkinFindUniqueArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkinFindUniqueOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkinFindUniqueOrThrowArgs>(args: SelectSubset<T, SkinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindFirstArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkinFindFirstArgs>(args?: SelectSubset<T, SkinFindFirstArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindFirstOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkinFindFirstOrThrowArgs>(args?: SelectSubset<T, SkinFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skins
     * const skins = await prisma.skin.findMany()
     * 
     * // Get first 10 Skins
     * const skins = await prisma.skin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skinWithIdOnly = await prisma.skin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkinFindManyArgs>(args?: SelectSubset<T, SkinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skin.
     * @param {SkinCreateArgs} args - Arguments to create a Skin.
     * @example
     * // Create one Skin
     * const Skin = await prisma.skin.create({
     *   data: {
     *     // ... data to create a Skin
     *   }
     * })
     * 
     */
    create<T extends SkinCreateArgs>(args: SelectSubset<T, SkinCreateArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skins.
     * @param {SkinCreateManyArgs} args - Arguments to create many Skins.
     * @example
     * // Create many Skins
     * const skin = await prisma.skin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkinCreateManyArgs>(args?: SelectSubset<T, SkinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skins and returns the data saved in the database.
     * @param {SkinCreateManyAndReturnArgs} args - Arguments to create many Skins.
     * @example
     * // Create many Skins
     * const skin = await prisma.skin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skins and only return the `id`
     * const skinWithIdOnly = await prisma.skin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkinCreateManyAndReturnArgs>(args?: SelectSubset<T, SkinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skin.
     * @param {SkinDeleteArgs} args - Arguments to delete one Skin.
     * @example
     * // Delete one Skin
     * const Skin = await prisma.skin.delete({
     *   where: {
     *     // ... filter to delete one Skin
     *   }
     * })
     * 
     */
    delete<T extends SkinDeleteArgs>(args: SelectSubset<T, SkinDeleteArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skin.
     * @param {SkinUpdateArgs} args - Arguments to update one Skin.
     * @example
     * // Update one Skin
     * const skin = await prisma.skin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkinUpdateArgs>(args: SelectSubset<T, SkinUpdateArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skins.
     * @param {SkinDeleteManyArgs} args - Arguments to filter Skins to delete.
     * @example
     * // Delete a few Skins
     * const { count } = await prisma.skin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkinDeleteManyArgs>(args?: SelectSubset<T, SkinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skins
     * const skin = await prisma.skin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkinUpdateManyArgs>(args: SelectSubset<T, SkinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skins and returns the data updated in the database.
     * @param {SkinUpdateManyAndReturnArgs} args - Arguments to update many Skins.
     * @example
     * // Update many Skins
     * const skin = await prisma.skin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skins and only return the `id`
     * const skinWithIdOnly = await prisma.skin.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkinUpdateManyAndReturnArgs>(args: SelectSubset<T, SkinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skin.
     * @param {SkinUpsertArgs} args - Arguments to update or create a Skin.
     * @example
     * // Update or create a Skin
     * const skin = await prisma.skin.upsert({
     *   create: {
     *     // ... data to create a Skin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skin we want to update
     *   }
     * })
     */
    upsert<T extends SkinUpsertArgs>(args: SelectSubset<T, SkinUpsertArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinCountArgs} args - Arguments to filter Skins to count.
     * @example
     * // Count the number of Skins
     * const count = await prisma.skin.count({
     *   where: {
     *     // ... the filter for the Skins we want to count
     *   }
     * })
    **/
    count<T extends SkinCountArgs>(
      args?: Subset<T, SkinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkinAggregateArgs>(args: Subset<T, SkinAggregateArgs>): Prisma.PrismaPromise<GetSkinAggregateType<T>>

    /**
     * Group by Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinGroupByArgs} args - Group by arguments.
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
      T extends SkinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkinGroupByArgs['orderBy'] }
        : { orderBy?: SkinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skin model
   */
  readonly fields: SkinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    champion<T extends ChampionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChampionDefaultArgs<ExtArgs>>): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    FavouriteSkin<T extends Skin$FavouriteSkinArgs<ExtArgs> = {}>(args?: Subset<T, Skin$FavouriteSkinArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Skin model
   */ 
  interface SkinFieldRefs {
    readonly id: FieldRef<"Skin", 'String'>
    readonly skin_name: FieldRef<"Skin", 'String'>
    readonly champ_id: FieldRef<"Skin", 'Int'>
    readonly skin_number: FieldRef<"Skin", 'Int'>
    readonly local_skin_path: FieldRef<"Skin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skin findUnique
   */
  export type SkinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin findUniqueOrThrow
   */
  export type SkinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin findFirst
   */
  export type SkinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin findFirstOrThrow
   */
  export type SkinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin findMany
   */
  export type SkinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skins to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin create
   */
  export type SkinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The data needed to create a Skin.
     */
    data: XOR<SkinCreateInput, SkinUncheckedCreateInput>
  }

  /**
   * Skin createMany
   */
  export type SkinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skins.
     */
    data: SkinCreateManyInput | SkinCreateManyInput[]
  }

  /**
   * Skin createManyAndReturn
   */
  export type SkinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * The data used to create many Skins.
     */
    data: SkinCreateManyInput | SkinCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skin update
   */
  export type SkinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The data needed to update a Skin.
     */
    data: XOR<SkinUpdateInput, SkinUncheckedUpdateInput>
    /**
     * Choose, which Skin to update.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin updateMany
   */
  export type SkinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skins.
     */
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyInput>
    /**
     * Filter which Skins to update
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to update.
     */
    limit?: number
  }

  /**
   * Skin updateManyAndReturn
   */
  export type SkinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * The data used to update Skins.
     */
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyInput>
    /**
     * Filter which Skins to update
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skin upsert
   */
  export type SkinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The filter to search for the Skin to update in case it exists.
     */
    where: SkinWhereUniqueInput
    /**
     * In case the Skin found by the `where` argument doesn't exist, create a new Skin with this data.
     */
    create: XOR<SkinCreateInput, SkinUncheckedCreateInput>
    /**
     * In case the Skin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkinUpdateInput, SkinUncheckedUpdateInput>
  }

  /**
   * Skin delete
   */
  export type SkinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter which Skin to delete.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin deleteMany
   */
  export type SkinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skins to delete
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to delete.
     */
    limit?: number
  }

  /**
   * Skin.FavouriteSkin
   */
  export type Skin$FavouriteSkinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    where?: FavouriteSkinWhereInput
  }

  /**
   * Skin without action
   */
  export type SkinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
  }


  /**
   * Model FavouriteSkin
   */

  export type AggregateFavouriteSkin = {
    _count: FavouriteSkinCountAggregateOutputType | null
    _min: FavouriteSkinMinAggregateOutputType | null
    _max: FavouriteSkinMaxAggregateOutputType | null
  }

  export type FavouriteSkinMinAggregateOutputType = {
    skin_id: string | null
  }

  export type FavouriteSkinMaxAggregateOutputType = {
    skin_id: string | null
  }

  export type FavouriteSkinCountAggregateOutputType = {
    skin_id: number
    _all: number
  }


  export type FavouriteSkinMinAggregateInputType = {
    skin_id?: true
  }

  export type FavouriteSkinMaxAggregateInputType = {
    skin_id?: true
  }

  export type FavouriteSkinCountAggregateInputType = {
    skin_id?: true
    _all?: true
  }

  export type FavouriteSkinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteSkin to aggregate.
     */
    where?: FavouriteSkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteSkins to fetch.
     */
    orderBy?: FavouriteSkinOrderByWithRelationInput | FavouriteSkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteSkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteSkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteSkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavouriteSkins
    **/
    _count?: true | FavouriteSkinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteSkinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteSkinMaxAggregateInputType
  }

  export type GetFavouriteSkinAggregateType<T extends FavouriteSkinAggregateArgs> = {
        [P in keyof T & keyof AggregateFavouriteSkin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavouriteSkin[P]>
      : GetScalarType<T[P], AggregateFavouriteSkin[P]>
  }




  export type FavouriteSkinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteSkinWhereInput
    orderBy?: FavouriteSkinOrderByWithAggregationInput | FavouriteSkinOrderByWithAggregationInput[]
    by: FavouriteSkinScalarFieldEnum[] | FavouriteSkinScalarFieldEnum
    having?: FavouriteSkinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteSkinCountAggregateInputType | true
    _min?: FavouriteSkinMinAggregateInputType
    _max?: FavouriteSkinMaxAggregateInputType
  }

  export type FavouriteSkinGroupByOutputType = {
    skin_id: string
    _count: FavouriteSkinCountAggregateOutputType | null
    _min: FavouriteSkinMinAggregateOutputType | null
    _max: FavouriteSkinMaxAggregateOutputType | null
  }

  type GetFavouriteSkinGroupByPayload<T extends FavouriteSkinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteSkinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteSkinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteSkinGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteSkinGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteSkinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skin_id?: boolean
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteSkin"]>

  export type FavouriteSkinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skin_id?: boolean
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteSkin"]>

  export type FavouriteSkinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skin_id?: boolean
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteSkin"]>

  export type FavouriteSkinSelectScalar = {
    skin_id?: boolean
  }

  export type FavouriteSkinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"skin_id", ExtArgs["result"]["favouriteSkin"]>
  export type FavouriteSkinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }
  export type FavouriteSkinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }
  export type FavouriteSkinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skin?: boolean | SkinDefaultArgs<ExtArgs>
  }

  export type $FavouriteSkinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavouriteSkin"
    objects: {
      skin: Prisma.$SkinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      skin_id: string
    }, ExtArgs["result"]["favouriteSkin"]>
    composites: {}
  }

  type FavouriteSkinGetPayload<S extends boolean | null | undefined | FavouriteSkinDefaultArgs> = $Result.GetResult<Prisma.$FavouriteSkinPayload, S>

  type FavouriteSkinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteSkinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteSkinCountAggregateInputType | true
    }

  export interface FavouriteSkinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavouriteSkin'], meta: { name: 'FavouriteSkin' } }
    /**
     * Find zero or one FavouriteSkin that matches the filter.
     * @param {FavouriteSkinFindUniqueArgs} args - Arguments to find a FavouriteSkin
     * @example
     * // Get one FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteSkinFindUniqueArgs>(args: SelectSubset<T, FavouriteSkinFindUniqueArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavouriteSkin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteSkinFindUniqueOrThrowArgs} args - Arguments to find a FavouriteSkin
     * @example
     * // Get one FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteSkinFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteSkinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteSkin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinFindFirstArgs} args - Arguments to find a FavouriteSkin
     * @example
     * // Get one FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteSkinFindFirstArgs>(args?: SelectSubset<T, FavouriteSkinFindFirstArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteSkin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinFindFirstOrThrowArgs} args - Arguments to find a FavouriteSkin
     * @example
     * // Get one FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteSkinFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteSkinFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavouriteSkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavouriteSkins
     * const favouriteSkins = await prisma.favouriteSkin.findMany()
     * 
     * // Get first 10 FavouriteSkins
     * const favouriteSkins = await prisma.favouriteSkin.findMany({ take: 10 })
     * 
     * // Only select the `skin_id`
     * const favouriteSkinWithSkin_idOnly = await prisma.favouriteSkin.findMany({ select: { skin_id: true } })
     * 
     */
    findMany<T extends FavouriteSkinFindManyArgs>(args?: SelectSubset<T, FavouriteSkinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavouriteSkin.
     * @param {FavouriteSkinCreateArgs} args - Arguments to create a FavouriteSkin.
     * @example
     * // Create one FavouriteSkin
     * const FavouriteSkin = await prisma.favouriteSkin.create({
     *   data: {
     *     // ... data to create a FavouriteSkin
     *   }
     * })
     * 
     */
    create<T extends FavouriteSkinCreateArgs>(args: SelectSubset<T, FavouriteSkinCreateArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavouriteSkins.
     * @param {FavouriteSkinCreateManyArgs} args - Arguments to create many FavouriteSkins.
     * @example
     * // Create many FavouriteSkins
     * const favouriteSkin = await prisma.favouriteSkin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteSkinCreateManyArgs>(args?: SelectSubset<T, FavouriteSkinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavouriteSkins and returns the data saved in the database.
     * @param {FavouriteSkinCreateManyAndReturnArgs} args - Arguments to create many FavouriteSkins.
     * @example
     * // Create many FavouriteSkins
     * const favouriteSkin = await prisma.favouriteSkin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavouriteSkins and only return the `skin_id`
     * const favouriteSkinWithSkin_idOnly = await prisma.favouriteSkin.createManyAndReturn({
     *   select: { skin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouriteSkinCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouriteSkinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavouriteSkin.
     * @param {FavouriteSkinDeleteArgs} args - Arguments to delete one FavouriteSkin.
     * @example
     * // Delete one FavouriteSkin
     * const FavouriteSkin = await prisma.favouriteSkin.delete({
     *   where: {
     *     // ... filter to delete one FavouriteSkin
     *   }
     * })
     * 
     */
    delete<T extends FavouriteSkinDeleteArgs>(args: SelectSubset<T, FavouriteSkinDeleteArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavouriteSkin.
     * @param {FavouriteSkinUpdateArgs} args - Arguments to update one FavouriteSkin.
     * @example
     * // Update one FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteSkinUpdateArgs>(args: SelectSubset<T, FavouriteSkinUpdateArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavouriteSkins.
     * @param {FavouriteSkinDeleteManyArgs} args - Arguments to filter FavouriteSkins to delete.
     * @example
     * // Delete a few FavouriteSkins
     * const { count } = await prisma.favouriteSkin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteSkinDeleteManyArgs>(args?: SelectSubset<T, FavouriteSkinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavouriteSkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavouriteSkins
     * const favouriteSkin = await prisma.favouriteSkin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteSkinUpdateManyArgs>(args: SelectSubset<T, FavouriteSkinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavouriteSkins and returns the data updated in the database.
     * @param {FavouriteSkinUpdateManyAndReturnArgs} args - Arguments to update many FavouriteSkins.
     * @example
     * // Update many FavouriteSkins
     * const favouriteSkin = await prisma.favouriteSkin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavouriteSkins and only return the `skin_id`
     * const favouriteSkinWithSkin_idOnly = await prisma.favouriteSkin.updateManyAndReturn({
     *   select: { skin_id: true },
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
    updateManyAndReturn<T extends FavouriteSkinUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouriteSkinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavouriteSkin.
     * @param {FavouriteSkinUpsertArgs} args - Arguments to update or create a FavouriteSkin.
     * @example
     * // Update or create a FavouriteSkin
     * const favouriteSkin = await prisma.favouriteSkin.upsert({
     *   create: {
     *     // ... data to create a FavouriteSkin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavouriteSkin we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteSkinUpsertArgs>(args: SelectSubset<T, FavouriteSkinUpsertArgs<ExtArgs>>): Prisma__FavouriteSkinClient<$Result.GetResult<Prisma.$FavouriteSkinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavouriteSkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinCountArgs} args - Arguments to filter FavouriteSkins to count.
     * @example
     * // Count the number of FavouriteSkins
     * const count = await prisma.favouriteSkin.count({
     *   where: {
     *     // ... the filter for the FavouriteSkins we want to count
     *   }
     * })
    **/
    count<T extends FavouriteSkinCountArgs>(
      args?: Subset<T, FavouriteSkinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteSkinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavouriteSkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouriteSkinAggregateArgs>(args: Subset<T, FavouriteSkinAggregateArgs>): Prisma.PrismaPromise<GetFavouriteSkinAggregateType<T>>

    /**
     * Group by FavouriteSkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteSkinGroupByArgs} args - Group by arguments.
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
      T extends FavouriteSkinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteSkinGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteSkinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavouriteSkinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteSkinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavouriteSkin model
   */
  readonly fields: FavouriteSkinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavouriteSkin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteSkinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skin<T extends SkinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkinDefaultArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavouriteSkin model
   */ 
  interface FavouriteSkinFieldRefs {
    readonly skin_id: FieldRef<"FavouriteSkin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavouriteSkin findUnique
   */
  export type FavouriteSkinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteSkin to fetch.
     */
    where: FavouriteSkinWhereUniqueInput
  }

  /**
   * FavouriteSkin findUniqueOrThrow
   */
  export type FavouriteSkinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteSkin to fetch.
     */
    where: FavouriteSkinWhereUniqueInput
  }

  /**
   * FavouriteSkin findFirst
   */
  export type FavouriteSkinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteSkin to fetch.
     */
    where?: FavouriteSkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteSkins to fetch.
     */
    orderBy?: FavouriteSkinOrderByWithRelationInput | FavouriteSkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteSkins.
     */
    cursor?: FavouriteSkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteSkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteSkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteSkins.
     */
    distinct?: FavouriteSkinScalarFieldEnum | FavouriteSkinScalarFieldEnum[]
  }

  /**
   * FavouriteSkin findFirstOrThrow
   */
  export type FavouriteSkinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteSkin to fetch.
     */
    where?: FavouriteSkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteSkins to fetch.
     */
    orderBy?: FavouriteSkinOrderByWithRelationInput | FavouriteSkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteSkins.
     */
    cursor?: FavouriteSkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteSkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteSkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteSkins.
     */
    distinct?: FavouriteSkinScalarFieldEnum | FavouriteSkinScalarFieldEnum[]
  }

  /**
   * FavouriteSkin findMany
   */
  export type FavouriteSkinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteSkins to fetch.
     */
    where?: FavouriteSkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteSkins to fetch.
     */
    orderBy?: FavouriteSkinOrderByWithRelationInput | FavouriteSkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavouriteSkins.
     */
    cursor?: FavouriteSkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteSkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteSkins.
     */
    skip?: number
    distinct?: FavouriteSkinScalarFieldEnum | FavouriteSkinScalarFieldEnum[]
  }

  /**
   * FavouriteSkin create
   */
  export type FavouriteSkinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * The data needed to create a FavouriteSkin.
     */
    data: XOR<FavouriteSkinCreateInput, FavouriteSkinUncheckedCreateInput>
  }

  /**
   * FavouriteSkin createMany
   */
  export type FavouriteSkinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavouriteSkins.
     */
    data: FavouriteSkinCreateManyInput | FavouriteSkinCreateManyInput[]
  }

  /**
   * FavouriteSkin createManyAndReturn
   */
  export type FavouriteSkinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * The data used to create many FavouriteSkins.
     */
    data: FavouriteSkinCreateManyInput | FavouriteSkinCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavouriteSkin update
   */
  export type FavouriteSkinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * The data needed to update a FavouriteSkin.
     */
    data: XOR<FavouriteSkinUpdateInput, FavouriteSkinUncheckedUpdateInput>
    /**
     * Choose, which FavouriteSkin to update.
     */
    where: FavouriteSkinWhereUniqueInput
  }

  /**
   * FavouriteSkin updateMany
   */
  export type FavouriteSkinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavouriteSkins.
     */
    data: XOR<FavouriteSkinUpdateManyMutationInput, FavouriteSkinUncheckedUpdateManyInput>
    /**
     * Filter which FavouriteSkins to update
     */
    where?: FavouriteSkinWhereInput
    /**
     * Limit how many FavouriteSkins to update.
     */
    limit?: number
  }

  /**
   * FavouriteSkin updateManyAndReturn
   */
  export type FavouriteSkinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * The data used to update FavouriteSkins.
     */
    data: XOR<FavouriteSkinUpdateManyMutationInput, FavouriteSkinUncheckedUpdateManyInput>
    /**
     * Filter which FavouriteSkins to update
     */
    where?: FavouriteSkinWhereInput
    /**
     * Limit how many FavouriteSkins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavouriteSkin upsert
   */
  export type FavouriteSkinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * The filter to search for the FavouriteSkin to update in case it exists.
     */
    where: FavouriteSkinWhereUniqueInput
    /**
     * In case the FavouriteSkin found by the `where` argument doesn't exist, create a new FavouriteSkin with this data.
     */
    create: XOR<FavouriteSkinCreateInput, FavouriteSkinUncheckedCreateInput>
    /**
     * In case the FavouriteSkin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteSkinUpdateInput, FavouriteSkinUncheckedUpdateInput>
  }

  /**
   * FavouriteSkin delete
   */
  export type FavouriteSkinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
    /**
     * Filter which FavouriteSkin to delete.
     */
    where: FavouriteSkinWhereUniqueInput
  }

  /**
   * FavouriteSkin deleteMany
   */
  export type FavouriteSkinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteSkins to delete
     */
    where?: FavouriteSkinWhereInput
    /**
     * Limit how many FavouriteSkins to delete.
     */
    limit?: number
  }

  /**
   * FavouriteSkin without action
   */
  export type FavouriteSkinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteSkin
     */
    select?: FavouriteSkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteSkin
     */
    omit?: FavouriteSkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteSkinInclude<ExtArgs> | null
  }


  /**
   * Model GameSettings
   */

  export type AggregateGameSettings = {
    _count: GameSettingsCountAggregateOutputType | null
    _min: GameSettingsMinAggregateOutputType | null
    _max: GameSettingsMaxAggregateOutputType | null
  }

  export type GameSettingsMinAggregateOutputType = {
    settings_Id: string | null
    game_path: string | null
    patchVersion: string | null
  }

  export type GameSettingsMaxAggregateOutputType = {
    settings_Id: string | null
    game_path: string | null
    patchVersion: string | null
  }

  export type GameSettingsCountAggregateOutputType = {
    settings_Id: number
    game_path: number
    patchVersion: number
    _all: number
  }


  export type GameSettingsMinAggregateInputType = {
    settings_Id?: true
    game_path?: true
    patchVersion?: true
  }

  export type GameSettingsMaxAggregateInputType = {
    settings_Id?: true
    game_path?: true
    patchVersion?: true
  }

  export type GameSettingsCountAggregateInputType = {
    settings_Id?: true
    game_path?: true
    patchVersion?: true
    _all?: true
  }

  export type GameSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSettings to aggregate.
     */
    where?: GameSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingsOrderByWithRelationInput | GameSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSettings
    **/
    _count?: true | GameSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSettingsMaxAggregateInputType
  }

  export type GetGameSettingsAggregateType<T extends GameSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSettings[P]>
      : GetScalarType<T[P], AggregateGameSettings[P]>
  }




  export type GameSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSettingsWhereInput
    orderBy?: GameSettingsOrderByWithAggregationInput | GameSettingsOrderByWithAggregationInput[]
    by: GameSettingsScalarFieldEnum[] | GameSettingsScalarFieldEnum
    having?: GameSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSettingsCountAggregateInputType | true
    _min?: GameSettingsMinAggregateInputType
    _max?: GameSettingsMaxAggregateInputType
  }

  export type GameSettingsGroupByOutputType = {
    settings_Id: string
    game_path: string
    patchVersion: string | null
    _count: GameSettingsCountAggregateOutputType | null
    _min: GameSettingsMinAggregateOutputType | null
    _max: GameSettingsMaxAggregateOutputType | null
  }

  type GetGameSettingsGroupByPayload<T extends GameSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], GameSettingsGroupByOutputType[P]>
        }
      >
    >


  export type GameSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_Id?: boolean
    game_path?: boolean
    patchVersion?: boolean
  }, ExtArgs["result"]["gameSettings"]>

  export type GameSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_Id?: boolean
    game_path?: boolean
    patchVersion?: boolean
  }, ExtArgs["result"]["gameSettings"]>

  export type GameSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_Id?: boolean
    game_path?: boolean
    patchVersion?: boolean
  }, ExtArgs["result"]["gameSettings"]>

  export type GameSettingsSelectScalar = {
    settings_Id?: boolean
    game_path?: boolean
    patchVersion?: boolean
  }

  export type GameSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"settings_Id" | "game_path" | "patchVersion", ExtArgs["result"]["gameSettings"]>

  export type $GameSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      settings_Id: string
      game_path: string
      patchVersion: string | null
    }, ExtArgs["result"]["gameSettings"]>
    composites: {}
  }

  type GameSettingsGetPayload<S extends boolean | null | undefined | GameSettingsDefaultArgs> = $Result.GetResult<Prisma.$GameSettingsPayload, S>

  type GameSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSettingsCountAggregateInputType | true
    }

  export interface GameSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSettings'], meta: { name: 'GameSettings' } }
    /**
     * Find zero or one GameSettings that matches the filter.
     * @param {GameSettingsFindUniqueArgs} args - Arguments to find a GameSettings
     * @example
     * // Get one GameSettings
     * const gameSettings = await prisma.gameSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSettingsFindUniqueArgs>(args: SelectSubset<T, GameSettingsFindUniqueArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSettingsFindUniqueOrThrowArgs} args - Arguments to find a GameSettings
     * @example
     * // Get one GameSettings
     * const gameSettings = await prisma.gameSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsFindFirstArgs} args - Arguments to find a GameSettings
     * @example
     * // Get one GameSettings
     * const gameSettings = await prisma.gameSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSettingsFindFirstArgs>(args?: SelectSubset<T, GameSettingsFindFirstArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsFindFirstOrThrowArgs} args - Arguments to find a GameSettings
     * @example
     * // Get one GameSettings
     * const gameSettings = await prisma.gameSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSettings
     * const gameSettings = await prisma.gameSettings.findMany()
     * 
     * // Get first 10 GameSettings
     * const gameSettings = await prisma.gameSettings.findMany({ take: 10 })
     * 
     * // Only select the `settings_Id`
     * const gameSettingsWithSettings_IdOnly = await prisma.gameSettings.findMany({ select: { settings_Id: true } })
     * 
     */
    findMany<T extends GameSettingsFindManyArgs>(args?: SelectSubset<T, GameSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSettings.
     * @param {GameSettingsCreateArgs} args - Arguments to create a GameSettings.
     * @example
     * // Create one GameSettings
     * const GameSettings = await prisma.gameSettings.create({
     *   data: {
     *     // ... data to create a GameSettings
     *   }
     * })
     * 
     */
    create<T extends GameSettingsCreateArgs>(args: SelectSubset<T, GameSettingsCreateArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSettings.
     * @param {GameSettingsCreateManyArgs} args - Arguments to create many GameSettings.
     * @example
     * // Create many GameSettings
     * const gameSettings = await prisma.gameSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSettingsCreateManyArgs>(args?: SelectSubset<T, GameSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSettings and returns the data saved in the database.
     * @param {GameSettingsCreateManyAndReturnArgs} args - Arguments to create many GameSettings.
     * @example
     * // Create many GameSettings
     * const gameSettings = await prisma.gameSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSettings and only return the `settings_Id`
     * const gameSettingsWithSettings_IdOnly = await prisma.gameSettings.createManyAndReturn({
     *   select: { settings_Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSettings.
     * @param {GameSettingsDeleteArgs} args - Arguments to delete one GameSettings.
     * @example
     * // Delete one GameSettings
     * const GameSettings = await prisma.gameSettings.delete({
     *   where: {
     *     // ... filter to delete one GameSettings
     *   }
     * })
     * 
     */
    delete<T extends GameSettingsDeleteArgs>(args: SelectSubset<T, GameSettingsDeleteArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSettings.
     * @param {GameSettingsUpdateArgs} args - Arguments to update one GameSettings.
     * @example
     * // Update one GameSettings
     * const gameSettings = await prisma.gameSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSettingsUpdateArgs>(args: SelectSubset<T, GameSettingsUpdateArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSettings.
     * @param {GameSettingsDeleteManyArgs} args - Arguments to filter GameSettings to delete.
     * @example
     * // Delete a few GameSettings
     * const { count } = await prisma.gameSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSettingsDeleteManyArgs>(args?: SelectSubset<T, GameSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSettings
     * const gameSettings = await prisma.gameSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSettingsUpdateManyArgs>(args: SelectSubset<T, GameSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSettings and returns the data updated in the database.
     * @param {GameSettingsUpdateManyAndReturnArgs} args - Arguments to update many GameSettings.
     * @example
     * // Update many GameSettings
     * const gameSettings = await prisma.gameSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSettings and only return the `settings_Id`
     * const gameSettingsWithSettings_IdOnly = await prisma.gameSettings.updateManyAndReturn({
     *   select: { settings_Id: true },
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
    updateManyAndReturn<T extends GameSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSettings.
     * @param {GameSettingsUpsertArgs} args - Arguments to update or create a GameSettings.
     * @example
     * // Update or create a GameSettings
     * const gameSettings = await prisma.gameSettings.upsert({
     *   create: {
     *     // ... data to create a GameSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSettings we want to update
     *   }
     * })
     */
    upsert<T extends GameSettingsUpsertArgs>(args: SelectSubset<T, GameSettingsUpsertArgs<ExtArgs>>): Prisma__GameSettingsClient<$Result.GetResult<Prisma.$GameSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsCountArgs} args - Arguments to filter GameSettings to count.
     * @example
     * // Count the number of GameSettings
     * const count = await prisma.gameSettings.count({
     *   where: {
     *     // ... the filter for the GameSettings we want to count
     *   }
     * })
    **/
    count<T extends GameSettingsCountArgs>(
      args?: Subset<T, GameSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSettingsAggregateArgs>(args: Subset<T, GameSettingsAggregateArgs>): Prisma.PrismaPromise<GetGameSettingsAggregateType<T>>

    /**
     * Group by GameSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSettingsGroupByArgs} args - Group by arguments.
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
      T extends GameSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSettingsGroupByArgs['orderBy'] }
        : { orderBy?: GameSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSettings model
   */
  readonly fields: GameSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GameSettings model
   */ 
  interface GameSettingsFieldRefs {
    readonly settings_Id: FieldRef<"GameSettings", 'String'>
    readonly game_path: FieldRef<"GameSettings", 'String'>
    readonly patchVersion: FieldRef<"GameSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameSettings findUnique
   */
  export type GameSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where: GameSettingsWhereUniqueInput
  }

  /**
   * GameSettings findUniqueOrThrow
   */
  export type GameSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where: GameSettingsWhereUniqueInput
  }

  /**
   * GameSettings findFirst
   */
  export type GameSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where?: GameSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingsOrderByWithRelationInput | GameSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSettings.
     */
    cursor?: GameSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSettings.
     */
    distinct?: GameSettingsScalarFieldEnum | GameSettingsScalarFieldEnum[]
  }

  /**
   * GameSettings findFirstOrThrow
   */
  export type GameSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where?: GameSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingsOrderByWithRelationInput | GameSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSettings.
     */
    cursor?: GameSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSettings.
     */
    distinct?: GameSettingsScalarFieldEnum | GameSettingsScalarFieldEnum[]
  }

  /**
   * GameSettings findMany
   */
  export type GameSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GameSettings to fetch.
     */
    where?: GameSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSettings to fetch.
     */
    orderBy?: GameSettingsOrderByWithRelationInput | GameSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSettings.
     */
    cursor?: GameSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSettings.
     */
    skip?: number
    distinct?: GameSettingsScalarFieldEnum | GameSettingsScalarFieldEnum[]
  }

  /**
   * GameSettings create
   */
  export type GameSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a GameSettings.
     */
    data: XOR<GameSettingsCreateInput, GameSettingsUncheckedCreateInput>
  }

  /**
   * GameSettings createMany
   */
  export type GameSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSettings.
     */
    data: GameSettingsCreateManyInput | GameSettingsCreateManyInput[]
  }

  /**
   * GameSettings createManyAndReturn
   */
  export type GameSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many GameSettings.
     */
    data: GameSettingsCreateManyInput | GameSettingsCreateManyInput[]
  }

  /**
   * GameSettings update
   */
  export type GameSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a GameSettings.
     */
    data: XOR<GameSettingsUpdateInput, GameSettingsUncheckedUpdateInput>
    /**
     * Choose, which GameSettings to update.
     */
    where: GameSettingsWhereUniqueInput
  }

  /**
   * GameSettings updateMany
   */
  export type GameSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSettings.
     */
    data: XOR<GameSettingsUpdateManyMutationInput, GameSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GameSettings to update
     */
    where?: GameSettingsWhereInput
    /**
     * Limit how many GameSettings to update.
     */
    limit?: number
  }

  /**
   * GameSettings updateManyAndReturn
   */
  export type GameSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * The data used to update GameSettings.
     */
    data: XOR<GameSettingsUpdateManyMutationInput, GameSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GameSettings to update
     */
    where?: GameSettingsWhereInput
    /**
     * Limit how many GameSettings to update.
     */
    limit?: number
  }

  /**
   * GameSettings upsert
   */
  export type GameSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the GameSettings to update in case it exists.
     */
    where: GameSettingsWhereUniqueInput
    /**
     * In case the GameSettings found by the `where` argument doesn't exist, create a new GameSettings with this data.
     */
    create: XOR<GameSettingsCreateInput, GameSettingsUncheckedCreateInput>
    /**
     * In case the GameSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSettingsUpdateInput, GameSettingsUncheckedUpdateInput>
  }

  /**
   * GameSettings delete
   */
  export type GameSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
    /**
     * Filter which GameSettings to delete.
     */
    where: GameSettingsWhereUniqueInput
  }

  /**
   * GameSettings deleteMany
   */
  export type GameSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSettings to delete
     */
    where?: GameSettingsWhereInput
    /**
     * Limit how many GameSettings to delete.
     */
    limit?: number
  }

  /**
   * GameSettings without action
   */
  export type GameSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSettings
     */
    select?: GameSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSettings
     */
    omit?: GameSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChampionScalarFieldEnum: {
    id: 'id',
    champ_code: 'champ_code',
    champ_name: 'champ_name',
    image_url: 'image_url'
  };

  export type ChampionScalarFieldEnum = (typeof ChampionScalarFieldEnum)[keyof typeof ChampionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Champion_RoleScalarFieldEnum: {
    champId: 'champId',
    roleId: 'roleId'
  };

  export type Champion_RoleScalarFieldEnum = (typeof Champion_RoleScalarFieldEnum)[keyof typeof Champion_RoleScalarFieldEnum]


  export const SkinScalarFieldEnum: {
    id: 'id',
    skin_name: 'skin_name',
    champ_id: 'champ_id',
    skin_number: 'skin_number',
    local_skin_path: 'local_skin_path'
  };

  export type SkinScalarFieldEnum = (typeof SkinScalarFieldEnum)[keyof typeof SkinScalarFieldEnum]


  export const FavouriteSkinScalarFieldEnum: {
    skin_id: 'skin_id'
  };

  export type FavouriteSkinScalarFieldEnum = (typeof FavouriteSkinScalarFieldEnum)[keyof typeof FavouriteSkinScalarFieldEnum]


  export const GameSettingsScalarFieldEnum: {
    settings_Id: 'settings_Id',
    game_path: 'game_path',
    patchVersion: 'patchVersion'
  };

  export type GameSettingsScalarFieldEnum = (typeof GameSettingsScalarFieldEnum)[keyof typeof GameSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ChampionWhereInput = {
    AND?: ChampionWhereInput | ChampionWhereInput[]
    OR?: ChampionWhereInput[]
    NOT?: ChampionWhereInput | ChampionWhereInput[]
    id?: IntFilter<"Champion"> | number
    champ_code?: StringFilter<"Champion"> | string
    champ_name?: StringFilter<"Champion"> | string
    image_url?: StringFilter<"Champion"> | string
    skins?: SkinListRelationFilter
    roles?: Champion_RoleListRelationFilter
  }

  export type ChampionOrderByWithRelationInput = {
    id?: SortOrder
    champ_code?: SortOrder
    champ_name?: SortOrder
    image_url?: SortOrder
    skins?: SkinOrderByRelationAggregateInput
    roles?: Champion_RoleOrderByRelationAggregateInput
  }

  export type ChampionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChampionWhereInput | ChampionWhereInput[]
    OR?: ChampionWhereInput[]
    NOT?: ChampionWhereInput | ChampionWhereInput[]
    champ_code?: StringFilter<"Champion"> | string
    champ_name?: StringFilter<"Champion"> | string
    image_url?: StringFilter<"Champion"> | string
    skins?: SkinListRelationFilter
    roles?: Champion_RoleListRelationFilter
  }, "id" | "id">

  export type ChampionOrderByWithAggregationInput = {
    id?: SortOrder
    champ_code?: SortOrder
    champ_name?: SortOrder
    image_url?: SortOrder
    _count?: ChampionCountOrderByAggregateInput
    _avg?: ChampionAvgOrderByAggregateInput
    _max?: ChampionMaxOrderByAggregateInput
    _min?: ChampionMinOrderByAggregateInput
    _sum?: ChampionSumOrderByAggregateInput
  }

  export type ChampionScalarWhereWithAggregatesInput = {
    AND?: ChampionScalarWhereWithAggregatesInput | ChampionScalarWhereWithAggregatesInput[]
    OR?: ChampionScalarWhereWithAggregatesInput[]
    NOT?: ChampionScalarWhereWithAggregatesInput | ChampionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Champion"> | number
    champ_code?: StringWithAggregatesFilter<"Champion"> | string
    champ_name?: StringWithAggregatesFilter<"Champion"> | string
    image_url?: StringWithAggregatesFilter<"Champion"> | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role_id?: IntFilter<"Role"> | number
    role_name?: StringFilter<"Role"> | string
    champions?: Champion_RoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    champions?: Champion_RoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role_name?: StringFilter<"Role"> | string
    champions?: Champion_RoleListRelationFilter
  }, "role_id" | "role_id">

  export type RoleOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"Role"> | number
    role_name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type Champion_RoleWhereInput = {
    AND?: Champion_RoleWhereInput | Champion_RoleWhereInput[]
    OR?: Champion_RoleWhereInput[]
    NOT?: Champion_RoleWhereInput | Champion_RoleWhereInput[]
    champId?: IntFilter<"Champion_Role"> | number
    roleId?: IntFilter<"Champion_Role"> | number
    champion?: XOR<ChampionScalarRelationFilter, ChampionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type Champion_RoleOrderByWithRelationInput = {
    champId?: SortOrder
    roleId?: SortOrder
    champion?: ChampionOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type Champion_RoleWhereUniqueInput = Prisma.AtLeast<{
    champId_roleId?: Champion_RoleChampIdRoleIdCompoundUniqueInput
    AND?: Champion_RoleWhereInput | Champion_RoleWhereInput[]
    OR?: Champion_RoleWhereInput[]
    NOT?: Champion_RoleWhereInput | Champion_RoleWhereInput[]
    champId?: IntFilter<"Champion_Role"> | number
    roleId?: IntFilter<"Champion_Role"> | number
    champion?: XOR<ChampionScalarRelationFilter, ChampionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "champId_roleId">

  export type Champion_RoleOrderByWithAggregationInput = {
    champId?: SortOrder
    roleId?: SortOrder
    _count?: Champion_RoleCountOrderByAggregateInput
    _avg?: Champion_RoleAvgOrderByAggregateInput
    _max?: Champion_RoleMaxOrderByAggregateInput
    _min?: Champion_RoleMinOrderByAggregateInput
    _sum?: Champion_RoleSumOrderByAggregateInput
  }

  export type Champion_RoleScalarWhereWithAggregatesInput = {
    AND?: Champion_RoleScalarWhereWithAggregatesInput | Champion_RoleScalarWhereWithAggregatesInput[]
    OR?: Champion_RoleScalarWhereWithAggregatesInput[]
    NOT?: Champion_RoleScalarWhereWithAggregatesInput | Champion_RoleScalarWhereWithAggregatesInput[]
    champId?: IntWithAggregatesFilter<"Champion_Role"> | number
    roleId?: IntWithAggregatesFilter<"Champion_Role"> | number
  }

  export type SkinWhereInput = {
    AND?: SkinWhereInput | SkinWhereInput[]
    OR?: SkinWhereInput[]
    NOT?: SkinWhereInput | SkinWhereInput[]
    id?: StringFilter<"Skin"> | string
    skin_name?: StringFilter<"Skin"> | string
    champ_id?: IntFilter<"Skin"> | number
    skin_number?: IntFilter<"Skin"> | number
    local_skin_path?: StringNullableFilter<"Skin"> | string | null
    champion?: XOR<ChampionScalarRelationFilter, ChampionWhereInput>
    FavouriteSkin?: XOR<FavouriteSkinNullableScalarRelationFilter, FavouriteSkinWhereInput> | null
  }

  export type SkinOrderByWithRelationInput = {
    id?: SortOrder
    skin_name?: SortOrder
    champ_id?: SortOrder
    skin_number?: SortOrder
    local_skin_path?: SortOrderInput | SortOrder
    champion?: ChampionOrderByWithRelationInput
    FavouriteSkin?: FavouriteSkinOrderByWithRelationInput
  }

  export type SkinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkinWhereInput | SkinWhereInput[]
    OR?: SkinWhereInput[]
    NOT?: SkinWhereInput | SkinWhereInput[]
    skin_name?: StringFilter<"Skin"> | string
    champ_id?: IntFilter<"Skin"> | number
    skin_number?: IntFilter<"Skin"> | number
    local_skin_path?: StringNullableFilter<"Skin"> | string | null
    champion?: XOR<ChampionScalarRelationFilter, ChampionWhereInput>
    FavouriteSkin?: XOR<FavouriteSkinNullableScalarRelationFilter, FavouriteSkinWhereInput> | null
  }, "id" | "id">

  export type SkinOrderByWithAggregationInput = {
    id?: SortOrder
    skin_name?: SortOrder
    champ_id?: SortOrder
    skin_number?: SortOrder
    local_skin_path?: SortOrderInput | SortOrder
    _count?: SkinCountOrderByAggregateInput
    _avg?: SkinAvgOrderByAggregateInput
    _max?: SkinMaxOrderByAggregateInput
    _min?: SkinMinOrderByAggregateInput
    _sum?: SkinSumOrderByAggregateInput
  }

  export type SkinScalarWhereWithAggregatesInput = {
    AND?: SkinScalarWhereWithAggregatesInput | SkinScalarWhereWithAggregatesInput[]
    OR?: SkinScalarWhereWithAggregatesInput[]
    NOT?: SkinScalarWhereWithAggregatesInput | SkinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skin"> | string
    skin_name?: StringWithAggregatesFilter<"Skin"> | string
    champ_id?: IntWithAggregatesFilter<"Skin"> | number
    skin_number?: IntWithAggregatesFilter<"Skin"> | number
    local_skin_path?: StringNullableWithAggregatesFilter<"Skin"> | string | null
  }

  export type FavouriteSkinWhereInput = {
    AND?: FavouriteSkinWhereInput | FavouriteSkinWhereInput[]
    OR?: FavouriteSkinWhereInput[]
    NOT?: FavouriteSkinWhereInput | FavouriteSkinWhereInput[]
    skin_id?: StringFilter<"FavouriteSkin"> | string
    skin?: XOR<SkinScalarRelationFilter, SkinWhereInput>
  }

  export type FavouriteSkinOrderByWithRelationInput = {
    skin_id?: SortOrder
    skin?: SkinOrderByWithRelationInput
  }

  export type FavouriteSkinWhereUniqueInput = Prisma.AtLeast<{
    skin_id?: string
    AND?: FavouriteSkinWhereInput | FavouriteSkinWhereInput[]
    OR?: FavouriteSkinWhereInput[]
    NOT?: FavouriteSkinWhereInput | FavouriteSkinWhereInput[]
    skin?: XOR<SkinScalarRelationFilter, SkinWhereInput>
  }, "skin_id" | "skin_id">

  export type FavouriteSkinOrderByWithAggregationInput = {
    skin_id?: SortOrder
    _count?: FavouriteSkinCountOrderByAggregateInput
    _max?: FavouriteSkinMaxOrderByAggregateInput
    _min?: FavouriteSkinMinOrderByAggregateInput
  }

  export type FavouriteSkinScalarWhereWithAggregatesInput = {
    AND?: FavouriteSkinScalarWhereWithAggregatesInput | FavouriteSkinScalarWhereWithAggregatesInput[]
    OR?: FavouriteSkinScalarWhereWithAggregatesInput[]
    NOT?: FavouriteSkinScalarWhereWithAggregatesInput | FavouriteSkinScalarWhereWithAggregatesInput[]
    skin_id?: StringWithAggregatesFilter<"FavouriteSkin"> | string
  }

  export type GameSettingsWhereInput = {
    AND?: GameSettingsWhereInput | GameSettingsWhereInput[]
    OR?: GameSettingsWhereInput[]
    NOT?: GameSettingsWhereInput | GameSettingsWhereInput[]
    settings_Id?: StringFilter<"GameSettings"> | string
    game_path?: StringFilter<"GameSettings"> | string
    patchVersion?: StringNullableFilter<"GameSettings"> | string | null
  }

  export type GameSettingsOrderByWithRelationInput = {
    settings_Id?: SortOrder
    game_path?: SortOrder
    patchVersion?: SortOrderInput | SortOrder
  }

  export type GameSettingsWhereUniqueInput = Prisma.AtLeast<{
    settings_Id?: string
    game_path?: string
    patchVersion?: string
    AND?: GameSettingsWhereInput | GameSettingsWhereInput[]
    OR?: GameSettingsWhereInput[]
    NOT?: GameSettingsWhereInput | GameSettingsWhereInput[]
  }, "settings_Id" | "settings_Id" | "game_path" | "patchVersion">

  export type GameSettingsOrderByWithAggregationInput = {
    settings_Id?: SortOrder
    game_path?: SortOrder
    patchVersion?: SortOrderInput | SortOrder
    _count?: GameSettingsCountOrderByAggregateInput
    _max?: GameSettingsMaxOrderByAggregateInput
    _min?: GameSettingsMinOrderByAggregateInput
  }

  export type GameSettingsScalarWhereWithAggregatesInput = {
    AND?: GameSettingsScalarWhereWithAggregatesInput | GameSettingsScalarWhereWithAggregatesInput[]
    OR?: GameSettingsScalarWhereWithAggregatesInput[]
    NOT?: GameSettingsScalarWhereWithAggregatesInput | GameSettingsScalarWhereWithAggregatesInput[]
    settings_Id?: StringWithAggregatesFilter<"GameSettings"> | string
    game_path?: StringWithAggregatesFilter<"GameSettings"> | string
    patchVersion?: StringNullableWithAggregatesFilter<"GameSettings"> | string | null
  }

  export type ChampionCreateInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    skins?: SkinCreateNestedManyWithoutChampionInput
    roles?: Champion_RoleCreateNestedManyWithoutChampionInput
  }

  export type ChampionUncheckedCreateInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    skins?: SkinUncheckedCreateNestedManyWithoutChampionInput
    roles?: Champion_RoleUncheckedCreateNestedManyWithoutChampionInput
  }

  export type ChampionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    skins?: SkinUpdateManyWithoutChampionNestedInput
    roles?: Champion_RoleUpdateManyWithoutChampionNestedInput
  }

  export type ChampionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    skins?: SkinUncheckedUpdateManyWithoutChampionNestedInput
    roles?: Champion_RoleUncheckedUpdateManyWithoutChampionNestedInput
  }

  export type ChampionCreateManyInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
  }

  export type ChampionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ChampionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    role_id: number
    role_name: string
    champions?: Champion_RoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    role_id: number
    role_name: string
    champions?: Champion_RoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    champions?: Champion_RoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    champions?: Champion_RoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    role_id: number
    role_name: string
  }

  export type RoleUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type Champion_RoleCreateInput = {
    champion: ChampionCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutChampionsInput
  }

  export type Champion_RoleUncheckedCreateInput = {
    champId: number
    roleId: number
  }

  export type Champion_RoleUpdateInput = {
    champion?: ChampionUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutChampionsNestedInput
  }

  export type Champion_RoleUncheckedUpdateInput = {
    champId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type Champion_RoleCreateManyInput = {
    champId: number
    roleId: number
  }

  export type Champion_RoleUpdateManyMutationInput = {

  }

  export type Champion_RoleUncheckedUpdateManyInput = {
    champId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SkinCreateInput = {
    id: string
    skin_name: string
    skin_number: number
    local_skin_path?: string | null
    champion: ChampionCreateNestedOneWithoutSkinsInput
    FavouriteSkin?: FavouriteSkinCreateNestedOneWithoutSkinInput
  }

  export type SkinUncheckedCreateInput = {
    id: string
    skin_name: string
    champ_id: number
    skin_number: number
    local_skin_path?: string | null
    FavouriteSkin?: FavouriteSkinUncheckedCreateNestedOneWithoutSkinInput
  }

  export type SkinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
    champion?: ChampionUpdateOneRequiredWithoutSkinsNestedInput
    FavouriteSkin?: FavouriteSkinUpdateOneWithoutSkinNestedInput
  }

  export type SkinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    champ_id?: IntFieldUpdateOperationsInput | number
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
    FavouriteSkin?: FavouriteSkinUncheckedUpdateOneWithoutSkinNestedInput
  }

  export type SkinCreateManyInput = {
    id: string
    skin_name: string
    champ_id: number
    skin_number: number
    local_skin_path?: string | null
  }

  export type SkinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    champ_id?: IntFieldUpdateOperationsInput | number
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavouriteSkinCreateInput = {
    skin: SkinCreateNestedOneWithoutFavouriteSkinInput
  }

  export type FavouriteSkinUncheckedCreateInput = {
    skin_id: string
  }

  export type FavouriteSkinUpdateInput = {
    skin?: SkinUpdateOneRequiredWithoutFavouriteSkinNestedInput
  }

  export type FavouriteSkinUncheckedUpdateInput = {
    skin_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteSkinCreateManyInput = {
    skin_id: string
  }

  export type FavouriteSkinUpdateManyMutationInput = {

  }

  export type FavouriteSkinUncheckedUpdateManyInput = {
    skin_id?: StringFieldUpdateOperationsInput | string
  }

  export type GameSettingsCreateInput = {
    settings_Id: string
    game_path: string
    patchVersion?: string | null
  }

  export type GameSettingsUncheckedCreateInput = {
    settings_Id: string
    game_path: string
    patchVersion?: string | null
  }

  export type GameSettingsUpdateInput = {
    settings_Id?: StringFieldUpdateOperationsInput | string
    game_path?: StringFieldUpdateOperationsInput | string
    patchVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameSettingsUncheckedUpdateInput = {
    settings_Id?: StringFieldUpdateOperationsInput | string
    game_path?: StringFieldUpdateOperationsInput | string
    patchVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameSettingsCreateManyInput = {
    settings_Id: string
    game_path: string
    patchVersion?: string | null
  }

  export type GameSettingsUpdateManyMutationInput = {
    settings_Id?: StringFieldUpdateOperationsInput | string
    game_path?: StringFieldUpdateOperationsInput | string
    patchVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameSettingsUncheckedUpdateManyInput = {
    settings_Id?: StringFieldUpdateOperationsInput | string
    game_path?: StringFieldUpdateOperationsInput | string
    patchVersion?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SkinListRelationFilter = {
    every?: SkinWhereInput
    some?: SkinWhereInput
    none?: SkinWhereInput
  }

  export type Champion_RoleListRelationFilter = {
    every?: Champion_RoleWhereInput
    some?: Champion_RoleWhereInput
    none?: Champion_RoleWhereInput
  }

  export type SkinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Champion_RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChampionCountOrderByAggregateInput = {
    id?: SortOrder
    champ_code?: SortOrder
    champ_name?: SortOrder
    image_url?: SortOrder
  }

  export type ChampionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChampionMaxOrderByAggregateInput = {
    id?: SortOrder
    champ_code?: SortOrder
    champ_name?: SortOrder
    image_url?: SortOrder
  }

  export type ChampionMinOrderByAggregateInput = {
    id?: SortOrder
    champ_code?: SortOrder
    champ_name?: SortOrder
    image_url?: SortOrder
  }

  export type ChampionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RoleCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type ChampionScalarRelationFilter = {
    is?: ChampionWhereInput
    isNot?: ChampionWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type Champion_RoleChampIdRoleIdCompoundUniqueInput = {
    champId: number
    roleId: number
  }

  export type Champion_RoleCountOrderByAggregateInput = {
    champId?: SortOrder
    roleId?: SortOrder
  }

  export type Champion_RoleAvgOrderByAggregateInput = {
    champId?: SortOrder
    roleId?: SortOrder
  }

  export type Champion_RoleMaxOrderByAggregateInput = {
    champId?: SortOrder
    roleId?: SortOrder
  }

  export type Champion_RoleMinOrderByAggregateInput = {
    champId?: SortOrder
    roleId?: SortOrder
  }

  export type Champion_RoleSumOrderByAggregateInput = {
    champId?: SortOrder
    roleId?: SortOrder
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

  export type FavouriteSkinNullableScalarRelationFilter = {
    is?: FavouriteSkinWhereInput | null
    isNot?: FavouriteSkinWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkinCountOrderByAggregateInput = {
    id?: SortOrder
    skin_name?: SortOrder
    champ_id?: SortOrder
    skin_number?: SortOrder
    local_skin_path?: SortOrder
  }

  export type SkinAvgOrderByAggregateInput = {
    champ_id?: SortOrder
    skin_number?: SortOrder
  }

  export type SkinMaxOrderByAggregateInput = {
    id?: SortOrder
    skin_name?: SortOrder
    champ_id?: SortOrder
    skin_number?: SortOrder
    local_skin_path?: SortOrder
  }

  export type SkinMinOrderByAggregateInput = {
    id?: SortOrder
    skin_name?: SortOrder
    champ_id?: SortOrder
    skin_number?: SortOrder
    local_skin_path?: SortOrder
  }

  export type SkinSumOrderByAggregateInput = {
    champ_id?: SortOrder
    skin_number?: SortOrder
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

  export type SkinScalarRelationFilter = {
    is?: SkinWhereInput
    isNot?: SkinWhereInput
  }

  export type FavouriteSkinCountOrderByAggregateInput = {
    skin_id?: SortOrder
  }

  export type FavouriteSkinMaxOrderByAggregateInput = {
    skin_id?: SortOrder
  }

  export type FavouriteSkinMinOrderByAggregateInput = {
    skin_id?: SortOrder
  }

  export type GameSettingsCountOrderByAggregateInput = {
    settings_Id?: SortOrder
    game_path?: SortOrder
    patchVersion?: SortOrder
  }

  export type GameSettingsMaxOrderByAggregateInput = {
    settings_Id?: SortOrder
    game_path?: SortOrder
    patchVersion?: SortOrder
  }

  export type GameSettingsMinOrderByAggregateInput = {
    settings_Id?: SortOrder
    game_path?: SortOrder
    patchVersion?: SortOrder
  }

  export type SkinCreateNestedManyWithoutChampionInput = {
    create?: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput> | SkinCreateWithoutChampionInput[] | SkinUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutChampionInput | SkinCreateOrConnectWithoutChampionInput[]
    createMany?: SkinCreateManyChampionInputEnvelope
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
  }

  export type Champion_RoleCreateNestedManyWithoutChampionInput = {
    create?: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput> | Champion_RoleCreateWithoutChampionInput[] | Champion_RoleUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutChampionInput | Champion_RoleCreateOrConnectWithoutChampionInput[]
    createMany?: Champion_RoleCreateManyChampionInputEnvelope
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
  }

  export type SkinUncheckedCreateNestedManyWithoutChampionInput = {
    create?: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput> | SkinCreateWithoutChampionInput[] | SkinUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutChampionInput | SkinCreateOrConnectWithoutChampionInput[]
    createMany?: SkinCreateManyChampionInputEnvelope
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
  }

  export type Champion_RoleUncheckedCreateNestedManyWithoutChampionInput = {
    create?: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput> | Champion_RoleCreateWithoutChampionInput[] | Champion_RoleUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutChampionInput | Champion_RoleCreateOrConnectWithoutChampionInput[]
    createMany?: Champion_RoleCreateManyChampionInputEnvelope
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SkinUpdateManyWithoutChampionNestedInput = {
    create?: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput> | SkinCreateWithoutChampionInput[] | SkinUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutChampionInput | SkinCreateOrConnectWithoutChampionInput[]
    upsert?: SkinUpsertWithWhereUniqueWithoutChampionInput | SkinUpsertWithWhereUniqueWithoutChampionInput[]
    createMany?: SkinCreateManyChampionInputEnvelope
    set?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    disconnect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    delete?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    update?: SkinUpdateWithWhereUniqueWithoutChampionInput | SkinUpdateWithWhereUniqueWithoutChampionInput[]
    updateMany?: SkinUpdateManyWithWhereWithoutChampionInput | SkinUpdateManyWithWhereWithoutChampionInput[]
    deleteMany?: SkinScalarWhereInput | SkinScalarWhereInput[]
  }

  export type Champion_RoleUpdateManyWithoutChampionNestedInput = {
    create?: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput> | Champion_RoleCreateWithoutChampionInput[] | Champion_RoleUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutChampionInput | Champion_RoleCreateOrConnectWithoutChampionInput[]
    upsert?: Champion_RoleUpsertWithWhereUniqueWithoutChampionInput | Champion_RoleUpsertWithWhereUniqueWithoutChampionInput[]
    createMany?: Champion_RoleCreateManyChampionInputEnvelope
    set?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    disconnect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    delete?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    update?: Champion_RoleUpdateWithWhereUniqueWithoutChampionInput | Champion_RoleUpdateWithWhereUniqueWithoutChampionInput[]
    updateMany?: Champion_RoleUpdateManyWithWhereWithoutChampionInput | Champion_RoleUpdateManyWithWhereWithoutChampionInput[]
    deleteMany?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
  }

  export type SkinUncheckedUpdateManyWithoutChampionNestedInput = {
    create?: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput> | SkinCreateWithoutChampionInput[] | SkinUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutChampionInput | SkinCreateOrConnectWithoutChampionInput[]
    upsert?: SkinUpsertWithWhereUniqueWithoutChampionInput | SkinUpsertWithWhereUniqueWithoutChampionInput[]
    createMany?: SkinCreateManyChampionInputEnvelope
    set?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    disconnect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    delete?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    update?: SkinUpdateWithWhereUniqueWithoutChampionInput | SkinUpdateWithWhereUniqueWithoutChampionInput[]
    updateMany?: SkinUpdateManyWithWhereWithoutChampionInput | SkinUpdateManyWithWhereWithoutChampionInput[]
    deleteMany?: SkinScalarWhereInput | SkinScalarWhereInput[]
  }

  export type Champion_RoleUncheckedUpdateManyWithoutChampionNestedInput = {
    create?: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput> | Champion_RoleCreateWithoutChampionInput[] | Champion_RoleUncheckedCreateWithoutChampionInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutChampionInput | Champion_RoleCreateOrConnectWithoutChampionInput[]
    upsert?: Champion_RoleUpsertWithWhereUniqueWithoutChampionInput | Champion_RoleUpsertWithWhereUniqueWithoutChampionInput[]
    createMany?: Champion_RoleCreateManyChampionInputEnvelope
    set?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    disconnect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    delete?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    update?: Champion_RoleUpdateWithWhereUniqueWithoutChampionInput | Champion_RoleUpdateWithWhereUniqueWithoutChampionInput[]
    updateMany?: Champion_RoleUpdateManyWithWhereWithoutChampionInput | Champion_RoleUpdateManyWithWhereWithoutChampionInput[]
    deleteMany?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
  }

  export type Champion_RoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput> | Champion_RoleCreateWithoutRoleInput[] | Champion_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutRoleInput | Champion_RoleCreateOrConnectWithoutRoleInput[]
    createMany?: Champion_RoleCreateManyRoleInputEnvelope
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
  }

  export type Champion_RoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput> | Champion_RoleCreateWithoutRoleInput[] | Champion_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutRoleInput | Champion_RoleCreateOrConnectWithoutRoleInput[]
    createMany?: Champion_RoleCreateManyRoleInputEnvelope
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
  }

  export type Champion_RoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput> | Champion_RoleCreateWithoutRoleInput[] | Champion_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutRoleInput | Champion_RoleCreateOrConnectWithoutRoleInput[]
    upsert?: Champion_RoleUpsertWithWhereUniqueWithoutRoleInput | Champion_RoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Champion_RoleCreateManyRoleInputEnvelope
    set?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    disconnect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    delete?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    update?: Champion_RoleUpdateWithWhereUniqueWithoutRoleInput | Champion_RoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Champion_RoleUpdateManyWithWhereWithoutRoleInput | Champion_RoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
  }

  export type Champion_RoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput> | Champion_RoleCreateWithoutRoleInput[] | Champion_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Champion_RoleCreateOrConnectWithoutRoleInput | Champion_RoleCreateOrConnectWithoutRoleInput[]
    upsert?: Champion_RoleUpsertWithWhereUniqueWithoutRoleInput | Champion_RoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Champion_RoleCreateManyRoleInputEnvelope
    set?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    disconnect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    delete?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    connect?: Champion_RoleWhereUniqueInput | Champion_RoleWhereUniqueInput[]
    update?: Champion_RoleUpdateWithWhereUniqueWithoutRoleInput | Champion_RoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Champion_RoleUpdateManyWithWhereWithoutRoleInput | Champion_RoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
  }

  export type ChampionCreateNestedOneWithoutRolesInput = {
    create?: XOR<ChampionCreateWithoutRolesInput, ChampionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ChampionCreateOrConnectWithoutRolesInput
    connect?: ChampionWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutChampionsInput = {
    create?: XOR<RoleCreateWithoutChampionsInput, RoleUncheckedCreateWithoutChampionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutChampionsInput
    connect?: RoleWhereUniqueInput
  }

  export type ChampionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ChampionCreateWithoutRolesInput, ChampionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ChampionCreateOrConnectWithoutRolesInput
    upsert?: ChampionUpsertWithoutRolesInput
    connect?: ChampionWhereUniqueInput
    update?: XOR<XOR<ChampionUpdateToOneWithWhereWithoutRolesInput, ChampionUpdateWithoutRolesInput>, ChampionUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutChampionsNestedInput = {
    create?: XOR<RoleCreateWithoutChampionsInput, RoleUncheckedCreateWithoutChampionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutChampionsInput
    upsert?: RoleUpsertWithoutChampionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutChampionsInput, RoleUpdateWithoutChampionsInput>, RoleUncheckedUpdateWithoutChampionsInput>
  }

  export type ChampionCreateNestedOneWithoutSkinsInput = {
    create?: XOR<ChampionCreateWithoutSkinsInput, ChampionUncheckedCreateWithoutSkinsInput>
    connectOrCreate?: ChampionCreateOrConnectWithoutSkinsInput
    connect?: ChampionWhereUniqueInput
  }

  export type FavouriteSkinCreateNestedOneWithoutSkinInput = {
    create?: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
    connectOrCreate?: FavouriteSkinCreateOrConnectWithoutSkinInput
    connect?: FavouriteSkinWhereUniqueInput
  }

  export type FavouriteSkinUncheckedCreateNestedOneWithoutSkinInput = {
    create?: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
    connectOrCreate?: FavouriteSkinCreateOrConnectWithoutSkinInput
    connect?: FavouriteSkinWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChampionUpdateOneRequiredWithoutSkinsNestedInput = {
    create?: XOR<ChampionCreateWithoutSkinsInput, ChampionUncheckedCreateWithoutSkinsInput>
    connectOrCreate?: ChampionCreateOrConnectWithoutSkinsInput
    upsert?: ChampionUpsertWithoutSkinsInput
    connect?: ChampionWhereUniqueInput
    update?: XOR<XOR<ChampionUpdateToOneWithWhereWithoutSkinsInput, ChampionUpdateWithoutSkinsInput>, ChampionUncheckedUpdateWithoutSkinsInput>
  }

  export type FavouriteSkinUpdateOneWithoutSkinNestedInput = {
    create?: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
    connectOrCreate?: FavouriteSkinCreateOrConnectWithoutSkinInput
    upsert?: FavouriteSkinUpsertWithoutSkinInput
    disconnect?: FavouriteSkinWhereInput | boolean
    delete?: FavouriteSkinWhereInput | boolean
    connect?: FavouriteSkinWhereUniqueInput
    update?: XOR<XOR<FavouriteSkinUpdateToOneWithWhereWithoutSkinInput, FavouriteSkinUpdateWithoutSkinInput>, FavouriteSkinUncheckedUpdateWithoutSkinInput>
  }

  export type FavouriteSkinUncheckedUpdateOneWithoutSkinNestedInput = {
    create?: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
    connectOrCreate?: FavouriteSkinCreateOrConnectWithoutSkinInput
    upsert?: FavouriteSkinUpsertWithoutSkinInput
    disconnect?: FavouriteSkinWhereInput | boolean
    delete?: FavouriteSkinWhereInput | boolean
    connect?: FavouriteSkinWhereUniqueInput
    update?: XOR<XOR<FavouriteSkinUpdateToOneWithWhereWithoutSkinInput, FavouriteSkinUpdateWithoutSkinInput>, FavouriteSkinUncheckedUpdateWithoutSkinInput>
  }

  export type SkinCreateNestedOneWithoutFavouriteSkinInput = {
    create?: XOR<SkinCreateWithoutFavouriteSkinInput, SkinUncheckedCreateWithoutFavouriteSkinInput>
    connectOrCreate?: SkinCreateOrConnectWithoutFavouriteSkinInput
    connect?: SkinWhereUniqueInput
  }

  export type SkinUpdateOneRequiredWithoutFavouriteSkinNestedInput = {
    create?: XOR<SkinCreateWithoutFavouriteSkinInput, SkinUncheckedCreateWithoutFavouriteSkinInput>
    connectOrCreate?: SkinCreateOrConnectWithoutFavouriteSkinInput
    upsert?: SkinUpsertWithoutFavouriteSkinInput
    connect?: SkinWhereUniqueInput
    update?: XOR<XOR<SkinUpdateToOneWithWhereWithoutFavouriteSkinInput, SkinUpdateWithoutFavouriteSkinInput>, SkinUncheckedUpdateWithoutFavouriteSkinInput>
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

  export type SkinCreateWithoutChampionInput = {
    id: string
    skin_name: string
    skin_number: number
    local_skin_path?: string | null
    FavouriteSkin?: FavouriteSkinCreateNestedOneWithoutSkinInput
  }

  export type SkinUncheckedCreateWithoutChampionInput = {
    id: string
    skin_name: string
    skin_number: number
    local_skin_path?: string | null
    FavouriteSkin?: FavouriteSkinUncheckedCreateNestedOneWithoutSkinInput
  }

  export type SkinCreateOrConnectWithoutChampionInput = {
    where: SkinWhereUniqueInput
    create: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput>
  }

  export type SkinCreateManyChampionInputEnvelope = {
    data: SkinCreateManyChampionInput | SkinCreateManyChampionInput[]
  }

  export type Champion_RoleCreateWithoutChampionInput = {
    role: RoleCreateNestedOneWithoutChampionsInput
  }

  export type Champion_RoleUncheckedCreateWithoutChampionInput = {
    roleId: number
  }

  export type Champion_RoleCreateOrConnectWithoutChampionInput = {
    where: Champion_RoleWhereUniqueInput
    create: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput>
  }

  export type Champion_RoleCreateManyChampionInputEnvelope = {
    data: Champion_RoleCreateManyChampionInput | Champion_RoleCreateManyChampionInput[]
  }

  export type SkinUpsertWithWhereUniqueWithoutChampionInput = {
    where: SkinWhereUniqueInput
    update: XOR<SkinUpdateWithoutChampionInput, SkinUncheckedUpdateWithoutChampionInput>
    create: XOR<SkinCreateWithoutChampionInput, SkinUncheckedCreateWithoutChampionInput>
  }

  export type SkinUpdateWithWhereUniqueWithoutChampionInput = {
    where: SkinWhereUniqueInput
    data: XOR<SkinUpdateWithoutChampionInput, SkinUncheckedUpdateWithoutChampionInput>
  }

  export type SkinUpdateManyWithWhereWithoutChampionInput = {
    where: SkinScalarWhereInput
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyWithoutChampionInput>
  }

  export type SkinScalarWhereInput = {
    AND?: SkinScalarWhereInput | SkinScalarWhereInput[]
    OR?: SkinScalarWhereInput[]
    NOT?: SkinScalarWhereInput | SkinScalarWhereInput[]
    id?: StringFilter<"Skin"> | string
    skin_name?: StringFilter<"Skin"> | string
    champ_id?: IntFilter<"Skin"> | number
    skin_number?: IntFilter<"Skin"> | number
    local_skin_path?: StringNullableFilter<"Skin"> | string | null
  }

  export type Champion_RoleUpsertWithWhereUniqueWithoutChampionInput = {
    where: Champion_RoleWhereUniqueInput
    update: XOR<Champion_RoleUpdateWithoutChampionInput, Champion_RoleUncheckedUpdateWithoutChampionInput>
    create: XOR<Champion_RoleCreateWithoutChampionInput, Champion_RoleUncheckedCreateWithoutChampionInput>
  }

  export type Champion_RoleUpdateWithWhereUniqueWithoutChampionInput = {
    where: Champion_RoleWhereUniqueInput
    data: XOR<Champion_RoleUpdateWithoutChampionInput, Champion_RoleUncheckedUpdateWithoutChampionInput>
  }

  export type Champion_RoleUpdateManyWithWhereWithoutChampionInput = {
    where: Champion_RoleScalarWhereInput
    data: XOR<Champion_RoleUpdateManyMutationInput, Champion_RoleUncheckedUpdateManyWithoutChampionInput>
  }

  export type Champion_RoleScalarWhereInput = {
    AND?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
    OR?: Champion_RoleScalarWhereInput[]
    NOT?: Champion_RoleScalarWhereInput | Champion_RoleScalarWhereInput[]
    champId?: IntFilter<"Champion_Role"> | number
    roleId?: IntFilter<"Champion_Role"> | number
  }

  export type Champion_RoleCreateWithoutRoleInput = {
    champion: ChampionCreateNestedOneWithoutRolesInput
  }

  export type Champion_RoleUncheckedCreateWithoutRoleInput = {
    champId: number
  }

  export type Champion_RoleCreateOrConnectWithoutRoleInput = {
    where: Champion_RoleWhereUniqueInput
    create: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput>
  }

  export type Champion_RoleCreateManyRoleInputEnvelope = {
    data: Champion_RoleCreateManyRoleInput | Champion_RoleCreateManyRoleInput[]
  }

  export type Champion_RoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: Champion_RoleWhereUniqueInput
    update: XOR<Champion_RoleUpdateWithoutRoleInput, Champion_RoleUncheckedUpdateWithoutRoleInput>
    create: XOR<Champion_RoleCreateWithoutRoleInput, Champion_RoleUncheckedCreateWithoutRoleInput>
  }

  export type Champion_RoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: Champion_RoleWhereUniqueInput
    data: XOR<Champion_RoleUpdateWithoutRoleInput, Champion_RoleUncheckedUpdateWithoutRoleInput>
  }

  export type Champion_RoleUpdateManyWithWhereWithoutRoleInput = {
    where: Champion_RoleScalarWhereInput
    data: XOR<Champion_RoleUpdateManyMutationInput, Champion_RoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ChampionCreateWithoutRolesInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    skins?: SkinCreateNestedManyWithoutChampionInput
  }

  export type ChampionUncheckedCreateWithoutRolesInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    skins?: SkinUncheckedCreateNestedManyWithoutChampionInput
  }

  export type ChampionCreateOrConnectWithoutRolesInput = {
    where: ChampionWhereUniqueInput
    create: XOR<ChampionCreateWithoutRolesInput, ChampionUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutChampionsInput = {
    role_id: number
    role_name: string
  }

  export type RoleUncheckedCreateWithoutChampionsInput = {
    role_id: number
    role_name: string
  }

  export type RoleCreateOrConnectWithoutChampionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutChampionsInput, RoleUncheckedCreateWithoutChampionsInput>
  }

  export type ChampionUpsertWithoutRolesInput = {
    update: XOR<ChampionUpdateWithoutRolesInput, ChampionUncheckedUpdateWithoutRolesInput>
    create: XOR<ChampionCreateWithoutRolesInput, ChampionUncheckedCreateWithoutRolesInput>
    where?: ChampionWhereInput
  }

  export type ChampionUpdateToOneWithWhereWithoutRolesInput = {
    where?: ChampionWhereInput
    data: XOR<ChampionUpdateWithoutRolesInput, ChampionUncheckedUpdateWithoutRolesInput>
  }

  export type ChampionUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    skins?: SkinUpdateManyWithoutChampionNestedInput
  }

  export type ChampionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    skins?: SkinUncheckedUpdateManyWithoutChampionNestedInput
  }

  export type RoleUpsertWithoutChampionsInput = {
    update: XOR<RoleUpdateWithoutChampionsInput, RoleUncheckedUpdateWithoutChampionsInput>
    create: XOR<RoleCreateWithoutChampionsInput, RoleUncheckedCreateWithoutChampionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutChampionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutChampionsInput, RoleUncheckedUpdateWithoutChampionsInput>
  }

  export type RoleUpdateWithoutChampionsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutChampionsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type ChampionCreateWithoutSkinsInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    roles?: Champion_RoleCreateNestedManyWithoutChampionInput
  }

  export type ChampionUncheckedCreateWithoutSkinsInput = {
    id: number
    champ_code: string
    champ_name: string
    image_url: string
    roles?: Champion_RoleUncheckedCreateNestedManyWithoutChampionInput
  }

  export type ChampionCreateOrConnectWithoutSkinsInput = {
    where: ChampionWhereUniqueInput
    create: XOR<ChampionCreateWithoutSkinsInput, ChampionUncheckedCreateWithoutSkinsInput>
  }

  export type FavouriteSkinCreateWithoutSkinInput = {

  }

  export type FavouriteSkinUncheckedCreateWithoutSkinInput = {

  }

  export type FavouriteSkinCreateOrConnectWithoutSkinInput = {
    where: FavouriteSkinWhereUniqueInput
    create: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
  }

  export type ChampionUpsertWithoutSkinsInput = {
    update: XOR<ChampionUpdateWithoutSkinsInput, ChampionUncheckedUpdateWithoutSkinsInput>
    create: XOR<ChampionCreateWithoutSkinsInput, ChampionUncheckedCreateWithoutSkinsInput>
    where?: ChampionWhereInput
  }

  export type ChampionUpdateToOneWithWhereWithoutSkinsInput = {
    where?: ChampionWhereInput
    data: XOR<ChampionUpdateWithoutSkinsInput, ChampionUncheckedUpdateWithoutSkinsInput>
  }

  export type ChampionUpdateWithoutSkinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    roles?: Champion_RoleUpdateManyWithoutChampionNestedInput
  }

  export type ChampionUncheckedUpdateWithoutSkinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    champ_code?: StringFieldUpdateOperationsInput | string
    champ_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    roles?: Champion_RoleUncheckedUpdateManyWithoutChampionNestedInput
  }

  export type FavouriteSkinUpsertWithoutSkinInput = {
    update: XOR<FavouriteSkinUpdateWithoutSkinInput, FavouriteSkinUncheckedUpdateWithoutSkinInput>
    create: XOR<FavouriteSkinCreateWithoutSkinInput, FavouriteSkinUncheckedCreateWithoutSkinInput>
    where?: FavouriteSkinWhereInput
  }

  export type FavouriteSkinUpdateToOneWithWhereWithoutSkinInput = {
    where?: FavouriteSkinWhereInput
    data: XOR<FavouriteSkinUpdateWithoutSkinInput, FavouriteSkinUncheckedUpdateWithoutSkinInput>
  }

  export type FavouriteSkinUpdateWithoutSkinInput = {

  }

  export type FavouriteSkinUncheckedUpdateWithoutSkinInput = {

  }

  export type SkinCreateWithoutFavouriteSkinInput = {
    id: string
    skin_name: string
    skin_number: number
    local_skin_path?: string | null
    champion: ChampionCreateNestedOneWithoutSkinsInput
  }

  export type SkinUncheckedCreateWithoutFavouriteSkinInput = {
    id: string
    skin_name: string
    champ_id: number
    skin_number: number
    local_skin_path?: string | null
  }

  export type SkinCreateOrConnectWithoutFavouriteSkinInput = {
    where: SkinWhereUniqueInput
    create: XOR<SkinCreateWithoutFavouriteSkinInput, SkinUncheckedCreateWithoutFavouriteSkinInput>
  }

  export type SkinUpsertWithoutFavouriteSkinInput = {
    update: XOR<SkinUpdateWithoutFavouriteSkinInput, SkinUncheckedUpdateWithoutFavouriteSkinInput>
    create: XOR<SkinCreateWithoutFavouriteSkinInput, SkinUncheckedCreateWithoutFavouriteSkinInput>
    where?: SkinWhereInput
  }

  export type SkinUpdateToOneWithWhereWithoutFavouriteSkinInput = {
    where?: SkinWhereInput
    data: XOR<SkinUpdateWithoutFavouriteSkinInput, SkinUncheckedUpdateWithoutFavouriteSkinInput>
  }

  export type SkinUpdateWithoutFavouriteSkinInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
    champion?: ChampionUpdateOneRequiredWithoutSkinsNestedInput
  }

  export type SkinUncheckedUpdateWithoutFavouriteSkinInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    champ_id?: IntFieldUpdateOperationsInput | number
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkinCreateManyChampionInput = {
    id: string
    skin_name: string
    skin_number: number
    local_skin_path?: string | null
  }

  export type Champion_RoleCreateManyChampionInput = {
    roleId: number
  }

  export type SkinUpdateWithoutChampionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
    FavouriteSkin?: FavouriteSkinUpdateOneWithoutSkinNestedInput
  }

  export type SkinUncheckedUpdateWithoutChampionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
    FavouriteSkin?: FavouriteSkinUncheckedUpdateOneWithoutSkinNestedInput
  }

  export type SkinUncheckedUpdateManyWithoutChampionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skin_name?: StringFieldUpdateOperationsInput | string
    skin_number?: IntFieldUpdateOperationsInput | number
    local_skin_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Champion_RoleUpdateWithoutChampionInput = {
    role?: RoleUpdateOneRequiredWithoutChampionsNestedInput
  }

  export type Champion_RoleUncheckedUpdateWithoutChampionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type Champion_RoleUncheckedUpdateManyWithoutChampionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type Champion_RoleCreateManyRoleInput = {
    champId: number
  }

  export type Champion_RoleUpdateWithoutRoleInput = {
    champion?: ChampionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type Champion_RoleUncheckedUpdateWithoutRoleInput = {
    champId?: IntFieldUpdateOperationsInput | number
  }

  export type Champion_RoleUncheckedUpdateManyWithoutRoleInput = {
    champId?: IntFieldUpdateOperationsInput | number
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