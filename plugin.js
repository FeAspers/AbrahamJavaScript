	var MyName = "Tom Winston";
		console.log("Hello from",MyName);
		console.log("What is your name?");
	var YourName = "";
		YourName = prompt ("Enter your name.");
		document.write(YourName, ", I think that is a nice name.","<br>");
		console.log(YourName, "Has this many letters", YourName.length);
		
	if (YourName == "Abraham Lincoln") {
		document.write("No it's not, you're dead,");
	}
	
	var FavoriteTeam = "";
		FavoriteTeam = prompt ("Enter your favorite team.");
	
	if (FavoriteTeam == "Tigers") {
		document.write("<br><h1>","You have good taste in teams!","</h1>");
		document.write("<br><img src='https://github.com/winstontom/AbrahamJavaScript/blob/main/images/LSU-Tiger-Head.png?raw=true' alt='tiger head' height='125px'");
	} else {
		document.write("<br>","Tigers are better.");
		document.write("<br><img src='https://github.com/winstontom/AbrahamJavaScript/blob/main/images/buttoncancel.png?raw=true' alt='button cancel' height='100px'");
	}
