
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SchoolUser
 * 
 */
export type SchoolUser = $Result.DefaultSelection<Prisma.$SchoolUserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionCandidate
 * 
 */
export type SessionCandidate = $Result.DefaultSelection<Prisma.$SessionCandidatePayload>
/**
 * Model CandidateInstructor
 * 
 */
export type CandidateInstructor = $Result.DefaultSelection<Prisma.$CandidateInstructorPayload>
/**
 * Model InstructorSlot
 * 
 */
export type InstructorSlot = $Result.DefaultSelection<Prisma.$InstructorSlotPayload>
/**
 * Model TestResult
 * 
 */
export type TestResult = $Result.DefaultSelection<Prisma.$TestResultPayload>
/**
 * Model EnrollmentRequest
 * 
 */
export type EnrollmentRequest = $Result.DefaultSelection<Prisma.$EnrollmentRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  Guest: 'Guest',
  Candidate: 'Candidate',
  Instructor: 'Instructor',
  SchoolAdmin: 'SchoolAdmin',
  Admin: 'Admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SessionType: {
  Theory: 'Theory',
  FirstAid: 'FirstAid',
  Driving: 'Driving'
};

export type SessionType = (typeof SessionType)[keyof typeof SessionType]


export const SessionFormat: {
  Lesson: 'Lesson',
  Test: 'Test'
};

export type SessionFormat = (typeof SessionFormat)[keyof typeof SessionFormat]


export const Day: {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday'
};

export type Day = (typeof Day)[keyof typeof Day]


