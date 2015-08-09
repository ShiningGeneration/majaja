import React from 'react';
import Mui from 'material-ui';

let {
  Checkbox,
  FlatButton,
  Dialog,
  RaisedButton,
  TextField
} = Mui;

export default class CreateStore extends React.Component {

  constructor(props) {
    super(props);

    this._handleCancel = this._handleCancel.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  show() {
    this.refs.createStoreDialog.show();
  }

  _handleCancel() {
    this.refs.createStoreDialog.dismiss();
  }

  _handleSubmit() {

  }

  render() {
    let actions = [
      <FlatButton
        key={1}
        label="取消"
        secondary={true}
        onTouchTap={this._handleCancel} />,
      <FlatButton
        key={2}
        label="新增"
        primary={true}
        onTouchTap={this._handleSubmit} />
    ];

    let styles = {
      imageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        width: '100%',
        opacity: '0'
      },
      typesCheckbox: {
      }
    };

    return (
      <div className="container">
        <Dialog
          ref="createStoreDialog"
          title="新增店家資訊"
          actions={actions}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
            <div className="dialog">
              <div className="label">基本資料</div>
              <TextField floatingLabelText="名稱" /><br />
              <TextField floatingLabelText="簡介" /><br />
              <TextField floatingLabelText="電話" /><br />
              <TextField floatingLabelText="地址" /><br />
              <TextField floatingLabelText="網址" /><br />
              <TextField style={{ 'text-align': 'left' }}
                floatingLabelText="訂購說明"
                multiLine={true} /><br />
              <div className="">
                <div className="label">服務種類</div>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="bendon"
                  value="bednon"
                  label="便當"/>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="noodle"
                  value="noodle"
                  label="麵食"/>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="vegetarian"
                  value="vegetarian"
                  label="素食"/>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="drink"
                  value="drink"
                  label="飲料"/>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="cold"
                  value="cold"
                  label="冰品"/>
                <Checkbox
                  style={styles.typesCheckbox}
                  name="snack"
                  value="snack"
                  label="小吃"/>
              </div>
              <div className="label">圖片上傳</div>
              <RaisedButton primary={true} label="選擇上傳圖片">
                <input type="file" style={styles.imageInput}></input>
              </RaisedButton>
            </div>
        </Dialog>
      </div>
    );
  }

}
