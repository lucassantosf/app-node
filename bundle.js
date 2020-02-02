"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exer 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = admin;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha, true));
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123'); //console.log(User1.isAdmin()) ;
//console.log(Adm1.isAdmin());
//Exer 2

var usuarios = [{
  nome: 'Lucas',
  idade: 23,
  empresa: 'RocketSeat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'RocketSeat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'RocketSeat'
}];
var newArr = usuarios.map(function (item, index) {
  return item.idade;
});
var filter = usuarios.filter(function (item) {
  return item.empresa === 'RocketSeat' && item.idade > 25;
});
var find = usuarios.find(function (item, index) {
  return item.empresa === 'RocketSeat';
});
var calculo = usuarios.map(function (users) {
  return _objectSpread({}, users, {
    idade: users.idade * 2
  });
}).filter(function (users) {
  return users.idade <= 50;
}); //console.log(calculo); 
//Exer 3
// 3.1

var array = [1, 2, 3, 4, 5];
var newArray = array.map(function (item) {
  return item + 10;
});
var newArray2 = array.map(function (item) {
  return item + 30;
}); // 3.2

var usuario = {
  nome: 'Lucas',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; //console.log(mostraIdade(usuario));
// 3.3


var nomea = "Lucas";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nomea = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Lucas';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nomea: nomea,
    idade: idade
  };
}; //console.log(mostraUsuario(nomea));
//console.log(mostraUsuario('Lucas',89));
// 3.4


var promise = function promise() {
  return new Promise(resolve, function (reject) {
    return resolve();
  });
}; //console.log(promise);
// 4.1 - Desestruturação


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Lucas',
  idade: 23
})); //5.1

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (a, b) {
    return a + b;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//	5.2

var user = {
  nome: 'Lucas',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, user, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, user, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuario2);
console.log(usuario3);
var usuari = 'Lucas';
var age = 23;
console.log("O usu\xE1rio ".concat(usuari, " possui ").concat(age, " anos"));
var name = 'Lucas';
var idad = 23;
var usu = {
  name: name,
  idad: idad,
  cidade: 'Rio do Sul'
};
console.log(usu);
