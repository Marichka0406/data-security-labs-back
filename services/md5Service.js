"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Md5Service = void 0;
var Md5Service = /** @class */ (function () {
    function Md5Service() {
        this.A0 = 0x67452301;
        this.B0 = 0xefcdab89;
        this.C0 = 0x98badcfe;
        this.D0 = 0x10325476;
        this.S = [
            7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20,
            5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4,
            11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
            10, 15, 21,
        ];
        this.K = new Uint32Array([
            0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a,
            0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
            0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340,
            0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
            0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8,
            0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
            0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa,
            0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
            0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92,
            0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
            0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391,
        ]);
        this.PADDING = new Uint8Array([
            0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ]);
    }
    // Публічний метод для хешування вхідних даних
    Md5Service.prototype.md5 = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var hashBuffer;
            return __generator(this, function (_a) {
                hashBuffer = this.generateMd5Hash(input);
                return [2 /*return*/, this.bufferToHex(hashBuffer)];
            });
        });
    };
    // Перевірка хешу файлу на відповідність
    Md5Service.prototype.verifyFileIntegrity = function (file, expectedHash) {
        return __awaiter(this, void 0, void 0, function () {
            var computedHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.md5(file)];
                    case 1:
                        computedHash = _a.sent();
                        return [2 /*return*/, computedHash === expectedHash.toLowerCase()];
                }
            });
        });
    };
    // Приватний метод для генерації MD5-хешу
    Md5Service.prototype.generateMd5Hash = function (input) {
        var paddedInput = this.padInput(input);
        var numBlocks = paddedInput.byteLength / 64;
        var A = this.A0;
        var B = this.B0;
        var C = this.C0;
        var D = this.D0;
        var bufferView = new DataView(paddedInput);
        for (var i = 0; i < numBlocks; i++) {
            var blockOffset = i * 64;
            var a = A;
            var b = B;
            var c = C;
            var d = D;
            for (var j = 0; j < 64; j++) {
                var F = this.calculateF(j, b, c, d);
                var g = this.calculateG(j);
                var tempD = d;
                d = c;
                c = b;
                var blockIndex = blockOffset + (g * 4);
                var blockValue = bufferView.getUint32(blockIndex, true);
                b = (b + this.leftRotate(a + F + this.K[j] + blockValue, this.S[j])) >>> 0;
                a = tempD;
            }
            A = (A + a) >>> 0;
            B = (B + b) >>> 0;
            C = (C + c) >>> 0;
            D = (D + d) >>> 0;
        }
        return this.createHashBuffer(A, B, C, D);
    };
    // Допоміжні функції для MD5
    Md5Service.prototype.calculateF = function (j, b, c, d) {
        if (j < 16)
            return (b & c) | (~b & d);
        if (j < 32)
            return (d & b) | (~d & c);
        if (j < 48)
            return b ^ c ^ d;
        return c ^ (b | ~d);
    };
    Md5Service.prototype.calculateG = function (j) {
        if (j < 16)
            return j;
        if (j < 32)
            return (5 * j + 1) % 16;
        if (j < 48)
            return (3 * j + 5) % 16;
        return (7 * j) % 16;
    };
    // Допоміжна функція для лівого зсуву
    Md5Service.prototype.leftRotate = function (x, amount) {
        return (x << amount) | (x >>> (32 - amount));
    };
    // Допоміжна функція для паддінгу вхідних даних
    Md5Service.prototype.padInput = function (input) {
        var originalLength = input.byteLength;
        var bitLength = originalLength * 8;
        var paddingLength = (56 - (originalLength % 64)) % 64;
        if (paddingLength < 0)
            paddingLength += 64;
        var paddedBuffer = new ArrayBuffer(originalLength + paddingLength + 8);
        var paddedView = new Uint8Array(paddedBuffer);
        paddedView.set(input);
        paddedView.set(this.PADDING.subarray(0, paddingLength), originalLength);
        var lengthView = new DataView(paddedBuffer);
        lengthView.setUint32(paddedBuffer.byteLength - 8, bitLength, true);
        return paddedBuffer;
    };
    // Перетворення 4 слів (A, B, C, D) у MD5 хеш у вигляді буфера
    Md5Service.prototype.createHashBuffer = function (A, B, C, D) {
        var buffer = new ArrayBuffer(16);
        var view = new DataView(buffer);
        view.setUint32(0, A, true);
        view.setUint32(4, B, true);
        view.setUint32(8, C, true);
        view.setUint32(12, D, true);
        return buffer;
    };
    // Перетворення буфера у hex-рядок
    Md5Service.prototype.bufferToHex = function (buffer) {
        var byteArray = new Uint8Array(buffer);
        var hexString = Array.from(byteArray)
            .map(function (byte) { return byte.toString(16).padStart(2, '0'); })
            .join('');
        return hexString;
    };
    return Md5Service;
}());
exports.Md5Service = Md5Service;
