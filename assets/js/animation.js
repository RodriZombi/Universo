/*Buscamos los elementos a animar*/
const info1 = document.getElementById('info1')
const info2 = document.getElementById("info2")
const info3 = document.getElementById("info3")
const info4 = document.getElementById("info4")
const info5 = document.getElementById("info5")
const info6 = document.getElementById("info6")
const info7 = document.getElementById("info7")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")




/*Cargamos los elementos y le agregamos la clase para hacer la animacion*/
const loadInfo = (inputs, observer)=>{
    inputs.forEach((input)=>{
        if(input.isIntersecting){
            input.target.classList.add('visible')
        }else{

        }
    })
}

/*Observer para esperar la seccion completa*/
const observer = new IntersectionObserver(loadInfo,{
    root: null,
    rootMargin: '0px',
    threshold: 1.0
})

/*Observer para esperar la mitad del elemento para mostrarse*/
const observer2 = new IntersectionObserver(loadInfo,{
    root:null,
    rootMargin: '0px',
    threshold: 0.5
})



observer.observe(info1)
observer2.observe(info2)
observer.observe(info3)
observer.observe(info4)
observer.observe(info6)
observer.observe(info7)
observer2.observe(info5)
observer2.observe(img1)
observer2.observe(img2)
observer2.observe(img3)
observer2.observe(img4)
observer2.observe(img5)