import React, {useState} from "react";
import vector from "../assets/img/vector.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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

interface RecommendCardProps {
  imgSrc: string; // 이미지 경로
  title: string;  // 상품명
  cancerKeywords: string[]; //세부암 키워드
  href: string; //보험사 링크
  width?: string; // 카드 너비
  height?: string; // 카드 높이
}

const RecommendCard: React.FC<RecommendCardProps> = ({ 
    imgSrc, 
    title, 
    cancerKeywords,
    href,
    width=900
}) => {
    const [open, setOpen] = useState(false); 
    const toggle = () => setOpen(!open); //open -> !open으로 바꿈

    return (
        <div
        style={{
            width,
            minHeight: 84,
            border: "3px solid #BFDBFE",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "10px 20px"
        }}
        >
            {/* 전체 묶음 */}
            <div style={{
                width: "100%",
                height:"100%",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                // border:"2px solid black"
            }}>
                {/* 키워드 묶음+로고+상품명 묶음 */}
                <div style={{
                    // height:"fit-content",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"flex-start",
                    gap:10,
                    // border:"2px solid black"
                    }}>

                    {/* 키워드 묶음 */}
                    <ul style={{
                        gap: 10, 
                        display: 'flex',
                        flexDirection:"row",
                        justifyContent:"flex-start",
                        listStyle:"none",
                        margin:0,
                        padding:0,
                        // border:"2px solid black"
                        }}
                    >
                        {cancerKeywords.map((cancerKeyword, i) => (
                            <li key={i} style={{
                            width: "70px",
                            height: "25px",
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex', 
                            flexDirection: 'column', 
                            borderRadius: 30, 
                            outline: '1px #DBEAFE solid', 
                            outlineOffset: '-1px',
                            color: 'black', 
                            fontSize: 12,
                            fontWeight: '400', 
                            wordWrap: 'break-word', 
                            whiteSpace:'nowrap'
                            }}>
                            {cancerKeyword}
                            </li>
                        ))}
                    </ul>

                    {/* 로고+상품명 묶음 */}
                    <div style={{ 
                        display: "flex", 
                        flexDirection:"row", 
                        alignItems:"center", 
                        alignSelf:"center",
                        gap:"20px", 
                        margin:0, 
                        // border:"2px solid black"
                        }}>
                        <img
                        src={imgSrc}
                        alt={title}
                        style={{width:"20%"}}
                        />
                        <p style={{ fontSize: "20px", fontWeight:"500", margin: 0}}>{title}</p>
                    </div>
                </div>
                {/* 더보기 > */}
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
                    margin: 0,
                    padding: 0,
                    whiteSpace: "nowrap",
                    outline:"none",
                    border:"none",
                    cursor:"pointer"
                }}>
                    <p style={{fontSize: 20, color:"#2563EB", margin:0}}>
                        {open ? "닫기":"더보기"}
                    </p>
                    <div style={{width:18, height:18}}>
                        <MyToggle rotated={open}/>    
                    </div>
                </button>
            </div> 
            {open&& (
                <div style={{
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    gap:"20px"
                }}
                >
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around"
                    }}>
                        {/* 키워드랑 써머리 3개 묶음 */}
                        {[
                        {keyword: "keyword1", summary:"summary1"}, 
                        {keyword: "keyword2", summary:"summary2"}, 
                        {keyword: "keyword3", summary:"summary3"}
                        ].map((content,i) => (
                            <div key={i}>
                                <h2>{content.keyword}</h2>
                                <h3>{content.summary}</h3>
                            </div>
                        ))
                        }
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center"
                    }}>
                        <form method="post">
                            <Button 
                            onClick={()=>window.open("/inmypocket", "_blank")}
                            text="포켓에 담기" 
                            backgroundColor="#DB2777"
                            width="200px" 
                            height="70px"/>
                        </form>
                        <form>
                        <Button
                        onClick={()=>window.open(href, "_blank")}
                        text="가입하기" 
                        backgroundColor="#1E3A8A" 
                        width="200px"
                        height="70px"
                        />
                        </form>
                    </div>
                </div>
            )}
        </div>           
    );
    };

export default RecommendCard;