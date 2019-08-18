var objKeys;
var objValue;
var allKeys=Object.keys(localStorage);
objKeys=allKeys.filter(value=> value.startsWith('Sdev'));
function add_developer(){
    var checkKeys,num
    do{
        num=Math.ceil((Math.random()*100));
        checkKeys=objKeys.map(x=>parseInt(x.slice(3)));
    }while(checkKeys.includes(num))
    let name=document.getElementById('first_name').value;
    let email=document.getElementById('email').value;
    let designation=document.getElementById('designation').value;
    let github=document.getElementById('github').value;
    let developerkey='Sdev'+num;
    let devdetails={name,email,designation,github,developerkey};
    console.log(devdetails)
    let devDetailstring=JSON.stringify(devdetails);
    localStorage.setItem('Sdev'+num,devDetailstring);
}read()

function read()
{
    objValue=objKeys.map(obj => JSON.parse(localStorage.getItem(obj)));
    console.log(objValue);
    displaydeveloper();

}
function displaydeveloper(mydev=objValue)
{
    for(let eachDeveloper of mydev)
        {
            createDeveloperCard(eachDeveloper);
        }
}
function createDeveloperCard(eachDeveloper)
{
    var developerSection=document.getElementById('developer_section');
    var div1st=document.createElement('div');
    var div2nd=document.createElement('div');
    var div3rd=document.createElement('div');
    var div4th=document.createElement('div');
    var span1st=document.createElement('span');
    var p1=document.createElement('p');
    var h61=document.createElement('h6');
    var span2nd=document.createElement('span');
    var div5th=document.createElement('div');
    var a1=document.createElement('a');
    var button1=document.createElement('button');
    var a2=document.createElement('a');
    developerSection.appendChild(div1st);
    div1st.appendChild(div2nd);
    div2nd.appendChild(div3rd);
    div3rd.appendChild(div4th);
    div4th.appendChild(span1st);
    div4th.appendChild(p1);
    div4th.appendChild(h61);
    //h61.appendChild(span2nd);
    div3rd.appendChild(div5th);
    div5th.appendChild(a1);
    div5th.appendChild(button1);
    div5th.appendChild(a2);
    div1st.classList.add('row');
    div2nd.classList.add('col','s12','m6','l4');
    div3rd.classList.add('card','white','darken-1');
    div4th.classList.add('card-content','black-text');
    span1st.classList.add('card-title');
    div5th.classList.add('card-action');
    button1.classList.add('btn','btn-small','waves-effect','blue','right')
    a2.classList.add('btn','btn-small','red','right','modal-trigger');
    a1.setAttribute('href',eachDeveloper.github);
    a2.setAttribute('href','#modal1');
    span1st.textContent=eachDeveloper.name;
    p1.textContent=eachDeveloper.designation;
    h61.innerHTML=`Email: <span>${eachDeveloper.email}</span>`;
    button1.textContent='delete';
    button1.addEventListener('click',function(){
        delete_Dev(eachDeveloper);
    })
    a2.textContent='update';
    a2.addEventListener('click',function(){
        displayDeveloper(eachDeveloper);
    })
    a1.textContent='Github'
}
function delete_Dev(objDeveloper)
{
    console.log(objDeveloper.developerkey);
    localStorage.removeItem(objDeveloper.developerkey);
    window.location.reload();
    
}
function displayDeveloper(objDeveloper)
{   
    updatingDeveloper=objDeveloper;
    document.getElementById('ufirst_name').value=objDeveloper.name;
    document.getElementById('uemail').value=objDeveloper.email;
    document.getElementById('udesignation').value=objDeveloper.designation;
    document.getElementById('ugithub').value=objDeveloper.github;
    
}
function updateDeveloper()
{
    //console.log(document.getElementById('ufirst_name').value);
    updatingDeveloper.name= document.getElementById('ufirst_name').value
    updatingDeveloper.email=document.getElementById('uemail').value
    updatingDeveloper.designation=document.getElementById('udesignation').value;
    updatingDeveloper.github=document.getElementById('ugithub').value
    const upd_deve=JSON.stringify(updatingDeveloper);
    localStorage.setItem(updatingDeveloper.developerkey,upd_deve);
}