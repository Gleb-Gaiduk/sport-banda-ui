import { Col, Row } from 'antd';
import { SignUpForm } from 'pages/SignUp/components/SignUpForm/SignUpForm';
import './SignUp.scss';

function SignUpPage() {
  return (
    <Row className='SignUpPage'>
      <Col span={12}>
        <div className='SignUpPage-carousel'>Caorusel component</div>
      </Col>
      <Col span={12}>
        <Row justify='center' align='middle' className='SignUpPage-formColumn'>
          <Col span={14}>
            <SignUpForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export { SignUpPage };
