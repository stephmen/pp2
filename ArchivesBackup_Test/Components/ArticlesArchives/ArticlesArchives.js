import Link from "next/link";
import React, { useState, useRef } from "react";
import { ArticlesArchivesStyles } from "./ArticlesArchives.styled";

const ArticlesArchives = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  ///////////////////////////////
  //Sorting by Project/////
  const projets = props.articles.reduce((c, v) => {
    c[v.projet[0].title] = c[v.projet[0].title] || []; //Initiate if key does not exist
    c[v.projet[0].title].push(v);
    return c;
  }, {});
  /////TESTING PROJECT ARRAY/////
  console.log("Projet", projets);
  const projectEntries = Object.entries(projets);
  const projectKeys = Object.keys(projets);
  console.log("Project Array ObjectEntries: ", projectEntries);
  console.log("Project Array ObjectKeys: ", projectKeys);
  console.log("Article");
  props.articles.map((objet) => console.log(objet.title));
  console.log("Projet");
  props.articles.map((article) =>
    article.projet.map((title) => console.log(title.title))
  );
  console.log("Article Projet:", props.articles[2].projet[0].title);
  console.log("NOW");
  const sophie = projectEntries.map((x) => (x[0], x[1].map((xb) => xb.title)));
  sophie.forEach((element) => element.forEach((titre) => console.log(titre)));

  projectEntries.map(
    (x) => (
      console.log(x[0]),
      x[1].forEach((element) =>
        console.log("Slug: ", element.slug.current, "Titre: ", element.title)
      )
    )
  );

  return (
    <ArticlesArchivesStyles>
      <div className="projets">
        {projectEntries.map((x) => (
          <div className="projet">
            <div className="projetTitre">
              <span key={x[1]._id}>{x[0]}</span>
            </div>
            <div className="article">
              {x[1].map((element) => (
                <Link
                  key={element._id}
                  href="/archives/[element.slug.current]"
                  as={`/archives/${element.slug.current}`}
                >
                  <li key={element._id}>
                    <span> {element.title} </span>
                  </li>
                </Link>
              ))}
              </div>
            </div>
        ))}
         <img className="cd" src="/lesamistransparent.png" /> 
      </div>
    </ArticlesArchivesStyles>
  );
};

export default ArticlesArchives;
