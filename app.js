const exxpress = require("express");
const app = exxpress();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      server: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js]
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *      description: Use to ruquest all customers
 *      responses:
 *        '200':
 *          description: A successful response
 *
 */
app.get("/customers", (req, res) => {
  res.send("Customer results");
});

/**
 * @swagger
 * /customers:
 *  put:
 *      description: Use to ruquest all customers
 *      responses:
 *        '201':
 *          description: A successful response
 *
 */
app.put("/customers", (req, res) => {
  res.send("Successully uploaded Customer results");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
