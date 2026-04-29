function downloadword(){

    const image = document.getElementById("image").files[0];
    const cnic = document.getElementById("cnic").value;
    const phone = document.getElementById("phone").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const totalprice = document.getElementById("totalprice").value;
    const installmentplan = document.getElementById("plan").value;
    const monthlyinstallment = document.getElementById("installment").value;
    const date = document.getElementById("date").value;

    let imagebuffer = null;

    if(image){
        imagebuffer = await image.arrayBuffer();
    }


    const doc = new window.docx.Document({
        sections: [{
            children: [

                // ✅ IMAGE (agar user ne upload ki ho)
                ...(imageBuffer ? [
                    new window.docx.Paragraph({
                        children: [
                            new window.docx.ImageRun({
                                data: imageBuffer,
                                transformation: {
                                    width: 120,
                                    height: 120,
                                },
                            }),
                        ],
                    })
                ] : []),

                new window.docx.Paragraph({
                    children: [
                        new window.docx.TextRun({
                            text: "Real Estate Installment Form",
                            bold: true,
                            size: 32
                        })
                    ]
                }),

                new window.docx.Paragraph(" "),
                new window.docx.Paragraph("Full Name: " + fullname),
                new window.docx.Paragraph("CNIC: " + cnic),
                new window.docx.Paragraph("Phone: " + phone),
                new window.docx.Paragraph("Email: " + email),
                new window.docx.Paragraph("Total Price: " + totalprice),
                new window.docx.Paragraph("Installment Plan: " + installmentplan),
                new window.docx.Paragraph("Monthly Installment: " + monthlyinstallment),
                new window.docx.Paragraph("Date: " + date),

            ],
        }],
    });

    window.docx.Packer.toBlob(doc).then(blob => {
        saveAs(blob, "Installment_Form.docx");
    });
}