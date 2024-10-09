"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WaSenderService_utils, _WaSenderService_maxLengthMsg;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaSenderService = void 0;
const allowed_domain_1 = require("../utils/allowed-domain");
const utility_1 = require("../utils/utility");
class WaSenderService {
    constructor() {
        _WaSenderService_utils.set(this, new utility_1.Utility());
        _WaSenderService_maxLengthMsg.set(this, 4000);
        this.checkDomainService = (item) => {
            if (item && item != "null") {
                const response = JSON.parse(item);
                const responseValues = Object.values(response);
                const ourDomValues = Object.values(__classPrivateFieldGet(this, _WaSenderService_utils, "f").encryptObject(allowed_domain_1.AllowedUrlDomain));
                const isMatch = responseValues.every((value) => ourDomValues.includes(value));
                return isMatch;
            }
            else {
                return false;
            }
        };
        this.checkMessageService = (item) => {
            if (!item || item == "null" || item.length > __classPrivateFieldGet(this, _WaSenderService_maxLengthMsg, "f")) {
                return false;
            }
            const isGood = __classPrivateFieldGet(this, _WaSenderService_utils, "f").domainValidation(item, allowed_domain_1.AllowedHostDomainComplete);
            return isGood;
        };
        this.helperMessageX = () => {
            // Ambil semua URL dari objek dan gabungkan menjadi satu string dengan koma
            const urlList = Object.values(allowed_domain_1.AllowedUrlDomainComplete).join(', ');
            // Format pesan dengan URL yang telah digabungkan
            return decodeURIComponent(`Pastikan tidak lebih dari ${__classPrivateFieldGet(this, _WaSenderService_maxLengthMsg, "f")} karakter, dan anda wajib menyertakan satu/lebih dari alamat-alamat web berikut ${urlList}`);
        };
    }
}
exports.WaSenderService = WaSenderService;
_WaSenderService_utils = new WeakMap(), _WaSenderService_maxLengthMsg = new WeakMap();
//# sourceMappingURL=wa-sender.service.js.map