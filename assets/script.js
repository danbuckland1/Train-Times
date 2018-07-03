var config = {
    apiKey: "AIzaSyCvjEZs4OOXdPjXAzF5D7NVGKUdbyolO4w",
    authDomain: "train-times-c9fcd.firebaseapp.com",
    databaseURL: "https://train-times-c9fcd.firebaseio.com",
    projectId: "train-times-c9fcd",
    storageBucket: "",
    messagingSenderId: "130335688686"
  };
  firebase.initializeApp(config);


  var database = firebase.database();


  $("#add-train").on("click", function(event){
      event.preventDefault();

     var trainName = $("#train-name").val().trim();
     var trainDestination = $("#train-destination").val().trim();
     var firstTrainTime = $("#first-train").val().trim();
     var trainFrequency = $("#train-frequency").val().trim();

      var newTrain = {
        train: trainName,
        destination: trainDestination,
        firstTime: firstTrainTime,
        frequency: trainFrequency

      };

      database.ref().push(newTrain);

      console.log(newTrain.train);
      console.log(newTrain.destination);
      console.log(newTrain.firstTime);
      console.log(newTrain.frequency);


    $("#train-name").val("");
    $("#train-destination").val("");
    $("#first-train").val("");
    $("#train-frequency").val("");

  });

  database.ref().on("child_added", function(childSnapShot){
    console.log(childSnapShot.val());

    var newTrain = childSnapShot.val().train;
    var newDestination = childSnapShot.val().destination;
    var newFirstTrain = childSnapShot.val().firstTime;
    var newFrequency = childSnapShot.val().frequency;

    console.log(newTrain);
    console.log(newDestination);
    console.log(newFirstTrain);
    console.log(newFrequency);
  })

  

  




   // var currentDate = moment();
  // console.log(currentDate.format("MM/DD/YYYY hh:mm a"));

    
