 const expensesList = document.getElementById('expenses');
 let totalExp=0
 function addExpense() {
            const expenseName = prompt('Enter expense name:');
            const expenseAmount = parseFloat(prompt('Enter expense amount:'));
            totalExp=totalExp+expenseAmount;
            if (expenseName && !isNaN(expenseAmount)) {
                const listItem = document.createElement('li');
                listItem.className = 'expense';
                
                listItem.classList.add("expense_item");
                // listItem.textContent = `${expenseName}_______________₹${expenseAmount.toFixed(2)}`;
                listItem.innerHTML = `
                    <span>${expenseName}</span>
                    <span>₹ ${expenseAmount.toFixed(2)}</span>`;
                expensesList.appendChild(listItem);
            } else {
                alert('Invalid input. Please enter valid expense details.');
            }
        }
        function totalExpense(){
            console.log(totalExp);
            let labelElement = document.getElementById("total_label");
            document.getElementById("total_label").style.visibility="visible"
            labelElement.innerText = "TOTAL = ₹ "+totalExp;
        }