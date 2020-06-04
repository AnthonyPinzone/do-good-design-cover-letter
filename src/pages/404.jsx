import React from "react"
import { Link } from 'gatsby';
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
    <div className="not-found">
        <Helmet title="404 | Page Not Found" />
        <h1>Where are you trying to go?</h1>
        <p>This site only has one page... so I'm not sure how you ended up here...</p>
        <p><Link to="/">Return Home</Link></p>
    </div>
)

export default NotFoundPage
