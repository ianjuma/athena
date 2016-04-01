module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    gender: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['female', 'male', 'undefined'],
      validate: {
        isIn: [['female', 'male', 'undefined']]
      },
      msg: 'Gender is only Male, Female or undefined'
    },
    verification: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['pending','verified'],
      defaultValue: 'pending',
      validate: {
        isIn: [['pending', 'verified']]
      }
    },
    primary_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: true
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'to show'
    },
    profile_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.ENUM,
      values: ['local', 'google', 'facebook'],
      allowNull: false
    },
    verified: {
      type: DataTypes.ENUM,
      values: ['t', 'f'],
			defaultValue: 'f',
      allowNull: false,
      validate: {
        isIn: [['t', 'f']]
      }
    },    
		is_admin: {
      type: DataTypes.ENUM,
      values: ['t', 'f'],
			defaultValue: 'f',
      allowNull: false,
      validate: {
        isIn: [['t', 'f']]
      }
    },
    is_flagged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    encrypted_password: DataTypes.STRING,
    salt: DataTypes.STRING,
    reset_password_sent_at: {
      type: DataTypes.DATE
    },
    sign_in_count: DataTypes.INTEGER(11),
    date_registered: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    current_sign_in_ip: DataTypes.INTEGER(10),
    last_sign_in_ip: {
      type: DataTypes.INTEGER(10),
      validate: {
        isIp: true
      }
    }
  });
  return User;
};

