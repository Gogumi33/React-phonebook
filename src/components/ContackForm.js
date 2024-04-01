import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContackForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  // 이 event에는 form에 대한 정보를 담고있다.
//   const getName = (event) => {
//     setName(event.target.value); // 이제 이렇게 해 주면 form의 값이 name state에 저장된다.
//   }
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); // 자동 새로고침 방지
    // store에 useDispatch통해 데이터 넘겨주는 작업.
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}}) // name:name, phoneNumber:phoneNumber와 같은코드.(ES6 문법)
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>이름</Form.Label>
            {/* onChange는 입력 받을때마다 자동으로 저장 */}
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContack">
            <Form.Label>전화번호</Form.Label>
            <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)}/>
        </Form.Group>
        
        {/* Form 안의 버튼 타입이 submit이면 onClick이 아니라 onSubmit이다!!! */}
        <Button variant="primary" type="submit">
            추가
        </Button>
      </Form>
    </div>
  )
}

export default ContackForm
