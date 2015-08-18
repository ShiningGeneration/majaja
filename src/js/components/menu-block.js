import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';

export default class MenuBlock extends React.Component {

  constructor(props) {
    super(props);
	}

  render() {
		var style = {
			toolbar: {
				display: "inline-block",
				float: "right"
			},
			Button: {
				margin: "0 5px",
				float: "left"
			},
			input: {
				float: "left",
				display: "inline-block"
			},
			listItem: {
				overflow: "hidden"
			}
		};

		return (
				<div>
					<Panel header="找好茶">
						<Table responsive>
							<col style={{width: "35%"}} />
							<col style={{width: "15%"}} />
							<col style={{width: "25%"}} />
							<col style={{width: "25%"}} />
							<thead>
								<tr>
									<td>品項</td>
									<td>選項</td>
									<td>數量</td>
									<td>備註</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><h4>茉莉綠茶</h4></td>
									<td></td>
									<td>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>-</Button>
										<Col style={{width: "50%", float: "left"}}>
											<Input type="number" bsSize="small"/>
										</Col>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>+</Button>
									</td>
									<td>
										<Input type="text" placeholder="備註" />
									</td>
								</tr>
								<tr>
									<td><h4>阿薩姆紅茶</h4></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td><h5>M</h5></td>
									<td>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>-</Button>
										<Col style={{width: "50%", float: "left"}}>
											<Input type="number" bsSize="small"/>
										</Col>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>+</Button>
									</td>
									<td>
										<Input type="text" placeholder="備註" />
									</td>
								</tr>
								<tr>
									<td></td>
									<td><h5>L</h5></td>
									<td>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>-</Button>
										<Col style={{width: "50%", float: "left"}}>
											<Input type="number" bsSize="small"/>
										</Col>
										<Button style={style.Button} bsStyle='primary' bsSize='small'>+</Button>
									</td>
									<td>
										<Input type="text" placeholder="備註" />
									</td>
								</tr>
							</tbody>
						</Table>
					</Panel>
				</div>
		);
	}
}

