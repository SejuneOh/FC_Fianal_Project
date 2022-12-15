import { Admin, Vendor, isEmptyObj } from '../models/index.js'




// 관리자 로그인
export const adminLogin = (req, res) => {

  const body = req.body;

  if (typeof body.name !== 'string' || typeof body.password !== 'string' || isEmptyObj(body) || body.name.length === 0 || body.password.length === 0) {
    res.status(201).json({ loginSuccess: false, msg: " ID or Password is undefinded" })
    return;
  }

  try {
    //  띄어쓰기 합치기 
    const searchName = body.name.replace(/ /g, "");
    const searchPassword = body.password.replace(/ /g, "");

    Admin.findOne({ name: searchName, password: searchPassword }).exec((err, result) => {
      if (result) {
        const updateTime = new Date();
        result.remember = true;
        result.updatedAt = updateTime
        result.save();

        res.status(200).json({
          name: result.name,
          nickname: result.nickname,
          department: result.department,
          position: result.position,
          groups: [
            {
              name: "",
              id: 0
            }
          ],
          id: result.id,
          enabled: result.enabled,
          tel: result.tel,
          memo: result.memo,
          createdAt: result.createdAt,
          updatedAt: updateTime
        })
      } else {
        res.status(202).json({ loginSuccess: false, msg: "Not found user" })
      }
    })
  } catch (err) {
    res.status(500).json({ loginSuccess: false, msg: `Server Error: ${err}` })
  }
}


// 판매자 로그인
export const vendorLogin = (req, res) => {
  const body = req.body;
  // id password 체크
  //  문자열로 들어왔는지 체크 
  if (typeof body.email !== 'string' || typeof body.password !== 'string' || isEmptyObj(body) || body.email.length === 0 || body.password.length === 0) {
    res.status(201).json({ loginSuccess: false, msg: " ID or Password is undefinded" })
    return;
  }

  // 해당 데이터 찾기
  try {

    const searchEmail = body.email.replace(/ /g, "");
    const searchPassword = body.password.replace(/ /g, "");

    console.log(searchEmail);
    Vendor.findOne({ email: searchEmail, password: searchPassword }).select('-password').exec((err, result) => {
      if (result) {

        // 상태값 변경
        const updateTime = new Date();
        result.remember = true;
        result.updatedAt = updateTime
        result.save();

        res.status(200).json(
          {
            result
          }
        )
      } else {
        res.status(202).json({ loginSuccess: false, msg: "Not found user" })
      }
    })
  } catch (err) {
    res.status(500).json({ loginSuccess: false, msg: `Server Error: ${err}` })
  }
}



