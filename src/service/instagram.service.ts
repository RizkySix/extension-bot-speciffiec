import { Utility } from "../utils/utility";

export class InstagramService {
  #utils = new Utility();

  checkDmMessagesService = (messages: object) => {
    const responseValues: Array<string> = Object.values(
      Object.assign({}, messages)
    );
    const newValidDm: Array<string> = [];
    let validDm = false;

    for (let prop in responseValues) {
      validDm = this.#utils.domainValidation(responseValues[prop]);

      if (validDm) {
        newValidDm.push(btoa(this.#utils.emojiToUnicode(responseValues[prop])));
      }
    }

    if (newValidDm.length < 1) {
      newValidDm.push(
        btoa(this.#utils.emojiToUnicode(this.#utils.tempMsgInstagram))
      );
    }

    return newValidDm;
  };
}
