// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit2-05-PWA/sw.js", {
    scope: "/ICS20-Unit2-05-PWA/",
  })
}

/**
 * This function calculates the user pay and tax deductions
 */
function myButtonClicked() {
  // input
  const hours = parseFloat(document.getElementById("hours-worked").value)
  const hourlyPay = parseFloat(document.getElementById("hourly-pay").value)
  const TAX_RATE = 0.18

  //process

  const grossPay = hours * hourlyPay
  const deductions = TAX_RATE * grossPay
  const afterDeductions = grossPay - TAX_RATE * grossPay

  // output
  document.getElementById(
    "grossPay"
  ).innerHTML = `Your pay will be: $ ${grossPay.toFixed(2)}`
  document.getElementById(
    "deductions"
  ).innerHTML = `The government will take: $ ${deductions.toFixed(2)}`
  document.getElementById(
    "afterDeductions"
  ).innerHTML = `Your pay after deductions is: $ ${afterDeductions.toFixed(2)}`
}
