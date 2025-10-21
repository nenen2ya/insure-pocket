import React, {useState} from 'react';
import ReportCard from "../components/ReportCard";
import PocketBar from '../components/PocketBar';


const Inmypocket:React.FC = () => {
    const insurnum = "3"
    const company = ["한화생명보험", "메트라이프"]
    const type = ["암"]
    const [activeTab, setActiveTab] = useState<"보험사" | "보장영역">("보험사")

    return(
        <div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start"
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

            <div style={{marginTop:"78px"}}>
                <ReportCard title={`총 ${insurnum}개`} width="977px" height="auto">
                    <div style={{overflow:"hidden", width:"100%"}}>
                        <div style={{
                            display:"flex",
                            justifyContent:"row",
                            width:"200%",
                            transform: activeTab === "보험사" ? "translateX(0%)" : "translateX(-50%)",
                            transition:"transform 0.3s ease-in-out",
                        }}>
                            {/*보험사*/}
                            <div style ={{
                                width:"50%",
                                flexShrink:0,
                            }}>
                                <PocketBar company={company[0]}></PocketBar>
                            </div>
                            {/*보장영역*/}
                            <div style ={{
                                width:"50%",
                                flexShrink:0
                            }}>
                                <p>{type[0]}</p>
                            </div>
                        </div>
                    </div>
                </ReportCard>
            </div>
        </div>      
    );
}; 

export default Inmypocket