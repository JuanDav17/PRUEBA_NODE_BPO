const { Gestion } = require("../models");

class GestionService {
  create(data) {
    return Gestion.create(data);
  }

  async list(filters) {
    // Tomamos page y limit desde filters, con valores por defecto
    let page = parseInt(filters.page) || 1;
    let limit = parseInt(filters.limit) || 10;
    const offset = (page - 1) * limit;

    // Traemos registros paginados
    const { count, rows } = await Gestion.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]], // más recientes primero
    });

    return {
      data: rows,
      total: count,
      page,
      lastPage: Math.ceil(count / limit),
    };
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
