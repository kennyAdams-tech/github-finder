//Init github
const github = new Github;

//Init ui
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser')
// event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        // make http call
        github.getUser(userText)
           .then(data => {
              if (data.profile.message === 'Not Found') {
                  // alert
                  ui.showAlert('User not found', 'alert alert-danger')
              } else {
                 // get profile
                 ui.getProfile(data.profile)
                 ui.showRepos(data.repos)
              };
              console.log(data)
           });
    }else {
       // clear profile
       ui.clearProfile()
    }

    
});