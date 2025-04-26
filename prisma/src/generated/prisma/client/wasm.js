
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ChampionScalarFieldEnum = {
  id: 'id',
  champ_code: 'champ_code',
  champ_name: 'champ_name',
  image_url: 'image_url'
};

exports.Prisma.RoleScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name'
};

exports.Prisma.Champion_RoleScalarFieldEnum = {
  champId: 'champId',
  roleId: 'roleId'
};

exports.Prisma.SkinScalarFieldEnum = {
  id: 'id',
  skin_name: 'skin_name',
  champ_id: 'champ_id',
  skin_number: 'skin_number',
  local_skin_path: 'local_skin_path'
};

exports.Prisma.FavouriteSkinScalarFieldEnum = {
  skin_id: 'skin_id'
};

exports.Prisma.GameSettingsScalarFieldEnum = {
  settings_Id: 'settings_Id',
  game_path: 'game_path',
  patchVersion: 'patchVersion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Champion: 'Champion',
  Role: 'Role',
  Champion_Role: 'Champion_Role',
  Skin: 'Skin',
  FavouriteSkin: 'FavouriteSkin',
  GameSettings: 'GameSettings'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\msher\\WebstormProjects\\ExaltedSkins\\prisma\\src\\generated\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\msher\\WebstormProjects\\ExaltedSkins\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../..",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n//\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"src/generated/prisma/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Champion {\n  id         Int             @id @unique\n  champ_code String\n  champ_name String\n  image_url  String\n  skins      Skin[]\n  roles      Champion_Role[]\n}\n\nmodel Role {\n  role_id   Int             @id @unique\n  role_name String\n  champions Champion_Role[]\n}\n\nmodel Champion_Role {\n  champId Int\n  roleId  Int\n\n  champion Champion @relation(fields: [champId], references: [id])\n  role     Role     @relation(fields: [roleId], references: [role_id])\n\n  @@id([champId, roleId]) // Composite primary key for uniqueness\n}\n\nmodel Skin {\n  id              String         @id @unique\n  skin_name       String\n  champ_id        Int\n  skin_number     Int\n  local_skin_path String?\n  champion        Champion       @relation(fields: [champ_id], references: [id], onDelete: NoAction)\n  FavouriteSkin   FavouriteSkin?\n}\n\nmodel FavouriteSkin {\n  skin_id String @id @unique\n  skin    Skin   @relation(fields: [skin_id], references: [id], onDelete: NoAction)\n}\n\nmodel GameSettings {\n  settings_Id  String  @id @unique\n  game_path    String  @unique\n  patchVersion String? @unique\n}\n",
  "inlineSchemaHash": "563133877b14d4d7446101305019c6ee50f239bf0112079fbc1b6eac09ea1685",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Champion\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"champ_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"champ_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"skins\",\"kind\":\"object\",\"type\":\"Skin\",\"relationName\":\"ChampionToSkin\"},{\"name\":\"roles\",\"kind\":\"object\",\"type\":\"Champion_Role\",\"relationName\":\"ChampionToChampion_Role\"}],\"dbName\":null},\"Role\":{\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"role_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"champions\",\"kind\":\"object\",\"type\":\"Champion_Role\",\"relationName\":\"Champion_RoleToRole\"}],\"dbName\":null},\"Champion_Role\":{\"fields\":[{\"name\":\"champId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"roleId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"champion\",\"kind\":\"object\",\"type\":\"Champion\",\"relationName\":\"ChampionToChampion_Role\"},{\"name\":\"role\",\"kind\":\"object\",\"type\":\"Role\",\"relationName\":\"Champion_RoleToRole\"}],\"dbName\":null},\"Skin\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"skin_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"champ_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"skin_number\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"local_skin_path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"champion\",\"kind\":\"object\",\"type\":\"Champion\",\"relationName\":\"ChampionToSkin\"},{\"name\":\"FavouriteSkin\",\"kind\":\"object\",\"type\":\"FavouriteSkin\",\"relationName\":\"FavouriteSkinToSkin\"}],\"dbName\":null},\"FavouriteSkin\":{\"fields\":[{\"name\":\"skin_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"skin\",\"kind\":\"object\",\"type\":\"Skin\",\"relationName\":\"FavouriteSkinToSkin\"}],\"dbName\":null},\"GameSettings\":{\"fields\":[{\"name\":\"settings_Id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"game_path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"patchVersion\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

