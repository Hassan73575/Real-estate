async function linkwaladata() {
    const res = await fetch("plots.json");
    const data = await res.json();
    for (let keys in data.properties) {
      document.getElementById("print").innerHTML += `
        <div class="card">
                <div class="map">
                    ${data.properties[keys].location.map_embed}
                </div>s
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
                        <th>Plot size</th>
                        <td>${data.properties[keys].features.plot_size}</td>
                    </tr>
                    <tr>
                        <th>Corner</th>
                        <td>${data.properties[keys].features.corner_plot}</td>
                    </tr>
                    <tr>
                        <th>Road width</th>
                        <td>${data.properties[keys].features.road_width_ft}</td>
                    </tr>
                    <tr>
                    <th>Category</th>
                    <td>${data.properties[keys].features.category}</td>
                    </tr>
                    <tr>
                    <th>Gated community</th>
                    <td>${data.properties[keys].features.gated_community}</td>
                    <tr>
                        <th>Possession-status</th>
                        <td>${data.properties[keys].features.possession_status}</td>
                    </tr>
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