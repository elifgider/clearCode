class Sekil {
    renginiAyarla(renk) {
      // ...
    }
  
    olustur(alan) {
      // ...
    }
  }
  
  class Dikdortgen extends Sekil {
    constructor(genislik, yukseklik) {
      super();
      this.genislik = genislik;
      this.yukseklik = yukseklik;
    }
  
    alanHesapla() {
      return this.genislik * this.yukseklik;
    }
  }
  
  class Kare extends Sekil {
    constructor(uzunluk) {
      super();
      this.uzunluk = uzunluk;
    }
  
    alanHesapla() {
      return this.uzunluk * this.uzunluk;
    }
  }
  
  function genisSekillerOlustur(sekiller) {
    sekiller.forEach((sekil) => {
      const alan = sekil.alanHesapla();
      sekil.olustur(alan);
    });
  }
  
  const sekiller = [new Dikdortgen(4, 5), new Dikdortgen(4, 5), new Kare(5)];
  genisSekillerOlustur(sekiller);