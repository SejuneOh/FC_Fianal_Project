import { createSlice } from "@reduxjs/toolkit";

export const publicData = createSlice({
    name: "publicData",
    initialState: {
        dataList: [
            {
                ordererName: "장석호",
                ordererPhoneNum: "010-2881-9110",
                ordererEmail: "jojosu@naver.com",
                orderDay: "2022-07-01",
                orderProduct: "청호나이스 직수형 정수기",
                orderNum: "46341563",
                orderCase: "paymentFailed",
                brandName: "청호나이스",
                brandImg: "https://blog.kakaocdn.net/dn/bAXm22/btq86gUCcSy/ICv7eqg5xWTYMMnT4bfPNk/img.jpg",
                productCode: "234524235",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 20000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "김진섭",
                recipientPhoneNum: "010-4252-2432",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "812904328103",
                shipDate: "2022-07-14",
            },
            {
                ordererName: "김진량",
                ordererPhoneNum: "010-4235-3543",
                ordererEmail: "anrwhdk@naver.com",
                orderDay: "2022-05-24",
                orderProduct: "쿠쿠 100도 끓인물 정수기",
                orderNum: "46236478",
                orderCase: "examinationFailure",
                brandName: "쿠쿠",
                brandImg: "https://blog.kakaocdn.net/dn/bAXm22/btq86gUCcSy/ICv7eqg5xWTYMMnT4bfPNk/img.jpg",
                productCode: "234524235",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 35000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "김진량",
                recipientPhoneNum: "010-2564-7576",
                recipientAddress: "대전광역시 유성구 카이스트 242-23",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "495049685939",
                shipDate: "2022-05-27",
            },
            {
                ordererName: "최덕수",
                ordererPhoneNum: "010-3555-6465",
                ordererEmail: "hangle123@naver.com",
                orderDay: "2022-06-24",
                orderProduct: "코웨이 듀얼냉각시스템 정수기",
                orderNum: "80789678",
                orderCase: "defaultCase",
                brandName: "코웨이",
                brandImg: "https://blog.kakaocdn.net/dn/bAXm22/btq86gUCcSy/ICv7eqg5xWTYMMnT4bfPNk/img.jpg",
                productCode: "36452634",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 20000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "최덕수",
                recipientPhoneNum: "010-3555-6465",
                recipientAddress: "대전광역시 갈마동 1151 에이스빌 202호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "253475689543",
                shipDate: "2022-06-27",
            },
            {
                ordererName: "김재덕",
                ordererPhoneNum: "010-3442-5342",
                ordererEmail: "choisun@naver.com",
                orderDay: "2022-06-14",
                orderProduct: "코웨이 듀얼냉각시스템 정수기",
                orderNum: "35263412",
                orderCase: "defaultCase",
                brandName: "코웨이",
                brandImg: "https://blog.kakaocdn.net/dn/bAXm22/btq86gUCcSy/ICv7eqg5xWTYMMnT4bfPNk/img.jpg",
                productCode: "6945676",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 17000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "김재덕",
                recipientPhoneNum: "010-3442-5342",
                recipientAddress: "대전광역시 갈마동 322-5 이마트24",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "395940683945",
                shipDate: "2022-06-17",
            },
            {
                ordererName: "최수향",
                ordererPhoneNum: "010-5987-5867",
                ordererEmail: "hidkfe@naver.com",
                orderDay: "2022-05-04",
                orderProduct: "sk매직 듀얼냉각시스템 미니정수기",
                orderNum: "46346234",
                orderCase: "defaultCase",
                brandName: "sk매직",
                brandImg: "https://blog.kakaocdn.net/dn/bAXm22/btq86gUCcSy/ICv7eqg5xWTYMMnT4bfPNk/img.jpg",
                productCode: "36452634",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 19000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "최수향",
                recipientPhoneNum: "010-5987-5867",
                recipientAddress: "경기도 용인시 처인구 역북동 204-11",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "353429583493",
                shipDate: "2022-05-17",
            },
            {
                ordererName: "유희아",
                ordererPhoneNum: "010-1324-4655",
                ordererEmail: "gmlakzzang@gmail.com",
                orderDay: "2022-01-04",
                orderProduct: "LG 디오스 오브제컬렉션 김치톡톡",
                orderNum: "12345745",
                orderCase: "defaultCase",
                brandName: "LG",
                brandImg: "https://www.lge.co.kr/kr/images/kimchi-refrigerators/md09029835/gallery/medium01.jpg",
                productCode: "234524235",
                paymentQuantity: 2,
                rentalMonth: "36",
                paymentAmount: 93055,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "유희아",
                recipientPhoneNum: "010-1324-4655",
                recipientAddress: "서울특별시 서초구 방배동 476-1",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "465358492113",
                shipDate: "2022-01-07",
            },
            {
                ordererName: "오다민",
                ordererPhoneNum: "010-8794-1234",
                ordererEmail: "fjlli@gmail.com",
                orderDay: "2022-07-18",
                orderProduct: "삼성 BESPOKE 냉장고 4도어 프리스탠딩 패밀리허브 818 L",
                orderNum: "84616972",
                orderCase: "examinationFailure",
                brandName: "삼성",
                brandImg: "https://images.samsung.com/kdp/goods/2022/06/21/927cca5e-3ae0-48a6-9a8e-efa00c615452.png?$240_240_PNG$",
                productCode: "587913541",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 134916,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "오다민",
                recipientPhoneNum: "010-8794-1234",
                recipientAddress: "서울특별시 동작구 사당동 311-5번지",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "765413208942",
                shipDate: "2022-07-18",
            },
            {
                ordererName: "조채윤",
                ordererPhoneNum: "010-1324-8874",
                ordererEmail: "fjlli@gmail.com",
                orderDay: "2022-06-23",
                orderProduct: "삼성 BESPOKE 냉장고 4도어 프리스탠딩 패밀리허브 818 L",
                orderNum: "53756346",
                orderCase: "examinationFailure",
                brandName: "삼성",
                brandImg: "https://images.samsung.com/kdp/goods/2022/06/21/927cca5e-3ae0-48a6-9a8e-efa00c615452.png?$240_240_PNG$",
                productCode: "587913541",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 134916,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "조채윤",
                recipientPhoneNum: "010-1324-8874",
                recipientAddress: "서울특별시 관악구 봉천동 859-17",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "325468971132",
                shipDate: "2022-06-25",
            },
            {
                ordererName: "김나름",
                ordererPhoneNum: "010-6485-4128",
                ordererEmail: "skfmaskfma@naver.com",
                orderDay: "2022-07-18",
                orderProduct: "LG 디오스 오브제컬렉션 김치톡톡",
                orderNum: "46251384",
                orderCase: "paymentFailed",
                brandName: "LG",
                brandImg: "https://www.lge.co.kr/kr/images/kimchi-refrigerators/md09029835/gallery/medium01.jpg",
                productCode: "234524235",
                paymentQuantity: 2,
                rentalMonth: "36",
                paymentAmount: 93055,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "김나름",
                recipientPhoneNum: "010-6485-4128",
                recipientAddress: "서울특별시 관악구 봉천동 1717",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "465358492113",
                shipDate: "2022-07-18",
            },
            {
                ordererName: "최민혁",
                ordererPhoneNum: "010-6558-4208",
                ordererEmail: "minmax@gmail.com",
                orderDay: "2022-07-07",
                orderProduct: "삼성 BESPOKE 냉장고 4도어 프리스탠딩 패밀리허브 818 L",
                orderNum: "46221987",
                orderCase: "examinationFailure",
                brandName: "삼성",
                brandImg: "https://images.samsung.com/kdp/goods/2022/06/21/927cca5e-3ae0-48a6-9a8e-efa00c615452.png?$240_240_PNG$",
                productCode: "587913541",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 269832,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 5,
                shippingFee: 0,
                place: "집",
                recipient: "최민혁",
                recipientPhoneNum: "010-6558-4208",
                recipientAddress: "서울특별시 관악구 봉천동 859-17",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "587613208712",
                shipDate: "2022-07-09",
            },
            {
                ordererName: "유아름",
                ordererPhoneNum: "010-4587-1234",
                ordererEmail: "name123@naver.com",
                orderDay: "2022-07-08",
                orderProduct: "LG 트롬 세탁기",
                orderNum: "12345435",
                orderCase: "defaultCase",
                brandName: "LG",
                brandImg: "https://m.rentalplanner.kr/web/product/big/20200218/540af28491683e4d29552053c06a9166.jpg",
                productCode: "890456235",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 100000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 5,
                shippingFee: 0,
                place: "집",
                recipient: "최유리",
                recipientPhoneNum: "010-4252-2432",
                recipientAddress: "서울특별시 관악구 신림동 포도몰 2층",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "812345098103",
                shipDate: "2022-07-19",
            },

            {
                ordererName: "임지연",
                ordererPhoneNum: "010-6782-1275",
                ordererEmail: "leeji@naver.com",
                orderDay: "2022-05-02",
                orderProduct: "LG 통돌이 세탁기",
                orderNum: "82359435",
                orderCase: "examinationFailure",
                brandName: "LG",
                brandImg: "https://m.rentalplanner.kr/web/product/big/20200218/540af28491683e4d29552053c06a9166.jpg",
                productCode: "872940485",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 50000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "김윤지",
                recipientPhoneNum: "010-2345-1231",
                recipientAddress: "서울 강남구 일원동",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "321576458103",
                shipDate: "2022-06-25",
            },

            {
                ordererName: "이지은",
                ordererPhoneNum: "010-5673-1276",
                ordererEmail: "heymama@google.com",
                orderDay: "2022-12-03",
                orderProduct: "삼성 그랑데 세탁기",
                orderNum: "82890678",
                orderCase: "paymentFailed",
                brandName: "삼성",
                brandImg: "https://m.rentalplanner.kr/web/product/big/20200218/540af28491683e4d29552053c06a9166.jpg",
                productCode: "23498709",
                paymentQuantity: 1,
                rentalMonth: "48",
                paymentAmount: 40000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "구찬성",
                recipientPhoneNum: "010-3456-8908",
                recipientAddress: "강원도 강릉시 강릉시청",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "819304376383",
                shipDate: "2022-12-20",
            },

            {
                ordererName: "최유나",
                ordererPhoneNum: "010-1235-9284",
                ordererEmail: "frontend@naver.com",
                orderDay: "2022-08-02",
                orderProduct: "대우 세탁기10k",
                orderNum: "38475092",
                orderCase: "defaultCase",
                brandName: "대우",
                brandImg: "https://m.rentalplanner.kr/web/product/big/20200218/540af28491683e4d29552053c06a9166.jpg",
                productCode: "102938475",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 80000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "지현중",
                recipientPhoneNum: "010-2534-1834",
                recipientAddress: "서울 강서구 발산동",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "8374859039548",
                shipDate: "2022-08-25",
            },

            {
                ordererName: "유바비",
                ordererPhoneNum: "010-9876-3049",
                ordererEmail: "yumisepo@google.com",
                orderDay: "2022-11-02",
                orderProduct: "위닉스 드럼세탁기9k",
                orderNum: "68374623",
                orderCase: "examinationFailure",
                brandName: "위닉스",
                brandImg: "https://m.rentalplanner.kr/web/product/big/20200218/540af28491683e4d29552053c06a9166.jpg",
                productCode: "567820387",
                paymentQuantity: 1,
                rentalMonth: "36",
                paymentAmount: 50000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "구웅",
                recipientPhoneNum: "010-4252-2432",
                recipientAddress: "광주광역시 북구 운암동",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "573642957656",
                shipDate: "2022-11-17",
            },
            {
                ordererName: "오세준",
                ordererPhoneNum: "010-5821-9512",
                ordererEmail: "user1@naver.com",
                orderDay: "2022-07-02",
                orderProduct: "삼성 QLED 4K 163cm TV",
                orderNum: "91190250",
                orderCase: "defaultCase",
                brandName: "삼성",
                brandImg: "https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg",
                productCode: "289793879",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 56000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "김대기",
                recipientPhoneNum: "010-2252-1512",
                recipientAddress: "서울 도곡동 한포아파트 2동 102호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "812904328103",
                shipDate: "2022-07-03",
            },
            {
                ordererName: "김동일",
                ordererPhoneNum: "010-4221-1512",
                ordererEmail: "iluvsamsung@naver.com",
                orderDay: "2022-06-20",
                orderProduct: "2022 Neo QLED 4K 125cm 스탠드형",
                orderNum: "89412255",
                orderCase: "defaultCase",
                brandName: "삼성",
                brandImg: "https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg",
                productCode: "521422339",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 24000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "박삼성",
                recipientPhoneNum: "010-1652-1122",
                recipientAddress: "서울 마포구 한진아파트 1동 202호",
                request: "도착하기전 전화주세요",
                courier: "한진택배",
                invoiceNumber: "812904328103",
                shipDate: "2022-06-23",
            },
            {
                ordererName: "한영우",
                ordererPhoneNum: "010-6271-2512",
                ordererEmail: "jjangsamsung@gamail.com",
                orderDay: "2022-07-20",
                orderProduct: "2022 삼성 스마트 모니터 80 cm",
                orderNum: "96634875",
                orderCase: "defaultCase",
                brandName: "삼성",
                brandImg: "https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg",
                productCode: "945642832",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 56000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "회사",
                recipient: "한영우",
                recipientPhoneNum: "010-8612-1522",
                recipientAddress: "서울 마포구 상상마당 2층",
                request: "도착하기전 전화주세요",
                courier: "cj대한통운",
                invoiceNumber: "812904328103",
                shipDate: "2022-07-22",
            },
            {
                ordererName: "최동진",
                ordererPhoneNum: "010-2211-6612",
                ordererEmail: "iluvLg@gamail.com",
                orderDay: "2022-07-21",
                orderProduct: "[LG전자]55인치 울트라 UHD LED TV",
                orderNum: "26189799",
                orderCase: "defaultCase",
                brandName: "LG",
                brandImg: "https://www.lg.com/lg5-common-gp/images/common/header/logo-b2c.jpg",
                productCode: "206074970",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 42000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 18,
                shippingFee: 0,
                place: "집",
                recipient: "오엘지",
                recipientPhoneNum: "010-8152-9512",
                recipientAddress: "서울 강서구 발산동 220-1호",
                request: "안전하게 가져다주세요",
                courier: "한진택배",
                invoiceNumber: "812904328103",
                shipDate: "2022-07-22",
            },
            {
                ordererName: "남궁지혜",
                ordererPhoneNum: "010-8211-1662",
                ordererEmail: "goodlgtv@gamail.com",
                orderDay: "2022-06-23",
                orderProduct: "LG 올레드 OLED TV OLED55A1ENA 138cm",
                orderNum: "60089719",
                orderCase: "defaultCase",
                brandName: "LG",
                brandImg: "https://www.lg.com/lg5-common-gp/images/common/header/logo-b2c.jpg",
                productCode: "294151627",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 32000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 10,
                shippingFee: 0,
                place: "집",
                recipient: "오엘지",
                recipientPhoneNum: "010-8152-9512",
                recipientAddress: "서울 강서구 발산동 220-1호",
                request: "안전하게 가져다주세요",
                courier: "한진택배",
                invoiceNumber: "812904328103",
                shipDate: "2022-06-26",
            },
            {
                ordererName: "김패캠",
                ordererPhoneNum: "010-1111-1111",
                ordererEmail: "hi_ami@naver.com",
                orderDay: "2022-07-02",
                orderProduct: "벤큐 모니터 개발자용 4k",
                orderNum: "12359431",
                orderCase: "defaultCase",
                brandName: "벤큐",
                brandImg: "https://shopping-phinf.pstatic.net/main_2419676/24196764522.20220311173519.jpg?type=f640",
                productCode: "134524231",
                paymentQuantity: 1,
                rentalMonth: "12",
                paymentAmount: 20000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 5,
                shippingFee: 0,
                place: "집",
                recipient: "김패캠",
                recipientPhoneNum: "010-1111-1111",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "112904328101",
                shipDate: "2022-07-05",
            },
            {
                ordererName: "오상식",
                ordererPhoneNum: "010-2222-2222",
                ordererEmail: "aj_001@naver.com",
                orderDay: "2022-07-03",
                orderProduct: "삼성전자 60.4cm IPS패널 3면 베젤리스 모니터",
                orderNum: "22359432",
                orderCase: "defaultCase",
                brandName: "삼성전자",
                brandImg: "https://shopping-phinf.pstatic.net/main_2086152/20861526783.20210302142419.jpg?type=f640",
                productCode: "234524232",
                paymentQuantity: 1,
                rentalMonth: "24",
                paymentAmount: 20000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송중",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "오상식",
                recipientPhoneNum: "010-2222-2222",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "212904328102",
                shipDate: "2022-07-10",
            },
            {
                ordererName: "장백기",
                ordererPhoneNum: "010-3333-3333",
                ordererEmail: "mo_ami@naver.com",
                orderDay: "2021-07-05",
                orderProduct: "LG전자 24MK430H 24인치 FHD IPS 광시야각 모니터",
                orderNum: "32359433",
                orderCase: "examinationFailure",
                brandName: "LG전자",
                brandImg: "https://shopping-phinf.pstatic.net/main_1364381/13643814149.20200824151155.jpg?type=f640",
                productCode: "334524233",
                paymentQuantity: 1,
                rentalMonth: "36",
                paymentAmount: 10000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송준비중",
                discountAmount: 0,
                paymentDate: 25,
                shippingFee: 0,
                place: "집",
                recipient: "장백기",
                recipientPhoneNum: "010-3333-3333",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "312904328103",
                shipDate: "2022-07-10",
            },
            {
                ordererName: "장그래",
                ordererPhoneNum: "010-4444-4444",
                ordererEmail: "fscampus@naver.com",
                orderDay: "2021-08-01",
                orderProduct: "LG전자 24MP500W",
                orderNum: "56474635",
                orderCase: "defaultCase",
                brandName: "LG전자",
                brandImg: "https://shopping-phinf.pstatic.net/main_1364381/13643814149.20200824151155.jpg?type=f640",
                productCode: "434524234",
                paymentQuantity: 1,
                rentalMonth: "48",
                paymentAmount: 10000,
                paymentStatus: "결제취소",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 5,
                shippingFee: 0,
                place: "집",
                recipient: "장그래",
                recipientPhoneNum: "010-4444-4444",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "412904328104",
                shipDate: "2021-08-20",
            },
            {
                ordererName: "안영이",
                ordererPhoneNum: "010-5555-5555",
                ordererEmail: "anyoung_@naver.com",
                orderDay: "2021-09-01",
                orderProduct: "삼성전자 삼성 커브드 C27R502 베젤리스 프리싱크",
                orderNum: "52359435",
                orderCase: "examinationFailure",
                brandName: "삼성전자",
                brandImg: "https://shopping-phinf.pstatic.net/main_2086152/20861526783.20210302142419.jpg?type=f640",
                productCode: "534524235",
                paymentQuantity: 1,
                rentalMonth: "60",
                paymentAmount: 10000,
                paymentStatus: "결제완료",
                deliveryStatus: "배송완료",
                discountAmount: 0,
                paymentDate: 15,
                shippingFee: 0,
                place: "집",
                recipient: "안영이",
                recipientPhoneNum: "010-5555-5555",
                recipientAddress: "대전광역시 관저동 1151 에이스빌 203호",
                request: "문 앞에 놔주세요",
                courier: "한진택배",
                invoiceNumber: "512904328105",
                shipDate: "2021-09-05",
            },
        ],
    },

    reducers: {
        changeShipping: (state, action) => {
            return {
                ...state,
                dataList: state.dataList.map((it) => (it.orderNum == action.payload ? { ...it, deliveryStatus: "배송중" } : it)),
            };
        },
        changeDeliveryCompleted: (state, action) => {
            return {
                ...state,
                dataList: state.dataList.map((it) => (it.orderNum == action.payload ? { ...it, deliveryStatus: "배송완료" } : it)),
            };
        },
        payCancel: (state, action) => {
            return {
                ...state,
                dataList: state.dataList.map((it) => (it.orderNum == action.payload ? { ...it, paymentStatus: "결제취소" } : it)),
            };
        },
        payCompleted: (state, action) => {
            return {
                ...state,
                dataList: state.dataList.map((it) => (it.orderNum == action.payload ? { ...it, paymentStatus: "결제완료" } : it)),
            };
        },
    },
});

export const { changeShipping, changeDeliveryCompleted, payCancel, payCompleted } = publicData.actions;

export default publicData.reducer;
