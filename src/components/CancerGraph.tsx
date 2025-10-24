import React from 'react';

// import { dummyCancerData } from '../data/dummy_cancergraph';

interface CancerGraphProps {
    subtype: string; // 암 세부분류
    recommended_coverage: number;
    coverage_amount: number;
}

const CancerGraph: React.FC<CancerGraphProps> = ({ 
    subtype,
    recommended_coverage,
    coverage_amount 
}) => {
    // const data = dummyCancerData;
    
    return (
        <div style={{ 
            width: 918, 
            height: 70, 
            position: 'relative', 
            margin: '8px 0', 
            overflow: 'visible', 
            display:"flex", 
            flexDirection:"row",
            alignItems:"center",
            }}>

        {/* 바 영역 박스 */}
        <div style={{ 
            width: 745.49, 
            height: 70, 
            left: 172.51, 
            top: 0, 
            position: 'relative', 
            display:"flex", 
            alignItems:"center", 
            border: '1px #2563EB solid',
            overflow:"hidden",
            borderRadius:30
            }}>

            {/* 값/라벨/바 */}
            <div style={{ 
                width: "100%", 
                height: 43.51, 
                position: 'relative',
                }}
            >
                {/* 권장금액 */}
                <div
                style={{
                    position: 'absolute',
                    right:"46%",
                    top:"90%",
                    textAlign: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    transition:"left 0.3s ease"
                }}
                >
                {recommended_coverage.toLocaleString()}만 원
                </div>

                <div style={{
                    position:"relative",
                    width:"100%",
                    height:"100%",
                }}>
                    {/* y축 */}
                    <div style={{
                    position: "absolute",
                    width: 4, 
                    height: 70, 
                    left: "50%",
                    top:"50%",
                    transform:"translateY(-50%)",
                    background:"#2563EB",
                    opacity:"0.2"
                    }}
                    />

                    <div
                    style={{
                        position: "absolute",
                        left: 0,
                        marginLeft:"0px",
                        width: `${((coverage_amount)/(recommended_coverage*2))*100}%`,
                        height: 30,
                        top: "50%",
                        transform:"translateY(-50%)",
                        background: recommended_coverage<coverage_amount? '#1E3A8A':"#BE185D",
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        transition: "width 0.3s ease"
                    }}>
                        {/* 보장금액 */}
                        <div
                            style={{
                                position: 'absolute',
                                right: "6px",  
                                top: "50%",
                                transform: "translateY(-50%)",
                                fontSize: 11,
                                color:"white",
                                fontWeight: 400,
                                whiteSpace: "nowrap",
                                textShadow: "0 0 4px rgba(0,0,0,0.4)",
                                transition:"left 0.3s ease"
                            }}>
                            {coverage_amount!==0 && `${coverage_amount.toLocaleString()}만 원`}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 좌측 라벨 박스 */}
        <div
            style={{
            width: 148,
            height: 70,
            left: 0,
            top: 0,
            position: 'absolute',
            background: 'white',
            borderRadius: 30,
            border: '1px #2563EB solid', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            }}
        >
            <div
            style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'black',
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '22.5px',
                wordWrap: 'break-word',
            }}
            >
            {subtype}
            </div>
        </div>
        </div>
    );
    };

export default CancerGraph;
