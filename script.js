//array
let funThings= ["Playing chess",
                "Movies",
                "Baking",
                "Series",
                "Family parties",
                "coding",
                "youtube"];

let ul = document.createElement('ul');

document.getElementById('myList').appendChild(ul);

funThings.forEach(function(name,index) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += name;
    if(index % 2==0)
    {
        li.style.backgroundColor="lightpink";
    }else{
        li.style.backgroundColor="lightblue";
    }
    
});






