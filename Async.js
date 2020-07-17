
class API{
    constructor(Apikey){
      this.Apikey = Apikey;
    }
    async ObtenerMondeas(){
      const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.Apikey}`;
      const uRLObtenerMondea = await fetch(url);
      const moneda =await uRLObtenerMondea.json();
      console.log(moneda);
    }
  }


function Info (){
    //Getting the Money Info
    const MoneyInfo= document.getElementById("MoneyEnter");
    var MoneyInfoValue= MoneyInfo.options[MoneyInfo.selectedIndex].value;
    console.log(MoneyInfoValue)
    //Getting the Crypto Info
    const CryptoInfo = document.getElementById("ApiReciber");
    var CryptoInfoValue = CryptoInfo.options[CryptoInfo.selectedIndex].value;
    console.log(CryptoInfoValue);
}

  const APIN= new API('ed7ef85aeff87bebdc454849219efd68b36965fc16c94477371ed763087383ec');
  APIN.ObtenerMondeas();
  