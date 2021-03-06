import React from 'react';

import './cart-icon.style.scss';

import { ReactComponent as Icon } from '../../assets/cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Icon className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
