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
     var firstTrainTime = moment($("#first-train").val().trim(), "HH:mm").format("X");
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

  // database.ref().on("child_added", function(childSnapShot){
  //   console.log(childSnapShot.val());

  //   var trainName = childSnapShot.val().train;
  //   var destination = childSnapShot.val().trainDestination;
  //   var firstTime = childSnapShot.val().firstTrainTime;
  //   var frequency = childSnapShot.val().trainFrequency;

  //   conosole.log(trainName);
  //   conosole.log(destination);
  //   conosole.log(firstTime);
  //   conosole.log(frequency);



  // });

  // var currentDate = moment();
  // console.log(currentDate.format("MM/DD/YYYY hh:mm a"));
  

