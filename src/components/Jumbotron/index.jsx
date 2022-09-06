import React from "react";
//styles
import "./jumbotron.styles.scss";
import ing from '../../assets/images/ing_hand.webp'

export const Jumbotron = () => {
  return (
    <div class="jumbotron">
      <div className="jumbotron--photo">
        <img src={ing} alt="ING hand" />
      </div>
      <div className="jumbotron--text">
        <p>
          ING va arrêter son activité de banque en ligne et fermer progressivement les comptes de ses clients en 2022.
          Dans ce contexte, nous voulons accompagner au mieux nos clients vers un nouvel établissement bancaire.
          Nous avons mis au point la meilleure alternative bancaire avec Boursorama Banque, leader du marché,
          qui partage avec nous la même vision de la banque en ligne.
          Le tout en bénéficiant d’offres exclusives réservées aux clients ING.
        </p>
        <p className="strong">
          <strong>Le tout en bénéficiant d’offres exclusives réservées aux clients ING.</strong>
        </p>
      </div>

    </div>
  );
};
