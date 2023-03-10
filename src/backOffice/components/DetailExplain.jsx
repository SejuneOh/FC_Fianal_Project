import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ProductPageBtn } from "../styles/ButtonsStyle";
import { useSelector, useDispatch } from 'react-redux';
import { setDescription } from '../reducers/productRegistReducer';


const DetailExplainDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
  /* height: 100%; */

  .title {
    width: 100%;
    height: 66px;
    /* border */
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #e3e7ed;
    /* border: 1px solid #e3e7ed; */
    box-sizing: border-box;
    padding: 17px 34px 0 32px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    .redCircle {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ff545c;
      margin: 10px 0 0 3px;
    }
  }
  .accountWrite {
    /* height: 530px; */
    box-sizing: border-box;
    padding: 20px 30px;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #e3e7ed;

    .menuBar {
      box-sizing: border-box;
      border-width: 1px 1px 0px;
      border-style: solid;
      border-color: #e3e7ed;
      display: flex;
      width: 100%;
      font-weight: 500;
      .nonSelectTab {
        box-sizing: border-box;
        width: 50%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #787c84;
        background: #ecf0f4;
        border-width: 0px 0px 1px;
        border-style: solid;
        border-color: #e3e7ed;
        cursor: pointer;
      }
      .selectTab {
        box-sizing: border-box;
        width: 50%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #4cd9ef;
        background-color: #fff;
        cursor: pointer;
      }
    }
    .accountWriteBody {
      width: 100%;
      height: 299px;
      box-sizing: border-box;
      /* border: 1px solid #d1d5dc; */
      border-width: 0 1px 1px;
      border-style: solid;
      border-color: #d1d5dc;
      margin-bottom: 12px;
      /* background-color: red; */
      .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
        box-sizing: border-box;
        min-height: 100%;
        max-height: 258px;
        border-style: none;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-style: none;
      }
    }
    .informDiv {
      /* height: 17px; */
      height: 89px;
      font-size: 12px;
      line-height: 17px;
      font-weight: 400;
      .redText {
        color: #ff545c;
      }
      .blueText {
        color: #4cd9ef;
      }
    }
    .buttonBox {
      display: flex;
      justify-content: end;
      width: 852px;
      height: 38px;
      line-height: 21px;
      font-size: 16px;
      .skyBlueBtn {
      }
      .arrow {
        position: absolute;
        right: 130px;
        display: inline-block;
        width: 21px;
        height: 21px;
        background: url(/assets/arrow.png) center no-repeat;
        background-size: cover;
        /* margin-top: 5px; */
      }
    }
  }
`;

const DetailBtn = styled(ProductPageBtn)`
  font-size: 16px;
  line-height: 21px;
  margin: 0 0 0 4px;
`;

// ?????? ??????????????? ???????????? ????????? isProductRegist props ??????
export default function DetailExplain({ btnBoxBoolean, titleBoolean, isProductRegist = false, editObj = {} }) {
  const [select, setSelect] = useState(true);
  const [titleBool, setTitleBool] = useState(titleBoolean);
  const [btnBox, setBtnBox] = useState(btnBoxBoolean);

  //ProductRegist ???????????? ?????????  useDisPatch ?????? 
  const dispatch = useDispatch();
  const [editorData, setEditorData] = useState("");
  const [textAreaData, setTextAreaData] = useState("");

  // textArea onChageEventHandler ??????
  const onChangeTextArea = (e) => {
    // ???????????? ?????????, ?????? ?????? reducer???  ??????????????? ??????.
    if (isProductRegist) {
      dispatch(setDescription(e.target.value));
      setTextAreaData(e.target.value);
    }
    if (!isEmptyObj(editObj)) {
      setTextAreaData(e.target.value);
      editObj.changeEvent(e.target.value);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    // ???????????? ???????????? ????????? ????????????
    if (data != null && isProductRegist) {
      data = JSON.parse(data);
      if (data.description.length > 0) {
        if (data.description.charAt(0) === '<') {
          setEditorData(data.description);
        } else {
          setTextAreaData(data.description);
        }
        dispatch(setDescription(data.description));
      }
    }

    if (!isEmptyObj(editObj)) {
      if (editObj.data.length > 0) {
        if (editObj.data.charAt(0) === '<') {
          setEditorData(editObj.data);
        } else {
          setTextAreaData(editObj.data);
        }
      }
    }
  }, [])

  // console.log(btnBox);
  return (
    <DetailExplainDiv>
      {titleBool ? (
        <div className="title">
          <div>????????????</div>
          <div className="redCircle" />
        </div>
      ) : null}
      <div className="accountWrite">
        <div className="menuBar">
          <div
            className={select === false ? "nonSelectTab" : "selectTab"}
            onClick={() => setSelect(true)}
          >
            ?????? ??????
          </div>
          <div
            className={select === true ? "nonSelectTab" : "selectTab"}
            onClick={() => setSelect(false)}
          >
            HTML ??????
          </div>
        </div>
        <div className="accountWriteBody">
          {select ? (
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                if (isProductRegist) editor.setData(editorData);

                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                if (isProductRegist) dispatch(setDescription(data));
                if (!isEmptyObj(editObj)) {
                  if (textAreaData.length > 0) setTextAreaData("");
                  editObj.changeEvent(data)
                }

                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                if (isProductRegist && editor.getData() === "") dispatch(setDescription(""));
                if (!isEmptyObj(editObj)) {
                  editObj.changeEvent(editor.getData())
                }
                // console.log("Focus.", editor);
              }}
            />
          ) : (
            <textarea onChange={onChangeTextArea} value={textAreaData} />
          )}
        </div>
        <div className="informDiv">
          <div className="redText">
            ?????? ????????? ?????? ???????????? &#40;????????? ??????, ????????? ??????&#41; ?????????
            ??????????????? ????????? ????????? ????????? ??? ????????????. ????????????????????????
          </div>
          <div className="blueText">
            ???????????? ????????? ?????? ?????? ????????????, ?????? ?????? ????????? ???????????? ??????
            ?????? ?????? ??? ??? ????????????.
            <br />
            ????????????????????? ?????? ??? ?????? ???????????? ?????? ??????????????? ?????? ???
            ????????????.
            <br />
            ???????????? ?????? ?????? : ?????? 768px
          </div>
        </div>
        {btnBox ? (
          <div className="buttonBox">
            <DetailBtn className="skyBlueBtn">
              <span>PC????????????</span>
            </DetailBtn>
            <DetailBtn className="skyBlueBtn">
              <span>????????? ????????????</span>
            </DetailBtn>
            <DetailBtn>
              <span className="arrow"></span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????????</span>
            </DetailBtn>
          </div>
        ) : null}
      </div>
    </DetailExplainDiv>
  );
}


function isEmptyObj(obj) {
  if (obj.constructor === Object
    && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}