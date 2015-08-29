import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value != undefined ? parseInt(this.props.value) : 0
    }

    this._increase = this._increase.bind(this);
    this._decrease = this._decrease.bind(this);
    this._update = this._update.bind(this);
  }

  _increase() {
    this.setState({
      value: this.state.value + 1
    });
  }

  _decrease() {
    this.setState({
      value: this.state.value > 0 ? this.state.value - 1 : 0
    });
  }

  _update(evt) {
    let val = evt.target.value;
    this.setState({
      value: val == "" ? 0 : parseInt(val)
    });
  }

  render() {
    let minusBtn = <Button onClick={this._decrease}><Glyphicon glyph="minus" /></Button>;
    let plusBtn = <Button onClick={this._increase}><Glyphicon glyph="plus" /></Button>;

    return (
      <Input
        type='number'
        bsSize='small'
        style={{textAlign: 'center'}}
        value={this.state.value}
        onChange={this._update}
        buttonBefore={minusBtn}
        buttonAfter={plusBtn} />
    );
  }
}

