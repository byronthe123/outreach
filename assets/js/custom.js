$(document).ready(function(){

    const validEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (message.length > 10 && validEmail(email)) {
            emailjs.sendForm('gmail', 'template_uEfgdvcM', this)
            .then(response => {
                 $('#name').val('');
                 $('#email').val('');
                 $('#message').val('');
                 alert('Thank you!')
            }).catch(error => {

            });
        } else {
            alert('Please enter your email and message before submitting');
        }

    });

});