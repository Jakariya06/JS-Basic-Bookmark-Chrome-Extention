const inputBtn = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById("ul-el")
const leadFromLS = JSON.parse(localStorage.getItem('myLeads'))
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')



if(leadFromLS) {
    myLeads = leadFromLS
    render(myLeads)
}

function render(leads) {
    let listItems = ''
    for (i=0; i < leads.length; i++){
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" WAY DOM 1
    
        // const li = document.createElement("li")
        // li.textContent += myLeads[i]    DOM WAY II
        // ulEl.append(li)
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `<li> <a href=" ${leads[i]}" target="_blank"> ${leads[i]} </a> </li>`
    }
    
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener('dblclick', ()=> {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', ()=> {

       myLeads.push(inputEl.value)
       inputEl.value = ''
       localStorage.setItem('myLeads', JSON.stringify(myLeads))
       render(myLeads)

    })

tabBtn.addEventListener('click', ()=> {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
   
})

    


