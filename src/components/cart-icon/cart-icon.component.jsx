import React from 'react';

import './cart-icon.style.scss';

import { ReactComponent as Icon } from '../../assets/cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Icon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
