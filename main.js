var correctAnswers = ["A","B","C","B"];
var form = document.querySelector(".quiz-form");
var result = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,]

    userAnswers.forEach((answer,index)=>{
        if (answer===correctAnswers[index]){
            score+=25;

        }
    });
    scrollTo(0,0);
    result.querySelector("span").textContent = (score + "%");
    result.classList.remove('d-none');
    
})


