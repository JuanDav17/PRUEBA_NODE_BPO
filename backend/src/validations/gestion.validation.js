const Joi = require("joi");

const gestionSchema = Joi.object({
  clienteDocumento: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(5)
    .max(15)
    .required()
    .messages({
      "string.pattern.base": "El documento solo debe contener números",
      "string.min": "El documento debe tener mínimo 5 dígitos"
    }),

  clienteNombre: Joi.string()
    .min(3)
    .max(100)
    .pattern(/^[a-zA-ZÀ-ÿ\s]+$/) // permite acentos y espacios
    .required()
    .messages({
      "string.pattern.base": "El nombre solo puede contener letras y espacios"
    }),

  asesorId: Joi.string()
    .min(3)
    .max(20)
    .required(),

  tipificacion: Joi.string()
    .valid(
      "contacto_efectivo", "no_contacto", "promesa_pago",
      "pago_realizado", "refinanciacion", "informacion",
      "escalamiento", "otros"
    )
    .required(),

  subtipificacion: Joi.string().allow(null, ""),

  canalOficial: Joi.boolean().required(),

  valorCompromiso: Joi.number()
    .min(1)
    .required()
    .messages({
      "number.min": "El valor del compromiso debe ser mayor a 0"
    }),

  fechaCompromiso: Joi.date()
    .min("now")
    .required()
    .messages({
      "date.min": "La fecha de compromiso no puede ser pasada"
    }),

  observaciones: Joi.string()
    .max(500)
    .allow(null, ""),

  recordingUrl: Joi.string()
    .uri()
    .allow(null, ""),

  estado: Joi.string()
    .valid("abierta", "cerrada")
    .default("abierta")
});

module.exports = { gestionSchema };
