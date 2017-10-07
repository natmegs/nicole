import React from "react"
import Link from "gatsby-link"

export default () =>
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about/">Bio</Link>
        <Link to='/work/'>More Work</Link>
    </div>