function getFormvalue() {
    //Write your code here
    const firstName = document.querySelector("input[name='fname']").value.trim();
      const lastName = document.querySelector("input[name='lname']").value.trim();

      // Handle empty fields
      if (!firstName && !lastName) {
        alert("Please enter both First and Last Name!");
        return false;
      }

      // Concatenate full name
      const fullName = `${firstName} ${lastName}`.trim();

      // Show alert
      alert(fullName);

      // Prevent form from reloading the page
      return false;
}
document.getElementByTag("button").addEventListener("click",()=>{
	getFormvalue();
})
