function changeColor()
{
  const hex = '0123456789ABCDEF';
  let color = '#';

  for(let i=0;i<6;i++)
  {
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let v;
function startCL()
{
  if(!v)
  {

    v = setInterval(ch,1000);
  }
  function ch(){
  document.body.style.backgroundColor = changeColor();
  }
}
function stopCL()
{
  clearInterval(v);
  document.body.style.backgroundColor='#212121';
  v=null;
}


document.querySelector('#start').addEventListener('click',startCL)

document.querySelector('#stop').addEventListener('click',stopCL);