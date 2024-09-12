import express, { Request, Response } from 'express';
import { InstagramController } from './controller/instagram.controller';
import bodyParser from 'body-parser'
import { TiktokController } from './controller/tiktok.controller';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const instagramController = new InstagramController()
const tiktokController = new TiktokController()
app.get('/', (req: Request, res: Response) => {
  res.send('Heyooooooooooooo 😡!');
});

app.get('/instagram/pingaps/pointer' , instagramController.checkDmMessages)
app.get('/instagram/pingaps/service' , instagramController.encryptedDomain)
app.get('/instagram/pingaps/white-message' , instagramController.informationMessageTemplateText)
app.get('/instagram/pingaps/holder' , instagramController.poweredByText)
app.get('/instagram/pingaps/themos' , instagramController.defaultBackgroundColorThemeHex)
app.get('/instagram/pingaps/leastone' , instagramController.baseTrustedUrlWeb)

app.get('/tiktok/rebotou/service' , tiktokController.encryptedDomain)
app.get('/tiktok/rebotou/dns', tiktokController.checkDomain)
app.get('/tiktok/rebotou/scripted', tiktokController.checkComments)
app.get('/tiktok/rebotou/white-message' , tiktokController.informationMessageTemplateText)
app.get('/tiktok/rebotou/holder' , tiktokController.poweredByText)
app.get('/tiktok/rebotou/themos' , tiktokController.defaultBackgroundColorThemeHex)
app.get('/tiktok/rebotou/leastone' , tiktokController.baseTrustedUrlWeb)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
