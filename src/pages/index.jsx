import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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

    return (
        <Layout>
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
