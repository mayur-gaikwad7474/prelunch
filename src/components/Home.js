import React from 'react'
import './Home.css'
import Home_image from '../Assets/Home.png'
import View from '../Assets/360.png'
import Logo from '../Assets/Logo.svg'
import Create from '../Assets/create.png'
import Analytics from '../Assets/analytics.png'
import Remote from '../Assets/remote.png'
import Schedule from '../Assets/schedule.png'
import Check from '../Assets/check.svg'
import Pen from '../Assets/pen.svg'
import Clock from '../Assets/clock.svg'
import Users from '../Assets/Users.svg'
import Linkedin from '../Assets/linkedin.svg'
import Twitter from '../Assets/twitter.svg'
import { NavLink } from 'react-router-dom'


const Home = (props) => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
                    <strong>Creatosaurus</strong>
                </div>
                <NavLink to={{
                    pathname: '/waitlist',
                    state: { ref: props.location.search.substring(5) }
                }}
                    className="wailist-button">
                    Join Waitlist
              </NavLink>
            </nav>

            <main>
                <section className="display-container">
                    <h1>Never struggle with social media marketing again</h1>
                    <p>Creatosaurus is an all in one social media marketing automation tool which helps you to save time & resources and gives you more time to tell amazing stories.</p>
                    <NavLink to={{
                        pathname: '/waitlist',
                        state: { ref: props.location.search.substring(5) }
                    }}
                        className="wailist-button">
                        Join Waitlist
                    </NavLink>
                    <img src={Home_image} alt="email-campaign" />
                </section>

                <section className="feature-container">
                    <h1>Stay in sync with your social media</h1>
                    <p>Know how your accounts are performing and collaborate to reach goals faster</p>
                    <div className="grid">
                        <div className="card">
                            <img src={Pen} alt="" />
                            <h3>Create, Schedule & Analyse</h3>
                            <p>Streamline and optimize your end to end social media marketing pipeline without needing of any offline interventions.</p>
                        </div>
                        <div className="card">
                            <img src={Clock} alt="" />
                            <h3>Spend Less Time Juggling</h3>
                            <p>Get rid of unproductive tools, integrations and subscriptions. Increase your team's productivity at work.</p>
                        </div>
                        <div className="card">
                            <img src={Users} alt="" />
                            <h3>Role & Permissions</h3>
                            <p>Manage your team by assigning role and permissions. Collaborate with them remotely and improve work efficiency.</p>
                        </div>
                    </div>
                </section>

                <section className="sub-features-container">
                    <h1>Features</h1>
                    <p className="info">Create graphics & videos, Schedule posts, Manage accounts, Analytics, and Remote collaboration.</p>
                    <div className="card">
                        <div>
                            <h2>Create graphics & videos</h2>
                            <p>Create beautiful template based drag & drop graphics and videos for your posts and stories in more than 10+ global languages and videos up to 4k quality.</p>
                        </div>
                        <img src={Create} alt="feature1" />
                    </div>
                    <div className="card1">
                        <img src={Schedule} alt="feature1" />
                        <div>
                            <h2>Schedule & manage account</h2>
                            <p>Directly schedule the graphics & videos created online and publish & manage your social media with real time analytics.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <h2>Analytic reports</h2>
                            <p>Know how your social media account is progressing. Take immediate action when you see anything going wrong.</p>
                        </div>
                        <img src={Analytics} alt="feature1" />
                    </div>
                    <div className="card1">
                        <img src={Remote} alt="feature1" />
                        <div>
                            <h2>Collaborate seamlessly</h2>
                            <p>Creatosaurus keeps your team in sync even when they’re spread across the globe. Assign role and permissions and collaborate in real time.</p>
                        </div>
                    </div>
                </section>


                <section className="approach-container">
                    <h1>Ready to Level up Your Social Media?</h1>
                    <p>Join the waitlist now!</p>
                    <NavLink to={{
                        pathname: '/waitlist',
                        state: { ref: props.location.search.substring(5) }
                    }}
                        className="wailist-button">
                        Join Waitlist
                   </NavLink>
                </section>

                <section className="information">
                    <img src={View} alt="info" />
                    <div className="info-container">
                        <h1>Get 360° View of Your Social Media</h1>
                        <p>Check your account’s progress from a single screen. Evaluate your social media performance and remotely collaborate with the team and increase their productivity.</p>
                        <div className="info">
                            <img className="round" src={Check} alt="" />
                            <div>
                                <h5>Create Content</h5>
                                <p>Create beautiful template based drag & drop graphics and videos for your posts and stories in more than 10 languages and videos up to 4k quality.</p>
                            </div>
                        </div>
                        <div className="info">
                            <img className="round" src={Check} alt="" />
                            <div>
                                <h5>Schedule Posts</h5>
                                <p>Directly schedule the graphics and videos created online & publish and manage your accounts with real time analytics.</p>
                            </div>
                        </div>
                        <div className="info">
                            <img className="round" src={Check} alt="" />
                            <div>
                                <h5>Remote Collaboration</h5>
                                <p>Invite team and collaborate in realtime, manage roles and permission and scale your team with ease.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="faq">
                    <h1>FAQs</h1>
                    <div className="faq-container">
                        <div>
                            <div>
                                <h3>How can this help me save time?</h3>
                                <p>With Creatosaurus, you don’t need to juggle between multiple tools,
                                integrations, subscription and avoid offline interventions thus
                                streamlining your complete social media marketing pipeline and saves
                                    your cost, efforts, time, and resources.</p>
                            </div>
                            <div>
                                <h3>How much does this cost?</h3>
                                <p>We are going to release a beta version next month. We would request you to
                                join the waitlist to get early access by giving your name and email. Friends
                                in waitlist will get first 2 months of our premium plan for free.
                                We will keep you informed about the cost and releases. Don’t worry cost
                                    is budget friendly.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Whats your vision and mission?</h3>
                                <p>Creatosaurus’s vision is to leverage AI and streamline, optimize and automate
                                the complete social media marketing pipeline with a mission to empower and
                                     uplift the citizen creators/marketers with low code/no code approach.</p>
                            </div>
                            <div>
                                <h3>What makes Creatosaurus different from other tools?</h3>
                                <p>We are building this platform for ease of team’s work and align
                                them to focus on being the most productive and always have the
                                right tools & analytics in hand. With the no code/low code
                                approach platform is very easy to use for everyone and collaborate with
                                    team at ease.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="approach-container2">
                    <h1>Stories Matter!</h1>
                    <p>Create Content. Schedule Posts. Remote Collaboration. And More…</p>
                    <NavLink to={{
                        pathname: '/waitlist',
                        state: { ref: props.location.search.substring(5) }
                    }}
                        className="wailist-button">
                        Join the Waitlist
                     </NavLink>
                </section>

            </main>

            <footer>
                <div>
                    <h4>© 2020 Creatosaurus</h4>
                    <NavLink to="/policy">Terms of Service</NavLink>
                    <NavLink to="/condition">Privacy Policy</NavLink>
                </div>
                <div>
                    <a href="https://twitter.com/creatosaurushq"><img className="social" src={Twitter} alt=""></img></a>
                    <a href="https://www.linkedin.com/company/creatosaurushq/"><img className="social" src={Linkedin} alt=""></img></a>
                </div>
            </footer>
        </div>
    )
}

export default Home
