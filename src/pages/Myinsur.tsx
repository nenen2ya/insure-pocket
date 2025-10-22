import React from "react";
import ReportCard from "../components/ReportCard";
import hanhwa from "../assets/img/company/hanhwa.png"
import metlife from "../assets/img/company/metlife.png"
import MyPageCard from "../components/MyPageCard";

const Myinsur:React.FC = () => {

    const username = "윤시윤";
    const insurnum = "2";
    const imgsrcs = [hanhwa, metlife]
    const product = ["한화생명 무배당 암보험","메트라이프 폐암췌장 암보험"]
    const prices = [27500, 15000]

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
                        <MyPageCard
                            imgSrc={imgsrcs[0]} title={product[0]} price={prices[0].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                        <MyPageCard
                            imgSrc={imgsrcs[1]} title={product[1]} price={prices[1].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                        <MyPageCard
                            imgSrc={imgsrcs[0]} title={product[0]} price={prices[0].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                        <MyPageCard
                            imgSrc={imgsrcs[1]} title={product[1]} price={prices[1].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                        <MyPageCard
                            imgSrc={imgsrcs[0]} title={product[0]} price={prices[0].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                        <MyPageCard
                            imgSrc={imgsrcs[1]} title={product[1]} price={prices[1].toLocaleString()} width="918px" height="109px"> 
                        </MyPageCard>
                    </div>
                </ReportCard>
            </div>
        </div>
    );

};

export default Myinsur