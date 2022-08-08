import express from "express";

import router from "../router/routes";

const app = express();

const AppPort = {
  port: process.env.PORT || 3000,
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use(router);

app.listen(AppPort.port, () =>
  console.log(`Listening on port ${AppPort.port}`)
);
