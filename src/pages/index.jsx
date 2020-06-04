import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import CandidateQuestionAnswer from "../components/CandidateQuestionAnswer";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___id]}) {
                edges {
                    node {
                        frontmatter { id, question }
                        html
                    }
                }
            }
        }      
    `);

    const { title, author } = useSiteMetadata()

    return (
        <Layout>
            <Helmet title={title} titleTemplate={`${title} by ${author}`} />
            {data.allMarkdownRemark.edges.map(qna => (
                <CandidateQuestionAnswer
                    key={qna.node.frontmatter.id}
                    id={`question-${qna.node.frontmatter.id}`}
                    question={qna.node.frontmatter.question}
                    answer={qna.node.html}
                />
            ))}
        </Layout >
    )
};



export default IndexPage
