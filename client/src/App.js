import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import Homepage from './pages/homepage/homepage';
import Footer from './pages/layouts/footer';
import UserProfile from './pages/user/UserProfile';
import Counter from './pages/Counter';
import NavigationBar from './pages/layouts/navbar';

function App() {
    return (
        <div>
            <NavigationBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/user-profile" component={UserProfile} />
                    {/* <Route exact path="/counter" component={Counter} /> Testing redux */}
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
