module.exports = (sequelize, dataTypes) => {

  let alias = "Usuarios";
  
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ds_nombre: {
      type: dataTypes.STRING
    },
    ds_apellido: {
      type: dataTypes.STRING
    },
    ds_email: {
      type: dataTypes.STRING
    },
    ds_password: {
      type: dataTypes.STRING
    },
    avatar: {
      type: dataTypes.STRING
    }
  };
  
  let config = {
    tableName: "usuarios",
    timestamps: false
  };

  const Usuario =  sequelize.define(alias, cols, config);

  Usuario.associate = function(models) {
    Usuario.hasMany(models.Productos, {
      as: "Producto",
      foreignKey:"ds_usuario_creador" 
    })
  }

  return Usuario;

}
