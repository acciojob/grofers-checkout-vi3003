const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices=document.querySelectorAll(".price");
let totalPrice=0;
  for(let i=0;i<prices.length;i++){
    totalPrice+=Number(prices[i].innerHTML);
  }
  console.log(totalPrice);
  let row=document.createElement("tr");
//   let td1=document.createElement("td");
//   td1.textContent="Total Price";
  let td2=document.createElement("td");
  td2.textContent=totalPrice;
  td2.setAttribute("id","ans");
  row.append(td2);
  document.querySelector("table").append(row);
};

getSumBtn.addEventListener("click", getSum);

