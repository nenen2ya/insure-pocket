// import React from "react";
// import ReportCard from "../components/ReportCard";
// import RecommendCard from "../components/RecommendCard"
// import CancerGraph from "../components/CancerGraph";

// import {dummyRecommendData} from "../data/dummy_products";

// const SubReport: React.FC = () => {
//     const data = dummyRecommendData;
    // const username = "윤시윤";
    // const subtypes = ["간암", "췌장암", "폐암", "위암", "대장암", "유방암", "갑상선암"];
    // const imgSrcs = [hanhwa,samsung,metlife];
    // const titles = [
    //     "한화생명 무슨무슨 암보험 (갱신형)",
    //     "삼성생명 무슨무슨 암보험 (갱신형)",
    //     "메트라이프 무슨무슨 암보험 (갱신형)"
    // ];
    // const hrefs = [
    //     "https://www.hanwhalife.com/main/MN_0000000_P10000.do", //한화 주소
    //     "https://www.samsunglife.com/", //삼성 주소
    //     "https://www.metlife.co.kr/", //메트라이프 주소
    // ]
    // const cancerKeywords = [
    //     ["간암", "갑상선암", "폐암","위암"],
    //     ['위암', '대장암'],
    //     ['폐암']
    // ];

    // return (
    // <div style={{ textAlign: "center", marginTop: "100px" }}>
    //     <div style={{
    //         display:"flex",
    //         flexDirection:"row",
    //         alignItems:"baseline",
    //         gap: 10
    //         }}>
    //         <h2 style={{fontSize:40}}>{data.username}님</h2>
    //         <h2 style={{color:"#2563EB", fontSize:45}}>암</h2>
    //         <h2 style={{fontSize:40}}>보험 세부 분석 리포트</h2>
    //     </div>
    //     <div style={{
    //     display:"flex",
    //     flexDirection:"column",
    //     gap:"20px",
    //     justifyContent:'center'
    //     }}>
    //         <ReportCard title="암 세부 종류별 보장금액 현황" width="100%" height="fit-content">
    //             <div style ={{
    //                 width:"980px", 
    //                 height:"fit-content",
    //                 display:"flex",
    //                 flexDirection:"column",
    //                 justifyContent:"center",
    //                 alignItems: "center",
    //                 gap:"20px"
    //                 }}
    //             >
                    {/* <CancerGraph subtype={subtypes[0]}></CancerGraph>
                    <CancerGraph subtype={subtypes[1]}></CancerGraph>
                    <CancerGraph subtype={subtypes[2]}></CancerGraph>
                    <CancerGraph subtype={subtypes[3]}></CancerGraph>
                    <CancerGraph subtype={subtypes[4]}></CancerGraph>
                    <CancerGraph subtype={subtypes[5]}></CancerGraph>
                    <CancerGraph subtype={subtypes[6]}></CancerGraph>
                </div>
            </ReportCard>
            <ReportCard title="맞춤형 상품 추천" width="980px" height="100%">  
                    {imgSrcs.map((imgSrc, i) => (
                        <RecommendCard 
                            key = {i}
                            imgSrc={imgSrc} 
                            title={titles[i]} 
                            cancerKeywords={cancerKeywords[i]} 
                            href={hrefs[i]}
                        />
                    ))
                    }      
            </ReportCard>
        </div>
    </div>
    );
};

export default SubReport; */}