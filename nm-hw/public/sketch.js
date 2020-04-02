// let data =
// [{"mood":"happy","entry1":"pretty good","entry2":"cats","entry3":"seeing my dog","entry4":"        yfhg","timestamp":1585793976370,"_id":"WSWNgJMUZ6qXyDlR"},
// {"mood":"happy","entry1":"","entry2":"","entry3":"","entry4":"        ","timestamp":1585794473298,"_id":"ewgKxT10P8VaxLfD"}];

let data = [];

let howMany= 10;
let numOfMoods= 3;
let formattedData = [];

function loadData() {

fetch('/data') 
.then((respond) => {
  return response.json();
})
.then((incoming) => {
  console.log(incoming);
  data = incoming.thedata;

  for(let i = 0; i < data.length; i++) {
    print("hello");
    let current = data[i];
    print("on" + current.mood);
    let foundMood = false;
     
    for (let j = 0; j < formattedData.length; j++) {
      if (current.mood == formattedData[j].mood) {
         formattedData[j].touches++;
         print("found " + formattedData[j].touches);
         foundMood = true;
     }
   }
   if (foundMood == false) {
     formattedData.push({"mood": current.mood, "touches": 1});
     print("not found");
   }
  }
  
  print(formattedData);

 });
}



function setup() {
  createCanvas(400, 400);
  print(data)
  loadData();
 }

function draw() {
  background(255);
  noStroke();
  
  textSize(32);
  text('Mood Visualization', 60, 30);
  fill(0, 102, 153);
  
   textSize(25);
  text('How Often I Feel A Certain Way', 25, 60);
  fill(0, 0, 153);
  
   textSize(20);
  text('happy', 10, 180);
  
  textSize(20);
  text('neutral', 120, 180);
  
  textSize(20);
  text('bad', 280, 180);
  
  for(let i = 0; i < formattedData.length; i++) {
    rect(i*100,10,howMany * formattedData[i].touches, howMany*formattedData[i].touches)
  }
  fill(200,10,20);

}