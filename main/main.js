module.exports = function main(inputs) {
     let inputs = {distance，parkTime};
     var distance = new distance;
     var parkTime = new parkTime;
     var price=0;
     if（distance<=2）{
     price = 6+0.25*parkTime;//路程两公里以内
     }else if（distance>2&&distance<=8）{
         price = 6+(distance-2)*0.8+0.25*parkTime;
     }//路程超出两公里但小于八公里
    else if（distance>8）{
         price = 6+6*0.8+(distance-8)*0.8*0.5+0.25*parkTime;
     }//路程大于八公里
    document.write(Math.round(price) + "<br />")；
    return "price";
};
