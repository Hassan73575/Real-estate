async function linkwaladata() {
    const res = await fetch("office.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
        <div class="card">
        <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="img/open-house-1163353_1920.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80" alt="Buy House" class="card-img">
                <i class="fas fa-home card-icon"></i>
                <h2>${data.properties[keys].title}</h2>
                <p>${data.properties[keys].type}</p>
                <table class="table table-bordered table-striped table-hover table-responsive table-condensed">
                    <tr>
                        <th>Price</th>
                        <td>${data.properties[keys].currency},${data.properties[keys].price}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${data.properties[keys].location.city}, ${data.properties[keys].location.area}</td>
                    </tr>
                    <tr>
                        <th>Floor</th>
                        <td>${data.properties[keys].floor}</td>
                    </tr>
                    <tr>
                        <th>Electric meter</th>
                        <td>${data.properties[keys].meters.electric}</td>
                    </tr>
                    <tr>
                        <th>Gas meter</th>
                        <td>${data.properties[keys].meters.gas}</td>
                    </tr>
                    <tr>
                        <th>Water meter</th>
                        <td>${data.properties[keys].meters.water}</td>
                    </tr>
                    <tr>
                        <th>Water meter</th>
                        <td>${data.properties[keys].meters.water}</td>
                    </tr>
                    <tr>
                        <th>Washroom</th>
                        <td>${data.properties[keys].washrooms}</td>
                    </tr>
                    <tr>
                        <th>Area sqft</th>
                        <td>${data.properties[keys].area_sqft}</td>
                    </tr>
                    <tr>
                        <th>Availabe</th>
                        <td>${data.properties[keys].available}</td>
                    </tr>
                    <tr>
                        <th>Extra Features</th>
                        <td>${data.properties[keys].features}</td>
                    </tr>
                   
                </table>
                <a href="buyhouse.html" class="card-btn">Explore Buying</a>
            </div>
       `};
};
linkwaladata();