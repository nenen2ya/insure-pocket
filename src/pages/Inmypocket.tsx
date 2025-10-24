import React, {useState, useEffect} from 'react';
import ReportCard from "../components/ReportCard";
import PocketBar from '../components/PocketBar';
import RecommendCard from '../components/RecommendCard';

const Inmypocket:React.FC = () => {
    const [data, setData] = useState<PocketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"보험사" | "보장영역">("보험사")

    interface Company {
    company_name?: string;
    company_img?: string;
    url?: string;
    }

    interface Coverage {
    subcategories?: {
        name?: string;
        categories?: {
        type?: string;
        };
    };
    }

    interface Product {
    id?: number;
    product_name?: string;
    keyword1?: string;
    keyword2?: string;
    keyword3?: string;
    summary1?: string;
    summary2?: string;
    summary3?: string;
    monthly_premium?: number;
    companies?: Company;
    coverage?: Coverage[];
    }

    interface PocketItem {
    id?: number;
    products?: Product;
    }

      // ✅ 백엔드에서 데이터 가져오기
    const fetchPocketData = async () => {
        try {
        const response = await fetch(
            "https://insure-pocket-back-1.onrender.com/pockets/7"
        );
        if (!response.ok) throw new Error("서버 응답 오류");

        const result = await response.json();
        setData(result); // result는 배열 형태임 (예시 JSON 참고)
        } catch (error) {
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchPocketData();
    }, []);

    if (loading) return <p style={{ margin: "100px" }}>불러오는 중...</p>;

    return(
        <div style={{overflowY:"auto", minHeight:"100vh"}}> //viewheight 100% 채워라
            <div style={{
                top:"80px",
                backgroundColor:"#fff",
                zIndex:10,
                paddingBottom:"20px"
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
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
            </div>

            <div style={{
                marginTop:"78px", 
                // border:"2px solid black"
                }}>
                {/*리포트 카드 전체*/}
                <ReportCard 
                title={`총 ${(data.length)}개`} 
                width="977px" 
                height="auto"
                >
                    {/* [ 보험사 + 보장영역 ] transition 범위 */}
                    <div style={{
                        overflow:"hidden", 
                        width:"100%", 
                        }}>
                        {/* 보험사 눌렀을 때 */}
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                        }}>
                            {/*보험사-보장영역 구분*/}
                            <div style ={{
                                width:"100%",
                                flexShrink:0,
                            }}>
                                {activeTab === "보험사"
                                    ? data.map((item: any, i: number) => (
                                    <PocketBar
                                        key={i}
                                        std={true}
                                        std_content={item.products?.companies?.company_name ?? "회사명 없음"}
                                    >
                                        
                                    <RecommendCard
                                    key={i}
                                    imgSrc={item.products?.companies?.company_img ?? ""}
                                    title={item.products?.product_name ?? "상품명 없음"}
                                    cancerKeywords={item.products.coverage.map(
                                        (c: any) => c.subcategories.name
                                        )}
                                    href={item.products?.companies?.url ?? "#"}
                                    contents={[
                                    {
                                        keyword: item.products.keyword1,
                                        summary: item.products.summary1,
                                    },
                                    {
                                        keyword: item.products.keyword2,
                                        summary: item.products.summary2,
                                    },
                                    {
                                        keyword: item.products.keyword3,
                                        summary: item.products.summary3,
                                    },
                                    ]}
                                    selected={true}
                                    width="800px"
                                    />
                                        
                                    </PocketBar>
                                    ))
                                : (() => {
                                    // ✅ 1) grouped 타입 명시
                                    type Coverage = {
                                        subcategories?: { name?: string; categories?: { type?: string } };
                                    };
                                    type Product = {
                                        id?: number;
                                        coverage?: Coverage[];
                                        keyword1?: string; keyword2?: string; keyword3?: string;
                                        summary1?: string; summary2?: string; summary3?: string;
                                        companies?: { url?: string; company_name?: string; company_img?: string };
                                        product_name?: string;
                                        monthly_premium?: number;
                                    };
                                    type PocketItem = { id?: number; products?: Product };

                                    const grouped: Record<string, PocketItem[]> = {};

                                    data.forEach((item: PocketItem) => {
                                        // ✅ 2) Set<string>로 명시 + 변수명 cat
                                        const uniqueTypes: Set<string> = new Set(
                                        (item.products?.coverage ?? []).map(
                                            (cov: Coverage) => cov?.subcategories?.categories?.type ?? "기타"
                                        )
                                        );

                                        uniqueTypes.forEach((cat: string) => {
                                        if (!grouped[cat]) grouped[cat] = [];

                                        // ✅ 3) 같은 상품 중복 방지
                                        const alreadyExists = grouped[cat].some(
                                            (i) => i.products?.id === item.products?.id
                                        );
                                        if (!alreadyExists) {
                                            grouped[cat].push(item);
                                        }
                                        });
                                    });

                                    return Object.keys(grouped).map((category) => (
                                    <PocketBar
                                    key={category}
                                    std={false}
                                    std_content={category}
                                    >
                                    {grouped[category].map((item, j)=>(
                                        <RecommendCard
                                        key={j}
                                        imgSrc={item.products?.companies?.company_img ?? ""}
                                        title={item.products?.product_name ?? "상품명 없음"}
                                        cancerKeywords={item.products?.coverage?.map(
                                            (c: any) => c?.subcategories?.name ?? ""
                                        )?? [] }
                                        href={item.products?.companies?.url ?? "#"}
                                        contents={[
                                            {
                                            keyword: item.products?.keyword1 ?? "",
                                            summary: item.products?.summary1 ?? "",
                                            },
                                            {
                                            keyword: item.products?.keyword2 ?? "",
                                            summary: item.products?.summary2 ?? "",
                                            },
                                            {
                                            keyword: item.products?.keyword3 ?? "",
                                            summary: item.products?.summary3 ?? "",
                                            },
                                        ]}
                                        selected={true}
                                        width="800px"
                                        />
                                    ))}
                                    </PocketBar>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>
                </ReportCard>
            </div>
        </div>      
    );
}; 

export default Inmypocket
