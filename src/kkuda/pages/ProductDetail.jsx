import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import KkudaHeader from "../components/KkudaHeader";
import productInfo from "../reducers/productInfo";
import { addProductInfo } from "../reducers/productInfo";

const DetailDiv = styled.div`
    margin: 168px 68px 0 68px;
    height: 100%;
    min-width: 1240px;
    font-size: 22px;
    font-weight: 350;
`;

const SectionProductDetail = styled.section`
    width: 100%;
    margin-bottom: 128px;
    display: flex;
    justify-content: space-evenly;

    .detailImage {
        .thumbnailImage {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
    }

    .detailInfo {
        width: 577px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .currentShippinBenefit {
            display: flex;
            justify-content: space-between;
            margin-bottom: 22.7px;

            .benfit {
                width: 318px;
                display: flex;
                justify-content: space-between;

                > img {
                    position: relative;
                    width: 25px;
                    height: 25px;
                    top: 10px;
                }
            }

            .icons {
                position: relative;
                top: 8px;
                img:nth-child(1) {
                    margin-right: 5px;
                }
            }
        }

        .productTitle {
            margin-bottom: 36px;
        }

        .price {
            padding-bottom: 26px;
            border-bottom: 1px solid black;

            > div {
                display: flex;
                justify-content: left;
                align-items: center;

                span:nth-child(1) {
                    font-size: 20px;
                }

                .rentalPrice {
                    font-size: 32px;
                    font-weight: 900;
                    > span {
                        font-size: 16px;
                        font-weight: 350;
                    }
                }

                .disCountPrice {
                    font-size: 32px;
                    font-weight: 900;
                    color: #30cee6;
                }

                img {
                    margin-right: 16px;
                }
            }
        }

        .shippingDescription {
            padding: 29px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid #9a9a9a;

            .shippingDetail {
                display: flex;
                align-items: center;

                img {
                    margin-right: 33px;
                }

                > div {
                    p {
                        font-size: 20px;
                        > span {
                            font-weight: 350;
                        }
                    }
                    p:nth-child(1) {
                        margin-bottom: 10px;
                    }

                    p:nth-child(2) {
                        font-weight: 700;
                    }
                }
            }
            .shippingDetail:nth-child(1) {
                margin-bottom: 16px;
            }
        }

        .optionButton {
            margin-bottom: 30px;

            > button {
                display: block;
                width: 100%;
                background-color: #fff;
                height: 68px;
                border: 1px solid #9a9a9a;
                border-radius: 5px;
                margin-bottom: 10px;
                font-size: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .rentalBtn {
            display: flex;
            justify-content: space-evenly;
        }
    }
`;

const SectionSubProduct = styled.section`
    width: 100%;
    margin-bottom: 82px;
    font-size: 24px;

    > strong {
        display: block;
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 26px;
    }

    .subProducts {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        > img {
            width: 125px;
            height: 124px;
        }

        .subProduct {
            width: 287px;
            > p:nth-child(3) {
                font-weight: 700;
            }
        }
    }
`;

const SectionDetail = styled.section`
    width: 100%;
    height: 200px;

    > ul {
        display: flex;
        justify-content: center;
        margin-bottom: 42px;

        li {
            width: 100%;
            height: 56px;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
        }

        li:nth-child(1) {
            background-color: #000;
            color: #fff;
        }
    }

    > div {
        text-align: center;
        > img {
            max-width: 100%;
        }
    }
`;

const ImageBox = ({ size = "small", image = "" }) => {
    const boxSize = {
        width: 159,
        height: 162,
    };

    switch (size) {
        case "small":
            boxSize.margin = 10;
            break;
        case "medium":
            boxSize.width = 287;
            boxSize.height = 293;
            break;
        case "large":
            boxSize.width = 577;
            boxSize.height = 638;
            break;
        default:
            return;
    }

    const ImageDiv = styled.div`
        background-image: url(${image});
        width: ${boxSize.width}px;
        height: ${boxSize.height}px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin-bottom: 15px;
        background-color: #ebebeb;

        :hover {
            cursor: pointer;
        }
    `;
    return <ImageDiv />;
};

