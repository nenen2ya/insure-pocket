export const commentData = {
    user_id:4,
    user_name:"윤시윤",
    user_type:[
        {
            smoking:"none",
            drinking:"none",
            job:"low",
            drive_license:"NO"
        }
    ],
    user_survey:[
        {
            smoking:[
                {
                    type:"none",
                    comment:"금연은 보험료 절약의 핵심! 금연 습관은 보험료 할인으로 이어질 수 있어요"
                },
                {
                    type:"less_than_10",
                    comment:"흡연량이 적어도 위험은 존재! 금연은 보험료를 줄이는데 도움이 될 수 있어요"
                },
                {
                    type:"more_than_10",
                    comment:"흡연자는 암-심혈관 등 각종 질환 위험이 높아요. 보장금액을 충분히 확보하세요"
                }
            ],

            drinking:[
                {
                    type:"none",
                    comment:"절주 습관은 보험료를 아끼는 효과적인 방법이에요"
                },
                {
                    type:"weekly_3",
                    comment:"가벼운 음주 습관이라도, 간 질환 위험이 높아져요! 잘 보장받을 수 있는지 점검해보세요"
                },
                {
                    type:"weekly_4_plus",
                    comment:"과음은 간-췌장 등 각종 쥘환 위험이 높아요. 보장금액을 충분히 확보하세요"
                }
            ],

            job:[
                {
                    type:"low",
                    comment:"미래를 위한 안정적인 보험을 설계하기 좋은 시기일 수 있어요"
                },
                {
                    type:"high",
                    comment:"복잡한 심사 없이 간편하게 가입 가능한 상품들을 확인해보세요"
                }
            ],

            drive_license:[
                {
                    type:"NO",
                    comment:"교통사고 위험은 적지만, 대중교통 사고 보장도 놓치지 마세요"
                },
                {
                    type:"YES",
                    comment:"운전점수 특약 가입하셨는지 확인해보세요."
                }
            ]
        }       
    ]
}