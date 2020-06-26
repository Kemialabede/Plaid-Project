import React from 'react';
import logo from '../../Components/mainicons/plaid logo.svg'
import Button from '../../Components/Button/Button';
import './Login.css'
import arrow from '../../Components/mainicons/arrow-down-black1000.svg'
import lady from '../../Components/mainicons/lady-login.jpg'
import FormInput from '../../Components/FormInput/FormInput'
import personalfinances from '../../Components/mainicons/pf-112.png'
import transaction from '../../Components/mainicons/icon-transactions.png'
import identity from '../../Components/mainicons/icon-identity.png'
import liabilities from '../../Components/mainicons/icon-liabilities.png'
import assets from '../../Components/mainicons/icon-assets.png'
import auth from '../../Components/mainicons/icon-auth.png'
import balance from '../../Components/mainicons/icon-balance.png'
import businessfinance from '../../Components/mainicons/icon-business-finance.png'
import consumer from '../../Components/mainicons/icon-consumer-payments.png'
import lend from '../../Components/mainicons/icon-lending-services.png'
import brokerage from '../../Components/mainicons/icon-banking-and-brokerage.png'
import investment from '../../Components/mainicons/icon-investments.png'
import income from '../../Components/mainicons/icon-income.png'
import whitearrow from '../../Components/mainicons/next.svg'
import rightarrow from '../../Components/mainicons/right.svg'
import {motion} from 'framer-motion'
import twitter from '../../Components/mainicons/twitter .png'
import instagram from '../../Components/mainicons/instaagram_black.svg'

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
                            <motion.div className="options" >Products <motion.div className="arrow" whileHover={{rotateY: -180, rotateZ: -180, x:0, y:5}}><img src={arrow} alt= "arrow" /></motion.div></motion.div>
                            <div className="products-dropdown">
                               <div className="product-overall">
                                   <div>
                                       <h2 className="product">Products</h2>
                                       <h2 className="product-subtitle">Learn how you can<br />make the most of<br />financial data</h2>
                                       <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                       <p className="product">View global coverage</p>
                                       <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "3px", marginLeft: "5px"}}/>
                                       </motion.div>
                                   </div>
                                   <div className="product-grid">
                                       <div>
                                           <div className="product-flex">
                                               <img src={transaction} alt="transaction" />
                                               <div>
                                                   <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                       <h5 className="product-hover-subcontent">Transactions</h5>
                                                        <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                                   </motion.div>
                                                   <p className="transaction-content">Typically 24 months of<br />categorized data</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={identity} alt="identity" />
                                               <div>
                                                   <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                   <h5 className="product-hover-subcontent">Identity</h5>
                                                   <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                                   </motion.div>
                                                   <p>Bank account-holder<br />information</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={liabilities} alt="liabilities" />
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="product-hover-subcontent">Liabilities</h5>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}} className="svg"/>
                                               </motion.div>
                                                   <p>Student loan and credit<br />card details</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={auth} alt="auth" />
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Auth</h5>
                                               <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </motion.div>
                                                   <p>Account and routing<br />numbers</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={investment} alt="investment"/>
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Investments</h5>
                                               <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </motion.div>
                                                   <p>Retirement, brokerage,<br />health and education</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={income} alt="income" />
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Income</h5>
                                               <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </motion.div>
                                                   <p>Employer info and<br />depositing data.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={balance} alt="balance" />
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Balance</h5>
                                               <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </motion.div>
                                                   <p>Real-time and historical<br />balances</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={assets} alt="assets" />
                                               <div><motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Assets</h5>
                                               <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </motion.div>
                                                   <p>Point-time snapshots of<br />user finances</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                                   <br />
                                   
                               </div>
                                
                            </div>
                        </li>
                        <li className="use-cases">
                            <motion.div className="options">Use cases <motion.div className="arrow" whileHover={{rotateY: -180, rotateZ: -180, x:0, y:5}}><img src={arrow} alt= "arrow"/></motion.div></motion.div>
                            <div className="usecase-dropdown">
                                <div className="usecase-flex">
                                    <div className="case-content">
                                        <h2 className="product">Use cases</h2>
                                        <p className="product-subtitle">There's so much you<br />can build with us</p>
                                    </div>
                                    <div>
                                        <div className="usecase-grid">
                                            <div className="usecontent">
                                                <img src={personalfinances}  width= "60px" height="60px"/>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Personal finances</h5>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={consumer} width= "60px" height="60px"/>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Consumer payments</h5>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={lend} width= "60px" height="60px"/>
                                                    <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                    <h5 className="case-hover-subcontent">Lending</h5>
                                                    <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                    </motion.div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={brokerage} width= "60px" height="60px"/>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Banking and brokerage</h5>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={businessfinance} width= "60px" height="60px"/>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent"> Business finances</h5>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="docs">
                            <motion.div className="options">Docs <motion.div className="arrow" whileHover={{rotateY: -180, rotateZ: -180, x:0, y:5}}><img src={arrow} alt= "arrow"/></motion.div></motion.div>
                            <div className="docs-dropdown">
                                <div>
                                    <div className="docs-flex">
                                        <div>
                                           <h2 className="doc-title">Docs</h2>
                                           <h2 className="doc-subtitle">Everything you need to<br />integrate with Plaid and learn<br />about our APIs</h2>
                                        </div>
                                        <div className="docs-grid">
                                            <div>
                                                <h5 className="doc-list-head">GET STARTED</h5>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Quickstart</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "-10px", marginLeft: "5px"}}/>
                                                </motion.div>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p>API documentation</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "1px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                            <div>
                                                <h5 className="doc-list-head">RESOURCES</h5>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Libraries</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "-10px", marginLeft: "5px"}}/>
                                                </motion.div>
                                                <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p>Help center</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "1px", marginLeft: "5px"}}/>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pricing"><span className="options">Pricing </span></li>
                        <li className="aboutus"><motion.div className="options">About us <motion.div className="arrow" whileHover={{rotateY: -180, rotateZ: -180, x:0, y:5}}><img src={arrow} alt= "arrow" /></motion.div></motion.div>
                        <div className="aboutus-dropdown">
                            <div>
                                <div className="aboutus-overall">
                                    <div>
                                        <h2 className="doc-title">About us</h2>
                                        <p className="doc-subtitle">Get to know the people behind<br />the code and the mission<br />behind the work</p>
                                    </div>
                                    <div className="aboutus-grid">
                                        <div>
                                            <h5 className="doc-list-head">WHO WE ARE</h5>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Company</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} whileHover={{ x:7, color: "blue"}} />
                                            </motion.div>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Career</p>
                                            <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}}/>
                                            </motion.div>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Contacts</p>
                                                <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}}/>
                                            </motion.div>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                            <p>Partners</p>
                                            <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "5px", marginLeft: "5px"}}/>
                                            </motion.div>
                                        </div>
                                        <div>
                                            <div>
                                            <h5 className="doc-list-head"> HOW WE HANDLE DATA</h5>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                            <p className="doc-content">Privacy</p>
                                            <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}}/>
                                            </motion.div>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                            <p className="doc-content">Security</p>
                                            <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}}/>
                                            </motion.div>
                                            <motion.div className="list-arrow" whileHover = {{color: "blue"}}>
                                            <p className="doc-content">Legal</p>
                                            <motion.img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-10px", marginLeft: "5px"}}/>
                                            </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="butn">
                        <div className="log-link">
                            <a href="/login">Log in</a>
                        </div>
                        <Button text = "Get API keys" color="nav" src={rightarrow}/>
                        </div>
                </nav>
            </div>
            <section className= "login-grid">
                <div>
                    <div className= "login-form">
                        <h2 className="log-header">Welcome back</h2>
                        <p className="log-p">Need an account <span>Signup</span></p>
                        <FormInput size="login" finput="log-input" placeholder="Email"/>
                        <FormInput size="login" finput="log-input" placeholder="Password"/>
                        <Button  text="Sign in" color="log" src={rightarrow}/>
                        <p className="reset">Reset password</p>
                    </div>
                </div>
                
                <div className="login-image">
                    <img src={lady}/>
                </div>
            </section>
 
            <footer className="footer">
                <div className="footer-item">
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
                <div className="signed">
                <div footer-icons>
                    <img src={twitter} width="40px"/>
                    <img src={instagram} width="40px"/>
                </div>
                <div>
                    <span className="plaidinc">
                        <br />
                        @ 2020 Plaid Inc
                    </span>
                </div>
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Login;
