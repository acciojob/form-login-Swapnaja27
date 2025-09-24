function getFormvalue() {
    //Write your code here
    const firstName = document.querySelector("input[name='fname']").value.trim();
    const lastName = document.querySelector("input[name='lname']").value.trim();
    
      // Concatenate full name
      const fullName = `${firstName} ${lastName}`.trim();

      // Show alert
      alert(fullName);
}