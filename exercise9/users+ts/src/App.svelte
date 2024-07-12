<script lang="ts">
  import type {User} from '../components/type'
  import Main from '../components/main.svelte'
  import Footer from '../components/footer.svelte';
  import Status from '../components/status.svelte';
	  let username = '';
	  let userData:User|null=null;
	  async function func() {
		try{
       const headers =new Headers();
       headers.set("Accept" ,"application/vnd.github+json"),
       headers.set("Authorization",` Bearer ${import.meta.env.VITE_TOKEN} `),
       headers.set("X-GitHub-Api-Version", "2022-11-28");
		const response = await fetch( `https://api.github.com/users/${username}` , {
      headers,
    } );
		const jsonn = await response.json();
    userData ={
      name :jsonn.name ,
    login :jsonn.login,
    location:jsonn.location,
    following:jsonn.following,
    followers:jsonn.followers,
    twitter_username:jsonn.twitter_username,
    public_repos:jsonn.public_repos,
    url:jsonn.url,
    avatar_url:jsonn.avatar_url,
    html_url:jsonn.html_url,
    created_at:jsonn.created_at,
    bio:jsonn.bio,
    }
		if (!response.ok) {
		  await Promise.reject(new Error(`Error 37 reject`));
		}
	  userData = jsonn;
	  } catch (error) {
	  otherfunc()
	}
	
	}
	function otherfunc() {
	  console.log('error catch');
	}
</script>
<body>
  
<header>
	<div class="header">
	<h2 class="devfinder">devfinder</h2>
	<h3 class="dark">DARK 
	  <img class="moon" src="moon.svg" alt="moon">
	</h3>
	</div>

	<form on:submit|preventDefault={func} class="search">
	  <div class="search-2">
	<img  src="Shape 2.svg" alt="shape">
	  <input bind:value={username} class="search-input" type="text"  placeholder="Search GitHub username…"/>
	</div>
	   <button class="search-btn" type="submit">Search</button>
</form>

  </header>
  <main class="main">
  <Main {userData}/>
  <Status {userData}/>
  <Footer {userData}/>
  <main/>
</body>
<style>
  body{
    margin-left: 20rem;
    margin-top: 5rem;
   background: #F6F8FF; 
}
.main{

margin-top: 1.5rem;
width: 45.625rem;
height: 26.1875rem;
flex-shrink: 0;
border-radius: 0.9375rem;
background: #FEFEFE;

box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
}
  .header{
    display: inline-flex;
   justify-content: center;
   align-items: center;
   gap: 32.75rem;
   }

   .devfinder{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 32.75rem;
   color: #222731;
   font-family: 'Space Mono', monospace;
   font-size: 1.625rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   }
   .dark{
   
   color: #697C9A;
   text-align: right;
   font-family: 'Space Mono', monospace;
   font-size: 0.8125rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: 0.15625rem;
   }
   .moon{
   padding-left: 1rem;
   }
   
   
   .search{
       display: flex;
       justify-content: center;
       align-items: center;
       gap: 17.5rem;
       width: 45.62rem;
   border-radius: 0.9375rem;
   background: #FEFEFE;
   box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
   }
   
   
   .search-input{
       border: none;
   margin: 1.38rem;
   color: #4B6A9B;
   font-family: Space Mono;
   font-size: 1.125rem;
   font-style: normal;
   font-weight: 400;
   line-height: 1.5625rem; /* 138.889% */
   }
   .search-btn{
   width: 6.625rem;
   height: 3.125rem;
   flex-shrink: 0;
   border-radius: 0.625rem;
   background: #0079FF;
   
   color: #FFF;
   font-family: Space Mono;
   font-size: 1rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   }
  </style>
