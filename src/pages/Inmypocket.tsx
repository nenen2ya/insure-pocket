import React, {useState} from 'react';
import ReportCard from "../components/ReportCard";
import PocketBar from '../components/PocketBar';
import RecommendCard from '../components/RecommendCard';
import hanhwa from "../assets/img/company/hanhwa.png"
import samsung from "../assets/img/company/samsung.png"
import metlife from "../assets/img/company/metlife.png"


const Inmypocket:React.FC = () => {
    const insurnum = "3"
    const company = "한화생명보험"
    const type = "암"
    const imgSrcs = [hanhwa,samsung,metlife];
    const titles = [
        "한화생명 무슨무슨 암보험 (갱신형)",
        "삼성생명 무슨무슨 암보험 (갱신형)",
        "메트라이프 무슨무슨 암보험 (갱신형)"
    ];
    const hrefs = [
        "https://www.hanwhalife.com/main/MN_0000000_P10000.do", //한화 주소
        "https://www.samsunglife.com/", //삼성 주소
        "https://www.metlife.co.kr/", //메트라이프 주소
    ]
    const cancerKeywords = [
        ["간암", "갑상선암", "폐암","위암"],
        ['위암', '대장암'],
        ['폐암']
    ];
    const [activeTab, setActiveTab] = useState<"보험사" | "보장영역">("보험사")

    return(
        <div>
            <div style={{
                position:"sticky",
                top:0,
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

            <div style={{marginTop:"78px"}}>
                <ReportCard title={`총 ${insurnum}개`} width="977px" height="auto">
                    <div style={{overflow:"hidden", width:"100%"}}>
                        <div style={{
                            display:"flex",
                            justifyContent:"row",
                            transform: activeTab === "보험사" ? "translateX(0%)" : "translateX(-100%)",
                            transition:"transform 0.3s ease-in-out",
                        }}>
                            {/*보험사*/}
                            <div style ={{
                                width:"100%",
                                flexShrink:0,
                            }}>
                                <PocketBar std={company}>
                                    {imgSrcs.map((imgSrc,i) => (
                                    <RecommendCard
                                        key = {i}
                                        imgSrc={imgSrc} 
                                        title={titles[i]} 
                                        cancerKeywords={cancerKeywords[i]} 
                                        href={hrefs[i]}
                                        width="800px"
                                    />
                                ))
                                }
                            </PocketBar>
                            </div>
                            {/*보장영역*/}
                            <div style ={{
                                width:"100%",
                                flexShrink:0
                            }}>
                                <PocketBar std={type}></PocketBar>
                            </div>
                        </div>
                    </div>
                </ReportCard>
            </div>
        </div>      
    );
}; 

export default Inmypocket
