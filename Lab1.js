let result;
// Function to check datatypes
const dataTypes = (passedArgument) => 
{
	//Checks strings
	if(typeof(passedArgument) ===  'string')
	{
		result = passedArgument.length;
		return result;
	}

	//Checks null
	else if(passedArgument === null)
	{
		result = "no value";
		return result;
	}
	//Checks undefined values
	else if(passedArgument === undefined)
	{
		result = "no value";
		return result;
	}

	//Checks boolean - false
	else if(passedArgument === false)
	{
		return false;
	}

	//Checks boolean - true
	else if(passedArgument === true)
	{
		return true;
	}

	//Checks Integers (Whole numbers)
	else if(Number.isInteger(passedArgument))
	{
		//Checks whole numbers against 100 as a reference
		if(passedArgument < 100)
		{
			result = "less than 100";
			return result;
		}

		if(passedArgument === 100)
		{
			result = "equal to 100";
			return result;
		}
		

		else if(passedArgument > 100)
		{
			result = "more than 100";
			return result;
		}

		else
		{
			result = "not an integer";
		}
	}

	//Checks functions
	else if (typeof(passedArgument) ===  'function') 
	{
			passedArgument;
	}
	

	//Checks Array
	else if (passedArgument.constructor === Array) 
	{
			if(passedArgument != null)
			{
				for(counter = 0; counter <= passedArgument.length; counter++)
				{
					if(passedArgument[counter] >= 2)
					{
						return passedArgument[2];
					}
					else
					{
						result = "undefined";
						return result;
					}
				}
			}
	}
}

module.exports = {dataTypes}