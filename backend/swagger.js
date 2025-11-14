const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API BPO Node",
      version: "1.0.0",
      description: "Documentación de la API para el sistema de gestiones",
    },
    servers: [
      { url: "http://localhost:3000/api/v1" }
    ],
    components: {
      schemas: {
        Gestion: {
          type: "object",
          required: ["clienteDocumento","clienteNombre","asesorId","tipificacion"],
          properties: {
            id: { type: "integer", description: "ID autogenerado" },
            clienteDocumento: { type: "string", description: "Documento del cliente" },
            clienteNombre: { type: "string", description: "Nombre del cliente" },
            asesorId: { type: "string", description: "ID del asesor asignado" },
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
              ],
              description: "Categoría principal de la gestión"
            },
            subtipificacion: { type: "string", description: "Subcategoría adicional" },
            canalOficial: { type: "boolean", description: "Si fue canal oficial" },
            valorCompromiso: { type: "number", description: "Valor pactado en caso de promesa de pago" },
            fechaCompromiso: { type: "string", format: "date", description: "Fecha del compromiso" },
            observaciones: { type: "string", description: "Notas y detalles adicionales" },
            recordingUrl: { type: "string", description: "URL de la grabación" },
            estado: { type: "string", enum: ["abierta","cerrada"], description: "Estado de la gestión" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" }
          }
        }
      }
    }
  },
  // 🔥 Aquí la ruta correcta a tus archivos de rutas con comentarios
  apis: [path.join(__dirname, "src/routes/*.js")]
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger docs available at http://localhost:3000/docs");
}

module.exports = swaggerDocs;
