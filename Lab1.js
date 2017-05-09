let result;
// Function to check datatypes
const dataTypes = (passedArgument) => 
{
	if(typeof(passedArgument) ===  'string')
	{
		result = passedArgument.length;
		return result;
	}
	else if(passedArgument === null)
	{
		result = "no value";
		return result;
	}

	else if(passedArgument === false)
	{
		return false;
	}

	else if(passedArgument === true)
	{
		return true;
	}

	else if(Number.isInteger(passedArgument))
	{
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

		else
		{
			result = "more than 100";
			return result;
		}
	}

	else if (typeof(passedArgument) ===  'function') 
	{
			passedArgument;
	}
	
	else if (passedArgument.constructor === Array) 
	{
			if(passedArgument != null)
			{
				for(counter = 0; counter <= passedArgument.length; counter++)
				{
					if(passedArgument[counter] > 2)
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