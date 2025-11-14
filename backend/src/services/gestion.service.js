const { Gestion } = require("../models");

class GestionService {
  create(data) {
    return Gestion.create(data);
  }

  async list(filters) {
    // versión simple: devuelve todas (más adelante añadimos paginación y filtros)
    const rows = await Gestion.findAll();
    return { data: rows, total: rows.length };
  }

  detail(id) {
    return Gestion.findByPk(id);
  }

  async update(id, data) {
    await Gestion.update(data, { where: { id } });
    return this.detail(id);
  }

  delete(id) {
    return this.update(id, { estado: "cerrada" });
  }
}

module.exports = new GestionService();