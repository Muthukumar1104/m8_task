// declare date format,image converter,logout,main page loader function,salt encryption & decryption

import get from "lodash/get";
import scrollToElement from "scroll-to-element";

import {
  RSA_PUBLIC_KEY,
  RSA_PRIVATE_KEY,
  APP_TYPE,
  E_KYC_PUBLIC_KEY,
  CRYPTOJS_KEY,
  CRYPTOJS_IV,
  CRYPTOJS_KEY_CMS,
  CRYPTOJS_IV_CMS,
} from "./constants";
import ENV_CONFIG from "../config/environment/index";
import React from "react";
import isEmpty from "lodash/isEmpty";
import cookie from "react-cookies";
import store from "../store";
import { REGEX } from "@constants";
import CryptoJS from "crypto-js";
import json from "../components/website/StatutoryDisclosures/SchemeSummary/images/json.png";
import xml from "../components/website/StatutoryDisclosures/SchemeSummary/images/xml.png";
export const serialize = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const replaceStringWithParams = (str, obj) => {
  for (var j in obj) {
    var regExp = new RegExp(j, "g");
    str = str.replace(regExp, obj[j]);
  }
  return str;
};

export const getDateString = (date = new Date(), separator = "-") => {
  return (
    date.getFullYear() +
    separator +
    (date.getMonth() + 1) +
    separator +
    date.getDate()
  );
};

export const getImage = (publicUrl, options) => {
  let url = "";
  /*url = ENV_CONFIG.CLOUDINARY_URLS.CLOUD_ACCOUNT_URL;*/

  //Add default options for optimization
  /*url += 'q_80,fl_lossy,f_auto';

    // Adding options with request url eg: height, width
    if (options && options.width) {
        url += ',w_' + options.width;
    }
    if (options && options.aspectRatio) {
        url += ',ar_' + options.aspectRatio;
    }
    if (options && options.height) {
        url += ',h_' + options.height;
    }
*/
  return url + "" + publicUrl;
};

export const getLayeredIcon = (iconName) => {
  iconName = iconName.split(" ")[0];

  switch (iconName) {
    case "icon-quick":
      return (
        <span className="icon-quick">
          <i className="path1" />
          <i className="path2" />
          <i className="path3" />
          <i className="path4" />
          <i className="path5" />
          <i className="path6" />
        </span>
      );
    case "icon-pdf":
      return (
        <span className="icon-pdf">
          <i className="path1" />
          <i className="path2" />
          <i className="path3" />
        </span>
      );
    case "icon-xls":
      return (
        <span className="icon-xls">
          <i className="path1" />
          <i className="path2" />
          <i className="path3" />
        </span>
      );
    case "icon-zip":
      return (
        <span className="icon-zip">
          <i className="path1" />
          <i className="path2" />
          <i className="path3" />
        </span>
      );
    case "icon-expand":
      return (
        <span className="icon-expand">
          <i className="path1" />
          <i className="path2" />
        </span>
      );
    case "icon-collapse":
      return (
        <span className="icon-collapse">
          <i className="path1" />
          <i className="path2" />
        </span>
      );
    case "icon-edit":
      return (
        <span className="icon-edit">
          <i className="path1" />
          <i className="path2" />
          <i className="path3" />
        </span>
      );
    case "icon-success-tick":
      return (
        <span className="icon-success-tick">
          <i className="path1" />
          <i className="path2" />
        </span>
      );
    case "icon-play":
      return <span className="triangle-right" />;
    default:
      return <i className={iconName} />;
  }
};

export const getFileExtension = (filename) => {
  if (filename)
    return filename.substring(filename.lastIndexOf(".") + 1, filename.length);
};

export const getIconForFile = (filename) => {
  let extension =
    getFileExtension(filename) && getFileExtension(filename).toLowerCase();
  let iconClass = "";
  switch (extension) {
    case "pdf":
      iconClass = "icon-pdf";
      return getLayeredIcon(iconClass);
    case "xlsx":
      iconClass = "icon-xls";
      return getLayeredIcon(iconClass);
    case "xls":
      iconClass = "icon-xls";
      return getLayeredIcon(iconClass);
    case "ppt" || "pptx":
      iconClass = "icon-ppt";
      return getLayeredIcon(iconClass);
    case "pptx":
      iconClass = "icon-ppt";
      return getLayeredIcon(iconClass);
    case "zip":
      iconClass = "icon-zip";
      return getLayeredIcon(iconClass);
    case "json":
      return <img src={json} />;
    case "xml":
      return <img src={xml} />;
    default:
      break;
  }
};

