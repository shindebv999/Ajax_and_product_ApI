function validate(val) {
    const v1 = document.getElementById("ProductId");
    const v2 = document.getElementById("productName");
    const v3 = document.getElementById("ProductQuantity");
    const v4 = document.getElementById("productPrice");

    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let flag4 = true;

 
    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            flag2 = true;
        }
    }
    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            flag4 = true;
        }
    }
  
    flag = flag1 && flag2 && flag3 && flag4 ;

    return flag;
}


$(document).ready(function() {
    $("#addProductBtn").click(function(e) {
        e.preventDefault();

        // Collect form data
        var productData = {
            productId: $("#ProductId").val(),
            productName: $("#productName").val(),
            productQuantity: $("#ProductQuantity").val(),
            productPrice: $("#productPrice").val()
        };

        // Send a POST request to your Spring Boot backend
        $.ajax({
            type: "POST",
            url: 'http://localhost:8081/product', // Update this URL to your actual endpoint
            contentType: "application/json",
            data: JSON.stringify(productData),
            success: function(data) {
                alert("Product added successfully!");
                // Clear the form or perform any other actions
            },
            error: function(error) {
                console.error("Error adding product: " + JSON.stringify(error));
            }
        });
    });
});








