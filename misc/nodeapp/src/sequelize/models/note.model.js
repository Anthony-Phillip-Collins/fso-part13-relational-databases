const { DataTypes, Model } = require('sequelize');

class Note extends Model {}

const init = (sequelize) => {
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      important: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      date: { type: DataTypes.DATE, defaultValue: Date.now() },
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,
      modelName: 'note',
    }
  );

  return Note;
};

module.exports = (sequelize) => init(sequelize);
