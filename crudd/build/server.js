"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_express = __toESM(require("express"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var swaggerDocument = JSON.parse(import_fs.default.readFileSync(import_path.default.join(__dirname, "docs/swagger.json"), "utf8"));
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.use("/api-docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swaggerDocument));
var app_default = app;

// src/utils/config.ts
var import_dotenv = __toESM(require("dotenv"));
var import_path2 = __toESM(require("path"));
var yup = __toESM(require("yup"));
function loadConfig() {
  const env = "production";
  const envPath = import_path2.default.resolve(__dirname, `../configs/.env.${env}`);
  import_dotenv.default.config({ path: envPath });
  const envVarsSchema = yup.object().shape({
    NODE_ENV: yup.string().oneOf(["development", "production", "test"]).default("development"),
    PORT: yup.number().default(3e3),
    MONGODB_URL: yup.string().required()
  }).required();
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    throw new Error(`Config validation error: ${error}`);
  }
  return {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongodbUrl: envVars.MONGODB_URL
  };
}
var configs = loadConfig();
var config_default = configs;

// src/database/connection.ts
var import_mongoose = __toESM(require("mongoose"));
async function connectMongoDB() {
  try {
    await import_mongoose.default.connect(
      config_default.mongodbUrl
    );
    console.log("Connect to MongoDB successfully!");
  } catch (error) {
    console.log("Error Conecction to MongoDB", error.messsage);
  }
}

// src/server.ts
function run() {
  connectMongoDB();
  app_default.listen(config_default.port, () => {
    console.log(`User Service running on Port: ${config_default.port}`);
  });
}
run();
