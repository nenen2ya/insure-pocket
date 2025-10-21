import React from "react";
import ReportCard from "../components/ReportCard";
import RecommendCard from "../components/RecommendCard"
import CancerGraph from "../components/CancerGraph";
import hanhwa from "../assets/img/company/hanhwa.png"

const SubReport: React.FC = () => {
    const username = "윤시윤";
    const subtypes = ["간암", "췌장암", "폐암", "위암", "대장암", "유방암", "갑상선암"];
    const imgSrc = hanhwa;
    const title = "한화생명 무슨무슨 암보험 (갱신형)";
    const cancerKeywords = ["간암", "갑상선암", "폐암","위암"];

    return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"baseline",
            gap: 10
            }}>
            <h2 style={{fontSize:40}}>{username}님</h2>
            <h2 style={{color:"#2563EB", fontSize:45}}>암</h2>
            <h2 style={{fontSize:40}}>보험 세부 분석 리포트</h2>
        </div>
        <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        justifyContent:'center'
        }}>
            <ReportCard title="암 세부 종류별 보장금액 현황" width="100%" height="fit-content">
                <div style ={{
                    width:"980px", 
                    height:"fit-content",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems: "center",
                    gap:"20px"
                    }}
                >
                    <CancerGraph subtype={subtypes[0]}></CancerGraph>
                    <CancerGraph subtype={subtypes[1]}></CancerGraph>
                    <CancerGraph subtype={subtypes[2]}></CancerGraph>
                    <CancerGraph subtype={subtypes[3]}></CancerGraph>
                    <CancerGraph subtype={subtypes[4]}></CancerGraph>
                    <CancerGraph subtype={subtypes[5]}></CancerGraph>
                    <CancerGraph subtype={subtypes[6]}></CancerGraph>
                </div>
            </ReportCard>
            <ReportCard title="맞춤형 상품 추천" width="980px" height="100%">
                {/* <div> */}
                    <RecommendCard imgSrc={imgSrc} title={title} cancerKeywords={cancerKeywords}></RecommendCard>
                    <RecommendCard imgSrc={imgSrc} title={title} cancerKeywords={cancerKeywords}></RecommendCard>
                    <RecommendCard imgSrc={imgSrc} title={title} cancerKeywords={cancerKeywords}></RecommendCard>
                {/* </div> */}
            </ReportCard>
        </div>
    </div>
    );
};

export default SubReport;