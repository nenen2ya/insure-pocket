import React from "react";
import styled from "styled-components";
import profileImg from "../assets/img/profile.jpg";
import vectorwhite from "../assets/img/vectorwhite.png"
import { useNavigate } from "react-router-dom";


const MpCard = styled.div`
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 106px;
`;

const CardBar = styled.div`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #2563EB;
  color: white;
  height: 36px;
  font-weight: 700;
  padding: 0px 20px;
  display: flex;
  justify-content: sflex-start;
  align-items: center;
  gap: 10px
`;

const More = styled.button`
  background: none;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  font-weight: 400;
  display:inline-flex;
  align-items: center;
  gap: 3px;
  line-height: 1;
  margin-left: auto;

  &:focus{
  outline: none;
  border: none;}

  &:hover{
  transform: scale(1.10);
  transition: all 0.2s ease;
  }
`;

const CardContent = styled.div`
  color: #000;
  font-weight:400;
  text-align:left;
  padding: 20px 20px;
`;

const Mypage: React.FC = () => {
  const navigate = useNavigate();
  const username = "윤시윤";

  return (
    <div style={{
      position:"fixed",
      top:"100px",
      left:"0",
      right:"0",
      bottom:"0",
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-start",
      backgroundColor:"#ffffff",
      overflow:"hidden",
      gap:"60px",
    }}>
      <div 
        style = {{
          display:"flex",
          gap:"33px",
          fontSize: "15px"
        }}>
        
        <div 
          style={{
            width:"251px",
            height:"calc(100vh - 100px)",
            background: "#fff",
            boxShadow:`
              -6px 0 10px rgba(0, 0, 0, 0.05),
              6px 0 10px rgba(0, 0, 0, 0.15)`,
            display:"flex",
            position:"relative",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"flex-start"
          }}>
          
          <div 
            style={{
            marginTop:"69px", 
            display:"flex",
            position:"relative",
            flexDirection:"column", 
            alignItems:"center"
            }}>
            
            <img src={profileImg} alt="프로필" style={{
              width:"111px",
              height:"111px",
              borderRadius:"30%",
              }}
            />
            
            <div style={{
              display:"flex", alignItems:"baseline"}}>
              <h2>{username}</h2>
              <span>님</span>
            </div>
          </div>
        </div>

        <div 
          style={{
          display:"flex",
          flexDirection:"column",
          alignSelf:'',
          gap:"32px",
          width:"673px",
          paddingTop:"89px",
          maxHeight:"calc(100vh - 160px)"
        }}>
          <MpCard>
            <CardBar>
              <span>내 보험</span>
              <More onClick={() => navigate("/myinsur")}>
                더보기
                <img
                  src={vectorwhite}
                  alt=" "
                  style={{
                    width:"18px",
                    height:"18px",
                    position:"relative",
                  }}/>
              </More>
            </CardBar>
            <CardContent>가입한 보험 상품을 확인할 수 있습니다.</CardContent>
          </MpCard>

          <MpCard>
            <CardBar>
              <span>내 진단 리포트</span>
              <More onClick={() => navigate("/report")}>
                더보기
                <img
                  src={vectorwhite}
                  alt=" "
                  style={{
                    width:"18px",
                    height:"18px",
                    position:"relative",
                    top:"1px"
                }}/>
              </More>
            </CardBar>
            <CardContent>내 보험 진단 결과 리포트를 언제든 다시 조회할 수 있습니다.</CardContent>
          </MpCard>

          <MpCard>
            <CardBar>
              <span>인마이포켓</span>
              <More onClick={() => navigate("/inmypocket")}>
                더보기
                <img
                  src={vectorwhite}
                  alt=" "
                  style={{
                    width:"18px",
                    height:"18px",
                    position:"relative",
                    top:"1px"
                }}/>
              </More>
            </CardBar>
            <CardContent>내가 담은 보험 상품을 한 눈에 볼 수 있습니다.</CardContent>
          </MpCard>

          <MpCard>
            <CardBar>
              <span>계정설정</span>
              <More>
                더보기
                <img
                  src={vectorwhite}
                  alt=" "
                  style={{
                    width:"18px",
                    height:"18px",
                    position:"relative",
                    top:"1px"
                }}/>
              </More>
            </CardBar>
            <CardContent>계정을 설정하는 칸입니다.</CardContent>
          </MpCard>
        </div>
      </div>
    </div>

  );
};

export default Mypage;



// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>로그인하기</h2>
//       <Button text="로그인" onClick={() => navigate("/")} />
//         <p>계정이 없나요?</p>
//         <Button text="회원가입" onClick={() => navigate("/signup")} />
//     </div>
// export default Login;



