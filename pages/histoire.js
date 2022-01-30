import React from "react";
import Histoire from "../components/Histoire";
import sanityClient from "../client";
import groq from "groq";

export default function histoire(props) {
  return <Histoire {...props} />;
}

const client = sanityClient.withConfig({ apiVersion: "2021-06-07" });

histoire.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "histoire"]`),
});
