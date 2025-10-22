import React from 'react';

interface CancerGraphProps {
  subtype: any; // 암 세부분류
}

const CancerGraph: React.FC<CancerGraphProps> = ({ subtype }) => {
    return (
        <div style={{ width: 918, height: 70, position: 'relative', margin: '8px 0', overflow: 'visible'}}>
        {/* 바 영역 박스 */}
        <div style={{ width: 745.49, height: 70, left: 172.51, top: 0, position: 'absolute' }}>
            <div
            style={{
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                position: 'absolute',
                background: 'white',
                borderRadius: 30,
                border: '1px #2563EB solid',
            }}
            />
        </div>

        {/* 값/라벨/바 */}
        <div style={{ width: 359.4, height: 43.51, left: 488.78, top: 17.03, position: 'absolute' }}>
            <div
            style={{
                width: 74.47,
                height: 6.69,
                left: 9.71,
                top: 30.82,
                position: 'absolute',
                textAlign: 'center',
                fontSize: 10,
                fontWeight: 400,
                wordWrap: 'break-word',
            }}
            >
            권장금액
            </div>
            <div
            style={{
                width: 97.13,
                height: 6.69,
                left: 310.83,
                top: 30.82,
                position: 'absolute',
                textAlign: 'center',
                fontSize: 10,
                fontWeight: 400,
                wordWrap: 'break-word',
            }}
            >
            내 보장금액
            </div>
            {/* y축 */}
            <div style={{
            position: "absolute",
            width: 3, 
            height: 40, 
            top: "50%",
            left: "12%",
            transform:"translate(-50%,-50%)",
            backgroundColor:"#DFE8EC"
            }}
            ></div>
            {/* 그래프 */}
            <div
            style={{
                width: 314.07,
                height: 15.3,
                left: 45.33,
                top: 8.61,
                position: 'absolute',
                background: '#1E3A8A',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
            }}
            />
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
