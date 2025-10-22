// src/data/dummyReportData.ts
import meritz from "../assets/img/company/meritz.png";
import metlife from "../assets/img/company/metlife.png";
import lotte from "../assets/img/company/lotte.png";


export const dummyRecommedData = {
    id:1,
    recommend_products :[
        {
            company_id:1,
            company_img:metlife,
            product_id:1,
            product_name:"무배당 메트라이프 간암및췌장암진단보험",
            subcategory:[
                {
                    subcategory_id:1,
                    subcategory_name:"간암"
                }
            ],
            info:[
                {
                    keyword:"진단비",
                    summary:"보험기간 중 암 보장 개시일 이후에 간암이나 췌장암 진단을 처음 받으면, 한 번에 한해 보험금을 지급해요"
                },
                {
                    keyword:"비갱신형",
                    summary:"처음 정한 보험료와 보장 내용이 끝날 때까지 변하지 않는 보험이에요"
                },
                {
                    keyword:"지급금액",
                    summary:"진단비로 500만원을 지급해요"
                }
            ],
            monthly_premium:1500
        },

        {
            company_id:3,
            company_img:meritz,
            product_id:2,
            product_name:"(무) 메리츠 또 걸려도 또 받는 암보험2509(갱신형)(3종)(2형)",
            subcategory:[
                {
                    subcategory_id:3,
                    subcategory_name:"폐암"
                }
            ],
            info:[
                {
                    keyword:"진단비",
                    summary:"췌장암을 포함한 주요 30종의 암(예: 위암, 폐암, 간암, 대장암, 유방암, 갑상선암 등) 으로 진단되면, 유사암(생명에 미치는 위험이 상대적으로 적은 초기 단계 암)을 제외하고 각 암에 대해 진단금을 지급해요"
                },
                {
                    keyword:"갱신형",
                    summary:"일정 기간마다 보험료와 보장 내용이 새로 계산되어 갱신되는 보험이에요."
                },
                {
                    keyword:"지급금액",
                    summary:"진단비로 1,000만원을 지급해요"
                }
            ],
            monthly_premium:23720
        },

        {
            company_id:4,
            company_img:lotte,
            product_id:4,
            product_name:"(무) let:simple 간편335 암보험(88)(2504)_2종(100세/90세/80세만기, 해지환급금 미지급형Ⅱ)",
            subcategory:[
                {
                    subcategory_id:3,
                    subcategory_name:"폐암"
                }
            ],
            info:[
                {
                    keyword:"진단비",
                    summary:"폐암Ⅱ는 폐암이 어느 정도 진행되어 주변 조직이나 림프절까지 퍼졌지만 다른 장기로는 전이되지 않은 중간 단계의 암을 말해요. 가입한 지 1년이 안 된 상태에서 폐암Ⅱ 진단을 받으면, 약속된 진단비의 절반(50%)만, 1년 이후에 받으면 전액을 지급받을 수 있어요"
                },
                {
                    keyword:"비갱신형",
                    summary:"처음 정한 보험료와 보장 내용이 끝날 때까지 변하지 않는 보험이에요"
                },
                {
                    keyword:"지급금액",
                    summary:"진단비로 500만원을 지급해요"
                }
            ],
            monthly_premium:1075
        }
    ]

    



    
};