export const getLanguage = () => {
  return cookie.load("selectedLanguage")
    ? cookie.load("selectedLanguage")
    : "en";
};

export const getSignUp = () => {
  return cookie.load("signUpLang") ? cookie.load("signUpLang") : "signup";
};

export const getNewInvestor = () => {
  return cookie.load("newInvestorLang")
    ? cookie.load("newInvestorLang")
    : "newinvestor";
};

export const removeClass = (element, ...classNames) => {
  classNames.forEach((className) => {
    element && element.classList != undefined
      ? element.classList.contains(className) &&
        element.classList.remove(className)
      : console.log("Element not Found! Cannot remove " + className + " class");
  });
};

export const addClass = (element, ...classNames) => {
  classNames.forEach((className) => {
    element
      ? !element.classList.contains(className) &&
        element.classList.add(className)
      : console.log("Element not Found! Cannot add " + className + " class");
  });
};

export const titleSplit = (title) => {
  let pageTitle;
  if (title.split(" ").length > 1) {
    pageTitle =
      title &&
      title.split(" ").map((item, index) => {
        return (
          <span key={index} dangerouslySetInnerHTML={{ __html: item + " " }}>
            {/* {item} */}
          </span>
        );
      });
    return pageTitle;
  } else {
    pageTitle = <span>{title} </span>;
    return pageTitle;
  }
};

export const capitalizeFirstLetter = (string) => {
  if (string && isNaN(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  } else {
    return string;
  }
};
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const formDataGenerator = (data) => {
  let formDataValue = new FormData();
  let keys = Object.keys(data);
  keys.map((key) => {
    formDataValue.append(key, data[key]);
  });

  return formDataValue;
};

export const isUserloggedIn = () => {
  const state = store.getState();
  let userInfo = state && state.auth;
  /*if (userInfo &&  !userInfo.details) {
        userInfo = false;
    }*/
  if (
    userInfo &&
    (!userInfo.details || (userInfo.details && !userInfo.details.access_token))
  ) {
    userInfo = false;
  }
  return userInfo;
};
export const getAdditionalDetails = () => {
  return cookie.load("additionalDetails");
};

export const getAppType = () => {
  return cookie.load("app_type");
};

export const removeUserCookie = () => {
  cookie.remove("auth", { path: "/" });
  cookie.remove("authTime", { path: "/" });
  cookie.remove("additionalDetails", { path: "/" });
  cookie.remove("invstusernamelog", { path: "/" });
  //cookie.remove('CPAN', { path: '/' });
  cookie.remove("app_type_+", { path: "/" });
  cookie.remove("otmReg", { path: "/" });
  if (typeof window !== "undefined") {
    const route = window.location.pathname;
    // let appType = getFirstStringAfterSlash(route) === APP_TYPE.INVESTOR || route === "/" ? APP_TYPE.INVESTOR
    //     : (getFirstStringAfterSlash(route) === APP_TYPE.ADVISORS
    //         ? APP_TYPE.ADVISORS : "");
    // cookie.save('app_type', appType , {path: '/'});
    window.localStorage.removeItem("url");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("schemeS");
  }
};

export const removeUserStorage = () => {
  if (typeof window !== "undefined") {
    const route = window.location.pathname;
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("schemeS");
  }
};

export const saveUserCookie = (tokenDetails, appType, path) => {
  cookie.save("auth", tokenDetails, { path: path });
  cookie.save("app_type", appType, { path: path });
  cookie.save("authTime", new Date(), { path: path });
};

export const additionalDetailsCookie = (details, appType, path) => {
  const newDetails = { ...details };
  delete newDetails.url;
  if (typeof window != "undefined") {
    window.localStorage.setItem("url", details.url);
  }
  cookie.save("additionalDetails", newDetails, { path: path });
};

export const getNumberOfMonths = (fromDate, toDate) => {
  let year1 = fromDate.year(),
    year2 = toDate.year(),
    month1 = fromDate.month(),
    month2 = toDate.month();
  if (month1 === 0) {
    month1++;
    month2++;
  }
  return (year2 - year1) * 12 + (month2 - month1);
};

export const getYoutubePosterImage = (youtubeId) => {
  let youtubeBaseURL = "https://img.youtube.com/vi/",
    youtubePoster = "/mqdefault.jpg";

  return youtubeBaseURL + youtubeId + youtubePoster;
};

export const convertToNumber = (value) => {
  if (value) {
    return Number(value && value.replace(/,/g, ""));
  }
};

export const convertIntoRomanWords = (number) => {
  const special = ["First", "Second", "Third"];
  if (number < 4) {
    return special[number];
  }
};

export const validateNumber = (event) => {
  var key = window.event ? event.keyCode : event.which;
  if (event.keyCode === 8) {
    return true;
  } else if (key < 48 || key > 57) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    return false;
  } else {
    return true;
  }
};

