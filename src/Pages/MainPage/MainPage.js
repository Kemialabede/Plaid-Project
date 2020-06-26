import React from 'react';
import logo from '../../Components/mainicons/plaid logo.svg'
import Button from '../../Components/Button/Button';
import './MainPage.css'
import arrow from '../../Components/mainicons/arrow-down-black1000.svg'
import video1 from './homepage-hero.mp4'
import video2 from './how-it-works.mp4'
import ReactPlayer from 'react-player'
import FormInput from '../../Components/FormInput/FormInput'
import image from '../../Components/mainicons/homepage-hero-bottom.png'
import venmo from '../../Components/mainicons/venmo.png'
import betterment from '../../Components/mainicons/betterment.png'
import coinbase from '../../Components/mainicons/coinbase.png'
import americanexpress from '../../Components/mainicons/american express.png'
import acorn from '../../Components/mainicons/acorn.png'
import fanniemae from '../../Components/mainicons/fannie mae.png'
import image3 from '../../Components/mainicons/homepage-social-proof-brush-right-top.png'
import image4 from '../../Components/mainicons/homepage-social-proof-brush-left.png'
import image5 from '../../Components/mainicons/homepage-social-proof-brush-right-bottom.png'
import image6 from '../../Components/mainicons/homepage-howitworks-brushstroke-right.png'
import image7 from '../../Components/mainicons/screen1.png'
import personalfinances from '../../Components/mainicons/pf-112.png'
import consumerpayment from '../../Components/mainicons/cp-112.png'
import lending from '../../Components/mainicons/ls-112.png'
import banking from '../../Components/mainicons/bbs-112.png'
import finance from '../../Components/mainicons/bf-112.png'
import privacy from '../../Components/mainicons/privacy-homepage.png'
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
import screen from '../../Components/mainicons/screen1.png'
import stroke from '../../Components/mainicons/homepage-howitworks-brushstroke-left.png'
import twitter from '../../Components/mainicons/twitter .png'
import instagram from '../../Components/mainicons/instaagram_black.svg'

