import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

export default class Dashboard extends React.Component {

  render() {
    return (
      <Row>
        <Col md={4}>
          <Panel header={'已訂過的'} bsStyle='success'>
            <ListGroup fill>
              <ListGroupItem
                href="#"
                header="08/06 (星期四) Mon. 丁媽 虱目魚店">
                  香煎魚肚飯<br />
                  數量：1 售價：$100
              </ListGroupItem>
              <ListGroupItem
                href="#"
                header="08/04 (星期二) Thu. 好鄉">
                  鮭魚飯<br />
                  數量：1 售價：$80
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>
        <Col md={4}>
          <Panel header={'進行中的訂單'} bsStyle='info'>
            <ListGroup fill>
              <ListGroupItem
                href="#"
                header="08/09 (星期一) Mon. 漢堡王">
                  中午供餐<br />
                  還有 33 小時 25 分鐘截止
              </ListGroupItem>
              <ListGroupItem
                href="#"
                header="08/08 (星期日) Sun. 繼光香香雞">
                  大哥請客<br />
                  還有 10 小時 40 分鐘截止
              </ListGroupItem>
              <ListGroupItem
                href="#"
                header="08/11 (星期三) Wed. 茶湯會">
                  週年慶<br />
                  還有 78 小時 40 分鐘截止
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>
        <Col md={4}>
          <Panel header={'推薦店家'} bsStyle='warning'>
            <ListGroup fill>
              <ListGroupItem
                href="#"
                header="麥當勞 信義店">
                  (02) 2641-1332<br />
                  24 小時內皆可訂購
              </ListGroupItem>
              <ListGroupItem
                href="#"
                header="黃媽媽私房雞肉">
                  0952-156-156<br />
                  營業時間：11:00 - 20:00
              </ListGroupItem>
              <ListGroupItem
                href="#"
                header="八方雲集 新莊區公園路">
                  (02) 2299-5353<br />
                  10:30 前訂購
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    );
  }

}
