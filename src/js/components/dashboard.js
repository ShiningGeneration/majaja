import React from 'react';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="panel panel-success">
            <div className="panel-heading">已訂過的</div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">08/06 (星期四) Mon. 丁媽 虱目魚店</h4>
                <p className="list-group-item-text">香煎魚肚飯</p>
                <p className="list-group-item-text">數量：1 售價：$100</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">08/04 (星期二) Thu. 好鄉</h4>
                <p className="list-group-item-text">鮭魚飯</p>
                <p className="list-group-item-text">數量：1 售價：$80</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="panel panel-info">
            <div className="panel-heading">進行中的訂單</div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">08/09 (星期一) Mon. 漢堡王</h4>
                <p className="list-group-item-text">中午供餐</p>
                <p className="list-group-item-text">還有 33 小時 25 分鐘截止</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">08/08 (星期日) Sun. 繼光香香雞</h4>
                <p className="list-group-item-text">大哥請客</p>
                <p className="list-group-item-text">還有 10 小時 40 分鐘截止</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">08/11 (星期三) Wed. 茶湯會</h4>
                <p className="list-group-item-text">週年慶</p>
                <p className="list-group-item-text">還有 78 小時 40 分鐘截止</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="panel panel-warning">
            <div className="panel-heading">推薦店家</div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">麥當勞 信義店</h4>
                <p className="list-group-item-text">(02) 2641-1332</p>
                <p className="list-group-item-text">24 小時內皆可訂購</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">黃媽媽私房雞肉</h4>
                <p className="list-group-item-text">0952-156-156</p>
                <p className="list-group-item-text">營業時間：11:00 - 20:00</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">八方雲集 新莊區公園路</h4>
                <p className="list-group-item-text">(02) 2299-5353</p>
                <p className="list-group-item-text">10:30 前訂購</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
