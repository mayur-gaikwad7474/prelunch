import React, {useState} from 'react'
import Notgot from '../Assets/404.png'

const Notfound = () => {

    const [email, setemail] = useState(null)
    const [name, setname] = useState(null)

    const addEmailToJoinList = () => {

    }

    return (
        <main>
            <section className="display-container" style={{ margin:0 }}>
                <h1>Never struggle with social media marketing again</h1>
                <form onSubmit={(e) => e.preventDefault()} style={{marginTop:20,padding:0}}>
                    <div>
                        <label htmlFor="email" style={{alignSelf:'flex-start'}}>Name</label>
                        <input type="txt" placeholder="your good name" onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" style={{alignSelf:'flex-start'}}>Email</label>
                        <input id="email" type="email" placeholder="your email" onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <button onClick={(e) => addEmailToJoinList()}>Join Premium Waitlist</button>
                </form>
                <img src={Notgot} alt="email-campaign" />
            </section>
        </main>
    )
}

export default Notfound
