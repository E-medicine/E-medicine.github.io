function suggested(){
    var name = new Array();
    name[0] = "Anmesha Sahoo";
    name[1] = "Milan";
    name[2] = "Suman Paul";
    name[3] = "Manmit Singh";
    name[4] = "Tanujit Roy";
    name[5] = "Chinmaya";
    name[6] = "Akshay kumar";
    name[7] = "Abhishek Kumar";
    name[8] = "Lomad";
    name[9] = "Adarsh Sahoo";
    name[10] = "Bimla Rani Patro";
    name[11] = "Swaraj Kumar Swain";

    var point = new Array();

    point[0] = "Contact with the nearest medicine store so that they can check for the availability and inform the customer directly.";
    point[1] = "Use django-oscar framework for making website and deploying it by heroku wil be nice.";
    point[2] = "Try to get local demographics alongside working on the application. But otherwise keep up the good work.";
    point[3] = "Great initiative and great idea. Although i see this idea in many areas like when I'm in bnglore and in Delhi but when I'm home, Dhanbad.. service like this is not available in small areas.";
    point[4] = "My idea is that we will be developing a system through which we will deliver the medicines to the peoples from the local shop."+ 
    "And the logic will be: </br>First of all the user will register through our application.Then he will be able to see the nearby shops from where he/she can buy the medicines.In this the user will select the particular medicines he/she needs and then upload a prescription for a reference and can place order.";
    point[5] = "A popular app is already there, \"1mg\", I would like to have booking of doctors appointment though the app.";
    point[6] = "We will make a android application that will provide user list of medicine shop within radius of 5 km and allow them to order from that store.we can also give them virtual doctor assistance for knowing which medicine they need to buy for that particular disease and also blog about medical problems."
    point[7] = "First get the layout structure done.";
    point[8] = "Android Project like a Delivery App , Divide the sections and use case programs to selected teams for unit development.We should consider the fact that some medicines are available without prescription , so we should utilize that facility."
    point[9] = "1.There must be no Return Policy for Medicines.</br>"+
    "2. Data Mining to Implemented for Frequent Bought Items to increase our selling.</br>"+
    "3. We can Add up some doctors who can consult with the patients via an online process.</br>"+
    "4. Should first think about the Logistics part as they will be the one who will be delivery the medicines.</br>"+
    "5. This is a good idea, but can also think of some other alternate innovative ideas to boom out in any other field of business.";
    point[10] = "This is great, but my suggestion would be to make a plasma donation app along with this where covid recoveries can sign up and voluntarily donate plasma. Thats the need of the hour."
    point[11] = "There should be a button where it works like one to many communication. When the user click on the button, user's GPS location details are accessed by linking to Google Maps. The app then sends it to a previously set contact list/near medical via SMS or email or it should be connected with at least user's 3 close contact i.e nearby location who can reach out in the moment of emergency.App should be available in many languages so that user can change the language while travelling to foreign locations.";

    var result = "";

    for( var i = 0 ; i<name.length ; i++){

        result += '<h2 id="SuggestName">'+name[i]+'</h2><hr><p id="SuggestPoint">'+point[i]+'</p></br>';
    }
    document.getElementById("suggestion").innerHTML = result;
}