"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _XController_utils, _XController_service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XController = void 0;
const utility_1 = require("../utils/utility");
const allowed_domain_1 = require("../utils/allowed-domain");
const x_service_1 = require("../service/x.service");
class XController {
    constructor() {
        _XController_utils.set(this, new utility_1.Utility());
        _XController_service.set(this, new x_service_1.XService());
        /**
         * throw encryped domain
         * @param {*} req
         * @param {*} res
         */
        this.encryptedDomain = (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(__classPrivateFieldGet(this, _XController_utils, "f").encryptObject(allowed_domain_1.AllowedUrlDomain));
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
            const result = __classPrivateFieldGet(this, _XController_service, "f").checkDomainService(item);
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
            let item = JSON.parse(decodeURIComponent(rawItem));
            const result = __classPrivateFieldGet(this, _XController_service, "f").checkMessageService(item);
            res.send(result);
        };
        this.informationMessageTemplateText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _XController_service, "f").helperMessageX());
        };
        this.poweredByText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _XController_utils, "f").poweredBy);
        };
        this.defaultBackgroundColorThemeHex = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _XController_utils, "f").defaultBackgroundColorTheme);
        };
        this.baseTrustedUrlWeb = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(allowed_domain_1.AtLeastThisUrlAppear);
        };
    }
}
exports.XController = XController;
_XController_utils = new WeakMap(), _XController_service = new WeakMap();
//# sourceMappingURL=x.controller.js.map