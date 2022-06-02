const arr = [
  {
    background: "./images/img1.jpg",
    title: "Other",
    post: "FEATURED . 43,153",
  },
  {
    background: "./images/img2.jpg",
    title: "Aww",
    post: "765",
  },
  {
    background: "./images/img3.jpg",
    title: "Memes",
    post: "212,384",
  },
  {
    background: "./images/img4.jpg",
    title: "Gaming",
    post: "534",
  },
  {
    background: "./images/img5.jpg",
    title: "Funny",
    post: "765,149",
  },
  {
    background: "./images/img6.jpg",
    title: "Awesome",
    post: "575,432",
  },
  {
    background: "./images/img7.jpg",
    title: "Staff Picks",
    post: "299,054",
  },
  {
    background: "./images/img8.jpg",
    title: "Staff Picks",
    post: "2,700,425",
  },
  {
    background: "./images/img9.jpg",
    title: "Oc",
    post: "753,622",
  },
];

let parent = document.getElementById("tag-container");
// let parent = document.getElementById("posts");
function displayData() {
  arr.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tags");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "image-tag");
    let img = document.createElement("img");
    img.src = ele.background;
    imgDiv.append(img);
    let h4 = document.createElement("h4");
    h4.innerText = ele.title;
    h4.setAttribute("class", "tag-title");
    let h3 = document.createElement("h5");
    h3.innerText = ele.post + " Post";
    h3.setAttribute("class", "tag-post");
    div.append(imgDiv, h4, h3);
    parent.append(div);
  });
}
displayData();



function showPosts(data,par) {
  data.map((e) => {
    let postBox = document.createElement("div");
    postBox.setAttribute("class", "post-box");

    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class","image")
    img.src = e.urls.small;
    imgdiv.append(img);


    let desc = document.createElement("div");
    desc.setAttribute("class", "desc");

    let title = document.createElement("p");
    title.innerText = e.alt_description;
    title.setAttribute("class", "title");

    let downloads = document.createElement("div");
    downloads.setAttribute("class", "downloads");
    downloads.innerHTML = `<i class="fa-solid fa-heart" style="color:red"></i> ${e.likes} `;

    let comment = document.createElement("span");
    comment.setAttribute("class", "comment");
    comment.innerHTML = `<i class="fa-solid fa-message" style="color:black"></i> ${2}`;
    let watch = document.createElement("span");
    watch.setAttribute("class", "watch");
    watch.innerHTML = `<i class="fa-solid fa-eye" style="color:black"></i> ${3}`;
    // desc.append( downloads, comment, watch);
    desc.append( downloads);
    postBox.append(imgdiv, title, desc);
    par.append(postBox)
  });
}

let getdata = async () => {
  let par = document.getElementById("posts");
  par.innerHTML=""
  let Input = document.getElementById("inputbox").value;
  console.log(Input)
  if (Input === "") {
    Input = "pet"
  }
  let data =
  await fetch(`https://api.unsplash.com/search/photos/?query=${Input}&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME
  `);
  data = await data.json()
  console.log(data.results);
  showPosts(data.results,par);
};
getdata();

// function keyEnter(e) {
//   console.log(e)
//   // if (key === "Enter") {
//   //   getdata();
//   // }
// }