export const EnrollmentStatus: {
  Approved: 'Approved',
  Pending: 'Pending',
  Denied: 'Denied'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SessionType = $Enums.SessionType

export const SessionType: typeof $Enums.SessionType

export type SessionFormat = $Enums.SessionFormat

export const SessionFormat: typeof $Enums.SessionFormat

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
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
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
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
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.schoolUser`: Exposes CRUD operations for the **SchoolUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolUsers
    * const schoolUsers = await prisma.schoolUser.findMany()
    * ```
    */
  get schoolUser(): Prisma.SchoolUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionCandidate`: Exposes CRUD operations for the **SessionCandidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionCandidates
    * const sessionCandidates = await prisma.sessionCandidate.findMany()
    * ```
    */
  get sessionCandidate(): Prisma.SessionCandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateInstructor`: Exposes CRUD operations for the **CandidateInstructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateInstructors
    * const candidateInstructors = await prisma.candidateInstructor.findMany()
    * ```
    */
  get candidateInstructor(): Prisma.CandidateInstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorSlot`: Exposes CRUD operations for the **InstructorSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorSlots
    * const instructorSlots = await prisma.instructorSlot.findMany()
    * ```
    */
  get instructorSlot(): Prisma.InstructorSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollmentRequest`: Exposes CRUD operations for the **EnrollmentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrollmentRequests
    * const enrollmentRequests = await prisma.enrollmentRequest.findMany()
    * ```
    */
  get enrollmentRequest(): Prisma.EnrollmentRequestDelegate<ExtArgs, ClientOptions>;
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
    School: 'School',
    User: 'User',
    SchoolUser: 'SchoolUser',
    Session: 'Session',
    SessionCandidate: 'SessionCandidate',
    CandidateInstructor: 'CandidateInstructor',
    InstructorSlot: 'InstructorSlot',
    TestResult: 'TestResult',
    EnrollmentRequest: 'EnrollmentRequest'
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
      modelProps: "school" | "user" | "schoolUser" | "session" | "sessionCandidate" | "candidateInstructor" | "instructorSlot" | "testResult" | "enrollmentRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
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
      SchoolUser: {
        payload: Prisma.$SchoolUserPayload<ExtArgs>
        fields: Prisma.SchoolUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          findFirst: {
            args: Prisma.SchoolUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          findMany: {
            args: Prisma.SchoolUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>[]
          }
          create: {
            args: Prisma.SchoolUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          createMany: {
            args: Prisma.SchoolUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>[]
          }
          delete: {
            args: Prisma.SchoolUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          update: {
            args: Prisma.SchoolUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          deleteMany: {
            args: Prisma.SchoolUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolUserPayload>
          }
          aggregate: {
            args: Prisma.SchoolUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolUser>
          }
          groupBy: {
            args: Prisma.SchoolUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolUserCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolUserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      SessionCandidate: {
        payload: Prisma.$SessionCandidatePayload<ExtArgs>
        fields: Prisma.SessionCandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionCandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionCandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          findFirst: {
            args: Prisma.SessionCandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionCandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          findMany: {
            args: Prisma.SessionCandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>[]
          }
          create: {
            args: Prisma.SessionCandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          createMany: {
            args: Prisma.SessionCandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>[]
          }
          delete: {
            args: Prisma.SessionCandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          update: {
            args: Prisma.SessionCandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          deleteMany: {
            args: Prisma.SessionCandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionCandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionCandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>[]
          }
          upsert: {
            args: Prisma.SessionCandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCandidatePayload>
          }
          aggregate: {
            args: Prisma.SessionCandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionCandidate>
          }
          groupBy: {
            args: Prisma.SessionCandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionCandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCandidateCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCandidateCountAggregateOutputType> | number
          }
        }
      }
      CandidateInstructor: {
        payload: Prisma.$CandidateInstructorPayload<ExtArgs>
        fields: Prisma.CandidateInstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateInstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateInstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          findFirst: {
            args: Prisma.CandidateInstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateInstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          findMany: {
            args: Prisma.CandidateInstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>[]
          }
          create: {
            args: Prisma.CandidateInstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          createMany: {
            args: Prisma.CandidateInstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateInstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>[]
          }
          delete: {
            args: Prisma.CandidateInstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          update: {
            args: Prisma.CandidateInstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          deleteMany: {
            args: Prisma.CandidateInstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateInstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateInstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>[]
          }
          upsert: {
            args: Prisma.CandidateInstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateInstructorPayload>
          }
          aggregate: {
            args: Prisma.CandidateInstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateInstructor>
          }
          groupBy: {
            args: Prisma.CandidateInstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateInstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateInstructorCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateInstructorCountAggregateOutputType> | number
          }
        }
      }
      InstructorSlot: {
        payload: Prisma.$InstructorSlotPayload<ExtArgs>
        fields: Prisma.InstructorSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          findFirst: {
            args: Prisma.InstructorSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          findMany: {
            args: Prisma.InstructorSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>[]
          }
          create: {
            args: Prisma.InstructorSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          createMany: {
            args: Prisma.InstructorSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>[]
          }
          delete: {
            args: Prisma.InstructorSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          update: {
            args: Prisma.InstructorSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          deleteMany: {
            args: Prisma.InstructorSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>[]
          }
          upsert: {
            args: Prisma.InstructorSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorSlotPayload>
          }
          aggregate: {
            args: Prisma.InstructorSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorSlot>
          }
          groupBy: {
            args: Prisma.InstructorSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorSlotCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorSlotCountAggregateOutputType> | number
          }
        }
      }
      TestResult: {
        payload: Prisma.$TestResultPayload<ExtArgs>
        fields: Prisma.TestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findFirst: {
            args: Prisma.TestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findMany: {
            args: Prisma.TestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          create: {
            args: Prisma.TestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          createMany: {
            args: Prisma.TestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          delete: {
            args: Prisma.TestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          update: {
            args: Prisma.TestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          deleteMany: {
            args: Prisma.TestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          upsert: {
            args: Prisma.TestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          aggregate: {
            args: Prisma.TestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResult>
          }
          groupBy: {
            args: Prisma.TestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultCountAggregateOutputType> | number
          }
        }
      }
      EnrollmentRequest: {
        payload: Prisma.$EnrollmentRequestPayload<ExtArgs>
        fields: Prisma.EnrollmentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          findMany: {
            args: Prisma.EnrollmentRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>[]
          }
          create: {
            args: Prisma.EnrollmentRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          createMany: {
            args: Prisma.EnrollmentRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          update: {
            args: Prisma.EnrollmentRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentRequestPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollmentRequest>
          }
          groupBy: {
            args: Prisma.EnrollmentRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentRequestCountAggregateOutputType> | number
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
    school?: SchoolOmit
    user?: UserOmit
    schoolUser?: SchoolUserOmit
    session?: SessionOmit
    sessionCandidate?: SessionCandidateOmit
    candidateInstructor?: CandidateInstructorOmit
    instructorSlot?: InstructorSlotOmit
    testResult?: TestResultOmit
    enrollmentRequest?: EnrollmentRequestOmit
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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    users: number
    sessions: number
    enrollmentRequests: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SchoolCountOutputTypeCountUsersArgs
    sessions?: boolean | SchoolCountOutputTypeCountSessionsArgs
    enrollmentRequests?: boolean | SchoolCountOutputTypeCountEnrollmentRequestsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolUserWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountEnrollmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentRequestWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    schoolUsers: number
    sessions: number
    sessionCandidates: number
    testResults: number
    enrollmentRequests: number
    instructorCandidates: number
    candidateInstructors: number
    InstructorSlot: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolUsers?: boolean | UserCountOutputTypeCountSchoolUsersArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    sessionCandidates?: boolean | UserCountOutputTypeCountSessionCandidatesArgs
    testResults?: boolean | UserCountOutputTypeCountTestResultsArgs
    enrollmentRequests?: boolean | UserCountOutputTypeCountEnrollmentRequestsArgs
    instructorCandidates?: boolean | UserCountOutputTypeCountInstructorCandidatesArgs
    candidateInstructors?: boolean | UserCountOutputTypeCountCandidateInstructorsArgs
    InstructorSlot?: boolean | UserCountOutputTypeCountInstructorSlotArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCandidateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstructorCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateInstructorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCandidateInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateInstructorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstructorSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorSlotWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    candidates: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | SessionCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCandidateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
    enrollmentFee: Decimal | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
    enrollmentFee: Decimal | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    address: string | null
    contactNumber: string | null
    email: string | null
    enrollmentFee: Decimal | null
    info: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    address: string | null
    contactNumber: string | null
    email: string | null
    enrollmentFee: Decimal | null
    info: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    city: number
    address: number
    contactNumber: number
    email: number
    enrollmentFee: number
    info: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
    enrollmentFee?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
    enrollmentFee?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    contactNumber?: true
    email?: true
    enrollmentFee?: true
    info?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    contactNumber?: true
    email?: true
    enrollmentFee?: true
    info?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    contactNumber?: true
    email?: true
    enrollmentFee?: true
    info?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal
    info: string | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    enrollmentFee?: boolean
    info?: boolean
    users?: boolean | School$usersArgs<ExtArgs>
    sessions?: boolean | School$sessionsArgs<ExtArgs>
    enrollmentRequests?: boolean | School$enrollmentRequestsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    enrollmentFee?: boolean
    info?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    enrollmentFee?: boolean
    info?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    enrollmentFee?: boolean
    info?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "address" | "contactNumber" | "email" | "enrollmentFee" | "info", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | School$usersArgs<ExtArgs>
    sessions?: boolean | School$sessionsArgs<ExtArgs>
    enrollmentRequests?: boolean | School$enrollmentRequestsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      users: Prisma.$SchoolUserPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      enrollmentRequests: Prisma.$EnrollmentRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      address: string
      contactNumber: string
      email: string
      enrollmentFee: Prisma.Decimal
      info: string | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends School$usersArgs<ExtArgs> = {}>(args?: Subset<T, School$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends School$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, School$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollmentRequests<T extends School$enrollmentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, School$enrollmentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly city: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
    readonly contactNumber: FieldRef<"School", 'String'>
    readonly email: FieldRef<"School", 'String'>
    readonly enrollmentFee: FieldRef<"School", 'Decimal'>
    readonly info: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.users
   */
  export type School$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    where?: SchoolUserWhereInput
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    cursor?: SchoolUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolUserScalarFieldEnum | SchoolUserScalarFieldEnum[]
  }

  /**
   * School.sessions
   */
  export type School$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * School.enrollmentRequests
   */
  export type School$enrollmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    where?: EnrollmentRequestWhereInput
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    cursor?: EnrollmentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentRequestScalarFieldEnum | EnrollmentRequestScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


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
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
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
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
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
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    schoolUsers?: boolean | User$schoolUsersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    sessionCandidates?: boolean | User$sessionCandidatesArgs<ExtArgs>
    testResults?: boolean | User$testResultsArgs<ExtArgs>
    enrollmentRequests?: boolean | User$enrollmentRequestsArgs<ExtArgs>
    instructorCandidates?: boolean | User$instructorCandidatesArgs<ExtArgs>
    candidateInstructors?: boolean | User$candidateInstructorsArgs<ExtArgs>
    InstructorSlot?: boolean | User$InstructorSlotArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolUsers?: boolean | User$schoolUsersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    sessionCandidates?: boolean | User$sessionCandidatesArgs<ExtArgs>
    testResults?: boolean | User$testResultsArgs<ExtArgs>
    enrollmentRequests?: boolean | User$enrollmentRequestsArgs<ExtArgs>
    instructorCandidates?: boolean | User$instructorCandidatesArgs<ExtArgs>
    candidateInstructors?: boolean | User$candidateInstructorsArgs<ExtArgs>
    InstructorSlot?: boolean | User$InstructorSlotArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      schoolUsers: Prisma.$SchoolUserPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      sessionCandidates: Prisma.$SessionCandidatePayload<ExtArgs>[]
      testResults: Prisma.$TestResultPayload<ExtArgs>[]
      enrollmentRequests: Prisma.$EnrollmentRequestPayload<ExtArgs>[]
      instructorCandidates: Prisma.$CandidateInstructorPayload<ExtArgs>[]
      candidateInstructors: Prisma.$CandidateInstructorPayload<ExtArgs>[]
      InstructorSlot: Prisma.$InstructorSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.UserRole
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
    schoolUsers<T extends User$schoolUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionCandidates<T extends User$sessionCandidatesArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionCandidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testResults<T extends User$testResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$testResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollmentRequests<T extends User$enrollmentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructorCandidates<T extends User$instructorCandidatesArgs<ExtArgs> = {}>(args?: Subset<T, User$instructorCandidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidateInstructors<T extends User$candidateInstructorsArgs<ExtArgs> = {}>(args?: Subset<T, User$candidateInstructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InstructorSlot<T extends User$InstructorSlotArgs<ExtArgs> = {}>(args?: Subset<T, User$InstructorSlotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.schoolUsers
   */
  export type User$schoolUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    where?: SchoolUserWhereInput
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    cursor?: SchoolUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolUserScalarFieldEnum | SchoolUserScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.sessionCandidates
   */
  export type User$sessionCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    where?: SessionCandidateWhereInput
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    cursor?: SessionCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionCandidateScalarFieldEnum | SessionCandidateScalarFieldEnum[]
  }

  /**
   * User.testResults
   */
  export type User$testResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * User.enrollmentRequests
   */
  export type User$enrollmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    where?: EnrollmentRequestWhereInput
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    cursor?: EnrollmentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentRequestScalarFieldEnum | EnrollmentRequestScalarFieldEnum[]
  }

  /**
   * User.instructorCandidates
   */
  export type User$instructorCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    where?: CandidateInstructorWhereInput
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    cursor?: CandidateInstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateInstructorScalarFieldEnum | CandidateInstructorScalarFieldEnum[]
  }

  /**
   * User.candidateInstructors
   */
  export type User$candidateInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    where?: CandidateInstructorWhereInput
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    cursor?: CandidateInstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateInstructorScalarFieldEnum | CandidateInstructorScalarFieldEnum[]
  }

  /**
   * User.InstructorSlot
   */
  export type User$InstructorSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    where?: InstructorSlotWhereInput
    orderBy?: InstructorSlotOrderByWithRelationInput | InstructorSlotOrderByWithRelationInput[]
    cursor?: InstructorSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorSlotScalarFieldEnum | InstructorSlotScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SchoolUser
   */

  export type AggregateSchoolUser = {
    _count: SchoolUserCountAggregateOutputType | null
    _avg: SchoolUserAvgAggregateOutputType | null
    _sum: SchoolUserSumAggregateOutputType | null
    _min: SchoolUserMinAggregateOutputType | null
    _max: SchoolUserMaxAggregateOutputType | null
  }

  export type SchoolUserAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    userId: number | null
  }

  export type SchoolUserSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    userId: number | null
  }

  export type SchoolUserMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    userId: number | null
  }

  export type SchoolUserMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    userId: number | null
  }

  export type SchoolUserCountAggregateOutputType = {
    id: number
    schoolId: number
    userId: number
    _all: number
  }


  export type SchoolUserAvgAggregateInputType = {
    id?: true
    schoolId?: true
    userId?: true
  }

  export type SchoolUserSumAggregateInputType = {
    id?: true
    schoolId?: true
    userId?: true
  }

  export type SchoolUserMinAggregateInputType = {
    id?: true
    schoolId?: true
    userId?: true
  }

  export type SchoolUserMaxAggregateInputType = {
    id?: true
    schoolId?: true
    userId?: true
  }

  export type SchoolUserCountAggregateInputType = {
    id?: true
    schoolId?: true
    userId?: true
    _all?: true
  }

  export type SchoolUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolUser to aggregate.
     */
    where?: SchoolUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolUsers to fetch.
     */
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolUsers
    **/
    _count?: true | SchoolUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolUserMaxAggregateInputType
  }

  export type GetSchoolUserAggregateType<T extends SchoolUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolUser[P]>
      : GetScalarType<T[P], AggregateSchoolUser[P]>
  }




  export type SchoolUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolUserWhereInput
    orderBy?: SchoolUserOrderByWithAggregationInput | SchoolUserOrderByWithAggregationInput[]
    by: SchoolUserScalarFieldEnum[] | SchoolUserScalarFieldEnum
    having?: SchoolUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolUserCountAggregateInputType | true
    _avg?: SchoolUserAvgAggregateInputType
    _sum?: SchoolUserSumAggregateInputType
    _min?: SchoolUserMinAggregateInputType
    _max?: SchoolUserMaxAggregateInputType
  }

  export type SchoolUserGroupByOutputType = {
    id: number
    schoolId: number
    userId: number
    _count: SchoolUserCountAggregateOutputType | null
    _avg: SchoolUserAvgAggregateOutputType | null
    _sum: SchoolUserSumAggregateOutputType | null
    _min: SchoolUserMinAggregateOutputType | null
    _max: SchoolUserMaxAggregateOutputType | null
  }

  type GetSchoolUserGroupByPayload<T extends SchoolUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolUserGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolUserGroupByOutputType[P]>
        }
      >
    >


  export type SchoolUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    userId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolUser"]>

  export type SchoolUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    userId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolUser"]>

  export type SchoolUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    userId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolUser"]>

  export type SchoolUserSelectScalar = {
    id?: boolean
    schoolId?: boolean
    userId?: boolean
  }

  export type SchoolUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "userId", ExtArgs["result"]["schoolUser"]>
  export type SchoolUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SchoolUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SchoolUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchoolUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolUser"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      userId: number
    }, ExtArgs["result"]["schoolUser"]>
    composites: {}
  }

  type SchoolUserGetPayload<S extends boolean | null | undefined | SchoolUserDefaultArgs> = $Result.GetResult<Prisma.$SchoolUserPayload, S>

  type SchoolUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolUserCountAggregateInputType | true
    }

  export interface SchoolUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolUser'], meta: { name: 'SchoolUser' } }
    /**
     * Find zero or one SchoolUser that matches the filter.
     * @param {SchoolUserFindUniqueArgs} args - Arguments to find a SchoolUser
     * @example
     * // Get one SchoolUser
     * const schoolUser = await prisma.schoolUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolUserFindUniqueArgs>(args: SelectSubset<T, SchoolUserFindUniqueArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolUserFindUniqueOrThrowArgs} args - Arguments to find a SchoolUser
     * @example
     * // Get one SchoolUser
     * const schoolUser = await prisma.schoolUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserFindFirstArgs} args - Arguments to find a SchoolUser
     * @example
     * // Get one SchoolUser
     * const schoolUser = await prisma.schoolUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolUserFindFirstArgs>(args?: SelectSubset<T, SchoolUserFindFirstArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserFindFirstOrThrowArgs} args - Arguments to find a SchoolUser
     * @example
     * // Get one SchoolUser
     * const schoolUser = await prisma.schoolUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolUsers
     * const schoolUsers = await prisma.schoolUser.findMany()
     * 
     * // Get first 10 SchoolUsers
     * const schoolUsers = await prisma.schoolUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolUserWithIdOnly = await prisma.schoolUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolUserFindManyArgs>(args?: SelectSubset<T, SchoolUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolUser.
     * @param {SchoolUserCreateArgs} args - Arguments to create a SchoolUser.
     * @example
     * // Create one SchoolUser
     * const SchoolUser = await prisma.schoolUser.create({
     *   data: {
     *     // ... data to create a SchoolUser
     *   }
     * })
     * 
     */
    create<T extends SchoolUserCreateArgs>(args: SelectSubset<T, SchoolUserCreateArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolUsers.
     * @param {SchoolUserCreateManyArgs} args - Arguments to create many SchoolUsers.
     * @example
     * // Create many SchoolUsers
     * const schoolUser = await prisma.schoolUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolUserCreateManyArgs>(args?: SelectSubset<T, SchoolUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolUsers and returns the data saved in the database.
     * @param {SchoolUserCreateManyAndReturnArgs} args - Arguments to create many SchoolUsers.
     * @example
     * // Create many SchoolUsers
     * const schoolUser = await prisma.schoolUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolUsers and only return the `id`
     * const schoolUserWithIdOnly = await prisma.schoolUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolUser.
     * @param {SchoolUserDeleteArgs} args - Arguments to delete one SchoolUser.
     * @example
     * // Delete one SchoolUser
     * const SchoolUser = await prisma.schoolUser.delete({
     *   where: {
     *     // ... filter to delete one SchoolUser
     *   }
     * })
     * 
     */
    delete<T extends SchoolUserDeleteArgs>(args: SelectSubset<T, SchoolUserDeleteArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolUser.
     * @param {SchoolUserUpdateArgs} args - Arguments to update one SchoolUser.
     * @example
     * // Update one SchoolUser
     * const schoolUser = await prisma.schoolUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUserUpdateArgs>(args: SelectSubset<T, SchoolUserUpdateArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolUsers.
     * @param {SchoolUserDeleteManyArgs} args - Arguments to filter SchoolUsers to delete.
     * @example
     * // Delete a few SchoolUsers
     * const { count } = await prisma.schoolUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolUserDeleteManyArgs>(args?: SelectSubset<T, SchoolUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolUsers
     * const schoolUser = await prisma.schoolUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUserUpdateManyArgs>(args: SelectSubset<T, SchoolUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolUsers and returns the data updated in the database.
     * @param {SchoolUserUpdateManyAndReturnArgs} args - Arguments to update many SchoolUsers.
     * @example
     * // Update many SchoolUsers
     * const schoolUser = await prisma.schoolUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolUsers and only return the `id`
     * const schoolUserWithIdOnly = await prisma.schoolUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolUser.
     * @param {SchoolUserUpsertArgs} args - Arguments to update or create a SchoolUser.
     * @example
     * // Update or create a SchoolUser
     * const schoolUser = await prisma.schoolUser.upsert({
     *   create: {
     *     // ... data to create a SchoolUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolUser we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUserUpsertArgs>(args: SelectSubset<T, SchoolUserUpsertArgs<ExtArgs>>): Prisma__SchoolUserClient<$Result.GetResult<Prisma.$SchoolUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserCountArgs} args - Arguments to filter SchoolUsers to count.
     * @example
     * // Count the number of SchoolUsers
     * const count = await prisma.schoolUser.count({
     *   where: {
     *     // ... the filter for the SchoolUsers we want to count
     *   }
     * })
    **/
    count<T extends SchoolUserCountArgs>(
      args?: Subset<T, SchoolUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolUserAggregateArgs>(args: Subset<T, SchoolUserAggregateArgs>): Prisma.PrismaPromise<GetSchoolUserAggregateType<T>>

    /**
     * Group by SchoolUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUserGroupByArgs} args - Group by arguments.
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
      T extends SchoolUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolUserGroupByArgs['orderBy'] }
        : { orderBy?: SchoolUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolUser model
   */
  readonly fields: SchoolUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SchoolUser model
   */
  interface SchoolUserFieldRefs {
    readonly id: FieldRef<"SchoolUser", 'Int'>
    readonly schoolId: FieldRef<"SchoolUser", 'Int'>
    readonly userId: FieldRef<"SchoolUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SchoolUser findUnique
   */
  export type SchoolUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter, which SchoolUser to fetch.
     */
    where: SchoolUserWhereUniqueInput
  }

  /**
   * SchoolUser findUniqueOrThrow
   */
  export type SchoolUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter, which SchoolUser to fetch.
     */
    where: SchoolUserWhereUniqueInput
  }

  /**
   * SchoolUser findFirst
   */
  export type SchoolUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter, which SchoolUser to fetch.
     */
    where?: SchoolUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolUsers to fetch.
     */
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolUsers.
     */
    cursor?: SchoolUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolUsers.
     */
    distinct?: SchoolUserScalarFieldEnum | SchoolUserScalarFieldEnum[]
  }

  /**
   * SchoolUser findFirstOrThrow
   */
  export type SchoolUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter, which SchoolUser to fetch.
     */
    where?: SchoolUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolUsers to fetch.
     */
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolUsers.
     */
    cursor?: SchoolUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolUsers.
     */
    distinct?: SchoolUserScalarFieldEnum | SchoolUserScalarFieldEnum[]
  }

  /**
   * SchoolUser findMany
   */
  export type SchoolUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter, which SchoolUsers to fetch.
     */
    where?: SchoolUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolUsers to fetch.
     */
    orderBy?: SchoolUserOrderByWithRelationInput | SchoolUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolUsers.
     */
    cursor?: SchoolUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolUsers.
     */
    skip?: number
    distinct?: SchoolUserScalarFieldEnum | SchoolUserScalarFieldEnum[]
  }

  /**
   * SchoolUser create
   */
  export type SchoolUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolUser.
     */
    data: XOR<SchoolUserCreateInput, SchoolUserUncheckedCreateInput>
  }

  /**
   * SchoolUser createMany
   */
  export type SchoolUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolUsers.
     */
    data: SchoolUserCreateManyInput | SchoolUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolUser createManyAndReturn
   */
  export type SchoolUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolUsers.
     */
    data: SchoolUserCreateManyInput | SchoolUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolUser update
   */
  export type SchoolUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolUser.
     */
    data: XOR<SchoolUserUpdateInput, SchoolUserUncheckedUpdateInput>
    /**
     * Choose, which SchoolUser to update.
     */
    where: SchoolUserWhereUniqueInput
  }

  /**
   * SchoolUser updateMany
   */
  export type SchoolUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolUsers.
     */
    data: XOR<SchoolUserUpdateManyMutationInput, SchoolUserUncheckedUpdateManyInput>
    /**
     * Filter which SchoolUsers to update
     */
    where?: SchoolUserWhereInput
    /**
     * Limit how many SchoolUsers to update.
     */
    limit?: number
  }

  /**
   * SchoolUser updateManyAndReturn
   */
  export type SchoolUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * The data used to update SchoolUsers.
     */
    data: XOR<SchoolUserUpdateManyMutationInput, SchoolUserUncheckedUpdateManyInput>
    /**
     * Filter which SchoolUsers to update
     */
    where?: SchoolUserWhereInput
    /**
     * Limit how many SchoolUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolUser upsert
   */
  export type SchoolUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolUser to update in case it exists.
     */
    where: SchoolUserWhereUniqueInput
    /**
     * In case the SchoolUser found by the `where` argument doesn't exist, create a new SchoolUser with this data.
     */
    create: XOR<SchoolUserCreateInput, SchoolUserUncheckedCreateInput>
    /**
     * In case the SchoolUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUserUpdateInput, SchoolUserUncheckedUpdateInput>
  }

  /**
   * SchoolUser delete
   */
  export type SchoolUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
    /**
     * Filter which SchoolUser to delete.
     */
    where: SchoolUserWhereUniqueInput
  }

  /**
   * SchoolUser deleteMany
   */
  export type SchoolUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolUsers to delete
     */
    where?: SchoolUserWhereInput
    /**
     * Limit how many SchoolUsers to delete.
     */
    limit?: number
  }

  /**
   * SchoolUser without action
   */
  export type SchoolUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolUser
     */
    select?: SchoolUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolUser
     */
    omit?: SchoolUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolUserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    instructorId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    instructorId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    instructorId: number | null
    type: $Enums.SessionType | null
    format: $Enums.SessionFormat | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    instructorId: number | null
    type: $Enums.SessionType | null
    format: $Enums.SessionFormat | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    schoolId: number
    instructorId: number
    type: number
    format: number
    startTime: number
    endTime: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    schoolId?: true
    instructorId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    schoolId?: true
    instructorId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    schoolId?: true
    instructorId?: true
    type?: true
    format?: true
    startTime?: true
    endTime?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    schoolId?: true
    instructorId?: true
    type?: true
    format?: true
    startTime?: true
    endTime?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    schoolId?: true
    instructorId?: true
    type?: true
    format?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    schoolId: number
    instructorId: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date
    endTime: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    instructorId?: boolean
    type?: boolean
    format?: boolean
    startTime?: boolean
    endTime?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
    candidates?: boolean | Session$candidatesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    instructorId?: boolean
    type?: boolean
    format?: boolean
    startTime?: boolean
    endTime?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    instructorId?: boolean
    type?: boolean
    format?: boolean
    startTime?: boolean
    endTime?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    schoolId?: boolean
    instructorId?: boolean
    type?: boolean
    format?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "instructorId" | "type" | "format" | "startTime" | "endTime", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
    candidates?: boolean | Session$candidatesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    instructor?: boolean | Session$instructorArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      instructor: Prisma.$UserPayload<ExtArgs> | null
      candidates: Prisma.$SessionCandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      instructorId: number | null
      type: $Enums.SessionType
      format: $Enums.SessionFormat
      startTime: Date
      endTime: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends Session$instructorArgs<ExtArgs> = {}>(args?: Subset<T, Session$instructorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidates<T extends Session$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Session$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly schoolId: FieldRef<"Session", 'Int'>
    readonly instructorId: FieldRef<"Session", 'Int'>
    readonly type: FieldRef<"Session", 'SessionType'>
    readonly format: FieldRef<"Session", 'SessionFormat'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly endTime: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.instructor
   */
  export type Session$instructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Session.candidates
   */
  export type Session$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    where?: SessionCandidateWhereInput
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    cursor?: SessionCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionCandidateScalarFieldEnum | SessionCandidateScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionCandidate
   */

  export type AggregateSessionCandidate = {
    _count: SessionCandidateCountAggregateOutputType | null
    _avg: SessionCandidateAvgAggregateOutputType | null
    _sum: SessionCandidateSumAggregateOutputType | null
    _min: SessionCandidateMinAggregateOutputType | null
    _max: SessionCandidateMaxAggregateOutputType | null
  }

  export type SessionCandidateAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    candidateId: number | null
  }

  export type SessionCandidateSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    candidateId: number | null
  }

  export type SessionCandidateMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    candidateId: number | null
  }

  export type SessionCandidateMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    candidateId: number | null
  }

  export type SessionCandidateCountAggregateOutputType = {
    id: number
    sessionId: number
    candidateId: number
    _all: number
  }


  export type SessionCandidateAvgAggregateInputType = {
    id?: true
    sessionId?: true
    candidateId?: true
  }

  export type SessionCandidateSumAggregateInputType = {
    id?: true
    sessionId?: true
    candidateId?: true
  }

  export type SessionCandidateMinAggregateInputType = {
    id?: true
    sessionId?: true
    candidateId?: true
  }

  export type SessionCandidateMaxAggregateInputType = {
    id?: true
    sessionId?: true
    candidateId?: true
  }

  export type SessionCandidateCountAggregateInputType = {
    id?: true
    sessionId?: true
    candidateId?: true
    _all?: true
  }

  export type SessionCandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionCandidate to aggregate.
     */
    where?: SessionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCandidates to fetch.
     */
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionCandidates
    **/
    _count?: true | SessionCandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionCandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionCandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionCandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionCandidateMaxAggregateInputType
  }

  export type GetSessionCandidateAggregateType<T extends SessionCandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionCandidate[P]>
      : GetScalarType<T[P], AggregateSessionCandidate[P]>
  }




  export type SessionCandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCandidateWhereInput
    orderBy?: SessionCandidateOrderByWithAggregationInput | SessionCandidateOrderByWithAggregationInput[]
    by: SessionCandidateScalarFieldEnum[] | SessionCandidateScalarFieldEnum
    having?: SessionCandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCandidateCountAggregateInputType | true
    _avg?: SessionCandidateAvgAggregateInputType
    _sum?: SessionCandidateSumAggregateInputType
    _min?: SessionCandidateMinAggregateInputType
    _max?: SessionCandidateMaxAggregateInputType
  }

  export type SessionCandidateGroupByOutputType = {
    id: number
    sessionId: number
    candidateId: number
    _count: SessionCandidateCountAggregateOutputType | null
    _avg: SessionCandidateAvgAggregateOutputType | null
    _sum: SessionCandidateSumAggregateOutputType | null
    _min: SessionCandidateMinAggregateOutputType | null
    _max: SessionCandidateMaxAggregateOutputType | null
  }

  type GetSessionCandidateGroupByPayload<T extends SessionCandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionCandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionCandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionCandidateGroupByOutputType[P]>
            : GetScalarType<T[P], SessionCandidateGroupByOutputType[P]>
        }
      >
    >


  export type SessionCandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    candidateId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCandidate"]>

  export type SessionCandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    candidateId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCandidate"]>

  export type SessionCandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    candidateId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCandidate"]>

  export type SessionCandidateSelectScalar = {
    id?: boolean
    sessionId?: boolean
    candidateId?: boolean
  }

  export type SessionCandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "candidateId", ExtArgs["result"]["sessionCandidate"]>
  export type SessionCandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionCandidate"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      candidate: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      candidateId: number
    }, ExtArgs["result"]["sessionCandidate"]>
    composites: {}
  }

  type SessionCandidateGetPayload<S extends boolean | null | undefined | SessionCandidateDefaultArgs> = $Result.GetResult<Prisma.$SessionCandidatePayload, S>

  type SessionCandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCandidateCountAggregateInputType | true
    }

  export interface SessionCandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionCandidate'], meta: { name: 'SessionCandidate' } }
    /**
     * Find zero or one SessionCandidate that matches the filter.
     * @param {SessionCandidateFindUniqueArgs} args - Arguments to find a SessionCandidate
     * @example
     * // Get one SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionCandidateFindUniqueArgs>(args: SelectSubset<T, SessionCandidateFindUniqueArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionCandidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionCandidateFindUniqueOrThrowArgs} args - Arguments to find a SessionCandidate
     * @example
     * // Get one SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionCandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionCandidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateFindFirstArgs} args - Arguments to find a SessionCandidate
     * @example
     * // Get one SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionCandidateFindFirstArgs>(args?: SelectSubset<T, SessionCandidateFindFirstArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionCandidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateFindFirstOrThrowArgs} args - Arguments to find a SessionCandidate
     * @example
     * // Get one SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionCandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionCandidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionCandidates
     * const sessionCandidates = await prisma.sessionCandidate.findMany()
     * 
     * // Get first 10 SessionCandidates
     * const sessionCandidates = await prisma.sessionCandidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionCandidateWithIdOnly = await prisma.sessionCandidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionCandidateFindManyArgs>(args?: SelectSubset<T, SessionCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionCandidate.
     * @param {SessionCandidateCreateArgs} args - Arguments to create a SessionCandidate.
     * @example
     * // Create one SessionCandidate
     * const SessionCandidate = await prisma.sessionCandidate.create({
     *   data: {
     *     // ... data to create a SessionCandidate
     *   }
     * })
     * 
     */
    create<T extends SessionCandidateCreateArgs>(args: SelectSubset<T, SessionCandidateCreateArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionCandidates.
     * @param {SessionCandidateCreateManyArgs} args - Arguments to create many SessionCandidates.
     * @example
     * // Create many SessionCandidates
     * const sessionCandidate = await prisma.sessionCandidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCandidateCreateManyArgs>(args?: SelectSubset<T, SessionCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionCandidates and returns the data saved in the database.
     * @param {SessionCandidateCreateManyAndReturnArgs} args - Arguments to create many SessionCandidates.
     * @example
     * // Create many SessionCandidates
     * const sessionCandidate = await prisma.sessionCandidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionCandidates and only return the `id`
     * const sessionCandidateWithIdOnly = await prisma.sessionCandidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionCandidate.
     * @param {SessionCandidateDeleteArgs} args - Arguments to delete one SessionCandidate.
     * @example
     * // Delete one SessionCandidate
     * const SessionCandidate = await prisma.sessionCandidate.delete({
     *   where: {
     *     // ... filter to delete one SessionCandidate
     *   }
     * })
     * 
     */
    delete<T extends SessionCandidateDeleteArgs>(args: SelectSubset<T, SessionCandidateDeleteArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionCandidate.
     * @param {SessionCandidateUpdateArgs} args - Arguments to update one SessionCandidate.
     * @example
     * // Update one SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionCandidateUpdateArgs>(args: SelectSubset<T, SessionCandidateUpdateArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionCandidates.
     * @param {SessionCandidateDeleteManyArgs} args - Arguments to filter SessionCandidates to delete.
     * @example
     * // Delete a few SessionCandidates
     * const { count } = await prisma.sessionCandidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionCandidateDeleteManyArgs>(args?: SelectSubset<T, SessionCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionCandidates
     * const sessionCandidate = await prisma.sessionCandidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionCandidateUpdateManyArgs>(args: SelectSubset<T, SessionCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionCandidates and returns the data updated in the database.
     * @param {SessionCandidateUpdateManyAndReturnArgs} args - Arguments to update many SessionCandidates.
     * @example
     * // Update many SessionCandidates
     * const sessionCandidate = await prisma.sessionCandidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionCandidates and only return the `id`
     * const sessionCandidateWithIdOnly = await prisma.sessionCandidate.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionCandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionCandidate.
     * @param {SessionCandidateUpsertArgs} args - Arguments to update or create a SessionCandidate.
     * @example
     * // Update or create a SessionCandidate
     * const sessionCandidate = await prisma.sessionCandidate.upsert({
     *   create: {
     *     // ... data to create a SessionCandidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionCandidate we want to update
     *   }
     * })
     */
    upsert<T extends SessionCandidateUpsertArgs>(args: SelectSubset<T, SessionCandidateUpsertArgs<ExtArgs>>): Prisma__SessionCandidateClient<$Result.GetResult<Prisma.$SessionCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateCountArgs} args - Arguments to filter SessionCandidates to count.
     * @example
     * // Count the number of SessionCandidates
     * const count = await prisma.sessionCandidate.count({
     *   where: {
     *     // ... the filter for the SessionCandidates we want to count
     *   }
     * })
    **/
    count<T extends SessionCandidateCountArgs>(
      args?: Subset<T, SessionCandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionCandidateAggregateArgs>(args: Subset<T, SessionCandidateAggregateArgs>): Prisma.PrismaPromise<GetSessionCandidateAggregateType<T>>

    /**
     * Group by SessionCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCandidateGroupByArgs} args - Group by arguments.
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
      T extends SessionCandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionCandidateGroupByArgs['orderBy'] }
        : { orderBy?: SessionCandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionCandidate model
   */
  readonly fields: SessionCandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionCandidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionCandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionCandidate model
   */
  interface SessionCandidateFieldRefs {
    readonly id: FieldRef<"SessionCandidate", 'Int'>
    readonly sessionId: FieldRef<"SessionCandidate", 'Int'>
    readonly candidateId: FieldRef<"SessionCandidate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SessionCandidate findUnique
   */
  export type SessionCandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which SessionCandidate to fetch.
     */
    where: SessionCandidateWhereUniqueInput
  }

  /**
   * SessionCandidate findUniqueOrThrow
   */
  export type SessionCandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which SessionCandidate to fetch.
     */
    where: SessionCandidateWhereUniqueInput
  }

  /**
   * SessionCandidate findFirst
   */
  export type SessionCandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which SessionCandidate to fetch.
     */
    where?: SessionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCandidates to fetch.
     */
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionCandidates.
     */
    cursor?: SessionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionCandidates.
     */
    distinct?: SessionCandidateScalarFieldEnum | SessionCandidateScalarFieldEnum[]
  }

  /**
   * SessionCandidate findFirstOrThrow
   */
  export type SessionCandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which SessionCandidate to fetch.
     */
    where?: SessionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCandidates to fetch.
     */
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionCandidates.
     */
    cursor?: SessionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionCandidates.
     */
    distinct?: SessionCandidateScalarFieldEnum | SessionCandidateScalarFieldEnum[]
  }

  /**
   * SessionCandidate findMany
   */
  export type SessionCandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter, which SessionCandidates to fetch.
     */
    where?: SessionCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCandidates to fetch.
     */
    orderBy?: SessionCandidateOrderByWithRelationInput | SessionCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionCandidates.
     */
    cursor?: SessionCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCandidates.
     */
    skip?: number
    distinct?: SessionCandidateScalarFieldEnum | SessionCandidateScalarFieldEnum[]
  }

  /**
   * SessionCandidate create
   */
  export type SessionCandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionCandidate.
     */
    data: XOR<SessionCandidateCreateInput, SessionCandidateUncheckedCreateInput>
  }

  /**
   * SessionCandidate createMany
   */
  export type SessionCandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionCandidates.
     */
    data: SessionCandidateCreateManyInput | SessionCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionCandidate createManyAndReturn
   */
  export type SessionCandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * The data used to create many SessionCandidates.
     */
    data: SessionCandidateCreateManyInput | SessionCandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionCandidate update
   */
  export type SessionCandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionCandidate.
     */
    data: XOR<SessionCandidateUpdateInput, SessionCandidateUncheckedUpdateInput>
    /**
     * Choose, which SessionCandidate to update.
     */
    where: SessionCandidateWhereUniqueInput
  }

  /**
   * SessionCandidate updateMany
   */
  export type SessionCandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionCandidates.
     */
    data: XOR<SessionCandidateUpdateManyMutationInput, SessionCandidateUncheckedUpdateManyInput>
    /**
     * Filter which SessionCandidates to update
     */
    where?: SessionCandidateWhereInput
    /**
     * Limit how many SessionCandidates to update.
     */
    limit?: number
  }

  /**
   * SessionCandidate updateManyAndReturn
   */
  export type SessionCandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * The data used to update SessionCandidates.
     */
    data: XOR<SessionCandidateUpdateManyMutationInput, SessionCandidateUncheckedUpdateManyInput>
    /**
     * Filter which SessionCandidates to update
     */
    where?: SessionCandidateWhereInput
    /**
     * Limit how many SessionCandidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionCandidate upsert
   */
  export type SessionCandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionCandidate to update in case it exists.
     */
    where: SessionCandidateWhereUniqueInput
    /**
     * In case the SessionCandidate found by the `where` argument doesn't exist, create a new SessionCandidate with this data.
     */
    create: XOR<SessionCandidateCreateInput, SessionCandidateUncheckedCreateInput>
    /**
     * In case the SessionCandidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionCandidateUpdateInput, SessionCandidateUncheckedUpdateInput>
  }

  /**
   * SessionCandidate delete
   */
  export type SessionCandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
    /**
     * Filter which SessionCandidate to delete.
     */
    where: SessionCandidateWhereUniqueInput
  }

  /**
   * SessionCandidate deleteMany
   */
  export type SessionCandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionCandidates to delete
     */
    where?: SessionCandidateWhereInput
    /**
     * Limit how many SessionCandidates to delete.
     */
    limit?: number
  }

  /**
   * SessionCandidate without action
   */
  export type SessionCandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCandidate
     */
    select?: SessionCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCandidate
     */
    omit?: SessionCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCandidateInclude<ExtArgs> | null
  }


  /**
   * Model CandidateInstructor
   */

  export type AggregateCandidateInstructor = {
    _count: CandidateInstructorCountAggregateOutputType | null
    _avg: CandidateInstructorAvgAggregateOutputType | null
    _sum: CandidateInstructorSumAggregateOutputType | null
    _min: CandidateInstructorMinAggregateOutputType | null
    _max: CandidateInstructorMaxAggregateOutputType | null
  }

  export type CandidateInstructorAvgAggregateOutputType = {
    id: number | null
    instructorId: number | null
    candidateId: number | null
  }

  export type CandidateInstructorSumAggregateOutputType = {
    id: number | null
    instructorId: number | null
    candidateId: number | null
  }

  export type CandidateInstructorMinAggregateOutputType = {
    id: number | null
    instructorId: number | null
    candidateId: number | null
  }

  export type CandidateInstructorMaxAggregateOutputType = {
    id: number | null
    instructorId: number | null
    candidateId: number | null
  }

  export type CandidateInstructorCountAggregateOutputType = {
    id: number
    instructorId: number
    candidateId: number
    _all: number
  }


  export type CandidateInstructorAvgAggregateInputType = {
    id?: true
    instructorId?: true
    candidateId?: true
  }

  export type CandidateInstructorSumAggregateInputType = {
    id?: true
    instructorId?: true
    candidateId?: true
  }

  export type CandidateInstructorMinAggregateInputType = {
    id?: true
    instructorId?: true
    candidateId?: true
  }

  export type CandidateInstructorMaxAggregateInputType = {
    id?: true
    instructorId?: true
    candidateId?: true
  }

  export type CandidateInstructorCountAggregateInputType = {
    id?: true
    instructorId?: true
    candidateId?: true
    _all?: true
  }

  export type CandidateInstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateInstructor to aggregate.
     */
    where?: CandidateInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateInstructors to fetch.
     */
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateInstructors
    **/
    _count?: true | CandidateInstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateInstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateInstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateInstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateInstructorMaxAggregateInputType
  }

  export type GetCandidateInstructorAggregateType<T extends CandidateInstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateInstructor[P]>
      : GetScalarType<T[P], AggregateCandidateInstructor[P]>
  }




  export type CandidateInstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateInstructorWhereInput
    orderBy?: CandidateInstructorOrderByWithAggregationInput | CandidateInstructorOrderByWithAggregationInput[]
    by: CandidateInstructorScalarFieldEnum[] | CandidateInstructorScalarFieldEnum
    having?: CandidateInstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateInstructorCountAggregateInputType | true
    _avg?: CandidateInstructorAvgAggregateInputType
    _sum?: CandidateInstructorSumAggregateInputType
    _min?: CandidateInstructorMinAggregateInputType
    _max?: CandidateInstructorMaxAggregateInputType
  }

  export type CandidateInstructorGroupByOutputType = {
    id: number
    instructorId: number
    candidateId: number
    _count: CandidateInstructorCountAggregateOutputType | null
    _avg: CandidateInstructorAvgAggregateOutputType | null
    _sum: CandidateInstructorSumAggregateOutputType | null
    _min: CandidateInstructorMinAggregateOutputType | null
    _max: CandidateInstructorMaxAggregateOutputType | null
  }

  type GetCandidateInstructorGroupByPayload<T extends CandidateInstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateInstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateInstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateInstructorGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateInstructorGroupByOutputType[P]>
        }
      >
    >


  export type CandidateInstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    candidateId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateInstructor"]>

  export type CandidateInstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    candidateId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateInstructor"]>

  export type CandidateInstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    candidateId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateInstructor"]>

  export type CandidateInstructorSelectScalar = {
    id?: boolean
    instructorId?: boolean
    candidateId?: boolean
  }

  export type CandidateInstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "candidateId", ExtArgs["result"]["candidateInstructor"]>
  export type CandidateInstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateInstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateInstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidateInstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateInstructor"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      candidate: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructorId: number
      candidateId: number
    }, ExtArgs["result"]["candidateInstructor"]>
    composites: {}
  }

  type CandidateInstructorGetPayload<S extends boolean | null | undefined | CandidateInstructorDefaultArgs> = $Result.GetResult<Prisma.$CandidateInstructorPayload, S>

  type CandidateInstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateInstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateInstructorCountAggregateInputType | true
    }

  export interface CandidateInstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateInstructor'], meta: { name: 'CandidateInstructor' } }
    /**
     * Find zero or one CandidateInstructor that matches the filter.
     * @param {CandidateInstructorFindUniqueArgs} args - Arguments to find a CandidateInstructor
     * @example
     * // Get one CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateInstructorFindUniqueArgs>(args: SelectSubset<T, CandidateInstructorFindUniqueArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateInstructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateInstructorFindUniqueOrThrowArgs} args - Arguments to find a CandidateInstructor
     * @example
     * // Get one CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateInstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateInstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateInstructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorFindFirstArgs} args - Arguments to find a CandidateInstructor
     * @example
     * // Get one CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateInstructorFindFirstArgs>(args?: SelectSubset<T, CandidateInstructorFindFirstArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateInstructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorFindFirstOrThrowArgs} args - Arguments to find a CandidateInstructor
     * @example
     * // Get one CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateInstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateInstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateInstructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateInstructors
     * const candidateInstructors = await prisma.candidateInstructor.findMany()
     * 
     * // Get first 10 CandidateInstructors
     * const candidateInstructors = await prisma.candidateInstructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateInstructorWithIdOnly = await prisma.candidateInstructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateInstructorFindManyArgs>(args?: SelectSubset<T, CandidateInstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateInstructor.
     * @param {CandidateInstructorCreateArgs} args - Arguments to create a CandidateInstructor.
     * @example
     * // Create one CandidateInstructor
     * const CandidateInstructor = await prisma.candidateInstructor.create({
     *   data: {
     *     // ... data to create a CandidateInstructor
     *   }
     * })
     * 
     */
    create<T extends CandidateInstructorCreateArgs>(args: SelectSubset<T, CandidateInstructorCreateArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateInstructors.
     * @param {CandidateInstructorCreateManyArgs} args - Arguments to create many CandidateInstructors.
     * @example
     * // Create many CandidateInstructors
     * const candidateInstructor = await prisma.candidateInstructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateInstructorCreateManyArgs>(args?: SelectSubset<T, CandidateInstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateInstructors and returns the data saved in the database.
     * @param {CandidateInstructorCreateManyAndReturnArgs} args - Arguments to create many CandidateInstructors.
     * @example
     * // Create many CandidateInstructors
     * const candidateInstructor = await prisma.candidateInstructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateInstructors and only return the `id`
     * const candidateInstructorWithIdOnly = await prisma.candidateInstructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateInstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateInstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateInstructor.
     * @param {CandidateInstructorDeleteArgs} args - Arguments to delete one CandidateInstructor.
     * @example
     * // Delete one CandidateInstructor
     * const CandidateInstructor = await prisma.candidateInstructor.delete({
     *   where: {
     *     // ... filter to delete one CandidateInstructor
     *   }
     * })
     * 
     */
    delete<T extends CandidateInstructorDeleteArgs>(args: SelectSubset<T, CandidateInstructorDeleteArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateInstructor.
     * @param {CandidateInstructorUpdateArgs} args - Arguments to update one CandidateInstructor.
     * @example
     * // Update one CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateInstructorUpdateArgs>(args: SelectSubset<T, CandidateInstructorUpdateArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateInstructors.
     * @param {CandidateInstructorDeleteManyArgs} args - Arguments to filter CandidateInstructors to delete.
     * @example
     * // Delete a few CandidateInstructors
     * const { count } = await prisma.candidateInstructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateInstructorDeleteManyArgs>(args?: SelectSubset<T, CandidateInstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateInstructors
     * const candidateInstructor = await prisma.candidateInstructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateInstructorUpdateManyArgs>(args: SelectSubset<T, CandidateInstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateInstructors and returns the data updated in the database.
     * @param {CandidateInstructorUpdateManyAndReturnArgs} args - Arguments to update many CandidateInstructors.
     * @example
     * // Update many CandidateInstructors
     * const candidateInstructor = await prisma.candidateInstructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateInstructors and only return the `id`
     * const candidateInstructorWithIdOnly = await prisma.candidateInstructor.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidateInstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateInstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateInstructor.
     * @param {CandidateInstructorUpsertArgs} args - Arguments to update or create a CandidateInstructor.
     * @example
     * // Update or create a CandidateInstructor
     * const candidateInstructor = await prisma.candidateInstructor.upsert({
     *   create: {
     *     // ... data to create a CandidateInstructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateInstructor we want to update
     *   }
     * })
     */
    upsert<T extends CandidateInstructorUpsertArgs>(args: SelectSubset<T, CandidateInstructorUpsertArgs<ExtArgs>>): Prisma__CandidateInstructorClient<$Result.GetResult<Prisma.$CandidateInstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorCountArgs} args - Arguments to filter CandidateInstructors to count.
     * @example
     * // Count the number of CandidateInstructors
     * const count = await prisma.candidateInstructor.count({
     *   where: {
     *     // ... the filter for the CandidateInstructors we want to count
     *   }
     * })
    **/
    count<T extends CandidateInstructorCountArgs>(
      args?: Subset<T, CandidateInstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateInstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateInstructorAggregateArgs>(args: Subset<T, CandidateInstructorAggregateArgs>): Prisma.PrismaPromise<GetCandidateInstructorAggregateType<T>>

    /**
     * Group by CandidateInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateInstructorGroupByArgs} args - Group by arguments.
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
      T extends CandidateInstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateInstructorGroupByArgs['orderBy'] }
        : { orderBy?: CandidateInstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateInstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateInstructor model
   */
  readonly fields: CandidateInstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateInstructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateInstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CandidateInstructor model
   */
  interface CandidateInstructorFieldRefs {
    readonly id: FieldRef<"CandidateInstructor", 'Int'>
    readonly instructorId: FieldRef<"CandidateInstructor", 'Int'>
    readonly candidateId: FieldRef<"CandidateInstructor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CandidateInstructor findUnique
   */
  export type CandidateInstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter, which CandidateInstructor to fetch.
     */
    where: CandidateInstructorWhereUniqueInput
  }

  /**
   * CandidateInstructor findUniqueOrThrow
   */
  export type CandidateInstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter, which CandidateInstructor to fetch.
     */
    where: CandidateInstructorWhereUniqueInput
  }

  /**
   * CandidateInstructor findFirst
   */
  export type CandidateInstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter, which CandidateInstructor to fetch.
     */
    where?: CandidateInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateInstructors to fetch.
     */
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateInstructors.
     */
    cursor?: CandidateInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateInstructors.
     */
    distinct?: CandidateInstructorScalarFieldEnum | CandidateInstructorScalarFieldEnum[]
  }

  /**
   * CandidateInstructor findFirstOrThrow
   */
  export type CandidateInstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter, which CandidateInstructor to fetch.
     */
    where?: CandidateInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateInstructors to fetch.
     */
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateInstructors.
     */
    cursor?: CandidateInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateInstructors.
     */
    distinct?: CandidateInstructorScalarFieldEnum | CandidateInstructorScalarFieldEnum[]
  }

  /**
   * CandidateInstructor findMany
   */
  export type CandidateInstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter, which CandidateInstructors to fetch.
     */
    where?: CandidateInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateInstructors to fetch.
     */
    orderBy?: CandidateInstructorOrderByWithRelationInput | CandidateInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateInstructors.
     */
    cursor?: CandidateInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateInstructors.
     */
    skip?: number
    distinct?: CandidateInstructorScalarFieldEnum | CandidateInstructorScalarFieldEnum[]
  }

  /**
   * CandidateInstructor create
   */
  export type CandidateInstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateInstructor.
     */
    data: XOR<CandidateInstructorCreateInput, CandidateInstructorUncheckedCreateInput>
  }

  /**
   * CandidateInstructor createMany
   */
  export type CandidateInstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateInstructors.
     */
    data: CandidateInstructorCreateManyInput | CandidateInstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateInstructor createManyAndReturn
   */
  export type CandidateInstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateInstructors.
     */
    data: CandidateInstructorCreateManyInput | CandidateInstructorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateInstructor update
   */
  export type CandidateInstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateInstructor.
     */
    data: XOR<CandidateInstructorUpdateInput, CandidateInstructorUncheckedUpdateInput>
    /**
     * Choose, which CandidateInstructor to update.
     */
    where: CandidateInstructorWhereUniqueInput
  }

  /**
   * CandidateInstructor updateMany
   */
  export type CandidateInstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateInstructors.
     */
    data: XOR<CandidateInstructorUpdateManyMutationInput, CandidateInstructorUncheckedUpdateManyInput>
    /**
     * Filter which CandidateInstructors to update
     */
    where?: CandidateInstructorWhereInput
    /**
     * Limit how many CandidateInstructors to update.
     */
    limit?: number
  }

  /**
   * CandidateInstructor updateManyAndReturn
   */
  export type CandidateInstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * The data used to update CandidateInstructors.
     */
    data: XOR<CandidateInstructorUpdateManyMutationInput, CandidateInstructorUncheckedUpdateManyInput>
    /**
     * Filter which CandidateInstructors to update
     */
    where?: CandidateInstructorWhereInput
    /**
     * Limit how many CandidateInstructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateInstructor upsert
   */
  export type CandidateInstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateInstructor to update in case it exists.
     */
    where: CandidateInstructorWhereUniqueInput
    /**
     * In case the CandidateInstructor found by the `where` argument doesn't exist, create a new CandidateInstructor with this data.
     */
    create: XOR<CandidateInstructorCreateInput, CandidateInstructorUncheckedCreateInput>
    /**
     * In case the CandidateInstructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateInstructorUpdateInput, CandidateInstructorUncheckedUpdateInput>
  }

  /**
   * CandidateInstructor delete
   */
  export type CandidateInstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
    /**
     * Filter which CandidateInstructor to delete.
     */
    where: CandidateInstructorWhereUniqueInput
  }

  /**
   * CandidateInstructor deleteMany
   */
  export type CandidateInstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateInstructors to delete
     */
    where?: CandidateInstructorWhereInput
    /**
     * Limit how many CandidateInstructors to delete.
     */
    limit?: number
  }

  /**
   * CandidateInstructor without action
   */
  export type CandidateInstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateInstructor
     */
    select?: CandidateInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateInstructor
     */
    omit?: CandidateInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInstructorInclude<ExtArgs> | null
  }


  /**
   * Model InstructorSlot
   */

  export type AggregateInstructorSlot = {
    _count: InstructorSlotCountAggregateOutputType | null
    _avg: InstructorSlotAvgAggregateOutputType | null
    _sum: InstructorSlotSumAggregateOutputType | null
    _min: InstructorSlotMinAggregateOutputType | null
    _max: InstructorSlotMaxAggregateOutputType | null
  }

  export type InstructorSlotAvgAggregateOutputType = {
    id: number | null
    instructorId: number | null
  }

  export type InstructorSlotSumAggregateOutputType = {
    id: number | null
    instructorId: number | null
  }

  export type InstructorSlotMinAggregateOutputType = {
    id: number | null
    instructorId: number | null
    day: $Enums.Day | null
    startTime: Date | null
  }

  export type InstructorSlotMaxAggregateOutputType = {
    id: number | null
    instructorId: number | null
    day: $Enums.Day | null
    startTime: Date | null
  }

  export type InstructorSlotCountAggregateOutputType = {
    id: number
    instructorId: number
    day: number
    startTime: number
    _all: number
  }


  export type InstructorSlotAvgAggregateInputType = {
    id?: true
    instructorId?: true
  }

  export type InstructorSlotSumAggregateInputType = {
    id?: true
    instructorId?: true
  }

  export type InstructorSlotMinAggregateInputType = {
    id?: true
    instructorId?: true
    day?: true
    startTime?: true
  }

  export type InstructorSlotMaxAggregateInputType = {
    id?: true
    instructorId?: true
    day?: true
    startTime?: true
  }

  export type InstructorSlotCountAggregateInputType = {
    id?: true
    instructorId?: true
    day?: true
    startTime?: true
    _all?: true
  }

  export type InstructorSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorSlot to aggregate.
     */
    where?: InstructorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorSlots to fetch.
     */
    orderBy?: InstructorSlotOrderByWithRelationInput | InstructorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorSlots
    **/
    _count?: true | InstructorSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorSlotMaxAggregateInputType
  }

  export type GetInstructorSlotAggregateType<T extends InstructorSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorSlot[P]>
      : GetScalarType<T[P], AggregateInstructorSlot[P]>
  }




  export type InstructorSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorSlotWhereInput
    orderBy?: InstructorSlotOrderByWithAggregationInput | InstructorSlotOrderByWithAggregationInput[]
    by: InstructorSlotScalarFieldEnum[] | InstructorSlotScalarFieldEnum
    having?: InstructorSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorSlotCountAggregateInputType | true
    _avg?: InstructorSlotAvgAggregateInputType
    _sum?: InstructorSlotSumAggregateInputType
    _min?: InstructorSlotMinAggregateInputType
    _max?: InstructorSlotMaxAggregateInputType
  }

  export type InstructorSlotGroupByOutputType = {
    id: number
    instructorId: number
    day: $Enums.Day
    startTime: Date
    _count: InstructorSlotCountAggregateOutputType | null
    _avg: InstructorSlotAvgAggregateOutputType | null
    _sum: InstructorSlotSumAggregateOutputType | null
    _min: InstructorSlotMinAggregateOutputType | null
    _max: InstructorSlotMaxAggregateOutputType | null
  }

  type GetInstructorSlotGroupByPayload<T extends InstructorSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorSlotGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorSlotGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    day?: boolean
    startTime?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorSlot"]>

  export type InstructorSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    day?: boolean
    startTime?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorSlot"]>

  export type InstructorSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    day?: boolean
    startTime?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorSlot"]>

  export type InstructorSlotSelectScalar = {
    id?: boolean
    instructorId?: boolean
    day?: boolean
    startTime?: boolean
  }

  export type InstructorSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "day" | "startTime", ExtArgs["result"]["instructorSlot"]>
  export type InstructorSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstructorSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorSlot"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructorId: number
      day: $Enums.Day
      startTime: Date
    }, ExtArgs["result"]["instructorSlot"]>
    composites: {}
  }

  type InstructorSlotGetPayload<S extends boolean | null | undefined | InstructorSlotDefaultArgs> = $Result.GetResult<Prisma.$InstructorSlotPayload, S>

  type InstructorSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorSlotCountAggregateInputType | true
    }

  export interface InstructorSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorSlot'], meta: { name: 'InstructorSlot' } }
    /**
     * Find zero or one InstructorSlot that matches the filter.
     * @param {InstructorSlotFindUniqueArgs} args - Arguments to find a InstructorSlot
     * @example
     * // Get one InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorSlotFindUniqueArgs>(args: SelectSubset<T, InstructorSlotFindUniqueArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorSlotFindUniqueOrThrowArgs} args - Arguments to find a InstructorSlot
     * @example
     * // Get one InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotFindFirstArgs} args - Arguments to find a InstructorSlot
     * @example
     * // Get one InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorSlotFindFirstArgs>(args?: SelectSubset<T, InstructorSlotFindFirstArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotFindFirstOrThrowArgs} args - Arguments to find a InstructorSlot
     * @example
     * // Get one InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorSlots
     * const instructorSlots = await prisma.instructorSlot.findMany()
     * 
     * // Get first 10 InstructorSlots
     * const instructorSlots = await prisma.instructorSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorSlotWithIdOnly = await prisma.instructorSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorSlotFindManyArgs>(args?: SelectSubset<T, InstructorSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorSlot.
     * @param {InstructorSlotCreateArgs} args - Arguments to create a InstructorSlot.
     * @example
     * // Create one InstructorSlot
     * const InstructorSlot = await prisma.instructorSlot.create({
     *   data: {
     *     // ... data to create a InstructorSlot
     *   }
     * })
     * 
     */
    create<T extends InstructorSlotCreateArgs>(args: SelectSubset<T, InstructorSlotCreateArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorSlots.
     * @param {InstructorSlotCreateManyArgs} args - Arguments to create many InstructorSlots.
     * @example
     * // Create many InstructorSlots
     * const instructorSlot = await prisma.instructorSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorSlotCreateManyArgs>(args?: SelectSubset<T, InstructorSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorSlots and returns the data saved in the database.
     * @param {InstructorSlotCreateManyAndReturnArgs} args - Arguments to create many InstructorSlots.
     * @example
     * // Create many InstructorSlots
     * const instructorSlot = await prisma.instructorSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorSlots and only return the `id`
     * const instructorSlotWithIdOnly = await prisma.instructorSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorSlot.
     * @param {InstructorSlotDeleteArgs} args - Arguments to delete one InstructorSlot.
     * @example
     * // Delete one InstructorSlot
     * const InstructorSlot = await prisma.instructorSlot.delete({
     *   where: {
     *     // ... filter to delete one InstructorSlot
     *   }
     * })
     * 
     */
    delete<T extends InstructorSlotDeleteArgs>(args: SelectSubset<T, InstructorSlotDeleteArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorSlot.
     * @param {InstructorSlotUpdateArgs} args - Arguments to update one InstructorSlot.
     * @example
     * // Update one InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorSlotUpdateArgs>(args: SelectSubset<T, InstructorSlotUpdateArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorSlots.
     * @param {InstructorSlotDeleteManyArgs} args - Arguments to filter InstructorSlots to delete.
     * @example
     * // Delete a few InstructorSlots
     * const { count } = await prisma.instructorSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorSlotDeleteManyArgs>(args?: SelectSubset<T, InstructorSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorSlots
     * const instructorSlot = await prisma.instructorSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorSlotUpdateManyArgs>(args: SelectSubset<T, InstructorSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorSlots and returns the data updated in the database.
     * @param {InstructorSlotUpdateManyAndReturnArgs} args - Arguments to update many InstructorSlots.
     * @example
     * // Update many InstructorSlots
     * const instructorSlot = await prisma.instructorSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorSlots and only return the `id`
     * const instructorSlotWithIdOnly = await prisma.instructorSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorSlot.
     * @param {InstructorSlotUpsertArgs} args - Arguments to update or create a InstructorSlot.
     * @example
     * // Update or create a InstructorSlot
     * const instructorSlot = await prisma.instructorSlot.upsert({
     *   create: {
     *     // ... data to create a InstructorSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorSlot we want to update
     *   }
     * })
     */
    upsert<T extends InstructorSlotUpsertArgs>(args: SelectSubset<T, InstructorSlotUpsertArgs<ExtArgs>>): Prisma__InstructorSlotClient<$Result.GetResult<Prisma.$InstructorSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotCountArgs} args - Arguments to filter InstructorSlots to count.
     * @example
     * // Count the number of InstructorSlots
     * const count = await prisma.instructorSlot.count({
     *   where: {
     *     // ... the filter for the InstructorSlots we want to count
     *   }
     * })
    **/
    count<T extends InstructorSlotCountArgs>(
      args?: Subset<T, InstructorSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorSlotAggregateArgs>(args: Subset<T, InstructorSlotAggregateArgs>): Prisma.PrismaPromise<GetInstructorSlotAggregateType<T>>

    /**
     * Group by InstructorSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorSlotGroupByArgs} args - Group by arguments.
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
      T extends InstructorSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorSlotGroupByArgs['orderBy'] }
        : { orderBy?: InstructorSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorSlot model
   */
  readonly fields: InstructorSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstructorSlot model
   */
  interface InstructorSlotFieldRefs {
    readonly id: FieldRef<"InstructorSlot", 'Int'>
    readonly instructorId: FieldRef<"InstructorSlot", 'Int'>
    readonly day: FieldRef<"InstructorSlot", 'Day'>
    readonly startTime: FieldRef<"InstructorSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstructorSlot findUnique
   */
  export type InstructorSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter, which InstructorSlot to fetch.
     */
    where: InstructorSlotWhereUniqueInput
  }

  /**
   * InstructorSlot findUniqueOrThrow
   */
  export type InstructorSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter, which InstructorSlot to fetch.
     */
    where: InstructorSlotWhereUniqueInput
  }

  /**
   * InstructorSlot findFirst
   */
  export type InstructorSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter, which InstructorSlot to fetch.
     */
    where?: InstructorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorSlots to fetch.
     */
    orderBy?: InstructorSlotOrderByWithRelationInput | InstructorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorSlots.
     */
    cursor?: InstructorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorSlots.
     */
    distinct?: InstructorSlotScalarFieldEnum | InstructorSlotScalarFieldEnum[]
  }

  /**
   * InstructorSlot findFirstOrThrow
   */
  export type InstructorSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter, which InstructorSlot to fetch.
     */
    where?: InstructorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorSlots to fetch.
     */
    orderBy?: InstructorSlotOrderByWithRelationInput | InstructorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorSlots.
     */
    cursor?: InstructorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorSlots.
     */
    distinct?: InstructorSlotScalarFieldEnum | InstructorSlotScalarFieldEnum[]
  }

  /**
   * InstructorSlot findMany
   */
  export type InstructorSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter, which InstructorSlots to fetch.
     */
    where?: InstructorSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorSlots to fetch.
     */
    orderBy?: InstructorSlotOrderByWithRelationInput | InstructorSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorSlots.
     */
    cursor?: InstructorSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorSlots.
     */
    skip?: number
    distinct?: InstructorSlotScalarFieldEnum | InstructorSlotScalarFieldEnum[]
  }

  /**
   * InstructorSlot create
   */
  export type InstructorSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorSlot.
     */
    data: XOR<InstructorSlotCreateInput, InstructorSlotUncheckedCreateInput>
  }

  /**
   * InstructorSlot createMany
   */
  export type InstructorSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorSlots.
     */
    data: InstructorSlotCreateManyInput | InstructorSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstructorSlot createManyAndReturn
   */
  export type InstructorSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorSlots.
     */
    data: InstructorSlotCreateManyInput | InstructorSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorSlot update
   */
  export type InstructorSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorSlot.
     */
    data: XOR<InstructorSlotUpdateInput, InstructorSlotUncheckedUpdateInput>
    /**
     * Choose, which InstructorSlot to update.
     */
    where: InstructorSlotWhereUniqueInput
  }

  /**
   * InstructorSlot updateMany
   */
  export type InstructorSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorSlots.
     */
    data: XOR<InstructorSlotUpdateManyMutationInput, InstructorSlotUncheckedUpdateManyInput>
    /**
     * Filter which InstructorSlots to update
     */
    where?: InstructorSlotWhereInput
    /**
     * Limit how many InstructorSlots to update.
     */
    limit?: number
  }

  /**
   * InstructorSlot updateManyAndReturn
   */
  export type InstructorSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * The data used to update InstructorSlots.
     */
    data: XOR<InstructorSlotUpdateManyMutationInput, InstructorSlotUncheckedUpdateManyInput>
    /**
     * Filter which InstructorSlots to update
     */
    where?: InstructorSlotWhereInput
    /**
     * Limit how many InstructorSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorSlot upsert
   */
  export type InstructorSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorSlot to update in case it exists.
     */
    where: InstructorSlotWhereUniqueInput
    /**
     * In case the InstructorSlot found by the `where` argument doesn't exist, create a new InstructorSlot with this data.
     */
    create: XOR<InstructorSlotCreateInput, InstructorSlotUncheckedCreateInput>
    /**
     * In case the InstructorSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorSlotUpdateInput, InstructorSlotUncheckedUpdateInput>
  }

  /**
   * InstructorSlot delete
   */
  export type InstructorSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
    /**
     * Filter which InstructorSlot to delete.
     */
    where: InstructorSlotWhereUniqueInput
  }

  /**
   * InstructorSlot deleteMany
   */
  export type InstructorSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorSlots to delete
     */
    where?: InstructorSlotWhereInput
    /**
     * Limit how many InstructorSlots to delete.
     */
    limit?: number
  }

  /**
   * InstructorSlot without action
   */
  export type InstructorSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorSlot
     */
    select?: InstructorSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorSlot
     */
    omit?: InstructorSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorSlotInclude<ExtArgs> | null
  }


  /**
   * Model TestResult
   */

  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    id: number | null
    candidateId: number | null
    points: Decimal | null
  }

  export type TestResultSumAggregateOutputType = {
    id: number | null
    candidateId: number | null
    points: Decimal | null
  }

  export type TestResultMinAggregateOutputType = {
    id: number | null
    candidateId: number | null
    date: Date | null
    type: $Enums.SessionType | null
    points: Decimal | null
    passed: boolean | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: number | null
    candidateId: number | null
    date: Date | null
    type: $Enums.SessionType | null
    points: Decimal | null
    passed: boolean | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    candidateId: number
    date: number
    type: number
    points: number
    passed: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    id?: true
    candidateId?: true
    points?: true
  }

  export type TestResultSumAggregateInputType = {
    id?: true
    candidateId?: true
    points?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    candidateId?: true
    date?: true
    type?: true
    points?: true
    passed?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    candidateId?: true
    date?: true
    type?: true
    points?: true
    passed?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    candidateId?: true
    date?: true
    type?: true
    points?: true
    passed?: true
    _all?: true
  }

  export type TestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithAggregationInput | TestResultOrderByWithAggregationInput[]
    by: TestResultScalarFieldEnum[] | TestResultScalarFieldEnum
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }

  export type TestResultGroupByOutputType = {
    id: number
    candidateId: number
    date: Date
    type: $Enums.SessionType
    points: Decimal | null
    passed: boolean
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    date?: boolean
    type?: boolean
    points?: boolean
    passed?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    date?: boolean
    type?: boolean
    points?: boolean
    passed?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    date?: boolean
    type?: boolean
    points?: boolean
    passed?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectScalar = {
    id?: boolean
    candidateId?: boolean
    date?: boolean
    type?: boolean
    points?: boolean
    passed?: boolean
  }

  export type TestResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "date" | "type" | "points" | "passed", ExtArgs["result"]["testResult"]>
  export type TestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResult"
    objects: {
      candidate: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateId: number
      date: Date
      type: $Enums.SessionType
      points: Prisma.Decimal | null
      passed: boolean
    }, ExtArgs["result"]["testResult"]>
    composites: {}
  }

  type TestResultGetPayload<S extends boolean | null | undefined | TestResultDefaultArgs> = $Result.GetResult<Prisma.$TestResultPayload, S>

  type TestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResult'], meta: { name: 'TestResult' } }
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultFindUniqueArgs>(args: SelectSubset<T, TestResultFindUniqueArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultFindFirstArgs>(args?: SelectSubset<T, TestResultFindFirstArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultFindManyArgs>(args?: SelectSubset<T, TestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
     */
    create<T extends TestResultCreateArgs>(args: SelectSubset<T, TestResultCreateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestResults.
     * @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultCreateManyArgs>(args?: SelectSubset<T, TestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
     */
    delete<T extends TestResultDeleteArgs>(args: SelectSubset<T, TestResultDeleteArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultUpdateArgs>(args: SelectSubset<T, TestResultUpdateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultDeleteManyArgs>(args?: SelectSubset<T, TestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultUpdateManyArgs>(args: SelectSubset<T, TestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults and returns the data updated in the database.
     * @param {TestResultUpdateManyAndReturnArgs} args - Arguments to update many TestResults.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
     */
    upsert<T extends TestResultUpsertArgs>(args: SelectSubset<T, TestResultUpsertArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResult model
   */
  readonly fields: TestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestResult model
   */
  interface TestResultFieldRefs {
    readonly id: FieldRef<"TestResult", 'Int'>
    readonly candidateId: FieldRef<"TestResult", 'Int'>
    readonly date: FieldRef<"TestResult", 'DateTime'>
    readonly type: FieldRef<"TestResult", 'SessionType'>
    readonly points: FieldRef<"TestResult", 'Decimal'>
    readonly passed: FieldRef<"TestResult", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult create
   */
  export type TestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }

  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestResult createManyAndReturn
   */
  export type TestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult update
   */
  export type TestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
  }

  /**
   * TestResult updateManyAndReturn
   */
  export type TestResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }

  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to delete.
     */
    limit?: number
  }

  /**
   * TestResult without action
   */
  export type TestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
  }


  /**
   * Model EnrollmentRequest
   */

  export type AggregateEnrollmentRequest = {
    _count: EnrollmentRequestCountAggregateOutputType | null
    _avg: EnrollmentRequestAvgAggregateOutputType | null
    _sum: EnrollmentRequestSumAggregateOutputType | null
    _min: EnrollmentRequestMinAggregateOutputType | null
    _max: EnrollmentRequestMaxAggregateOutputType | null
  }

  export type EnrollmentRequestAvgAggregateOutputType = {
    id: number | null
    candidateId: number | null
    schoolId: number | null
  }

  export type EnrollmentRequestSumAggregateOutputType = {
    id: number | null
    candidateId: number | null
    schoolId: number | null
  }

  export type EnrollmentRequestMinAggregateOutputType = {
    id: number | null
    candidateId: number | null
    schoolId: number | null
    status: $Enums.EnrollmentStatus | null
  }

  export type EnrollmentRequestMaxAggregateOutputType = {
    id: number | null
    candidateId: number | null
    schoolId: number | null
    status: $Enums.EnrollmentStatus | null
  }

  export type EnrollmentRequestCountAggregateOutputType = {
    id: number
    candidateId: number
    schoolId: number
    status: number
    _all: number
  }


  export type EnrollmentRequestAvgAggregateInputType = {
    id?: true
    candidateId?: true
    schoolId?: true
  }

  export type EnrollmentRequestSumAggregateInputType = {
    id?: true
    candidateId?: true
    schoolId?: true
  }

  export type EnrollmentRequestMinAggregateInputType = {
    id?: true
    candidateId?: true
    schoolId?: true
    status?: true
  }

  export type EnrollmentRequestMaxAggregateInputType = {
    id?: true
    candidateId?: true
    schoolId?: true
    status?: true
  }

  export type EnrollmentRequestCountAggregateInputType = {
    id?: true
    candidateId?: true
    schoolId?: true
    status?: true
    _all?: true
  }

  export type EnrollmentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrollmentRequest to aggregate.
     */
    where?: EnrollmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrollmentRequests to fetch.
     */
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrollmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrollmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrollmentRequests
    **/
    _count?: true | EnrollmentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentRequestMaxAggregateInputType
  }

  export type GetEnrollmentRequestAggregateType<T extends EnrollmentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollmentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollmentRequest[P]>
      : GetScalarType<T[P], AggregateEnrollmentRequest[P]>
  }




  export type EnrollmentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentRequestWhereInput
    orderBy?: EnrollmentRequestOrderByWithAggregationInput | EnrollmentRequestOrderByWithAggregationInput[]
    by: EnrollmentRequestScalarFieldEnum[] | EnrollmentRequestScalarFieldEnum
    having?: EnrollmentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentRequestCountAggregateInputType | true
    _avg?: EnrollmentRequestAvgAggregateInputType
    _sum?: EnrollmentRequestSumAggregateInputType
    _min?: EnrollmentRequestMinAggregateInputType
    _max?: EnrollmentRequestMaxAggregateInputType
  }

  export type EnrollmentRequestGroupByOutputType = {
    id: number
    candidateId: number
    schoolId: number
    status: $Enums.EnrollmentStatus
    _count: EnrollmentRequestCountAggregateOutputType | null
    _avg: EnrollmentRequestAvgAggregateOutputType | null
    _sum: EnrollmentRequestSumAggregateOutputType | null
    _min: EnrollmentRequestMinAggregateOutputType | null
    _max: EnrollmentRequestMaxAggregateOutputType | null
  }

  type GetEnrollmentRequestGroupByPayload<T extends EnrollmentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentRequestGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    schoolId?: boolean
    status?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollmentRequest"]>

  export type EnrollmentRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    schoolId?: boolean
    status?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollmentRequest"]>

  export type EnrollmentRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    schoolId?: boolean
    status?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollmentRequest"]>

  export type EnrollmentRequestSelectScalar = {
    id?: boolean
    candidateId?: boolean
    schoolId?: boolean
    status?: boolean
  }

  export type EnrollmentRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "schoolId" | "status", ExtArgs["result"]["enrollmentRequest"]>
  export type EnrollmentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type EnrollmentRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type EnrollmentRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $EnrollmentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrollmentRequest"
    objects: {
      candidate: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateId: number
      schoolId: number
      status: $Enums.EnrollmentStatus
    }, ExtArgs["result"]["enrollmentRequest"]>
    composites: {}
  }

  type EnrollmentRequestGetPayload<S extends boolean | null | undefined | EnrollmentRequestDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentRequestPayload, S>

  type EnrollmentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentRequestCountAggregateInputType | true
    }

  export interface EnrollmentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrollmentRequest'], meta: { name: 'EnrollmentRequest' } }
    /**
     * Find zero or one EnrollmentRequest that matches the filter.
     * @param {EnrollmentRequestFindUniqueArgs} args - Arguments to find a EnrollmentRequest
     * @example
     * // Get one EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentRequestFindUniqueArgs>(args: SelectSubset<T, EnrollmentRequestFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrollmentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentRequestFindUniqueOrThrowArgs} args - Arguments to find a EnrollmentRequest
     * @example
     * // Get one EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrollmentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestFindFirstArgs} args - Arguments to find a EnrollmentRequest
     * @example
     * // Get one EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentRequestFindFirstArgs>(args?: SelectSubset<T, EnrollmentRequestFindFirstArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrollmentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestFindFirstOrThrowArgs} args - Arguments to find a EnrollmentRequest
     * @example
     * // Get one EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrollmentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrollmentRequests
     * const enrollmentRequests = await prisma.enrollmentRequest.findMany()
     * 
     * // Get first 10 EnrollmentRequests
     * const enrollmentRequests = await prisma.enrollmentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentRequestWithIdOnly = await prisma.enrollmentRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentRequestFindManyArgs>(args?: SelectSubset<T, EnrollmentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrollmentRequest.
     * @param {EnrollmentRequestCreateArgs} args - Arguments to create a EnrollmentRequest.
     * @example
     * // Create one EnrollmentRequest
     * const EnrollmentRequest = await prisma.enrollmentRequest.create({
     *   data: {
     *     // ... data to create a EnrollmentRequest
     *   }
     * })
     * 
     */
    create<T extends EnrollmentRequestCreateArgs>(args: SelectSubset<T, EnrollmentRequestCreateArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrollmentRequests.
     * @param {EnrollmentRequestCreateManyArgs} args - Arguments to create many EnrollmentRequests.
     * @example
     * // Create many EnrollmentRequests
     * const enrollmentRequest = await prisma.enrollmentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentRequestCreateManyArgs>(args?: SelectSubset<T, EnrollmentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrollmentRequests and returns the data saved in the database.
     * @param {EnrollmentRequestCreateManyAndReturnArgs} args - Arguments to create many EnrollmentRequests.
     * @example
     * // Create many EnrollmentRequests
     * const enrollmentRequest = await prisma.enrollmentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrollmentRequests and only return the `id`
     * const enrollmentRequestWithIdOnly = await prisma.enrollmentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrollmentRequest.
     * @param {EnrollmentRequestDeleteArgs} args - Arguments to delete one EnrollmentRequest.
     * @example
     * // Delete one EnrollmentRequest
     * const EnrollmentRequest = await prisma.enrollmentRequest.delete({
     *   where: {
     *     // ... filter to delete one EnrollmentRequest
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentRequestDeleteArgs>(args: SelectSubset<T, EnrollmentRequestDeleteArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrollmentRequest.
     * @param {EnrollmentRequestUpdateArgs} args - Arguments to update one EnrollmentRequest.
     * @example
     * // Update one EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentRequestUpdateArgs>(args: SelectSubset<T, EnrollmentRequestUpdateArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrollmentRequests.
     * @param {EnrollmentRequestDeleteManyArgs} args - Arguments to filter EnrollmentRequests to delete.
     * @example
     * // Delete a few EnrollmentRequests
     * const { count } = await prisma.enrollmentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentRequestDeleteManyArgs>(args?: SelectSubset<T, EnrollmentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrollmentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrollmentRequests
     * const enrollmentRequest = await prisma.enrollmentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentRequestUpdateManyArgs>(args: SelectSubset<T, EnrollmentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrollmentRequests and returns the data updated in the database.
     * @param {EnrollmentRequestUpdateManyAndReturnArgs} args - Arguments to update many EnrollmentRequests.
     * @example
     * // Update many EnrollmentRequests
     * const enrollmentRequest = await prisma.enrollmentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrollmentRequests and only return the `id`
     * const enrollmentRequestWithIdOnly = await prisma.enrollmentRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrollmentRequest.
     * @param {EnrollmentRequestUpsertArgs} args - Arguments to update or create a EnrollmentRequest.
     * @example
     * // Update or create a EnrollmentRequest
     * const enrollmentRequest = await prisma.enrollmentRequest.upsert({
     *   create: {
     *     // ... data to create a EnrollmentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrollmentRequest we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentRequestUpsertArgs>(args: SelectSubset<T, EnrollmentRequestUpsertArgs<ExtArgs>>): Prisma__EnrollmentRequestClient<$Result.GetResult<Prisma.$EnrollmentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrollmentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestCountArgs} args - Arguments to filter EnrollmentRequests to count.
     * @example
     * // Count the number of EnrollmentRequests
     * const count = await prisma.enrollmentRequest.count({
     *   where: {
     *     // ... the filter for the EnrollmentRequests we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentRequestCountArgs>(
      args?: Subset<T, EnrollmentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrollmentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentRequestAggregateArgs>(args: Subset<T, EnrollmentRequestAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentRequestAggregateType<T>>

    /**
     * Group by EnrollmentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentRequestGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentRequestGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrollmentRequest model
   */
  readonly fields: EnrollmentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrollmentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnrollmentRequest model
   */
  interface EnrollmentRequestFieldRefs {
    readonly id: FieldRef<"EnrollmentRequest", 'Int'>
    readonly candidateId: FieldRef<"EnrollmentRequest", 'Int'>
    readonly schoolId: FieldRef<"EnrollmentRequest", 'Int'>
    readonly status: FieldRef<"EnrollmentRequest", 'EnrollmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * EnrollmentRequest findUnique
   */
  export type EnrollmentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnrollmentRequest to fetch.
     */
    where: EnrollmentRequestWhereUniqueInput
  }

  /**
   * EnrollmentRequest findUniqueOrThrow
   */
  export type EnrollmentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnrollmentRequest to fetch.
     */
    where: EnrollmentRequestWhereUniqueInput
  }

  /**
   * EnrollmentRequest findFirst
   */
  export type EnrollmentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnrollmentRequest to fetch.
     */
    where?: EnrollmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrollmentRequests to fetch.
     */
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrollmentRequests.
     */
    cursor?: EnrollmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrollmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrollmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrollmentRequests.
     */
    distinct?: EnrollmentRequestScalarFieldEnum | EnrollmentRequestScalarFieldEnum[]
  }

  /**
   * EnrollmentRequest findFirstOrThrow
   */
  export type EnrollmentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnrollmentRequest to fetch.
     */
    where?: EnrollmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrollmentRequests to fetch.
     */
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrollmentRequests.
     */
    cursor?: EnrollmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrollmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrollmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrollmentRequests.
     */
    distinct?: EnrollmentRequestScalarFieldEnum | EnrollmentRequestScalarFieldEnum[]
  }

  /**
   * EnrollmentRequest findMany
   */
  export type EnrollmentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnrollmentRequests to fetch.
     */
    where?: EnrollmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrollmentRequests to fetch.
     */
    orderBy?: EnrollmentRequestOrderByWithRelationInput | EnrollmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrollmentRequests.
     */
    cursor?: EnrollmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrollmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrollmentRequests.
     */
    skip?: number
    distinct?: EnrollmentRequestScalarFieldEnum | EnrollmentRequestScalarFieldEnum[]
  }

  /**
   * EnrollmentRequest create
   */
  export type EnrollmentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrollmentRequest.
     */
    data: XOR<EnrollmentRequestCreateInput, EnrollmentRequestUncheckedCreateInput>
  }

  /**
   * EnrollmentRequest createMany
   */
  export type EnrollmentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrollmentRequests.
     */
    data: EnrollmentRequestCreateManyInput | EnrollmentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrollmentRequest createManyAndReturn
   */
  export type EnrollmentRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EnrollmentRequests.
     */
    data: EnrollmentRequestCreateManyInput | EnrollmentRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrollmentRequest update
   */
  export type EnrollmentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrollmentRequest.
     */
    data: XOR<EnrollmentRequestUpdateInput, EnrollmentRequestUncheckedUpdateInput>
    /**
     * Choose, which EnrollmentRequest to update.
     */
    where: EnrollmentRequestWhereUniqueInput
  }

  /**
   * EnrollmentRequest updateMany
   */
  export type EnrollmentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrollmentRequests.
     */
    data: XOR<EnrollmentRequestUpdateManyMutationInput, EnrollmentRequestUncheckedUpdateManyInput>
    /**
     * Filter which EnrollmentRequests to update
     */
    where?: EnrollmentRequestWhereInput
    /**
     * Limit how many EnrollmentRequests to update.
     */
    limit?: number
  }

  /**
   * EnrollmentRequest updateManyAndReturn
   */
  export type EnrollmentRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * The data used to update EnrollmentRequests.
     */
    data: XOR<EnrollmentRequestUpdateManyMutationInput, EnrollmentRequestUncheckedUpdateManyInput>
    /**
     * Filter which EnrollmentRequests to update
     */
    where?: EnrollmentRequestWhereInput
    /**
     * Limit how many EnrollmentRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrollmentRequest upsert
   */
  export type EnrollmentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrollmentRequest to update in case it exists.
     */
    where: EnrollmentRequestWhereUniqueInput
    /**
     * In case the EnrollmentRequest found by the `where` argument doesn't exist, create a new EnrollmentRequest with this data.
     */
    create: XOR<EnrollmentRequestCreateInput, EnrollmentRequestUncheckedCreateInput>
    /**
     * In case the EnrollmentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentRequestUpdateInput, EnrollmentRequestUncheckedUpdateInput>
  }

  /**
   * EnrollmentRequest delete
   */
  export type EnrollmentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
    /**
     * Filter which EnrollmentRequest to delete.
     */
    where: EnrollmentRequestWhereUniqueInput
  }

  /**
   * EnrollmentRequest deleteMany
   */
  export type EnrollmentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrollmentRequests to delete
     */
    where?: EnrollmentRequestWhereInput
    /**
     * Limit how many EnrollmentRequests to delete.
     */
    limit?: number
  }

  /**
   * EnrollmentRequest without action
   */
  export type EnrollmentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentRequest
     */
    select?: EnrollmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrollmentRequest
     */
    omit?: EnrollmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentRequestInclude<ExtArgs> | null
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


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    address: 'address',
    contactNumber: 'contactNumber',
    email: 'email',
    enrollmentFee: 'enrollmentFee',
    info: 'info'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolUserScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId'
  };

  export type SchoolUserScalarFieldEnum = (typeof SchoolUserScalarFieldEnum)[keyof typeof SchoolUserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    instructorId: 'instructorId',
    type: 'type',
    format: 'format',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionCandidateScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    candidateId: 'candidateId'
  };

  export type SessionCandidateScalarFieldEnum = (typeof SessionCandidateScalarFieldEnum)[keyof typeof SessionCandidateScalarFieldEnum]


  export const CandidateInstructorScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    candidateId: 'candidateId'
  };

  export type CandidateInstructorScalarFieldEnum = (typeof CandidateInstructorScalarFieldEnum)[keyof typeof CandidateInstructorScalarFieldEnum]


  export const InstructorSlotScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    day: 'day',
    startTime: 'startTime'
  };

  export type InstructorSlotScalarFieldEnum = (typeof InstructorSlotScalarFieldEnum)[keyof typeof InstructorSlotScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    date: 'date',
    type: 'type',
    points: 'points',
    passed: 'passed'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const EnrollmentRequestScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    schoolId: 'schoolId',
    status: 'status'
  };

  export type EnrollmentRequestScalarFieldEnum = (typeof EnrollmentRequestScalarFieldEnum)[keyof typeof EnrollmentRequestScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'SessionType'
   */
  export type EnumSessionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionType'>
    


  /**
   * Reference to a field of type 'SessionType[]'
   */
  export type ListEnumSessionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionType[]'>
    


  /**
   * Reference to a field of type 'SessionFormat'
   */
  export type EnumSessionFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionFormat'>
    


  /**
   * Reference to a field of type 'SessionFormat[]'
   */
  export type ListEnumSessionFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionFormat[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Day[]'
   */
  export type ListEnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus[]'
   */
  export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>
    


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


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    contactNumber?: StringFilter<"School"> | string
    email?: StringFilter<"School"> | string
    enrollmentFee?: DecimalFilter<"School"> | Decimal | DecimalJsLike | number | string
    info?: StringNullableFilter<"School"> | string | null
    users?: SchoolUserListRelationFilter
    sessions?: SessionListRelationFilter
    enrollmentRequests?: EnrollmentRequestListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    enrollmentFee?: SortOrder
    info?: SortOrderInput | SortOrder
    users?: SchoolUserOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    enrollmentRequests?: EnrollmentRequestOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    contactNumber?: StringFilter<"School"> | string
    enrollmentFee?: DecimalFilter<"School"> | Decimal | DecimalJsLike | number | string
    info?: StringNullableFilter<"School"> | string | null
    users?: SchoolUserListRelationFilter
    sessions?: SessionListRelationFilter
    enrollmentRequests?: EnrollmentRequestListRelationFilter
  }, "id" | "email">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    enrollmentFee?: SortOrder
    info?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    city?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
    contactNumber?: StringWithAggregatesFilter<"School"> | string
    email?: StringWithAggregatesFilter<"School"> | string
    enrollmentFee?: DecimalWithAggregatesFilter<"School"> | Decimal | DecimalJsLike | number | string
    info?: StringNullableWithAggregatesFilter<"School"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    schoolUsers?: SchoolUserListRelationFilter
    sessions?: SessionListRelationFilter
    sessionCandidates?: SessionCandidateListRelationFilter
    testResults?: TestResultListRelationFilter
    enrollmentRequests?: EnrollmentRequestListRelationFilter
    instructorCandidates?: CandidateInstructorListRelationFilter
    candidateInstructors?: CandidateInstructorListRelationFilter
    InstructorSlot?: InstructorSlotListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolUsers?: SchoolUserOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    sessionCandidates?: SessionCandidateOrderByRelationAggregateInput
    testResults?: TestResultOrderByRelationAggregateInput
    enrollmentRequests?: EnrollmentRequestOrderByRelationAggregateInput
    instructorCandidates?: CandidateInstructorOrderByRelationAggregateInput
    candidateInstructors?: CandidateInstructorOrderByRelationAggregateInput
    InstructorSlot?: InstructorSlotOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    schoolUsers?: SchoolUserListRelationFilter
    sessions?: SessionListRelationFilter
    sessionCandidates?: SessionCandidateListRelationFilter
    testResults?: TestResultListRelationFilter
    enrollmentRequests?: EnrollmentRequestListRelationFilter
    instructorCandidates?: CandidateInstructorListRelationFilter
    candidateInstructors?: CandidateInstructorListRelationFilter
    InstructorSlot?: InstructorSlotListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type SchoolUserWhereInput = {
    AND?: SchoolUserWhereInput | SchoolUserWhereInput[]
    OR?: SchoolUserWhereInput[]
    NOT?: SchoolUserWhereInput | SchoolUserWhereInput[]
    id?: IntFilter<"SchoolUser"> | number
    schoolId?: IntFilter<"SchoolUser"> | number
    userId?: IntFilter<"SchoolUser"> | number
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SchoolUserOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SchoolUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    schoolId_userId?: SchoolUserSchoolIdUserIdCompoundUniqueInput
    AND?: SchoolUserWhereInput | SchoolUserWhereInput[]
    OR?: SchoolUserWhereInput[]
    NOT?: SchoolUserWhereInput | SchoolUserWhereInput[]
    schoolId?: IntFilter<"SchoolUser"> | number
    userId?: IntFilter<"SchoolUser"> | number
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "schoolId_userId">

  export type SchoolUserOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    _count?: SchoolUserCountOrderByAggregateInput
    _avg?: SchoolUserAvgOrderByAggregateInput
    _max?: SchoolUserMaxOrderByAggregateInput
    _min?: SchoolUserMinOrderByAggregateInput
    _sum?: SchoolUserSumOrderByAggregateInput
  }

  export type SchoolUserScalarWhereWithAggregatesInput = {
    AND?: SchoolUserScalarWhereWithAggregatesInput | SchoolUserScalarWhereWithAggregatesInput[]
    OR?: SchoolUserScalarWhereWithAggregatesInput[]
    NOT?: SchoolUserScalarWhereWithAggregatesInput | SchoolUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SchoolUser"> | number
    schoolId?: IntWithAggregatesFilter<"SchoolUser"> | number
    userId?: IntWithAggregatesFilter<"SchoolUser"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    schoolId?: IntFilter<"Session"> | number
    instructorId?: IntNullableFilter<"Session"> | number | null
    type?: EnumSessionTypeFilter<"Session"> | $Enums.SessionType
    format?: EnumSessionFormatFilter<"Session"> | $Enums.SessionFormat
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    instructor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    candidates?: SessionCandidateListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    type?: SortOrder
    format?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    school?: SchoolOrderByWithRelationInput
    instructor?: UserOrderByWithRelationInput
    candidates?: SessionCandidateOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    schoolId?: IntFilter<"Session"> | number
    instructorId?: IntNullableFilter<"Session"> | number | null
    type?: EnumSessionTypeFilter<"Session"> | $Enums.SessionType
    format?: EnumSessionFormatFilter<"Session"> | $Enums.SessionFormat
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    instructor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    candidates?: SessionCandidateListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    type?: SortOrder
    format?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    schoolId?: IntWithAggregatesFilter<"Session"> | number
    instructorId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    type?: EnumSessionTypeWithAggregatesFilter<"Session"> | $Enums.SessionType
    format?: EnumSessionFormatWithAggregatesFilter<"Session"> | $Enums.SessionFormat
    startTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SessionCandidateWhereInput = {
    AND?: SessionCandidateWhereInput | SessionCandidateWhereInput[]
    OR?: SessionCandidateWhereInput[]
    NOT?: SessionCandidateWhereInput | SessionCandidateWhereInput[]
    id?: IntFilter<"SessionCandidate"> | number
    sessionId?: IntFilter<"SessionCandidate"> | number
    candidateId?: IntFilter<"SessionCandidate"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionCandidateOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
    session?: SessionOrderByWithRelationInput
    candidate?: UserOrderByWithRelationInput
  }

  export type SessionCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId_candidateId?: SessionCandidateSessionIdCandidateIdCompoundUniqueInput
    AND?: SessionCandidateWhereInput | SessionCandidateWhereInput[]
    OR?: SessionCandidateWhereInput[]
    NOT?: SessionCandidateWhereInput | SessionCandidateWhereInput[]
    sessionId?: IntFilter<"SessionCandidate"> | number
    candidateId?: IntFilter<"SessionCandidate"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_candidateId">

  export type SessionCandidateOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
    _count?: SessionCandidateCountOrderByAggregateInput
    _avg?: SessionCandidateAvgOrderByAggregateInput
    _max?: SessionCandidateMaxOrderByAggregateInput
    _min?: SessionCandidateMinOrderByAggregateInput
    _sum?: SessionCandidateSumOrderByAggregateInput
  }

  export type SessionCandidateScalarWhereWithAggregatesInput = {
    AND?: SessionCandidateScalarWhereWithAggregatesInput | SessionCandidateScalarWhereWithAggregatesInput[]
    OR?: SessionCandidateScalarWhereWithAggregatesInput[]
    NOT?: SessionCandidateScalarWhereWithAggregatesInput | SessionCandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SessionCandidate"> | number
    sessionId?: IntWithAggregatesFilter<"SessionCandidate"> | number
    candidateId?: IntWithAggregatesFilter<"SessionCandidate"> | number
  }

  export type CandidateInstructorWhereInput = {
    AND?: CandidateInstructorWhereInput | CandidateInstructorWhereInput[]
    OR?: CandidateInstructorWhereInput[]
    NOT?: CandidateInstructorWhereInput | CandidateInstructorWhereInput[]
    id?: IntFilter<"CandidateInstructor"> | number
    instructorId?: IntFilter<"CandidateInstructor"> | number
    candidateId?: IntFilter<"CandidateInstructor"> | number
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CandidateInstructorOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
    instructor?: UserOrderByWithRelationInput
    candidate?: UserOrderByWithRelationInput
  }

  export type CandidateInstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    instructorId_candidateId?: CandidateInstructorInstructorIdCandidateIdCompoundUniqueInput
    AND?: CandidateInstructorWhereInput | CandidateInstructorWhereInput[]
    OR?: CandidateInstructorWhereInput[]
    NOT?: CandidateInstructorWhereInput | CandidateInstructorWhereInput[]
    instructorId?: IntFilter<"CandidateInstructor"> | number
    candidateId?: IntFilter<"CandidateInstructor"> | number
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "instructorId_candidateId">

  export type CandidateInstructorOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
    _count?: CandidateInstructorCountOrderByAggregateInput
    _avg?: CandidateInstructorAvgOrderByAggregateInput
    _max?: CandidateInstructorMaxOrderByAggregateInput
    _min?: CandidateInstructorMinOrderByAggregateInput
    _sum?: CandidateInstructorSumOrderByAggregateInput
  }

  export type CandidateInstructorScalarWhereWithAggregatesInput = {
    AND?: CandidateInstructorScalarWhereWithAggregatesInput | CandidateInstructorScalarWhereWithAggregatesInput[]
    OR?: CandidateInstructorScalarWhereWithAggregatesInput[]
    NOT?: CandidateInstructorScalarWhereWithAggregatesInput | CandidateInstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CandidateInstructor"> | number
    instructorId?: IntWithAggregatesFilter<"CandidateInstructor"> | number
    candidateId?: IntWithAggregatesFilter<"CandidateInstructor"> | number
  }

  export type InstructorSlotWhereInput = {
    AND?: InstructorSlotWhereInput | InstructorSlotWhereInput[]
    OR?: InstructorSlotWhereInput[]
    NOT?: InstructorSlotWhereInput | InstructorSlotWhereInput[]
    id?: IntFilter<"InstructorSlot"> | number
    instructorId?: IntFilter<"InstructorSlot"> | number
    day?: EnumDayFilter<"InstructorSlot"> | $Enums.Day
    startTime?: DateTimeFilter<"InstructorSlot"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InstructorSlotOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    instructor?: UserOrderByWithRelationInput
  }

  export type InstructorSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructorSlotWhereInput | InstructorSlotWhereInput[]
    OR?: InstructorSlotWhereInput[]
    NOT?: InstructorSlotWhereInput | InstructorSlotWhereInput[]
    instructorId?: IntFilter<"InstructorSlot"> | number
    day?: EnumDayFilter<"InstructorSlot"> | $Enums.Day
    startTime?: DateTimeFilter<"InstructorSlot"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InstructorSlotOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    _count?: InstructorSlotCountOrderByAggregateInput
    _avg?: InstructorSlotAvgOrderByAggregateInput
    _max?: InstructorSlotMaxOrderByAggregateInput
    _min?: InstructorSlotMinOrderByAggregateInput
    _sum?: InstructorSlotSumOrderByAggregateInput
  }

  export type InstructorSlotScalarWhereWithAggregatesInput = {
    AND?: InstructorSlotScalarWhereWithAggregatesInput | InstructorSlotScalarWhereWithAggregatesInput[]
    OR?: InstructorSlotScalarWhereWithAggregatesInput[]
    NOT?: InstructorSlotScalarWhereWithAggregatesInput | InstructorSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstructorSlot"> | number
    instructorId?: IntWithAggregatesFilter<"InstructorSlot"> | number
    day?: EnumDayWithAggregatesFilter<"InstructorSlot"> | $Enums.Day
    startTime?: DateTimeWithAggregatesFilter<"InstructorSlot"> | Date | string
  }

  export type TestResultWhereInput = {
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    id?: IntFilter<"TestResult"> | number
    candidateId?: IntFilter<"TestResult"> | number
    date?: DateTimeFilter<"TestResult"> | Date | string
    type?: EnumSessionTypeFilter<"TestResult"> | $Enums.SessionType
    points?: DecimalNullableFilter<"TestResult"> | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFilter<"TestResult"> | boolean
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    points?: SortOrderInput | SortOrder
    passed?: SortOrder
    candidate?: UserOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    candidateId?: IntFilter<"TestResult"> | number
    date?: DateTimeFilter<"TestResult"> | Date | string
    type?: EnumSessionTypeFilter<"TestResult"> | $Enums.SessionType
    points?: DecimalNullableFilter<"TestResult"> | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFilter<"TestResult"> | boolean
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    points?: SortOrderInput | SortOrder
    passed?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    OR?: TestResultScalarWhereWithAggregatesInput[]
    NOT?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestResult"> | number
    candidateId?: IntWithAggregatesFilter<"TestResult"> | number
    date?: DateTimeWithAggregatesFilter<"TestResult"> | Date | string
    type?: EnumSessionTypeWithAggregatesFilter<"TestResult"> | $Enums.SessionType
    points?: DecimalNullableWithAggregatesFilter<"TestResult"> | Decimal | DecimalJsLike | number | string | null
    passed?: BoolWithAggregatesFilter<"TestResult"> | boolean
  }

  export type EnrollmentRequestWhereInput = {
    AND?: EnrollmentRequestWhereInput | EnrollmentRequestWhereInput[]
    OR?: EnrollmentRequestWhereInput[]
    NOT?: EnrollmentRequestWhereInput | EnrollmentRequestWhereInput[]
    id?: IntFilter<"EnrollmentRequest"> | number
    candidateId?: IntFilter<"EnrollmentRequest"> | number
    schoolId?: IntFilter<"EnrollmentRequest"> | number
    status?: EnumEnrollmentStatusFilter<"EnrollmentRequest"> | $Enums.EnrollmentStatus
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type EnrollmentRequestOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    candidate?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type EnrollmentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    candidateId_schoolId?: EnrollmentRequestCandidateIdSchoolIdCompoundUniqueInput
    AND?: EnrollmentRequestWhereInput | EnrollmentRequestWhereInput[]
    OR?: EnrollmentRequestWhereInput[]
    NOT?: EnrollmentRequestWhereInput | EnrollmentRequestWhereInput[]
    candidateId?: IntFilter<"EnrollmentRequest"> | number
    schoolId?: IntFilter<"EnrollmentRequest"> | number
    status?: EnumEnrollmentStatusFilter<"EnrollmentRequest"> | $Enums.EnrollmentStatus
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "candidateId_schoolId">

  export type EnrollmentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
    _count?: EnrollmentRequestCountOrderByAggregateInput
    _avg?: EnrollmentRequestAvgOrderByAggregateInput
    _max?: EnrollmentRequestMaxOrderByAggregateInput
    _min?: EnrollmentRequestMinOrderByAggregateInput
    _sum?: EnrollmentRequestSumOrderByAggregateInput
  }

  export type EnrollmentRequestScalarWhereWithAggregatesInput = {
    AND?: EnrollmentRequestScalarWhereWithAggregatesInput | EnrollmentRequestScalarWhereWithAggregatesInput[]
    OR?: EnrollmentRequestScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentRequestScalarWhereWithAggregatesInput | EnrollmentRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EnrollmentRequest"> | number
    candidateId?: IntWithAggregatesFilter<"EnrollmentRequest"> | number
    schoolId?: IntWithAggregatesFilter<"EnrollmentRequest"> | number
    status?: EnumEnrollmentStatusWithAggregatesFilter<"EnrollmentRequest"> | $Enums.EnrollmentStatus
  }

  export type SchoolCreateInput = {
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserCreateNestedManyWithoutSchoolInput
    sessions?: SessionCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserUncheckedCreateNestedManyWithoutSchoolInput
    sessions?: SessionUncheckedCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUpdateManyWithoutSchoolNestedInput
    sessions?: SessionUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUncheckedUpdateManyWithoutSchoolNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type SchoolUserCreateInput = {
    school: SchoolCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutSchoolUsersInput
  }

  export type SchoolUserUncheckedCreateInput = {
    id?: number
    schoolId: number
    userId: number
  }

  export type SchoolUserUpdateInput = {
    school?: SchoolUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolUsersNestedInput
  }

  export type SchoolUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolUserCreateManyInput = {
    id?: number
    schoolId: number
    userId: number
  }

  export type SchoolUserUpdateManyMutationInput = {

  }

  export type SchoolUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    instructor?: UserCreateNestedOneWithoutSessionsInput
    candidates?: SessionCandidateCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    schoolId: number
    instructorId?: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    candidates?: SessionCandidateUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    instructor?: UserUpdateOneWithoutSessionsNestedInput
    candidates?: SessionCandidateUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: SessionCandidateUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    schoolId: number
    instructorId?: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCandidateCreateInput = {
    session: SessionCreateNestedOneWithoutCandidatesInput
    candidate: UserCreateNestedOneWithoutSessionCandidatesInput
  }

  export type SessionCandidateUncheckedCreateInput = {
    id?: number
    sessionId: number
    candidateId: number
  }

  export type SessionCandidateUpdateInput = {
    session?: SessionUpdateOneRequiredWithoutCandidatesNestedInput
    candidate?: UserUpdateOneRequiredWithoutSessionCandidatesNestedInput
  }

  export type SessionCandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCandidateCreateManyInput = {
    id?: number
    sessionId: number
    candidateId: number
  }

  export type SessionCandidateUpdateManyMutationInput = {

  }

  export type SessionCandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateInstructorCreateInput = {
    instructor: UserCreateNestedOneWithoutInstructorCandidatesInput
    candidate: UserCreateNestedOneWithoutCandidateInstructorsInput
  }

  export type CandidateInstructorUncheckedCreateInput = {
    id?: number
    instructorId: number
    candidateId: number
  }

  export type CandidateInstructorUpdateInput = {
    instructor?: UserUpdateOneRequiredWithoutInstructorCandidatesNestedInput
    candidate?: UserUpdateOneRequiredWithoutCandidateInstructorsNestedInput
  }

  export type CandidateInstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateInstructorCreateManyInput = {
    id?: number
    instructorId: number
    candidateId: number
  }

  export type CandidateInstructorUpdateManyMutationInput = {

  }

  export type CandidateInstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type InstructorSlotCreateInput = {
    day: $Enums.Day
    startTime: Date | string
    instructor: UserCreateNestedOneWithoutInstructorSlotInput
  }

  export type InstructorSlotUncheckedCreateInput = {
    id?: number
    instructorId: number
    day: $Enums.Day
    startTime: Date | string
  }

  export type InstructorSlotUpdateInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutInstructorSlotNestedInput
  }

  export type InstructorSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorSlotCreateManyInput = {
    id?: number
    instructorId: number
    day: $Enums.Day
    startTime: Date | string
  }

  export type InstructorSlotUpdateManyMutationInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateInput = {
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
    candidate: UserCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: number
    candidateId: number
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
  }

  export type TestResultUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    candidate?: UserUpdateOneRequiredWithoutTestResultsNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestResultCreateManyInput = {
    id?: number
    candidateId: number
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
  }

  export type TestResultUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentRequestCreateInput = {
    status: $Enums.EnrollmentStatus
    candidate: UserCreateNestedOneWithoutEnrollmentRequestsInput
    school: SchoolCreateNestedOneWithoutEnrollmentRequestsInput
  }

  export type EnrollmentRequestUncheckedCreateInput = {
    id?: number
    candidateId: number
    schoolId: number
    status: $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestUpdateInput = {
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    candidate?: UserUpdateOneRequiredWithoutEnrollmentRequestsNestedInput
    school?: SchoolUpdateOneRequiredWithoutEnrollmentRequestsNestedInput
  }

  export type EnrollmentRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestCreateManyInput = {
    id?: number
    candidateId: number
    schoolId: number
    status: $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestUpdateManyMutationInput = {
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type SchoolUserListRelationFilter = {
    every?: SchoolUserWhereInput
    some?: SchoolUserWhereInput
    none?: SchoolUserWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EnrollmentRequestListRelationFilter = {
    every?: EnrollmentRequestWhereInput
    some?: EnrollmentRequestWhereInput
    none?: EnrollmentRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SchoolUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    enrollmentFee?: SortOrder
    info?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollmentFee?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    enrollmentFee?: SortOrder
    info?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    enrollmentFee?: SortOrder
    info?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
    enrollmentFee?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type SessionCandidateListRelationFilter = {
    every?: SessionCandidateWhereInput
    some?: SessionCandidateWhereInput
    none?: SessionCandidateWhereInput
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type CandidateInstructorListRelationFilter = {
    every?: CandidateInstructorWhereInput
    some?: CandidateInstructorWhereInput
    none?: CandidateInstructorWhereInput
  }

  export type InstructorSlotListRelationFilter = {
    every?: InstructorSlotWhereInput
    some?: InstructorSlotWhereInput
    none?: InstructorSlotWhereInput
  }

  export type SessionCandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateInstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SchoolUserSchoolIdUserIdCompoundUniqueInput = {
    schoolId: number
    userId: number
  }

  export type SchoolUserCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type SchoolUserAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type SchoolUserMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type SchoolUserMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type SchoolUserSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSessionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionType | EnumSessionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionTypeFilter<$PrismaModel> | $Enums.SessionType
  }

  export type EnumSessionFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionFormat | EnumSessionFormatFieldRefInput<$PrismaModel>
    in?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionFormatFilter<$PrismaModel> | $Enums.SessionFormat
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrder
    type?: SortOrder
    format?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrder
    type?: SortOrder
    format?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrder
    type?: SortOrder
    format?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    instructorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSessionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionType | EnumSessionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SessionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionTypeFilter<$PrismaModel>
    _max?: NestedEnumSessionTypeFilter<$PrismaModel>
  }

  export type EnumSessionFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionFormat | EnumSessionFormatFieldRefInput<$PrismaModel>
    in?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionFormatWithAggregatesFilter<$PrismaModel> | $Enums.SessionFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionFormatFilter<$PrismaModel>
    _max?: NestedEnumSessionFormatFilter<$PrismaModel>
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

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionCandidateSessionIdCandidateIdCompoundUniqueInput = {
    sessionId: number
    candidateId: number
  }

  export type SessionCandidateCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
  }

  export type SessionCandidateAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
  }

  export type SessionCandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
  }

  export type SessionCandidateMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
  }

  export type SessionCandidateSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    candidateId?: SortOrder
  }

  export type CandidateInstructorInstructorIdCandidateIdCompoundUniqueInput = {
    instructorId: number
    candidateId: number
  }

  export type CandidateInstructorCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
  }

  export type CandidateInstructorAvgOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
  }

  export type CandidateInstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
  }

  export type CandidateInstructorMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
  }

  export type CandidateInstructorSumOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    candidateId?: SortOrder
  }

  export type EnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type InstructorSlotCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
  }

  export type InstructorSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
  }

  export type InstructorSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
  }

  export type InstructorSlotMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
  }

  export type InstructorSlotSumOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
  }

  export type EnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    points?: SortOrder
    passed?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    points?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    points?: SortOrder
    passed?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    points?: SortOrder
    passed?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    points?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestCandidateIdSchoolIdCompoundUniqueInput = {
    candidateId: number
    schoolId: number
  }

  export type EnrollmentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
  }

  export type EnrollmentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentRequestSumOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    schoolId?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type SchoolUserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput> | SchoolUserCreateWithoutSchoolInput[] | SchoolUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutSchoolInput | SchoolUserCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolUserCreateManySchoolInputEnvelope
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput> | SessionCreateWithoutSchoolInput[] | SessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutSchoolInput | SessionCreateOrConnectWithoutSchoolInput[]
    createMany?: SessionCreateManySchoolInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnrollmentRequestCreateNestedManyWithoutSchoolInput = {
    create?: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput> | EnrollmentRequestCreateWithoutSchoolInput[] | EnrollmentRequestUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutSchoolInput | EnrollmentRequestCreateOrConnectWithoutSchoolInput[]
    createMany?: EnrollmentRequestCreateManySchoolInputEnvelope
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
  }

  export type SchoolUserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput> | SchoolUserCreateWithoutSchoolInput[] | SchoolUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutSchoolInput | SchoolUserCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolUserCreateManySchoolInputEnvelope
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput> | SessionCreateWithoutSchoolInput[] | SessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutSchoolInput | SessionCreateOrConnectWithoutSchoolInput[]
    createMany?: SessionCreateManySchoolInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnrollmentRequestUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput> | EnrollmentRequestCreateWithoutSchoolInput[] | EnrollmentRequestUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutSchoolInput | EnrollmentRequestCreateOrConnectWithoutSchoolInput[]
    createMany?: EnrollmentRequestCreateManySchoolInputEnvelope
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchoolUserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput> | SchoolUserCreateWithoutSchoolInput[] | SchoolUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutSchoolInput | SchoolUserCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolUserUpsertWithWhereUniqueWithoutSchoolInput | SchoolUserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolUserCreateManySchoolInputEnvelope
    set?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    disconnect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    delete?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    update?: SchoolUserUpdateWithWhereUniqueWithoutSchoolInput | SchoolUserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolUserUpdateManyWithWhereWithoutSchoolInput | SchoolUserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput> | SessionCreateWithoutSchoolInput[] | SessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutSchoolInput | SessionCreateOrConnectWithoutSchoolInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutSchoolInput | SessionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SessionCreateManySchoolInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutSchoolInput | SessionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutSchoolInput | SessionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnrollmentRequestUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput> | EnrollmentRequestCreateWithoutSchoolInput[] | EnrollmentRequestUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutSchoolInput | EnrollmentRequestCreateOrConnectWithoutSchoolInput[]
    upsert?: EnrollmentRequestUpsertWithWhereUniqueWithoutSchoolInput | EnrollmentRequestUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: EnrollmentRequestCreateManySchoolInputEnvelope
    set?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    disconnect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    delete?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    update?: EnrollmentRequestUpdateWithWhereUniqueWithoutSchoolInput | EnrollmentRequestUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: EnrollmentRequestUpdateManyWithWhereWithoutSchoolInput | EnrollmentRequestUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolUserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput> | SchoolUserCreateWithoutSchoolInput[] | SchoolUserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutSchoolInput | SchoolUserCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolUserUpsertWithWhereUniqueWithoutSchoolInput | SchoolUserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolUserCreateManySchoolInputEnvelope
    set?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    disconnect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    delete?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    update?: SchoolUserUpdateWithWhereUniqueWithoutSchoolInput | SchoolUserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolUserUpdateManyWithWhereWithoutSchoolInput | SchoolUserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput> | SessionCreateWithoutSchoolInput[] | SessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutSchoolInput | SessionCreateOrConnectWithoutSchoolInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutSchoolInput | SessionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SessionCreateManySchoolInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutSchoolInput | SessionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutSchoolInput | SessionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnrollmentRequestUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput> | EnrollmentRequestCreateWithoutSchoolInput[] | EnrollmentRequestUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutSchoolInput | EnrollmentRequestCreateOrConnectWithoutSchoolInput[]
    upsert?: EnrollmentRequestUpsertWithWhereUniqueWithoutSchoolInput | EnrollmentRequestUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: EnrollmentRequestCreateManySchoolInputEnvelope
    set?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    disconnect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    delete?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    update?: EnrollmentRequestUpdateWithWhereUniqueWithoutSchoolInput | EnrollmentRequestUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: EnrollmentRequestUpdateManyWithWhereWithoutSchoolInput | EnrollmentRequestUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
  }

  export type SchoolUserCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput> | SchoolUserCreateWithoutUserInput[] | SchoolUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutUserInput | SchoolUserCreateOrConnectWithoutUserInput[]
    createMany?: SchoolUserCreateManyUserInputEnvelope
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutInstructorInput = {
    create?: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput> | SessionCreateWithoutInstructorInput[] | SessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutInstructorInput | SessionCreateOrConnectWithoutInstructorInput[]
    createMany?: SessionCreateManyInstructorInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionCandidateCreateNestedManyWithoutCandidateInput = {
    create?: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput> | SessionCandidateCreateWithoutCandidateInput[] | SessionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutCandidateInput | SessionCandidateCreateOrConnectWithoutCandidateInput[]
    createMany?: SessionCandidateCreateManyCandidateInputEnvelope
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
  }

  export type TestResultCreateNestedManyWithoutCandidateInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput> | TestResultCreateWithoutCandidateInput[] | TestResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput | TestResultCreateOrConnectWithoutCandidateInput[]
    createMany?: TestResultCreateManyCandidateInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type EnrollmentRequestCreateNestedManyWithoutCandidateInput = {
    create?: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput> | EnrollmentRequestCreateWithoutCandidateInput[] | EnrollmentRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutCandidateInput | EnrollmentRequestCreateOrConnectWithoutCandidateInput[]
    createMany?: EnrollmentRequestCreateManyCandidateInputEnvelope
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
  }

  export type CandidateInstructorCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput> | CandidateInstructorCreateWithoutInstructorInput[] | CandidateInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutInstructorInput | CandidateInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: CandidateInstructorCreateManyInstructorInputEnvelope
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
  }

  export type CandidateInstructorCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput> | CandidateInstructorCreateWithoutCandidateInput[] | CandidateInstructorUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutCandidateInput | CandidateInstructorCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateInstructorCreateManyCandidateInputEnvelope
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
  }

  export type InstructorSlotCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput> | InstructorSlotCreateWithoutInstructorInput[] | InstructorSlotUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorSlotCreateOrConnectWithoutInstructorInput | InstructorSlotCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorSlotCreateManyInstructorInputEnvelope
    connect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
  }

  export type SchoolUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput> | SchoolUserCreateWithoutUserInput[] | SchoolUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutUserInput | SchoolUserCreateOrConnectWithoutUserInput[]
    createMany?: SchoolUserCreateManyUserInputEnvelope
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput> | SessionCreateWithoutInstructorInput[] | SessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutInstructorInput | SessionCreateOrConnectWithoutInstructorInput[]
    createMany?: SessionCreateManyInstructorInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput> | SessionCandidateCreateWithoutCandidateInput[] | SessionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutCandidateInput | SessionCandidateCreateOrConnectWithoutCandidateInput[]
    createMany?: SessionCandidateCreateManyCandidateInputEnvelope
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
  }

  export type TestResultUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput> | TestResultCreateWithoutCandidateInput[] | TestResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput | TestResultCreateOrConnectWithoutCandidateInput[]
    createMany?: TestResultCreateManyCandidateInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput> | EnrollmentRequestCreateWithoutCandidateInput[] | EnrollmentRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutCandidateInput | EnrollmentRequestCreateOrConnectWithoutCandidateInput[]
    createMany?: EnrollmentRequestCreateManyCandidateInputEnvelope
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
  }

  export type CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput> | CandidateInstructorCreateWithoutInstructorInput[] | CandidateInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutInstructorInput | CandidateInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: CandidateInstructorCreateManyInstructorInputEnvelope
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
  }

  export type CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput> | CandidateInstructorCreateWithoutCandidateInput[] | CandidateInstructorUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutCandidateInput | CandidateInstructorCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateInstructorCreateManyCandidateInputEnvelope
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
  }

  export type InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput> | InstructorSlotCreateWithoutInstructorInput[] | InstructorSlotUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorSlotCreateOrConnectWithoutInstructorInput | InstructorSlotCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorSlotCreateManyInstructorInputEnvelope
    connect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type SchoolUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput> | SchoolUserCreateWithoutUserInput[] | SchoolUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutUserInput | SchoolUserCreateOrConnectWithoutUserInput[]
    upsert?: SchoolUserUpsertWithWhereUniqueWithoutUserInput | SchoolUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolUserCreateManyUserInputEnvelope
    set?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    disconnect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    delete?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    update?: SchoolUserUpdateWithWhereUniqueWithoutUserInput | SchoolUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolUserUpdateManyWithWhereWithoutUserInput | SchoolUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput> | SessionCreateWithoutInstructorInput[] | SessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutInstructorInput | SessionCreateOrConnectWithoutInstructorInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutInstructorInput | SessionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: SessionCreateManyInstructorInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutInstructorInput | SessionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutInstructorInput | SessionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionCandidateUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput> | SessionCandidateCreateWithoutCandidateInput[] | SessionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutCandidateInput | SessionCandidateCreateOrConnectWithoutCandidateInput[]
    upsert?: SessionCandidateUpsertWithWhereUniqueWithoutCandidateInput | SessionCandidateUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: SessionCandidateCreateManyCandidateInputEnvelope
    set?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    disconnect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    delete?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    update?: SessionCandidateUpdateWithWhereUniqueWithoutCandidateInput | SessionCandidateUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: SessionCandidateUpdateManyWithWhereWithoutCandidateInput | SessionCandidateUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
  }

  export type TestResultUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput> | TestResultCreateWithoutCandidateInput[] | TestResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput | TestResultCreateOrConnectWithoutCandidateInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutCandidateInput | TestResultUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: TestResultCreateManyCandidateInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutCandidateInput | TestResultUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutCandidateInput | TestResultUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type EnrollmentRequestUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput> | EnrollmentRequestCreateWithoutCandidateInput[] | EnrollmentRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutCandidateInput | EnrollmentRequestCreateOrConnectWithoutCandidateInput[]
    upsert?: EnrollmentRequestUpsertWithWhereUniqueWithoutCandidateInput | EnrollmentRequestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: EnrollmentRequestCreateManyCandidateInputEnvelope
    set?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    disconnect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    delete?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    update?: EnrollmentRequestUpdateWithWhereUniqueWithoutCandidateInput | EnrollmentRequestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: EnrollmentRequestUpdateManyWithWhereWithoutCandidateInput | EnrollmentRequestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
  }

  export type CandidateInstructorUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput> | CandidateInstructorCreateWithoutInstructorInput[] | CandidateInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutInstructorInput | CandidateInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: CandidateInstructorUpsertWithWhereUniqueWithoutInstructorInput | CandidateInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CandidateInstructorCreateManyInstructorInputEnvelope
    set?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    disconnect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    delete?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    update?: CandidateInstructorUpdateWithWhereUniqueWithoutInstructorInput | CandidateInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CandidateInstructorUpdateManyWithWhereWithoutInstructorInput | CandidateInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
  }

  export type CandidateInstructorUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput> | CandidateInstructorCreateWithoutCandidateInput[] | CandidateInstructorUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutCandidateInput | CandidateInstructorCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateInstructorUpsertWithWhereUniqueWithoutCandidateInput | CandidateInstructorUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateInstructorCreateManyCandidateInputEnvelope
    set?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    disconnect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    delete?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    update?: CandidateInstructorUpdateWithWhereUniqueWithoutCandidateInput | CandidateInstructorUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateInstructorUpdateManyWithWhereWithoutCandidateInput | CandidateInstructorUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
  }

  export type InstructorSlotUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput> | InstructorSlotCreateWithoutInstructorInput[] | InstructorSlotUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorSlotCreateOrConnectWithoutInstructorInput | InstructorSlotCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorSlotUpsertWithWhereUniqueWithoutInstructorInput | InstructorSlotUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorSlotCreateManyInstructorInputEnvelope
    set?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    disconnect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    delete?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    connect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    update?: InstructorSlotUpdateWithWhereUniqueWithoutInstructorInput | InstructorSlotUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorSlotUpdateManyWithWhereWithoutInstructorInput | InstructorSlotUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorSlotScalarWhereInput | InstructorSlotScalarWhereInput[]
  }

  export type SchoolUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput> | SchoolUserCreateWithoutUserInput[] | SchoolUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolUserCreateOrConnectWithoutUserInput | SchoolUserCreateOrConnectWithoutUserInput[]
    upsert?: SchoolUserUpsertWithWhereUniqueWithoutUserInput | SchoolUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolUserCreateManyUserInputEnvelope
    set?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    disconnect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    delete?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    connect?: SchoolUserWhereUniqueInput | SchoolUserWhereUniqueInput[]
    update?: SchoolUserUpdateWithWhereUniqueWithoutUserInput | SchoolUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolUserUpdateManyWithWhereWithoutUserInput | SchoolUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput> | SessionCreateWithoutInstructorInput[] | SessionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutInstructorInput | SessionCreateOrConnectWithoutInstructorInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutInstructorInput | SessionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: SessionCreateManyInstructorInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutInstructorInput | SessionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutInstructorInput | SessionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput> | SessionCandidateCreateWithoutCandidateInput[] | SessionCandidateUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutCandidateInput | SessionCandidateCreateOrConnectWithoutCandidateInput[]
    upsert?: SessionCandidateUpsertWithWhereUniqueWithoutCandidateInput | SessionCandidateUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: SessionCandidateCreateManyCandidateInputEnvelope
    set?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    disconnect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    delete?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    update?: SessionCandidateUpdateWithWhereUniqueWithoutCandidateInput | SessionCandidateUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: SessionCandidateUpdateManyWithWhereWithoutCandidateInput | SessionCandidateUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
  }

  export type TestResultUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput> | TestResultCreateWithoutCandidateInput[] | TestResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput | TestResultCreateOrConnectWithoutCandidateInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutCandidateInput | TestResultUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: TestResultCreateManyCandidateInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutCandidateInput | TestResultUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutCandidateInput | TestResultUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput> | EnrollmentRequestCreateWithoutCandidateInput[] | EnrollmentRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EnrollmentRequestCreateOrConnectWithoutCandidateInput | EnrollmentRequestCreateOrConnectWithoutCandidateInput[]
    upsert?: EnrollmentRequestUpsertWithWhereUniqueWithoutCandidateInput | EnrollmentRequestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: EnrollmentRequestCreateManyCandidateInputEnvelope
    set?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    disconnect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    delete?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    connect?: EnrollmentRequestWhereUniqueInput | EnrollmentRequestWhereUniqueInput[]
    update?: EnrollmentRequestUpdateWithWhereUniqueWithoutCandidateInput | EnrollmentRequestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: EnrollmentRequestUpdateManyWithWhereWithoutCandidateInput | EnrollmentRequestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
  }

  export type CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput> | CandidateInstructorCreateWithoutInstructorInput[] | CandidateInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutInstructorInput | CandidateInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: CandidateInstructorUpsertWithWhereUniqueWithoutInstructorInput | CandidateInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CandidateInstructorCreateManyInstructorInputEnvelope
    set?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    disconnect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    delete?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    update?: CandidateInstructorUpdateWithWhereUniqueWithoutInstructorInput | CandidateInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CandidateInstructorUpdateManyWithWhereWithoutInstructorInput | CandidateInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
  }

  export type CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput> | CandidateInstructorCreateWithoutCandidateInput[] | CandidateInstructorUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateInstructorCreateOrConnectWithoutCandidateInput | CandidateInstructorCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateInstructorUpsertWithWhereUniqueWithoutCandidateInput | CandidateInstructorUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateInstructorCreateManyCandidateInputEnvelope
    set?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    disconnect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    delete?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    connect?: CandidateInstructorWhereUniqueInput | CandidateInstructorWhereUniqueInput[]
    update?: CandidateInstructorUpdateWithWhereUniqueWithoutCandidateInput | CandidateInstructorUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateInstructorUpdateManyWithWhereWithoutCandidateInput | CandidateInstructorUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
  }

  export type InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput> | InstructorSlotCreateWithoutInstructorInput[] | InstructorSlotUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorSlotCreateOrConnectWithoutInstructorInput | InstructorSlotCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorSlotUpsertWithWhereUniqueWithoutInstructorInput | InstructorSlotUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorSlotCreateManyInstructorInputEnvelope
    set?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    disconnect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    delete?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    connect?: InstructorSlotWhereUniqueInput | InstructorSlotWhereUniqueInput[]
    update?: InstructorSlotUpdateWithWhereUniqueWithoutInstructorInput | InstructorSlotUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorSlotUpdateManyWithWhereWithoutInstructorInput | InstructorSlotUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorSlotScalarWhereInput | InstructorSlotScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutUsersInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSchoolUsersInput = {
    create?: XOR<UserCreateWithoutSchoolUsersInput, UserUncheckedCreateWithoutSchoolUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolUsersInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput
    upsert?: SchoolUpsertWithoutUsersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUsersInput, SchoolUpdateWithoutUsersInput>, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutSchoolUsersNestedInput = {
    create?: XOR<UserCreateWithoutSchoolUsersInput, UserUncheckedCreateWithoutSchoolUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolUsersInput
    upsert?: UserUpsertWithoutSchoolUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchoolUsersInput, UserUpdateWithoutSchoolUsersInput>, UserUncheckedUpdateWithoutSchoolUsersInput>
  }

  export type SchoolCreateNestedOneWithoutSessionsInput = {
    create?: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSessionsInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCandidateCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput> | SessionCandidateCreateWithoutSessionInput[] | SessionCandidateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutSessionInput | SessionCandidateCreateOrConnectWithoutSessionInput[]
    createMany?: SessionCandidateCreateManySessionInputEnvelope
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
  }

  export type SessionCandidateUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput> | SessionCandidateCreateWithoutSessionInput[] | SessionCandidateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutSessionInput | SessionCandidateCreateOrConnectWithoutSessionInput[]
    createMany?: SessionCandidateCreateManySessionInputEnvelope
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
  }

  export type EnumSessionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SessionType
  }

  export type EnumSessionFormatFieldUpdateOperationsInput = {
    set?: $Enums.SessionFormat
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSessionsInput
    upsert?: SchoolUpsertWithoutSessionsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSessionsInput, SchoolUpdateWithoutSessionsInput>, SchoolUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type SessionCandidateUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput> | SessionCandidateCreateWithoutSessionInput[] | SessionCandidateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutSessionInput | SessionCandidateCreateOrConnectWithoutSessionInput[]
    upsert?: SessionCandidateUpsertWithWhereUniqueWithoutSessionInput | SessionCandidateUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionCandidateCreateManySessionInputEnvelope
    set?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    disconnect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    delete?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    update?: SessionCandidateUpdateWithWhereUniqueWithoutSessionInput | SessionCandidateUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionCandidateUpdateManyWithWhereWithoutSessionInput | SessionCandidateUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionCandidateUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput> | SessionCandidateCreateWithoutSessionInput[] | SessionCandidateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCandidateCreateOrConnectWithoutSessionInput | SessionCandidateCreateOrConnectWithoutSessionInput[]
    upsert?: SessionCandidateUpsertWithWhereUniqueWithoutSessionInput | SessionCandidateUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionCandidateCreateManySessionInputEnvelope
    set?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    disconnect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    delete?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    connect?: SessionCandidateWhereUniqueInput | SessionCandidateWhereUniqueInput[]
    update?: SessionCandidateUpdateWithWhereUniqueWithoutSessionInput | SessionCandidateUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionCandidateUpdateManyWithWhereWithoutSessionInput | SessionCandidateUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<SessionCreateWithoutCandidatesInput, SessionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCandidatesInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionCandidatesInput = {
    create?: XOR<UserCreateWithoutSessionCandidatesInput, UserUncheckedCreateWithoutSessionCandidatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionCandidatesInput
    connect?: UserWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<SessionCreateWithoutCandidatesInput, SessionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCandidatesInput
    upsert?: SessionUpsertWithoutCandidatesInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutCandidatesInput, SessionUpdateWithoutCandidatesInput>, SessionUncheckedUpdateWithoutCandidatesInput>
  }

  export type UserUpdateOneRequiredWithoutSessionCandidatesNestedInput = {
    create?: XOR<UserCreateWithoutSessionCandidatesInput, UserUncheckedCreateWithoutSessionCandidatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionCandidatesInput
    upsert?: UserUpsertWithoutSessionCandidatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionCandidatesInput, UserUpdateWithoutSessionCandidatesInput>, UserUncheckedUpdateWithoutSessionCandidatesInput>
  }

  export type UserCreateNestedOneWithoutInstructorCandidatesInput = {
    create?: XOR<UserCreateWithoutInstructorCandidatesInput, UserUncheckedCreateWithoutInstructorCandidatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorCandidatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCandidateInstructorsInput = {
    create?: XOR<UserCreateWithoutCandidateInstructorsInput, UserUncheckedCreateWithoutCandidateInstructorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateInstructorsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInstructorCandidatesNestedInput = {
    create?: XOR<UserCreateWithoutInstructorCandidatesInput, UserUncheckedCreateWithoutInstructorCandidatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorCandidatesInput
    upsert?: UserUpsertWithoutInstructorCandidatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorCandidatesInput, UserUpdateWithoutInstructorCandidatesInput>, UserUncheckedUpdateWithoutInstructorCandidatesInput>
  }

  export type UserUpdateOneRequiredWithoutCandidateInstructorsNestedInput = {
    create?: XOR<UserCreateWithoutCandidateInstructorsInput, UserUncheckedCreateWithoutCandidateInstructorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateInstructorsInput
    upsert?: UserUpsertWithoutCandidateInstructorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidateInstructorsInput, UserUpdateWithoutCandidateInstructorsInput>, UserUncheckedUpdateWithoutCandidateInstructorsInput>
  }

  export type UserCreateNestedOneWithoutInstructorSlotInput = {
    create?: XOR<UserCreateWithoutInstructorSlotInput, UserUncheckedCreateWithoutInstructorSlotInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorSlotInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDayFieldUpdateOperationsInput = {
    set?: $Enums.Day
  }

  export type UserUpdateOneRequiredWithoutInstructorSlotNestedInput = {
    create?: XOR<UserCreateWithoutInstructorSlotInput, UserUncheckedCreateWithoutInstructorSlotInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorSlotInput
    upsert?: UserUpsertWithoutInstructorSlotInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorSlotInput, UserUpdateWithoutInstructorSlotInput>, UserUncheckedUpdateWithoutInstructorSlotInput>
  }

  export type UserCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTestResultsNestedInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    upsert?: UserUpsertWithoutTestResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestResultsInput, UserUpdateWithoutTestResultsInput>, UserUncheckedUpdateWithoutTestResultsInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentRequestsInput = {
    create?: XOR<UserCreateWithoutEnrollmentRequestsInput, UserUncheckedCreateWithoutEnrollmentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutEnrollmentRequestsInput = {
    create?: XOR<SchoolCreateWithoutEnrollmentRequestsInput, SchoolUncheckedCreateWithoutEnrollmentRequestsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutEnrollmentRequestsInput
    connect?: SchoolWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type UserUpdateOneRequiredWithoutEnrollmentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentRequestsInput, UserUncheckedCreateWithoutEnrollmentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentRequestsInput
    upsert?: UserUpsertWithoutEnrollmentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentRequestsInput, UserUpdateWithoutEnrollmentRequestsInput>, UserUncheckedUpdateWithoutEnrollmentRequestsInput>
  }

  export type SchoolUpdateOneRequiredWithoutEnrollmentRequestsNestedInput = {
    create?: XOR<SchoolCreateWithoutEnrollmentRequestsInput, SchoolUncheckedCreateWithoutEnrollmentRequestsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutEnrollmentRequestsInput
    upsert?: SchoolUpsertWithoutEnrollmentRequestsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutEnrollmentRequestsInput, SchoolUpdateWithoutEnrollmentRequestsInput>, SchoolUncheckedUpdateWithoutEnrollmentRequestsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumSessionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionType | EnumSessionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionTypeFilter<$PrismaModel> | $Enums.SessionType
  }

  export type NestedEnumSessionFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionFormat | EnumSessionFormatFieldRefInput<$PrismaModel>
    in?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionFormatFilter<$PrismaModel> | $Enums.SessionFormat
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionType | EnumSessionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionType[] | ListEnumSessionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SessionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionTypeFilter<$PrismaModel>
    _max?: NestedEnumSessionTypeFilter<$PrismaModel>
  }

  export type NestedEnumSessionFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionFormat | EnumSessionFormatFieldRefInput<$PrismaModel>
    in?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionFormat[] | ListEnumSessionFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionFormatWithAggregatesFilter<$PrismaModel> | $Enums.SessionFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionFormatFilter<$PrismaModel>
    _max?: NestedEnumSessionFormatFilter<$PrismaModel>
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

  export type NestedEnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type NestedEnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type SchoolUserCreateWithoutSchoolInput = {
    user: UserCreateNestedOneWithoutSchoolUsersInput
  }

  export type SchoolUserUncheckedCreateWithoutSchoolInput = {
    id?: number
    userId: number
  }

  export type SchoolUserCreateOrConnectWithoutSchoolInput = {
    where: SchoolUserWhereUniqueInput
    create: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolUserCreateManySchoolInputEnvelope = {
    data: SchoolUserCreateManySchoolInput | SchoolUserCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutSchoolInput = {
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    instructor?: UserCreateNestedOneWithoutSessionsInput
    candidates?: SessionCandidateCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutSchoolInput = {
    id?: number
    instructorId?: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    candidates?: SessionCandidateUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutSchoolInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput>
  }

  export type SessionCreateManySchoolInputEnvelope = {
    data: SessionCreateManySchoolInput | SessionCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentRequestCreateWithoutSchoolInput = {
    status: $Enums.EnrollmentStatus
    candidate: UserCreateNestedOneWithoutEnrollmentRequestsInput
  }

  export type EnrollmentRequestUncheckedCreateWithoutSchoolInput = {
    id?: number
    candidateId: number
    status: $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestCreateOrConnectWithoutSchoolInput = {
    where: EnrollmentRequestWhereUniqueInput
    create: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput>
  }

  export type EnrollmentRequestCreateManySchoolInputEnvelope = {
    data: EnrollmentRequestCreateManySchoolInput | EnrollmentRequestCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolUserWhereUniqueInput
    update: XOR<SchoolUserUpdateWithoutSchoolInput, SchoolUserUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolUserCreateWithoutSchoolInput, SchoolUserUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolUserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolUserWhereUniqueInput
    data: XOR<SchoolUserUpdateWithoutSchoolInput, SchoolUserUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolUserUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolUserScalarWhereInput
    data: XOR<SchoolUserUpdateManyMutationInput, SchoolUserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolUserScalarWhereInput = {
    AND?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
    OR?: SchoolUserScalarWhereInput[]
    NOT?: SchoolUserScalarWhereInput | SchoolUserScalarWhereInput[]
    id?: IntFilter<"SchoolUser"> | number
    schoolId?: IntFilter<"SchoolUser"> | number
    userId?: IntFilter<"SchoolUser"> | number
  }

  export type SessionUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutSchoolInput, SessionUncheckedUpdateWithoutSchoolInput>
    create: XOR<SessionCreateWithoutSchoolInput, SessionUncheckedCreateWithoutSchoolInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutSchoolInput, SessionUncheckedUpdateWithoutSchoolInput>
  }

  export type SessionUpdateManyWithWhereWithoutSchoolInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    schoolId?: IntFilter<"Session"> | number
    instructorId?: IntNullableFilter<"Session"> | number | null
    type?: EnumSessionTypeFilter<"Session"> | $Enums.SessionType
    format?: EnumSessionFormatFilter<"Session"> | $Enums.SessionFormat
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
  }

  export type EnrollmentRequestUpsertWithWhereUniqueWithoutSchoolInput = {
    where: EnrollmentRequestWhereUniqueInput
    update: XOR<EnrollmentRequestUpdateWithoutSchoolInput, EnrollmentRequestUncheckedUpdateWithoutSchoolInput>
    create: XOR<EnrollmentRequestCreateWithoutSchoolInput, EnrollmentRequestUncheckedCreateWithoutSchoolInput>
  }

  export type EnrollmentRequestUpdateWithWhereUniqueWithoutSchoolInput = {
    where: EnrollmentRequestWhereUniqueInput
    data: XOR<EnrollmentRequestUpdateWithoutSchoolInput, EnrollmentRequestUncheckedUpdateWithoutSchoolInput>
  }

  export type EnrollmentRequestUpdateManyWithWhereWithoutSchoolInput = {
    where: EnrollmentRequestScalarWhereInput
    data: XOR<EnrollmentRequestUpdateManyMutationInput, EnrollmentRequestUncheckedUpdateManyWithoutSchoolInput>
  }

  export type EnrollmentRequestScalarWhereInput = {
    AND?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
    OR?: EnrollmentRequestScalarWhereInput[]
    NOT?: EnrollmentRequestScalarWhereInput | EnrollmentRequestScalarWhereInput[]
    id?: IntFilter<"EnrollmentRequest"> | number
    candidateId?: IntFilter<"EnrollmentRequest"> | number
    schoolId?: IntFilter<"EnrollmentRequest"> | number
    status?: EnumEnrollmentStatusFilter<"EnrollmentRequest"> | $Enums.EnrollmentStatus
  }

  export type SchoolUserCreateWithoutUserInput = {
    school: SchoolCreateNestedOneWithoutUsersInput
  }

  export type SchoolUserUncheckedCreateWithoutUserInput = {
    id?: number
    schoolId: number
  }

  export type SchoolUserCreateOrConnectWithoutUserInput = {
    where: SchoolUserWhereUniqueInput
    create: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput>
  }

  export type SchoolUserCreateManyUserInputEnvelope = {
    data: SchoolUserCreateManyUserInput | SchoolUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutInstructorInput = {
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    candidates?: SessionCandidateCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutInstructorInput = {
    id?: number
    schoolId: number
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    candidates?: SessionCandidateUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutInstructorInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput>
  }

  export type SessionCreateManyInstructorInputEnvelope = {
    data: SessionCreateManyInstructorInput | SessionCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type SessionCandidateCreateWithoutCandidateInput = {
    session: SessionCreateNestedOneWithoutCandidatesInput
  }

  export type SessionCandidateUncheckedCreateWithoutCandidateInput = {
    id?: number
    sessionId: number
  }

  export type SessionCandidateCreateOrConnectWithoutCandidateInput = {
    where: SessionCandidateWhereUniqueInput
    create: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput>
  }

  export type SessionCandidateCreateManyCandidateInputEnvelope = {
    data: SessionCandidateCreateManyCandidateInput | SessionCandidateCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type TestResultCreateWithoutCandidateInput = {
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
  }

  export type TestResultUncheckedCreateWithoutCandidateInput = {
    id?: number
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
  }

  export type TestResultCreateOrConnectWithoutCandidateInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
  }

  export type TestResultCreateManyCandidateInputEnvelope = {
    data: TestResultCreateManyCandidateInput | TestResultCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentRequestCreateWithoutCandidateInput = {
    status: $Enums.EnrollmentStatus
    school: SchoolCreateNestedOneWithoutEnrollmentRequestsInput
  }

  export type EnrollmentRequestUncheckedCreateWithoutCandidateInput = {
    id?: number
    schoolId: number
    status: $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestCreateOrConnectWithoutCandidateInput = {
    where: EnrollmentRequestWhereUniqueInput
    create: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput>
  }

  export type EnrollmentRequestCreateManyCandidateInputEnvelope = {
    data: EnrollmentRequestCreateManyCandidateInput | EnrollmentRequestCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type CandidateInstructorCreateWithoutInstructorInput = {
    candidate: UserCreateNestedOneWithoutCandidateInstructorsInput
  }

  export type CandidateInstructorUncheckedCreateWithoutInstructorInput = {
    id?: number
    candidateId: number
  }

  export type CandidateInstructorCreateOrConnectWithoutInstructorInput = {
    where: CandidateInstructorWhereUniqueInput
    create: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type CandidateInstructorCreateManyInstructorInputEnvelope = {
    data: CandidateInstructorCreateManyInstructorInput | CandidateInstructorCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type CandidateInstructorCreateWithoutCandidateInput = {
    instructor: UserCreateNestedOneWithoutInstructorCandidatesInput
  }

  export type CandidateInstructorUncheckedCreateWithoutCandidateInput = {
    id?: number
    instructorId: number
  }

  export type CandidateInstructorCreateOrConnectWithoutCandidateInput = {
    where: CandidateInstructorWhereUniqueInput
    create: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateInstructorCreateManyCandidateInputEnvelope = {
    data: CandidateInstructorCreateManyCandidateInput | CandidateInstructorCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type InstructorSlotCreateWithoutInstructorInput = {
    day: $Enums.Day
    startTime: Date | string
  }

  export type InstructorSlotUncheckedCreateWithoutInstructorInput = {
    id?: number
    day: $Enums.Day
    startTime: Date | string
  }

  export type InstructorSlotCreateOrConnectWithoutInstructorInput = {
    where: InstructorSlotWhereUniqueInput
    create: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorSlotCreateManyInstructorInputEnvelope = {
    data: InstructorSlotCreateManyInstructorInput | InstructorSlotCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUserUpsertWithWhereUniqueWithoutUserInput = {
    where: SchoolUserWhereUniqueInput
    update: XOR<SchoolUserUpdateWithoutUserInput, SchoolUserUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolUserCreateWithoutUserInput, SchoolUserUncheckedCreateWithoutUserInput>
  }

  export type SchoolUserUpdateWithWhereUniqueWithoutUserInput = {
    where: SchoolUserWhereUniqueInput
    data: XOR<SchoolUserUpdateWithoutUserInput, SchoolUserUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUserUpdateManyWithWhereWithoutUserInput = {
    where: SchoolUserScalarWhereInput
    data: XOR<SchoolUserUpdateManyMutationInput, SchoolUserUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutInstructorInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutInstructorInput, SessionUncheckedUpdateWithoutInstructorInput>
    create: XOR<SessionCreateWithoutInstructorInput, SessionUncheckedCreateWithoutInstructorInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutInstructorInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutInstructorInput, SessionUncheckedUpdateWithoutInstructorInput>
  }

  export type SessionUpdateManyWithWhereWithoutInstructorInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutInstructorInput>
  }

  export type SessionCandidateUpsertWithWhereUniqueWithoutCandidateInput = {
    where: SessionCandidateWhereUniqueInput
    update: XOR<SessionCandidateUpdateWithoutCandidateInput, SessionCandidateUncheckedUpdateWithoutCandidateInput>
    create: XOR<SessionCandidateCreateWithoutCandidateInput, SessionCandidateUncheckedCreateWithoutCandidateInput>
  }

  export type SessionCandidateUpdateWithWhereUniqueWithoutCandidateInput = {
    where: SessionCandidateWhereUniqueInput
    data: XOR<SessionCandidateUpdateWithoutCandidateInput, SessionCandidateUncheckedUpdateWithoutCandidateInput>
  }

  export type SessionCandidateUpdateManyWithWhereWithoutCandidateInput = {
    where: SessionCandidateScalarWhereInput
    data: XOR<SessionCandidateUpdateManyMutationInput, SessionCandidateUncheckedUpdateManyWithoutCandidateInput>
  }

  export type SessionCandidateScalarWhereInput = {
    AND?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
    OR?: SessionCandidateScalarWhereInput[]
    NOT?: SessionCandidateScalarWhereInput | SessionCandidateScalarWhereInput[]
    id?: IntFilter<"SessionCandidate"> | number
    sessionId?: IntFilter<"SessionCandidate"> | number
    candidateId?: IntFilter<"SessionCandidate"> | number
  }

  export type TestResultUpsertWithWhereUniqueWithoutCandidateInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutCandidateInput, TestResultUncheckedUpdateWithoutCandidateInput>
    create: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutCandidateInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutCandidateInput, TestResultUncheckedUpdateWithoutCandidateInput>
  }

  export type TestResultUpdateManyWithWhereWithoutCandidateInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutCandidateInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    OR?: TestResultScalarWhereInput[]
    NOT?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    id?: IntFilter<"TestResult"> | number
    candidateId?: IntFilter<"TestResult"> | number
    date?: DateTimeFilter<"TestResult"> | Date | string
    type?: EnumSessionTypeFilter<"TestResult"> | $Enums.SessionType
    points?: DecimalNullableFilter<"TestResult"> | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFilter<"TestResult"> | boolean
  }

  export type EnrollmentRequestUpsertWithWhereUniqueWithoutCandidateInput = {
    where: EnrollmentRequestWhereUniqueInput
    update: XOR<EnrollmentRequestUpdateWithoutCandidateInput, EnrollmentRequestUncheckedUpdateWithoutCandidateInput>
    create: XOR<EnrollmentRequestCreateWithoutCandidateInput, EnrollmentRequestUncheckedCreateWithoutCandidateInput>
  }

  export type EnrollmentRequestUpdateWithWhereUniqueWithoutCandidateInput = {
    where: EnrollmentRequestWhereUniqueInput
    data: XOR<EnrollmentRequestUpdateWithoutCandidateInput, EnrollmentRequestUncheckedUpdateWithoutCandidateInput>
  }

  export type EnrollmentRequestUpdateManyWithWhereWithoutCandidateInput = {
    where: EnrollmentRequestScalarWhereInput
    data: XOR<EnrollmentRequestUpdateManyMutationInput, EnrollmentRequestUncheckedUpdateManyWithoutCandidateInput>
  }

  export type CandidateInstructorUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CandidateInstructorWhereUniqueInput
    update: XOR<CandidateInstructorUpdateWithoutInstructorInput, CandidateInstructorUncheckedUpdateWithoutInstructorInput>
    create: XOR<CandidateInstructorCreateWithoutInstructorInput, CandidateInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type CandidateInstructorUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CandidateInstructorWhereUniqueInput
    data: XOR<CandidateInstructorUpdateWithoutInstructorInput, CandidateInstructorUncheckedUpdateWithoutInstructorInput>
  }

  export type CandidateInstructorUpdateManyWithWhereWithoutInstructorInput = {
    where: CandidateInstructorScalarWhereInput
    data: XOR<CandidateInstructorUpdateManyMutationInput, CandidateInstructorUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CandidateInstructorScalarWhereInput = {
    AND?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
    OR?: CandidateInstructorScalarWhereInput[]
    NOT?: CandidateInstructorScalarWhereInput | CandidateInstructorScalarWhereInput[]
    id?: IntFilter<"CandidateInstructor"> | number
    instructorId?: IntFilter<"CandidateInstructor"> | number
    candidateId?: IntFilter<"CandidateInstructor"> | number
  }

  export type CandidateInstructorUpsertWithWhereUniqueWithoutCandidateInput = {
    where: CandidateInstructorWhereUniqueInput
    update: XOR<CandidateInstructorUpdateWithoutCandidateInput, CandidateInstructorUncheckedUpdateWithoutCandidateInput>
    create: XOR<CandidateInstructorCreateWithoutCandidateInput, CandidateInstructorUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateInstructorUpdateWithWhereUniqueWithoutCandidateInput = {
    where: CandidateInstructorWhereUniqueInput
    data: XOR<CandidateInstructorUpdateWithoutCandidateInput, CandidateInstructorUncheckedUpdateWithoutCandidateInput>
  }

  export type CandidateInstructorUpdateManyWithWhereWithoutCandidateInput = {
    where: CandidateInstructorScalarWhereInput
    data: XOR<CandidateInstructorUpdateManyMutationInput, CandidateInstructorUncheckedUpdateManyWithoutCandidateInput>
  }

  export type InstructorSlotUpsertWithWhereUniqueWithoutInstructorInput = {
    where: InstructorSlotWhereUniqueInput
    update: XOR<InstructorSlotUpdateWithoutInstructorInput, InstructorSlotUncheckedUpdateWithoutInstructorInput>
    create: XOR<InstructorSlotCreateWithoutInstructorInput, InstructorSlotUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorSlotUpdateWithWhereUniqueWithoutInstructorInput = {
    where: InstructorSlotWhereUniqueInput
    data: XOR<InstructorSlotUpdateWithoutInstructorInput, InstructorSlotUncheckedUpdateWithoutInstructorInput>
  }

  export type InstructorSlotUpdateManyWithWhereWithoutInstructorInput = {
    where: InstructorSlotScalarWhereInput
    data: XOR<InstructorSlotUpdateManyMutationInput, InstructorSlotUncheckedUpdateManyWithoutInstructorInput>
  }

  export type InstructorSlotScalarWhereInput = {
    AND?: InstructorSlotScalarWhereInput | InstructorSlotScalarWhereInput[]
    OR?: InstructorSlotScalarWhereInput[]
    NOT?: InstructorSlotScalarWhereInput | InstructorSlotScalarWhereInput[]
    id?: IntFilter<"InstructorSlot"> | number
    instructorId?: IntFilter<"InstructorSlot"> | number
    day?: EnumDayFilter<"InstructorSlot"> | $Enums.Day
    startTime?: DateTimeFilter<"InstructorSlot"> | Date | string
  }

  export type SchoolCreateWithoutUsersInput = {
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    sessions?: SessionCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUsersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSchoolUsersInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutSchoolUsersInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutSchoolUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolUsersInput, UserUncheckedCreateWithoutSchoolUsersInput>
  }

  export type SchoolUpsertWithoutUsersInput = {
    update: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
    create: XOR<SchoolCreateWithoutUsersInput, SchoolUncheckedCreateWithoutUsersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUsersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUsersInput, SchoolUncheckedUpdateWithoutUsersInput>
  }

  export type SchoolUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutSchoolUsersInput = {
    update: XOR<UserUpdateWithoutSchoolUsersInput, UserUncheckedUpdateWithoutSchoolUsersInput>
    create: XOR<UserCreateWithoutSchoolUsersInput, UserUncheckedCreateWithoutSchoolUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchoolUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchoolUsersInput, UserUncheckedUpdateWithoutSchoolUsersInput>
  }

  export type UserUpdateWithoutSchoolUsersInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type SchoolCreateWithoutSessionsInput = {
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserUncheckedCreateNestedManyWithoutSchoolInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSessionsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
  }

  export type UserCreateWithoutSessionsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type SessionCandidateCreateWithoutSessionInput = {
    candidate: UserCreateNestedOneWithoutSessionCandidatesInput
  }

  export type SessionCandidateUncheckedCreateWithoutSessionInput = {
    id?: number
    candidateId: number
  }

  export type SessionCandidateCreateOrConnectWithoutSessionInput = {
    where: SessionCandidateWhereUniqueInput
    create: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput>
  }

  export type SessionCandidateCreateManySessionInputEnvelope = {
    data: SessionCandidateCreateManySessionInput | SessionCandidateCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutSessionsInput = {
    update: XOR<SchoolUpdateWithoutSessionsInput, SchoolUncheckedUpdateWithoutSessionsInput>
    create: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSessionsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSessionsInput, SchoolUncheckedUpdateWithoutSessionsInput>
  }

  export type SchoolUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUncheckedUpdateManyWithoutSchoolNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type SessionCandidateUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionCandidateWhereUniqueInput
    update: XOR<SessionCandidateUpdateWithoutSessionInput, SessionCandidateUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionCandidateCreateWithoutSessionInput, SessionCandidateUncheckedCreateWithoutSessionInput>
  }

  export type SessionCandidateUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionCandidateWhereUniqueInput
    data: XOR<SessionCandidateUpdateWithoutSessionInput, SessionCandidateUncheckedUpdateWithoutSessionInput>
  }

  export type SessionCandidateUpdateManyWithWhereWithoutSessionInput = {
    where: SessionCandidateScalarWhereInput
    data: XOR<SessionCandidateUpdateManyMutationInput, SessionCandidateUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCreateWithoutCandidatesInput = {
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    instructor?: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutCandidatesInput = {
    id?: number
    schoolId: number
    instructorId?: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
  }

  export type SessionCreateOrConnectWithoutCandidatesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCandidatesInput, SessionUncheckedCreateWithoutCandidatesInput>
  }

  export type UserCreateWithoutSessionCandidatesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutSessionCandidatesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutSessionCandidatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionCandidatesInput, UserUncheckedCreateWithoutSessionCandidatesInput>
  }

  export type SessionUpsertWithoutCandidatesInput = {
    update: XOR<SessionUpdateWithoutCandidatesInput, SessionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<SessionCreateWithoutCandidatesInput, SessionUncheckedCreateWithoutCandidatesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutCandidatesInput, SessionUncheckedUpdateWithoutCandidatesInput>
  }

  export type SessionUpdateWithoutCandidatesInput = {
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    instructor?: UserUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutCandidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSessionCandidatesInput = {
    update: XOR<UserUpdateWithoutSessionCandidatesInput, UserUncheckedUpdateWithoutSessionCandidatesInput>
    create: XOR<UserCreateWithoutSessionCandidatesInput, UserUncheckedCreateWithoutSessionCandidatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionCandidatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionCandidatesInput, UserUncheckedUpdateWithoutSessionCandidatesInput>
  }

  export type UserUpdateWithoutSessionCandidatesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionCandidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserCreateWithoutInstructorCandidatesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutInstructorCandidatesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutInstructorCandidatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorCandidatesInput, UserUncheckedCreateWithoutInstructorCandidatesInput>
  }

  export type UserCreateWithoutCandidateInstructorsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutCandidateInstructorsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutCandidateInstructorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidateInstructorsInput, UserUncheckedCreateWithoutCandidateInstructorsInput>
  }

  export type UserUpsertWithoutInstructorCandidatesInput = {
    update: XOR<UserUpdateWithoutInstructorCandidatesInput, UserUncheckedUpdateWithoutInstructorCandidatesInput>
    create: XOR<UserCreateWithoutInstructorCandidatesInput, UserUncheckedCreateWithoutInstructorCandidatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorCandidatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorCandidatesInput, UserUncheckedUpdateWithoutInstructorCandidatesInput>
  }

  export type UserUpdateWithoutInstructorCandidatesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorCandidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserUpsertWithoutCandidateInstructorsInput = {
    update: XOR<UserUpdateWithoutCandidateInstructorsInput, UserUncheckedUpdateWithoutCandidateInstructorsInput>
    create: XOR<UserCreateWithoutCandidateInstructorsInput, UserUncheckedCreateWithoutCandidateInstructorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidateInstructorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidateInstructorsInput, UserUncheckedUpdateWithoutCandidateInstructorsInput>
  }

  export type UserUpdateWithoutCandidateInstructorsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidateInstructorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserCreateWithoutInstructorSlotInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutInstructorSlotInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutInstructorSlotInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorSlotInput, UserUncheckedCreateWithoutInstructorSlotInput>
  }

  export type UserUpsertWithoutInstructorSlotInput = {
    update: XOR<UserUpdateWithoutInstructorSlotInput, UserUncheckedUpdateWithoutInstructorSlotInput>
    create: XOR<UserCreateWithoutInstructorSlotInput, UserUncheckedCreateWithoutInstructorSlotInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorSlotInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorSlotInput, UserUncheckedUpdateWithoutInstructorSlotInput>
  }

  export type UserUpdateWithoutInstructorSlotInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserCreateWithoutTestResultsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutTestResultsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    enrollmentRequests?: EnrollmentRequestUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutTestResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
  }

  export type UserUpsertWithoutTestResultsInput = {
    update: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
  }

  export type UserUpdateWithoutTestResultsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    enrollmentRequests?: EnrollmentRequestUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserCreateWithoutEnrollmentRequestsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateCreateNestedManyWithoutCandidateInput
    testResults?: TestResultCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateWithoutEnrollmentRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutInstructorInput
    sessionCandidates?: SessionCandidateUncheckedCreateNestedManyWithoutCandidateInput
    testResults?: TestResultUncheckedCreateNestedManyWithoutCandidateInput
    instructorCandidates?: CandidateInstructorUncheckedCreateNestedManyWithoutInstructorInput
    candidateInstructors?: CandidateInstructorUncheckedCreateNestedManyWithoutCandidateInput
    InstructorSlot?: InstructorSlotUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserCreateOrConnectWithoutEnrollmentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentRequestsInput, UserUncheckedCreateWithoutEnrollmentRequestsInput>
  }

  export type SchoolCreateWithoutEnrollmentRequestsInput = {
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserCreateNestedManyWithoutSchoolInput
    sessions?: SessionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutEnrollmentRequestsInput = {
    id?: number
    name: string
    city: string
    address: string
    contactNumber: string
    email: string
    enrollmentFee: Decimal | DecimalJsLike | number | string
    info?: string | null
    users?: SchoolUserUncheckedCreateNestedManyWithoutSchoolInput
    sessions?: SessionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutEnrollmentRequestsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutEnrollmentRequestsInput, SchoolUncheckedCreateWithoutEnrollmentRequestsInput>
  }

  export type UserUpsertWithoutEnrollmentRequestsInput = {
    update: XOR<UserUpdateWithoutEnrollmentRequestsInput, UserUncheckedUpdateWithoutEnrollmentRequestsInput>
    create: XOR<UserCreateWithoutEnrollmentRequestsInput, UserUncheckedCreateWithoutEnrollmentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentRequestsInput, UserUncheckedUpdateWithoutEnrollmentRequestsInput>
  }

  export type UserUpdateWithoutEnrollmentRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    schoolUsers?: SchoolUserUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutInstructorNestedInput
    sessionCandidates?: SessionCandidateUncheckedUpdateManyWithoutCandidateNestedInput
    testResults?: TestResultUncheckedUpdateManyWithoutCandidateNestedInput
    instructorCandidates?: CandidateInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    candidateInstructors?: CandidateInstructorUncheckedUpdateManyWithoutCandidateNestedInput
    InstructorSlot?: InstructorSlotUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type SchoolUpsertWithoutEnrollmentRequestsInput = {
    update: XOR<SchoolUpdateWithoutEnrollmentRequestsInput, SchoolUncheckedUpdateWithoutEnrollmentRequestsInput>
    create: XOR<SchoolCreateWithoutEnrollmentRequestsInput, SchoolUncheckedCreateWithoutEnrollmentRequestsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutEnrollmentRequestsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutEnrollmentRequestsInput, SchoolUncheckedUpdateWithoutEnrollmentRequestsInput>
  }

  export type SchoolUpdateWithoutEnrollmentRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUpdateManyWithoutSchoolNestedInput
    sessions?: SessionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutEnrollmentRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    enrollmentFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SchoolUserUncheckedUpdateManyWithoutSchoolNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUserCreateManySchoolInput = {
    id?: number
    userId: number
  }

  export type SessionCreateManySchoolInput = {
    id?: number
    instructorId?: number | null
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
  }

  export type EnrollmentRequestCreateManySchoolInput = {
    id?: number
    candidateId: number
    status: $Enums.EnrollmentStatus
  }

  export type SchoolUserUpdateWithoutSchoolInput = {
    user?: UserUpdateOneRequiredWithoutSchoolUsersNestedInput
  }

  export type SchoolUserUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolUserUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUpdateWithoutSchoolInput = {
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneWithoutSessionsNestedInput
    candidates?: SessionCandidateUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: SessionCandidateUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentRequestUpdateWithoutSchoolInput = {
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    candidate?: UserUpdateOneRequiredWithoutEnrollmentRequestsNestedInput
  }

  export type EnrollmentRequestUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type SchoolUserCreateManyUserInput = {
    id?: number
    schoolId: number
  }

  export type SessionCreateManyInstructorInput = {
    id?: number
    schoolId: number
    type: $Enums.SessionType
    format: $Enums.SessionFormat
    startTime: Date | string
    endTime: Date | string
  }

  export type SessionCandidateCreateManyCandidateInput = {
    id?: number
    sessionId: number
  }

  export type TestResultCreateManyCandidateInput = {
    id?: number
    date: Date | string
    type: $Enums.SessionType
    points?: Decimal | DecimalJsLike | number | string | null
    passed: boolean
  }

  export type EnrollmentRequestCreateManyCandidateInput = {
    id?: number
    schoolId: number
    status: $Enums.EnrollmentStatus
  }

  export type CandidateInstructorCreateManyInstructorInput = {
    id?: number
    candidateId: number
  }

  export type CandidateInstructorCreateManyCandidateInput = {
    id?: number
    instructorId: number
  }

  export type InstructorSlotCreateManyInstructorInput = {
    id?: number
    day: $Enums.Day
    startTime: Date | string
  }

  export type SchoolUserUpdateWithoutUserInput = {
    school?: SchoolUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SchoolUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUpdateWithoutInstructorInput = {
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    candidates?: SessionCandidateUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: SessionCandidateUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    format?: EnumSessionFormatFieldUpdateOperationsInput | $Enums.SessionFormat
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCandidateUpdateWithoutCandidateInput = {
    session?: SessionUpdateOneRequiredWithoutCandidatesNestedInput
  }

  export type SessionCandidateUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCandidateUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUpdateWithoutCandidateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestResultUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestResultUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSessionTypeFieldUpdateOperationsInput | $Enums.SessionType
    points?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    passed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentRequestUpdateWithoutCandidateInput = {
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    school?: SchoolUpdateOneRequiredWithoutEnrollmentRequestsNestedInput
  }

  export type EnrollmentRequestUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentRequestUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type CandidateInstructorUpdateWithoutInstructorInput = {
    candidate?: UserUpdateOneRequiredWithoutCandidateInstructorsNestedInput
  }

  export type CandidateInstructorUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateInstructorUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateInstructorUpdateWithoutCandidateInput = {
    instructor?: UserUpdateOneRequiredWithoutInstructorCandidatesNestedInput
  }

  export type CandidateInstructorUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateInstructorUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: IntFieldUpdateOperationsInput | number
  }

  export type InstructorSlotUpdateWithoutInstructorInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorSlotUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorSlotUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCandidateCreateManySessionInput = {
    id?: number
    candidateId: number
  }

  export type SessionCandidateUpdateWithoutSessionInput = {
    candidate?: UserUpdateOneRequiredWithoutSessionCandidatesNestedInput
  }

  export type SessionCandidateUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCandidateUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
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