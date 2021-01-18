import React, { Component } from 'react';
class Prices extends Component {
    state = {
        currency: 'GBP'
    }
    render() {
        let list = '';
        if ( this.state.currency === 'USD' )
            list = (
                <li className="list-group-item">
                BitCoin rate for {this.props.bpi.USD.description} :
                <span className="badge badge-success mx-1">{this.props.bpi.USD.code}</span> 
                <strong>{this.props.bpi.USD.rate}</strong></li>
            );
        else if (this.state.currency === 'GBP')
            list = (
                <li className="list-group-item">
                BitCoin rate for {this.props.bpi.GBP.description} :
                <span className="badge badge-success mx-1">{this.props.bpi.GBP.code}</span> 
                <strong>{this.props.bpi.GBP.rate}</strong></li>
            );
            else if ( this.state.currency === 'EUR' )
            list = (
                <li className="list-group-item">
                BitCoin rate for {this.props.bpi.EUR.description} :
                <span className="badge badge-success mx-1">{this.props.bpi.EUR.code}</span> 
                <strong>{this.props.bpi.EUR.rate}</strong></li>
            );
        return(
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br />
                <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Prices;