function MainPage() {
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
                            <div className="options" >Products <div className="arrow"><img className="option-image" src={arrow} alt= "arrow" /></div></div>
                            <div className="products-dropdown">
                               <div className="product-overall">
                                   <div>
                                       <h2 className="product">Products</h2>
                                       <h2 className="product-subtitle">Learn how you can<br />make the most of<br />financial data</h2>
                                       <div className="list-arrow" >
                                       <p className="product">View global coverage</p>
                                       <img src = {rightarrow} className="options-image" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "3px", marginLeft: "5px"}}/>
                                       </div>
                                   </div>
                                   <div className="product-grid">
                                       <div>
                                           <div className="product-flex">
                                               <img src={transaction} alt="transaction" />
                                               <div>
                                                   <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                       <h5 className="product-hover-subcontent">Transactions</h5>
                                                        <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                                   </div>
                                                   <p className="transaction-content">Typically 24 months of<br />categorized data</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={identity} alt="identity" />
                                               <div>
                                                   <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                   <h5 className="product-hover-subcontent">Identity</h5>
                                                   <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                                   </div>
                                                   <p>Bank account-holder<br />information</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={liabilities} alt="liabilities" />
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="product-hover-subcontent">Liabilities</h5>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}} className="svg"/>
                                               </div>
                                                   <p>Student loan and credit<br />card details</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div style= {{marginLeft:"-26px"}}>
                                           <div className="product-flex">
                                               <img src={auth} alt="auth" />
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Auth</h5>
                                               <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </div>
                                                   <p>Account and routing<br />numbers</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={investment} alt="investment"/>
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Investments</h5>
                                               <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </div>
                                                   <p>Retirement, brokerage,<br />health and education</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div style= {{marginLeft:"-29px"}}>
                                           <div className="product-flex">
                                               <img src={income} alt="income" />
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Income</h5>
                                               <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </div>
                                                   <p>Employer info and<br />depositing data.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={balance} alt="balance" />
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Balance</h5>
                                               <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </div>
                                                   <p>Real-time and historical<br />balances</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <div className="product-flex">
                                               <img src={assets} alt="assets" />
                                               <div><div className="list-arrow" whileHover = {{color: "blue"}}>
                                               <h5 className="product-hover-subcontent">Assets</h5>
                                               <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "19px", marginLeft: "5px"}}/>
                                               </div>
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
                            <div className="options">Use cases <div className="arrow"><img src={arrow} className= "option-image"alt= "arrow"/></div></div>
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
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Personal finances</h5>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={consumer} width= "60px" height="60px"/>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Consumer payments</h5>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={lend} width= "60px" height="60px"/>
                                                    <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                    <h5 className="case-hover-subcontent">Lending</h5>
                                                    <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                    </div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={brokerage} width= "60px" height="60px"/>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent">Banking and brokerage</h5>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                            <div className="usecontent">
                                                <img src={businessfinance} width= "60px" height="60px"/>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <h5 className="case-hover-subcontent"> Business finances</h5>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "3px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="docs">
                            <div className="options">Docs <div className="arrow"><img src={arrow} className="option-image" alt= "arrow"/></div></div>
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
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Quickstart</p>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "-10px", marginLeft: "5px"}}/>
                                                </div>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p>API documentation</p>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "1px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="doc-list-head">RESOURCES</h5>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p className="doc-content">Libraries</p>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "-10px", marginLeft: "5px"}}/>
                                                </div>
                                                <div className="list-arrow" whileHover = {{color: "blue"}}>
                                                <p>Help center</p>
                                                <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px",marginTop: "1px", marginLeft: "5px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pricing"><span className="options">Pricing </span></li>
                        <li className="aboutus"><div className="options">About us <div className="arrow" ><img src={arrow} className="option-image" alt= "arrow" /></div></div>
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
                                            <div className="list-arrow" >
                                                <p className="doc-content">Company</p>
                                                <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} />
                                            </div>
                                            <div className="list-arrow">
                                                <p className="doc-content">Career</p>
                                            <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} />
                                            </div>
                                            <div className="list-arrow">
                                                <p className="doc-content">Contacts</p>
                                                <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} />
                                            </div>
                                            <div className="list-arrow">
                                            <p>Partners</p>
                                            <img src = {rightarrow}  className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "5px", marginLeft: "5px"}} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                            <h5 className="doc-list-head"> HOW WE HANDLE DATA</h5>
                                            <div className="list-arrow" >
                                            <p className="doc-content">Privacy</p>
                                            <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} />
                                            </div>
                                            <div className="list-arrow" >
                                            <p className="doc-content">Security</p>
                                            <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-9px", marginLeft: "5px"}} />
                                            </div>
                                            <div className="list-arrow" >
                                            <p className="doc-content">Legal</p>
                                            <img src = {rightarrow} className="about-img" alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "-10px", marginLeft: "5px"}} />
                                            </div>
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
                        <Button text = "Get API keys" color="nav" src={rightarrow} className="form-button"/>
                        </div>
                </nav>
            </div>
            <section className= "first-grid">
                <div className="video">
                <ReactPlayer url ={video1} playing= {true}  loop= {true} width="1050px" height= "550px" />
                </div>
                <div className="second-grid">
                    <div className="homepage-line"></div>
                    <div>
                        <br />
                        <span className="span-text"><span className="new">NEW</span>Plaid launches open finance platforms for institutions. Read more</span>
                        <p className="homepage-text">The easiest way for users</p>
                        <h2 className="homepage-text-connect">to connect their bank <br />accounts to an app</h2>
                    </div>
                    <div className="homepage-form">
                    <FormInput placeholder="Your Email" type="text" size="form-input"/>
                    <Button text="Get API Keys" color="section-button" src={whitearrow}/>
                    </div>
                    <div className="homepage-bottom-text">
                        <p className="bottom-content-one">Start building with Plaid's API for free</p>
                        <span>Question? <span className="contact">Contact our sales team</span></span>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <div className="video-bottom">
                    <img src={image} alt="homepage-hero-bottom" className="vi" />
                        <div><img src={image4} alt="homepage-left" className="brush-left"/></div>
                    </div>
                    <div>
                        <div>
                            <img src={image3} alt="homepage-right-image" className="right-image"/>
                        </div>
                        <div className="right-content-text">
                            <h5 className="text2">WHO WE WORK WITH</h5>
                            <div className="grid-container">
                                <div>
                                   <img src={venmo} alt="venmo" className="icon"/>
                                </div>
                                <div>
                                    <img src={betterment} alt="betterment" className="icon-align"/>
                                </div>
                                <div>
                                    <img src={coinbase} alt="coinbase" className="icon-align-coinbase" />
                                </div>
                                <div>
                                    <img src={americanexpress} alt= "american express" className="icon"/>
                                </div>
                                <div>
                                    <img src={acorn} alt="acorn" className="icon-align"/>
                                </div>
                                <div>
                                    <img src={fanniemae} alt="fannie mae" className="icon-align-fannie"/>
                                </div>
                            </div>
                            <span className="icon-bottom-text">Plaid provides developers with the tools they need to create easy and <br /> accessible experiences fo their users, Today, tens of millions of people in <br /> North America (and counting) have succesfully connected their accounts to <br /> apps they love using Plaid.<span><Button text="Our Products" color="section-button-two" src={whitearrow}/></span> </span>
                            <div className="brush-bottom"><img src={image5} alt="homepage-bottom"/></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-three">
                <div className="section-three-content-one">
                   <h2 className="developer-header">For developers, by developers</h2>
                   <p className="developer-content">With just few lines of code you can implement<br/> Plaid in an afternoon</p>
                   <p className="developer-content">Read our API documentation</p>
                </div>
                        <span><img src={image6} alt="howitworks" className="howitworks"/>
                        <div className="form">
                            <div className="form-inner-content">
                                <pre>
                                    <code>
    <span className= "code-text"><span style = {{color: "#878787"}}>{"<"}</span><span style = {{color: "#ABFFDB"}}>form</span><span style = {{color: "#63DAFF"}}> id</span><span></span> "link-form-id"<span style = {{color: "#63DAFF"}}> method</span> <span style = {{color: "#878787"}}>=</span><span>"GET"</span><span style= {{color: "#878787"}}>{">"}</span><span style= {{color: "#878787"}}>{"<"}</span><span style= {{color: "#878787"}}>{"/"}</span><span style = {{color: "#ABFFDB"}}>form</span><span style= {{color: "#878787"}}>{">"}</span><br className="btm"/>
                                            <span className= "code-text"><span style = {{color: "#878787"}}>{"<"}</span><span style = {{color: "#ABFFDB"}}>{"script"}</span></span><br/>
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>src</span><span style = {{color: "#878787"}}>= </span><span> "https://cdn.plaid.com/link/v2/stable/link-initialize.js"</span><br />
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>data-client-name</span><span style = {{color: "#878787"}}>= </span><span style = {{color: "#878787"}}>"</span><span>Your Company's Name</span><span style = {{color: "#878787"}}>"</span><br />
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>data-form-id</span><span style = {{color: "#878787"}}>= </span><span style = {{color: "#878787"}}>"</span><span>link-form-id</span><span style = {{color: "#878787"}}>"</span><br />
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>data-key</span><span style = {{color: "#878787"}}>= </span><span style = {{color: "#878787"}}>"</span><span>test_key</span><span style = {{color: "#878787"}}>"</span><br />
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>data-product</span><span style = {{color: "#878787"}}>= </span><span style = {{color: "#878787"}}>"</span><span>transactions</span><span style = {{color: "#878787"}}>"</span><br />
                                            <span className= "code-text" style = {{color: "#63DAFF"}}>data-env</span><span style = {{color: "#878787"}}>= </span><span style = {{color: "#878787"}}>"</span><span>sandbox</span><span style = {{color: "#878787"}}>"</span><span style = {{color: "#878787"}}>{">"}</span><br />
                                            <span style = {{color: "#878787"}}>{"</"}</span><span style = {{color: "#63DAFF"}}>script</span><span style = {{color: "#878787"}}>{">"}</span>
                                        </span>
                                    </code>
                                </pre>
                            </div>
                        </div></span>
            </section>
            <section className="section-four">
                <span>
                <img src={stroke} width="100%" height="100%"/>
                <div className="video-mobile">
                <img src ={screen} style ={{position: "absolute"}}/>
                </div>
                <div className="second-video-mobile">
                <ReactPlayer url ={video2} playing= {true}  loop= {true} width="260px" height= "505px" className="mobile-video" style ={{position: "relative", left: "-6%", marginTop: "8%", marginLeft: "89px"}}/>
                </div>
                </span>
                <div className="user-exp">
                    <h2 className="user">Simple, beautiful user experience</h2>
                    <p className="user-experience">Our frontend module is easy to drop in whatever<br />your'e building and designed to optimise<br/> conversation</p>
                </div>
            </section>
            <section>
                <div>
                    <h2 className="next-section">Build the future<br />of financial services</h2>
                </div>
                <div className="grid">
                    <div className="grid-pictures">
                        <div>
                            <img src={personalfinances}  width="122px" height="122px" />
                        </div>
                        <div className="next-section-inner-text">
                            <h4 className="grid-inner-cont">Personal finances</h4>
                            <p className="inner-cont">Help users manage, budget, and<br /> make sense of their money</p>
                            <div className="list-arrow" whileHover = {{color: "blue"}}>
                            <p>Learn more</p>
                            <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "2.5px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-pictures">
                        <div>
                            <img src={consumerpayment} width="122px" height="122px"/>
                        </div>
                        <div className="next-section-inner-text">
                            <h4 className="grid-inner-cont">Consumer Payment</h4>
                            <p className="inner-cont">Help users send money and pay  bills</p>
                            <div className="list-arrow" whileHover = {{color: "blue"}}>
                            <p>Learn more</p>
                            <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "2.5px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid">
                    <div className="grid-pictures">
                        <div>
                            <img src={lending}  width="122px" height="122px" />
                        </div>
                        <div className="next-section-inner-text">
                            <h4 className="grid-inner-cont">Lending</h4>
                            <p className="inner-cont">Help consumers and businesses<br /> access capital through a streamlined<br />experience</p>
                            <div className="list-arrow" whileHover = {{color: "blue"}}>
                            <p>Learn more</p>
                            <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "2.5px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-pictures">
                        <div>
                            <img src={banking} width="122px" height="122px"/>
                        </div>
                        <div className="next-section-inner-text">
                            <h4 className="grid-inner-cont">Banking and brokerage</h4>
                            <p className="inner-cont">Help users manage their savings, <br />equity, investments, and more</p>
                            <div className="list-arrow" whileHover = {{color: "blue"}}>
                            <p>Learn more</p>
                            <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "2.5px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid">
                    <div className="grid-pictures">
                        <div>
                            <img src={finance}  width="122px" height="122px" />
                        </div>
                        <div className="next-section-inner-text">
                            <h4 className="grid-inner-cont">Business finances</h4>
                            <p className="inner-cont">Help businesses manage their<br /> expenses, paybills, do bookkeeping<br/>and send payroll</p>
                            <div className="list-arrow" whileHover = {{color: "blue"}}>
                            <p>Learn more</p>
                            <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "2.5px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-pictures">
                            <h2 className="create">What will you create?</h2>
                    </div>
                    </div>
            </section>
            <section className="privacy-content">
            <div className="privacy-overall">
                <div className="privacy-one">
                    <img src={privacy} width="60%"/>
                </div>
                <div className="privacy-two">
                    <h5 className="text2">privacy and security</h5>
                    <h2 className="privacy-header">Our commitment to<br/>consumers</h2>
                    <p className="privacy">We believe everyone has the fundamental right to<br />access the best financial technology that<br />enables them to live a healthy financial life.</p>
                    <div className="list-arrow" whileHover = {{color: "blue"}}>
                    <p>Learn more</p>
                    <img src = {rightarrow} alt="rightarrow" style = {{width: "12px", height: "10px", marginTop: "4px", marginLeft: "5px"}} whileHover={{rotateX: 80, rotateY: 80, x:7, y:0}}/>
                    </div>
                </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-content">
                <div className="footer-flex">
                    <h2 className="footer-header">Ready to get<br/>started?</h2>
                    <div className="button-flex">
                        <Button text="Get API keys" color="footer-button" src={rightarrow}/>
                        <Button text="Contact sales" color="footer-button-two" src={whitearrow}/>
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

export default MainPage;

