"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instagram_controller_1 = require("./controller/instagram.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const tiktok_controller_1 = require("./controller/tiktok.controller");
const x_controller_1 = require("./controller/x.controller");
const wa_sender_controller_1 = require("./controller/wa-sender.controller");
const app = (0, express_1.default)();
const port = 8080;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const instagramController = new instagram_controller_1.InstagramController();
const tiktokController = new tiktok_controller_1.TiktokController();
const xController = new x_controller_1.XController();
const waSenderController = new wa_sender_controller_1.WaSenderController();
app.get('/', (req, res) => {
    res.send('Heyooooooooooooo 😡!');
});
app.get('/instagram/pingaps/pointer', instagramController.checkDmMessages);
app.get('/instagram/pingaps/service', instagramController.encryptedDomain);
app.get('/instagram/pingaps/white-message', instagramController.informationMessageTemplateText);
app.get('/instagram/pingaps/holder', instagramController.poweredByText);
app.get('/instagram/pingaps/themos', instagramController.defaultBackgroundColorThemeHex);
app.get('/instagram/pingaps/leastone', instagramController.baseTrustedUrlWeb);
app.get('/tiktok/rebotou/service', tiktokController.encryptedDomain);
app.get('/tiktok/rebotou/dns', tiktokController.checkDomain);
app.get('/tiktok/rebotou/scripted', tiktokController.checkComments);
app.get('/tiktok/rebotou/white-message', tiktokController.informationMessageTemplateText);
app.get('/tiktok/rebotou/holder', tiktokController.poweredByText);
app.get('/tiktok/rebotou/themos', tiktokController.defaultBackgroundColorThemeHex);
app.get('/tiktok/rebotou/leastone', tiktokController.baseTrustedUrlWeb);
app.get('/x/xxx/dns', xController.checkDomain);
app.get('/x/xxx/scripted', xController.checkComments);
app.get('/x/xxx/helpx', xController.informationMessageTemplateText);
app.get('/wa/rocco/dns', waSenderController.checkDomain);
app.get('/wa/rocco/scripted', waSenderController.checkComments);
app.get('/wa/rocco/helpx', waSenderController.informationMessageTemplateText);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map