const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API BPO Node",
      version: "1.0.0",
      description: "Documentación de la API para el sistema de gestiones BPO",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
    components: {
      schemas: {
        Gestion: {
          type: "object",
          required: [
            "clienteDocumento",
            "clienteNombre",
            "asesorId",
            "tipificacion"
          ],
          properties: {
            id: { type: "integer" },
            clienteDocumento: { type: "string" },
            clienteNombre: { type: "string" },
            asesorId: { type: "string" },
            tipificacion: {
              type: "string",
              enum: [
                "contacto_efectivo",
                "no_contacto",
                "promesa_pago",
                "pago_realizado",
                "refinanciacion",
                "informacion",
                "escalamiento",
                "otros"
              ]
            },
            subtipificacion: { type: "string" },
            canalOficial: { type: "boolean" },
            valorCompromiso: { type: "number" },
            fechaCompromiso: { type: "string", format: "date" },
            observaciones: { type: "string" },
            recordingUrl: { type: "string" },
            estado: { type: "string", enum: ["abierta", "cerrada"] },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" }
          },
        },
      },
    },
  },

  // 🔥 Ruta correcta donde Swagger debe leer tus endpoints
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger docs available at http://localhost:3000/docs");
}

module.exports = swaggerDocs;
