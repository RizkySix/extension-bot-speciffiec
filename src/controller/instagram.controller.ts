
import express, { Request, Response } from 'express';
import { Utility } from '../utils/utility';
import { AllowedHostDomain, AllowedUrlDomain, AtLeastThisUrlAppear } from '../utils/allowed-domain';
import { InstagramService } from '../service/instagram.service';

class InstagramController
{
    #utils = new Utility()
    #service = new InstagramService()

    /**
     * Check is dm messages array all valid
     * @param {*} req 
     * @param {*} res 
     */
    checkDmMessages = (req: Request, res: Response) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      
        const item = JSON.parse(decodeURIComponent(req.query.item as string));
        
        const newValidDm = this.#service.checkDmMessagesService(item)
      
        res.send(newValidDm)
    }



    /**
     * throw encryped domain
     * @param {*} req 
     * @param {*} res 
     */
    encryptedDomain = (req: Request, res: Response) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      
        res.send(this.#utils.encryptObject(AllowedUrlDomain))
      }

        /**
     * throw encryped domain
     * @param {*} req 
     * @param {*} res 
     */
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

export { InstagramController }