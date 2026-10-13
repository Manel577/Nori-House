//Frequently questions
console.log("js is working");
const questions = document.querySelectorAll(".question");
questions.forEach((question)  => {
    question.addEventListener("click",() => {
        const currentitem = question.parentElement;
        document
        .querySelectorAll(".itm")
        .forEach((item) => {
            if(item !== currentitem){
               
               item.classList.remove("open");
            }
        });
        currentitem.classList.toggle("open");
    });

    
});
 
