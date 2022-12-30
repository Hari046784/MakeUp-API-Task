// Fetch the data
async function getUserdata() {
    let apiurl = `https://makeup-api.herokuapp.com/api/v1/products.json/`;
    try {
      let response = await fetch(apiurl);
      return await response.json();
    } catch (err) {
      console.log('we have a error',err);
    }
}


// Get the HTML Element

async function rendering() {
  let users = await getUserdata();
    //   console.log(users);
  let html = "";
  users.forEach((user) => {
    let htmlElements = `<div class="user">
                            <h2 class="brandname">${user.brand}</h2> 
                            <img class="imagestyle" src="${user.image_link}">  
                            <h5 class="brand-name">${user.name}</h5> 
                            <p class ="brand-price"><b>Price: $ ${user.price}</b></p>
                            <p class = "brand-description">${user.description}</p>
                        </div>`;
        html += htmlElements;
    });


  //Add all the element in html into class container to display the body

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

rendering();


