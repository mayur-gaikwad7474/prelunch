import React, { useState } from 'react'
import './Waitlist.css'
import Logo from '../Assets/Logo.svg'
import Axios from 'axios'

const Waitlist = (props) => {

    const [email, setemail] = useState(null)
    const [name, setname] = useState(null)
    const [added, setadded] = useState(false)

    const addEmailToJoinList = async () => {
        try {
            if (!email) return alert("plz add email address");
            const regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
            if (!email.match(regex)) return alert("plz enter valid email address")
            //https://creatosaurus.io/joinlist/email
            const data = await Axios.post("http://localhost:4000/joinlist/email", {
                email,
                userName: name,
                ref: props.location.state.ref,
            })
            if (data.status === 200) {
                setadded(true)
            }
        } catch (error) {
            if (error.response.status === 500) return alert("This email all ready joined the waitlist")
            alert("check the connection")
        }
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
                    <strong>Creatosaurus</strong>
                </div>
                <div className="wailist-button">
                    Join Waitlist
              </div>
            </nav>
            <main>
                <section className="approach-container3">
                    <h1>300+ people waiting</h1>
                    <h5>Get access to our early beta release of creatosaurus</h5>
                </section>
                {
                    added === false ? <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email">Name</label>
                            <input type="txt" placeholder="your good name" onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="your email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <button onClick={(e) => addEmailToJoinList()}>Join Waitlist</button>
                    </form> : <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 50 }}>
                            <p>In most browsers, the placeholder text is grey</p>
                            <div>{`https://www.creatosaurus.io/?ref=${email}`}</div>
                        </div>
                }
            </main>
            <footer>
                <div>
                    <h4>© 2020 Creatosaurus</h4>
                    <a href="#id">Terms of Service</a>
                    <a href="#id">Privacy Policy</a>
                </div>
                <div>
                    <span><a href="https://www.linkedin.com/company/creatosaurushq/">twitter</a></span>
                    <span><a href="https://twitter.com/creatosaurushq">linkedin</a></span>
                </div>
            </footer>
        </div>
    )
}

export default Waitlist

