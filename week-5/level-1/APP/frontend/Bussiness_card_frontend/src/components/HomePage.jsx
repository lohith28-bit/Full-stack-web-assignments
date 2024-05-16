import { Link } from "react-router-dom"
import { useRef } from "react"

function HomePage() {
    const Name_data = useRef()
    const Desc_data = useRef()
    const Interest_data = useRef()
    const LinkedIn_data = useRef()
    const Twitter_Data = useRef()
    const handleSubmit = async () => {
        await fetch('http://localhost:3000/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: Name_data.current.value,
                Description: Desc_data.current.value,
                Interest: Interest_data.current.value,
                LinkedIn: LinkedIn_data.current.value,
                Twitter: Twitter_Data.current.value
            })
        })
            .then((data) => {
                console.log("Data Uploaded successfully")
                console.log(data)
            })
    }
    return (
        <div>
            <h1>Create Your Business Card</h1>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Sohan" ref={Name_data} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea ref={Desc_data}></textarea>
                </div>
                <div>
                    <label>Interest</label>
                    <input type="text" ref={Interest_data} placeholder="Dancing" />
                </div>
                <div>
                    <label>LinkedIN</label>
                    <input type="text" ref={LinkedIn_data} placeholder="www.instagram.com" />
                </div>
                <div>
                    <label>Twitter</label>
                    <input type="text" ref={Twitter_Data} placeholder="www.twitter.com" />
                </div>
            </form>
            <Link to='/showdata'>
                <button onClick={handleSubmit}>submit</button>
            </Link>
        </div>
    )
}

export default HomePage
