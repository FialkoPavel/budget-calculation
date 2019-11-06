'use strict';
let startBtn = document.querySelector('#start'),
	budgetValue =document.querySelector('.budget-value'),
	daybudgetValue =document.querySelector('.daybudget-value'),
	levelValue =document.querySelector('.level-value'),
	optionalexpensesValue =document.querySelector('.optionalexpenses-value'),
	incomeValue =document.querySelector('.income-value'),
	monthsavingsValue =document.querySelector('.monthsavings-value'),
	yearsavingsValue=document.querySelector('.yearsavings-value'),
	expensesItem =document.querySelectorAll('.expenses-item'),
	expensesItemBtn = document.querySelectorAll('button')[0],
	optionalexpensesBtn= document.querySelectorAll('button')[1],
	excountBudgetBtn = document.querySelectorAll('button')[2],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');


let money, time;

function start() {
	money = +prompt ("Ваш бюджет на месяц?", "");
	time = prompt ("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt ("Ваш бюджет на месяц?", "");
	}

}
start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
				b = prompt ("Во сколько обойдется?", "");

			if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
				appData.expenses[a] = b;
			} else {
				i--;
			}

		};
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log ("Это минимальный уровень достатка!");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log ("Это средний уровень достатка!");
		} else if (appData.moneyPerDay > 2000) {
			console.log ("Это высокий уровень достатка!");
		} else {
			console.log ("Ошибочка...!");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

			appData.monthIncome = save/100/12*percent;
			alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
		}
	},
	chooseOptExpens: function () {
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},
	chooseIncome: function () {
		let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
		appData.income = items.split(', ');
		appData.income.push = prompt('Может что-то еще?');
		appData.income.sort();
	}
};

