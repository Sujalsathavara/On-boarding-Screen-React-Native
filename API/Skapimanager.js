import axios, { Axios, AxiosHeaders } from "axios";

const SkapiManager = axios.create({
  baseURL: "https://www.myleadssite.com/MLeads9.7.22/",
  responseType: "json",
  withCredentials: true,
});

export default SkapiManager;
