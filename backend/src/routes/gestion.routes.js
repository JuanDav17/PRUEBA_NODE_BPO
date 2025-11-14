const router = require("express").Router();
const controller = require("../controllers/gestion.controller");
const { validate } = require("../middlewares/validate");
const { gestionSchema } = require("../validations/gestion.validation");

/**
 * @openapi
 * /gestiones:
 *   post:
 *     summary: Crear una gestión
 *     tags:
 *       - Gestiones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gestion'
 *     responses:
 *       201:
 *         description: Gestión creada
 */
router.post("/", validate(gestionSchema), controller.create);

/**
 * @openapi
 * /gestiones/{id}:
 *   put:
 *     summary: Actualizar una gestión completa
 *     tags:
 *       - Gestiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gestion'
 *     responses:
 *       200:
 *         description: Gestión actualizada
 */
router.put("/:id", validate(gestionSchema), controller.update);

/**
 * @openapi
 * /gestiones:
 *   get:
 *     summary: Listar todas las gestiones
 *     tags:
 *       - Gestiones
 *     responses:
 *       200:
 *         description: Lista de gestiones
 */
router.get("/", controller.list);

/**
 * @openapi
 * /gestiones/{id}:
 *   get:
 *     summary: Obtener una gestión por ID
 *     tags:
 *       - Gestiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gestión encontrada
 */
router.get("/:id", controller.detail);

/**
 * @openapi
 * /gestiones/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una gestión
 *     tags:
 *       - Gestiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gestión actualizada parcialmente
 */
router.patch("/:id", controller.update);

/**
 * @openapi
 * /gestiones/{id}:
 *   delete:
 *     summary: Eliminar una gestión
 *     tags:
 *       - Gestiones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gestión eliminada
 */
router.delete("/:id", controller.delete);

module.exports = router;
