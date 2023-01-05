import React from "react";
import { TabMenu } from "../ui";
import "../Css/Service.css";
import "../Css/Grid.css"
import classnames from "classnames";
function Service(props) {
  const [selectedNum, setSelectedNum] = React.useState(0);

  function onSelectedNumber(num) {
    setSelectedNum(num);
  }

  return (
    <div class="ServiceWrap" id="4">
      <div class="Container " x-data="{activeTab: 1}">
          {/* Title */}
          <div class="WebTitleWrapRow">
            <div className="Title">SERVICE</div>
          </div>

          {/* Card */}
          <dialog open class="Dialog">
            <div class="ServiceContentWrap">
              {/* Img */}
              <div class="ServiceContentImg">
                {selectedNum === 0 && (
                  <img
                    src="https://i.esdrop.com/d/f/KRQCESGJO3/FqxOZHeRrP.jpg"
                  />
                )}

                {selectedNum === 1 && (
                  <img
                    src="https://i.esdrop.com/d/f/KRQCESGJO3/c87fNn8RCf.jpg"
                  />
                )}
              </div>
              {/* Tab Text*/}
              <div class="ServiceContentTextWrap">
                <div class="ServiceContentText">
                  {/* Tab Menu*/}
                  <header class="TabMenu">
                    <button
                      onClick={() => {
                        onSelectedNumber(0);
                      }}
                      class={classnames(
                        "TabBtn",
                        {
                          "bg-black": selectedNum === 0,
                          "text-white": selectedNum === 0,
                        }
                      )}
                    >
                      서비스 반영사례1
                    </button>
                    <button
                      onClick={() => {
                        onSelectedNumber(1);
                      }}
                      class={classnames("TabBtn",
                      {
                        "bg-black": selectedNum === 1,
                        "text-white": selectedNum === 1,
                      })}
                    >
                      서비스 반영사례2
                    </button>
                  </header>

                  {/* Text Box */}
                  <div class="TabTextBox" id="tabs-contents" >
                    {/* TextBox1 */}
                  <div className={classnames("p-2", {
                        block: selectedNum === 0,
                        hidden: selectedNum !== 0,
                      })} >
                      비상장주식 거래 플렛폼 서비스를 개발하면서 주문 입력폼 키패드에서의 기능이 밴치마킹을 하던 코인앱처럼 복잡하지 않아도 될 것 같단 생각을 했고 , 기능의 간결함이 소비자들에게 더 편리함과 간편함을 제공할 수 있을것 같단 의견이 반영되었습니다. 추가로 기능의 간결화 함에 있어 호가창에서의 매수 매도 입력시 따로 떠야 했던 입력폼을 거래소 주문폼과 연결시키면 개발의 공수도 줄고 앱을 사용하는 유저들에게도 거래하는 과정에 있어 익숙함을 줄 수 있을것 같다는 의견도 반영되어 인터페이스 또한 직관적으로 바뀔수 있게 된 사례가 있었습니다.
                  </div>
                    {/* TextBox2 */}
                  <div className={classnames("p-2", {
                          block: selectedNum === 1,
                          hidden: selectedNum !== 1,
                      })}>
                        펫키즈’ 라는 애완용품 브랜드 사이트를 개발하면서 반려동물을 목적으로 하는 서비스의 특성상 고객들간의 커뮤니티 게시판(자유게시판)을 도입하여 커뮤니티 장소를 마련하고, 리뷰와 자유게시판을 연동하여 리뷰 이벤트를 진행하면 반려동물 보호자들의 사이트 참여도가 높아짐으로서 리뷰수와 회원 유치에 도움이 될 것 이라는 의견이 반영되었던 사례가 있었습니다. 
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </dialog>
      </div>
    </div>
  );
}

export default Service;
