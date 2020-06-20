import React from 'react';
import logo from '../../Components/mainicons/plaid logo.svg'
import Button from '../../Components/Button/Button';
import './Login.css'
import arrow from '../../Components/mainicons/arrow-down-black1000.svg'
import ReactPlayer from 'react-player'
import FormInput from '../../Components/FormInput/FormInput'


function Login() {
    return (
        <div>
            <div>
                <nav className="nav-bar">
                    <div className="nav-left">
                        <img src= {logo} alt="plaid" />
                    </div>
                    <div className="swerve">
                    <ul className="nav-list">
                        <li className="products">
                            <span className="options">Products <div className="arrow"><img src={arrow} alt= "arrow"/></div></span>
                            <div className="products-dropdown">
                                Dropdown menu
                            </div>
                        </li>
                        <li><span className="options">Use cases <div className="arrow"><img src={arrow} alt= "arrow"/></div></span></li>
                        <li><span className="options">Docs <div className="arrow"><img src={arrow} alt= "arrow"/></div></span></li>
                        <li><span className="options">Pricing <div className="arrow"><img src={arrow} alt= "arrow"/></div></span></li>
                        <li><span className="options">About us <div className="arrow"><img src={arrow} alt= "arrow"/></div></span></li>
                    </ul>
                    </div>
                        <div className="log-link">
                            <a href="">Log in</a>
                        </div>
                        <Button text = "Get API keys" color="nav" />
                </nav>

            <footer className="footer">
                <div className="footer-content">
                <div className="footer-flex">
                    <h2 className="footer-header">Ready to get<br/>started?</h2>
                    <div className="button-flex">
                        <Button text="Get API keys" color="footer-button"/>
                        <Button text="Contact sales" color="footer-button-two"/>
                    </div>
                </div>
                <div className="grid-footer">
                    <div>
                        <div className="footer-line"></div>
                        <p className="footer-p">Products</p>
                        <p className="footer-p">Transaction</p>
                        <p className="footer-p">Auth</p>
                        <p className="footer-p">Balance</p>
                        <p className="footer-p">Identity</p>
                        <p className="footer-p">Investments</p>
                        <p className="footer-p">Assets</p>
                        <p className="footer-p">Liabilities</p>
                        <p className="footer-p">Income</p>
                        <p className="footer-p">Global coverage</p>
                    </div>
                    <div>
                    <div className="footer-line"></div>
                        <p className="footer-p">Use cases</p>
                        <p className="footer-p">Personal finances</p>
                        <p className="footer-p">Consumer payments</p>
                        <p className="footer-p">Lending</p>
                        <p className="footer-p">Banking and brokerage</p>
                        <p className="footer-p-two">Business finances</p>
                        <div className="footer-line"></div>
                        <p className="footer-p">Customer stories</p>
                        <p className="footer-p">Overview</p>
                    </div>
                    <div>
                    <div className="footer-line"></div>
                        <p className="footer-p">Docs</p>
                        <p className="footer-p">Quickstart</p>
                        <p className="footer-p">API documentation</p>
                        <p className="footer-p">Libraries</p>
                        <p className="footer-p-three">Help center</p>
                        <div className="footer-line"></div>
                        <p className="footer-p">Pricing</p>
                        <p className="footer-p">Overview</p>
                    </div>
                    <div>
                        <div className="footer-line"></div>
                        <p className="footer-p">About us</p>
                        <p className="footer-p">Company</p>
                        <p className="footer-p">Career</p>
                        <p className="footer-p">Blog</p>
                        <p className="footer-p">Contact</p>
                        <p className="footer-p">Partners</p>
                        <p className="footer-p">Press</p>
                        <p className="footer-p">Fin</p>
                        <p className="footer-p">Privacy statement</p>
                        <p className="footer-p">Security</p>
                        <p className="footer-p">Legal</p>
                        <p className="footer-p">Plaid exchange</p>
                    </div>
                </div>
            </div>
            </footer>
        </div>
        </div>
    )
}

export default Login;
