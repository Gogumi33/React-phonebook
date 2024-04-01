import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContackForm from './components/ContackForm';
import ContackList from './components/ContackList';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 사용시 npm설치 후 이 코드까지 추가 필수!

// 1. 왼쪽 - 연락처 등록 폼, 오른쪽 - 연락처 리스트와 search기능 @
// 2. 리스트에 유저이름 및 전화번호 등록 기능
// 3. 리스트에 아이템 갯수 확인가능
// 4. 사용자가 유저를 이름 기반으로 검색할 수 있다.

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContackForm />
          </Col>
          <Col>
            <ContackList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
