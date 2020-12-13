import React, { useState } from 'react'
import './Waitlist.css'
import Axios from 'axios'

const Waitlist = () => {

    const [email, setemail] = useState(null)
    const [count, setcount] = useState(358)

    const addEmailToJoinList = async () => {
        try {
            if (!email) return alert("plz add email address");
            const regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
            if (!email.match(regex)) return alert("plz enter valid email address")
            const data = await Axios.post("http://localhost:4000/email", {
                email
            })
            if (data.status === 200) {
                setcount((prev) => prev + 1)
                alert("You haved successfully joined the waitlist")
            }
        } catch (error) {
            alert("This email all ready joined the waitlist")
        }
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <h4>Logo</h4>
                    <strong>Creatosaurus</strong>
                </div>
                <div className="wailist-button">
                    Join Waitlist
              </div>
            </nav>
            <main>
                <section className="approach-container3">
                    <h1>{count} + people waiting</h1>
                    <h1>Join Waitlist</h1>
                    <h5>Get access to our early beta release of creatosaurus</h5>
                </section>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="your@work.email" onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <button onClick={(e) => addEmailToJoinList()}>Join Waitlist</button>
                </form>
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

export default Waitlist

