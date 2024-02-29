class UI {
    constructor() {
      this.profile = document.getElementById('profile')
    };

    getProfile(user) {
         this.profile.innerHTML = `
         <div class="card card-body mb-3 mt-4">
         <div class="row">
             <div class="col-md-3">
                 <img src="${user.avatar_url}" class="img-fluid" alt="...">
                 <a class="btn btn-primary mt-3 d-grid" type="button" target="_blank" href="${user.html_url}">View Profile</a>
             </div>
   
             <div class="col-md-9 mt-3">
             <span class="badge py-2 text-bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge py-2 text-bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge py-2 text-bg-success"> Followers: ${user.followers}</span>
            <span class="badge py-2 mt-2 text-bg-dark">Following: ${user.following}</span>
            <ul class="list-group mt-4">
               <li class="list-group-item">Name: ${user.name}</li>
               <li class="list-group-item">Company: ${user.company}</li>
               <li class="list-group-item">Website/Blog: ${user.blog}</li>
               <li class="list-group-item">Location: ${user.location}</li>
               <li class="list-group-item">Member Since: ${user.created_at}</li>
           </ul>
            </div>
   
         </div>
     </div>
   
     <h3 class="page-heading mb-3">Latest Repos</h3>
     <div id="repos">
     </div>
         
         
         `
    };

    showRepos(repos) {
        let output = '';

        repos.forEach( function (repo) {
            output += `
            <div class="card card-body mb-3">

                <div class="row">

                    <div class="col-md-6">
                      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>

                    <div class="col-md-6">
                        <span class="badge py-2 text-bg-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge py-2 text-bg-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge py-2 text-bg-success"> Forks: ${repo.forks_count}</span>
                    </div>

                </div> 

            </div>

            `
        });

        document.getElementById('repos').innerHTML = output;
      
    }

    clearProfile() {
        this.profile.innerHTML = ''
    };

    showAlert(msg, className) {
        // remove multiple alert
        this.currentAlert()
         // Create div tag
         const div = document.createElement('div');
         div.className = className;
         div.appendChild(document.createTextNode(msg));
         //get parent
         const container = document.querySelector('.search-container');
         // get search
         const search = document.querySelector('.search');
         container.insertBefore(div, search)
         // setimeout to 3s
         setTimeout(() => {
            this.currentAlert()
         }, 3000)
    };

    currentAlert() {
        const currentAlert = document.querySelector('.alert')
         if (currentAlert) {
            currentAlert.remove()
         }
    };



};








