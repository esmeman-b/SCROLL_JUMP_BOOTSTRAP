const email = document.getElementById('email_input')
const form = document.getElementById('form')

const errorElement = document.getElementById('error_validation_text')

function validateEmail(em) {
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return email_regex.test(em)
}

form.addEventListener('submit', (e) => {
  let messages = []

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  } else {
    if (validateEmail(email.value)) {
      //messages.push('Email validated ! Message Sent !')
    } else {
      messages.push('Invalid email address entered')

    }
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(", ")
  }

})
