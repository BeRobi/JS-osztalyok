import Szemely from "./Szemely.js";

$(function () {
 const szuloElem = $(".tarolo")

  // példányosítás
  const szemely1 = new Szemely("Béla", 1965, szuloElem); //objektum
  const szemely2 = new Szemely("Jolán", 1975, szuloElem);

  console.log(szemely1);
  console.log(szemely2);
  console.log(szemely1.nev);

  szemely1.nev = "Kálmán";
  console.log(szemely1);

  szemely1.masikNev = "Géza";
  console.log(szemely1);

  //futásidőben változtathatóak az osztálypéldányok
  //console.log(szemely1.#szulNev) prviát adattagot kivűlről nem érünk el

  console.log(szemely1.getSzulNev())
  console.log(szemely1.kor())
  szemely1.setSzulNev("Vili")
  console.log(szemely1)
  //console.log(szemely1.szulNev)
});
