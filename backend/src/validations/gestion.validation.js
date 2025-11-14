const Joi = require("joi");

const gestionSchema = Joi.object({
  clienteDocumento: Joi.string().required(),
  clienteNombre: Joi.string().required(),
  asesorId: Joi.string().required(),
  tipificacion: Joi.string().required(),
  subtipificacion: Joi.string().required(),
  canalOficial: Joi.boolean().required(),
  valorCompromiso: Joi.number().required(),
  fechaCompromiso: Joi.date().required(),
  observaciones: Joi.string().allow("", null),
  recordingUrl: Joi.string().uri().allow("", null),
  estado: Joi.string().valid("abierta", "cerrada").default("abierta")
});

module.exports = { gestionSchema };
