async function linkwaladata() {
    const res = await fetch("shared.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
        <div class="card">
                <div class="map">
                    ${data.properties[keys].location.map_embed}
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
                        <td>${data.properties[keys].location.city}, ${data.properties[keys].location.area}</td>
                    </tr>
                    <tr>
                        <th>Room Size</th>
                        <td>${data.properties[keys].room_size_sqft} sqft</td>
                    </tr>
                    <tr>
                        <th>Floor</th>
                        <td>${data.properties[keys].floor}</td>
                    </tr>
                    <tr>
                        <th>Beds</th>
                        <td>${data.properties[keys].beds}</td>
                    </tr>
                    <tr>
                        <th>Electricity</th>
                        <td>${data.properties[keys].utilities.electric}</td>
                    </tr>
                    <tr>
                        <th>Water</th>
                        <td>${data.properties[keys].utilities.water}</td>
                    </tr>
                    <tr>
                        <th>Internet</th>
                        <td>${data.properties[keys].utilities.internet}</td>
                    </tr>
                    <tr>
                        <th>Washroom type</th>
                        <td>${data.properties[keys].washroom_type}</td>
                    </tr>
                    <tr>
                        <th>details</th>
                        <td>${data.properties[keys].utilities.details}</td>
                    </tr>
                    <tr>
                        <th>Features</th>
                        <td>${data.properties[keys].features}</td>
                    </tr>
                </table>
                <a href="buyhouse.html" class="card-btn">Explore Buying</a>
            </div>
       `};
};
linkwaladata();