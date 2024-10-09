import { Utility } from "../utils/utility";
import express, { Request, Response } from "express";
import {
  AllowedHostDomain,
  AllowedUrlDomain,
  AtLeastThisUrlAppear,
} from "../utils/allowed-domain";
import { TikTokCommentsParamater } from "../utils/paramater";
import { WaSenderService } from "../service/wa-sender.service";


class WaSenderController {
  #utils = new Utility();
  #service = new WaSenderService();

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
    console.log(rawItem)
    console.log(req)

    let item: string = decodeURIComponent(rawItem as string);

    const result = this.#service.checkMessageService(item);
    res.send(result);
  };

  informationMessageTemplateText = (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   
    res.send(this.#service.helperMessageX())
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

export { WaSenderController };
