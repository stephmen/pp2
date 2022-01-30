import React, { useState, useRef } from "react";
import { Text, Titre, Main } from "./History.styled.js";
import { Burger, Menu, HomeLogo } from "../../components";

export default function History() {
  return (
    <Main>
      <Text>
        <Titre>Notre Histoire</Titre>
        Neuf de ses membres sont issus de <b>L'Enfant Fort</b> (1974), libre
        regroupement qui, le samedi après midi, paradait dans les rues de
        Montréal avec tambours et trompettes, de la <b>Pouet Pouet Band</b> (1978), un
        orchestre qui intégrait à ses musiques originales le théâtre et la
        chanson, « […] d'où se dégage un goût de café noir qui fouette le
        système nerveux central. » Jean-Robert Sansfaçons, Le Temps Fou et de
         <b> Montréal Transport Limité</b> (1981), troupe de cabaret underground.
        <br></br>
        <br></br>
        Puis, comme le dit la chanson, tout le monde est reparti dans le
        tourbillon de la vie…En 1995, le désir de jouer à nouveau ensemble
        surgit de plus belle et certains d'entre eux créent <b>la fanfare Pourpour</b>.
        Au fil des ans, des jeunes musiciens et des grands noms de la scène du
        jazz d'avant- garde montréalaise se joignent à l'orchestre.
        <br />
        <br />
        <img className="PhotoMilieu" src="enfant-fort-circa-1976.jpg"></img>
        {/* <h2>Aujourd'hui</h2> */}
        Aujourd'hui, ils sont dix neuf musiciens et musiciennes à jouer une
        musique rythmée aux sonorités colorées de lyrisme, de romantisme et de
        tendresse. En témoignent ses cinq albums parus sur son étiquette
        indépendante "monsieur fauteux m'entendez-vous?" ainsi que ses nombreux
        spectacles donnés au Québec et à l'étranger (France, Suède, Mexique,
        Irlande).
        <br />
        <br />
        De 2010 à 2015, la fanfare Pourpour a offert deux activités populaires
        dans le quartier Centre-Sud de Montréal : au mois d'août, le <b>Cabaret
        sous les arbres</b> au Parc des Faubourgs, en collaboration avec <b>Soeurs
        Schmutt</b> et <b>Toxique Trottoir</b>, un rendez-vous festif en plein air, pour
        petits et grands, rassemblant une trentaine de musiciens, danseurs,
        conteurs, circassiens; et en septembre le <b>Bal de l'Avenir</b>, des ateliers
        de créations musicale et littéraire proposés à des enfants de l'<b>école
        Champlain</b> qui se concluaient par un enregistrement de disque, un
        spectacle à la maison de la culture Frontenac et une grande parade
        impliquant plusieurs écoles du quartier.
        <br />
        <br />
        <h2><b>Enregistrements</b></h2>
        <br />
        Le 26 avril 1999, pourpour le plaisir (et la postérité?), la <b>fanfare
        Pourpour</b> lance son premier disque <b>Tout le monde</b>. Direction musicale et
        arrangements Bernard Poirier, compositions en majorité signées Luc
        Proulx et Bernard Poirier.
        <br />
        <br />
        Le 22 mars 2004, la <b>fanfare Pourpour</b> lance son deuxième disque <b>Le Bal</b>,
        enregistré en novembre 2003. Direction musicale de Jean Derome,
        compositions et arrangements signés par les musiciens de la <b>fanfare
        Pourpour</b>. Ces deux disques offrent des musiques lyriques et
        cinématographiques.
        <br />
        <br />
        Le 20 mars 2007, la <b>fanfare Pourpour</b> lance son 3e album <b>Karusell Musik</b>.
        17 pièces de et avec l'accordéoniste suédois <b>Lars Hollmer</b>. Compositions
        et arrangements <b>Lars Hollmer</b>. Direction musicale et orchestration pour
        la fanfare, <b>Jean Derome</b>.
        <br />
        <br />
        Le 21 mai 2010, la fanfare Pourpour lance son 4e opus <b>Danse des
        breloques</b>. Coréalisé par Jean Derome et Nemo Venba, il propose des
        compositions de divers membres de la Pourpour. Le 22 septembre 2015, la
        fanfare Pourpour lance son 5e cd, <b>La Pourpour</b>. Réalisation de <b>Guido Del
        Fabbro</b>. 14 compositions écrites et arrangées par 11 musiciens de la
        fanfare.
        <br />
        <br />
        <h2>Filmographie</h2> <b>Confidences d'une Fanfare</b> de Richard Lavoie. Vidéo, 53
        min., 2000, Québec. Sélection officielle du Festival international de
        films francophones de Namur (Belgique 2000). 7e Art/distribution inc.,
        Daniel Bouchard Ce documentaire dresse un portrait touchant de la
        fanfare. «Confidences d'une Fanfare reste un film rare. Il saisit des
        moments de liberté et d'expression de quelques artistes guidés par le
        plaisir de la musique et de la complicité. Pour une fois que des
        créateurs se confient à d'autres qu'à leur gérant ! » Pierre Demers,
        Journal L'Itinéraire.

      
        <img className="PhotoBas" src="Montroyal.jpg"></img>
      </Text>
    </Main>
  );
}
