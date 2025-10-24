import hanhwa from "../assets/img/company/hanhwa.png";
import lotte from "../assets/img/company/lotte.png";
import meritz from "../assets/img/company/meritz.png";
import metlife from "../assets/img/company/metlife.png";

// 회사 이름 또는 ID를 기준으로 로컬 이미지 매핑
export const companyImgs: Record<string, string> = {
    "메트라이프 생명": metlife,
    // "하나생명" : hana,  
    "메리츠화재": meritz,
    "롯데손해보험" : lotte,
    // "DB손해보험" : DB,
    // "KB손해보험" : KB,
    // "라이나생명" : lina,
    "한화생명" : hanhwa,
    // "교보생명" : kyobo,
    // "DB 생명" : dblife,
    // "신한라이프" : shinhan,
    // "AIA생명" : aia
};

export const defaultCompanyImg = hanhwa;
