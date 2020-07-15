module.exports = (sequelize, dataTypes) => {

  let alias = "Compras";
  
  let cols = {
    id_compra: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ds_comprador: {
      type: dataTypes.STRING
    },
    ds_correo: {
      type: dataTypes.STRING
    },
    ds_tarjeta: {
      type: dataTypes.STRING
    },
    ds_producto: {
      type: dataTypes.STRING
    },
    dn_cantidad: {
      type: dataTypes.INTEGER
    },
    dn_preciounit: {
      type: dataTypes.INTEGER
    },
    dt_fecha: {
      type: dataTypes.DATE
    },
    ds_usuario: {
      type: dataTypes.INTEGER
    }
  };
  
  let config = {
    tableName: "compras",
    timestamps: false
  };

  const Compra =  sequelize.define(alias, cols, config);

  return Compra;

}
