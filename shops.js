async function linkwaladata() {
    const res = await fetch("shops.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
        <div class="card">
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
                        <td>${data.properties[keys].location.city}, ${data.properties[keys].location.address}</td>
                    </tr>
                    <tr>
                        <th>Floor</th>
                        <td>${data.properties[keys].features.floor_level}</td>
                    </tr>
                    <tr>
                        <th>Electric meter</th>
                        <td>${data.properties[keys].features.electricity_meter}</td>
                    </tr>
                    <tr>
                        <th>Washroom</th>
                        <td>${data.properties[keys].features.washroom}</td>
                    </tr>
                    <tr>
                        <th>Parking</th>
                        <td>${data.properties[keys].features.parking}</td>
                    </tr>
                    <tr>
                        <th>Area sqft</th>
                        <td>${data.properties[keys].features.area_sqft}</td>
                    </tr>
                    <tr>
                        <th>Availabe</th>
                        <td>${data.properties[keys].available}</td>
                    </tr>
                    <tr>
                        <th>Extra Features</th>
                        <td>${data.properties[keys].extra_features}</td>
                    </tr>
                   
                </table>
                <a href="buyhouse.html" class="card-btn">Explore Buying</a>
            </div>
       `};
};
linkwaladata();