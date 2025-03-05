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
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="card bg-base-100 shadow-md">
            <figure class="h-48">
                <img src="${pet.image}" alt="Pet 1" class="w-full h-full object-cover">
            </figure>
            <div class="card-body p-4">
                <h2 class="card-title text-lg">Mister Tartosh</h2>
                <p>Breed: Golden Retriever</p>
                <p>Birth: 2024</p>
                <p>Gender: Female</p>
                <p>Price: $199</p>
                <div class="card-actions">
                    <button class="btn btn-sm btn-primary">Adopt</button>
                    <button class="btn btn-sm btn-ghost">Details</button>
                </div>
            </div>
        </div>
        `
        container.append(div)
    })
}
loadAllPets();