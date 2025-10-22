import React from 'react';
import vector from "../assets/img/vector.png";
import { Link } from "react-router-dom";

function MyToggle() {
    return <img src={vector} alt="vector" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
}
// 종합 요약 그래프
interface SummaryGraphProps { 
    type: string;
    width?: string;
    height?: string;
};

const SummaryGraph: React.FC<SummaryGraphProps> = ({type}) => {
    return (
        <Link 
        to = {type==='암'? "/subreport":"#"}
        style={{
            width:"fit-content",
            display:"inline-flex",
            flexDirection: "column",
            padding: 10,
            gap: 10,
            // border:"2px solid black"
        }}>
            {/* 헤더: 왼쪽 타입 라벨 + 오른쪽 더보기 */}    
            <div style={{
                width:"100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 70,
                // border:"2px solid black"
            }}>
                {/* 타입 라벨 */}
                <div style={{
                    padding: 15,
                    width: "100%",
                    height: "10px",
                    background: 'white',
                    borderRadius: "30px",
                    outline: '1px #BFDBFE solid',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: "flex-start",
                }}>
                    {/* 타입 이름 */}
                    <div style={{
                        textAlign: "center",
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'black',
                        fontWeight:"normal",
                        fontSize: 20,
                        padding: 0 
                        }}>
                        {type} 
                    </div>
                </div> 

                {/* 더보기 > */}
                <div
                style={{
                    display:"inline-flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    gap: 5,
                    height: "30px",
                    width: "fit-content",
                    margin: 0,
                    padding: 0,
                    whiteSpace: "nowrap",
                    outline:"none"
                }}
                >
                    <p style={{fontSize: 20, color:"#2563EB", margin:0}}>더보기</p>
                    <div style={{width:18, height:18}}>
                        <MyToggle/>    
                    </div>
                </div>
            </div>

            {/* 그래프 박스 */}
            <div style={{
                width:"220px",
                height:"150px",
                backgroundColor:"white",
                borderRadius:30,
                border:"2px solid #2563EB",
                padding:12,
                display:"flex",
                flexDirection:"column",
                justifyContent: "center",
                gap:8
                }}>
                {/* 그래프+y축 */}
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"flex-end",
                    // border:"2px solid black"
                }}>
                    {/* y축 */}
                    <div style={{
                    width: 3, 
                    height: 60, 
                    backgroundColor:"#DFE8EC", 
                    alignSelf:"center"
                    }}
                    >
                    </div>
                    {/* 그래프 */}
                    <div style={{
                    width: 110,
                    height: 28, 
                    background: '#1E3A8A', 
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                    borderTopRightRadius: 20, 
                    borderBottomRightRadius: 20,
                    alignSelf:"center"
                    }}>
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    fontSize: 15, 
                    color:"black",
                    fontWeight:"normal"
                    }}>
                    권장금액
                </div>
            </div>

        </Link>
    );
}

export default SummaryGraph;