import React from 'react';
import Mui from 'material-ui';

let {
  FlatButton,
  DatePicker,
  Dialog,
  TextField,
  TimePicker
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
        label="訂購"
        primary={true}
        onTouchTap={this._handleSubmit} />
    ];

    return (
      <div>
        <Dialog title={`開始訂購 ${this.props.storeName}`}
          ref="createOrderDialog"
          actions={actions}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>
            <div className="dialog">
              <DatePicker hintText="截止日期" mode="landscape"/>
              <TimePicker hintText="截止時間" format="ampm" />
              <TextField style={{ 'text-align': 'left' }}
                floatingLabelText="公告事項"
                multiLine={true} />
            </div>
        </Dialog>
      </div>
    );
  }

}
