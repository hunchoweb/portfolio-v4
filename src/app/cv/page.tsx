import type { Metadata } from "next";
import CvDocument from "./CvDocument";
import { cv } from "./cvData";

export const metadata: Metadata = {
  title: {
    absolute: `${cv.name} CV`,
  },
  description: cv.summary.join(" "),
};

export default function CvPage() {
  return <CvDocument cv={cv} />;
}
