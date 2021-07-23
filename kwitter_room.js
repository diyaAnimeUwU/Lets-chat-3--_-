var firebaseConfig = {
      apiKey: "AIzaSyAIqzMPsYEwVfle-KTDqX5JDT3AaXuYRFw",
      authDomain: "kwittwe.firebaseapp.com",
      databaseURL: "https://kwittwe-default-rtdb.firebaseio.com",
      projectId: "kwittwe",
      storageBucket: "kwittwe.appspot.com",
      messagingSenderId: "408746225479",
      appId: "1:408746225479:web:3dd8e637ce938ffc6e6662",
      measurementId: "G-F5F5WM6Y1Q"
    };
    
    firebase.initializeApp(firebaseConfig);
    
        user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
