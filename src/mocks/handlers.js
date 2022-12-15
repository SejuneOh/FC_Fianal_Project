import { rest } from "msw";
import { products, DetailProducts, masterUser, vendorUser } from "../kkuda/api/dummy";





export const handlers = [
  // 상품검색
  rest.get('https://commerce-api.weplanet.co.kr/products', (req, res, ctx) => {
    // 상품검색 시  id 
    const productIds = req.url.searchParams.get('id');

    if (productIds === "" || productIds === null) {
      console.log("in !!");
      return res(
        ctx.status(200),
        ctx.json(products)
      )
    } else {
      switch (productIds) {
        case "3944964":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[0])
          )

        case "3944965":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[1])
          )
        case "3944966":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[2])
          )
        case "3944967":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[3])
          )
        case "3944968":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[4])
          )
        case "3944969":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[5])
          )
        case "3944970":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[6])
          )
        case "3944971":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[7])
          )
        case "3944972":
          return res(
            ctx.status(200),
            ctx.json(DetailProducts[8])
          )
        default:
          return res(
            ctx.status(200),
            ctx.json({ data: [] })
          )
      }
    }
  }),
  // 마스터 로그인
  rest.post('https://commerce-api.weplanet.co.kr/master/auth', (req, res, ctx) => {
    const body = req.body;

    if (body === undefined || body === null || isEmpty(body)) {
      return res(
        ctx.status(404),
        ctx.json({
          "id": "ee513643-7cbf-4fb1-a2e4-b8460f9ad8aa",
          "message": "not_found"
        })
      )
    }

    if (masterUser.name === body.name) {
      return res(
        ctx.status(200),
        ctx.json(masterUser)
      )
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          "id": "ee513643-7cbf-4fb1-a2e4-b8460f9ad8aa",
          "message": "not_found"
        })
      )
    }


  }),
  // 판매자 코드
  rest.post('https://commerce-api.weplanet.co.kr/vendors/auth', (req, res, ctx) => {
    const body = req.body;

    console.log("body", body);

    if (body === undefined || body === null || isEmpty(body)) {
      return res(
        ctx.status(404),
        ctx.json({
          "id": "ee513643-7cbf-4fb1-a2e4-b8460f9ad8aa",
          "message": "not_found"
        })
      )
    }

    if (vendorUser.email === body.email) {
      return res(
        ctx.status(200),
        ctx.json(vendorUser)
      )
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          "id": "ee513643-7cbf-4fb1-a2e4-b8460f9ad8aa",
          "message": "not_found"
        })
      )
    }
  }),
];


const isEmpty = (param) => {
  return Object.keys(param).length === 0;
}



