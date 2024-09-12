import { AllowedUrlDomain } from "../utils/allowed-domain";
import { TikTokCommentsParamater } from "../utils/paramater";
import { Utility } from "../utils/utility";

export class TikTokService {
  #utils = new Utility();

  checkDomainService = (item: string) => {
    if (item && item != "null") {
      const response = JSON.parse(item as string);

      const responseValues: Array<string> = Object.values(response);
      const ourDomValues: Array<string> = Object.values(
        this.#utils.encryptObject(AllowedUrlDomain)
      );

      const isMatch = responseValues.every((value) =>
        ourDomValues.includes(value)
      );

      return isMatch;
    } else {
      return false;
    }
  };

  checkMessageService = (item: string | TikTokCommentsParamater) => {
    // check type string
    if (typeof item === "string") {
      if (!item || item == "null" || item.length > 150) {
        return false;
      }

      const isGood = this.#utils.domainValidation(item);

      return isGood;
    }

    // check type object
    if (typeof item === "object") {
      const responseValues: Array<string> = Object.values(
        Object.assign({}, item.comments)
      );

      const allGood = this.#utils.bundleDomainValidation(responseValues);

      return allGood;
    }
  };
}
