// load all category button 
const loadAllCategory = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayAllCategory(data.categories))
      }
// display all category button 
const displayAllCategory = (categories) => {

    categories.forEach(category => {
        const categoryContainer = document.getElementById("category-container");
        const span = document.createElement("span");
        span.classList = "btn btn-outline rounded-full px-8 bg-amber-50 border-amber-200 text-amber-800";
        span.innerHTML = `
        <img class="h-6 w-6" src="${category.category_icon}">${category.category}
        `
        span.onclick = () => loadCategory(category.category)
        categoryContainer.append(span)

    })
}
// load category handler
const loadCategory = (category) => {
    // console.log(`Loading category: ${categoryName}`);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => handelCategory(data.data))
}
const handelCategory = (pets) => {
    const petContainer = document.getElementById("pet-container");
    petContainer.innerHTML = '';

        if(pets.length > 0){
            petContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-3");
            displayAllPets(pets);
        }else{
            petContainer.classList.remove("grid", "grid-cols-1", "md:grid-cols-3");
            petContainer.innerHTML = `
            <div class="text-center">
                <img class="mx-auto" src="../images/error.webp" />
                <h2 class="text-2xl font-medium">No Information Available</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
            </div>
            
            `
        } 
        // document.getElementById("spinner").style.display = "block"

        // setTimeout(function () {
        //     displayAllPets(pets);
        // }, 2000)
  
};

// / load all pets  
const loadAllPets = () => {

    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
        .catch(err => console.log(err))
        
 
}
const displayAllPets = (pets) => {
//  document.getElementById("spinner").style.display = "none"
    const petContainer = document.getElementById("pet-container");
   
        pets.forEach(pet => {
            const { image, pet_name, breed, date_of_birth,petId, gender, price, pet_details, } = pet;
            const div = document.createElement("div");
            div.innerHTML = `
            
              <div class="card bg-base-100 shadow-md">
                <figure class="h-48">
                    <img src="${image}" alt="Pet 1" class="w-full h-full object-cover">
                </figure>
                <div class="card-body p-4">
                    <h2 class="card-title text-lg">Mister Tartosh</h2>
                    <p${pet_name ? pet_name : "Not Available"}</p>
                    <p>${breed ? breed : "Not Available"}</p>
                    <p>
                    ${date_of_birth ? date_of_birth : "Not Available"}
                    </p>
    
                    <p>${gender ? gender : "Not Available"}</p>
                    <p>${price ? price : "Not Available"}</p>
                    <div class="card-actions">
                     <button onclick="likeHandler('${image}')" class="like-btn btn btn-sm btn-ghost">
                            <i class="fa-regular fa-thumbs-up"></i><span class="like-count"></span>
                        </button>
                        <button class="btn btn-sm btn-primary">Adopt</button>
                        <button onClick="handleDetails('${petId}')" class="btn btn-sm btn-ghost">Details</button>
                    </div>
                </div>
            </div>
            `
            petContainer.append(div)
        })
 
    
}
//  like handler
// Like handler function
const likeHandler = (image) => {
    const likedImgContainer = document.getElementById("like-img");

    const img = document.createElement("img");
    img.src = image;
    img.classList = "rounded";

    likedImgContainer.appendChild(img);
};
const handleDetails = async(petId) => {
    const res =  await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await res.json();
   const {breed,date_of_birth,price,image,gender,pet_details,vaccinated_status,pet_name} = data.petData;

    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
<dialog id="my_modal_1" class="modal">
  <div class="modal-box w-full max-w-lg">
    <div class="relative">
      <img id="pet-image" src="${image}" alt="Pet Image" class="w-full rounded-lg shadow-md">
    </div>
    
    <h2 id="pet-name" class="text-2xl font-bold mt-4">${pet_name}</h2>
    
    <div class="grid grid-cols-2 gap-4 my-4">
      <p><strong>Breed:</strong> <span id="pet-breed">${breed}</span></p>
      <p><strong>Birth:</strong> <span id="pet-birth">${date_of_birth}</span></p>
      <p><strong>Gender:</strong> <span id="pet-gender">${gender}</span></p>
      <p><strong>Price:</strong> $<span id="pet-price">${price}</span></p>
      <p><strong>Vaccination:</strong> <span id="pet-vaccinated">${vaccinated_status}</span></p>
    </div>

    <div class="bg-gray-100 p-3 rounded-lg">
      <h3 class="font-semibold">Details Information</h3>
      <p id="pet-details" class="text-sm text-gray-600">${pet_details}</p>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-outline w-full">Cancel</button>
      </form>
    </div>
  </div>
</dialog>
    `
    my_modal_1.showModal();

}
loadAllCategory();
loadAllPets();