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
var md5Service_1 = require("../services/md5Service");
describe("MD5 Hash Function", function () {
    var md5Service;
    beforeAll(function () {
        md5Service = new md5Service_1.Md5Service();
    });
    it("should return the correct hash for an empty input", function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("D41D8CD98F00B204E9800998ECF8427E");
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return the expected hash for the input "a"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("a");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("0CC175B9C0F1B6A831C399E269772661");
                    return [2 /*return*/];
            }
        });
    }); });
    it('should produce the correct hash for the string "abc"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("abc");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("900150983CD24FB0D6963F7D28E17F72");
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return the right hash for "message digest"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("message digest");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("F96B697D7CB7938D525A2F31AAF161D0");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should yield the correct hash for the alphabet string", function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("abcdefghijklmnopqrstuvwxyz");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("C3FCD3D76192E4007DFB496CCA67E13B");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should produce the correct hash for mixed alphanumeric string", function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("D174AB98D277D9F5A5611C2C9F419D9F");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should compute the correct hash for a long numeric string", function () { return __awaiter(void 0, void 0, void 0, function () {
        var input, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = Buffer.from("12345678901234567890123456789012345678901234567890123456789012345678901234567890");
                    return [4 /*yield*/, md5Service.md5(input)];
                case 1:
                    hash = _a.sent();
                    expect(hash.toUpperCase()).toBe("57EDF4A22BE3C955AC49DA2E2107B67A");
                    return [2 /*return*/];
            }
        });
    }); });
});
