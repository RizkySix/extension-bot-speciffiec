"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TikTokService_utils;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokService = void 0;
const allowed_domain_1 = require("../utils/allowed-domain");
const utility_1 = require("../utils/utility");
class TikTokService {
    constructor() {
        _TikTokService_utils.set(this, new utility_1.Utility());
        this.checkDomainService = (item) => {
            if (item && item != "null") {
                const response = JSON.parse(item);
                const responseValues = Object.values(response);
                const ourDomValues = Object.values(__classPrivateFieldGet(this, _TikTokService_utils, "f").encryptObject(allowed_domain_1.AllowedUrlDomain));
                const isMatch = responseValues.every((value) => ourDomValues.includes(value));
                return isMatch;
            }
            else {
                return false;
            }
        };
        this.checkMessageService = (item) => {
            // check type string
            if (typeof item === "string") {
                if (!item || item == "null" || item.length > 150) {
                    return false;
                }
                const isGood = __classPrivateFieldGet(this, _TikTokService_utils, "f").domainValidation(item);
                return isGood;
            }
            // check type object
            if (typeof item === "object") {
                const responseValues = Object.values(Object.assign({}, item.comments));
                const allGood = __classPrivateFieldGet(this, _TikTokService_utils, "f").bundleDomainValidation(responseValues);
                return allGood;
            }
        };
    }
}
exports.TikTokService = TikTokService;
_TikTokService_utils = new WeakMap();
//# sourceMappingURL=tiktok.service.js.map