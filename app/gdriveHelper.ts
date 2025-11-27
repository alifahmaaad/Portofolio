import { google } from "googleapis";

const getJsonFromDrive = async (fileId: string) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "service-account.json",
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  const drive = google.drive({ version: "v3", auth });
  const res = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "json" }
  );

  return res.data;
};

type dataCertificateType = {
  id: number;
  title: string;
  text: string;
  imgurl: string;
  link: string;
};

export const getCertificate = async () => {
  return (await getJsonFromDrive(
    "1j2-msHsVhrjm7Pg7u8WTtihOEEll8Tok"
  )) as dataCertificateType[];
};

type dataProjectType = {
  imgurl: string;
  text: string;
  title: string;
  link?: string;
};

export const getPortofolio = async () => {
  return (await getJsonFromDrive(
    "1BP_-83esX2DepuGBxKK0II4_NOWOI1PR"
  )) as dataProjectType[];
};

export const getProject = async () => {
  return (await getJsonFromDrive(
    "11oXQ3sKK4kP1mXh6mF1TRurfjjHPDOOs"
  )) as dataProjectType[];
};

type dataWorkExpType = {
  imgurl: string;
  id: number;
  role: string;
  year: string;
  companie: string;
  text: string;
};

export const getWorkExp = async () => {
  return (await getJsonFromDrive(
    "1W44sJkbnpSOxCdO1TaMlIUaJL5CXJFY2"
  )) as dataWorkExpType[];
};

type dataSkillsType = { name: string; list: any[] };

export const getSkills = async () => {
  return (await getJsonFromDrive(
    "1zpAg5bpQtOcY6iUWs1GuSGWfD0KFtiNJ"
  )) as dataSkillsType[];
};
