async function linkwaladata() {
    const res = await fetch("rentshop.json");
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
                        <td>${data.properties[keys].currency},${data.properties[keys].price}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${data.properties[keys].location.city}, ${data.properties[keys].location.address}</td>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <td>${data.properties[keys].size}</td>
                    </tr>
                    <tr>
                        <th>Electricity</th>
                        <td>${data.properties[keys].features.electricity}</td>
                    </tr>
                    <tr>
                        <th>Water</th>
                        <td>${data.properties[keys].features.water}</td>
                    </tr>
                    <tr>
                        <th>Furnished</th>
                        <td>${data.properties[keys].features.furnished}</td>
                    </tr>
                    <tr>
                        <th>available</th>
                        <td>${data.properties[keys].features.available}</td>
                    </tr>
                </table>
                <a href="booking-form.html" class="card-btn">Book</a>
            </div>
       `};
};
linkwaladata();