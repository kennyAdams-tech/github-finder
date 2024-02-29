 class Github {
    constructor() {
        this.client_id = '5ad07387ce87b9f77170';
        this.client_secret = 'd3f598d40663ea7330bc679c5f5cc97c5e1c1d14';
        // to get 5 repos
        this.repos_count = 5;
        // to get the latest repos
        this.repos_sort = 'created: asc';

    };

    async getUser(user) {

       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

       const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

       const profileData = await profileResponse.json();

       const reposData = await reposResponse.json();

       return {
          profile : profileData,
          repos: reposData
       };

    };

 };