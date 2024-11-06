const firebaseConfig = {
  //   copy your firebase config informations
  
      apiKey: "AIzaSyDntcG9wUMmUYtAcR311BuV0EUX8IfGAdI",
      authDomain: "test-19ffd.firebaseapp.com",
      databaseURL: "https://test-19ffd-default-rtdb.firebaseio.com",
      projectId: "test-19ffd",
      storageBucket: "test-19ffd.firebasestorage.app",
      messagingSenderId: "167661887349",
      appId: "1:167661887349:web:f777f0c2bc4f9de97dbd3c"
    
};

firebase.initializeApp(firebaseConfig);

// Reference your Firebase database for orders
var ordersDB = firebase.database().ref("orders");

// Attach event listener to order form submission
document.getElementById("orderForm").addEventListener("submit", submitOrderForm);

function submitOrderForm(e) {
  e.preventDefault();

  // Get values from the order form fields
  var customerName = getElementVal("customerName");
  var customerEmail = getElementVal("customerEmail");
  var customerPhone = getElementVal("customerPhone");
  var orderDetails = getElementVal("orderDetails");

  // Save order details to Firebase
  saveOrder(customerName, customerEmail, customerPhone, orderDetails);

  // Show alert to confirm order submission
  document.querySelector(".alert").style.display = "block";

  // Hide the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form after submission
  document.getElementById("orderForm").reset();
}

// Function to save order to Firebase
const saveOrder = (customerName, customerEmail, customerPhone, orderDetails) => {
  var newOrderRef = ordersDB.push();

  newOrderRef.set({
    name: customerName,
    email: customerEmail,
    phone: customerPhone,
    details: orderDetails,
    orderTime: new Date().toLocaleString()
  });
};

// Helper function to get the value of form elements by ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
};