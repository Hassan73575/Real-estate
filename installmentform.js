async function downloadword(event) {

    event.preventDefault();

    const {
        Document,
        Packer,
        Paragraph,
        TextRun,
        ImageRun
    } = docx;   // ✅ IMPORTANT FIX

    const image = document.getElementById("image").files[0];

    const cnic = document.getElementById("cnic").value;
    const phone = document.getElementById("phone").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const totalprice = document.getElementById("totalPrice").value;
    const installmentplan = document.getElementById("plan").value;
    const monthlyinstallment = document.getElementById("installment").value;
    const date = document.getElementById("date").value;

    let imageBuffer = null;

    if (image) {
        imageBuffer = await image.arrayBuffer();
    }

    let children = [];

    if (imageBuffer) {
        children.push(
            new Paragraph({
                children: [
                    new ImageRun({
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
        new Paragraph({
            children: [
                new TextRun({
                    text: "Real Estate Installment Form",
                    bold: true,
                    size: 32
                })
            ]
        }),

        new Paragraph(" "),
        new Paragraph("Full Name: " + fullname),
        new Paragraph("CNIC: " + cnic),
        new Paragraph("Phone: " + phone),
        new Paragraph("Email: " + email),
        new Paragraph("Total Price: " + totalprice),
        new Paragraph("Installment Plan: " + installmentplan),
        new Paragraph("Monthly Installment: " + monthlyinstallment),
        new Paragraph("Date: " + date)
    );

    const doc = new Document({
        sections: [{
            children: children
        }]
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Installment_Form.docx");

    alert("Downloaded successfully ✅");
}