$(document).ready(function(){

        function getLocation() {
            navigator.geolocation.getCurrentPosition(function(location) {
                var lat = location.coords.latitude;
                var long = location.coords.longitude;
                $("#lat").text(lat);
                $("#long").text(long);

                var queryStr = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&sensor=false";

            });
        };
        //getLocation();

        function fToC(f) {
            var c = (f - 32) * (5/9);
            return c.toFixed(1);
        };

        $.getJSON
        
        var denverWeather = 
        $.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
			function(response){
                var faren = response.main.temp.toFixed(1);
                var cel = fToC(response.main.temp);
                var wind = response.wind.speed.toFixed(1);
                $(".jsgrid-row:first-child>td:nth-child(2)").text(faren);
                $(".jsgrid-row:first-child>td:nth-child(3)").text(cel);
                $(".jsgrid-row:first-child>td:nth-child(4)").text(wind);
                $(".jsgrid-row:first-child>td:nth-child(5)").text(response.weather[0].description);
                console.log(response);
            });

       var londonWeather = 
        $.get("http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
			function(response){
                var faren = response.main.temp.toFixed(1);
                var cel = fToC(response.main.temp);
                var wind = response.wind.speed.toFixed(1);
                $("tr:nth-child(2)>td:nth-child(2)").text(faren);
                $("tr:nth-child(2)>td:nth-child(3)").text(cel);
                $("tr:nth-child(2)>td:nth-child(4)").text(wind);
                $("tr:nth-child(2)>td:nth-child(5)").text(response.weather[0].description);
            });

        var helsinkiWeather = 
            $.get("http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
                function(response){
                    var faren = response.main.temp.toFixed(1);
                    var cel = fToC(response.main.temp);
                    var wind = response.wind.speed.toFixed(1);
                    $("tr:nth-child(3)>td:nth-child(2)").text(faren);
                    $("tr:nth-child(3)>td:nth-child(3)").text(cel);
                    $("tr:nth-child(3)>td:nth-child(4)").text(wind);
                    $("tr:nth-child(3)>td:nth-child(5)").text(response.weather[0].description);
                });

        
        var berlinWeather = 
            $.get("http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
                function(response){
                    var faren = response.main.temp.toFixed(1);
                    var cel = fToC(response.main.temp);
                    var wind = response.wind.speed.toFixed(1);
                    $("tr:nth-child(4)>td:nth-child(2)").text(faren);
                    $("tr:nth-child(4)>td:nth-child(3)").text(cel);
                    $("tr:nth-child(4)>td:nth-child(4)").text(wind);
                    $("tr:nth-child(4)>td:nth-child(5)").text(response.weather[0].description);
                });  

      
        var albertaWeather = 
            $.get("http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
                function(response){
                    var faren = response.main.temp.toFixed(1);
                    var cel = fToC(response.main.temp);
                    var wind = response.wind.speed.toFixed(1);
                    $("tr:nth-child(5)>td:nth-child(2)").text(faren);  
                    $("tr:nth-child(5)>td:nth-child(3)").text(cel);
                    $("tr:nth-child(5)>td:nth-child(4)").text(wind);
                    $("tr:nth-child(5)>td:nth-child(5)").text(response.weather[0].description);
                });   


	    $("button").click(function(){
	        var citySearch = $("#citySearch").val();
		    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&APPID=b885650de0f3affccf9d24305410338e&units=imperial", 
			function(response){ 
	            $("#reply").text(response.name);
			    $("#temp").text(response.main.temp);
	            $("#humid").text(response.main.humidity); 
                $("#wind").text(response.wind.speed);
			});  
	    });
	
        var cities = [
            { "City": "Denver", "TemperatureF": "", "TemperatureC": "", "Wind Speed": "", "Country": 1, "Married": false },
            { "City": "London", "TemperatureF": "", "TemperatureC": "", "Wind Speed": "", "Country": 3, "Married": true },
            { "City": "Helsinki", "TemperatureF": "", "TemperatureC": "", "Wind Speed": "", "Country": 4, "Married": false },
            { "City": "Berlin", "TemperatureF": "", "TemperatureC": "", "Wind Speed": "", "Country": 5, "Married": true },
            { "City": "Alberta", "TemperatureF": "", "TemperatureC": "", "Wind Speed": "", "Country": 2, "Married": false }
        ];
    
        var countries = [
            { Name: "", Id: 0 },
            { Name: "United States", Id: 1 },
            { Name: "Canada", Id: 2 },
            { Name: "United Kingdom", Id: 3 },
            { Name: "Finland", Id: 4},
            { Name: "Germany", Id: 5},
        ];
    
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "250px",
    
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
            clearFilterButton: true,
    
            data: cities,
    
            fields: [
                { name: "City", type: "text", width: 70, validate: "required", align: "center" },
                { name: "Temperature (F)", type: "number", width: 55, align: "center"  }, 
                { name: "Temperature (C)", type: "number", width: 55, align: "center" }, 
                { name: "Wind Speed", type: "number", width: 40, align: "center" },
                { name: "Weather", type: "textbox", width: 70, height: 40, align: "center" },
                { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                { type: "control"  }
            ]

        });

        $("#refreshBtn").click(function() {
            location.reload();
        });

	});
