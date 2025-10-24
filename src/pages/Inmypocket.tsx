import React, {useState} from 'react';
import ReportCard from "../components/ReportCard";
import PocketBar from '../components/PocketBar';
import RecommendCard from '../components/RecommendCard';

import { dummyInMyPocket } from '../data/dummy_inmypocket';


const Inmypocket:React.FC = () => {
    const data = dummyInMyPocket;
    const [activeTab, setActiveTab] = useState<"보험사" | "보장영역">("보험사")

    interface Product {
    company_name: string;
    company_img: string;
    company_href: string;
    product_name: string;
    subcategories: { subcategory_name: string }[];
    contents: { keyword: string; summary: string }[];
    monthly_premium: number;
    }

    return(
        <div style={{overflowY:"auto", minHeight:"100vh"}}> //viewheight 100% 채워라
            <div style={{
                top:"80px",
                backgroundColor:"#fff",
                zIndex:10,
                paddingBottom:"20px"
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                }}>
                    <p style={{color:"#2563EB", fontSize:"45px", fontWeight:"500"}}>인마이포켓</p>
                </div>

                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    width:"977px",
                    height:"61px",
                    position:"relative"
                }}>
                    {/*보험사탭*/}
                    <div onClick={() => setActiveTab("보험사")} style={{
                        width:"488.5px",
                        height:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        cursor:"pointer",
                        position:"relative"
                    }}>
                        <div style={{
                            color: activeTab === "보험사" ? "#DB2777" : "#757575",
                            fontSize: 24,
                            fontWeight:"500",
                            lineHeight: 1.4,
                            transition:"color 0.3s ease"
                        }}>
                            보험사
                        </div>
                        <div style={{
                            backgroundColor: activeTab === "보험사" ? "#DB2777" : "#757575",
                            width:"100%",
                            height:"2px",
                            bottom:"-7px",
                            position:"absolute",
                            transition:"background-color 0.3s ease"
                        }}>
                        </div>
                    </div>

                    {/*보장영역탭*/}
                    <div onClick={() => setActiveTab("보장영역")} style={{
                        width:"488.5px",
                        height:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        cursor:"pointer",
                        position:"relative"
                    }}>
                        <div style={{
                            color: activeTab === "보장영역" ? "#DB2777" : "#757575",
                            fontSize: 24,
                            fontWeight:"500",
                            lineHeight: 1.4,
                            transition:"color 0.3s ease"
                        }}>
                            보장영역
                        </div>
                        <div style={{
                            backgroundColor: activeTab === "보장영역" ? "#DB2777" : "#757575",
                            width:"100%",
                            height:"2px",
                            bottom:"-7px",
                            position:"absolute",
                            transition:"background-color 0.3s ease"
                        }}>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop:"78px", 
                // border:"2px solid black"
                }}>
                {/*리포트 카드 전체*/}
                <ReportCard 
                title={`총 ${(data.categories[0].products.length)}개`} 
                width="977px" 
                height="auto"
                >
                    {/* [ 보험사 + 보장영역 ] transition 범위 */}
                    <div style={{
                        overflow:"hidden", 
                        width:"100%", 
                        }}>
                        {/* 보험사 눌렀을 때 */}
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                        }}>
                            {/*보험사-보장영역 구분*/}
                            <div style ={{
                                width:"100%",
                                flexShrink:0,
                            }}>
                                {data.categories.map((category,i)=>{
                                    
                                    const groupedProducts:any = {};

                                    category.products.forEach((product)=>{
                                        const name = product.company_name; //카테고리 별 개별 product 돌면서 product.company_name name으로 명명
                                        if (!groupedProducts[name]) {
                                            groupedProducts[name] = [];
                                        }
                                        groupedProducts[name].push(product);
                                    });

                                    return(

                                    <div key={i}>
                                        {activeTab === "보험사"
                                        ? Object.keys(groupedProducts).map((company)=>(
                                            <PocketBar
                                                key={company}
                                                std={true}
                                                std_content={company}
                                            >
                                                {groupedProducts[company].map((product:Product,j:number)=>(
                                                    <RecommendCard
                                                    key={j}
                                                    imgSrc={product.company_img}
                                                    title={product.product_name}
                                                    cancerKeywords={product.subcategories.map((s) => s.subcategory_name)}
                                                    href={product.company_href}
                                                    contents={product.contents}
                                                    selected={true}
                                                    width="800px"
                                                    />
                                                ))}
                                            </PocketBar>
                                            ))

                                        : (
                                            <PocketBar
                                            key={i}
                                            std={false}
                                            std_content={category.category_name}
                                            >
                                            {category.products.map((product,k)=>(
                                                <RecommendCard
                                                key={k}
                                                imgSrc={product.company_img}
                                                title={product.product_name}
                                                cancerKeywords={product.subcategories.map(s => s.subcategory_name)}
                                                href={product.company_href}
                                                contents={product.contents}
                                                selected={true}
                                                width="800px"
                                                />
                                            ))}
                                            </PocketBar>
                                        )}
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </ReportCard>
            </div>
        </div>      
    );
}; 

export default Inmypocket
