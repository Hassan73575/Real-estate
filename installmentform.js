async function downloadword(event) {

    event.preventDefault(); // ✅ page reload rokna

    const image = document.getElementById("image").files[0];
    const cnic = document.getElementById("cnic").value;
    const phone = document.getElementById("phone").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const totalprice = document.getElementById("totalPrice").value; // ✅ fixed
    const installmentplan = document.getElementById("plan").value;
    const monthlyinstallment = document.getElementById("installment").value;
    const date = document.getElementById("date").value;

    let imageBuffer = null;

    if (image) {
        imageBuffer = await image.arrayBuffer();
    }

    let children = [];

    // ✅ Image add
    if (imageBuffer) {
        children.push(
            new window.docx.Paragraph({
                children: [
                    new window.docx.ImageRun({
                        data: imageBuffer,
                        transformation: {
                            width: 120,
                            height: 120
                        }
                    })
                ]
            })
        );
    }

    children.push(
        new window.docx.Paragraph({
            children: [
                new window.docx.TextRun({
                    text: "Real Estate Installment Form",
                    bold: true,
                    size: 32
                })
            ]
        })
    );

    children.push(
        new window.docx.Paragraph(" "),
        new window.docx.Paragraph("Full Name: " + fullname),
        new window.docx.Paragraph("CNIC: " + cnic),
        new window.docx.Paragraph("Phone: " + phone),
        new window.docx.Paragraph("Email: " + email),
        new window.docx.Paragraph("Total Price: " + totalprice),
        new window.docx.Paragraph("Installment Plan: " + installmentplan),
        new window.docx.Paragraph("Monthly Installment: " + monthlyinstallment),
        new window.docx.Paragraph("Date: " + date)
    );

    const doc = new window.docx.Document({
        sections: [{
            children: children
        }]
    });

    const blob = await window.docx.Packer.toBlob(doc);
    saveAs(blob, "Installment_Form.docx");

    alert("Installment form downloaded ✅");
}