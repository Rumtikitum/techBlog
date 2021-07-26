// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
    // define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // there cannot be any duplicate email values in this Table
        unique: true,
        // if allowNull is set to false, we can run data through validators before creating table
         validate:{
             isEmail: true
            }
        },
    // define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least 4 characters
            len: [4]
        }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
  }
);

module.exports = User;