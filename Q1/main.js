var data1;
fetch("https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    data1 = data;
    //appendData(data);
    document
      .querySelector("body > button")
      .addEventListener("click", appendData);
  });

function appendData() {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data1.cats.length; i++) 
  {
    var div = document.createElement("div");
    div.setAttribute("class", "margin");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");

    p1.innerHTML = "name:- " + data1.cats[i].name;
    p2.innerHTML = "species:- " + data1.cats[i].species;
    p4.innerHTML = "favFoods:- " + data1.cats[i].favFoods;
    p4.innerHTML = "age:- " + data1.cats[i].age;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    mainContainer.appendChild(div);
  }
}
