import React, {useState} from "react";
import vector from "../assets/img/vector.png";
import check from "../assets/img/check.png"

function MyToggle({rotated = false}:{rotated?:boolean}) {
    return (
        <img 
            src={vector} 
            alt="vector" 
            style={{ 
                transform: rotated ? "rotate(-90deg)":"rotate(90deg)",
                width: "100%", 
                height: "100%", 
                objectFit: "contain",
                transition: "transform 0.2s ease"
            }}
        />  
    );
}

function MyCheck({checked=false}: {checked?:boolean}) {
    return(
        <div style={{
            width:"41px",
            height:"41px",
            backgroundColor: checked ? "#2563EB" : "#BFDBFE",
            maskImage:`url(${check})`,
            WebkitMaskImage:`url(${check})`,
            maskRepeat:"no-repeat",
            maskPosition:"center",
            maskSize:"contain",
            transition:"background-color 0.25s ease",
            cursor:"pointer"
            }}
        />
    );
}

interface PocketBarProps {
    std: string; //회사이름 혹은 질병 대분류
    width?: string;
    height?: string;
    children?: React.ReactNode;
}

const PocketBar: React.FC<PocketBarProps> = ({
    std,
    width="100%",
    height="100%",
    children
}) => {
    const [open, setOpen] = useState(false); 
    const [checked, setChecked] = useState(false);

    const toggle = () => setOpen(!open);
    const toggleCheck = () => setChecked(!checked)

    return(
        <div style={{
            position:"relative",
            width,
            height,
            boxSizing:"border-box",
            backgroundColor: "white",
            borderBottom:"2px solid #eff6ff",
            padding:"12px 44px",
            }}>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",

                position:"relative"
            }}>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                }}>
                    <div onClick={toggleCheck}>
                        <MyCheck checked={checked} />
                    </div>
                    <div style={{position:"relative", top:"-2px"}}>
                        <span style={{fontSize:"23px", fontWeight:"500", color:"#000000",top:"-1px"}}>{std}</span>
                    </div>
                </div>
                    <button 
                        type="button"
                        onClick = {toggle}
                        style={{
                        display:"inline-flex",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        gap: 5,
                        height: "30px",
                        width: "fit-content",
                        margin: 3,
                        padding:0,
                        whiteSpace: "nowrap",
                        outline:"none",
                        border:"none",
                        cursor:"pointer",
                    }}>
                        <p style={{fontSize: 20, color:"#2563EB", margin:0}}>
                            {open ? "닫기":"더보기"}
                        </p>
                        <div style={{width:18, height:18}}>
                            <MyToggle rotated={open}/>    
                        </div>
                    </button>
                </div>


                <div style={{
                    maxHeight: open ? "1000px" : "0px",
                    overflow: "hidden",
                    opacity: open ? 1 : 0,
                    transition: "all 0.4s ease",
                    paddingTop: open ? "20px" : "0px",
                    paddingBottom: open ? "20px" : "0px"
                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"20px"
                    }}>
                        {children}
                    </div>
                </div>
        </div>
    );
};

export default PocketBar

