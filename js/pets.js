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
        const div = document.createElement("div");
        div.classList = "btn btn-outline rounded-full px-8 bg-amber-50 border-amber-200 text-amber-800";
        div.innerHTML = `
        <span class="mr-2 flex items-center gap-2"><img class="h-6 w-6" src="${category.category_icon}">${category.category}</span>
        `
        categoryContainer.append(div)
        
    })
}
// load all pets 
const loadAllPets = () => {

    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
        .catch(err => console.log(err))
}
const displayAllPets = (pets) => {
 
    const container = document.getElementById("pet-container");
    pets.forEach(pet => {
        const {image,pet_name,breed,date_of_birth,gender,price,pet_details,} = pet; 
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="card bg-base-100 shadow-md">
            <figure class="h-48">
                <img src="${image}" alt="Pet 1" class="w-full h-full object-cover">
            </figure>
            <div class="card-body p-4">
                <h2 class="card-title text-lg">Mister Tartosh</h2>
                <p${pet_name}</p>
                <p>${breed}</p>
                <p>${date_of_birth}</p>
                <p>${gender}</p>
                <p>${price}</p>
                <div class="card-actions">
                 <button class="like-btn btn btn-sm btn-ghost">
                        <i class="fa-regular fa-thumbs-up"></i><span class="like-count"></span>
                    </button>
                    <button class="btn btn-sm btn-primary">Adopt</button>
                    <button class="btn btn-sm btn-ghost">Details</button>
                </div>
            </div>
        </div>
        `
        container.append(div)
    })
}
loadAllCategory();
loadAllPets();