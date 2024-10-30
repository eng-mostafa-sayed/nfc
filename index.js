const container = document.querySelector(".container");
const RegisterLink = document.querySelector(".SignUpLink");
const LoginLink = document.querySelector(".SignInLink");

RegisterLink.addEventListener("click", () => {
    container.classList.add("active");
});
LoginLink.addEventListener("click", () => {
    container.classList.remove("active");
});