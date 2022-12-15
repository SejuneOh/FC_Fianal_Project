import { createSlice } from "@reduxjs/toolkit";

export const productList = createSlice({
    name: "news",
    initialState: {
        productInfo: [
            {
                id: 1,
                name: "LG 트롬 세탁기",
                productNumber: 112345,
                modelName: "LG 트롬 세탁기",
                vendorName: "lg 천안 세탁기",
                brandName: "lg",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 1200000,
                prices: [
                    {
                        month: 0,
                        price: 1200000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-04-17",
                updatedAt: "2022-05-17",
            },
            {
                id: 1,
                name: "LG 통돌이 세탁기",
                productNumber: 167845,
                modelName: "LG 통돌이 세탁기",
                vendorName: "lg 부산",
                brandName: "lg전자",
                categoryId: 1,
                titleImage: "N",
                rentalMonths: ["36"],
                originalPrice: 800000,
                prices: [
                    {
                        month: 0,
                        price: 1200000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-01-10",
                updatedAt: "2022-01-17",
            },
            {
                id: 1,
                name: "삼성 그랑데 세탁기",
                productNumber: 187654,
                modelName: "삼성 그랑데 세탁기10k",
                vendorName: "삼성 종로대리점",
                brandName: "삼성",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["60"],
                originalPrice: 1230000,
                prices: [
                    {
                        month: 0,
                        price: 1200000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-06-27",
                updatedAt: "2022-06-28",
            },
            {
                id: 1,
                name: "대우 세탁기10k",
                productNumber: 148576,
                modelName: "대우 세탁기",
                vendorName: "대우 직영점",
                brandName: "대우",
                categoryId: 1,
                titleImage: "N",
                rentalMonths: ["48"],
                originalPrice: 900000,
                prices: [
                    {
                        month: 0,
                        price: 1200000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-03-03",
                updatedAt: "2022-06-10",
            },
            {
                id: 1,
                name: "[삼성] BESPOKE 냉장고 4도어 프리스탠딩 865 L",
                productNumber: 246851,
                modelName: "BESPOKE 냉장고",
                vendorName: "lBESPOKE",
                brandName: "삼성",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 3690000,
                prices: [
                    {
                        month: 12,
                        price: 307500,
                    },
                ],
                description: "취향에 맞는 나만의 디자인 냉장고",
                createdAt: "2022-02-23",
                updatedAt: "2022-02-17",
            },
            {
                id: 1,
                name: "딤채 22년형 뚜껑형 김치냉장고 ZDL20EFWSW 200리터",
                productNumber: 236876,
                modelName: "딤채 뚜껑형 김치냉장고",
                vendorName: "딤채",
                brandName: "딤채",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["24"],
                originalPrice: 693500,
                prices: [
                    {
                        month: 24,
                        price: 28895,
                    },
                ],
                description: "뚜껑 여닫는 타입의 김치냉장고",
                createdAt: "2022-07-10",
                updatedAt: "2022-07-12",
            },
            {
                id: 1,
                name: "벨 레트로 소형 냉장고 RC27ACM 크림 250L",
                productNumber: 259351,
                modelName: "벨 레트로 소형 냉장고",
                vendorName: "벨 레트로",
                brandName: "벨",
                categoryId: 1,
                titleImage: "N",
                rentalMonths: ["12"],
                originalPrice: 612870,
                prices: [
                    {
                        month: 24,
                        price: 51072,
                    },
                ],
                description: "레트로 느낌의 디자인과 가성비 좋은 냉장고",
                createdAt: "2022-05-09",
                updatedAt: "2022-05-11",
            },
            {
                id: 1,
                name: "캐리어 레트로 클라윈드 냉장고 블랙 CRF-TN251BDR 255L",
                productNumber: 208621,
                modelName: "캐리어 레트로 클라윈드",
                vendorName: "캐리어 레트로",
                brandName: "캐리어",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["36"],
                originalPrice: 599000,
                prices: [
                    {
                        month: 36,
                        price: 16638,
                    },
                ],
                description: "소형 레트로 제품이나 시크한 디자인이 특징인 냉장고",
                createdAt: "2022-04-02",
                updatedAt: "2022-04-07",
            },
            {
                id: 1,
                name: "청호나이스 정수기",
                productNumber: 356375,
                modelName: "청호나이스 직수형 정수기",
                vendorName: "청호 00공장",
                brandName: "청호나이스",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["24"],
                originalPrice: 40000,
                prices: [
                    {
                        month: 24,
                        price: 40000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-06-17",
                updatedAt: "2022-06-20",
            },
            {
                id: 1,
                name: "코웨이 정수기",
                productNumber: 357575,
                modelName: "코웨이 듀얼냉각시스템 정수기",
                vendorName: "코웨이 00공장",
                brandName: "코웨이",
                categoryId: 8,
                titleImage: "N",
                rentalMonths: ["24"],
                originalPrice: 70000,
                prices: [
                    {
                        month: 24,
                        price: 40000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-06-16",
                updatedAt: "2022-06-27",
            },
            {
                id: 1,
                name: "쿠쿠 정수기",
                productNumber: 356775,
                modelName: "쿠쿠 100도 끓인물 정수기",
                vendorName: "쿠쿠 00공장",
                brandName: "쿠쿠",
                categoryId: 5,
                titleImage: "Y",
                rentalMonths: ["36"],
                originalPrice: 50000,
                prices: [
                    {
                        month: 24,
                        price: 40000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-05-16",
                updatedAt: "2022-05-27",
            },
            {
                id: 1,
                name: "sk매직 정수기",
                productNumber: 342365,
                modelName: "sk매직 듀얼냉각시스템 미니정수기",
                vendorName: "sk매직 00공장",
                brandName: "sk매직",
                categoryId: 9,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 80000,
                prices: [
                    {
                        month: 24,
                        price: 40000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-04-16",
                updatedAt: "2022-04-27",
            },
            {
                id: 1,
                name: "한샘 정수기",
                productNumber: 364366,
                modelName: "한샘 얼음 미니정수기",
                vendorName: "한샘 00공장",
                brandName: "한샘",
                categoryId: 2,
                titleImage: "N",
                rentalMonths: ["48"],
                originalPrice: 50000,
                prices: [
                    {
                        month: 24,
                        price: 40000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-03-16",
                updatedAt: "2022-03-27",
            },
            {
                id: 1,
                name: "레오폴드 키보드 RPT FC660",
                productNumber: 420120,
                modelName: "레오폴드 RPT FC660",
                vendorName: "레오폴드",
                brandName: "레오폴드",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 12500,
                prices: [
                    {
                        month: 0,
                        price: 1000000,
                    },
                ],
                description: "레오폴드 청축 기계식 키보드",
                createdAt: "2022-04-10",
                updatedAt: "2022-05-10",
            },
            {
                id: 1,
                name: "리얼포스 무접점 기계식 키보드",
                productNumber: 410121,
                modelName: "리얼포스 R3",
                vendorName: "리얼포스",
                brandName: "리얼포스",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["24"],
                originalPrice: 25000,
                prices: [
                    {
                        month: 0,
                        price: 1000000,
                    },
                ],
                description: "리얼포스 무접점 기계식 키보드",
                createdAt: "2022-05-10",
                updatedAt: "2022-06-12",
            },
            {
                id: 1,
                name: "씽크웨이 토체티 BW 블루투스 키보드",
                productNumber: 420101,
                modelName: "토체티",
                vendorName: "Zhuhai Hoksi",
                brandName: "씽크웨이",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["36"],
                originalPrice: 5200,
                prices: [
                    {
                        month: 0,
                        price: 1000000,
                    },
                ],
                description: "토체티 BW 블루투스 유무선 키보드 저소음 적축",
                createdAt: "2022-06-01",
                updatedAt: "2022-06-02",
            },
            {
                id: 1,
                name: "타이폰 Mars Mac/Win 호환 기계식 키보드 ",
                productNumber: 400128,
                modelName: "Mars Pro",
                vendorName: "타이폰",
                brandName: "타이폰",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 32000,
                prices: [
                    {
                        month: 0,
                        price: 1000000,
                    },
                ],
                description: "타이폰 마스 프로 Win/Mac 호환 키보드 입니다.",
                createdAt: "2022-06-20",
                updatedAt: "2022-07-02",
            },
            {
                id: 1,
                name: "원매트리스 CA2 (CLUB ACE2)/SS(슈퍼싱글사이즈)",
                productNumber: 554322,
                modelName: "원매트리스 CA2 (CLUB ACE2)/SS(슈퍼싱글사이즈)",
                vendorName: "에이스 00공장",
                brandName: "에이스침대",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["12"],
                originalPrice: 497250,
                prices: [
                    {
                        month: 12,
                        price: 100000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-06-16",
                updatedAt: "2022-06-18",
            },
            {
                id: 1,
                name: "중학생책상 고등학생책상 넓은 큰 철제책상세트 1800",
                productNumber: 544323,
                modelName: "중학생책상 고등학생책상 넓은 큰 철제책상세트 1800",
                vendorName: "Zin디자인샵",
                brandName: "Zin디자인샵",
                categoryId: 1,
                titleImage: "Y",
                rentalMonths: ["36"],
                originalPrice: 332000,
                prices: [
                    {
                        month: 36,
                        price: 10000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-01-16",
                updatedAt: "2022-02-18",
            },
            {
                id: 1,
                name: "시디즈 T50 AIR 화이트쉘 메쉬의자 + 좌판커버",
                productNumber: 534324,
                modelName: "시디즈 메쉬의자",
                vendorName: "시디즈",
                brandName: "시디즈",
                categoryId: 1,
                titleImage: "N",
                rentalMonths: ["48"],
                originalPrice: 432000,
                prices: [
                    {
                        month: 48,
                        price: 10000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-03-16",
                updatedAt: "2022-03-18",
            },
            {
                id: 1,
                name: "시디즈 T50 시리즈 NEW T500HDA 메쉬의자(TNA500HDA)",
                productNumber: 524325,
                modelName: "시디즈 메쉬의자(TNA500HDA)",
                vendorName: "시디즈",
                brandName: "시디즈",
                categoryId: 1,
                titleImage: "N",
                rentalMonths: ["36"],
                originalPrice: 319000,
                prices: [
                    {
                        month: 36,
                        price: 10000,
                    },
                ],
                description: "상세설명입니다",
                createdAt: "2022-04-18",
                updatedAt: "2022-04-19",
            },
        ],
    },

    reducers: {
        addProduct: (state, action) => {
            return {
                productInfo: [...state.productInfo, action.payload],
            };
        },
        allUpload: (state, action) => {
            return {
                ...state,
                productInfo: state.productInfo.concat({
                    id: 1,
                    name: action.payload["이름"],
                    productNumber: action.payload["상품고유번호"],
                    modelName: action.payload["네이버 쇼핑 상품 이름"],
                    vendorName: action.payload["브랜드"],
                    brandName: action.payload["브랜드"],
                    categoryId: 1,
                    titleImage: "N",
                    rentalMonths: [String(action.payload["상품 옵션 정보"])],
                    originalPrice: action.payload["정가 (소비자가)"],
                    prices: [
                        {
                            month: 36,
                            price: 10000,
                        },
                    ],
                    description: "상세설명입니다",
                    createdAt: "2022-04-18",
                    updatedAt: "2022-04-19",
                }),
            };
        },

        changePrice: (state, action) => {
            return {
                ...state,
                productInfo: state.productInfo.map((it) => (it.productNumber === action.payload.checked ? { ...it, originalPrice: action.payload.price } : it)),
            };
        },
        changeBrand: (state, action) => {
            return {
                ...state,
                productInfo: state.productInfo.map((it) => (it.productNumber === action.payload.checked ? { ...it, brandName: action.payload.brand } : it)),
            };
        },
        amendProduct: (state, action) => {
            const updateState = [...state.productInfo];
            let result = updateState.map((el) => {
                if (el.productNumber == action.payload.productNumber) {
                    let temp = action.payload;
                    return temp;
                } else return el;
            })
            state.productInfo = [...result];
            return state;
        }
    },
});

export const { allUpload, addProduct, changePrice, changeBrand, amendProduct } = productList.actions;


export default productList.reducer;
