import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", padding: 0 }}>
      {/* Tab Menu ( 서비스 반영 사례 )*/}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor=""
          indicatorColor=""
          sx={{ color: "black", padding: 0 }}
        >
          <Tab label="서비스 반영사례 1  🖥 " {...a11yProps(0)} />
          <Tab label="서비스 반영사례 2  💻 " {...a11yProps(1)} />
          {/* <Tab label="Design  💅 " {...a11yProps(2)} /> */}
        </Tabs>
      </Box>

      {/* Tab Content ( 서비스 반영 사례 )*/}
      <TabPanel value={value} index={0}>
        <div class="seviceContentWrap">
          <p class="serviceContent ">
            비상장주식 거래 플렛폼 서비스를 개발하면서 주문 입력폼 키패드에서의
            기능이 밴치마킹을 하던 코인앱처럼 복잡하지 않아도 될 것 같단 생각을
            했고 , 기능의 간결함이 소비자들에게 더 편리함과 간편함을 제공할 수
            있을것 같단 의견이 반영되었습니다. 추가로 기능의 간결화 함에 있어
            호가창에서의 매수 매도 입력시 따로 떠야 했던 입력폼을 거래소
            주문폼과 연결시키면 개발의 공수도 줄고 앱을 사용하는 유저들에게도
            거래하는 과정에 있어 익숙함을 줄 수 있을것 같다는 의견도 반영되어
            인터페이스 또한 직관적으로 바뀔수 있게 된 사례가 있었습니다.
          </p>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div class="seviceContentWrap">
          <p class="serviceContent">
            ‘펫키즈’ 라는 애완용품 브랜드 사이트를 개발하면서 반려동물을
            목적으로 하는 서비스의 특성상 고객들간의 커뮤니티
            게시판(자유게시판)을 도입하여 커뮤니티 장소를 마련하고, 리뷰와
            자유게시판을 연동하여 리뷰 이벤트를 진행하면 반려동물 보호자들의
            사이트 참여도가 높아짐으로서 리뷰수와 회원 유치에 도움이 될 것
            이라는 의견이 반영되었던 사례가 있었습니다.
          </p>
        </div>
      </TabPanel>
    </Box>
  );
}
