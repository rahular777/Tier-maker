let currentDraggedItem;
const tierinput = document.getElementById('tier')

const itemContainers=document.getElementsByClassName('item-container');

const submitbtn = document.getElementById('submit')

const tierlists=document.querySelectorAll('tier-list');

const imageForm = document.getElementById('image-form')
console.log(imageForm)

for(const itemContainer of itemContainers){
  setUpItemConatinerForDrag(itemContainer);
}

tierlists.forEach(setUpDropZoneInTierListItem);

imageForm.addEventListener('submit',(event)=>{
  console.log("form is submitted");
  event.preventDefault();
  const imageItemInput=document.getElementById('image-item')
  const imageurl=imageItemInput.value;
  console.log(imageurl)
  if(imageItemInput.value==''){
    alert('please enter a valid image url....')
    return;
  }
  createTierListItem(imageurl);
  imageItemInput.value='';
  
})


submitbtn.addEventListener('click', (event) => {
  console.log("take the event")
  const target = event.target;
  console.log(target);
  console.log(event)
  event.preventDefault();
  if (tierinput.value == '') {
    alert('please enter the tier name...!')
    return
  }

  console.log(tierinput.value)
  createTierList(tierinput.value);
  tierinput.value = '';

})
function createTierList(tierListName) {
  const newtierlist = document.createElement('div');
  newtierlist.classList.add('tier-list');

  const heading = document.createElement('div');
  heading.classList.add('heading')
  heading.textContent = tierListName;

  const newtierListItems= document.createElement('div');
  newtierListItems.classList.add('tier-list-items')

  newtierlist.appendChild(heading)
  newtierlist.appendChild(newtierListItems)

  setUpDropZoneInTierListItem(newtierListItems);

  const tiersection = document.getElementById('tier-list-section')
  tiersection.appendChild(newtierlist)

}

function createTierListItem(imageurl){
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('item-container');
  imageDiv.setAttribute('draggable','true')

  setUpItemConatinerForDrag(imageDiv);

  const img=document.createElement('img');
  img.src=imageurl;
  imageDiv.appendChild(img)

  const nontiersection=document.getElementById('non-tier-section');
  nontiersection.appendChild(imageDiv)




}

function setUpItemConatinerForDrag(itemContainer){
  itemContainer.addEventListener('dragstart',(event)=>{
    currentDraggedItem=event.target.parentNode;
    console.log(event.target.parentNode)
    console.log("started dragging")
  });

  itemContainer.addEventListener('dblclick',(event)=>{
    const parentNode=event.target.parentNode;
    const nontiersection=document.getElementById('non-tier-section');
    nontiersection.appendChild(parentNode);

  })

}



function setUpDropZoneInTierListItem(tierListItem){
  tierListItem.addEventListener('drop',function (event){
    event.preventDefault();
  })
  tierListItem.addEventListener('dragover',(event)=>{
    // console.log("dragged over a drop zone");
    event.target.appendChild(currentDraggedItem);
    console.log("event coming",event);
    if(this == currentDraggedItem.parentNode){
      this.appendChild(currentDraggedItem)
    }
  })
  

}

