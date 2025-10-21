import React, {useState} from "react";
import vector from "../assets/img/vector.png";

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

interface PocketBarProps {
    company: string; //회사이름
    width?: string;
    height?: string;
}

const PocketBar: React.FC<PocketBarProps> = ({
    company,
    width="100%",
    height="auto"
}) => {
    const [open, setOpen] = useState(false); 
    const toggle = () => setOpen(!open);

    return(
        <div style={{
            width,
            height,
            background:"white",
            boxSizing:"border-box",
            border: "2px #000000 solid",
            borderBottom: "2px #EFF6FF solid",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
        }}>
            <span style={{fontSize:"25px", fontWeight:"500", color:"#000000"}}>{company}</span>

            <button onClick={toggle} style={{
                background:"none",
                border:"none",
                cursor:"pointer",
                width:"20px",
                height:"20px"
            }}>
                <MyToggle rotated={open}/>
            </button>

            <div></div>
        </div>
    );
};

export default PocketBar