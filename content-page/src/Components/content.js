import React, { useState, useEffect } from 'react'
// import { BsArrowRepeat } from "react-icons/bs";

const url = 'https://api.github.com/users/QuincyLarson';


const Content = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((user) => {
                const { login } = user
                setUser(login)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    })
    if (isError) {
        return (
            <div>
                {/* ERROR...(ERROR GIF, ERROR PAGE) */}
                <h1>Page Not Found</h1>
                
            </div>
        )
    }
    if (isLoading) {
        return (
            <div>
                {/* LOADING...(LOADING GIF, LOADING PAGE) */}
                <h1 className='css_only'>LOADING...</h1>
            </div>
        )
    }
    return <div>
    <h1>{user}</h1>
  </div>;
}
export default Content

