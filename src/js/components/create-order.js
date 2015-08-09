import React from 'react';
import Mui from 'material-ui';

let {
  FlatButton,
  Dialog,
} = Mui;

export default class CreateOrder extends React.Component {

  constructor(props) {
    super(props);

    this._handleCancel = this._handleCancel.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  show() {
    this.refs.createOrderDialog.show();
  }

  _handleCancel() {
    this.refs.createOrderDialog.dismiss();
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

    return (
      <div>
        <Dialog title="新增訂單"
          ref="createOrderDialog"
          actions={actions}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
            <div style={{height: '400px'}}></div>
        </Dialog>
      </div>
    );
  }

}
