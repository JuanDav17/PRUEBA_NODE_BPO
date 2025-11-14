const router = require("express").Router();
const controller = require("../controllers/gestion.controller");
const { validate } = require("../middlewares/validate");
const { gestionSchema } = require("../validations/gestion.validation");

router.post("/", validate(gestionSchema), controller.create);
router.put("/:id", validate(gestionSchema), controller.update);

router.get("/", controller.list);
router.get("/:id", controller.detail);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;