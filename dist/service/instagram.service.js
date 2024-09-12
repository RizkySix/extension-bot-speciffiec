"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InstagramService_utils;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramService = void 0;
const utility_1 = require("../utils/utility");
class InstagramService {
    constructor() {
        _InstagramService_utils.set(this, new utility_1.Utility());
        this.checkDmMessagesService = (messages) => {
            const responseValues = Object.values(Object.assign({}, messages));
            const newValidDm = [];
            let validDm = false;
            for (let prop in responseValues) {
                validDm = __classPrivateFieldGet(this, _InstagramService_utils, "f").domainValidation(responseValues[prop]);
                if (validDm) {
                    newValidDm.push(btoa(__classPrivateFieldGet(this, _InstagramService_utils, "f").emojiToUnicode(responseValues[prop])));
                }
            }
            if (newValidDm.length < 1) {
                newValidDm.push(btoa(__classPrivateFieldGet(this, _InstagramService_utils, "f").emojiToUnicode(__classPrivateFieldGet(this, _InstagramService_utils, "f").tempMsgInstagram)));
            }
            return newValidDm;
        };
    }
}
exports.InstagramService = InstagramService;
_InstagramService_utils = new WeakMap();
//# sourceMappingURL=instagram.service.js.map