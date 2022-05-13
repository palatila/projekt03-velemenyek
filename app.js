const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis molestiae, sint fuga exercitationem possimus quasi quia qui dolorum fugit optio laborum dolor distinctio ea illo tempore. Vero nemo maiores aliquid sint. Praesentium dolorum voluptas dolore accusamus, reprehenderit dolor cumque. Facilis velit earum commodi quasi, praesentium minima voluptates consequatur possimus modi asperiores, placeat voluptas alias, pariatur facere adipisci et sit aliquid similique laboriosam. Quae, vero! Magni aperiam numquam aliquam ut ipsam perferendis vel, beatae dolore.",
    },
    {
        name: "Nagy Zsanet",
        job: "Marketing Manager",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis molestiae, sint fuga exercitationem possimus quasi quia qui dolorum fugit optio laborum dolor distinctio ea illo tempore. Vero nemo maiores aliquid sint. Praesentium dolorum voluptas dolore accusamus, reprehenderit dolor cumque. Facilis velit earum commodi quasi, praesentium minima voluptates consequatur possimus modi asperiores, placeat voluptas alias, pariatur facere adipisci et sit aliquid similique laboriosam. ",
    },
    {
        name: "Törk Bálint",
        job: "Marketing Manager",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis molestiae, sint fuga exercitationem possimus quasi quia qui dolorum fugit optio laborum dolor distinctio ea illo tempore. Vero nemo maiores aliquid sint. Praesentium dolorum voluptas dolore accusamus, reprehenderit dolor cumque. Facilis velit earum commodi quasi, praesentium minima voluptates consequatur possimus modi asperiores, placeat voluptas alias, pariatur facere adipisci et sit aliquid similique laboriosam. ",
    }


]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

}

nextBtn.addEventListener("click", ()=> {

    current++;

    if(current > reviews.length - 1){

        current = 0;
    }
    showPerson(current);
})

prevBtn.addEventListener("click", ()=> {

    current--;

    if(current < 0){

        current = reviews.length - 1;
    }
    showPerson(current);
})
