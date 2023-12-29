<script>
	export let userData;
</script>
<footer class="footer">
    <div class="footer-1"> 
      {#if userData!=null}
      <p><img src="pin1.svg" alt="location">{userData.location}</p>
      <p><img src="pin2.svg" alt="twitter"> {userData.twitter_username} </p>
      {:else}
      <p><img src="pin1.svg" alt="location"> San Francisco</p>
      <p><img src="pin2.svg" alt="twitter"> Not Available</p>
      {/if}
      
     
    </div>
    <div class="footer-2">
        <p><img src="pin3.svg" alt="link"> https://github.blog</p>
        <p><img src="pin4.svg" alt="office"> @github</p>
    </div>
  </footer>

  <style>
    footer{
    margin-left: 10rem;
    width: 30rem;
    color: #4B6A9B;
font-family: Space Mono;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.footer-1 , .footer-2{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
  </style>