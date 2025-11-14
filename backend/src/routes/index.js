const router = require('express').Router();
const gestionRoutes = require('./gestion.routes');

router.use('/gestion', gestionRoutes);

module.exports = router;