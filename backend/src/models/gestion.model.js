module.exports = (sequelize, DataTypes) => {
  const Gestion = sequelize.define("Gestion", {
    clienteDocumento: { type: DataTypes.STRING, allowNull: false },
    clienteNombre: { type: DataTypes.STRING, allowNull: false },
    asesorId: { type: DataTypes.STRING, allowNull: false },
    tipificacion: {
      // Usamos snake_case en lugar de espacios para evitar conflictos en la sintaxis SQL
      type: DataTypes.ENUM(
        "contacto_efectivo", "no_contacto", "promesa_pago",
        "pago_realizado", "refinanciacion", "informacion",
        "escalamiento", "otros"
      ),
      allowNull: false
    },
    subtipificacion: DataTypes.STRING,
    canalOficial: { type: DataTypes.BOOLEAN, defaultValue: true },
    valorCompromiso: DataTypes.DECIMAL(10,2),
    fechaCompromiso: DataTypes.DATEONLY,
    observaciones: DataTypes.TEXT,
    recordingUrl: DataTypes.STRING,
    estado: {
      type: DataTypes.ENUM("abierta", "cerrada"),
      defaultValue: "abierta"
    }
  }, {
    timestamps: true,
    tableName: "gestiones"
  });

  return Gestion;
};