import React, {Component} from 'react';
import LoadingComponentUtils from './components/common/LoadingComponentUtils';
import {Route,BrowserRouter,Switch} from 'react-router-dom';


//商品列表
const Products = LoadingComponentUtils({loader: () => import('./routers/Products/Products')})
//购物订单
const Order = LoadingComponentUtils({loader: () => import('./routers/Order/Order')})
//商品详情
const ProductDetail = LoadingComponentUtils({loader: () => import('./routers/ProductDetail/ProductDetail')})
//选择收货地址
const ShoppingAddress = LoadingComponentUtils({loader: () => import('./routers/ShoppingAddress/ShoppingAddress')})
//编辑收货地址
const EditorAddress = LoadingComponentUtils({loader: () => import('./routers/EditorAddress/EditorAddress')})
//修改收货地址
const ChangeAddress = LoadingComponentUtils({loader: () => import('./routers/ChangeAddress/ChangeAddress')})
//购物认证成功
const SuccessVerify = LoadingComponentUtils({loader: () => import('./routers/SuccessVerify/SuccessVerify')})

const Equity = LoadingComponentUtils({loader: () => import('./routers/Equity/Equity')});
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            {/* <Route exact path='/products' component={Products} />
            <Route exact path='/products/:id' component={ProductDetail}/>
            <Route exact path='/order' component={Order} />
            <Route exact path='/shoppingaddress' component={ShoppingAddress} />
            <Route exact path='/editoraddress' component={EditorAddress} />
            <Route  exact path='/changeaddress' component={ChangeAddress} />
            <Route exact path='/successverify' component={SuccessVerify} /> */}
            <Route exact path='/equity' component={Equity} />
        </Switch>
      </BrowserRouter>
    );
  }
}
