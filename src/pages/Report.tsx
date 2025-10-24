import React, { useEffect, useState } from "react";
import InsuranceCard from "../components/InsuranceCard";
import ReportCard from "../components/ReportCard";
import SummaryGraph from "../components/SummaryGraph";

import { ReportData } from "../data/report_data";
import { companyImgs, defaultCompanyImg } from "../data/company_img";

const Report: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }

    const fetchData = async () => {
      try {
        const [userRes, reportRes] = await Promise.all([
          fetch(`https://insure-pocket-back-1.onrender.com/users/${userId}`),
          fetch(`https://insure-pocket-back-1.onrender.com/reports/${userId}`)
        ]);

        const userData = await userRes.json();
        const reportData = await reportRes.json();

        // category_type 더미 중 ‘암’만 실제 값으로 교체
        const fullCategory = ReportData.category_type.map(cat => 
          cat.category_id === 1
            ? { ...cat, lack: reportData.lack, stand: reportData.stand, plus: reportData.plus }
            : cat
        );

        setUserInfo(userData.user);
        setReport({
          ...reportData,
          category_type: fullCategory,
          total_comment: ReportData.total_comment,
          premium_avg: ReportData.premium_avg
        });
      } catch (err) {
        console.error("데이터 로드 실패:", err);
      } finally {
        setLoading(false);
        setTimeout(() => setAnimate(true), 300);
      }
    };

    fetchData();
  }, []);

  if (loading || !userInfo || !report)
    return <div style={{ paddingTop: "120px" }}>⏳ 데이터를 불러오는 중입니다...</div>;

  // ✅ 계산 로직
  const ageGroup = (age: number) => {
    if (age < 30) return 20;
    if (age < 40) return 30;
    if (age < 50) return 40;
    if (age < 60) return 50;
    return 60;
  };

  const ageAvg =
    report.premium_avg.find((p: any) => p.age_group === ageGroup(userInfo.age))?.avg || 0;

  const totalPremium = report.total_monthly_premium || 0;

  return (
    // 🎨 디자인은 그대로 유지
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 10 }}>
        <h2 style={{ fontSize: 40 }}>{userInfo.user_name}님 보험</h2>
        <h2 style={{ color: "#2563EB", fontSize: 45 }}>종합 분석</h2>
        <h2 style={{ fontSize: 40 }}>리포트</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center" }}>
<ReportCard title={`내 보험 ${report.products.length}개`}>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      maxHeight: "300px",        // ✅ 최대 높이 설정
      overflowY: "auto",          // ✅ 세로 스크롤 활성화
      paddingRight: "10px",       // ✅ 스크롤바가 내용 가리지 않게 약간 여백
    }}
  >
    {report.products.map((item: any) => (
      <InsuranceCard
        key={item.product_id}
        imgSrc={
          companyImgs[item.products.companies.company_name] || defaultCompanyImg
        }
        title={item.products.product_name}
        price={item.products.monthly_premium.toLocaleString()}
        width="400px"
        height="84px"
      />
    ))}
  </div>
</ReportCard>


          {/* 📊 월 보험료 비교 */}
          <ReportCard title="월 보험료">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontSize: 18,
              }}
            >
              <p style={{ margin: 0, fontWeight: "bold" }}>
                {ageGroup(userInfo.age)}대 월 평균 보험료보다
              </p>
              <div style={{ display: "flex", flexDirection: "row", gap: 5, margin: 0 }}>
                <h4
                  style={{
                    fontSize: 20,
                    color: "#DB2777",
                    margin: 0,
                  }}
                >
                  {Math.abs(ageAvg - totalPremium).toLocaleString()}원
                </h4>
                <p
                  style={{
                    display: "flex",
                    alignSelf: "flex-end",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  {ageAvg - totalPremium > 0 ? "덜 내고 있어요" : "더 내고 있어요"}
                </p>
              </div>
            </div>

            {/* 막대 그래프 */}
            <div
              style={{
                position: "relative",
                boxSizing: "border-box",
                padding: "20px 0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 180,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: 40,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 43,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "65%",
                    height: 5,
                    backgroundColor: "#EFF6FF",
                    borderRadius: 4,
                    zIndex: 0,
                  }}
                />
                {/* 내 보험료 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: animate
                        ? Math.max(
                            40,
                            120 *
                              (totalPremium /
                                Math.max(ageAvg || 1, totalPremium || 1))
                          )
                        : 0,
                      background: "#DB2777",
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      transition: "height 0.4s ease-in-out",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginTop: 12,
                    }}
                  >
                    <span style={{ fontWeight: 400 }}>{userInfo.user_name}님</span>
                    <br />
                    <span>{totalPremium.toLocaleString()}원</span>
                  </div>
                </div>

                {/* 또래 평균 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: animate
                        ? Math.max(
                            40,
                            120 *
                              (ageAvg /
                                Math.max(ageAvg || 1, totalPremium || 1))
                          )
                        : 0,
                      background: "#BFDBFE",
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      transition: "height 0.4s ease-in-out",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginTop: 12,
                    }}
                  >
                    <span style={{ fontWeight: 400 }}>
                      {ageGroup(userInfo.age)}대 평균
                    </span>
                    <br />
                    <span>{ageAvg.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            </div>
          </ReportCard>
        </div>

        {/* 📊 요약 섹션 */}
        <ReportCard title="요약" width="980px" height="fit-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            {report.category_type.map((cat: any, i: number) => (
              <SummaryGraph
                key={i}
                type={cat.category_name}
                lack={cat.lack}
                stand={cat.stand}
                plus={cat.plus}
              />
            ))}
          </div>
        </ReportCard>

        {/* 💬 종합 코멘트 */}
        <ReportCard title="종합 코멘트" width="980px" height="auto">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <p style={{ margin: 0, fontWeight: "bold" }}>
              {userInfo.user_name}님을 위한 보험 가입 팁
            </p>
            {[
              report.total_comment.smoking.find(
                (v: any) => v.type === userInfo.smoking
              )?.comment,
              report.total_comment.drinking.find(
                (v: any) => v.type === userInfo.drinking
              )?.comment,
              report.total_comment.job.find(
                (v: any) => v.type === userInfo.job
              )?.comment,
              report.total_comment.drive_license.find(
                (v: any) => v.type === userInfo.drive_license
              )?.comment,
            ]
              .filter(Boolean)
              .map((comment: string, i: number) => (
                <p key={i} style={{ margin: 0, lineHeight: 1.6 }}>
                  - {comment}
                </p>
              ))}
          </div>
        </ReportCard>
      </div>
    </div>
  );
};

export default Report;
