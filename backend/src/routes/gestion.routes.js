const router = require("express").Router();
const controller = require("../controllers/gestion.controller");
const { validate } = require("../middlewares/validate");
const { gestionSchema } = require("../validations/gestion.validation");

/**
 * @openapi
 * /gestion:
 *   get:
 *     summary: Listar todas las gestiones
 *     tags:
 *       - Gestion
 *     responses:
 *       200:
 *         description: Lista de gestiones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Gestion'
 *                 total:
 *                   type: integer
 */
router.get("/", controller.list);

/**
 * @openapi
 * /gestion/{id}:
 *   get:
 *     summary: Obtener detalle de una gestión
 *     tags:
 *       - Gestion
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de la gestión
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gestion'
 */
router.get("/:id", controller.detail);

/**
 * @openapi
 * /gestion:
 *   post:
 *     summary: Crear una nueva gestión
 *     tags:
 *       - Gestion
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gestion'
 *     responses:
 *       201:
 *         description: Gestión creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gestion'
 */
router.post("/", validate(gestionSchema), controller.create);

/**
 * @openapi
 * /gestion/{id}:
 *   put:
 *     summary: Actualizar una gestión
 *     tags:
 *       - Gestion
 *     parameters:
 *       - name: id
 *         in: path
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gestion'
 */
router.put("/:id", validate(gestionSchema), controller.update);

/**
 * @openapi
 * /gestion/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una gestión
 *     tags:
 *       - Gestion
 *     parameters:
 *       - name: id
 *         in: path
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
 *         description: Gestión actualizada parcialmente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gestion'
 */
router.patch("/:id", validate(gestionSchema), controller.update);

/**
 * @openapi
 * /gestion/{id}:
 *   delete:
 *     summary: Marcar gestión como cerrada
 *     tags:
 *       - Gestion
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gestión marcada como cerrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gestion'
 */
router.delete("/:id", controller.delete);

module.exports = router;
