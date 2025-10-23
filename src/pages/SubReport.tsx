import React from "react";
import ReportCard from "../components/ReportCard";
import RecommendCard from "../components/RecommendCard"
import CancerGraph from "../components/CancerGraph";

import {dummyRecommedData} from "../data/dummy_products";
import { dummyCancerData } from "../data/dummy_cancergraph";

const SubReport: React.FC = () => {
    const data1 = dummyRecommedData;
    const data2 = dummyCancerData;
    const subtypes = ["간암", "췌장암", "폐암", "위암", "대장암", "유방암", "갑상선암"];

    return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"baseline",
            gap: 10
            }}>
            <h2 style={{fontSize:40}}>{data1.user_name}님</h2>
            <h2 style={{color:"#2563EB", fontSize:45}}>{data1.category_name}</h2>
            <h2 style={{fontSize:40}}>보험 세부 분석 리포트</h2>
        </div>
        <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        justifyContent:'center'
        }}>
            <ReportCard title= {`${data1.category_name} 세부 종류별 보장금액 현황`} width="100%" height="fit-content">
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
                    {subtypes.map((subtype,i) => (
                        <CancerGraph 
                        key={i} subtype={subtype} 
                        recommended_coverage={data2.results[i].recommended_coverage ?? 0}
                        coverage_amount={data2.results[i].coverage_amount ?? 0}>
                        </CancerGraph>
                    ))
                    }
                </div>
            </ReportCard>

            <ReportCard title="맞춤형 상품 추천" width="980px" height="100%"> 
                {data1.recommend_products.map((product)=>(
                    <RecommendCard
                    key = {product.product_id}
                    imgSrc={product.company_img}
                    title= {product.product_name}
                    cancerKeywords= {product.subcategories.map((subcategory)=>(
                                        subcategory.subcategory_name
                                    ))
                                    }
                    href= {product.company_src}
                    contents={product.contents}
                    selected={false}
                    />
                ))
                }
            </ReportCard>
        </div>
    </div>
    );
};

export default SubReport;