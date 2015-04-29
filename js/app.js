//global değişkenler
var ms = 0;
var maxAday=0;
var oy = [];
var pa={};

function _clear()
{
  var p = document.getElementsByName("controlText");
  for (var k in p)
  {
    p[k].value ="";
  }
  document.getElementById("sayi").value="";
  var m = document.getElementsByName("tdChange");
  for (var t in m)
  {
    m[k].innerHTML ="0";
  }
}
function _clickMe(sayi)
{
    reset();

    maxAday = parseInt(sayi.value);
    var p = document.getElementsByName("controlText");
    for (i = 0; i<p.length; i++)
    {
      if (p[i].value==="" || p[i].disabled ===true)
        {oy[i]="0";}
      else
      {
        oy[i] = p[i].value;
      }
    }
    hesapla();
    changeText();
    _enBuyukDilimHesapla();
    _ciz();
    document.getElementById('_goHere').scrollIntoView();

}

function _enBuyukDilimHesapla()
{
  var deger =1;
  var sayac =0;
  for(i in pa)
  {
    if(deger <pa[i].secmen)
    {
      deger=pa[i].secmen;
      sayac=i;
    }
  }
  pa[sayac].exp =true;
}
function changeText()
{
  var m = document.getElementsByName("tdChange");
  for (t=0;t<m.length;t++)
  {
    m[t].innerHTML = pa[t].secmen;
  }
}
function reset()
{
  oy=[]; ms=0; maxAday=0;
  pa =
   {
     0:{adi: "A partisi", secmen:0, bolum:1, exp:false},
     1:{adi: "B partisi", secmen:0, bolum:1, exp:false},
     2:{adi: "C partisi", secmen:0, bolum:1, exp:false},
     3:{adi: "D partisi", secmen:0, bolum:1, exp:false},
     4:{adi: "E partisi", secmen:0, bolum:1, exp:false},
     5:{adi: "F partisi", secmen:0, bolum:1, exp:false},
     6:{adi: "G partisi", secmen:0, bolum:1, exp:false},
     7:{adi: "H partisi", secmen:0, bolum:1, exp:false},
     8:{adi: "I partisi", secmen:0, bolum:1, exp:false},
     9:{adi: "J partisi", secmen:0, bolum:1, exp:false}
   };
}
function hesapla()
{
  if(ms < maxAday)
  {
    n = _enBuyukBul();
    pa[n].secmen = pa[n].secmen +1;
    pa[n].bolum = pa[n].bolum+1;
    ms = ms+1;
    hesapla();
  }
}
function _enBuyukBul()
{
    var max =1;
    var bolum=1;
    var n=0;
    for(i = 0; i<oy.length;i++)
    {
      if(parseInt(max)/bolum < parseInt(oy[i])/pa[i].bolum)
      {
        max = parseInt(oy[i]);
        bolum = pa[i].bolum;
        n = i;
      }

    }
    return n;
}

function _ciz()
{
var chart = new CanvasJS.Chart("chartContainer",
{
title:{
  text: "Millet Vekili Aday Hesaplama"
},
            animationEnabled: true,
legend:{
  verticalAlign: "bottom",
  horizontalAlign: "center"
},
data: [
{
  indexLabelFontSize: 20,
  indexLabelFontFamily: "Monospace",
  indexLabelFontColor: "darkgrey",
  indexLabelLineColor: "darkgrey",
  indexLabelPlacement: "outside",
  type: "pie",
  showInLegend: true,
  toolTipContent: "{y} - <strong>#percent%</strong>",
  dataPoints:
  [
    {  y: pa[0].secmen, legendText:pa[0].adi, indexLabel: pa[0].adi, exploded: pa[0].exp},
    {  y: pa[1].secmen, legendText:pa[1].adi, indexLabel: pa[1].adi, exploded: pa[1].exp},
    {  y: pa[2].secmen, legendText:pa[2].adi, indexLabel: pa[2].adi, exploded: pa[2].exp},//exploded: true,
    {  y: pa[3].secmen, legendText:pa[3].adi, indexLabel: pa[3].adi, exploded: pa[3].exp},
    {  y: pa[4].secmen, legendText:pa[4].adi, indexLabel: pa[4].adi, exploded: pa[4].exp},
    {  y: pa[5].secmen, legendText:pa[5].adi, indexLabel: pa[5].adi, exploded: pa[5].exp},
    {  y: pa[6].secmen, legendText:pa[6].adi, indexLabel: pa[6].adi, exploded: pa[6].exp},
    {  y: pa[7].secmen, legendText:pa[7].adi, indexLabel: pa[7].adi, exploded: pa[7].exp},
    {  y: pa[8].secmen, legendText:pa[8].adi, indexLabel: pa[8].adi, exploded: pa[8].exp},
    {  y: pa[9].secmen, legendText:pa[9].adi, indexLabel: pa[9].adi, exploded: pa[9].exp}

  ]
}
]
});
chart.render();
}
function makeEnable(object)
{
  if (object.disabled===true)
  {object.disabled =false;}
  else
  {object.disabled =true;}
}
window.onload=function()
{
  reset();
  _ciz();
}