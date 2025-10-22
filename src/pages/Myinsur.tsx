import React from "react";
import ReportCard from "../components/ReportCard";
import hanhwa from "../assets/img/company/hanhwa.png"
import samsung from "../assets/img/company/samsung.png"
import metlife from "../assets/img/company/metlife.png"
import MyPageCard from "../components/MyPageCard";
// import { dummyReportData } from "../data/dummy_users_products";

const Myinsur:React.FC = () => {

    const username = "윤시윤";
    const insurnum = "2";
    const imgSrcs = [hanhwa,samsung,metlife];
    const titles = [
        "한화생명 무슨무슨 암보험 (갱신형)",
        "삼성생명 무슨무슨 암보험 (갱신형)",
        "메트라이프 무슨무슨 암보험 (갱신형)"
    ];
    const  prices = [27500, 15000, 13000]


    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            paddingTop:"100px",
            boxSizing:"border-box"
        }}>
            <div style={{
                display:"flex",
                alignItems:"baseline",
                gap:"8px"
            }}>
                <span style={{fontSize:"40px", fontWeight:"500"}}>{username}님의</span>
                <span style={{color:"#2563EB", fontSize:"45px", fontWeight:"500"}}>가입된 보험</span>
            </div>

            <div style={{marginTop:"40px"}}>

                <ReportCard title={`총 ${insurnum}개`} width="977px" height="auto">
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        marginTop:"15px",
                        marginBottom:"15px",
                        gap:"20px"
                    }}>
                        {imgSrcs.map((imgSrc,i) => (
                        <MyPageCard
                            key = {i}
                            imgSrc={imgSrc} 
                            title={titles[i]}
                            price={prices[i].toLocaleString()}
                        />
                    ))
                    }   
                    </div>
                </ReportCard>
            </div>
        </div>
    );

};

export default Myinsur