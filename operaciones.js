"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(numbers) {
        this.numbers = numbers;
    }
    Object.defineProperty(Operaciones.prototype, "suma", {
        get: function () {
            var add = 0;
            var someArray = this.numbers;
            for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
                var entry = someArray_1[_i];
                add = add + entry;
            }
            return add;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "resta", {
        get: function () {
            var subtraction = 10;
            var someArray = this.numbers;
            for (var _i = 0, someArray_2 = someArray; _i < someArray_2.length; _i++) {
                var entry = someArray_2[_i];
                subtraction = subtraction - entry;
            }
            return subtraction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "factorial", {
        get: function () {
            var factor = 1;
            var someArray = this.numbers;
            for (var _i = 0, someArray_3 = someArray; _i < someArray_3.length; _i++) {
                var entry = someArray_3[_i];
                factor = factor * entry;
            }
            return factor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "isPrimo", {
        get: function () {
            var result = "";
            var someArray = this.numbers;
            for (var _i = 0, someArray_4 = someArray; _i < someArray_4.length; _i++) {
                var entry = someArray_4[_i];
                if (entry == 1 || entry == 2) {
                    result = result + (entry + " es primo ");
                }
                else {
                    for (var i = 2; i < entry; i++) {
                        if (entry % i == 0) {
                            result = result + (entry + " no es primo ");
                            break;
                        }
                        else {
                            result = result + (entry + " es primo ");
                            break;
                        }
                    }
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return Operaciones;
}());
exports.Operaciones = Operaciones;
