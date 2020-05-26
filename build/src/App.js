"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
require('express-async-errors');
const app = express_1.default();
// app.use(helmet());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(compression());
// app.use(morgan('tiny'));
// app.use(TodosAPI);
// app.use((req, res, next) => {
//   next(new httpErrors.NotFound('Route not found'));
// });
// // centralized-catch all unhandled errors here
// app.use((err: HttpError, req: Request, res: Response) => {
//   console.error(err);
//   return res.status(err.status || 500).json({
//     error:
//       (!err.status || err.status === 500) && config.nodeEnv !== 'development'
//         ? 'Internal Server Error'
//         : err.message,
//     status: err.status || 500
//   });
// });
app.listen(config_1.default.port || 5000, () => {
    console.log(`server started listening on ${config_1.default.port || 5000}`);
});
