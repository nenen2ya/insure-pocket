import React from 'react';
import vector from "../assets/img/vector.png";

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
        <div style={{
            display:"inline-flex",
            flexDirection: "column",
            width:"fit-content",
            padding: 10,
            gap: 10
        }}>
            {/* 헤더: 왼쪽 타입 라벨 + 오른쪽 더보기 */}    
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 70
            }}>

                <div style={{
                    padding: 15,
                    width: "70px",
                    height: "10px",
                    background: 'white',
                    borderRadius: "30px",
                    outline: '1px #BFDBFE solid',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: "flex-start"
                }}>
                    {/* 타입 라벨 */}
                    <div style={{
                        textAlign: "center",
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'black',
                        fontSize: 20,
                        padding: 0 
                        }}>
                        {type} 
                    </div>
                </div> 

                {/* 더보기 > */}
                <button style={{
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
                }}>
                    <p style={{fontSize: 20, color:"#2563EB", margin:0}}>더보기</p>
                    <div style={{width:18, height:18}}>
                        <MyToggle/>    
                    </div>
                </button>
            </div>

            <div style={{
                width:"100%",
                height:"150px",
                backgroundColor:"white",
                borderRadius:30,
                border:"2px solid #2563EB",
                alignSelf: "center"
                }}>
            </div>

        </div>
    );
}

export default SummaryGraph;