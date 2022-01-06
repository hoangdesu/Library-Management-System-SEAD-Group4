import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import Homepage from './pages/homepage/homepage';
import Navbar from './pages/layouts/navbar';
import Footer from './pages/layouts/footer';

function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/homepage" component={Homepage} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
