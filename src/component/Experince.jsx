import React from "react";
import "../Css/Grid.css";
import "../Css/Experince.css";

import { Flip } from "react-reveal";

function Experince(props) {
  return (
    <div className="ExperinceWrap " id="2">
      <div className="Container">
        {/* Title */}
        <div className="WebTitleWrapRow">
          <div className="Title">Experience</div>
        </div>

        {/* Card */}
        <div class="CardWrap">
          {/* Card Grup Left */}
          <Flip left duration={1300}>
            <div className="SpaceCol">
              {/* Card 1 */}

              <div className="Card">
                <div class="CardGrid1">
                  {/* Img */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/22dRgvlOdY.png" />
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div>
                    <p class="TextT"> Rest Api </p>
                    <p class="TextB">
                      Rest(Restful) API 기반의 데이터를 Fetch API로 핸들링하며 고차함수를 활용한 필터링으로 시각화할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <card class="Card">
                <div class="CardGrid2">
                  {/* <!-- Content --> */}
                  <div class="">
                    <p class="TextT"> UI UX 기능명세서, 화면설계서 </p>
                    <p class="TextB">
                      주식 거래소 Web 기능 명세서와 UI & UX 화면설계서 작성
                      경험이 있습니다.
                    </p>
                  </div>
                  {/* <!-- Image --> */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/RBOoMcVjma.png" />
                    </div>
                  </div>
                </div>
              </card>

              {/* <!-- Card 3 --> */}
              <card class="Card">
                <div class="CardGrid1">
                  {/* <!-- Image --> */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/aryxDTuu2h.png" />
                    </div>
                  </div>
                  {/* <!-- Content --> */}
                  <div class="">
                    <p class="TextT"> WEB </p>
                    <p class="TextB">
                      {" "}
                      회사 렌딩페이지 와 고객지원페이지 의 Web Design 과
                      Publising , 공지사항과 Q&A 개발을 맡아 진행 했습니다.
                    </p>
                  </div>
                </div>
              </card>
            </div>
          </Flip>
          {/* </div> */}

          {/* Card Grup Right */}
          <Flip right duration={1300}>
            <div className="SpaceCol">
              {/* <!-- Card 4 --> */}
              <card class="Card">
                <div class="CardGrid2">
                  {/* <!-- Content --> */}
                  <div>
                    <p class="TextT"> Solution </p>
                    <p class="TextB">
                      {" "}
                      거래소 레퍼런스 조사를 통해 키패드 기능 에서의 솔루션
                      반영사례와 기능의 간결화 함에 있어 인터페이스 또한
                      직관적으로 개선한 사례가 있었습니다.
                    </p>
                  </div>

                  {/* <!-- Image --> */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/AWk5UYf8AF.png" />
                    </div>
                  </div>
                </div>
              </card>

              {/* <!-- Card 5 --> */}
              <card class="Card">
                <div class="CardGrid1">
                  {/* <!-- Image --> */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/ousB51PyZq.png" />
                    </div>
                  </div>
                  {/* <!-- Description --> */}
                  <div class="">
                    <p class="TextT"> MD </p>
                    <p class="TextB">
                      {" "}
                      온라인 쇼핑몰 MD, 카페24를 통한 관리 경험이 있습니다.
                    </p>
                  </div>
                </div>
              </card>

              {/* <!-- Card 6 --> */}
              <card class="Card">
                <div class="CardGrid2">
                  {/* <!-- Description --> */}
                  <div class="">
                    <p class="TextT"> ShopingMol </p>
                    <p class="TextB">
                      {" "}
                      여성의류 쇼핑몰을 제작, 운영하며 브랜디 & 에이블리에
                      입점해 통신판매업을 한 경험이 있습니다.
                    </p>
                  </div>
                  {/* <!-- Image --> */}
                  <div class="ImgWrap">
                    <div class="Img">
                      <img src="https://i.esdrop.com/d/f/KRQCESGJO3/lTBjsn1aRx.png" />
                    </div>
                  </div>
                </div>
              </card>
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
}

export default Experince;

