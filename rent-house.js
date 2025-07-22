async function linkwaladata() {
    const res = await fetch("rent-house.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
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

                <i class="fas fa-home card-icon"></i>
                <h2>${data.properties[keys].title}</h2>
                <p>${data.properties[keys].type}</p>
                <table class="table table-bordered table-striped table-hover table-responsive table-condensed">
                    <tr>
                        <th>Rent Per month</th>
                        <td>${data.properties[keys].currency},${data.properties[keys].rent_per_month}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${data.properties[keys].location.city}, ${data.properties[keys].location.address}</td>
                    </tr>
                    <tr>
                        <th>Bedrooms</th>
                        <td>${data.properties[keys].features.bedrooms}</td>
                    </tr>
                    <tr>
                        <th>Bathrooms</th>
                        <td>${data.properties[keys].features.bathrooms}</td>
                    </tr>
                    <tr>
                        <th>balcony</th>
                        <td>${data.properties[keys].features.balcony}</td>
                    </tr>
                    <tr>
                        <th>furnished</th>
                        <td>${data.properties[keys].features.furnished}</td>
                    </tr>
                    <tr>
                        <th>Floor</th>
                        <td>${data.properties[keys].features.floor}</td>
                    </tr>
                    <tr>
                        <th>available</th>
                        <td>${data.properties[keys].available}</td>
                    </tr>
                </table>
                <a href="buyhouse.html" class="card-btn">Explore Buying</a>
            </div>
       `};
};
linkwaladata();