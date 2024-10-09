"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WaSenderController_utils, _WaSenderController_service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaSenderController = void 0;
const utility_1 = require("../utils/utility");
const allowed_domain_1 = require("../utils/allowed-domain");
const wa_sender_service_1 = require("../service/wa-sender.service");
class WaSenderController {
    constructor() {
        _WaSenderController_utils.set(this, new utility_1.Utility());
        _WaSenderController_service.set(this, new wa_sender_service_1.WaSenderService());
        /**
         * throw encryped domain
         * @param {*} req
         * @param {*} res
         */
        this.encryptedDomain = (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(__classPrivateFieldGet(this, _WaSenderController_utils, "f").encryptObject(allowed_domain_1.AllowedUrlDomain));
        };
        /**
         * Throw status domain from extension
         * @param {*} req
         * @param {*} res
         */
        this.checkDomain = (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            const { item } = req.query;
            const result = __classPrivateFieldGet(this, _WaSenderController_service, "f").checkDomainService(item);
            res.send(result);
        };
        /**
         * Throw valid comments
         * @param {*} req
         * @param {*} res
         * @returns
         */
        this.checkComments = (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let rawItem = req.query.item;
            console.log(rawItem);
            console.log(req);
            let item = decodeURIComponent(rawItem);
            const result = __classPrivateFieldGet(this, _WaSenderController_service, "f").checkMessageService(item);
            res.send(result);
        };
        this.informationMessageTemplateText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _WaSenderController_service, "f").helperMessageX());
        };
        this.poweredByText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _WaSenderController_utils, "f").poweredBy);
        };
        this.defaultBackgroundColorThemeHex = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _WaSenderController_utils, "f").defaultBackgroundColorTheme);
        };
        this.baseTrustedUrlWeb = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(allowed_domain_1.AtLeastThisUrlAppear);
        };
    }
}
exports.WaSenderController = WaSenderController;
_WaSenderController_utils = new WeakMap(), _WaSenderController_service = new WeakMap();
//# sourceMappingURL=wa-sender.controller.js.map