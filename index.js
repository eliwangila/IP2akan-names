//  validation of date and month
function invlid(day, month)
{
  if ( day < 1 || day > 31) { 
    alert("Day entered is Invalid");
    day.focus();
    return false;
  }
  else if ( month < 1 || month > 12 || month == 2 && day > 29 ) {
    alert("Month entered is invalid");
    month.focus();
    return false;
  }
  else
  {
    return true;
  }
}