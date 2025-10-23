// src/data/dummyReportData.ts
import hanhwa from "../assets/img/company/hanhwa.png";
import metlife from "../assets/img/company/metlife.png";
import samsung from "../assets/img/company/samsung.png";

export const dummyReportData = {
  user_id: 4,
  user_name: "윤시윤",
  user_products: [
    {
      id: 1,
      company_id: 1,
      category: "cancer",
      company_name: "한화생명",
      product_name: "한화생명 암보험",
      monthly_premium: 27500,
      company_img: hanhwa,
    },
    {
      id: 2,
      company_id: 2,
      category: "cancer",
      company_name: "메트라이프",
      product_name: "메트라이프 실손보험",
      monthly_premium: 50000,
      company_img: metlife,
    },
    {
      id: 3,
      company_id: 3,
      category: "cancer",
      company_name: "삼성생명",
      product_name: "삼성생명 종합보험",
      monthly_premium: 32000,
      company_img: samsung,
    },
  ],
};
