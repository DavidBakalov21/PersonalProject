function navigatePage(page) {
    window.location.href = page;
}



const home=`
<div>home</div>
`

let root=document.getElementById()

const routes={
    home:'/',
    about:'/about',
    contacts:'/contacts'
}

function NAvItemPage(page){
window.history.pushState({}, page,window.location.origin+page)
}
function handlerForHistory(){
    window.onpopstate
}