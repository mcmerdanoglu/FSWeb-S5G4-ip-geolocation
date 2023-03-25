//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

//1

//index.htmle <script src="https://unpkg.com/axios/dist/axios.min.js"></script> tagı eklenince DevToolsda bilgiler geliyor

axios
  .get("https://apis.ergineer.com/ipgeoapi/88.227.80.20")
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("başarısız", error);
  });

//2
/* 

	"sorgu": 
    "durum": 
    "kıta": 
    "ülke": 
    "ülkeKodu": 
    "ülkebayrağı": "https://apis.ergineer.com/ulkebayraklari/TR",
    "bölge": "06",
    "bölgeAdı": "Ankara",
    "şehir": "Ankara",
    "zip":
    "enlem": 
    "boylam": 
    "saatdilimi": "Europe/Istanbul",
    "parabirimi": "TRY",
    "isp": 
    "organizasyon": 
    "as": "

	*/

//3

function ipHunter(myData) {
  //4
  const cardsDiv = document.getElementsByClassName("cards")[0];

  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = myData["ülkebayrağı"];
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  const cardH3 = document.createElement("h3");
  cardH3.classList.add("ip");
  cardH3.textContent = myData.sorgu;

  const cardP = [];
  for (let i = 0; i <= 5; i++) {
    const newP = document.createElement("p");
    cardP.push(newP);
  }
  cardP[0].classList.add("ulke");
  cardP[0].textContent = myData[("ülke", "ülkeKodu")];
  cardP[1].textContent = `Enlem: ${myData.enlem} Boylam: ${myData.boylam}`;
  cardP[2].textContent = `Şehir: ${myData["şehir"]}`;
  cardP[3].textContent = `Saat dilimi:${myData.saatdilimi}`;
  cardP[4].textContent = `Para birimi:${myData.parabirimi}`;
  cardP[5].textContent = `ISP:${myData.isp}`;

  p1.textContent = `Enlem: {${data.enlem}} Boylam: {${data.boylam}}`;
  p2.textContent = `Şehir: {${data.bölgeAdı}}`;
  p3.textContent = "Saat dilimi: " + data.saatdilimi;
  p4.textContent = `Para birimi: {${data.parabirimi}}`;
  p5.textContent = `ISP: {${data.isp}}`;

  cardInfo.appendChild(cardH3);
  cardInfo.appendChild(cardP);
  card.appendChild(image);
  card.appendChild(cardInfo);

  cardsDiv.appendChild(card);
}

ipHunter(myData);
/*
axios
  .get("https://apis.ergineer.com/ipadresim")
  .then((response) => {
    const dinamikIP = response.data;
    dinamikIP.map(ipHunter);
  })
  .catch((error) => {
    console.log("başarısız", error);
  });
*/

async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
