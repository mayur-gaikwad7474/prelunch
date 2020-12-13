import React from 'react'
import './Home.css'
import Email_Campain from '../Assets/Email_Campain.svg'
import Os from '../Assets/os.svg'
import {NavLink} from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h4>Logo</h4>
                    <strong>Creatosaurus</strong>
                </div>
                <NavLink to="/waitlist" className="wailist-button">
                    Join Waitlist
              </NavLink>
            </nav>

            <main>
                <section className="display-container">
                    <h1>Never struggle with remote team management</h1>
                    <p>undiffer keeps your team focused on their daily goals, reduce unimportant meetings and stay productive.</p>
                    <NavLink to='/waitlist' className="wailist-button">
                        Join Waitlist
                    </NavLink>
                    <img src={Email_Campain} alt="email-campaign" />
                </section>

                <section className="feature-container">
                    <h1>Stay in sync with your remote team</h1>
                    <h5>Know what your team is working on and help them reach their goals faster</h5>
                    <div className="grid">
                        <div className="card">
                            <div></div>
                            <h3>Manage Remote Teams efficiently</h3>
                            <p>Always keep a pulse on your remote team. Stay up to date with their work and help them wherever required.</p>
                        </div>
                        <div className="card">
                            <div></div>
                            <h3>Manage Remote Teams efficiently</h3>
                            <p>Always keep a pulse on your remote team. Stay up to date with their work and help them wherever required.</p>
                        </div>
                        <div className="card">
                            <div></div>
                            <h3>Manage Remote Teams efficiently</h3>
                            <p>Always keep a pulse on your remote team. Stay up to date with their work and help them wherever required.</p>
                        </div>
                    </div>
                </section>

                <section className="sub-features-container">
                    <h1>Features</h1>
                    <p className="info">Automate communication & Manage Planning, Progress, Problems, and Solutions</p>
                    <div className="card">
                        <div>
                            <h2>Daily Team Check-in</h2>
                            <p>Keep track of every team member. Quickly understand Team's top priorities and what everyone is working on.</p>
                        </div>
                        <img src={Os} alt="feature1" />
                    </div>
                    <div className="card1">
                        <img src={Os} alt="feature1" />
                        <div>
                            <h2>Daily Team Check-in</h2>
                            <p>Keep track of every team member. Quickly understand Team's top priorities and what everyone is working on.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <h2>Daily Team Check-in</h2>
                            <p>Keep track of every team member. Quickly understand Team's top priorities and what everyone is working on.</p>
                        </div>
                        <img src={Os} alt="feature1" />
                    </div>
                    <div className="card1">
                        <img src={Os} alt="feature1" />
                        <div>
                            <h2>Daily Team Check-in</h2>
                            <p>Keep track of every team member. Quickly understand Team's top priorities and what everyone is working on.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <h2>Daily Team Check-in</h2>
                            <p>Keep track of every team member. Quickly understand Team's top priorities and what everyone is working on.</p>
                        </div>
                        <img src={Os} alt="feature1" />
                    </div>
                </section>


                <section className="approach-container">
                    <h1>Ready to Improve Team's Productivity?</h1>
                    <h4>Join the waitlist now!</h4>
                    <NavLink to="/waitlist" className="wailist-button">
                        Join Waitlist
                   </NavLink>
                </section>

                <section className="information">
                    <img src={Os} alt="info" />
                    <div className="info-container">
                        <h1>Get 360° View of your team</h1>
                        <h4>Check your team progress from single screen. Evaluate your team's performance and help them increse their productivity.</h4>
                        <div className="info">
                            <div className="round" />
                            <div>
                                <h5>Automated Notifications</h5>
                                <p>Notify via email about holidays, leaves, and pending check-ins and take necessary action to resolve it.</p>
                            </div>
                        </div>
                        <div className="info">
                            <div className="round" />
                            <div>
                                <h5>Automated Notifications</h5>
                                <p>Notify via email about holidays, leaves, and pending check-ins and take necessary action to resolve it.</p>
                            </div>
                        </div>
                        <div className="info">
                            <div className="round" />
                            <div>
                                <h5>Automated Notifications</h5>
                                <p>Notify via email about holidays, leaves, and pending check-ins and take necessary action to resolve it.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="faq">
                    <h1>FAQs</h1>
                    <div className="faq-container">
                        <div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                            <div>
                                <h3>What are Daily Goals?</h3>
                                <p>Daily Goals are the important tasks that you want to accomplish that day.
                                All team members create their daily goals which are visible to relevant people
                                so you don’t have to connect for status updates.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="approach-container2">
                     <h1>Ready to get started?</h1>
                     <p>Daily Check-in. Daily Goals. Blockers. And More..</p>
                     <NavLink to="/waitlist" className="wailist-button">
                         Join the Waitlist
                     </NavLink>
                </section>

            </main>

            <footer>
                <div>
                  <h4>© 2020 undiffer</h4>
                  <a href="#id">Terms of Service</a>
                  <a href="#id">Privacy Policy</a>
                </div>
                <div>
                 <span>twitter</span>
                 <span>linkedin</span>
                 <span>facebook</span>
                </div>
            </footer>

        </div>
    )
}

export default Home
