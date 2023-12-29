
<script>
  export let userData;
  function handleClick(){
	{userData.url}
  }
</script>


	
	<section class="main-2">
		{#if userData !=null}
		<img  class="main-img" src={userData.avatar_url} alt="cat">
		{:else}
		<img class="main-img" src="Bitmap.png"  alt="cat">
		{/if}
	{#if userData!=null}
	<h1 class="main-octo">{userData.name}<p class="main-octocat"> <a href={userData.html_url} target="_blank">{userData.login}</a>  <p class="main-bio">{userData.bio}</p></h1> 
	<p class="main-data"> Joined {userData.created_at}</p>
	{:else}
	<h1 class="main-octo">The Octocat <p class="main-octocat">@octocat <p class="main-bio">This profile has no bio</p></h1> 
	<p class="main-data"> Joined 25 Jan 2011</p>
	{/if} 
	
	 
		</section>

	  

<style>




.main-2{
    display: flex;
    
}
.main-img{
    border-radius: 7.3125rem;
     margin: 3rem 2.31rem 0 3rem;
      width: 7.3125rem;
     height: 7.3125rem;
     flex-shrink: 0;;
}
.main-octo{
    color: #2B3442;
font-family: 'Space Mono';
font-size: 1.625rem;
font-style: normal;
font-weight: 700;
line-height: normal;
    margin-top: 2.78rem;
    margin-right: 6rem;
    margin-bottom: 0.23rem;
}
.main-octocat{
    color: #0079FF;
    font-family: Space Mono;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.main-data{
    margin-top: 3.25rem;
    margin-right: 3rem;
    color: #697C9A;
text-align: right;
font-family: Space Mono;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.main-bio{
    width: 13rem;
color: #4B6A9B;
font-family: Space Mono;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 166.667% */
}

</style> 
