# Here's some Documentation about the API

You can get the data from various queries. You can search both Countries and Sales by various search methods.

### /sales/weaponCategory/AC

#### GET method

##### Description:

Here you are searching for all sales by the weapon Category. Some examples are ["AC", "AV"].
An example URL is: http://localhost:3001/sales/weaponCategory/AC

### /sales/seller/code/CHN

#### GET

##### Description:

Here you are searching for all sales from a specific country selling the weapons using the 3 digit ISO code as your selector. You can find a the ISO Codes under the countries alpha3Code.

### /sales/seller/China

#### GET

##### Description:

Here you are searching for all sales from a specific country using the full name of the country.

### /sales/buyer/China

#### GET

##### Description:

Here you are searching for all purchases from a specific country using the full name of the country.

### /countries/

#### GET

##### Description:

Here you are searching for all countries and returning a JSON.

### /sales/buyer/code/IRQ

#### GET

##### Description:

Here you are searching for all sales from the specific country buying the weapons using the 3 digit ISO code as your selector. You can find a the ISO Codes under the countries alpha3Code.

### /countries/region/Asia

#### GET

##### Description:

Here you are searching for all countries that are from a specific region of the world.
