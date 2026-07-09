import type { Metadata } from "next";
import CvDocument from "../CvDocument";
import { supportEngineerCv } from "./supportEngineerCvData";

export const metadata: Metadata = {
  title: {
    absolute: `${supportEngineerCv.name} Support Engineer CV`,
  },
  description: supportEngineerCv.summary.join(" "),
};

export default function SupportEngineerCvPage() {
  return <CvDocument cv={supportEngineerCv} />;
}
