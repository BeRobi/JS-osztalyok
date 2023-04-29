class Szemely {
  #szulNev;
  constructor(nev, szulDatum, szuloElem) {
    //beállítja az adattagokat
    //a konkrét osztálypéldányra mutat a this
    // osztálypéldány=objektum
    this.nev = nev; //publikus adattag
    this.szulDatum = szulDatum;
    //this.#szulNev = nev;
    this.setSzulNev(nev);
    //HTML oldalon akarjuk megjeleníteni
    szuloElem.append(` <div class="szemely">
                        <h3>${this.nev}</h3>
                        <p>${this.kor()} éves</p>
                        </div>
    
    `);
    // kattintásra írja ki a konzolra a személy nevét
    // készítek egy adattagot a html elemhez
    this.szemelyElem=$(".szemely:last-child")//csak az utolsó html DOM elem lesz
    console.log(this.szemelyElem)
    this.szemelyElem.on("click", ()=>{
        console.log(this.nev)
        // function esetén this azt az elemet jelenti amit kiváltott
        // nyíl függvény esetén az aktuális objektumot jelenti
    })
  }
  /**privát adattagok elérése
        a tagfuggvények előtt nem kell funciton**/
  getSzulNev() {
    return this.#szulNev;
  }
  setSzulNev(nev) {
    //ellenőrzés: nagybetűvel, nem üres, legalább 3 betű stb.
    this.#szulNev = nev;
  }

  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let kor = year - this.szulDatum;
    return kor;
  }
  //get szulNev(){return this.#szulNev}
}

export default Szemely;
