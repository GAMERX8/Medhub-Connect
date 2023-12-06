<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<script>
    import { auth } from "../../firebase";
    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { user, isLoggedIn } from "../../stores";
    import { goto } from "$app/navigation";
  
    const login = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        $user = res.user;
        $isLoggedIn = true;
        goto("/");
      } catch (error) {
        console.error(error);
      }
    };
  </script>
<style>
* {
        margin: 0;
        padding: 0;
        outline: 0;

    }
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 200px;
    background-image: url("https://raw.githubusercontent.com/m-mourouh/Animated-Login-Form-Using-Only-HTML-CSS-Sign-In-Form-Design/2058e85e9f34b0978bc343491f1cdfe8edb21479/Login_form/bg1.svg");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Montserrat',sans-serif;
}
.container1 {
    position: relative;
    width: 400px;
    padding: 30px 50px;
    background: #FFF;
    text-align: center;
    border-radius: 100% 0% 0% 0% / 55% 0% 0% 0%;
}
.container1::after {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    width: 100%;
    height: 420px;
    background-image: url('https://raw.githubusercontent.com/m-mourouh/Animated-Login-Form-Using-Only-HTML-CSS-Sign-In-Form-Design/master/Login_form/bg2.png');
    background-position: top;
    background-size: cover;
    z-index: -11;
}
.container1 .rocket {
    width: 300px;
    position: absolute;
    top: -120px;
    right: -9%;
    animation: animate 1s ease infinite alternate;
    transition: all 0.3s ease;
}
.container1 .text {
    margin: 30px 0 5px 0;
}

.container1 .text p {
    font-size: 1.5rem;
    color: #ff14b1;
}
.container1 .form .animated-input {
    display: flex;
    flex-direction: column;
}

.btn {
    background: #04aa0c;
    color:#fff;
    border-radius: 10px;
    padding: 10px 25px;
    text-decoration: none;
    margin: 4px 2px;
}
.btn:hover{
    background: #0bca14;
}

@keyframes animate {
    0% {top: -120px;}
    100% {top: -130px;}
}
</style>
<body>
      <div class="container1">
        <img src="https://raw.githubusercontent.com/m-mourouh/Animated-Login-Form-Using-Only-HTML-CSS-Sign-In-Form-Design/master/Login_form/rocket.png" alt="rocket" class="rocket">
        <div class="text">
          <h3>WELCOME TO</h3>
          <p>MEDHUB CONNECT</p>
        </div>
        <form class="form">
          <div class="animated-input">
            <h3>Para acceder a nuestra plataforma, dale click aquí abajo.</h3>
          </div>
        </form>
        <button on:click={login} class="btn">
          <i class=""></i> Sign In With Google
        </button>
      </div>
</body>
     
