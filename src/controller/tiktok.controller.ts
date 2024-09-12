import { Utility } from "../utils/utility";
import express, { Request, Response } from "express";
import {
  AllowedHostDomain,
  AllowedUrlDomain,
  AtLeastThisUrlAppear,
} from "../utils/allowed-domain";
import { TikTokCommentsParamater } from "../utils/paramater";
import { TikTokService } from "../service/tiktok.service";

class TiktokController {
  #utils = new Utility();
  #service = new TikTokService();

  /**
   * throw encryped domain
   * @param {*} req
   * @param {*} res
   */
  encryptedDomain = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.send(this.#utils.encryptObject(AllowedUrlDomain));
  };

  /**
   * Throw status domain from extension
   * @param {*} req
   * @param {*} res
   */
  checkDomain = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    const { item } = req.query;

    const result = this.#service.checkDomainService(item as string);
    res.send(result);
  };

  /**
   * Throw valid comments
   * @param {*} req
   * @param {*} res
   * @returns
   */
  checkComments = (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    let rawItem = req.query.item;

    let item: string | TikTokCommentsParamater = JSON.parse(decodeURIComponent(rawItem as string));

    const result = this.#service.checkMessageService(item);
    res.send(result);
  };

  informationMessageTemplateText = (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   
    res.send(this.#utils.informationMessageTemplate)
  }

poweredByText = (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
    res.send(this.#utils.poweredBy)
}

defaultBackgroundColorThemeHex = (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   
    res.send(this.#utils.defaultBackgroundColorTheme)
  }

baseTrustedUrlWeb = (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    res.send(AtLeastThisUrlAppear)
}
}

export { TiktokController };
