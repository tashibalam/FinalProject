let userArray = [];


// define a constructor to create event objects
var EventObject = function (pEventName, pDate) {
  this.EventName = pEventName;
  this.EventDate = new Date(pDate).toDateString();
}

document.addEventListener("DOMContentLoaded", function () {

event0 = new EventObject("firstEvent", "2020, 2, 20");
event1 = new EventObject("secondEvent", "2020, 3, 20");
event2 = new EventObject("thirdEvent", "2020, 4, 20");

userArray.push(event0);
userArray.push(event1);
userArray.push(event2);

console.log(userArray);

$(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
 // document.getElementById("IDparmHere").innerHTML = "";
  createList();
});

});

function createList()
{
  // clear prior data
  var divUserlist = document.getElementById("divUserlist");
  while (divUserlist.firstChild) {    // remove any old data so don't get duplicates
      divUserlist.removeChild(divUserlist.firstChild);
  };

  var ul = document.createElement('ul');  
  userArray.forEach(function (element,) {   // use handy array forEach method
    var li = document.createElement('li');
    var dateString = element.EventDate;
    console.log(dateString);
    li.innerHTML = "<a data-transition='pop' class='onePlayer' data-parm=" + dateString + "  href='#page3'>Jump </a> " + element.EventName;
    console.log(element.EventDate);
    ul.appendChild(li);
  });
  divUserlist.appendChild(ul)

    // set up an event for each new li item, if user clicks any, it writes >>that<< items data-parm into the hidden html 
    var classname = document.getElementsByClassName("onePlayer");
    Array.from(classname).forEach(function (element) {
        element.addEventListener('click', function(){
            var parm = this.getAttribute("data-parm");  // passing in the record.Id
            console.log(element);
            //do something here with parameter on page 3
            document.getElementById("DateparmHere").innerHTML = parm;
            document.location.href = "index.html#page3";
        });
    });
  } ;