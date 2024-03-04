import WhitePaper from "./Docs.pdf";
import TimesOfService from "./privacy-policy.docx";
import CookiePolicy from "./cookie-policy.docx";
import LegalInformation from "./legal-information.docx";

export const pdf = (doc: string) => {
  switch (doc) {
    case "White Paper":
      return WhitePaper;

    case "TERMS OF SERVICE":
      return TimesOfService;

    case "COOKIE POLICY":
      return CookiePolicy;

    case "LEGAL INFORMATION":
      return LegalInformation;

    default:
      throw new Error("Document is not defined");
  }
};
