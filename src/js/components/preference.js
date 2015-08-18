import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Input from 'react-bootstrap/lib/Input';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

export default class Preference extends React.Component {

  constructor(props) {
    super(props);

    this.updateProfile = this.updateProfile.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);

    this.state = {
      profileIsLoading: false,
      passwordIsLoading: false,
      emailIsLoading: false
    };
  }

  updateProfile() {
    this.setState({
      profileIsLoading: true,
    });
  }

  updatePassword() {
    this.setState({
      passwordIsLoading: true,
    });
  }

  updateEmail() {
    this.setState({
      emailIsLoading: true,
    });
  }

  render() {
    let profileIsLoading = this.state.profileIsLoading;
    let passwordIsLoading = this.state.passwordIsLoading;
    let emailIsLoading = this.state.emailIsLoading;

    return (
      <div>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Panel header='個人資料' bsStyle='info'>
                <Input type='text' label='名稱' defaultValue='林小明' />
                <Input type='text' label='訂單顯示名稱' defaultValue='(12) 林小明' />
                <Input type='text' label='公司' />
                <Input type='text' label='地點' />
                <Button
                  bsStyle='success'
                  disabled={profileIsLoading}
                  onClick={this.updateProfile}>
                    {profileIsLoading ? '更新...' : '更新'}
                </Button>
              </Panel>
              <Panel header='改變密碼' bsStyle='info'>
                <Input type='password' label='舊密碼' />
                <Input type='password' label='新密碼' />
                <Input type='password' label='確認新密碼' />
                <Button
                  bsStyle='success'
                  disabled={passwordIsLoading}
                  onClick={this.updatePassword}>
                    {passwordIsLoading ? '更新...' : '更新'}
                </Button>
              </Panel>
              <Panel header='電子信箱' bsStyle='info'>
                <Input type='email' label='電子信箱地址'
                  placeholder='uesr@example.com' />
                <Button
                  bsStyle='success'
                  disabled={emailIsLoading}
                  onClick={this.updateEmail}>
                    {emailIsLoading ? '更新...' : '更新'}
                </Button>
              </Panel>
            </Col>
            <Col md={2} mdOffset={5}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}
