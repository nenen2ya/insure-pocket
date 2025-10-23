import React from "react";
import ReportCard from "../components/ReportCard";
import MyPageCard from "../components/MyPageCard";
import { dummyReportData } from "../data/dummy_users_products";

const Myinsur:React.FC = () => {

    const data = dummyReportData;

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
                <span style={{fontSize:"40px", fontWeight:"500"}}>{data.user_name}님의</span>
                <span style={{color:"#2563EB", fontSize:"45px", fontWeight:"500"}}>가입된 보험</span>
            </div>

            <div style={{marginTop:"40px"}}>

                <ReportCard title={`총 ${data.user_products.length}개`} width="977px" height="auto">
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        marginTop:"15px",
                        marginBottom:"15px",
                        gap:"20px"
                    }}>
                        {data.user_products.map((product) => (
                        <MyPageCard
                            key = {product.id}
                            imgSrc={product.company_img} 
                            title={product.product_name}
                            price={product.monthly_premium.toLocaleString()}
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