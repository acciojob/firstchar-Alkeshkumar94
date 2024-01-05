function firstChar(text) {
  // your code here
	text=text.trim();
	if(!text)
	{
		return '';
	}
	else
	{
		return text[0];
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