export default function ProductDetail() {
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    const getProduct = () => {
        try {
            const fetchProducts = async () =>
                await axios.get(`https://commerce-api.weplanet.co.kr/products?id=${id}`).then((res) => {
                    return res.data;
                });

            const res = fetchProducts();
            return res;
        } catch (e) {
            console.log(e);
        }
    };

    const getProducts = () => {
        try {
            const fetchProducts = async () =>
                await axios.get("https://commerce-api.weplanet.co.kr/products?start=1&perPage=20").then((res) => {
                    return res.data;
                });

            const res = fetchProducts();
            return res;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const detailProduct = getProduct();
        const allProduct = getProducts();

        detailProduct.then((json) => {
            setProduct(json.data);
            dispatch(addProductInfo(json.data));
        });

        allProduct.then((json) => {
            setProducts(json.data);
        });
    }, []);

    return (
        <DetailDiv>
            <KkudaHeader />
            <SectionProductDetail>
                <div className="detailImage">
                    {product !== null && <ImageBox size="large" image={product.titleImage} />}
                    <div className="thumbnailImage">
                        {product !== null &&
                            product.images.map((el, idx) => {
                                return <ImageBox key={idx} image={el} />;
                            })}
                        <img src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="header_icon" />
                    </div>
                </div>
                <div className="detailInfo">
                    <div className="currentShippinBenefit">
                        <div className="benfit">
                            <Button size="small" text="무료 배송" />
                            <Button size="small" text="오늘 배송" />
                            <Button bgColor="#797979" size="small" text="설치 배송" />
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/help.png`} alt="help" />
                        </div>
                        <div className="icons">
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/heart.png`} alt="heart" />
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/Share.png`} alt="share" />
                        </div>
                    </div>
                    <div className="productTitle">
                        <p style={{ fontSize: "26px", fontWeight: "700", marginBottom: "20px" }}>{product !== null && product.brandName}</p>
                        <p style={{ fontWeight: "400", marginBottom: "10px" }}>{product !== null && product.name}</p>
                    </div>
                    <div className="price">
                        <div>
                            <span>12개월간</span>
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/downArrow.png`} alt="down" />
                            <span className="rentalPrice">
                                {product !== null && `${Number.parseInt(product.price).toLocaleString()}원`} <span>을 납입하면 내 소유</span>
                            </span>
                        </div>
                        <div>
                            <span>카트혜택</span>
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/downArrow.png`} alt="down" />
                            <span className="disCountPrice">27,700원</span>
                        </div>
                    </div>
                    <div className="shippingDescription">
                        <div className="shippingDetail">
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/Car.png`} alt="car" />
                            <div>
                                <p>오늘 낮 2시까지 주문하면</p>
                                <p>오늘 발송</p>
                            </div>
                        </div>
                        <div className="shippingDetail">
                            <img src={process.env.PUBLIC_URL + `/assets/kkuda/Calender.png`} alt="down" />
                            <div>
                                <p>평귝 배송기간</p>
                                <p>
                                    2일이내 <span>상품입니다.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="optionButton">
                        <button>
                            옵션 A 선택 <img src={process.env.PUBLIC_URL + `/assets/kkuda/downArrow.png`} alt="down" />
                        </button>
                    </div>
                    <div className="rentalBtn">
                        <Link to="/kkuda/order" style={{ textDecoration: "none" }}>
                            <Button size="large" text="렌탈하기" />
                        </Link>
                        <Button bgColor="#000" size="large" text="무료 배송" />
                    </div>
                </div>
            </SectionProductDetail>
            <SectionSubProduct>
                <strong>함께본 상품</strong>
                <div className="subProducts">
                    {products.length &&
                        product !== null &&
                        products
                            .filter((el) => el.id !== product.id && el.categoryId === product.categoryId)
                            .map((item, idx) => {
                                return (
                                    <div key={idx} className="subProduct">
                                        <ImageBox size="medium" image={item.titleImage} />
                                        <p>{item.name}</p>
                                        <p className="price">{Number.parseInt(item.price).toLocaleString()}원</p>
                                    </div>
                                );
                            })}
                    <img src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="header_icon" />
                </div>
            </SectionSubProduct>
            <SectionDetail>
                <ul>
                    <li>
                        <p>상세정보</p>
                    </li>
                    <li>
                        <p>렌탈안내</p>
                    </li>
                    <li>
                        <p>리뷰</p>
                    </li>
                    <li>
                        <p>Q&A</p>
                    </li>
                    <li>
                        <p>반환 / 교환 여부</p>
                    </li>
                </ul>
                <div>
                    <img alt="[꾸다] BenQ벤큐 모니터 전문가용 모니터(사진영상편집) LCD 모니터 27인치 SW271C" src="https://contents.sixshop.com/uploadedFiles/16843/product/image_1647320106331.jpg" />
                </div>
            </SectionDetail>
        </DetailDiv>
    );
}
