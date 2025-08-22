import { AllowedHostDomain } from "./allowed-domain";
import { AllowedHostDomainParameter } from "./paramater";

export class Utility {
  tempMsgInstagram = `Temukan cara baru untuk memperluas jangkauan bisnis Anda! 
      
      Dengan platform Resellr.id, Anda bisa mengakses kekuatan CaaS (Commerce-as-a-Service) kami dalam hitungan detik, mengubah pendekatan bisnis Anda dalam waktu singkat, hanya dalam 30 detik. 🚀 
      Kami memperkenalkan konsep baru di Resellr.id: mengubah pelanggan menjadi Brand Ambassador yang aktif dan berperan sebagai penjual. Dalam 14 hari, Anda akan menyaksikan bagaimana transformasi ini mempengaruhi perubahan signifikan dalam lanskap bisnis Anda. 
      
      🌟Inilah waktunya untuk bergabung dengan revolusi bisnis! Daftarkan diri Anda di https://resellr.id/ sekarang juga untuk merasakan perubahan yang luar biasa dalam bisnis Anda sendiri 🌐`;

    informationMessageTemplate = "Ketikan <Username> akan mencetak username target, <hallobali> akan mencetak url web hallobali.id, anda tidak dapat membuat pesan jika tidak menyertakan url https://hallobali.id pada pesan. Anda juga dapat melakukannya secara manual jika ingin mencetak subdomain, misal: https://lali.hallobali.id."

    poweredBy = "2024 Resellr.id"

    defaultBackgroundColorTheme = "#ce2e2e"

  encryptObject = (
    obj: AllowedHostDomainParameter
  ): AllowedHostDomainParameter => {
    const encryptedObj: AllowedHostDomainParameter = {};
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        encryptedObj[btoa(prop)] = btoa(obj[prop]);
      }
    }
    return encryptedObj;
  };

  emojiToUnicode = (input: string): string => {
   
    return Array.from(input)
      .map((char) => char.codePointAt(0)?.toString(16))
      .join(" ");
  };

  /**
   * memcari string dengan format url https
   * @param {*} text
   * @returns
   */
  extractURLs = (text: string) => {
    //poola regex untuk menemukan URL dalam teks
    const urlPattern = /(https?:\/\/\S+)/gi;
    //menggunakan ekspresi regx untuk menemukan URL dalam teks dan mengembalikan daftar URL yang cocok
    return text.match(urlPattern) || [];
  };

  /**
   * Fungsi untuk memeriksa apakah sebuah URL adalah bagian dari domain murni ex resellr.id
   * @param {*} url
   * @param {*} domain
   * @returns
   */
  isValidURL = (url: string, domain: Array<string>) => {
    let status = false;

    domain.forEach((dom) => {
      //pola regx untuk memeriksa apakah URL adalah bagian dari domain yang ditentukan
      const domainPattern = new RegExp(
        "^(https?://)?([\\w\\d]+\\.)?" + dom.replace(/\./g, "\\.") + "/\\S*",
        "i"
      );

      //Menggunakan metode test() untuk memeriksa apakah URL cocok dengan pola regex
      status = domainPattern.test(url);
    });

    return status;
  };

  /**
   * validasi domain
   */
  domainValidation = (comment: string, domain: object = AllowedHostDomain) => {
    // Ekstrak URL dari teks
    const urls = this.extractURLs(comment);
    if (urls.length == 0) {
      return false;
    }

    // Cek apakah ada minimal satu URL yang mengandung allowed domain
    let foundAllowed = false;
    urls.forEach((url) => {
      Object.values(domain).forEach((dom) => {
        if (url.indexOf(dom) !== -1) {
          foundAllowed = true;
        }
      });
    });

    // Jika tidak ada allowed domain, return false
    if (!foundAllowed) {
      return false;
    }

    // Jika ada minimal satu allowed domain, return true (link lain boleh disertakan)
    return true;
  };

  /**
   * Validasi comments dalam array
   * @param {*} comments
   * @returns
   */
  bundleDomainValidation = (comments: Array<string>) => {
    let status = true;

    comments.forEach((comment) => {
      if (!this.domainValidation(comment)) {
        status = false;
        return;
      }
    });

    return status;
  };

  singleDomainValidation = (comment: string) => {
    let status = true;

    if (!this.domainValidation(comment)) {
      status = false;
      return;
    }

    return status;
  };
}
