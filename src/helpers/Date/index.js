export const MONTHS = {
  // le tableau des mois commence a zero donc janvier est a l'index 0 ce qui regle le bug d'affichage du mois dans le slider
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];
