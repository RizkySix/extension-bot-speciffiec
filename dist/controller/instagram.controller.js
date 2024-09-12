"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InstagramController_utils, _InstagramController_service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramController = void 0;
const utility_1 = require("../utils/utility");
const allowed_domain_1 = require("../utils/allowed-domain");
const instagram_service_1 = require("../service/instagram.service");
class InstagramController {
    constructor() {
        _InstagramController_utils.set(this, new utility_1.Utility());
        _InstagramController_service.set(this, new instagram_service_1.InstagramService()
        /**
         * Check is dm messages array all valid
         * @param {*} req
         * @param {*} res
         */
        );
        /**
         * Check is dm messages array all valid
         * @param {*} req
         * @param {*} res
         */
        this.checkDmMessages = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            const item = JSON.parse(decodeURIComponent(req.query.item));
            const newValidDm = __classPrivateFieldGet(this, _InstagramController_service, "f").checkDmMessagesService(item);
            res.send(newValidDm);
        };
        /**
         * throw encryped domain
         * @param {*} req
         * @param {*} res
         */
        this.encryptedDomain = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _InstagramController_utils, "f").encryptObject(allowed_domain_1.AllowedUrlDomain));
        };
        /**
     * throw encryped domain
     * @param {*} req
     * @param {*} res
     */
        this.informationMessageTemplateText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _InstagramController_utils, "f").informationMessageTemplate);
        };
        this.poweredByText = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _InstagramController_utils, "f").poweredBy);
        };
        this.defaultBackgroundColorThemeHex = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(__classPrivateFieldGet(this, _InstagramController_utils, "f").defaultBackgroundColorTheme);
        };
        this.baseTrustedUrlWeb = (req, res) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.send(allowed_domain_1.AtLeastThisUrlAppear);
        };
    }
}
exports.InstagramController = InstagramController;
_InstagramController_utils = new WeakMap(), _InstagramController_service = new WeakMap();
//# sourceMappingURL=instagram.controller.js.map