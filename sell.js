async function linkwaladata() {
    const res = await fetch("sell.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
        <div class="card">
                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80" alt="Buy House" class="card-img">
                <i class="fas fa-home card-icon"></i>
                <h2>${data.properties[keys].title}</h2>
                <p>${data.properties[keys].description}</p>
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
                        <th>Bedrooms</th>
                        <td>${data.properties[keys].bedrooms}</td>
                    </tr>
                    <tr>
                        <th>Bathrooms</th>
                        <td>${data.properties[keys].bathrooms}</td>
                    </tr>
                    <tr>
                        <th>Seller</th>
                        <td>${data.properties[keys].seller.name}</td>
                    </tr>
                    <tr>
                        <th>number</th>
                        <td>${data.properties[keys].seller.contact_number}</td>
                    </tr>
                    <tr>
                        <th>features</th>
                        <td>${data.properties[keys].features.join(", ")}</td>
                    </tr>
                </table>
                <a href="buyhouse.html" class="card-btn">Explore Buying</a>
            </div>
       `};
};
linkwaladata();