export const replaceUnderscore = (value) => {
  return value && value.replace(/_/g, " ");
};

export const downloadReport = (downloadedFile, fileName, type) => {
  // create a download anchor tag
  if (typeof document != "undefined") {
    let downloadLink = document.createElement("a");
    downloadLink.target = "_self";
    downloadLink.download = fileName;

    // convert downloaded data to a Blob
    let blob = new Blob([downloadedFile], { type: "application/octet-binary" });

    // create an object URL from the Blob
    let URL = window.URL || window.webkitURL;
    let downloadUrl = URL.createObjectURL(blob);

    // set object URL as the anchor's href
    downloadLink.href = downloadUrl;

    // append the anchor to document body
    document.body.appendChild(downloadLink);

    // fire a click event on the anchor
    downloadLink.click();

    if (navigator.msSaveBlob) {
      // to fix download issue in IE browser
      //to method saves the File or Blob to disk
      navigator.msSaveOrOpenBlob(
        new Blob([fileName], { type: "text/csv;charset=utf-8;" }),
        fileName
      );
    }

    // cleanup: remove element and revoke object URL
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadUrl);
  }
};

export const toLocaleString = (str) => {
  return str ? Number(str).toLocaleString("en-IN") : "";
};

export const toLocaleStringThree = (str) => {
  return str
    ? Number(str).toLocaleString("en-IN", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })
    : "";
};

export const toLocaleStringTwo = (str) => {
  return str
    ? Number(str).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "";
};

export const getCurrentHourDetails = () => {
  const today = new Date();
  const curHr = today.getHours();
  let greeting = "";

  if (curHr < 12) {
    greeting = "Morning";
  } else if (curHr < 18) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }

  return greeting;
};
export const doesObjectContainsValue = (obj) => {
  let empty = false;
  Object.keys(obj).forEach((k) => {
    if (!isEmpty(obj[k])) {
      empty = true;
    }
  });
  return empty;
};

export const catchError = (dispatch, type, e) => {
  return dispatch({
    type: type,
    apiResponse: e,
    isLoading: false,
  });
};

export const checkArrayContainsSubArray = (array, subArray) => {
  for (let i = 0; i < subArray.length; i++) {
    if (array.includes(subArray[i])) {
      return true;
    }
  }
  return false;
};

export const mapElement = (arry, label, value) => {
  let element =
    arry &&
    arry.map((item) => {
      return { label: item[label], value: item[value] };
    });
  return element;
};

export const findElement = (arry, selectedItemDetail, value) => {
  let element =
    arry &&
    arry.find((item) =>
      value ? item[value] == selectedItemDetail : item == selectedItemDetail
    );
  return element;
};

export const getLastRouteParam = (str) => {
  var lastParam =
    str !== "" ? str.substring(str.lastIndexOf("/") + 1, str.length) : "";
  return lastParam;
};

export const openFile = (url) => {
  window.open(url, "_blank");
};
export const scrollToBottom = (elem) => {
  scrollToElement(elem, {
    offset: -60,
    ease: "linear",
    duration: 100,
    align: "top",
  });
  /*   document.documentElement.scrollTop = document.documentElement.scrollHeight; */
};

