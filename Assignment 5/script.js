/*
    Name: Het patel
    Student I'd: 0805024
    Assignment 5
*/

$(document).ready(function () {
   
 class ContentItem{
    Id;
    movie;
    year;
    director;

constructor(Id, movie, description, director){
        this.Id = Id;
        this.movie = movie;
        this.year = year;
        this.director = director;
        }

updateContentItem(Id, movie, year, director){
        if(this.Id == Id && movie && year && director){
            this.Id = Id;
            this.movie = movie;
         this.year = year;
            this.director = director;
            }

        }
        toString(){
        return $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.Id}">
        <h4 class="movie">${this.movie}</h4>
        <p class="year">${this.year}</p>
        <div class="director">${this.director}</div>
        </div>
         </div>`);
            }
    }
    
    let content = [
    {
        "Id": 0,
        "movie": "Iron man",
        "year": "2008 ",
        "director": "Jon Favreau"
    },
    {
        "Id": 1,
        "movie": "RRR",
        "year": "2022",
        "director": "S. S. Rajamouli"
    },
    {
        "Id": 2,
        "movie": "Bahubali",
        "year": "2017",
        "director": "S. S. Rajamouli"
    },
     {
        "Id": 3,
        "movie": "Pushpa",
        "year": "2022",
        "director": "Prashant Neel"
    },
    {
        "Id": 4,
        "movie": "Bahubali 2",
        "year": "2019",
        "director": "S. S. Rajamouli"
    }
    ];
    $.each(content, function(key, val){
      $('#content-item-list').append(`<div class="content-item-wrapper" style="border:1px solid black; margin:0px 0px 15px 0px;padding: 15px 0px 18px 17px;">
     <div id="content-item-${this.Id}">
     <h4 class="movie">${this.movie}</h4>
     <p class="year">${this.year}</p>
     <div class="director">${this.director}</div>
    </div>
    </div>`);
    });
   $('h2').empty().text("About Movies");

});


