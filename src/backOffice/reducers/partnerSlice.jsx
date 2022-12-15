import { createSlice } from "@reduxjs/toolkit";

export const partnerInfo = createSlice({
    name: "partnerInfo",
    initialState: {
        partnerList: [
            {
                id: "gucci@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "gucci",
                brandName: "gucci",
                address: "서울특별시 강남구 청담동 6-5",
                representativeName: "조강진",
                representativeEmail: "gucci_representative@gmail.com",
                businessmanName: "조강진",
                businessNum: "546-32-11541",
                taxBillEmail: "gucci_tax@gmail.com",
                managerName: "김민주",
                managerContact: "010-6541-8792",
                managerEmail: "minju57@gucci.co.kr",
                brandImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/200px-Gucci_logo.svg.png",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "dior@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "dior",
                brandName: "dior",
                address: "서울특별시 중구 을지로5길 19, 26층(수하동)",
                representativeName: "이덕명",
                representativeEmail: "gucci_representative@gmail.com",
                businessmanName: "이덕명",
                businessNum: "120-81-74197",
                taxBillEmail: "dior_tax@gmail.com",
                managerName: "박준혁",
                managerContact: "010-8764-2133",
                managerEmail: "wnsgurdlek@dior.co.kr",
                brandImg: "https://mblogthumb-phinf.pstatic.net/20160817_116/ppanppane_1471402557803XCIHW_PNG/%C5%A9%B8%AE%BD%BA%C2%F9_%B5%F0%BF%C3_%B7%CE%B0%ED_%282%29.png?type=w800",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "chanel@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "chanel",
                brandName: "chanel",
                address: "서울특별시 중구 세종대로9길 41",
                representativeName: "최윤미",
                representativeEmail: "chanel@gmail.com",
                businessmanName: "최윤미",
                businessNum: "846-54-64843",
                taxBillEmail: "chanel_tax@gmail.com",
                managerName: "강수연",
                managerContact: "010-5689-3681",
                managerEmail: "suuuy@chanel.co.kr",
                brandImg: "https://pds.saramin.co.kr/company/logo/201902/26/pnjfxx_kw71-0_logo.jpg",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "burberry@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "burberry",
                brandName: "burberry",
                address: "서울특별시 강남구 청담동 90-19",
                representativeName: "황인우",
                representativeEmail: "burberry@gmail.com",
                businessmanName: "황인우",
                businessNum: "325-45-6548",
                taxBillEmail: "burberry_tax@gmail.com",
                managerName: "이자형",
                managerContact: "010-6841-6618",
                managerEmail: "jahyeong@burberry.co.kr",
                brandImg:
                    "https://post-phinf.pstatic.net/MjAxODA4MDdfMjg3/MDAxNTMzNjQzNDU3NzAw.LWO3EoclHvQtg9WGOu4eIEUsBnzfGdYaww6twArRBHYg.NdMBqStvqW0NlUgjmlsU3-DWc-1VJ0oRntLhIfqpg1gg.JPEG/1.jpg?type=w1200",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "lg@naver.com",
                authority: "vendor",
                password: 236346345,
                passwordConfirm: 0,
                companyName: "LG",
                brandName: "LG",
                address: "서울시 강남구 삼성동 1340-2",
                representativeName: "최덕한",
                representativeEmail: "hong@gmail.com",
                businessmanName: "김응수",
                businessNum: "496-05-93845",
                taxBillEmail: "2fdsfe@gmail.com",
                managerName: "박수창",
                managerContact: "010-4869-0454",
                managerEmail: "fdsfgr@naver.com",
                brandImg: "http://wiki.hash.kr/images/f/f1/%EC%97%98%EC%A7%80%EA%B7%B8%EB%A3%B9_%EB%A1%9C%EA%B3%A0.png",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "winia@naver.com",
                authority: "vendor",
                password: 3754654,
                passwordConfirm: 0,
                companyName: "위니아",
                brandName: "위니아",
                address: "서울시 강남구 청담동 1340-2",
                representativeName: "최수덕",
                representativeEmail: "hong@gmail.com",
                businessmanName: "김철한",
                businessNum: "435-23-34523",
                taxBillEmail: "2fdsfe@gmail.com",
                managerName: "조재한",
                managerContact: "010-1534-6578",
                managerEmail: "sdfefde@naver.com",
                brandImg: "https://image.bshopping.co.kr/brand/000727_b.png",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "sam@naver.com",
                authority: "vendor",
                password: 1243,
                passwordConfirm: 0,
                companyName: "삼성",
                brandName: "삼성",
                address: "서울시 강남구 청담동 40-2",
                representativeName: "이재용",
                representativeEmail: "djkflefd@gmail.com",
                businessmanName: "최수희",
                businessNum: "435-23-34523",
                taxBillEmail: "dfgrv@gmail.com",
                managerName: "김석호",
                managerContact: "010-5364-3767",
                managerEmail: "ewfewfd@naver.com",
                brandImg: "https://cdn.electimes.com/news/photo/202112/226233_143221.jpg",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "cucu@naver.com",
                authority: "vendor",
                password: 1643,
                passwordConfirm: 0,
                companyName: "쿠쿠",
                brandName: "쿠쿠",
                address: "서울시 강남구 청담동 4340-2",
                representativeName: "김재수",
                representativeEmail: '3452fd@gmail.com",',
                businessmanName: "김재덕",
                businessNum: "756-24-36523",
                taxBillEmail: "fdgsrd@gmail.com",
                managerName: "최철한",
                managerContact: "010-5234-6767",
                managerEmail: "ewfed@naver.com",
                brandImg:
                    "https://w.namu.la/s/ccf3f3e9f6a4313a2d77f273226030278db77dce8207454d9ceaf1f3d6f30325053683faf24a8876c080b3072e8fec93760f2ecc0d8449fdc0a8f32b76efa7d1135fa3f5e4c9c5e3364d944de694fc5085a93ebea80cdb7e23f8caa381b49e59",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "chungho@naver.com",
                authority: "vendor",
                password: 4635,
                passwordConfirm: 0,
                companyName: "청호나이스",
                brandName: "청호나이스",
                address: "서울시 강남구 청담동 940-2",
                representativeName: "김진철",
                representativeEmail: "cung123@gmail.com",
                businessmanName: "최숙히",
                businessNum: "735-24-36623",
                taxBillEmail: "fdkfe@gmail.com",
                managerName: "김진재",
                managerContact: "010-1234-5767",
                managerEmail: "sdffed@naver.com",
                brandImg: "https://www.chungho.co.kr/images/contents/n_ci_img_12.png",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "nike@example.com",
                authority: "vendor",
                password: 13456234,
                passwordConfirm: 0,
                companyName: "나이키",
                brandName: "나이키",
                address: "서울시 중구 명동",
                representativeName: "홍길동",
                representativeEmail: "hong@gmail.com",
                businessmanName: "홍길동",
                businessNum: "234-45-67894",
                taxBillEmail: "tax@gmail.com",
                managerName: "반민정",
                managerContact: "010-0000-0000",
                managerEmail: "ban@kkuda.co.kr",
                brandImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "adidas123@google.com",
                authority: "vendor",
                password: 3456,
                passwordConfirm: 0,
                companyName: "아디다스",
                brandName: "아디다스",
                address: "서울시 용산구 용산동",
                representativeName: "최현민",
                representativeEmail: "choi@gmail.com",
                businessmanName: "최진혁",
                businessNum: "456-36-29476",
                taxBillEmail: "tax@gmail.com",
                managerName: "최진하",
                managerContact: "010-3456-2746",
                managerEmail: "haha@kkuda.co.kr",
                brandImg: "https://t1.daumcdn.net/cfile/tistory/2536954357884B6335",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "fila345@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "휠라",
                brandName: "휠라",
                address: "서울시 가산디지털단지",
                representativeName: "주현영",
                representativeEmail: "joo@gmail.com",
                businessmanName: "우영우",
                businessNum: "947-26-20572",
                taxBillEmail: "yooo@gmail.com",
                managerName: "효정",
                managerContact: "010-4567-9797",
                managerEmail: "hyo@kkuda.co.kr",
                brandImg: "https://blog.kakaocdn.net/dn/mnii1/btqwT11Yz3j/mLWdOcmopYMerS82vR9mcK/img.jpg",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "leebok@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "leebok",
                brandName: "leebok",
                address: "파주 헤이리마을",
                representativeName: "송강",
                representativeEmail: "song@gmail.com",
                businessmanName: "김현욱",
                businessNum: "294-97-25343",
                taxBillEmail: "wow@gmail.com",
                managerName: "아린",
                managerContact: "010-3645-3975",
                managerEmail: "ahah@kkuda.co.kr",
                brandImg: "https://image.ajunews.com/content/image/2022/04/19/20220419133159252029.jpg",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "leoplodAdmin@leopold.com",
                authority: "vendor",
                password: 1235125,
                passwordConfirm: 0,
                companyName: "레오폴드",
                brandName: "레오폴드",
                address: "경기 고양시 일산동구 하늘마을로 158 B동 306호 레오폴드(주)",
                representativeName: "강산",
                representativeEmail: "gangsan@leopold.com",
                businessmanName: "강산",
                businessNum: "1002555229",
                taxBillEmail: "tax@leopold.com",
                managerName: "홍길동",
                managerContact: "0122212542",
                managerEmail: "killdong@kkuda.co.kr",
                brandImg: "https://www.leopold.co.kr/Design/Main/HeadLogo",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "happhack@happyhacking.com",
                authority: "vendor",
                password: 55555,
                passwordConfirm: 0,
                companyName: "happyhacking",
                brandName: "happyhacking",
                address: "서울시 강남구 도곡동 220-1 해피해킹(주)",
                representativeName: "김하늘",
                representativeEmail: "skyblue@hapyhacking.com",
                businessmanName: "김하늘",
                businessNum: "1020209912",
                taxBillEmail: "finance@happyhacking.com",
                managerName: "나영석",
                managerContact: "01022669912",
                managerEmail: "onedaytwoday@kkuda.co.kr",
                brandImg:
                    "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F004ab85e-6a29-4ec3-9c51-8d2a1d32c76e%2F%EB%85%B8%EC%85%98%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0.png&blockId=a86012c3-a307-48f1-9c8f-0190bf2151cd&width=256",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "realforce@gmail.com",
                authority: "vendor",
                password: 6611,
                passwordConfirm: 0,
                companyName: "realforce",
                brandName: "리얼포스",
                address: "서울시 용산구 한강로2가 2-36 현대하이엘 815호 멀티박스",
                representativeName: "권태훈",
                representativeEmail: "teahoon@realforce.com",
                businessmanName: "권태훈",
                businessNum: "1283072689",
                taxBillEmail: "finance@realforce.com",
                managerName: "김보드",
                managerContact: "01021151222",
                managerEmail: "board@kkuda.co.kr",
                brandImg:
                    "https://w.namu.la/s/d756bf7ebff68f7b7588081361b66f21cf65f551b94a1b6570b2fb978d8b917326b817d91ac32e4e5c9dc385fabe9a423e89a3b84a78ca92d57e1f5c17f5b523dfba8d0bcb51e6a3577bdeb3abdb5c3a83e31aadf8b962dec558db9e0d24345c",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "type@typone.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "타이폰",
                brandName: "타이폰 키보드",
                address: "서울특별시 구로구 부광로 96-5 구로에이스캠프, 5층 511호",
                representativeName: "정의택",
                representativeEmail: "yesinfo@typone",
                businessmanName: "정의택",
                businessNum: "2219912200",
                taxBillEmail: "finance@typone.com",
                managerName: "김일등",
                managerContact: "01011251929",
                managerEmail: "numberone@kkuda.co.kr",
                brandImg:
                    "https://w.namu.la/s/d756bf7ebff68f7b7588081361b66f21cf65f551b94a1b6570b2fb978d8b917326b817d91ac32e4e5c9dc385fabe9a423e89a3b84a78ca92d57e1f5c17f5b523dfba8d0bcb51e6a3577bdeb3abdb5c3a83e31aadf8b962dec558db9e0d24345c",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "iloom@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "일룸",
                brandName: "일룸",
                address: "서울시 강남구 삼성동 110-2",
                representativeName: "강일룸",
                representativeEmail: "iloom2@gmail.com",
                businessmanName: "장그래",
                businessNum: "000-00-00001",
                taxBillEmail: "tax1@gmail.com",
                managerName: "반민정",
                managerContact: "010-0000-0001",
                managerEmail: "ban@kkuda.co.kr",
                brandImg: "https://mblogthumb-phinf.pstatic.net/20160902_50/ppanppane_1472801110313jdU0D_PNG/%C0%CF%B7%EB_%B7%CE%B0%ED_%282%29.png?type=w800",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "hansam@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "한샘",
                brandName: "한샘",
                address: "서울시 강남구 삼성동 110-2",
                representativeName: "이한샘",
                representativeEmail: "hansam2@gmail.com",
                businessmanName: "장백기",
                businessNum: "000-00-00002",
                taxBillEmail: "tax1@gmail.com",
                managerName: "반민정",
                managerContact: "010-0000-0002",
                managerEmail: "ban@kkuda.co.kr",
                brandImg: "https://company.hanssem.com/images/intro/img_ci_01.jpg",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "sidiz@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "시디즈",
                brandName: "시디즈",
                address: "서울시 강남구 삼성동 110-2",
                representativeName: "최디즈",
                representativeEmail: "sidiz2@gmail.com",
                businessmanName: "최디원",
                businessNum: "000-00-00003",
                taxBillEmail: "tax1@gmail.com",
                managerName: "반민정",
                managerContact: "010-0000-0000",
                managerEmail: "ban@kkuda.co.kr",
                brandImg:
                    "https://w.namu.la/s/3697aa633854b40eab576675b57de894b81d429644eb9c17b4e8cf6f4952b1061825544ebaa9328c12517af383506c32a29a768dfad4418b7e01d2d89f05d37f2ee56f729cb65446e32bf8323822d2f3",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
            {
                id: "ace@example.com",
                authority: "vendor",
                password: 1234,
                passwordConfirm: 0,
                companyName: "에이스침대",
                brandName: "에이스침대",
                address: "서울시 강남구 삼성동 110-2",
                representativeName: "한에이",
                representativeEmail: "iloom2@gmail.com",
                businessmanName: "한에이",
                businessNum: "000-00-00004",
                taxBillEmail: "tax1@gmail.com",
                managerName: "반민영",
                managerContact: "010-0000-0004",
                managerEmail: "ban@kkuda.co.kr",
                brandImg:
                    "https://w.namu.la/s/232c31059c5516f96c0feaeb020e980efb5aad081c17e8c5743ee67d9b9eb6f47e24dda9e87c0b601c5b82aebd8d2bc9a0232bb58a3ee87441df1d11a897f02e066956c4951de494ed6784f0b0dbff22435b6e9928267accef23df8c3165878e",
                businessNumImg: "https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg",
                bankbookImg: "https://help.toon.at/hc/article_attachments/360027249854/____.jpg",
            },
        ],
        partnerDetail: {},
        loginUserInfo: {},
    },

    reducers: {
        partnerDetail: (state, action) => {
            return {
                ...state,
                partnerDetail: action.payload,
            };
        },
        changePartnerInfo: (state, action) => {
            return {
                ...state,
                partnerList: state.partnerList.map((it) =>
                    it.brandImg == action.payload.brandImg
                        ? {
                              ...it,
                              address: action.payload.address,
                              companyName: action.payload.companyName,
                              representativeName: action.payload.representativeName,
                              representativeEmail: action.payload.representativeEmail,
                              businessmanName: action.payload.businessmanName,
                              managerName: action.payload.managerName,
                              managerContact: action.payload.managerContact,
                              managerEmail: action.payload.managerEmail,
                              taxBillEmail: action.payload.taxBillEmail,
                              businessNum: action.payload.businessNum,
                              password: action.payload.password,
                          }
                        : it
                ),
            };
        },

        deletePartnerInfo: (state, action) => {
            return {
                ...state,
                partnerList: state.partnerList.filter((it) => it.brandImg != action.payload.brandImg),
            };
        },

        login: (state, action) => {
            return {
                ...state,
                loginUserInfo: state.partnerList.filter((it) => it.id === action.payload),
            };
        },

        partnerLogout: (state, action) => {
            return {
                ...state,
                loginUserInfo: action.payload,
            };
        },

        //로그인함수
        //회원가입함수
        //회원삭제함수
    },
});

export const { partnerDetail, changePartnerInfo, login, partnerLogout, deletePartnerInfo } = partnerInfo.actions;

export default partnerInfo.reducer;
