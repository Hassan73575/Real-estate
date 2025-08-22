async function linkwaladata() {
    const res = await fetch("luxury.json");
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
                        <th>Bedrooms</th>
                        <td>${data.properties[keys].features.bedrooms}</td>
                    </tr>
                    <tr>
                        <th>Bathrooms</th>
                        <td>${data.properties[keys].features.bathrooms}</td>
                    </tr>
                    <tr>
                        <th>furnished</th>
                        <td>${data.properties[keys].features.furnished}</td>
                    </tr>
                    <tr>
                        <th>Parking</th>
                        <td>${data.properties[keys].features.parking}</td>
                    </tr>
                    <tr>
                        <th>Lawn</th>
                        <td>${data.properties[keys].features.lawn}</td>
                    </tr>
                    <tr>
                        <th>Swimming Pool</th>
                        <td>${data.properties[keys].features.swimming_pool}</td>
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