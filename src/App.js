import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snap => {
                    setCurrentUser({ ...snap.data() });
                });
            }

            setCurrentUser(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <AuthPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
