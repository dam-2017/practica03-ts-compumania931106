"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(text, multiText) {
        this.text = text;
        this.multiText = multiText;
    }
    Object.defineProperty(Cadena.prototype, "isPalindromo", {
        get: function () {
            return this.text.split('').reverse().join('') === this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "howVowels", {
        get: function () {
            var getAs;
            var getEs;
            var getIs;
            var getOs;
            var getUs;
            try {
                getAs = this.text.match(/[a]/gi).length;
            }
            catch (a) {
                getAs = 0;
            }
            try {
                getEs = this.text.match(/[e]/gi).length;
            }
            catch (e) {
                getEs = 0;
            }
            try {
                getIs = this.text.match(/[i]/gi).length;
            }
            catch (e) {
                getIs = 0;
            }
            try {
                getOs = this.text.match(/[o]/gi).length;
            }
            catch (e) {
                getOs = 0;
            }
            try {
                getUs = this.text.match(/[u]/gi).length;
            }
            catch (e) {
                getUs = 0;
            }
            return "\n        - numbers of As: " + getAs + "\n        - numbers of Es: " + getEs + "\n        - numbers of Is: " + getIs + "\n        - numbers of Os: " + getOs + "\n        - numbers of Us: " + getUs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "countLetters", {
        get: function () {
            var count = 0;
            var someArray = this.multiText.split('');
            for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
                var entry = someArray_1[_i];
                if (entry != " ") {
                    count++;
                }
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "countWords", {
        get: function () {
            var count = 0;
            var someArray = this.multiText.split(' ');
            for (var _i = 0, someArray_2 = someArray; _i < someArray_2.length; _i++) {
                var entry = someArray_2[_i];
                if (entry != "") {
                    count++;
                }
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