export const convertHtmlToText = (html) => {
  let text = html && html !== "" ? html.replace(/(<([^>]+)>)/g, "") : "";
  return text;
};

export const saltEncryption = (text) => {
  if (typeof window !== "undefined" && text !== null) {
    let key = CRYPTOJS_KEY;
    let iv = CRYPTOJS_IV;
    let encrypted =
      "" +
      CryptoJS.AES.encrypt(text, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      });
    console.log("encrypted", encrypted);
    return encrypted;
  }
  return text;
};

export const saltDecryption = (text) => {
  if (typeof window !== "undefined" && text !== null && text !== undefined) {
    try {
      let key = CRYPTOJS_KEY;
      let iv = CRYPTOJS_IV;
      let decrypt = text;
      let decrypted = CryptoJS.AES.decrypt(decrypt, key, {
        iv: iv,
        padding: CryptoJS.pad.ZeroPadding,
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return null;
    }
  }
  return text;
};

export const saltEncryptionCms = (text) => {
  if (typeof window !== "undefined") {
    let key = CRYPTOJS_KEY_CMS;
    let iv = CRYPTOJS_IV_CMS;

    var encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv });
    encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    return encrypted;
  }
  return text;
};

export const saltDecryptionCms = (text) => {
  if (typeof window !== "undefined") {
    let key = CRYPTOJS_KEY_CMS;
    let iv = CRYPTOJS_IV_CMS;

    let decrypted = CryptoJS.AES.decrypt(text, key, { iv: iv });
    // console.log(info2.toString(CryptoJS.enc.Utf8));
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  return text;
};

export const encryptText = (text) => {
  if (typeof window !== "undefined") {
    let { JSEncrypt } = require("jsencrypt");
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(RSA_PUBLIC_KEY);
    return encrypt.encrypt(text);
  }
  return text;
};

export const decryptText = (text) => {
  if (typeof window !== "undefined") {
    let { JSEncrypt } = require("jsencrypt");
    const decrypt = new JSEncrypt();
    decrypt.setPublicKey(RSA_PRIVATE_KEY);
    return decrypt.decrypt(text);
  }
  return text;
};

export const encryptTexteKyc = (text) => {
  if (typeof window !== "undefined") {
    let { JSEncrypt } = require("jsencrypt");
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(E_KYC_PUBLIC_KEY);
    return encrypt.encrypt(text);
  }
  return text;
};
export const getFirstStringAfterSlash = (str) => {
  return str ? str.split("/")[1].toUpperCase() : str;
};

export const isArn = (arn) => {
  return arn &&
    arn.length === 10 &&
    arn.substring(0, 4) === "ARN-" &&
    !isNaN(Number(arn.substring(4))) &&
    (arn.substring(4).length === 6 || arn.substring(4).length === 4)
    ? true
    : false;
};

export const getBaseUrl = () => {
  let appType = cookie.load("app_type");
  return [APP_TYPE.INVESTOR, APP_TYPE.QUICK_INVESTOR].includes(appType)
    ? ENV_CONFIG.INVESTOR_BASE_URL
    : ENV_CONFIG.DISTRIBUTOR_BASE_URL;
};

export const goToLoginOnBrowserBackButton = (history) => {
  window.addEventListener("popstate", (event) => {
    history.push(`/`);
  });
};

export const replaceSpaceWithHyphen = (str) => {
  let fund = str.replace(/ /g, "-");
  fund = fund.replace(/[()]/g, "");
  return fund;
};

export const goToDashboard = (history, URL) => {
  let app_type =
    getAppType().toLowerCase() === "advisors" ? "partners" : "investor";
  history.push(`/${app_type}/${URL.DASHBOARD}`);
};
export const getModifiedFolioList = (list) => {
  return (
    list &&
    list.map((item) => {
      return item.familyFolio
        ? {
            value: item.folio,
            label: `${item.folio} (F)`,
            taxStatus: item.taxStatus,
          }
        : { value: item.folio, label: item.folio, taxStatus: item.taxStatus };
    })
  );
};

export const getModifiedFolioListKyc = (list) => {
  return (
    list &&
    list.map((item) => {
      return item.familyFolio
        ? {
            ...item,
            value: saltDecryption(item.folio),
            label: `${saltDecryption(item.folio)} (F)`,
            contactEditable: item.contactEditable,
            taxStatus: item.taxStatus,
            folioKycStatus: item.folioKycStatus,
            panNumber: saltDecryption(item.panNumber),
            familyFolio: item.familyFolio,
            emailId: item.emailId,
            mobileNumber: item.mobileNumber,
            firstName: item.firstName,
            jointHolderKYCStatus: item.jointHolderKYCStatus,
            residentIndividual: item.residentIndividual,
            guardianKYCStatus: item.guardianKYCStatus,
            folioCMeKYCStatus: item.folioCMeKYCStatus,
            kycUpdateWithin30DaysinKRA: item.kycUpdateWithin30DaysinKRA,
            minor: item.minor,
            dob: item.dob,
          }
        : {
            ...item,
            value: saltDecryption(item.folio),
            label: saltDecryption(item.folio),
            taxStatus: item.taxStatus,
            contactEditable: item.contactEditable,
            folioKycStatus: item.folioKycStatus,
            panNumber: saltDecryption(item.panNumber),
            familyFolio: item.familyFolio,
            jointHolderKYCStatus: item.jointHolderKYCStatus,
            residentIndividual: item.residentIndividual,
            guardianKYCStatus: item.guardianKYCStatus,
            folioCMeKYCStatus: item.folioCMeKYCStatus,
            kycUpdateWithin30DaysinKRA: item.kycUpdateWithin30DaysinKRA,
            minor: item.minor,
            dob: item.dob,
          };
    })
  );
};

export const getRecommendationFolio = (list) => {
  return (
    list &&
    list.map((item) => {
      return item.familyFolio
        ? {
            ...item,
            value: item.folio,
            label: `${item.folio} (F)`,
            contactEditable: item.contactEditable,
            taxStatus: item.taxStatus,
            folioKycStatus: item.folioKycStatus,
            panNumber: item.panNumber,
            familyFolio: item.familyFolio,
            emailId: item.emailId,
            mobileNumber: item.mobileNumber,
            firstName: item.firstName,
            jointHolderKYCStatus: item.jointHolderKYCStatus,
            residentIndividual: item.residentIndividual,
            guardianKYCStatus: item.guardianKYCStatus,
            folioCMeKYCStatus: item.folioCMeKYCStatus,
            kycUpdateWithin30DaysinKRA: item.kycUpdateWithin30DaysinKRA,
            minor: item.minor,
            dob: item.dob,
          }
        : {
            ...item,
            value: item.folio,
            label: item.folio,
            taxStatus: item.taxStatus,
            contactEditable: item.contactEditable,
            folioKycStatus: item.folioKycStatus,
            panNumber: item.panNumber,
            familyFolio: item.familyFolio,
            jointHolderKYCStatus: item.jointHolderKYCStatus,
            residentIndividual: item.residentIndividual,
            guardianKYCStatus: item.guardianKYCStatus,
            folioCMeKYCStatus: item.folioCMeKYCStatus,
            kycUpdateWithin30DaysinKRA: item.kycUpdateWithin30DaysinKRA,
            minor: item.minor,
            dob: item.dob,
          };
    })
  );
};

export const maskedEmailAt = (email) => {
  if (
    email &&
    REGEX.EMAIL_ID.test(email.toLowerCase()) &&
    !email.includes("*")
  ) {
    let index = email.lastIndexOf("@");
    let prefix = email.substring(0, index);
    let prefixLength = prefix.length;
    let postfix = email.substring(index);
    let mask = prefix
      .split("")
      .map(function (o, i) {
        if (i < 3 || i > prefixLength - 3) {
          return o;
        } else {
          return "*";
        }
      })
      .join("");
    return mask + postfix;
  }
  return email;
};

export const maskedMobile = (mobile) => {
  if (mobile && mobile.length === 12) return mobile.replace(/^.{8}/g, "******");
  if (mobile && mobile.length === 13) return mobile.replace(/^.{9}/g, "******");
  if (mobile && mobile.length === 14)
    return mobile.replace(/^.{10}/g, "******");
  if (mobile && mobile.length === 10) return mobile.replace(/^.{6}/g, "******");
  return mobile;
};
