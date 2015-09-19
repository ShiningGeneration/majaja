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
    this._onNameChange = this._onNameChange.bind(this);
    this._onDisplayNameChange = this._onDisplayNameChange.bind(this);
    this._onCompanyChange = this._onCompanyChange.bind(this);
    this._onLocationChange = this._onLocationChange.bind(this);
    this._onNewPasswordChange = this._onNewPasswordChange.bind(this);
    this._onConfirmPasswordChange = this._onConfirmPasswordChange.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);

    this.state = {
      name: '',
      displayName: '',
      company: '',
      location: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      confirmPasswordStyle: 'default',
      profileIsLoading: false,
      passwordIsLoading: false,
      emailIsLoading: false
    };
  }

  updateProfile() {
    this.setState({
      profileIsLoading: true
    });

    let state = this.state;
    let data = {
      name: state.name,
      displayName: state.displayName,
      company: state.company,
      location: state.location
    };

    this._updatePreference(data, { profileIsLoading: false });
  }

  updatePassword() {
    this.setState({
      passwordIsLoading: true
    });

    let state = this.state;
    let data = {
      oldPassword: state.oldPassword,
      newPassword: state.newPassword
    };

    this._updatePreference(data, { passwordIsLoading: false });
  }

  updateEmail() {
    this.setState({
      emailIsLoading: true
    });

    let state = this.state;
    let data = {
      email: state.email
    };

    this._updatePreference(data, { emailIsLoading: false });
  }

  componentDidMount() {
    fetch(`api/preference.json`).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        name: res.name,
        displayName: res.displayName,
        company: res.company,
        location: res.location,
        email: res.email
      });
    });
  }

  _updatePreference(data, updateState) {
    fetch(`api/updatePreference`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: 'user-token',
        data: data
      })
    }).then(res => {
      if (res.ok) {
        this.setState(updateState);
      }
    });
  }

  _onNameChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  _onDisplayNameChange(evt) {
    this.setState({
      displayName: evt.target.value
    });
  }

  _onCompanyChange(evt) {
    this.setState({
      company: evt.target.value
    });
  }

  _onLocationChange(evt) {
    this.setState({
      location: evt.target.value
    });
  }

  _onNewPasswordChange(evt) {
    let newPassword = evt.target.value;
    let confirmPassword = this.state.confirmPassword;

    this.setState({
      newPassword: newPassword
    });

    let confirmPasswordStyle =
      (confirmPassword !== '' && newPassword === confirmPassword) ?
        'success' : 'error';

    this.setState({
      confirmPasswordStyle: confirmPasswordStyle
    });
  }

  _onConfirmPasswordChange(evt) {
    let newPassword = this.state.newPassword;
    let confirmPassword = evt.target.value;

    this.setState({
      confirmPassword: confirmPassword
    });

    let confirmPasswordStyle =
      (confirmPassword !== '' && newPassword === confirmPassword) ?
        'success' : 'error';

    this.setState({
      confirmPasswordStyle: confirmPasswordStyle
    });
  }

  _onEmailChange(evt) {
    this.setState({
      email: evt.target.value
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
                <Input type='text' label='名稱'
                  value={this.state.name}
                  onChange={this._onNameChange} />
                <Input type='text' label='訂單顯示名稱'
                  value={this.state.displayName}
                  onChange={this._onDisplayNameChange} />
                <Input type='text' label='公司'
                  value={this.state.company}
                  onChange={this._onCompanyChange} />
                <Input type='text' label='地點'
                  value={this.state.location}
                  onChange={this._onLocationChange} />
                <Button
                  bsStyle='success'
                  disabled={profileIsLoading}
                  onClick={this.updateProfile}>
                    {profileIsLoading ? '更新...' : '更新'}
                </Button>
              </Panel>
              <Panel header='改變密碼' bsStyle='info'>
                <Input type='password' label='舊密碼'
                  value={this.state.oldPassword} />
                <Input
                  type='password'
                  label='新密碼'
                  value={this.state.newPassword}
                  onChange={this._onNewPasswordChange}
                  hasFeedback />
                <Input
                  type='password'
                  bsStyle={this.state.confirmPasswordStyle}
                  label='確認新密碼'
                  value={this.state.confirmPassword}
                  onChange={this._onConfirmPasswordChange}
                  hasFeedback />
                <Button
                  bsStyle='success'
                  disabled={passwordIsLoading}
                  onClick={this.updatePassword}>
                    {passwordIsLoading ? '更新...' : '更新'}
                </Button>
              </Panel>
              <Panel header='電子信箱' bsStyle='info'>
                <Input
                  type='email'
                  label='電子信箱地址'
                  value={this.state.email}
                  placeholder='uesr@example.com'
                  onChange={this._onEmailChange} />
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
