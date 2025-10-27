import React,{ useState, useEffect}from 'react';
import vector from "../assets/img/vector.png";
import { Link } from "react-router-dom";

function MyToggle() {
    return <img src={vector} alt="vector" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
}
interface SummaryGraphProps { 
    type: string;
    width?: string;
    height?: string;
    lack: number;
    stand: number;
    plus: number ;
};

const SummaryGraph: React.FC<SummaryGraphProps> = ({type, lack, stand, plus}) => {
    const [animate, setAnimate] = useState(false);
        useEffect(() => {const timer = setTimeout(() => setAnimate(true), 300);
        return() => clearTimeout(timer);}, []);

    return (
        <Link 
        to = {type==='암'? "/subreport":"#"}
        style={{
            width:"fit-content",
            display:"inline-flex",
            flexDirection: "column",
            padding: 10,
            gap: 10,
        }}>
            <div style={{
                width:"100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 70,
            }}>
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

            <div style={{
                width:"220px",
                height:"180px",
                backgroundColor:"white",
                borderRadius:30,
                border:"2px solid #2563EB",
                padding:12,
                display:"flex",
                flexDirection:"row",
                justifyContent: "space-evenly",
                alignItems:"flex-end",
                position:"relative",
                overflow:"hidden"
                }}>
                <div style={{
                    position:"absolute",
                    bottom:51,
                    left:"50%",
                    transform:"translateX(-50%)",
                    width:"80%",
                    height:4,
                    backgroundColor:"#EFF6FF",
                    borderRadius:2
                }}/>
                {[
                    {label:"부족", value: lack, color:"#DB2777"},
                    {label:"적정", value: stand, color:"#BFDBFE"},
                    {label:"여유", value: plus, color:"#2563EB"},
                ].map(({label, value, color}, i) => (
                    <div
                        key={i}
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            position:"relative"
                        }}
                    >
                        <span style={{
                        position:"absolute",
                        bottom:`${animate ? (value/Math.max(lack, stand, plus,1))*100+50 : 50 }px`,
                        fontSize:10,
                        fontWeight:600,
                        color:"#000000",
                        transition:"bottom 1.6s ease"
                        }}>
                            {value}
                        </span>

                        <div
                            style={{
                                width:30,
                                height: animate ? `${(value/Math.max(lack, stand, plus, 1))*100}px`: "0px",
                                background: color,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                transition:"height 1.6s ease"
                            }}
                        />
                        <p style ={{fontSize: 14, marginTop: 8, color:"#000000"}}>{label}</p>
                    </div>
                ))}
            </div>
        </Link>
    );
}

export default SummaryGraph;