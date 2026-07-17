    const form = document.getElementById("rsvp-form");
    
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Stop page reload
      const status = document.getElementById("status");
      const data = new FormData(event.target);
      
      // Use a service like Formspree or FormSubmit
      const response = await fetch("https://formspree.io/f/your-id-here", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = "Thanks for your RSVP!";
        form.reset();
      } else {
        status.innerHTML = "Oops! There was a problem.";
      }
    });
    ```

### Option 2: Using Google Sheets as a Database
If you want to save guest names to a spreadsheet without PHP:
1.  Create a **Google Sheet**.
2.  Use a "Google Apps Script" (which uses JavaScript) to turn that sheet into an API.
3.  Use `fetch()` in your site's JavaScript to send the form data to that script URL.

### Why you can't use *only* JavaScript
Pure JavaScript in the browser cannot send an email directly (for security reasons). It always needs a "middleman" (an API or a service) to do the actual delivery. PHP usually acts as that middleman; in this case, a service like Formspree or Squarespace's own Form Block replaces the need for PHP.

**Would you like me to help you write a specific script for one of these services, or would you prefer to try the built-in Squarespace Form Block?**
