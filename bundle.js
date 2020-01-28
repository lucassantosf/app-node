"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Classe Simples
var Cars =
/*#__PURE__*/
function () {
  function Cars() {
    _classCallCheck(this, Cars);

    this.carro = [];
    this.carro.cor = 'Branco';
  }

  _createClass(Cars, [{
    key: "ligarMotor",
    value: function ligarMotor() {
      this.carro.motor = 'On';
      console.log(this.carro.motor);
    }
  }, {
    key: "desligarMotor",
    value: function desligarMotor() {
      this.carro.motor = 'Off';
      console.log(this.carro.motor);
    }
  }]);

  return Cars;
}();

function Variavel(b) {
  var a = 3;

  if (b > 5) {
    console.table(a, b);
  }
} //Variavel(9); 
//Operação com Vetor


var arr = [1, 8, 9, 88, 99, 4555];
var newArr = arr.map(function (item, index) {
  return item;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  //return item % 2 === 0;
  return item > 50;
});
var find = arr.find(function (item) {
  return item === 88;
});
console.log(arr);
