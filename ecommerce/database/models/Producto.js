module.exports = (sequelize, dataTypes) => {

  let alias = "Productos";
  
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ds_nombre: {
      type: dataTypes.STRING
    },
    ds_descripcion: {
      type: dataTypes.STRING
    },
    dn_precio: {
      type: dataTypes.INTEGER
    },
    dn_descuento: {
      type: dataTypes.INTEGER
    },
    ds_categoria: {
      type: dataTypes.STRING
    },
    image: {
      type: dataTypes.STRING
    },
    ds_usuario_creador: {
      type: dataTypes.INTEGER
    }
  };
  
  let config = {
    tableName: "productos",
    timestamps: false
  };

  const Producto =  sequelize.define(alias, cols, config);

  Producto.associate = function(models) {
    Producto.belongsTo(models.Usuarios, {
      as: "usuario",
      foreignKey:"ds_usuario_creador" 
    })
  }

  return Producto;

}
