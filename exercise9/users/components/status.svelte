<script>
    export let userData;
</script>

<section class="status-all">
    <div class="status">
      {#if userData}
      <p class="status-repos">Repos <br><b class="num">{userData.public_repos}</b></p>
      <p class="status-followers">Followers <br><b class="num">{userData.followers}</b></p>
      <p class="status-following">Following <br><b class="num">{userData.following}</b></p>
      {:else}
      <p class="status-repos">Repos <br><b class="num">8</b></p>
      <p class="status-followers">Followers <br><b class="num">3938</b></p>
      <p class="status-following">Following <br><b class="num">9</b></p>
      {/if}
      
    </div>
  </section>

  <style>
    .status-all{
    margin-top: 2rem;
margin-left: 12rem;
width: 30rem;
height: 5.3125rem;
flex-shrink: 0;
border-radius: 0.625rem;
background: #F6F8FF;

}
.status{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.status-repos, .status-followers, .status-following{
 color: #4B6A9B;
font-family: Space Mono;
font-size: 0.8125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.num{
color: #2B3442;
font-family: Space Mono;
font-size: 1.375rem;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
  </style>