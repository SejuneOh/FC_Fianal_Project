import React, { useState } from 'react'
import styled from 'styled-components'
import { products_1, products_2, products_3 } from '../api/dummy'
import ProuductList from '../components/ProductList'
import KkudaHeader from '../components/KkudaHeader'
import axios from 'axios'


const KkudaDiv = styled.div`
  margin-top: 85px;
  
  .adv_section{
    text-align: center;
  }
`





export default function Kkuda() {

  const [totalNum, setTotalNum] = useState(0);
  const [products, setProducts] = useState([]);


  const getProducts = () => {
    try {
      const fetchProducts = async () => await axios.get('https://commerce-api.weplanet.co.kr/products?start=1&perPage=20')
        .then(res => {
          console.log(res)
          return res.data;
        });

      const res = fetchProducts();
      console.log(res)
      return res;

    } catch (e) {
      console.log(e);
    }
  }



  React.useEffect(() => {
    // 최초 실행
    const result = getProducts();
    result.then(json => {
      setTotalNum(json.total);
      setProducts(json.data);
    })

  }, [])



  return (
    <>

      <KkudaDiv>
        <KkudaHeader />
        <div className='adv_section'>
          <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/16843/default/image_1652353299203_1500.png" alt="광고" />
        </div>
        {
          products.length && <ProuductList tag="그 해 여름은 유난히 뽀송했다 🌿" prouducts={products.filter(el => el.categoryId === 10)} />
        }
        {
          products.length && <ProuductList tag="지금 핫한 애플 중고 🔥" prouducts={products.filter(el => el.categoryId === 11)} />
        }

        <div className='adv_section'>
          <img width="1700px" src={process.env.PUBLIC_URL + `/assets/kkuda/adv_1.png`} alt="SHAREROUND" />
        </div>

        {
          products.length && <ProuductList tag="렌탈도 최저가에 😎" prouducts={products.filter(el => el.categoryId === 12)} />
        }
      </KkudaDiv>
    </>
  )
}
