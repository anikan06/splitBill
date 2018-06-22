var frnds = 0;
var totlBill;
var divtest;
var clicks = 0;
var billToPay;
var frndName = [];
var tmp_values = [];

document.getElementById('addFrnd').addEventListener("click", addBill);
document.getElementById('sav').addEventListener("click", store);

function add_fields() {
    clicks += 1;
    console.log(clicks);
    frnds++;
    var objTo = document.getElementById('add_fields');
    divtest = document.createElement("div");
    // divtest.classList.toggle("list-group-item");
    divtest.innerHTML =
            '<li class="list-group-item">'+
            '<div class="content">' +
                '<input type="text" class="form-control textbox vluh" id="frnds-'+frnds+'" name="width[]" value="" placeholder="Name of '+frnds+' friend">' +
            '</div>'+
        '</li>'+
        '<span class="remove">x</span>';

    objTo.appendChild(divtest);

};


function addBill() {

    add_fields();


    totlBill = document.getElementById("billAmt").value;
    billToPay = totlBill / clicks;
    console.log(billToPay);

    document.getElementById("billVal").innerHTML = billToPay;

}


$(document).on('click', '.remove', function(){
    clicks -= 1;
    billToPay = totlBill / clicks;
    console.log(clicks);
    var $this = $(this);
    $this.add($this.prev()).add($this.next()).remove();
    document.getElementById("billVal").innerHTML = billToPay;
});

function store() {

    // console.log("test565");
    for(i=0;i<=clicks-1;i++){
        var inputname = document.getElementsByClassName("vluh")[i];
        var t5 = inputname.value;
        console.log(t5);
        var st = frndName.push(t5);
    }

    console.log(st);
    var billamt = document.getElementById("billVal").innerHTML;

    var jsonObj = []; //declare object

        for (var l=0;l<(frndName.length);l++) {
            tmp_values.push({name: frndName[l], value: billamt}); //label + value respectively
        } //key


    localStorage.clear();
    localStorage.setItem('Data', JSON.stringify(tmp_values));
    console.log(localStorage);
}



