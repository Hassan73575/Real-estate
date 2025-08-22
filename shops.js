async function linkwaladata() {
    const res = await fetch("shops.json");
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
                <a href="booking-form.html" class="card-btn">Book-house</a>
                <a href="installments.html" class="card-btn">Installment</a>
        </div>
       `};
};
linkwaladata();